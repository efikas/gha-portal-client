<template>
    <div>
        <div class="row">
            <div class="col-5">
                <label>Subject</label>
                <select v-model="subject.subject_id"
                        @blur="$v.subject.subject_id.$touch()"
                        class="form-control" size="1">
                    <option value="">Select Subject</option>
                    <option v-for="_subject in objectToArray(data.subjects)" :value="_subject.id">
                        {{ _subject.subject }}
                    </option>
                </select>
            </div>
            <div class="col-5">
                <label>Teacher</label>
                <select v-model="subject.teacher_id"
                        @blur="$v.subject.teacher_id.$touch()"
                        class="form-control" size="1">
                    <option value="">Select Staff</option>
                    <option v-for="_staff in staffs" :value="_staff.id">
                        {{ `${_staff.first_name} ${_staff.middle_name} ${_staff.last_name}` }}
                    </option>
                </select>
            </div>
            <div class="col-2">
                <label>&nbsp;&nbsp;&nbsp;&nbsp;</label>
                <button class="btn btn-success" style="margin-top: 30px"
                   :disabled="$v.subject.$invalid" @click.prevent="addSubject">Add</button>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12 mb-3">
                <div class="table-responsive mt-3">
                    <table id="mytable" class="table table-bordred table-striped">
                        <thead>
                        <tr class="">
                            <th style="width: 4%">&nbsp;</th>
                            <th>Subject</th>
                            <th>Teacher</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-if="editSubjectIndex.length > 0" v-for="(_subject, index) in class_subjects">
                            <td>{{ index + 1 }}</td>
                            <td class="">{{ _subject.subject.subject }}</td>

                            <td class="">
                                <span v-if="editSubjectIndex[index].status == 0">
                                    {{ `${_subject.staff.first_name} ${_subject.staff.middle_name} ${_subject.staff.last_name}` }}
                                </span>

                                <select class="form-control" size="1" v-model="editSubjectIndex[index].staff_id" v-else>
                                    <option v-for="_staff in staffs" :value="_staff.id">
                                        {{ `${_staff.first_name} ${_staff.middle_name} ${_staff.last_name}` }}
                                    </option>
                                </select>
                            </td>

                            <td class="">
                                <a class="btn btn-success" @click="enableSubject(_subject.id)"
                                   v-if="_subject.disabled == 1  | disabledSubjects.indexOf(_subject.id) > -1 && enabledSubjects.indexOf(_subject.id) < 0">
                                    enable
                                </a>
                                <div v-else>
                                    <a class="btn btn-success" v-if="editSubjectIndex[index].status == 0" @click="editSubject(_subject.id, index)">
                                        edit
                                    </a>
                                    <a class="btn btn-success" v-else @click="revertSubject(_subject.id, index)">
                                        revert
                                    </a>
                                    <a class="btn btn-danger" @click="disableSubject(_subject.id)">
                                        disable
                                    </a>
                                </div>

                            </td>
                        </tr>
                        <tr v-else></tr>
                        <tr v-for="(_subject, index) in addedSubjects">
                            <td class="text-primary font-weight-bold">{{ index + 1 }}</td>
                            <td class="text-primary font-weight-bold">{{ getSubjects(_subject.subject_id) }}</td>
                            <td class="text-primary font-weight-bold">{{ getStaffs(_subject.teacher_id) }}</td>
                            <td class="">
                                <a class="btn btn-danger" @click="removeSubject(index)">
                                    Remove
                                </a>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div>
            <button class="btn btn-primary btn-lg btn-school pull-right"
                    :disabled="isSubmitable"
                    @click="submitSubjects">Submit</button>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';
    import Normalizer from '../../../../mixins/normalizer';
    import Toaster from '../../../../mixins/toaster';
    import StafflistMixins from '../../../admin/staff/mixins/stafflist_mixins';
    import {required,minLength} from 'vuelidate/lib/validators';

    export default {
        name: "add-subject",
        props: ['classId'],
        mixins: [Normalizer, StafflistMixins, Toaster],
        data() {
            return {
                subject: {
                    subject_id: '',
                    teacher_id: '',
                },
                addedSubjects: [],
                enabledSubjects: [],
                disabledSubjects: [],
                editSubjectIndex: [],
            }
        },
        validations: {
            subject: {
                subject_id: {required},
                teacher_id: { required, minLength: minLength(1) },
            }
        },
        computed: {
            ...mapGetters(['data', 'class_subjects']),
            isSubmitable: function(){
                return (this.addedSubjects.length > 0 || this.enabledSubjects.length > 0
                    || this.disabledSubjects.length > 0 || this.staffUpdate().length > 0) ? false : true;
            }
        },
        methods: {
            addSubject: function() {
                let _filterAddedSubject = this.addedSubjects.filter(subject => subject.subject_id == this.subject.subject_id);

                let _filterDbSubject = this.class_subjects.filter(subject => subject.subject_id == this.subject.subject_id)

                if(_filterDbSubject.length < 1 && _filterAddedSubject.length < 1) {
                    this.addedSubjects.push(
                        {
                            subject_id: this.subject.subject_id,
                            teacher_id: this.subject.teacher_id,
                        }
                    );
                }

                this.subject.subject_id = "";
                this.subject.teacher_id = "";
            },

            removeSubject(index){
                this.addedSubjects.splice(index, 1);
            },

            getSubjects(id){
                if(typeof this.data.subjects == 'object'){
                    return this.data.subjects[id].subject
                }
            },
            getStaffs(id){
                if(typeof this.staffs == 'object'){
                    let _staff = this.staffs.filter(staff => staff.id == id)[0];
                    return `${_staff.first_name} ${_staff.middle_name} ${_staff.last_name}`;
                }
                return null
            },

            editSubject: function(subject_id, index){
                this.$set(
                    this.editSubjectIndex,
                    index,
                    {
                        ...this.editSubjectIndex[index],
                        status: 1
                    }
                );
            },
            revertSubject: function(subject_id, index){
                this.$set(
                    this.editSubjectIndex,
                    index,
                    {
                        ...this.editSubjectIndex[index],
                        status: 0
                    }
                );
            },
            disableSubject: function(subject_id){
                /* If the subject id is in the enabled array,
                * that means the subject has just been enabled but has not been saved
                * so remove it from the array
                * ELSE
                * The subject has been enabled in the database and the subject id needed to be
                * added to be disabled subject to disable it in the database                 *
                */
                if(this.enabledSubjects.indexOf(subject_id) > -1) {
                    let index = this.enabledSubjects.indexOf(subject_id);
                    this.enabledSubjects.splice(index, 1);
                }
                else {
                    this.disabledSubjects.push(subject_id);
                }
            },
            enableSubject: function(subject_id){
                /* If the subject id is in the disabled array,
                 * that means the subject has just been disabled but has not been saved
                 * so remove it from the array
                 * ELSE
                 * The subject has been disabled in the database and the subject id needed to be
                 * added to be enabled subjects to enable it in the database                 *
                 */
                if(this.disabledSubjects.indexOf(subject_id) > -1) {
                    let index = this.disabledSubjects.indexOf(subject_id);
                    this.disabledSubjects.splice(index, 1);
                }
                else {
                    this.enabledSubjects.push(subject_id);
                }
            },
            staffUpdate: function(){
                //get updated staff
                return this.editSubjectIndex.filter(subject => {
                    return (subject.status == 1) && (subject.staff_id != subject.staff_id_old);
                })
            },
            submitSubjects: function(){
                if (this.classId) {
                    let form = {
                        class_id: this.classId, // class id gotten through props
                        subjects: {
                            added: this.addedSubjects,
                            enabled: this.enabledSubjects,
                            disabled: this.disabledSubjects,
                            staffUpdate: this.staffUpdate(),
                        }
                    };
                    this.$store.dispatch('storeSubjects', form).then((response) => {
                        if(response == 'success') {
                            this.successMsg('Record updated!', 'Success');
                            location.reload();
                        }
                        else {
                            this.errorMsg('Error saving data!', 'Error');
                        }
                    }).catch(() => {
                        this.errorMsg('Error saving data!', 'Error');
                        //this.isSubmitable = true;
                    });
                }
            }
        },
        created() {
            this.$store.dispatch('classSubjects', this.classId).then((response)=>{
                for(let i = 0; i < this.class_subjects.length; i++){
                    this.editSubjectIndex.push({
                        status: 0,
                        id: this.class_subjects[i].id,
                        staff_id_old: this.class_subjects[i].staff_id, // use to check if the staff of a subject is changed
                        staff_id: this.class_subjects[i].staff_id,
                    })
                }
                console.log(this.class_subjects[0])
            })
        }
    }
</script>

<style scoped>

</style>
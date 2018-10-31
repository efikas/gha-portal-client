<template>
    <div>
        <div class="row">
            <div class="col-5">
                <label>Subject</label>
                <select v-model="data.section" class="form-control" size="1">
                    <option value="">Select Subject
                    </option>
                    <option v-for="_subject in objectToArray(data.subjects)" :value="_subject.id">
                        {{ _subject.subject }}
                    </option>
                </select>
            </div>
            <div class="col-5">
                <label>Teacher</label>
                <select v-model="data.term" class="form-control" size="1">
                    <option value="">Select Staff</option>
                    <option v-for="_staff in staffs" :value="_staff.id">
                        {{ `${_staff.first_name} ${_staff.middle_name} ${_staff.last_name}` }}
                    </option>
                </select>
            </div>
            <div class="col-2">
                <a class="btn btn-success" style="margin-top: 30px" @click="addSubject()">Add</a>
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
                        <tr v-for="(_subject, index) in class_subjects">
                            <td>{{ index + 1 }}</td>
                            <td class="">{{ _subject.subject_name }}</td>
                            <td class="">{{ _subject.teacher_name }}</td>
                        </tr>
                        <!--<tr v-for="(_subject, index) in addedSubject">-->
                            <!--<td class="text-primary font-weight-bold">{{ index + 1 }}</td>-->
                            <!--<td class="text-primary font-weight-bold">{{ _subject }}</td>-->
                            <!--<td class="">-->
                                <!--<a class="btn btn-danger" @click="removeSubject(index)">-->
                                    <!--Remove-->
                                <!--</a>-->
                            <!--</td>-->
                        <!--</tr>-->
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div>
            <button class="btn btn-primary btn-lg btn-school pull-right">Submit</button>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';
    import Normalizer from '../../../../mixins/normalizer';
    import StafflistMixins from '../../../admin/staff/mixins/stafflist_mixins';
    import {required,minLength} from 'vuelidate/lib/validators';

    export default {
        name: "add-subject",
        mixins: [Normalizer, StafflistMixins],
        data() {
            return {
                subject: {
                    subject_id: "",
                    subject_name: "",
                    teacher_id: "",
                    teacher_name: "",
                },
                addedSubject: [],
            }
        },
        validations: {
            subject: {
                id: {required},
                teacher: { required,  minLength: minLength(1) },
            }
        },
        computed: {
            ...mapGetters(['data', 'class_subjects']),
        },
        methods: {
            addSubject(subject){
                if(this.addedSubject.indexOf(subject) == -1) {
                    this.addedSubject.push(subject);
                }
                this.subject = {
                        subject_id: "",
                        subject_name: "",
                        teacher_id: "",
                        teacher_name: "",
                    };
            },

            removeSubject(index){
                this.addedSubject.splice(index, 1);
            }
        }
    }
</script>

<style scoped>

</style>
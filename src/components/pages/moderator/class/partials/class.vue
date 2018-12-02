<template>
    <div>
        <div class="row">
            <div class="col-7">
                <label>Class</label>
                <select class="form-control" size="1"
                        @blur="$v.classes.class.$touch()"
                        v-model="classes.class">
                    <option value="">Select Class</option>
                    <option v-for="_class in objectObjectToArray(data.classes)" :value="_class.id">
                        {{ _class.class }}
                    </option>
                </select>
            </div>
            <div class="col-3">
                <label>Arm</label>
                <select class="form-control" size="1"
                        @blur="$v.classes.arm.$touch()"
                        v-model="classes.arm">
                    <option value="">Select Arm</option>
                    <option v-for="arm in class_arms" :value="arm">
                        {{ arm }}
                    </option>
                </select>
            </div>
            <div class="col-2">
                <label>&nbsp;&nbsp;&nbsp;&nbsp;</label>
                <button class="btn btn-success btn-style"
                   :disabled="$v.classes.$invalid"
                   @click="addClass">Add</button>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12 mb-3">
                <div class="table-responsive mt-3">
                    <table id="mytable" class="table table-bordred table-striped">
                        <thead>
                        <tr class="">
                            <th style="width: 4%">&nbsp;</th>
                            <th>Class</th>
                            <th style="width: 10%">&nbsp;</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="(_class, index) in school_classes">
                            <td>{{ index + 1 }}</td>
                            <td class="">{{ `${_class.class_name.fullname} ${_class.arm}` }}</td>
                            <td>
                                <a class="btn btn-success" v-if="_class.disabled == 1">
                                    Enable
                                </a>
                                <a class="btn btn-danger" v-else>
                                    Disable
                                </a>
                            </td>
                        </tr>
                        <tr v-for="(_class, index) in addedClass">
                            <td class="text-primary font-weight-bold">{{ index + 1 }}</td>
                            <td class="text-primary font-weight-bold">{{ `${getClassName(_class.class)} ${_class.arm}` }}</td>
                            <td class="">
                                <a class="btn btn-danger" @click="removeClass(index)">
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
                    @click.prevent="submitClass">Submit</button>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';
    import {required,minLength} from 'vuelidate/lib/validators';
    import Normalizer from '../../../../mixins/normalizer';
    import DataMixin from '../../../../mixins/dataMixin';
    import Toaster from '../../../../mixins/toaster';

    export default {
        name: "add-class",
        mixins: [Normalizer, Toaster, DataMixin],
        data() {
            return {
                classes: {
                    class: '',
                    arm: '',
                },
                addedClass: [],
                enabledClass: [],
                disabledClass: [],
            }
        },
        validations: {
            classes: {
                class: {required},
                arm: { required,  minLength: minLength(1) },
            }
        },
        computed: {
            ...mapGetters(['class_arms', 'data', 'school_classes', 'schoolId']),
            isSubmitable: function(){
                return (this.addedClass.length > 0 || this.enabledClass > 0
                    || this.disabledClass > 0) ? false : true;
            }
        },
        methods: {
            // _getClassName(_class){
            //     if(typeof this.data.classes == 'object'){
            //         return `${this.data.classes[_class.class].fullname} ${_class.arm}`;
            //     }
            //     return '';
            // },

            disableClass(class_id){
                if(this.enabledClass.indexOf(class_id) > -1) {
                    let index = this.enabledClass.indexOf(class_id);
                    this.enabledClass.splice(index, 1);
                }
                this.disabledClass.push(class_id);
            },

            enableClass(class_id){
                if(this.disabledClass.indexOf(class_id) > -1) {
                    let index = this.disabledClass.indexOf(class_id);
                    this.disabledClass.splice(index, 1);
                }
                this.enabledClass.push(class_id);
            },

            addClass: function() {
                let _filterAddedClass = this.addedClass.filter(_item => (_item.class == this.classes.class
                                            && _item.arm == this.classes.arm));

                let _filterDbClass = this.school_classes.filter(_item => (_item.class_id == this.classes.class
                                        && _item.arm == this.classes.arm))

                if(_filterDbClass.length < 1 && _filterAddedClass.length < 1) {
                    this.addedClass.push({
                        class: this.classes.class,
                        arm: this.classes.arm,
                    });
                }
                this.classes.class = "";
                this.classes.arm = "";
            },

            removeClass(index){
                this.addedClass.splice(index, 1);
            },

            submitClass: function(){
                if (this.schoolId) {
                    this.isSubmitable = false;
                    let form = {
                        id: this.schoolId,
                        classes: {
                            added: this.addedClass,
                            enabled: this.enabledClass,
                            disabled: this.disabledClass,
                        }
                    };
                    this.$store.dispatch('storeClass', form).then(() => {
                        this.successMsg('Record updated!', 'Success');
                        location.reload();
                        //setTimeout(() => this.$emit('closeModal', true), 500);
                    }).catch(() => {
                        this.errorMsg('Error saving data!', 'Error');
                        this.isSubmitable = true;
                    });
                }
            }
        }
    }
</script>

<style scoped>
 .btn-style {
     margin-top: 30px
 }
</style>
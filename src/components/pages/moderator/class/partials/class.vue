<template>
    <div>
        <div class="row">
            <div class="col-7">
                <label>Class</label>
                <select class="form-control" size="1"
                        @blur="$v.classes.class.$touch()"
                        v-model="classes.class">
                    <option value="">Select Class</option>
                    <option v-for="_class in objectObjectToArray(data.classes, 'class')" :value="_class">
                        {{ _class }}
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
                <button class="btn btn-success btn-style"
                   :disabled="$v.classes.$invalid"
                   @click="addClass(`${classes.class} ${classes.arm}`)">
                    Add
                </button>
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
                            <td class="">{{ _class.class }}</td>
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
                            <td class="text-primary font-weight-bold">{{ _class }}</td>
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
            <button class="btn btn-primary btn-lg btn-school pull-right">Submit</button>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';
    import Normalizer from '../../../../mixins/normalizer';
    import {required,minLength} from 'vuelidate/lib/validators';

    export default {
        name: "add-class",
        mixins: [Normalizer],
        data() {
            return {
                classes: {
                    class: '',
                    arm: '',
                },
                addedClass: [],
                enabledClass: [],
                disabledClass: [],
                filter: '',
            }
        },
        validations: {
            classes: {
                class: {required},
                arm: { required,  minLength: minLength(1) },
            }
        },
        computed: {
            ...mapGetters(['class_arms', 'data', 'school_classes']),
        },
        methods: {
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

            addClass(class_name){
                if(this.addedClass.indexOf(class_name) == -1) {
                    this.addedClass.push(class_name);
                }
                this.classes.class = "";
                this.classes.arm = "";
            },

            removeClass(index){
                this.addedClass.splice(index, 1);
            }
        }
    }
</script>

<style scoped>
 .btn-style {
     margin-top: 30px
 }
</style>
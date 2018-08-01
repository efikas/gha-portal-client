<template>
    <div>
        <div class="even-row classroom-wrapper-div">
            <a class="btn btn-outline-primary pull-right" @click="addClassroom()">+ ADD</a>
            <div>
                INFORMATION ON CLASSROOMS/PLAYROOMS
            </div>
            <div>
                Record information for individual classrooms, regardless of whether or not they are in
                use.
            </div>
        </div>

        <div v-for="(classroom, index) in classroom_list" class="classroom-wrapper-div">
            <div class="remove-btn-div"><a class="btn btn-outline-danger pull-right red"
                                           @click="removeClassroom(index)">X</a></div>
            <div class="row odd-row">
                <div class="col-xs-12 col-sm-6 col-md-2">
                    <div class="form-group p-10" :class="{'has-error':$v.school.classroom_list.$each.$iter[index].class_id.$invalid}">
                        <label class="control-label">Class Level</label>
                        <select class="form-control" v-model="school.classroom_list[index].class_id"
                                @blur="$v.school.classroom_list.$each.$iter[index].class_id.$touch()" size="1">
                            <option v-for="_class in data.classes" :value="_class.id">{{_class.class}}</option>
                        </select>
                    </div>
                </div>
                <div class="col-xs-12 col-sm-6 col-md-2">
                    <div class="form-group p-10" :class="{'has-error':$v.school.classroom_list.$each.$iter[index].good.$invalid}">
                        <label class="control-label">Good</label>
                        <input type="number" v-model="school.classroom_list[index].good" min="0" class="form-control"
                               @blur="$v.school.classroom_list.$each.$iter[index].good.$touch()"
                        placeholder="">
                    </div>
                </div>
                <div class="col-xs-12 col-sm-6 col-md-2">
                    <div class="form-group p-10" :class="{'has-error':$v.school.classroom_list.$each.$iter[index].minor_repair.$invalid}">
                        <label class="control-label">Minor Repair</label>
                        <input type="number" v-model="school.classroom_list[index].minor_repair" min="0" class="form-control"
                               @blur="$v.school.classroom_list.$each.$iter[index].minor_repair.$touch()"
                               placeholder="">
                    </div>
                </div>
                <div class="col-xs-12 col-sm-6 col-md-2">
                    <div class="form-group p-10" :class="{'has-error':$v.school.classroom_list.$each.$iter[index].major_repair.$invalid}">
                        <label class="control-label">Major Repair</label>
                        <input type="number" v-model="school.classroom_list[index].major_repair" min="0" class="form-control"
                               @blur="$v.school.classroom_list.$each.$iter[index].major_repair.$touch()"
                               placeholder="">
                    </div>
                </div>
                <div class="col-xs-12 col-sm-6 col-md-2">
                    <div class="form-group p-10" :class="{'has-error':$v.school.classroom_list.$each.$iter[index].unusable.$invalid}">
                        <label class="control-label">Unuseable</label>
                        <input type="number" v-model="school.classroom_list[index].unusable" min="0" class="form-control"
                               @blur="$v.school.classroom_list.$each.$iter[index].unusable.$touch()"
                               placeholder="">
                    </div>
                </div>
            </div>
            <div class="even-row">
                <div class="col-xs-8">
                    <div class="form-group p-10" :class="{'has-error':$v.school.classroom_list.$each.$iter[index].class_id.$error}">
                        <label class="control-label">Comment</label>
                        <div class="col-xs-8">
                            <textarea class="form-control" v-model="school.classroom_list[index].comment" placeholder=""
                                      @blur="$v.school.classroom_list.$each.$iter[index].comment.$touch()"
                                      cols="30" rows="4"></textarea>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <button type="submit" :disabled="$v.$invalid" @click.prevent="onSubmit"
                class="btn btn-primary btn-lg btn-school pull-right">Submit
        </button>
    </div>
</template>
<script>
    import {schoolFormMixins} from './mixins'
    import {classroomValidations} from 'src/validations/school'

    export default {
        validations: classroomValidations,
        data() {
            return {}
        },
        computed: {
            classroom_list() {
                return this.school.classroom_list.map(obj => {
                    delete obj.class;
                    delete obj.created_at;
                    delete obj.updated_at;
                    return obj;
                });
            }
        },
        created(){
            // this.school = this.getSchool;
        },
        methods: {
            addClassroom() {
                this.school.classroom_list.push({'class_id':1});
            },
            removeClassroom(index) {
                this.school.classroom_list.splice(index, 1);
            },
            onSubmit: function () {
                let form = {
                    'classrooms':  this.school.classroom_list.map(classroom=>{
                        if(classroom.id) delete classroom.id;
                        if(classroom.updated_at) delete classroom.updated_at;
                        if(classroom.created_at) delete classroom.created_at;
                        return classroom;
                    }),
                };

                this.$store.dispatch('updateSchool', form).then(() => {
                    this.successMsg('Record updated!', 'Success');
                    setTimeout(()=>this.$emit('closeModal', true), 500);
                }).catch(() => {
                    this.errorMsg('Error saving data!', 'Error');
                });

            },
        },
        mixins: [schoolFormMixins],
    }
</script>
<style type="text/css" scoped>
    .even-row {
        background-color: #fafafa;
        border-top: 1px dashed #959DCC;
        border-bottom: 1px dashed #959DCC;
        min-height: 62px;
        padding: 8px 0;
    }

    .odd-row {
        padding: 8px 0;
    }

    form .odd-row:first-of-type {
        border-top: 1px dashed #959DCC;
    }

    .classroom-wrapper-div:not(:last-of-type) {
        border-bottom: solid #650606 2px;
        margin: 20px 0px 20px 0px
    }

    .remove-btn-div {
        height: 30px;
        padding: 0px 10px 0px 0px;
    }

    .red {
        color: red !important;
        font-weight: bold;
    }

    .red:hover {
        color: white !important;
    }
</style>
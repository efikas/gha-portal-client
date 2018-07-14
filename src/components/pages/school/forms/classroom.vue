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

        <div v-for="(classroom, index) in school.classroom_list" class="classroom-wrapper-div">
            <div class="remove-btn-div"><a class="btn btn-outline-danger pull-right red"
                                           @click="removeClassroom(index)">X</a></div>
            <div class="row odd-row">
                <div class="col-xs-12 col-sm-6 col-md-4">
                    <div class="form-group p-10">
                        <label class="control-label col-md-12">Class Level</label>
                        <select class="form-control" v-model="school.classroom_list[index].class_id" size="1">
                            <option value="">Select Class</option>
                            <option v-for="_class in classes" :value="_class.id">{{_class.class}}</option>
                        </select>
                    </div>
                </div>
                <div class="col-xs-12 col-sm-6 col-md-2">
                    <div class="form-group p-10">
                        <label class="control-label">Good</label>
                        <input type="number" v-model="school.classroom_list[index].good" min="0" class="form-control"
                               placeholder="">
                    </div>
                </div>
                <div class="col-xs-12 col-sm-6 col-md-2">
                    <div class="form-group p-10">
                        <label class="control-label">Needs Minor Repair</label>
                        <input type="number" v-model="school.classroom_list[index].minor_repair" min="0" class="form-control"
                               placeholder="">
                    </div>
                </div>
                <div class="col-xs-12 col-sm-6 col-md-2">
                    <div class="form-group p-10">
                        <label class="control-label">Needs Major Repair</label>
                        <input type="number" v-model="school.classroom_list[index].major_repair" min="0" class="form-control"
                               placeholder="">
                    </div>
                </div>
                <div class="col-xs-12 col-sm-6 col-md-2">
                    <div class="form-group p-10">
                        <label class="control-label">Unuseable</label>
                        <input type="number" v-model="school.classroom_list[index].unusable" min="0" class="form-control"
                               placeholder="">
                    </div>
                </div>
            </div>
            <div class="even-row">
                <div class="col-xs-8">
                    <div class="form-group p-10">
                        <label class="control-label col-md-12">Comment</label>
                        <div class="col-xs-8">
                            <textarea class="form-control" v-model="school.classroom_list[index].comment" placeholder=""
                                      cols="30" rows="4"></textarea>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import { mapGetters } from 'vuex'

    export default {
        props: {
          // data: { type: Object, required: true }
        },
        data() {
            return {}
        },
        methods: {
            addClassroom() {
                this.school.classroom_list.push({});
            },
            removeClassroom(index) {
                this.school.classroom_list.splice(index, 1);
            },
        },
        computed: {
            ...mapGetters([
               'data',
               'school' 
            ]),
            classes(){
                return this.data.classes;
            }
        },
        async created() {
            await this.$store.dispatch('school', this.$route.params.id);
        }
    }
</script>
<style type="text/css" scoped>
    #color {
        height: 35px;
    }

    /deep/ .form-control:disabled {
        cursor: not-allowed;
    }

    .disabled {
        cursor: not-allowed;
    }

    .form-control:active, .input-group .form-control:hover {
        z-index: 1;
    }

    .dropzone_wrapper {
        width: 100%;
    }

    .align-left {
        float: left;
    }

    .align-right {
        float: right;
    }

    tab-content {
        border-top: 1px solid grey;
        border-bottom: 1px solid grey;
    }

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

    .form-group label {
        font-size: .8rem !important;
        letter-spacing: 1px;
        color: #684348 !important;
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
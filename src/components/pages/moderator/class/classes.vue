<template>
    <div>
        <div class="row">
            <div class="col-lg-12">
                <b-card>
                    <a href="javascript:void(0)" v-b-modal.modal-add-class class="pull-right">
                        <i class=" fa fa-plus"></i> Add
                    </a>
                </b-card>
                <br><br>

                <b-modal id="modal-add-class" ref="modal" title="Add Class" size="lg" lazy centered hide-footer >
                    <add-class></add-class>
                </b-modal>
                <b-modal id="modal-add-subject" ref="modal" title="Add Subjects" size="lg" lazy centered hide-footer >
                    <add-subject></add-subject>
                </b-modal>

                <div class="row">
                    <div class="col-lg-12 mb-3">
                        <div class="table-responsive">
                            <table id="mytable" class="table table-bordred table-striped">
                                <thead>
                                <tr class="">
                                    <th style="width: 4%">&nbsp;</th>
                                    <th>Class</th>
                                    <th style="width: 10%">&nbsp;</th>
                                    <th style="width: 10%">&nbsp;</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="(_class, index) in school_classes">
                                    <td>{{ index + 1 }}</td>
                                    <td>{{ _class.class }}</td>
                                    <td class="">
                                        <a href="javascript:void(0)" v-b-modal.modal-add-subject>
                                            <i class=" fa fa-edit"></i> Subjects
                                        </a>
                                    </td>
                                    <td class="">
                                        <router-link tag="a" :to="{name:'teacher-exam', params: { id: _class.class_id }}" class="fa fa-book">
                                            Result
                                        </router-link>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import {mapGetters} from 'vuex'
    import AddClass from './partials/class';
    import AddSubject from './partials/subject';

    export default {
        name: 'admin-class',
        components: {
            AddClass,
            AddSubject,
        },
        data() {
            return {

                subjects: [],
                filter: '',
                data: {
                    subject_id: '',
                    attendance: [
                        {
                            id: '',
                            name: 'Ambrose Schulist',
                            mon: 0,
                            tue: 0,
                            wed: 0,
                            thur: 0,
                            fri: 0,
                        },
                        {
                            id: '',
                            name: 'Bernadette Medhurst',
                            mon: 0,
                            tue: 0,
                            wed: 0,
                            thur: 0,
                            fri: 0,
                        },
                    ]
                },
            }
        },
        methods: {
        },
        computed: mapGetters(['school_classes'])
    }
</script>
<style scoped>
    .dz-progress {
        background-color: #08aa80 !important;
    }
    .red {
        color: red;
        font-weight: bold;
    }
    .green {
        color: darkgreen;
        font-weight: bold;
    }
</style>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

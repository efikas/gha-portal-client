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
                    <add-class ></add-class>
                </b-modal>
                <b-modal id="modal-add-subject" ref="modal" title="Add Subjects" size="lg" lazy centered hide-footer >
                    <add-subject :classId="selectedClass"></add-subject>
                </b-modal>

                <div class="row">
                    <div class="col-lg-12 mb-3">
                        <div class="table-responsive">
                            <table id="mytable" class="table table-bordred table-striped">
                                <thead>
                                <tr class="">
                                    <th style="width: 4%">&nbsp;</th>
                                    <th>Term</th>
                                    <th style="width: 10%">&nbsp;</th>
                                    <th style="width: 20%">&nbsp;</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="(_class, index) in school_classes">
                                    <td>{{ index + 1 }}</td>
                                    <td>
                                        <router-link tag="a"
                                                     :to="{name:'admin-school-students',
                                         params: { className: `${_class.class_name.fullname} ${_class.arm}` },
                                         query: { class: _class.id }}">
                                            {{ `${_class.class_name.fullname} ${_class.arm}` }}
                                        </router-link>
                                    </td>
                                    <td class="">
                                        <a href="javascript:void(0)" v-b-modal.modal-add-subject @click="addSubject(_class.id)">
                                            <i class=" fa fa-edit"></i> edit
                                        </a>
                                    </td>
                                    <td class="">
                                        <button class="btn btn-success">Generate Result</button>
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
    // import AddClass from './partials/class';
    // import AddSubject from './partials/subject';
    import store from 'src/store/store';

    export default {
        name: 'create-term',
        components: {
            // AddClass,
            // AddSubject,
        },
        data() {
            return {
                selectedClass: null,
            }
        },
        methods: {
            addSubject(classId){
                this.selectedClass = classId; // set selected class id
            }
        },
        computed: mapGetters(['school_classes']),
        async beforeRouteEnter(to, from, next) {
            let school_id = (to.params.id) ? to.params.id : store.getters.schoolId;
            await store.dispatch('schoolClasses', school_id).catch(() => {
                return next(from);
            });
            next()
        },
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

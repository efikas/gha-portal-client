<template>
    <div>
        <div class="row">
            <div class="col-lg-12">
                <b-card>
                    <div>
                        <h3 class="default-color"><strong>Classes</strong></h3>
                        <h4>Third Term, 2017/2018 Session</h4>
                    </div>
                </b-card>
                <b-card>
                    <div class="row">
                        <div class="col-4">
                            <label>Section</label>
                            <select v-model="data.section" class="form-control" size="1">
                                <option value="">Select Section</option>
                                <option value="">2017/2018</option>
                                <option value="">2018/2019</option>
                            </select>
                        </div>
                        <div class="col-4">
                            <label>Term</label>
                            <select v-model="data.term" class="form-control" size="1">
                                <option value="">Select Term</option>
                                <option value="">First</option>
                                <option value="">Second</option>
                                <option value="">Third</option>
                            </select>
                        </div>
                    </div>
                    <br><br>

                    <div class="row">
                        <div class="col-lg-12 mb-3">
                            <div class="table-responsive">
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
                                        <td class="">
                                            <router-link tag="a"
                                                         :to="{name:'teacher-exam', params: { schoolClassId: _class.class_id },
                                                         query: {
                                                            subject: _class.id,  //subject offered
                                                            term: 3 }
                                                         }">
                                                {{ `${getClassName(_class.class.class_id)} ${_class.class.arm} (${getSubjectName(_class.subject_id)})` }}
                                            </router-link>
                                        </td>
                                        <td class="">
                                            <router-link tag="a" :to="{name:'teacher-exam', params: { schoolClassId: _class.class_id },
                                                query: {
                                                    subject: _class.id,  //subject offered
                                                    term: 3 }}" class="fa fa-book">
                                               Results
                                            </router-link>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </b-card>
            </div>
        </div>
    </div>
</template>
<script>
    import {mapGetters} from 'vuex';
    import store from 'src/store/store';
    import DataMixin from '../../../mixins/dataMixin';

    export default {
        name: 'classes',
        mixins: [DataMixin],
        data() {
            return {}
        },
        methods: {
        },
        computed: {
            ...mapGetters(['user', 'school_classes'])
        },
        created() {
            if(this.user.staff_id){
                store.dispatch('staffClasses', this.user.staff_id);
            }
        }
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

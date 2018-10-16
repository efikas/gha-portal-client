<template>
    <div>
        <div class="row">
            <div class="col-lg-12">
                <div class="row">
                    <div class="col-5">
                        <label>Subject</label>
                        <select v-model="data.section" class="form-control" size="1">
                            <option value="">Select Section</option>
                            <option value="">2017/2018</option>
                            <option value="">2018/2019</option>
                        </select>
                    </div>
                    <div class="col-3">
                        <label>Class</label>
                        <select v-model="data.term" class="form-control" size="1">
                            <option value="">Select Term</option>
                            <option value="">First</option>
                            <option value="">Second</option>
                            <option value="">Third</option>
                        </select>
                    </div>
                    <div class="col-2">
                        <label>Arm</label>
                        <multiselect :show-labels="false"
                             :options="arms" :multiple="true"
                             :close-on-select="false" :clear-on-select="false"
                             :hide-selected="true" placeholder="Select Arm">
                        </multiselect>
                    </div>
                    <div class="col-2">
                       <a class="btn btn-success" style="margin-top: 30px">Add</a>
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
                                <tr v-for="(_class, index) in classes">
                                    <td>{{ index + 1 }}</td>
                                    <td class="">
                                        <router-link tag="a"
                                                     :to="{name:'teacher-exam', params: { id: _class.subject_id },
                                                     query: { subject: _class.subject_id, term: 3 }
                                                     }">
                                            {{ `${_class.subject_name}, ${_class.class} ${_class.arm} (First term, 2018/2019 Session)` }}
                                        </router-link>
                                    </td>
                                    <td class="">
                                        <router-link tag="a" :to="{name:'teacher-exam', params: { id: _class.subject_id }}" class="fa fa-book">
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
    import 'vue2-dropzone/dist/vue2Dropzone.css'
    import Multiselect from 'vue-multiselect';

    export default {
        name: 'admin-class',
        components: {
            Multiselect,
        },
        data() {
            return {
                arms: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'],
                classes: [
                    {
                        class: 'SS 1',
                        arm: 'A',
                        subject_name: 'Biology',
                        subject_id: 23,
                    },
                    {
                        class: 'SS 1',
                        arm: 'B',
                        subject_name: 'Biology',
                        subject_id: 23,
                    },
                    {
                        class: 'SS 1',
                        arm: 'C',
                        subject_name: 'Biology',
                        subject_id: 23,
                    },
                    {
                        class: 'SS 2',
                        arm: 'A',
                        subject_name: 'Biology',
                        subject_id: 23,
                    },
                    {
                        class: 'SS 2',
                        arm: 'B',
                        subject_name: 'Biology',
                        subject_id: 23,
                    },
                    {
                        class: 'SS 2',
                        arm: 'C',
                        subject_name: 'Biology',
                        subject_id: 23,
                    },
                ],
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
        mounted() {}
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

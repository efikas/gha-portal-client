<template>
    <div>
        <div class="row">
            <div class="col-lg-12">
                <b-card>
                    <div class="row">
                        <div class="col-lg-6">
                            <label>LGA</label>
                            <multiselect v-model="lga" :show-labels="false" :options="lgas"
                                         @input="getSchool"></multiselect>
                        </div>
                        <div class="col-lg-6">
                            <label>Schools</label>
                            <multiselect v-model="school" :show-labels="false" :options="schools"></multiselect>
                        </div>
                    </div><br>
                    <div class="row">
                        <div class="col-lg-4">
                            <label>Level</label>
                            <multiselect v-model="lga" :show-labels="false" :options="lgas"
                                         @input="getSchool"></multiselect>
                        </div>
                        <div class="col-lg-4">
                            <label>Class</label>
                            <multiselect v-model="school" :show-labels="false" :options="schools"></multiselect>
                        </div>
                        <div class="col-lg-4">
                            <label>Arm</label>
                            <multiselect v-model="school" :show-labels="false" :options="schools"></multiselect>
                        </div>
                    </div><br>
                    <div class="row">
                        <div class="col-lg-6">
                            <label>Session</label>
                            <multiselect v-model="lga" :show-labels="false" :options="lgas"
                                         @input="getSchool"></multiselect>
                        </div>
                        <div class="col-lg-6">
                            <label>Filter</label>
                            <multiselect v-model="school" :show-labels="false" :options="schools"></multiselect>
                        </div>
                    </div>
                    <br><br>
                    <div class="row">
                        <div class="col-lg-12 mb-3">
                            <div class="table-responsive">
                                <table id="mytable" class="table table-bordred table-striped">
                                    <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>email</th>
                                        <th>Phone</th>
                                        <th>Edit</th>
                                        <th>Delete</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>Ambrose Schulist</td>
                                        <td>Ambrose.Schulist@hotmail.com</td>
                                        <td>098-354-8863</td>
                                        <td>
                                            <button class="btn btn-primary btn-xs"><span
                                                    class="fa fa-pencil"></span></button>
                                        </td>
                                        <td>
                                            <button class="btn btn-danger btn-xs"><span
                                                    class="fa fa-times"></span></button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Bernadette Medhurst</td>
                                        <td>Bernadette.Medhurst75@hotmail.com</td>
                                        <td>258-452-3348</td>
                                        <td>
                                            <button class="btn btn-primary btn-xs"><span
                                                    class="fa fa-pencil"></span></button>
                                        </td>
                                        <td>
                                            <button class="btn btn-danger btn-xs"><span
                                                    class="fa fa-times"></span></button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Hoyt Franecki</td>
                                        <td>Hoyt.Franecki@yahoo.com</td>
                                        <td>648-323-5530</td>
                                        <td>
                                            <button class="btn btn-primary btn-xs"><span
                                                    class="fa fa-pencil"></span></button>
                                        </td>
                                        <td>
                                            <button class="btn btn-danger btn-xs"><span
                                                    class="fa fa-times"></span></button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Kianna Lockman</td>
                                        <td>Kianna.Lockman@gmail.com</td>
                                        <td>551-834-3163</td>
                                        <td>
                                            <button class="btn btn-primary btn-xs"><span
                                                    class="fa fa-pencil"></span></button>
                                        </td>
                                        <td>
                                            <button class="btn btn-danger btn-xs"><span
                                                    class="fa fa-times"></span></button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Sheldon Howe</td>
                                        <td>Sheldon_Howe94@yahoo.com</td>
                                        <td>704-582-5580</td>
                                        <td>
                                            <button class="btn btn-primary btn-xs"><span
                                                    class="fa fa-pencil"></span></button>
                                        </td>
                                        <td>
                                            <button class="btn btn-danger btn-xs"><span
                                                    class="fa fa-times"></span></button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Timmothy Mertz</td>
                                        <td>Timmothy72@gmail.com</td>
                                        <td>641-915-3609</td>
                                        <td>
                                            <button class="btn btn-primary btn-xs"><span
                                                    class="fa fa-pencil"></span></button>
                                        </td>
                                        <td>
                                            <button class="btn btn-danger btn-xs"><span
                                                    class="fa fa-times"></span></button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Faye Mayer</td>
                                        <td>Faye34@gmail.com</td>
                                        <td>786-093-2620</td>
                                        <td>
                                            <button class="btn btn-primary btn-xs"><span
                                                    class="fa fa-pencil"></span></button>
                                        </td>
                                        <td>
                                            <button class="btn btn-danger btn-xs"><span
                                                    class="fa fa-times"></span></button>
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
    import Vue from 'vue';
    import vue2Dropzone from 'vue2-dropzone'
    import 'vue2-dropzone/dist/vue2Dropzone.css'
    import Multiselect from 'vue-multiselect';

    // Vue.component(Multiselect);
    export default {
        name: 'vue2-dropzone',
        components: {
            vueDropzone: vue2Dropzone,
            Multiselect,
        },
        data() {
            return {
                lga: '',
                school: '',
                lgas: [],
                schools: [],
            }
        },
        methods: {
            getSchool() {
                //Since array index is starting from 0, we need to increment by 1 to start
                // the index from 1
                this.$lga.getLgasSchool(this.lgas.indexOf(this.lga) + 1).then(data => {
                    this.schools = [];
                    this.school = '';
                    data.data.forEach(item => {
                        this.schools.push(item.school_name);
                    });
                })
            }
        },
        mounted() {
            this.$lga.getLgas().then(data => {
                data.forEach(item => {
                    this.lgas.push(item.name);
                });
            })
        }
    }
</script>
<style scoped>
    .dz-progress {
        background-color: #08aa80 !important;
    }
</style>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

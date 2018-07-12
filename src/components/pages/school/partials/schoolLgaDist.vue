<template>
    <div>
        <div class="row">
            <div class="col-lg-12">
                <b-card>
                    <div class="table-responsive">
                        <a type="button"
                           class="fa fa-download icon-big btn btn-outline-primary ekiti-btn pull-right mb-2"
                           @click="exportExcel"></a>
                        <table class="table table-bordered table-striped mytableh text-center" ref="exportRef">
                            <thead>
                            <tr>
                                <th rowspan="2">LGA</th>
                                <th colspan="3">Public</th>
                                <th colspan="3">Private</th>
                                <th rowspan="2" align="center">Total Primary</th>
                                <th rowspan="2">Total Secondary</th>
                            </tr>
                            <tr>
                                <th>Primary</th>
                                <th>Secondary</th>
                                <th>Total</th>
                                <th>Primary</th>
                                <th>Secondary</th>
                                <th>Total</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="(schoolsPerLga, index) in schoolsPerLgas" :key="index">
                                <td @click="gotoLink(schoolsPerLga.id)">{{ schoolsPerLga.name }}</td>
                                <td @click="gotoLink(schoolsPerLga.id/category/1/level/PRY)">{{
                                    schoolsPerLga.public.primary }}
                                </td>
                                <td @click="gotoLink(schoolsPerLga.id/category/1/level/SEC)">{{
                                    schoolsPerLga.public.secondary }}
                                </td>
                                <td @click="gotoLink(schoolsPerLga.id/category/1)">{{
                                    schoolsPerLga.public.total }}
                                </td>
                                <td @click="gotoLink(schoolsPerLga.id/category/2/level/PRY)">{{
                                    schoolsPerLga.private.primary }}
                                </td>
                                <td @click="gotoLink(schoolsPerLga.id/category/2/level/SEC)">{{
                                    schoolsPerLga.private.secondary }}
                                </td>
                                <td @click="gotoLink(schoolsPerLga.id/category/2)">{{
                                    schoolsPerLga.private.total }}
                                </td>
                                <td @click="gotoLink(schoolsPerLga.id/level/PRY)">{{
                                    schoolsPerLga.total.primary }}
                                </td>
                                <td @click="gotoLink(schoolsPerLga.id/level/SEC)">{{
                                    schoolsPerLga.total.secondary }}
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </b-card>

            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: "index2",
        data() {
            return {
                schoolsPerLgas: []
            }
        },
        created: function () {
            this.$school.getSchoolsDistributionsPerLga()
                .then((data) => {
                    this.schoolsPerLgas = data;
                })
                .catch((error) => console.log(error))
        },

        methods: {

            exportExcel() {
                const mimeType = 'data:application/vnd.ms-excel';
                const html = this.$refs.exportRef.innerHTML.replace(/ /g, '%20');

                const d = new Date();

                var dummy = document.createElement('a');
                dummy.href = mimeType + ', ' + '<table>' + html + '</table>';
                dummy.download = 'school distributions' + '-' + d.getFullYear() + '-' + (d.getMonth() +
                    1) + '-' + d.getDate() + '-' + d.getHours() + '-' + d.getMinutes() + '-' + d.getSeconds() +
                    '.xls';
                dummy.click();
            },
        }
    }
</script>
<style scoped>
    .table tr > td:hover {
        background-color: #ccc !important;
        color: #650611;
        font-weight: bold;
        cursor: pointer;
    }

</style>

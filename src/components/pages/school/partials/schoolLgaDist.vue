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
                                <th rowspan="2" align="center">+Primary</th>
                                <th rowspan="2">+Secondary</th>
                                <th rowspan="2">Total</th>
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
                            <tr v-for="(lga, index) in lgaSchStats" :key="index">
                                <td>
                                    <router-link :to="gotoLink({id: lga.id})">{{ lga.name }}</router-link>
                                </td>
                                <td>
                                    <router-link :to="gotoLink({id: lga.id, cat: 1, level: 'pry'})">
                                        {{ lga.public.primary }}
                                    </router-link>
                                </td>
                                <td>
                                    <router-link :to="gotoLink({id: lga.id, cat: 1, level: 'sec'})">
                                        {{ lga.public.secondary }}
                                    </router-link>
                                </td>
                                <td>
                                    <router-link :to="gotoLink({id: lga.id, cat: 1})">
                                        {{ lga.public.total }}
                                    </router-link>
                                </td>
                                <td>
                                    <router-link :to="gotoLink({id: lga.id, cat: 2, level: 'pry'})">
                                        {{ lga.private.primary }}
                                    </router-link>
                                </td>
                                <td>
                                    <router-link :to="gotoLink({id: lga.id, cat: 2, level: 'sec'})">
                                        {{ lga.private.secondary }}
                                    </router-link>
                                </td>
                                <td>
                                    <router-link :to="gotoLink({id: lga.id, cat: 2})">
                                        {{ lga.private.total }}
                                    </router-link>
                                </td>
                                <td>
                                    <router-link :to="gotoLink({id: lga.id, level: 'pry'})">
                                        {{ lga.total.primary }}
                                    </router-link>
                                </td>
                                <td>
                                    <router-link :to="gotoLink({id: lga.id, level: 'sec'})">
                                        {{ lga.total.secondary }}
                                    </router-link>
                                </td>
                                <td>
                                    {{ lga.total.secondary + lga.total.primary }}
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
            return {}
        },
        created: function () {
            this.$store.dispatch('lgaSchStats');
        },

        computed: {
            lgaSchStats() {
                return this.$store.getters.schools;
            }
        },

        methods: {
            gotoLink(query) {
                return {name: 'school-lga', query};
            },
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
    .table td {
        padding: 0px !important;
    }
    .table td {
        padding: 0px !important;
        font-size: 12px;
    }
    .table tr a {
        cursor: pointer;
        display: block;
        margin: 0 !important;
        padding: 3px;
    }
    .table a:hover {
        text-decoration: underline !important;
    }

</style>

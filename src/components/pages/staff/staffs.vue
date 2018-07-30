<template>
    <div class="row">
        <div class="col-lg-12 mb-3">
            <SchoolCard></SchoolCard>

            <b-card header="List of Staffs" header-tag="h4" class="bg-header-card">
                <div style="margin: 2%" v-if="staffs.length < 1">
                    <skeleton-loading>
                        <row :gutter="{top: '20px'}">
                            <square-skeleton
                                    :count="10"
                                    :boxProperties="{
                                    height: '55px',
                                    width: '100%',
                                    bottom: '10px'
                                }"
                            >
                            </square-skeleton>
                        </row>
                    </skeleton-loading>
                </div>
                <div v-else>
                    <a class="fa fa-download icon-big btn btn-outline-primary ekiti-btn pull-right"
                       @click.prevent="exportExcel"></a>
                    <v-client-table :data="staffs" :columns="columns">
                        <span slot="id" slot-scope="staff">{{ staff.index }}</span>
                        <router-link
                                class="list-font sch-link"
                                slot="Name"
                                slot-scope="staff"
                                :to="{name: 'staff-profile', params:{id: staff.row.id}}">
                            {{staff.row.first_name + ' ' + staff.row.last_name + ' ' + staff.row.middle_name}}
                        </router-link>
                        <div slot="Actions" slot-scope="staff">
                            <a href="javascript: void(0)" @click="deleteRecord(staff.row.id)" class=""><i
                                    class="fa fa-trash"></i></a>
                        </div>
                    </v-client-table>
                </div>
            </b-card>
        </div>
    </div>
</template>
<script>
    import SchoolCard from "../../widgets/sbemis/SchoolCard1";
    import {mapGetters} from 'vuex'
    import store from '../../../store/store'
    import Toaster from '../../mixins/toaster'

    export default {
        name: "staff_list",
        mixins: [Toaster],
        components: {
            SchoolCard,
        },
        data() {
            return {
                school_id: this.$route.params.id,
                params: null,
                category: this.$route.query.t,
                schoolInfo: {},
                columns: ['id', 'Name', 'Actions'],
                options: {
                    sortIcon: {
                        base: 'fa',
                        up: 'fa fa-angle-up',
                        down: 'fa fa-angle-down'
                    },
                    // see the options API
                    skin: "table-hover table-striped table-bordered",
                    perPage: 30,
                    // footerHeadings: true,
                    highlightMatches: true,
                    pagination: {
                        chunk: 7,
                        //set dropdown to true to get dropdown instead of pagenation
                        dropdown: false
                    }
                }
            }
        },
        computed: {
            ...mapGetters([
                'staffs',
                'school'
            ]),
        },
        watch: {
            $route: (route) => {
                this.params = route.query ? {category: route.query.t} : null;
                store.dispatch('staffs', {id: route.params.id, params: this.params});
            },
        },
        created() {
            this.$store.dispatch('staffs', {id: this.$route.params.id, params: this.params});
        },

        methods: {
            deleteRecord(id) {
                if(confirm('Deleting this item will remove all it\'s related data! Are you sure you want to proceed?')) {
                    this.$store.dispatch('deleteStaffs', {ids: [id]}).then(()=>{
                        this.successMsg('Selected data has been removed!', 'Success');
                    }).catch(() => {
                        this.errorMsg('Error occurred: unable to delete item', 'Error');
                    })
                }
            },
            exportExcel() {
                const mimeType = 'data:application/vnd.ms-excel';
                const html = this.renderTable().replace(/ /g, '%20');

                const d = new Date();

                var dummy = document.createElement('a');
                dummy.href = mimeType + ', ' + html;
                dummy.download = 'staffs-' + this.school.name.toLowerCase().replace(/ /g, '-') + '-' + d.getFullYear() + '-' + (d.getMonth() +
                    1) + '-' + d.getDate() + '-' + d.getHours() + '-' + d.getMinutes() + '-' + d.getSeconds() +
                    '.xls';
                dummy.click();
            },

            renderTable() {
                var table = '<table><thead>' +
                    '<tr>' +
                    '<th>ID</th>' +
                    '<th>LAST NAME</th>' +
                    '<th>MIDDLE NAME</th>' +
                    '<th>FIRST NAME</th>' +
                    '<th>SEX</th>' +
                    '<th>PHONE</th>' +
                    '</tr></thead>';
                table += '<tbody>';

                for (var i = 0; i < this.staffs.length; i++) {
                    table += '<tr>';
                    table += `<td>${this.staffs[i]?this.staffs[i].id:null}</td>`;
                    table += `<td>${this.staffs[i]?this.staffs[i].last_name:null}</td>`;
                    table += `<td>${this.staffs[i]?this.staffs[i].middle_name:null}</td>`;
                    table += `<td>${this.staffs[i]?this.staffs[i].first_name:null}</td>`;
                    table += `<td>${this.staffs[i]?this.staffs[i].sex:null}</td>`;
                    table += `<td>${this.staffs[i]?this.staffs[i].phone:null}</td>`;
                    table += '</tr>';
                }
                table += '</tbody></table>';
                return table;
            },
        }
    }
</script>
<style scoped>
    .icon-big {
        font-size: 20px;
    }

    .sch-link {
        display: block;
        padding: 3px;
    }

    .sch-link:hover {
        text-decoration: underline !important;
    }
</style>

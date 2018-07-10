<template>
    <div class="row">
        <div class="col-lg-12 mb-3">
            <SchoolCard :iData="schoolInfo" />

            <b-card header="List of Staffs" header-tag="h4" class="bg-header-card">
                <div style="margin: 2%" v-if="staffs.length < 1">
                    <skeleton-loading>
                        <row 
                            :gutter="{
                                bottom: '15px'
                            }"
                        >
                            <square-skeleton 
                                :count="2"
                                :boxProperties="{
                                    top: '10px',
                                    width: '100%',
                                    height: '55px'
                                }"
                            >
                            </square-skeleton>
                        </row>
                        <row :gutter="{top: '20px'}">
                            <square-skeleton 
                                :count="4"
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
                <a type="button" class="fa fa-download icon-big btn btn-outline-primary ekiti-btn pull-right" v-if="staffs.length > 0" @click="exportExcel"></a>
                <v-client-table :data="staffs" :columns="columns" v-if="staffs.length > 0">
                     <span slot="id" slot-scope="props">{{ props.index }}</span>
                     <a class="list-font" slot="Name" slot-scope="props" :href="'/staff/'+ props.row.id" v-html="props.row.first_name + ' ' + props.row.last_name + ' ' + props.row.middle_name"></a>
                     <a slot="view" slot-scope="props" class="fa fa-eye btn btn-outline-primary ekiti-btn" :href="'/staff/'+ props.row.id"></a>
                </v-client-table>
            </b-card>
        </div>
    </div>
</template>
<script>
import Vue from 'vue';
import {
    ClientTable,
    Event
} from 'vue-tables-2';
import datatable from "components/plugins/DataTable/DataTable.vue";
import VueSkeletonLoading from 'vue-skeleton-loading';
import SchoolCard from "../../widgets/sbemis/SchoolCard";

Vue.use(VueSkeletonLoading);
Vue.use(ClientTable, {}, false);
export default {
    name: "staff_list",
    components: {
        SchoolCard,
    },
    data() {
        return {
            schoolInfo: {},
            columns: ['id', 'Name', 'view'],
            staffs: [],
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
    created() {
        // get school informations
        this.$school.schoolProfile(this.$route.params.id).then(data => {
            this.schoolInfo = data;
        })

       this.$staff.schoolStaff(this.$route.params.id).then(data => {
            this.staffs = data.data;
        })
    },

    methods: {
        checkNull(val) {
            return  val === null ? "" : val;
        },
        exportExcel() {
            const mimeType = 'data:application/vnd.ms-excel';
            const html = this.renderTable().replace(/ /g, '%20');

            const d = new Date();

            var dummy = document.createElement('a');
            dummy.href = mimeType + ', ' + html;
            dummy.download = 'staffs-' + this.schoolInfo.name.toLowerCase().replace(/ /g, '-') + '-' + d.getFullYear() + '-' + (d.getMonth() +
                1) + '-' + d.getDate() + '-' + d.getHours() + '-' + d.getMinutes() + '-' + d.getSeconds() +
                '.xls';
            dummy.click();
        },

        renderTable() {
            console.log(this.staffs)
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
                table += `<td>${this.checkNull(this.staffs[i].id)}</td>`;
                table += `<td>${this.checkNull(this.staffs[i].last_name)}</td>`;
                table += `<td>${this.checkNull(this.staffs[i].middle_name)}</td>`;
                table += `<td>${this.checkNull(this.staffs[i].first_name)}</td>`;
                table += `<td>${this.checkNull(this.staffs[i].sex)}</td>`;
                table += `<td>${this.checkNull(this.staffs[i].phone)}</td>`;
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
</style>

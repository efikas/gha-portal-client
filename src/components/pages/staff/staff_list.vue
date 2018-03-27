<template>
    <div class="row">
        <div class="col-lg-12 mb-3">
            <b-card header="AJAX Client Table" header-tag="h4" class="bg-info-card">
                <v-client-table :data="staffs" :columns="columns">
                     <span slot="id" slot-scope="props">{{ props.index }}</span>
                     <a slot="Name" slot-scope="props" :href="'/#/staff/'+ props.row.id + '/profile'">{{ props.row.first_name + ' ' + props.row.last_name + ' ' + props.row.middle_name }}</a>
                     <a slot="view" slot-scope="props" class="fa fa-eye icon-big" :href="'/#/staff/'+ props.row.id + '/profile'"></a>
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
import api from '../../../services/app.service'


Vue.use(ClientTable, {}, false);
export default {
    name: "staff_list",
    components: {
        datatable
    },
    data() {
        return {
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
    mounted() {
       api.schoolStaff(this.$route.params.id).then(data => {
            this.staffs = data.data;
        })
    }
}
</script>
<style scoped>
    .icon-big {
     font-size: 20px;
    }
</style>

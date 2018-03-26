<template>
    <div class="row">
        <div class="col-lg-12 mb-3">
            <b-card header="AJAX Client Table" header-tag="h4" class="bg-info-card">
                <v-client-table :data="tableData2" :columns="columns">
                     <span slot="id" slot-scope="props">{{ props.index }}</span>
                     <a slot="view" slot-scope="props" class="fa fa-eye icon-big" :href="'/#/school/'+ props.row.id+'/staff'"></a>
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
import JSONData from '../../../modules/school_manage.json'

Vue.use(ClientTable, {}, false);
export default {
    name: "advanced_tables",
    components: {
        datatable
    },
    data() {
        return {
            columns: ['id', 'school_name', 'view'],
            tableData2: [],
            options: {
                sortIcon: {
                    base: 'fa',
                    up: 'fa fa-angle-up',
                    down: 'fa fa-angle-down'
                },
                // see the options API
                skin: "table-hover table-striped table-bordered",
                perPage: 7,
                // footerHeadings: true,
                highlightMatches: true,
                pagination: {
                    chunk: 3,
                    //set dropdown to true to get dropdown instead of pagenation
                    dropdown: false
                }
            }
        }
    },
    mounted() {
       let data = JSONData.data;
        this.tableData2 = data;
    }
}
</script>
<style scoped>
    .icon-big {
     font-size: 20px;
    }
</style>

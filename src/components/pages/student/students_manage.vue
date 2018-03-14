<template>
    <div class="row">
        <div class="col-lg-12 mb-3">
            <b-card header="AJAX Client Table" header-tag="h4" class="bg-info-card">
                <v-client-table :data="tableData2" :columns="columns" :options="options"></v-client-table>
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
Vue.use(ClientTable, {}, false);
export default {
    name: "advanced_tables",
    components: {
        datatable
    },
    data() {
        return {
            columns: ['id', 'name', 'age'],
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
        axios.get("http://www.filltext.com/?rows=50&id={index}&name={firstName}~{lastName}&age={numberRange|20,60}").then(response => {
                this.tableData2 = response.data;
            })
            .catch(function(error) {

            });
    }
}
</script>
<style scoped>

</style>

<template>
    <div class="row">
        <div class="col-lg-12 mb-3">
            <school-table :table-data="schools"
                          :header="'List of Schools'"
                          :route-to="'student-list'"></school-table>
        </div>
    </div>
</template>
<script>
import Vue from 'vue'
import {
    ClientTable,
    Event
} from 'vue-tables-2';
import datatable from "components/plugins/DataTable/DataTable.vue";
import VueSkeletonLoading from 'vue-skeleton-loading';
import schoolTable from '../../custom_components/schoolTable';

Vue.use(VueSkeletonLoading);

Vue.use(ClientTable, {}, false);
export default {
    name: "advanced_tables",
    components: {
        datatable,
        schoolTable
    },
    data() {
        return {
            columns: ['id', 'name', 'view'],
            schools: [],
            options: {
                sortIcon: {
                    base: 'fa',
                    up: 'fa fa-angle-up',
                    down: 'fa fa-angle-down'
                },
                // see the options API
                // skin: "table-hover table-striped table-bordered",
                perPage: 50,
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
        this.$school.allSchools().then(data => {
            this.schools = data.data;
        })
    }
}
</script>
<style scoped>
    .icon-big {
     font-size: 20px;
    }
</style>

<template>
    <div class="row">
        <div class="col-lg-12 mb-3">
            <b-card header="List of Schools" header-tag="h4" class="bg-header-card">
                <div style="margin: 2%" v-if="schools.length < 1">
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
                
                <v-client-table :data="schools" :columns="columns" v-if="schools.length > 0">
                     <span slot="id" slot-scope="props">{{ props.index }}</span>
                     <a class="list-font" slot="name" slot-scope="props" :href="'/school/'+ props.row.id + '/staffs'" v-html="props.row.name"></a>
                     <a slot="view" slot-scope="props" class="fa fa-pencil icon-big  btn btn-outline-primary" :href="'/school/'+ props.row.id+'/staffs'"></a>
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

Vue.use(VueSkeletonLoading);
Vue.use(ClientTable, {}, false);
export default {
    name: "advanced_tables",
    components: {
        datatable
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
                skin: "table-hover table-striped table-bordered",
                perPage: 20,
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
    .list-font {
        font-size:1.3em;
    }
</style>

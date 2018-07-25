<template>
    <div class="row">
        <div class="col-lg-12 mb-3">
            <b-breadcrumb :items="items1" class="breadcrumb2" />

            <b-card v-if="this.$route.params.lgaId">
                <h2>List of {{ categoryName }} {{ levelName }} Schools in Ado</h2>

            </b-card>

            <school-table :table-data="schools"
                          :header="(this.$route.params.lgaId) ? `List of ${ categoryName } ${ levelName } Schools in Ado` : 'List of Schools'"
                          :route-to="'school-profile'"></school-table>
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
import schoolTable from '../../custom_components/schoolTable';

Vue.use(ClientTable, {}, false);
Vue.use(VueSkeletonLoading);
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
            lgaId: '',
            level : '',
            categoryId: null,
            lgaName : '',
            categoryName : null,
            levelName : '',
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
            },
            items1: [{
                text: 'School',
                link: '/school',
            }, {
                text: 'Manage',
                active: true
            }],
        }
    },
    mounted() {
        //check for lga id and category id in the url
        if (this.$route.params.lgaId){
            let queryObject = null;
            this.lgaId = this.$route.params.lgaId
            this.categoryId = this.$route.params.catId
            this.level = this.$route.params.level

            //set the route parameter name
            if(this.categoryId === '1') this.categoryName = 'public';
            if(this.categoryId === '2') this.categoryName = 'private';
            if(this.level === 'PRY') this.levelName = 'primary';
            if(this.level === 'SEC') this.levelName = 'secondary';

            //get category and level and construct query accordingly
            if(this.categoryId && this.level){
                queryObject = {
                    category: this.categoryName,
                    level: this.levelName,
                };
            }
            else if(this.categoryId){
                queryObject = {
                    category: this.categoryName,
                };
            }
            else if(this.level) {
                queryObject = {
                    level: this.levelName,
                };
            } else{}

            // console.log(queryObject);
            this.$school.getSchoolsPerLga(this.lgaId, queryObject).then(data => {
                // console.log(data.data)
                this.schools = data;
            })
        }
        else {
            this.$school.allSchools().then(data => {
                this.schools = data.data;
            })
        }
    },
    methods: {
        rowClick(){
            // alert(this.row.id);
        }
    }
}
</script>
<style scoped>
 .icon-big {
     font-size: 20px;
 }
</style>

<style lang="scss" scoped>

</style>


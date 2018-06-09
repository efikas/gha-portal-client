<template>
    <div class="row">
        <div class="col-lg-12 mb-3">
            <b-breadcrumb :items="items1" class="breadcrumb2" />

            <b-card v-if="this.$route.params.lgaId">
                <h2>List of {{ categoryName }} {{ levelName }} Schools in Ado</h2>

            </b-card>

            <b-card :header="(this.$route.params.lgaId) ? '' : 'List of Schools'" header-tag="h4" class="bg-header-card">
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
                
                <v-client-table :data="schools" :columns="columns" :options="options" v-if="schools.length > 0" @row-click="rowClick">
                    <a slot="id" slot-scope="props">{{ props.index }}</a>
                    <router-link tag="a" class="list-font" slot="name" slot-scope="props" :to="{ name: 'school-profile', params: { id: props.row.id }}" v-html="props.row.name"></router-link>
                     <!--<a slot="school_name" slot-scope="props" :href="'/#/school/'+ props.row.id+'/profile'">{{ props.row.school_name }}</a>-->
                     <router-link tag="a" slot="view" slot-scope="props" class="fa fa-pencil icon-big btn btn-outline-primary ekiti-btn" :to="{ name: 'school-profile', params: { id: props.row.id }}"></router-link>
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

Vue.use(ClientTable, {}, false);
Vue.use(VueSkeletonLoading);
export default {
    name: "advanced_tables",
    components: {
        datatable
    },
    data() {
        return {
            columns: ['id', 'name', 'view'],
            schools: [],
            lgaId: '',
            level : '',
            categoryId: '',
            lgaName : '',
            categoryName : '',
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
            this.lgaId = this.$route.params.lgaId
            this.categoryId = this.$route.params.catId
            this.level = this.$route.params.level

            //set the route parameter name
            if(this.categoryId === '1') this.categoryName = 'Public';
            if(this.categoryId === '2') this.categoryName = 'Private';
            if(this.level === 'PRY') this.levelName = 'Primary';
            if(this.level === 'SEC') this.levelName = 'Secondary';

            //get category and level and filter school list accordingly
            if(this.categoryId && this.level){

                this.$school.getSchoolsPerLga(this.lgaId).then(data => {
                    // console.log(data.data)
                    this.schools = data.data.filter( school =>{
<<<<<<< HEAD
                        // try {
                            return (school.category == this.categoryName && school.education_level == this.levelName);
                        // }
                        // catch(err) {
                        //    console.error(err);
                        // }
                        // return [];
=======
                        try {
                            return (school.category == this.categoryName && school.education_level == this.levelName);
                        }
                        catch(err) {
                           console.error(err);
                        }
                        return [];
>>>>>>> aebf69b674fe3fafcab8ee2efb079da7d40405b2
                    })
                })
            }

            else if(this.categoryId){

                this.$school.getSchoolsPerLga(this.lgaId).then(data => {
                    // console.log(data.data)

                    this.schools = data.data.filter( school =>{
<<<<<<< HEAD
                        // try {
                            return (school.category == this.categoryName);
                        // }
                        // catch(err) {
                        //     console.error(err);
                        // }
                        // return [];
=======
                        try {
                            return (school.category == this.categoryName);
                        }
                        catch(err) {
                            console.error(err);
                        }
                        return [];
>>>>>>> aebf69b674fe3fafcab8ee2efb079da7d40405b2
                    })
                })
            }
            else if(this.level){

                this.$school.getSchoolsPerLga(this.lgaId).then(data => {
                    // console.log(data.data)

                    this.schools = data.data.filter( school =>{
<<<<<<< HEAD
                        // try {
                            return (school.education_level == this.levelName);
                        // }
                        // catch(err) {
                        //     console.error(err);
                        // }
                        // return [];
=======
                        try {
                            return (school.education_level == this.levelName);
                        }
                        catch(err) {
                            console.error(err);
                        }
                        return [];
>>>>>>> aebf69b674fe3fafcab8ee2efb079da7d40405b2
                    })
                })
            }
            else {}
        }
        else {
            this.$school.allSchools().then(data => {
                this.schools = data.data;
            })
        }
        // console.log(this.schools);
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


<template>
    <div class="row">
        <div class="col-lg-12 mb-3">
            <b-card header="AJAX Client Table" header-tag="h4" class="bg-info-card">
                <v-client-table :data="schools" :columns="columns" :options="options">
                    <a slot="id" slot-scope="props">{{ props.index }}</a>
                    <router-link tag="a" slot="school_name" slot-scope="props" :to="{ name: 'school-profile', params: { id: props.row.id }}" v-html="props.row.school_name"></router-link>
                     <!--<a slot="school_name" slot-scope="props" :href="'/#/school/'+ props.row.id+'/profile'">{{ props.row.school_name }}</a>-->
                     <router-link tag="a" slot="view" slot-scope="props" class="fa fa-pencil icon-big btn btn-outline-primary" :to="{ name: 'school-profile', params: { id: props.row.id }}"></router-link>
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

Vue.use(ClientTable, {}, false);
export default {
    name: "advanced_tables",
    components: {
        datatable
    },
    data() {
        return {
            columns: ['id', 'school_name', 'view'],
            schools: [],
            lgaId: '',
            level : '',
            categoryId: '',
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
        //check for lga id and category id in the url
        if (this.$route.params.lgaId){
            this.lgaId = this.$route.params.lgaId
            this.categoryId = this.$route.params.catId
            this.level = this.$route.params.level

            //get category and level and filter school list accordingly
            if(this.categoryId && this.level){

                this.$school.getSchoolsPerLga(this.lgaId).then(data => {
                    console.log(data.data)
                    this.schools = data.data.filter( school =>{
                        try {
                            return (school.data.school_category_id == this.categoryId && school.data.education_levels == this.level.toUpperCase());
                        }
                        catch(err) {
                           console.error(err);
                        }
                        return [];
                    })
                })
            }

            else if(this.categoryId){

                this.$school.getSchoolsPerLga(this.lgaId).then(data => {
                    this.schools = data.data.filter( school =>{
                        try {
                            return (school.data.school_category_id == this.categoryId);
                        }
                        catch(err) {
                            console.error(err);
                        }
                        return [];
                    })
                })
            }
            else if(this.level){

                this.$school.getSchoolsPerLga(this.lgaId).then(data => {
                    this.schools = data.data.filter( school =>{
                        try {
                            return (school.data.education_levels == this.level.toUpperCase());
                        }
                        catch(err) {
                            console.error(err);
                        }
                        return [];
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
        console.log(this.schools);
    }
}
</script>
<style scoped>
 .icon-big {
     font-size: 20px;
 }
</style>


<template>
    <div class="row">
        <div class="col-lg-12 mb-3">
            <b-breadcrumb :items="items1" class="breadcrumb2" />

            <b-card v-if="this.$route.params.lgaId">
                <h2>List of {{ category }} {{ level }} Schools in Ado</h2>

            </b-card>

            <school-table :table-data="schools"
                          :header="(this.$route.params.lgaId) ? `List of ${ category } ${ level } Schools in Ado` : 'List of Schools'"
                          :route-to="'school-profile'"
                          :renderFn="renderTable"
            ></school-table>
        </div>
    </div>
</template>
<script>
import Vue from 'vue';
import {
    ClientTable,
    Event
} from 'vue-tables-2';
import VueSkeletonLoading from 'vue-skeleton-loading';
import schoolTable from '../../patches/schoolTable';

Vue.use(ClientTable, {}, false);
Vue.use(VueSkeletonLoading);
export default {
    name: "school_manage",
    components: {
        schoolTable
    },
    data() {
        return {
            columns: ['id', 'name', 'view'],
            lgaId: '',
            level : '',
            categoryId: null,
            lgaName : '',
            category : null,
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

    computed: {
        schools() {
            return this.$store.getters.schools;
        }
    },

    created() {
        //check for lga id and category id in the url
        if (this.$route.query.id){
            let query = {lgaId: this.$route.query.id};

            //set the route parameter name
            if(this.$route.query.cat) {
                this.category = this.$route.query.cat === 1 ? 'public':'private';
                query.category = this.category;
            }
            if(this.$route.query.level) {
                this.level = this.$route.query.level === 'pry' ? 'primary' : 'secondary';
                query.level = this.level;
            }
            this.$store.dispatch('lgaSchools', query);
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
        },
        renderTable() {
            var table = '<table><thead><tr><th>ID</th><th>SCHOOL NAME</th><th>ADDRESS</th></tr></thead>';
            table += '<tbody>';

            for (var i = 0; i < this.schools.length; i++) {
                table += '<tr>';
                table += `<td>${this.schools[i].id}</td>`;
                table += `<td>${this.schools[i].name}</td>`;
                table += `<td>${this.schools[i].address}</td>`;
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

<style lang="scss" scoped>

</style>


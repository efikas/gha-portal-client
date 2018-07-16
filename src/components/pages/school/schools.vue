<template>
    <div class="row">
        <div class="col-lg-12 mb-3">
            <b-card header="Schools List" header-tag="h4" class="bg-header-card">
                <div style="margin: 2%" v-if="schools.length < 1">
                    <skeleton-loading>
                        <row :gutter="{top: '20px'}">
                            <square-skeleton
                                    :count="10"
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
                <div v-else>
                    <a type="button" class="fa fa-download icon-big btn btn-outline-primary ekiti-btn pull-right"
                       @click="exportExcel"></a>
                    <v-client-table :data="schools" :columns="columns" :options="options">
                        <router-link
                                class="list-font sch-link"
                                slot="name"
                                slot-scope="props"
                                :to="{ name: 'school', params: { id: props.row.id }}"
                                v-html="props.row.name"
                        >
                        </router-link>
                        <div slot="actions" slot-scope="props">
                            <router-link class="btn btn-outline-primary ekiti-btn" :to="{name:'school-staffs', params:{id: props.row.id}}"><i class="fa fa-male"></i> Staffs</router-link>
                            <router-link class="btn btn-outline-primary ekiti-btn" :to="{name:'school-students', params:{id: props.row.id}}"><i class="fa fa-users"></i> Students</router-link>
                        </div>
                    </v-client-table>
                </div>
            </b-card>
        </div>
    </div>
</template>
<script>
import schoolTable from '../../patches/schoolTable';
export default {
    name: "school_manage",
    components: {
        schoolTable
    },
    data() {
        return {
            columns: ['id', 'name', 'actions'],
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
        } else {
            this.$store.dispatch('schools');
        }
        // console.log(this.schools);
    },
    methods: {
        rowClick(){
            // alert(this.row.id);
        },
        exportExcel() {
            if (typeof this.renderFn === 'undefined') return;
            const mimeType = 'data:application/vnd.ms-excel';
            const html = this.renderFn().replace(/ /g, '%20');

            const d = new Date();

            var dummy = document.createElement('a');
            dummy.href = mimeType + ', ' + html;
            dummy.download = this.header.toLowerCase().replace(/ /g, '-') + '-' + d.getFullYear() + '-' + (d.getMonth() +
                1) + '-' + d.getDate() + '-' + d.getHours() + '-' + d.getMinutes() + '-' + d.getSeconds() +
                '.xls';
            dummy.click();
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
<style>
    .VueTables__search-field label {
        border: 1px solid red;
    }
</style>
<style lang="scss" scoped>
    .icon-big {
        font-size: 20px;
    }
    .fb_text{
        font-size: 15px;
        float: left;
        margin-right: 3px;
    }
    .sch-link{
        display: block;
        padding: 3px;
    }
    .sch-link:hover{
        text-decoration: underline !important;
    }

</style>


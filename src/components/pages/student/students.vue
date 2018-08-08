<template>
    <div class="row">
        <div class="col-lg-12 mb-3">
            <SchoolCard></SchoolCard>

            <b-card header="List of Students" header-tag="h4" class="bg-header-card">
                <div style="margin: 2%" v-if="loading">
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
                    <div class="row">
                        <div class="">
                            <div class="pull-right">
                                <router-link :to="{'name': 'school-import'}" class="fa fa-upload"> Upload</router-link> |
                                <a class="fa fa-download"
                                   href="javascript: void (0)"
                                   @click.prevent="exportExcel"> Download</a>
                            </div>
                        </div>
                    </div>
                    <v-client-table :data="students" :columns="columns" :options="options">
                        <span slot="id" slot-scope="student">{{ student.index }}</span>
                        <router-link class="list-font"
                                     slot="name"
                                     slot-scope="props"
                                     :to="{name:'student-profile', params:{id:props.row.id}}"
                        >{{ props.row.first_name + ' ' + props.row.last_name + ' ' + props.row.middle_name }}
                        </router-link>
                        <span slot="current_class" slot-scope="student">{{ student.row.current_class?student.row.current_class.class:null }}</span>
                        <div slot="actions" slot-scope="student">
                            <a href="javascript: void(0)" @click="deleteRecord(student.row.id)" class=""><i
                                    class="fa fa-trash"></i></a>
                        </div>
                    </v-client-table>
                </div>
            </b-card>
        </div>
    </div>
</template>
<script>
import SchoolCard from "../../widgets/sbemis/SchoolCard1";
import {mapGetters} from 'vuex'
import Toaster from '../../mixins/toaster'

export default {
    components: {
        SchoolCard,
    },
    mixins: [Toaster],
    data() {
        return {
            loading: true,
            columns: ['id', 'name', 'current_class', 'sex', 'place_of_birth', 'actions'],
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
    computed:mapGetters(['students', 'school']),
    watch: {
        'students'() {
            this.loading = false;
        }
    },
    created() {
        this.loading = true;
        this.$store.dispatch('students', {id: this.$route.params.id});
    },
    methods: {
        deleteRecord(id) {
            if(confirm('Deleting this item will remove all it\'s related data! Are you sure you want to proceed?')) {
                this.$store.dispatch('deleteStudents', {ids: [id]}).then(()=>{
                    this.successMsg('Selected data has been removed!', 'Success');
                }).catch(() => {
                    this.errorMsg('Error occurred: unable to delete item', 'Error');
                })
            }
        },
        exportExcel() {
            const mimeType = 'data:application/vnd.ms-excel';
            const html = this.renderTable().replace(/ /g, '%20');

            const d = new Date();

            var dummy = document.createElement('a');
            dummy.href = mimeType + ', ' + html;
            dummy.download = 'students-' + this.school.name.toLowerCase().replace(/ /g, '-') + '-' + d.getFullYear() + '-' + (d.getMonth() +
                1) + '-' + d.getDate() + '-' + d.getHours() + '-' + d.getMinutes() + '-' + d.getSeconds() +
                '.xls';
            dummy.click();
        },

        renderTable() {
            var table = '<table><thead>' +
                '<tr>' +
                '<th>ID</th>' +
                '<th>LAST NAME</th>' +
                '<th>MIDDLE NAME</th>' +
                '<th>FIRST NAME</th>' +
                '<th>SEX</th>' +
                '<th>CLASS</th>' +
                '</tr></thead>';
            table += '<tbody>';

            for (var i = 0; i < this.students.length; i++) {
                table += '<tr>';
                table += `<td>${this.students[i]?this.students[i].id:null}</td>`;
                table += `<td>${this.students[i]?this.students[i].last_name:null}</td>`;
                table += `<td>${this.students[i]?this.students[i].middle_name:null}</td>`;
                table += `<td>${this.students[i]?this.students[i].first_name:null}</td>`;
                table += `<td>${this.students[i]?this.students[i].sex:null}</td>`;
                table += `<td>${this.students[i].current_class?this.students[i].current_class.class : ''}</td>`;
                table += '</tr>';
            }
            table += '</tbody></table>';
            return table;
        },
    }
}
</script>

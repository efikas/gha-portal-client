<template>
    <b-card :header="header" header-tag="h4" class="bg-header-card">
        <div style="margin: 2%" v-if="list.length < 1">
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
        <a type="button" class="fa fa-download icon-big btn btn-outline-primary ekiti-btn pull-right" v-if="list.length > 0" @click="exportExcel"></a>
        <v-client-table :data="list" :columns="columns" :options="options" v-if="list.length > 0" @row-click="rowClick">
            <a slot="id" slot-scope="props">{{ props.index }}</a>
            <router-link tag="a" class="list-font" slot="name" slot-scope="props" :to="{ name: routeTo, params: { id: props.row.id }}" v-html="props.row.name"></router-link>
            <!--<a slot="school_name" slot-scope="props" :href="'/#/school/'+ props.row.id+'/profile'">{{ props.row.school_name }}</a>-->
            <router-link tag="a" slot="view" slot-scope="props" class="fa fa-pencil icon-big btn btn-outline-primary ekiti-btn" :to="{ name: routeTo, params: { id: props.row.id }}"></router-link>
        </v-client-table>
    </b-card>
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
        name: "schoolTable",
        props: ['tableData', 'header', 'routeTo'],
        components: {
            datatable
        },
        data() {
            return {
                columns: ['id', 'name', 'view'],
                list: [],
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
        mounted() {

        },
        methods: {
            rowClick(){
                // alert(this.row.id);
            },
            exportExcel() {
                // attach selector to the table
                // const exportTable = document.querySelectorAll('table.VueTables__table')[0].setAttribute('ref', 'export');
                const exportTable = document.querySelectorAll('table.VueTables__table')[0];

                const mimeType = 'data:application/vnd.ms-excel';
                let html = exportTable.innerHTML.replace(/ /g, '%20');

                // attach a row to the head
                html = `<head><tr><th colspan="3">${ this.header.toUpperCase() }</th></tr>` + html.split('<head>')[0];

                const d = new Date();

                var dummy = document.createElement('a');
                dummy.href = mimeType + ', ' + '<table>' + html + '</table>';
                dummy.download = this.header.toLowerCase().replace(/ /g, '-') + '-' + d.getFullYear() + '-' + (d.getMonth() +
                    1) + '-' + d.getDate() + '-' + d.getHours() + '-' + d.getMinutes() + '-' + d.getSeconds() +
                    '.xls';
                dummy.click();
            }
        },
        watch: {
            tableData(val){
                this.list = val;
            }
        }
    }
</script>

<style scoped>
    .icon-big {
        font-size: 20px;
    }
</style>
<template>
    <b-card :header="header" header-tag="h4" class="bg-header-card">
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
        <a type="button" class="fa fa-download icon-big btn btn-outline-primary ekiti-btn pull-right"
           v-else @click="exportExcel"></a>
        <v-client-table :data="schools" :columns="columns" :options="options" v-if="schools.length > 0"
                        @row-click="rowClick">
            <a slot="id" slot-scope="props">{{ props.index }}</a>
            <router-link tag="a" class="list-font" slot="name" slot-scope="props"
                         :to="{ name: routeTo, params: { id: props.row.id }}" v-html="props.row.name"></router-link>
            <!--<a slot="school_name" slot-scope="props" :href="'/#/school/'+ props.row.id+'/profile'">{{ props.row.school_name }}</a>-->
            <router-link tag="a" slot="view" slot-scope="props"
                         class="fa fa-pencil icon-big btn btn-outline-primary ekiti-btn"
                         :to="{ name: routeTo, params: { id: props.row.id }}"></router-link>
        </v-client-table>
    </b-card>
</template>

<script>
    import Vue from 'vue';
    import {
        ClientTable,
        Event
    } from 'vue-tables-2';
    import VueSkeletonLoading from 'vue-skeleton-loading';

    Vue.use(ClientTable, {}, false);
    Vue.use(VueSkeletonLoading);
    export default {
        name: "schoolTable",
        props: {
            schools: Array,
            header: String,
            routeTo: String,
            renderFn: Function
        },
        components: {},
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
                    perPage: 10,
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
        },
        methods: {
            rowClick() {
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
            }
        }
    }
</script>

<style scoped>
    .icon-big {
        font-size: 20px;
    }
</style>
<template>
    <div>
        <div class="row">
            <div class="col-lg-12">
                <b-card>
                    <div class="table-responsive">
                        <a type="button"
                           class="fa fa-download icon-big btn btn-outline-primary ekiti-btn pull-right mb-2"
                           @click="exportExcel"></a>
                        <table class="table table-bordered table-striped mytableh text-center" ref="exportRef">
                            <thead>
                            <tr>
                                <th rowspan="2">LGA</th>
                                <th colspan="3">Public</th>
                                <th colspan="3">Private</th>
                                <th rowspan="2" align="center">+Primary</th>
                                <th rowspan="2">+Secondary</th>
                                <th rowspan="2">Total</th>
                            </tr>
                            <tr>
                                <th>Primary</th>
                                <th>Secondary</th>
                                <th>Total</th>
                                <th>Primary</th>
                                <th>Secondary</th>
                                <th>Total</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="(lga, index) in lgaSchStats" :key="index">
                                <td>
                                    <a href="javascript:void (0)" @click="gotoLink(index, {id: lga.id})">{{ lga.name }} </a>
                                </td>
                                <td>
                                    <a href="javascript:void (0)"
                                       @click="gotoLink(index, {id: lga.id, category: 1, level: 'pry'})">
                                        {{ lga.public.primary }}
                                    </a>
                                </td>
                                <td>
                                    <a href="javascript:void (0)"
                                       @click="gotoLink(index, {id: lga.id, category: 1, level: 'sec'})">
                                        {{ lga.public.secondary }}
                                    </a>
                                </td>
                                <td>
                                    <a href="javascript:void (0)" @click="gotoLink(index, {id: lga.id, category: 1})">
                                        {{ lga.public.total }}
                                    </a>
                                </td>
                                <td>
                                    <a href="javascript:void (0)"
                                       @click="gotoLink(index, {id: lga.id, category: 2, level: 'pry'})">
                                        {{ lga.private.primary }}
                                    </a>
                                </td>
                                <td>
                                    <a href="javascript:void (0)"
                                       @click="gotoLink(index, {id: lga.id, category: 2, level: 'sec'})">
                                        {{ lga.private.secondary }}
                                    </a>
                                </td>
                                <td>
                                    <a href="javascript:void (0)" @click="gotoLink(index, {id: lga.id, category: 2})">
                                        {{ lga.private.total }}
                                    </a>
                                </td>
                                <td>
                                    <a href="javascript:void (0)" @click="gotoLink(index, {id: lga.id, level: 'pry'})">
                                        {{ lga.total.primary }}
                                    </a>
                                </td>
                                <td>
                                    <a href="javascript:void (0)" @click="gotoLink(index, {id: lga.id, level: 'sec'})">
                                        {{ lga.total.secondary }}
                                    </a>
                                </td>
                                <td>
                                    {{ lga.total.secondary + lga.total.primary }}
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </b-card>

            </div>
        </div>
        <transition name="modal" v-if="showModal">
            <div class="modal-mask">
                <div class="modal-wrapper">
                    <div class="modal-container">

                        <div class="modal-header">
                            <h3 v-html="modalTitle"></h3>
                            <button class="modal-default-button btn btn-default" @click.stop="hideModal($event)">
                                <i class="fa fa-close"></i>
                            </button>
                        </div>

                        <div class="modal-body">
                            <slot name="body">
                                <div style="margin: 2%" v-if="!schools.length">
                                    <skeleton-loading>
                                        <row :gutter="{top: '20px'}">
                                            <square-skeleton :count="5" :boxProperties="{ height: '30px', width: '100%', bottom: '10px' }"></square-skeleton>
                                        </row>
                                    </skeleton-loading>
                                </div>

                                <v-client-table :data="schools" :columns="columns" :options="options" v-else>
                                    <a slot="id" slot-scope="props">{{ props.index }}</a>
                                    <router-link tag="a" class="list-font" slot="name" slot-scope="props"
                                                 :to="{ name: 'school', params: { id: props.row.id }}"
                                                 v-html="props.row.name"></router-link>
                                    <div slot="actions" slot-scope="school" style="display: flex">
                                        <router-link tag="a" title="staffs"
                                                     :to="{name:'school-staffs', params:{id: school.row.id}}"><i
                                                class="fa fa-male"></i>
                                        </router-link> |
                                        <router-link tag="a" title="students"
                                                     :to="{name:'school-students', params:{id: school.row.id}}"><i
                                                class="fa fa-users"></i>
                                        </router-link>
                                    </div>
                                </v-client-table>
                            </slot>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
    </div>
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
        components: {},
        data() {
            return {
                showModal: false,
                modalTitle: '',
                columns: ['id', 'name', 'actions'],
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
        created: function () {
            this.$store.dispatch('lgaSchStats');
        },

        computed: {
            schools() {
                return this.$store.getters.schools;
            },
            lgaSchStats() {
                return this.$store.getters.school_stats;
            }
        },

        methods: {
            hideModal(event) {
                this.showModal = false;
                event.stopPropagation();
            },
            formModalTitle(index, query) {
                this.modalTitle ='';
                if(query.category) this.modalTitle += query.category.toUpperCase() + " ";
                if(query.level) this.modalTitle += query.level.toUpperCase() + " ";
                this.modalTitle += 'SCHOOLS IN ' + `<strong>${this.lgaSchStats[index].name.toUpperCase()}</strong>`;
            },
            gotoLink(index, query) {
                if (query.id) {
                    //set the route parameter name
                    if (query.category) {
                        query.category = query.category === 1 ? 'public' : 'private';
                    }
                    if (query.level) {
                        query.level = query.level === 'pry' ? 'primary' : 'secondary';
                    }
                    this.$store.commit('SET_LGA_SCHOOLS', []);
                    this.$store.dispatch('lgaSchools', query);
                    this.formModalTitle(index, query);
                    this.showModal = true;
                }
            },
            exportExcel() {
                const mimeType = 'data:application/vnd.ms-excel';
                const html = this.$refs.exportRef.innerHTML.replace(/ /g, '%20');

                const d = new Date();

                var dummy = document.createElement('a');
                dummy.href = mimeType + ', ' + '<table>' + html + '</table>';
                dummy.download = 'school distributions' + '-' + d.getFullYear() + '-' + (d.getMonth() +
                    1) + '-' + d.getDate() + '-' + d.getHours() + '-' + d.getMinutes() + '-' + d.getSeconds() +
                    '.xls';
                dummy.click();
            },
        }
    }
</script>
<style scoped>
    .table td {
        padding: 0px !important;
    }

    .table td {
        padding: 0px !important;
        font-size: 12px;
    }

    .table tr a {
        cursor: pointer;
        display: block;
        margin: 0 !important;
        padding: 3px;
    }

    .table a:hover {
        text-decoration: underline !important;
    }

</style>
<style scoped lang="scss">
    @import "~components/layouts/css/customvariables";
    .modal-mask {
        position: fixed;
        z-index: 9998;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .8);
        display: table;
        transition: opacity .3s ease;
    }

    .modal-wrapper {
        display: table-cell;
        vertical-align: middle;
    }

    .modal-container {
        width: 800px;
        margin: 0px auto;
        padding: 20px 30px;
        background-color: #fff;
        border-radius: 2px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
        transition: all .3s ease;
        font-family: Helvetica, Arial, sans-serif;
    }

    .modal-header h3 {
        margin-top: 0;
        color: $content_color;
    }

    .modal-body {
        margin: 20px 0;
        height: 300px;
        overflow: auto;
    }

    .modal-default-button {
        float: right;
    }

    /*
     * The following styles are auto-applied to elements with
     * transition="modal" when their visibility is toggled
     * by Vue.js.
     *
     * You can easily play with the modal transition by editing
     * these styles.
     */

    .modal-enter {
        opacity: 0;
    }

    .modal-leave-active {
        opacity: 0;
    }

    .modal-enter .modal-container,
    .modal-leave-active .modal-container {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
    }
</style>
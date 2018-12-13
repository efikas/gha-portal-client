<template>
    <div class="row">
        <div class="col-lg-3 mb-3">
            <b-card header="Mails" header-tag="h4" class="bg-success-card">
                <b-list-group class="project-deatails">
                    <b-list-group-item>
                        <a href="#" class="text-primary"><i class="fa fa-envelope"></i> Inbox <span class="badge badge-primary float-right">28</span></a>
                    </b-list-group-item>
                    <b-list-group-item>
                        <a href="#" class="text-info"><i class="fa fa-mail-forward"></i> Sent <span class=" badge badge-info float-right">7</span></a>
                    </b-list-group-item>
                    <b-list-group-item>
                        <a href="#" class="text-success"><i class="fa fa-save"></i> Draft <span class=" badge badge-success float-right">9</span></a>
                    </b-list-group-item>
                    <b-list-group-item>
                        <a href="#" class="text-danger"><i class="fa fa-trash"></i> Trash <span class=" badge badge-danger float-right"> 11</span></a>
                    </b-list-group-item>
                </b-list-group>
            </b-card>
        </div>
        <div class="col-lg-9 mb-3">
            <b-card header="" header-tag="h4" class="bg-header-card">
                <div class="clear-fix"></div>
                <div style="margin: 2%" v-if="messages.length < 1">
                    <skeleton-loading>
                        <row :gutter="{top: '20px'}">
                            <square-skeleton
                                    :count="10"
                                    :boxProperties="{height: '55px',width: '100%',bottom: '10px'}"
                            >
                            </square-skeleton>
                        </row>
                    </skeleton-loading>
                </div>
                <div v-else>
                    <v-client-table :data="messages" :columns="columns" :options="options">
                        <!--<span slot="id" slot-scope="message" :class="(message.row.status == 1) ? 'text-bold' : ''">-->
                            <!--{{ message.index }}-->
                        <!--</span>-->
                        <span slot="name" slot-scope="message" :class="(message.row.status == 1) ? 'text-bold' : ''">
                            {{message.row.name}}
                        </span>
                        <div slot="actions" slot-scope="message">
                            <a href="javascript: void(0)" @click="deleteRecord(message.row.id)" class=""><i class="fa fa-trash"></i></a>
                        </div>
                    </v-client-table>
                </div>
            </b-card>
        </div>
    </div>
</template>
<script>

    import {mapGetters} from 'vuex'
    import Toaster from '../../../mixins/toaster'

    export default {
        name: "teacher_notifications",
        mixins: [Toaster],
        data() {
            return {
                columns: ['title', 'date', 'actions'],
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
                messages:[
                    {
                        id: 1,
                        title: 'hello',
                        message: 'hello there',
                        date: new Date().toUTCString(),
                        status: 1,
                    },
                    {
                        id: 2,
                        title: 'message 2',
                        message: 'hello there',
                        date: new Date().toUTCString(),
                        status: 1,
                    },
                    {
                        id: 3,
                        title: 'message 3',
                        message: 'hello there',
                        date: new Date().toUTCString(),
                        status: 0,
                    }
                ]
            }
        },

        computed: {
            ...mapGetters(['schools']),
        },

        async created() {

        },
        methods: {
            deleteRecord(id) {
                // if(confirm('Deleting this item will remove all it\'s related data! Are you sure you want to proceed?')) {
                //     this.$store.dispatch('deleteSchools', {ids: [id]}).then(()=>{
                //         this.successMsg('Selected data has been removed!', 'Success');
                //     }).catch(() => {
                //         this.errorMsg('Error occurred: unable to delete item', 'Error');
                //     })
                // }
            }
        }
    }
</script>
<style>
    /*.VueTables__search-field label {*/
    /*border: 1px solid red;*/
    /*padding: 0;*/
    /*}*/
</style>
<style lang="scss" scoped>
    .icon-big {
        font-size: 20px;
    }

    .fb_text {
        font-size: 15px;
        float: left;
        margin-right: 3px;
    }

    .sch-link {
        display: block;
        padding: 3px;
    }

    .sch-link:hover {
        text-decoration: underline !important;
    }
    .text-bold {
        font-weight: bold !important;
    }

</style>


<template>
    <div class="row">
        <div class="col-lg-12 mb-3">
            <b-card class="bg-default-card data">
                <router-link tag="a" :to="{name: 'user-add'}" class="pull-right fa fa-plus"> Add</router-link>
                <v-client-table :data="admins" :columns="columns" :options="options">
                    <!--<a slot="id" slot-scope="props">{{ props.index }}</a>-->
                    <router-link tag="a" class="list-font" slot="name" slot-scope="props"
                                :to="{ name: 'user-profile', params: { id: props.row.id }}"
                                 v-html="props.row.name">

                    </router-link>
                    <!--&lt;!&ndash;<a slot="school_name" slot-scope="props" :href="'/#/school/'+ props.row.id+'/profile'">{{ props.row.school_name }}</a>&ndash;&gt;-->
                    <!--<router-link tag="a" slot="view" slot-scope="props"-->
                    <!--class="fa fa-pencil icon-big btn btn-outline-primary ekiti-btn"-->
                    <!--:to="{ name: routeTo, params: { id: props.row.id }}"></router-link>-->
                </v-client-table>
            </b-card>
        </div>
    </div>
</template>
<script>

    import { mapGetters } from 'vuex'
    import Button from "sweet-modal-vue/docs/components/Button";


    export default {
        name: "users",
        components: {
            Button

        },
        data() {
            return {
                columns: ['id', 'name', 'email', 'created_at'],
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
                }
            }
        },
        computed: {
            ...mapGetters(['admins'])
        },
        created() {
            this.$store.dispatch('admins');
        }
    }
</script>
<style lang="scss">
    .VueTables__search-field label{
        width: 70px;
        text-align: left !important;
    }
</style>


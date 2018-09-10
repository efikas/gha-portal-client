<template>
    <div>
        <b-card class="bg-clear2-card" no-body bg-variant="" text-variant="dark">
            <div slot="header">
                <a href="javascript:void(0)" v-b-modal.modal-staff-personal>
                    <i class=" fa fa-edit card-profile-link pull-right"></i>
                </a>

                <b-modal id="modal-staff-personal" ref="modal" title="Personal" size="lg" lazy centered hide-footer >
                    <create-form @closeModal="()=>$refs.modal.hide()"></create-form>
                </b-modal>
                <h3>
                    <img class="_51sw img" :src="require('img/icon/IKrON1RLHfZ.png')" alt="">
                    <router-link :to="{query:$route.query}" class="default-color">Personal</router-link>
                </h3>
            </div>
            <div class="">
                <div class="table-responsive">
                    <table class="table table-striped">
                        <tr>
                            <td class="text-muted">Email</td>
                            <td> {{ 'Email' }}</td>
                        </tr>
                        <tr>
                            <td class="text-muted">Roles</td>
                            <td> {{ 'Roles' }}</td>
                        </tr>
                        <tr>
                            <td class="text-muted">Permissions</td>
                            <td> {{ 'Permissions' }}</td>
                        </tr>
                    </table>
                </div></div>
        </b-card>
    </div>
</template>

<script>
    import create from 'pages/user/forms/create'
    import {mapGetters} from 'vuex'
    export default {
        name: "personal",
        components: {'create-form': create},
        computed: {
            ...mapGetters(['admin', 'data'])
        }
    }
</script>
<style type="text/css" scoped>
    table > tr td:first-of-type {
        width: 15% !important
    }
</style>
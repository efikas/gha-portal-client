<template>
    <div>
        <b-card class="bg-clear2-card" no-body text-variant="dark">
            <div slot="header">

                <a href="javascript:void(0)" v-b-modal.modal-sbmc>
                    <i class=" fa fa-edit card-profile-link pull-right"></i>
                </a>

                <b-modal id="modal-sbmc" ref="modal" title="SBMC" size="lg" lazy centered hide-footer>
                    <sbmc-form @closeModal="()=>$refs.modal.hide()"></sbmc-form>
                </b-modal>

                <h3>
                    <router-link :to="{query:$route.query, hash:$route.hash}" class="default-color">SBMC
                    </router-link>
                </h3>

            </div>
        <div class="table-responsive">
            <table class="table">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Office</th>
                    <th>Phone</th>
                    <th>Email</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="official in school.sbmc">
                    <td>{{ official.name }}</td>
                    <td>{{ official.office }}</td>
                    <td>{{ official.phone }}</td>
                    <td>{{ official.email }}</td>
                </tr>
                </tbody>
            </table>
        </div>
        </b-card>
    </div>
</template>

<script>
    import { tabsMixins } from './mixins'
    import sbmcForm from '../forms/sbmc'
    export default {
        name: "sbmc",
        components: {sbmcForm},
        mixins: [tabsMixins],
    }
</script>

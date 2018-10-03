<template>
    <div>
        <b-card class="bg-clear2-card" no-body bg-variant="" text-variant="dark">
            <div slot="header">
                <a href="javascript:void(0)" v-b-modal.modal-staff-personal>
                    <i class=" fa fa-edit card-profile-link pull-right"></i>
                </a>

                <b-modal id="modal-staff-personal" ref="modal" title="Personal" size="lg" lazy centered hide-footer >
                    <personal-form @closeModal="()=>$refs.modal.hide()"></personal-form>
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
                    <td class="text-muted">Gender</td>
                    <td> {{ staff.sex==='M'?'Male':'Female' }}</td>
                    <td class="text-muted">Date of Birth</td>
                    <td> {{ staff.date_of_birth }}</td>
                </tr>
                <tr>
                    <td class="text-muted">Email</td>
                    <td> {{ staff.email }}</td>
                    <td class="text-muted">Phone</td>
                    <td> {{ staff.phone }}</td>
                </tr>
                <tr>
                    <td class="text-muted">State of Birth</td>
                    <td> {{ staff.state_of_origin?data.states[staff.state_of_origin].name:null }}</td>
                    <td class="text-muted">Place of Birth</td>
                    <td>{{ staff.place_of_birth }}</td>
                </tr>
                <tr>
                    <td class="text-muted">Local Government</td>
                    <td> {{ staff.lga_of_origin?data.lga_areas_all[staff.lga_of_origin].name:null }}</td>
                    <td class="text-muted">Home Town</td>
                    <td> {{ staff.home_town }}</td>
                </tr>
                <tr>
                    <td class="text-muted">Marital Status</td>
                    <td> {{ staff.marital_status }}</td>
                    <td class="text-muted">Religious Status</td>
                    <td> {{ staff.religion }}</td>
                </tr>
                <tr>
                    <td class="text-muted">House Address</td>
                    <td colspan="3"> {{ staff.residential_address }}</td>
                </tr>
            </table>
                </div></div>
        </b-card>
    </div>
</template>

<script>
    import personalForm from '../../forms/personal'
    import {mapGetters} from 'vuex'
    export default {
        name: "personal",
        components: {personalForm},
        computed: {
            ...mapGetters(['staff', 'data'])
        }
    }
</script>
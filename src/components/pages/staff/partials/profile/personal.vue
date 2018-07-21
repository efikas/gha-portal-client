<template>
    <div>
        <b-card class="bg-clear-card" bg-variant="" text-variant="dark">
            <div slot="header">
                <a href="javascript:void(0)" v-b-modal.modal-staff-personal>
                    <i class=" fa fa-edit card-profile-link pull-right"></i>
                </a>

                <b-modal id="modal-staff-personal" title="Personal" size="lg" lazy centered hide-footer >
                    <personal-form></personal-form>
                </b-modal>
                <h3>
                    <img class="_51sw img" :src="require('img/icon/IKrON1RLHfZ.png')" alt="">
                    <router-link :to="{query:$route.query}" class="default-color">Personal</router-link>
                </h3>
            </div>
            <div class="p-3">
                <div class="table-responsive">
            <table class="table table-bordred table-striped mytable">
                <tbody>
                <tr>
                    <td><i class="fa fa-genderless"></i> Gender</td>
                    <td> {{ staff.sex==='M'?'Male':'Female' }}</td>
                    <td><i class="fa fa-calendar"></i> Date of Birth</td>
                    <td> {{ staff.date_of_birth }}</td>
                </tr>
                <tr>
                    <td><i class="fa fa-envelope"></i> Email</td>
                    <td> {{ staff.email }}</td>
                    <td><i class="fa fa-phone"></i> Phone</td>
                    <td> {{ staff.phone }}</td>
                </tr>
                <tr>
                    <td>State of Birth</td>
                    <td> {{ staff.state_of_origin?data.states[staff.state_of_origin].name:null }}</td>
                    <td>Place of Birth</td>
                    <td>{{ staff.place_of_birth }}</td>
                </tr>
                <tr>
                    <td>Local Government</td>
                    <td> {{ staff.lga_of_origin?data.lga_areas_all[staff.lga_of_origin].name:null }}</td>
                    <td>Home Town</td>
                    <td> {{ staff.home_town }}</td>
                </tr>
                <tr>
                    <td>Marital Status</td>
                    <td> {{ staff.marital_status }}</td>
                    <td>Religious Status</td>
                    <td> {{ staff.religion }}</td>
                </tr>
                <tr>
                    <td>House Address</td>
                    <td colspan="3"> {{ staff.residential_address }}</td>
                </tr>
                </tbody>
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
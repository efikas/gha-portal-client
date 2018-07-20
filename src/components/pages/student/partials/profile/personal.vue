<template>
    <div>
        <b-card class="bg-clear-card" bg-variant="" text-variant="dark">
            <div slot="header">

                <a href="javascript:void(0)" v-b-modal.modal6>
                    <i class=" fa fa-edit card-profile-link pull-right"></i>
                </a>

                <b-modal id="modal6" title="Personal Information" size="lg" lazy centered hide-footer >
                    <personal-form></personal-form>
                </b-modal>

                <h3>
                    <img class="_51sw img" :src="require('img/icon/IKrON1RLHfZ.png')" alt="">
                    <router-link :to="{query:$route.query}" class="default-color">Personal</router-link>
                </h3>
            </div>

            <div class="p-5">
                <div class="table-responsive">
                    <table class="table table-borderless table-striped mytable">
                        <tbody>
                        <tr>
                            <td><i class="fa fa-user"></i> Name</td>
                            <td colspan="3"> {{ `${student.first_name} ${student.last_name}
                                ${student.middle_name}` }}
                            </td>
                        </tr>
                        <tr>
                            <td><i class="fa fa-genderless"></i> Gender</td>
                            <td colspan="3"> {{ student.sex }}</td>
                        </tr>
                        <tr>
                            <td><i class="fa fa-envelope"></i> Email</td>
                            <td> {{ student.email_address }}</td>
                            <td><i class="fa fa-phone"></i> Phone</td>
                            <td> {{ student.phone_number }}</td>
                        </tr>
                        <tr>
                            <td>Height</td>
                            <td> {{ student.height }}</td>
                            <td>Weight</td>
                            <td> {{ student.weight }}</td>
                        </tr>
                        <tr>
                            <td>Date of Birth</td>
                            <td> {{ student.date_of_birth}}</td>
                            <td>Birth Place</td>
                            <td> {{ student.place_of_birth }}</td>
                        </tr>
                        <tr>
                            <td>Special Condition</td>
                            <td> {{ student.special_condition?data.special_conditions[student.special_condition].condition:null }}</td>
                            <td>Bloodgroup</td>
                            <td> {{ student.blood_group }}</td>
                        </tr>
                        <tr>
                            <td>Birth certificate Type</td>
                            <td colspan="3"> {{ student.birth_cert_type?data.birth_certs[student.birth_cert_type].birth_cert_type:null }}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </b-card>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import PersonalForm from '../../forms/personal'
    import modal from 'components/plugins/modal.vue';

    export default {
        name: "personal",
        components: {
          PersonalForm,
            modal
        },
        data() {
            return {
                isModalVisible: false,
            }
        },
        computed: {
            ...mapGetters([
                'student',
                'data'
            ])
        },
        methods:{
        },
    }
</script>
<style scoped>
    .table-borderless > tbody > tr > td,
    .table-borderless > tbody > tr > th,
    .table-borderless > tfoot > tr > td,
    .table-borderless > tfoot > tr > th,
    .table-borderless > thead > tr > td,
    .table-borderless > thead > tr > th {
        border: none;
    }
</style>
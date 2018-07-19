<template>
    <div>
        <b-card class="bg-clear-card" bg-variant="" text-variant="dark">
            <div slot="header">
                <a href="javascript:void(0)" v-b-modal.modal6>
                    <i class=" fa fa-edit card-profile-link pull-right"></i>
                </a>

                <b-modal id="modal6" title="Personal Information" size="lg" lazy centered hide-footer >
                    <guardian-form></guardian-form>
                </b-modal>
                <h3>
                    <img class="_51sw img" :src="require('img/icon/IKrON1RLHfZ.png')" alt="">
                    <router-link :to="{query:$route.query}" class="default-color">Guardian</router-link>
                </h3>
            </div>
        <div class="p-3">
            <div class="table-responsive" v-if="student.guardians">
                <table class="table table-bordred table-striped mytable guardian-table"
                       v-for="(guardian, index) in student.guardians">
                    <tr>
                        <td colspan="2" class="text-center"><h5>Guardians</h5></td>
                    </tr>
                    <tr>
                        <td>Full Name</td>
                        <td>{{ guardian.title }} {{ guardian.fullname }}</td>
                    </tr>
                    <tr>
                        <td>Relationship</td>
                        <td> {{ guardian.relationship?data.guardians[guardian.relationship-1].type :'' }}</td>
                    </tr>
                    <tr>
                        <td>Mobile Number</td>
                        <td> {{ guardian.mobile }}</td>
                    </tr>
                    <tr>
                        <td>Phone Number</td>
                        <td> {{ guardian.phone }}</td>
                    </tr>
                    <tr>
                        <td>Email Address</td>
                        <td> {{ guardian.email }}</td>
                    </tr>
                    <tr>
                        <td>Religion</td>
                        <td> {{ guardian.religion?data.religions[guardian.religion-1].religion : '' }}</td>
                    </tr>
                </table>
            </div>

        </div>
        </b-card>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import guardianForm from '../../forms/gaurdian'

    export default {
        name: "guardian",
        components: {
            guardianForm
        },
        computed: {
            ...mapGetters([
                'student',
                'data'
            ])
        },
    }
</script>

<style scoped>

</style>
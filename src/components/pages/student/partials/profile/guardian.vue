<template>
    <div>
        <b-card class="bg-clear-card" bg-variant="" text-variant="dark">
            <div slot="header">
                <a href="javascript:void(0)" v-b-modal.modal-student-guardian>
                    <i class=" fa fa-edit card-profile-link pull-right"></i>
                </a>

                <b-modal id="modal-student-guardian" ref="modal" title="Personal Information" size="lg" lazy centered hide-footer >
                    <guardian-form @closeModal="()=>$refs.modal.hide()"></guardian-form>
                </b-modal>
                <h3>
                    <img class="_51sw img" :src="require('img/icon/IKrON1RLHfZ.png')" alt="">
                    <router-link :to="{query:$route.query}" class="default-color">Guardian</router-link>
                </h3>
            </div>
        <div class="p-3">
            <div class="table-responsive">
                <table class="table table-striped mb-5"
                       v-for="guardian in student.guardians">
                    <tbody>
                    <tr>
                        <td class="text-muted">Full Name</td>
                        <td>{{ guardian.title }} {{ guardian.fullname }}</td>
                    </tr>
                    <tr>
                        <td class="text-muted">Relationship</td>
                        <td> {{ guardian.relationship?data.guardians[guardian.relationship].type :'' }}</td>
                    </tr>
                    <tr>
                        <td class="text-muted">Mobile Number</td>
                        <td> {{ guardian.mobile }}</td>
                    </tr>
                    <tr>
                        <td class="text-muted">Phone Number</td>
                        <td> {{ guardian.phone }}</td>
                    </tr>
                    <tr>
                        <td class="text-muted">Email Address</td>
                        <td> {{ guardian.email }}</td>
                    </tr>
                    <tr>
                        <td class="text-muted">Religion</td>
                        <td> {{ parseInt(guardian.religion)?data.religions[guardian.religion].religion : '' }}</td>
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
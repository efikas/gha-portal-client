<template>
    <div>
        <b-card class="bg-clear-card" bg-variant="" text-variant="dark">
            <div slot="header">
                <a href="" @click.prevent="$emit('editProfile', 'GuardianForm')">
                    <i class="pull-right fa fa-edit card-profile-link"></i>
                </a>
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
                        <td colspan="2" class="text-center"><h5>Guardian {{ index + 1 }}</h5></td>
                    </tr>
                    <tr>
                        <td>Full Name</td>
                        <td>{{ guardian.title }} {{ guardian.fullname }}</td>
                    </tr>
                    <tr>
                        <td>Relationship</td>
                        <td> {{ guardian.relationship }}</td>
                    </tr>
                    <tr>
                        <td>Mobile Number</td>
                        <td> {{ guardian.Mobile }}</td>
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
                        <td> {{ guardian.religion }}</td>
                    </tr>
                </table>
            </div>

        </div>
        </b-card>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        name: "guardian",
        computed: {
            ...mapGetters([
                'student'
            ])
        }
    }
</script>

<style scoped>

</style>
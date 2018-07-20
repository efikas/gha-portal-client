<template>
    <div>
        <b-card class="bg-clear-card" bg-variant="" text-variant="dark">
            <div slot="header">
                <a href="javascript:void(0)" v-b-modal.modal6>
                    <i class=" fa fa-edit card-profile-link pull-right"></i>
                </a>

                <b-modal id="modal6" title="Academic Information" size="lg" lazy centered hide-footer >
                    <professional-form></professional-form>
                </b-modal>
                <h3>
                    <img class="_51sw img" :src="require('img/icon/IKrON1RLHfZ.png')" alt="">
                    <router-link :to="{query:$route.query}" class="default-color">Professional</router-link>
                </h3>
            </div>
            <div class="p-3">
                <div class="table-responsive">
                    <table class="table table-bordred table-striped mytable" v-if="staff">
                        <tbody>
                        <tr>
                            <td>Academic Qualification</td>
                            <td> {{ staff.academic_qualification }}</td>
                            <td>Specilaity</td>
                            <td> {{ staff.speciality }}</td>
                        </tr>
                        <tr>
                            <td>Teaching Qualification</td>
                            <td> {{ staff.teaching_qualification }}</td>
                            <td>Subject taught</td>
                            <td> {{ staff.subject_taught }}</td>
                        </tr>
                        <tr>
                            <td>Employment Type</td>
                            <td> {{ staff.employment_type }}</td>
                            <td>Salary Source</td>
                            <td> {{ staff.salary_source }}</td>
                        </tr>
                        <tr>
                            <td>Staff Category</td>
                            <td> {{ staff.category }}</td>
                            <td>Last Promotion</td>
                            <td> {{ staff.last_promotion_year }}</td>
                        </tr>
                        <tr>
                            <td>TRC Reg No</td>
                            <td> {{ staff.trc_reg_no }}</td>
                            <td>Staff Status</td>
                            <td> {{ staff.status }}</td>
                        </tr>
                        <tr>
                            <td>Computer Literate</td>
                            <td colspan="3"> {{ yesNo(staff.computer_literate) }}</td>
                        </tr>
                        </tbody>
                    </table>
                </div></div>
        </b-card>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import Professional from "../../forms/professional";
    export default {
        name: "personal",
        components: {Professional,},
        computed: {
            ...mapGetters(['staff'])
        },
        methods:{
            yesNo: (value) => {
                return (value == 1) ? 'Yes' : 'No';
            },
        },
    }
</script>

<style scoped>

</style>
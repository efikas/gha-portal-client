<template>
    <div>
        <b-card class="bg-clear-card" bg-variant="" text-variant="dark">
            <div slot="header">
                <a href="javascript:void(0)" v-b-modal.modal-staff-professional>
                    <i class=" fa fa-edit card-profile-link pull-right"></i>
                </a>

                <b-modal id="modal-staff-professional" ref="modal" title="Professional" size="lg" lazy centered hide-footer >
                    <professional-form @closeModal="()=>$refs.modal.hide()"></professional-form>
                </b-modal>
                <h3>
                    <img class="_51sw img" :src="require('img/icon/IKrON1RLHfZ.png')" alt="">
                    <router-link :to="{query:$route.query}" class="default-color">Professional</router-link>
                </h3>
            </div>
            <div class="p-3">
                <div class="table-responsive">
                    <table class="table table-striped" v-if="staff">
                        <tbody>
                        <tr>
                            <td class="text-muted">Academic Qualification</td>
                            <td> {{ staff.academic_qualification?data.academic_qualifications[staff.academic_qualification].qualification:null }}</td>
                            <td class="text-muted">Specilaity</td>
                            <td> {{staff.speciality?data.specialities[staff.speciality].name:null }}</td>
                        </tr>
                        <tr>
                            <td class="text-muted">Teaching Qualification</td>
                            <td> {{ staff.teaching_qualification?data.teaching_qualifications[staff.teaching_qualification].qualification:null }}</td>
                            <td class="text-muted">Subject taught</td>
                            <td> {{staff.subject_taught?data.subjects[staff.subject_taught].subject:null }}</td>
                        </tr>
                        <tr>
                            <td class="text-muted">Employment Type</td>
                            <td> {{ staff.employment_type?data.employments[staff.employment_type].type:null }}</td>
                            <td class="text-muted">Salary Source</td>
                            <td> {{ staff.salary_source?data.salaries[staff.salary_source].source:null }}</td>
                        </tr>
                        <tr>
                            <td class="text-muted">Staff Category</td>
                            <td> {{ staff.category?data.staff_categories[staff.category].category:null }}</td>
                            <td class="text-muted">Last Promotion</td>
                            <td> {{ staff.last_promotion_year }}</td>
                        </tr>
                        <tr>
                            <td class="text-muted">TRC Reg No</td>
                            <td> {{ staff.trc_reg_no }}</td>
                            <td class="text-muted">Staff Status</td>
                            <td> {{ staff.status?data.staff_statuses[staff.status].status:null }}</td>
                        </tr>
                        <tr>
                            <td class="text-muted">Computer Literate</td>
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
    import professionalForm from "../../forms/professional";
    export default {
        name: "personal",
        components: {professionalForm,},
        computed: {
            ...mapGetters(['staff', 'data'])
        },
        methods:{
            yesNo: (value) => {
                return (value == 1) ? 'Yes' : 'No';
            },
        },
    }
</script>

<template>
    <div>
        <div class="row">
            <div class="col-lg-12">
                <div role="tablist">
                    <b-card no-body class="mb-1">
                        <b-card-header header-tag="header" class="p-1" role="tab">
                            <b-btn block href="#" v-b-toggle.accordion1 variant="default" class="text-left">
                                School
                            </b-btn>
                        </b-card-header>
                        <b-collapse id="accordion1" visible accordion="my-accordion" role="tabpanel">
                            <b-card-body>
                                <div class="row">
                                    <div class="col-lg-6 mb-3">
                                        <piechart :iData="private_school"></piechart>
                                    </div>
                                    <div class="col-lg-6 mb-3">
                                        <piechart :iData="public_school"></piechart>
                                    </div>
                                    <div class="col-lg-6 mb-3">
                                        <piechart :iData="primary_school"></piechart>
                                    </div>
                                    <div class="col-lg-6 mb-3">
                                        <piechart :iData="secondary_school"></piechart>
                                    </div>
                                    <div class="col-lg-6">
                                        <donut :iData="secondary_school_student"></donut>
                                    </div>
                                    <div class="col-lg-6">
                                        <donut :iData="primary_school_student"></donut>
                                    </div>
                                    <div class="col-lg-6 mb-3">
                                        <barchart :iData="rural_school"></barchart>
                                    </div>
                                    <div class="col-lg-6 mb-3">
                                        <barchart :iData="urban_school"></barchart>
                                    </div>
                                </div>
                            </b-card-body>
                        </b-collapse>
                    </b-card>
                </div>
            </div>
            <div class="col-lg-12">
                <div role="tablist">
                    <b-card no-body class="mb-1">
                        <b-card-header header-tag="header" class="p-1" role="tab">
                            <b-btn block href="#" v-b-toggle.accordion2 variant="default" class="text-left">
                                Staff
                            </b-btn>
                        </b-card-header>
                        <b-collapse id="accordion2" visible accordion="my-accordion2" role="tabpanel">
                        <b-card-body>
                            <div class="row">
                                <div class="col-lg-6 mb-3">
                                    <piechart :iData="staff_category_compare"></piechart>
                                </div>
                                <div class="col-lg-6 mb-3">
                                    <stackbar :iData="staff_gender_distribution"></stackbar>
                                </div>
                                <div class="col-lg-6 mb-3">
                                    <piechart :iData="staff_gender_compare"></piechart>
                                </div>
                                <div class="col-lg-6 mb-3">
                                    <doughnut :iData="staff_academic_distribution"></doughnut>
                                </div>
                            </div>
                        </b-card-body>
                        </b-collapse>
                    </b-card>
                </div>
            </div>
            <div class="col-lg-12">
                <div role="tablist">
                    <b-card no-body class="mb-1">
                        <b-card-header header-tag="header" class="p-1" role="tab">
                            <b-btn block href="#" v-b-toggle.accordion3 variant="default" class="text-left">
                                Student
                            </b-btn>
                        </b-card-header>
                        <b-collapse id="accordion3" visible accordion="my-accordion3" role="tabpanel">
                            <b-card-body>
                                <div class="row">
                                    <div class="col-lg-6">
                                        <donut :iData="secondary_school_student"></donut>
                                    </div>
                                    <div class="col-lg-6">
                                        <donut :iData="primary_school_student"></donut>
                                    </div>
                                </div>
                            </b-card-body>
                        </b-collapse>
                    </b-card>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {Reports} from "./super/dashboard/mixins";

export default {
    name: 'report',
    data(){
        return{
        }
    },
    mixins: [Reports]
}
</script>
<style scoped>
 .dz-progress{
        background-color: #08aa80 !important;
    }
</style>

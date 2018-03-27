<template>
    <div>
        <div class="row">
        <div class="col-lg-12">
            <div role="tablist">
                <b-card no-body class="mb-1">
                    <b-card-header header-tag="header" class="p-1" role="tab">
                        <b-btn block href="#" v-b-toggle.accordion1 variant="info" class="text-left">
                            <i class="fa fa-user-o fb_text"></i>
                            School
                        </b-btn>
                    </b-card-header>
                    <b-collapse id="accordion1" visible accordion="my-accordion" role="tabpanel">
                        <b-card-body>
                            <div class="row">
                                <div class="col-lg-6 mb-3">
                                    <piechart :iData="this.priv_sch"></piechart>
                                </div>
                                <div class="col-lg-6 mb-3">
                                    <piechart :iData="this.pub_sch"></piechart>
                                </div>
                                <div class="col-lg-6 mb-3">
                                    <piechart :iData="this.pri_sch"></piechart>
                                </div>
                                <div class="col-lg-6 mb-3">
                                    <piechart :iData="this.sec_sch"></piechart>
                                </div>
                                <div class="col-lg-6 mb-3">
                                    <barchart2 :iData="this.sch_rural"></barchart2>
                                </div>
                                <div class="col-lg-6 mb-3">
                                    <barchart2 :iData="this.sch_urban"></barchart2>
                                </div>     
                            </div>
                        </b-card-body>
                    </b-collapse>
                </b-card>
                <b-card no-body class="mb-1">
                    <b-card-header header-tag="header" class="p-1" role="tab">
                        <b-btn block href="#" v-b-toggle.accordion2 variant="info" class="text-left">
                            Staff
                        </b-btn>
                    </b-card-header>
                    <b-collapse id="accordion2" visible accordion="my-accordion" role="tabpanel">
                    <b-card-body>
                        <div class="row">
                            <div class="col-lg-6 mb-3">
                                <piechart :iData="this.staff_gen_dist"></piechart>
                            </div>
                            <div class="col-lg-6 mb-3">
                                <stackbar :iData="this.male_female_staff"></stackbar>
                            </div>
                            <div class="col-lg-6 mb-3">
                                <piechart :iData="this.staff_gen_dist"></piechart>
                            </div>
                            <div class="col-lg-6 mb-3">
                                <stackbar :iData="this.male_female_staff"></stackbar>
                            </div>
                            <div class="col-lg-6 mb-3">
                                <piechart :iData="this.staff_dist"></piechart>
                            </div> 
                            <div class="col-lg-6 mb-3">
                                <doughnut :iData="this.gen_acad_staff_dist"></doughnut>
                            </div> 
                        </div>
                    </b-card-body>
                    </b-collapse>
                </b-card>
                <b-card no-body class="mb-1">
                    <b-card-header header-tag="header" class="p-1" role="tab">
                        <b-btn block href="#" v-b-toggle.accordion3 variant="info" class="text-left">
                            Student
                        </b-btn>
                    </b-card-header>
                    <b-collapse id="accordion3" visible accordion="my-accordion" role="tabpanel">
                        <b-card-body>
                            <div class="row">
                                <div class="col-lg-6">
                                    <donut :iData="this.stu_sec_sch"></donut>
                                </div>
                                <div class="col-lg-6">
                                    <donut :iData="this.stu_sec_sch"></donut>
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
import vue2Dropzone from 'vue2-dropzone'
import 'vue2-dropzone/dist/vue2Dropzone.css'
let sbemisData = require('../../modules/draw-graphs.js')

import piechart from '../charts/piechart.vue'
import barchart2 from '../charts/barchart2.vue'
import donut from '../charts/donut.vue'
import stackbar from '../charts/stackbar.vue'
import doughnut from '../charts/doughnut.vue'

export default {
    name: 'vue2-dropzone',
    components: {
        vueDropzone: vue2Dropzone,
        piechart,
        barchart2,
        stackbar,
        doughnut,
        donut 
    },
    data(){
        return{
            priv_sch: {},
            pub_sch: {},
            pri_sch: {},
            sec_sch: {},
            sch_rural: {},
            sch_urban: {},
            stu_sec_sch: {},
            stu_pri_sch: {},
            staff_dist: {},
            staff_gen_dist: {},
            male_female_staff: {},
            gen_acad_staff_dist: {},
        }
    },
    methods: {
         
    },
    mounted() {
        this.$dashboard.statistics()
                .then((data) => {
                    this.schools = data.schools.total;
                    this.staff = data.staffs.total;
                    this.students = data.students.total;
                    
                    let myData = sbemisData.dataMapping(data);
                    // console.log(myData.priv_sch);

                    this.priv_sch = {
                        header: 'Private School Distribution',
                        value: myData.priv_sch
                    };
                    this.pub_sch = {
                        header: 'Public School Distributiong',
                        value: myData.pub_sch
                    };
                    this.pri_sch = {
                        header: 'Primary School Distribution',
                        value: myData.pri_sch
                    };
                    this.sec_sch = {
                        header: 'Secondary School Distribution',
                        value: myData.sec_sch
                    };
                    this.stu_sec_sch = {
                        header: 'Student Population In Secondary School',
                        value: myData.stu_sec_sch
                    };
                    this.stu_pri_sch = {
                        header: 'Student Population In Primary School',
                        value: myData.stu_pri_sch
                    };
                    // console.log(myData.sch_rural)
                    this.sch_rural = {
                        header: 'School Distribution in Rural Area',
                        value: myData.sch_rural
                    };
                    this.sch_urban = {
                        header: 'School Distribution in Urban Area',
                        value: myData.sch_urban
                    };
                    // this.sch_urban = {
                    //     header: 'School Distribution i Rural/Urban Area',
                    //     value: myData.sch_urban
                    // };
                    // this.sch_urban = {
                    //     header: 'Weekly Attendance',
                    //     value: myData.sch_urban
                    // };
                    this.staff_gen_dist = {
                        header: 'Staff Gender Comparism',
                        value: myData.staff_gen_dist
                    };
                    this.staff_dist = {
                        header: 'Teaching Staff/Non Teaching Staff Comparision',
                        value: myData.staff_dist
                    };
                    this.male_female_staff = {
                        header: 'Male/Female Staff Distribution',
                        legend: ['Male', 'Female'],
                        value: myData.male_female_staff
                    };
                    this.gen_acad_staff_dist = {
                        header: 'Teaching/Non Teaching Staff Distribution',
                        legend: ['Male', 'Female'],
                        value: myData.gen_acad_staff_dist
                    };
                })
                .catch((error) => {

                })
        
    }
}
</script>
<style scoped>
 .dz-progress{
        background-color: #08aa80 !important;
    }
</style>

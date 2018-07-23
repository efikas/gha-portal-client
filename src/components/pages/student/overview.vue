<template>
    <div>
        <div class="row mb-4">
            <div class="col-lg-3  col-sm-6 mb-3">
                <div class="text-center p-3 widget_social_icons box_shadow teal">
                    <div class="widget_social_inner1">
                        <i class="fa fa-female fb_text"></i>
                    </div>
                    <div class="text-ash">
                        <h4 class="mt-2 text_size">{{ totalFemale | commasep }}</h4>
                        <p class="m-0 mt-2">Female Students</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-3  col-sm-6 mb-3">
                <div class="text-center p-3 widget_social_icons box_shadow pink">
                    <div class="widget_social_inner1">
                        <i class="fa fa-male fb_text"></i>
                    </div>
                    <div class="text-ash">
                        <h4 class="mb-0 mt-2 text_size">{{ totalMale | commasep }}</h4>
                        <p class="m-0 mt-2">Male Students</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 mb-3">
                <div class="text-center p-3 widget_social_icons box_shadow blue">
                    <div class="widget_social_inner1">
                        <i class="fa fa-clone fb_text"></i>
                    </div>
                    <div class="text-ash">
                        <h4 class="mb-0 mt-2 text_size">{{ lga_student_distribution.length }}</h4>
                        <p class="m-0 mt-2">LGA</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-3  col-md-6 mb-3">
                <div class="text-center p-3 widget_social_icons box_shadow orange">
                    <div class=" widget_social_inner1">
                        <i class="fa fa-clone fb_text"></i>
                    </div>
                    <div class="text-ash">
                        <h4 class="mb-0 mt-2 text_size">{{ totalStudents | commasep }}</h4>
                        <p class="m-0 mt-2">Total Students</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12 col-offset-lg-2">
                <b-card header="DISTRIBUTION OF STUDENTS/LGA" header-tag="h4" class="bg-header-card">
                    <a type="button" class="fa fa-download icon-big btn btn-outline-primary ekiti-btn pull-right mb-2"
                       @click="exportExcel"></a>
                    <div class="table-responsive">
                        <table class="table table-bordered table-striped" ref="export">
                            <thead>
                            <tr>
                                <th>Local Govt</th>
                                <th>Total Female</th>
                                <th>Total Male</th>
                                <th>Sub Total</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="(lga, index) in lga_student_distribution" :key="index">
                                <td>{{ lga.name }}</td>
                                <td>{{ lga.students.female | commasep }}</td>
                                <td>{{ lga.students.male | commasep }}</td>
                                <td>{{ lga.students.female + lga.students.male | commasep }}</td>
                            </tr>
                            </tbody>
                            <tfoot>
                            <tr>
                                <th colspan="3" class="text-right">Grand Total</th>
                                <th>{{ totalStudents | commasep }}</th>
                            </tr>
                            </tfoot>
                        </table>
                    </div>
                </b-card>
            </div>
        </div>
    </div>
</template>
<script>
    import {mapGetters} from 'vuex';

    export default {
        name: "studentOverview",
        data() {
            return {
                serverdata: [],
                instances: [],
                loading: false,
                ajaxloading: true,
                totalStudents: 0,
                totalFemale: 0,
                totalMale: 0,
            }
        },
        computed: {
            ...mapGetters(['lga_student_distribution']),
        },
        created: async function () {
            await this.$store.dispatch('lga_student_distribution');

            this.lga_student_distribution.map(lga => {
                this.totalMale += lga.students.male;
                this.totalFemale += lga.students.female;
                this.totalStudents += lga.students.female + lga.students.male;
            });
        },
        beforeRouteLeave(to, from, next) {
            // unsub();
            next();
        },

        methods: {
            exportExcel() {
                const mimeType = 'data:application/vnd.ms-excel';
                let html = this.$refs.export.innerHTML.replace(/ /g, '%20');

                // attach a row to the head
                html = '<head><tr><th colspan="4">DISTRIBUTION OF STUDENTS/LGA</th></tr>' + html.split('<head>')[0];

                const d = new Date();

                var dummy = document.createElement('a');
                dummy.href = mimeType + ', ' + '<table>' + html + '</table>';
                dummy.download = 'school distributions' + '-' + d.getFullYear() + '-' + (d.getMonth() +
                    1) + '-' + d.getDate() + '-' + d.getHours() + '-' + d.getMinutes() + '-' + d.getSeconds() +
                    '.xls';
                dummy.click();
            },
        }
    }
</script>
<!-- styles -->
<!-- adding scoped attribute will apply the css to this component only -->
<style src="assets/css/widgets.css" scoped></style>
<style scoped>
    .swiper-pagination {
        position: relative;
    }

    .swiper-pagination-fraction,
    .swiper-pagination-custom,
    .swiper-container-horizontal > .swiper-pagination-bullets {
        top: 5px;
    }

    .swiper-container {
        margin-top: 0px !important;
    }
</style>
<style type="text/css" lang="scss" scoped>
    @import "~components/layouts/css/customvariables";

    .index2_table .table-responsive .card {
        border: none;
        box-shadow: none;
        margin-bottom: 0;
    }

    .index2_swiper .swiper-pagination-bullet-active {
        background: #08aa80;
    }

    /*===============================notes========*/

    .notes {
        line-height: 22px;
        font-size: 13px;
        padding: 0 15px 0 36px;
        position: relative;
        outline: none;
        background: #fff;
        background-size: 100% 30px;
    }

    .notes p {
        border-bottom: 1px solid #dfe8ec;;
    }

    .notes::after {
        content: '';
        position: absolute;
        width: 0;
        top: 0;
        left: 25px;
        bottom: 0;
        border-left: 1px solid #0fd1c1;
    }

    .social .bg-default-card .info {
        font-size: 12px;
    }

    .social .bg-default-card span {
        display: block;
        text-transform: uppercase;
    }

    .social .bg-default-card .value {
        font-size: 40px;
        line-height: normal;
    }

    .social .bg-default-card {
        i {
            transition: 300ms;
        }
        &:hover {
            i {
                font-size: 45px;
                transition: 300ms;
            }
        }
    }

    .social_cuntdata {
        font-weight: bold;
        font-size: 18px;
    }

    .subscribe_btn {
        background-color: transparent;
        border: 0;
        outline: none;
    }

    .box_shadow {
        box-shadow: 2px 2px 15px 0px #ccc;
    }

    .head_color {
        color: #686868;
    }

    .text_size {
        font-size: 25px;
        color: #797f82;
    }

    .text-ash {
        color: #575f65;
    }

    .text_color {
        color: #646161 !important;
    }

    .swiper-pagination {
        margin: 0 !important;
    }

    .text-blue {
        color: #215fe2;
    }

    .progress_color2 .progress-bar {
        background-color: #7FAFF7;
    }

    .icon_color {
        font-size: 27px;
        color: #828686;
    }

    .icon_color1 {
        font-size: 25px;
        color: #6e8dce;
    }

    .line {
        border-top: 1px solid #ccc;
    }

    .text_head_Color {
        color: #707373;
    }

    .below_text {
        color: #a2a1a1;
    }

    .index2_table th {
        color: #686868;
    }

    .index2_table td {
        color: #686868;
    }

    .user_color {
        color: #8e8c8e;
    }

    .count1 {
        font-size: 18px;
        color: #686868;
    }

    .ti_color {
        color: #215fe2;
    }

    .fb_color {
        font-size: 18px;
        color: #3B5998;
    }

    .twi_color {
        color: #00aced;
        font-size: 18px;
    }

    .gi_color {
        color: red;
        font-size: 18px;
    }

    .pin_color {
        color: red;
    }

    .cam_color {
        color: green
    }

    .events1 {
        border: 1px solid #ccc;
        border-radius: 5px;
        padding-top: 2px;
        padding-bottom: 2px;
        margin-top: 15px;
        margin-right: -20px;
        font-size: 18px;
        color: #555;
    }

    .online_dot img {
        position: relative;
    }

    .online_dot::after {
        content: "";
        position: absolute;
        margin-top: -28px;
        height: 11px;
        width: 11px;
        border: 2px solid #FFF;
        border-radius: 50%;
        background-color: green;
        margin-left: -13px;
    }

    .conversation-list .ctext-wrap p {
        margin: 0;
        padding-top: 3px;
    }

    .conversation-list .odd .ctext-wrap:after {
        border-color: rgba(238, 238, 242, 0);
        left: 99%;
        margin-right: -1px;
        border-top: 0 solid #D8F1E4;
        border-left: 12px solid #D8F1E4;
        border-bottom: 14px solid transparent;
    }

    .conversation-list .ctext-wrap p {
        margin: 0;
        /*padding-top: 3px;*/
    }

    .ctext-wrap p {
        margin-bottom: 10px;
    }

    .conversation-list .odd .conversation-text {
        float: right;
        margin-right: 25px;
        text-align: right;
        width: 95%;
    }

    .conversation-list .ctext-wrap i {
        color: #777;
        display: block;
        font-size: 11px;
        font-style: normal;
        position: relative;
    }

    .conversation-list .conversers1 .ctext-wrap {
        background: #D8F1E4;
    }

    .conversation-list .ctext-wrap {
        border-radius: 3px;
        display: inline-block;
        padding: 5px 10px;
        position: relative;
        box-shadow: 2px -2px 4px 0px rgba(0, 0, 0, 0.1)
    }

    .text-field {
        padding: 6px 10px;
    }

    .conversation-list .odd .ctext-wrap:after {
        border-color: rgba(238, 238, 242, 0);
        left: 99%;
        margin-right: -1px;
        border-top: 0 solid #D8F1E4;
        border-left: 12px solid #D8F1E4;
        border-bottom: 14px solid transparent;
    }

    .conversation-list .ctext-wrap:after {
        right: 100%;
        top: 0;
        content: " ";
        height: 0;
        width: 0;
        position: absolute;
        margin-left: -1px;
        border-top: 0 solid #fff;
        border-right: 12px solid #e9f9ff;
        border-bottom: 14px solid transparent;
    }

    .clearfix:after {
        clear: both;
    }

    .back_color1 {
        width: auto;
        height: 274px;
        overflow-y: auto;
        overflow-x: hidden;
    }

    .conversation-list .conversation-text {
        float: left;
        font-size: 13px;
        width: 70%;
    }

    .clearfix:before,
    .clearfix:after {
        content: " ";
        display: table;
    }

    .conversation-list .conversers2 .ctext-wrap {
        background: #e9f9ff;
    }

    .m-t-10 {
        margin-top: 10px !important;
    }

    .conversation-list {
        width: auto;
        height: 340px;
        padding-left: 27px;
    }

    .profile-img {
        background-color: #fff;
    }

    .chat-conversation {
        width: 100%;
    }
</style>
<style src="chartist/dist/chartist.css"></style>

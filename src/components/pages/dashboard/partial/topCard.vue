<template>
    <div>
        <div class="row mb-4">
            <div class="col-lg-3  col-sm-6 mb-3">
                <div class="text-center widget_social_icons box_shadow orange">
                    <div class="p-2">
                        <div class="widget_social_inner1">
                            <i class="material-icons fb_text">home</i>
                        </div>
                        <div class="text-ash">
                            <h4 class="mb-0 mt-2 text_size">{{ schools }}</h4>
                        </div>
                    </div>
                    <p class="m-0 orange text-center widget-social_link tiny upper"><a href="school"
                                                                                       style="display: block">Schools <i
                            class="fa fa-angle-right"></i></a></p>
                </div>
            </div>
            <div class="col-lg-3  col-sm-6 mb-3">
                <div class="text-center widget_social_icons box_shadow pink">
                    <div class="p-2">
                        <div class="widget_social_inner1">
                            <i class="material-icons fb_text">group</i>
                        </div>
                        <div class="text-ash">
                            <h4 class="mb-0 mt-2 text_size">{{ staff }}</h4>
                        </div>
                    </div>
                    <p class="m-0 pink text-center widget-social_link tiny upper"><a href="staff"
                                                                                     style="display: block">Staffs <i
                            class="fa fa-angle-right"></i></a></p>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 mb-3">
                <div class="text-center widget_social_icons box_shadow blue">
                    <div class="p-2">
                        <div class=" widget_social_inner1">
                            <i class="material-icons fb_text">person</i>
                        </div>
                        <div class="text-ash">
                            <h4 class="mb-0 mt-2 text_size">{{ students }}</h4>
                        </div>
                    </div>
                    <p class="m-0 blue text-center widget-social_link tiny upper"><a href="student"
                                                                                     style="display: block">Students <i
                            class="fa fa-angle-right"></i></a></p>
                </div>
            </div>
            <div class="col-lg-3  col-md-6 mb-3">
                <div class="text-center widget_social_icons box_shadow teal">
                    <div class="p-2">
                        <div class=" widget_social_inner1">
                            <i class="material-icons fb_text">people</i>
                        </div>
                        <div class="text-ash">
                            <h4 class="mb-0 mt-2 text_size">{{ guardians }}</h4>
                        </div>
                    </div>
                    <p class="m-0 teal text-center widget-social_link tiny upper"><a href="#" style="display: block">Parent/Guardian
                        <i class="fa fa-angle-right"></i></a></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "topCard",

        data() {
            return {
                schools: 'loading...',
                staff: 'loading...',
                students: 'loading...',
                guardians: 'loading...',
            }
        },

        created() {
            this.$dashboard.statistics()
                .then((data) => {
                    this.schools = data.schools.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
                    this.staff = data.staffs.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
                    this.students = data.students.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
                    this.guardians = data.guardians.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
                }).catch((error) => window.alert("failed"))
        }
    }
</script>
<style type="text/css" scoped lang="scss">
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
        border-bottom: 1px solid #dfe8ec;
    ;
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

    .widget_social_icons {
        background-color: #fff;
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
    .chat-conversation{
        width: 100%;
    }
    .table {
        /*font-weight: bold;*/
    }
    .table tr {
        cursor: pointer;
    }


</style>

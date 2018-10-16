<template>
    <div>

        <topCard></topCard>
        <div class="row">
            <div class="col-lg-6 mb-3">
                <piechart :iData="public_school"></piechart>
            </div>
            <div class="col-lg-6 mb-3">
                <piechart :iData="private_school"></piechart>
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
    </div>
</template>
<script>
    import Vue from 'vue';

    require('swiper/dist/css/swiper.css')
    import VueAwesomeSwiper from 'vue-awesome-swiper';

    import topCard from './partial/topCard'
    import {Reports} from './mixins'


    Vue.use(VueAwesomeSwiper);
    export default {
        name: "echart",
        components: {
            topCard,
        },
        mixins: [Reports],
    }
</script>
<style type="text/css" lang="scss" scoped>
    @import "~components/layouts/css/customvariables";

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
        box-shadow: 1px 1px 10px 0px #ccc;
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

    .text-blue {
        color: #215fe2;
    }

    .icon_color {
        font-size: 27px;
        color: #828686;
    }

    .icon_color1 {
        font-size: 25px;
        color: #6e8dce;
    }

</style>


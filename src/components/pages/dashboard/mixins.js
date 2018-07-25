import 'zrender/lib/vml/vml';
import piechart from 'components/patches/piechart.vue'
import barchart from 'components/patches/barchart.vue'
import donut from 'components/patches/donut.vue'
import stackbar from 'components/patches/stackbar.vue'
import doughnut from 'components/patches/doughnut.vue'

import {mapGetters} from 'vuex'

import {dataMapping} from 'src/modules/draw-graphs.js';

var unsub;
const Reports = {
    components: {
        piechart,
        barchart,
        stackbar,
        doughnut,
        donut
    },
    data() {
        return {
            serverdata: [],
            instances: [],
            loading: false,
            ajaxloading: true,
            reshape: null,
        }
    },
    computed: {
        ...mapGetters([
            'statistics'
        ]),
        private_school() {
            return {
                header: 'Private School Distribution',
                value: this.reshape ? this.reshape.priv_sch : {}
            }
        },
        public_school() {
            return {
                header: 'Public School Distribution',
                value: this.reshape ? this.reshape.pub_sch : {}
            }
        },
        primary_school() {
            return {
                header: 'Primary School Distribution',
                value: this.reshape ? this.reshape.pri_sch : {}
            }
        },
        secondary_school() {
            return {header: 'Secondary School Distribution',
                value: this.reshape ? this.reshape.sec_sch : {}
            }
        },
        secondary_school_student() {
            return {
                header: 'Student Population In Primary School',
                value: this.reshape ? this.reshape.stu_sec_sch : {}
            }
        },
        primary_school_student() {
            return {
                header: 'Student Population In Primary School',
                value: this.reshape ? this.reshape.stu_pri_sch : {}
            }
        },
        rural_school() {
            return {
                header: 'School Distribution in Rural Area',
                value: this.reshape ? this.reshape.sch_rural : {}
            }
        },
        urban_school() {
            return {
                header: 'School Distribution in Urban Area',
                value: this.reshape ? this.reshape.sch_rural : {}
            }
        },
        staff_gender_compare() {
            return {
                header: 'Staff Gender Comparison',
                value: this.reshape ? this.reshape.staff_gen_dist : {}
            }
        },
        staff_category_compare() {
            return {
                header: 'Teaching Staff/Non Teaching Staff Comparision',
                value: this.reshape ? this.reshape.staff_dist : {}
            }
        },
        staff_academic_distribution() {
            return {
                header: 'Teaching/Non Teaching Staff Distribution',
                legend: ['Male', 'Female'],
                value: this.reshape ? this.reshape.gen_acad_staff_dist : {}
            }
        },
        staff_gender_distribution() {
            return {
                header: 'Male/Female Staff Distribution',
                legend: ['Male', 'Female'],
                value: this.reshape ? this.reshape.male_female_staff : {}
            }
        }
    },

    async created() {
        await this.$store.dispatch('loadStatistics');
        this.reshape = dataMapping(this.statistics);
    }
};

export { Reports }
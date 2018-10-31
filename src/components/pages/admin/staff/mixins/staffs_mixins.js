import SchoolCard from "../../../../widgets/sbemis/SchoolCard1";
import {mapGetters} from 'vuex'
import store from '../../../../../store/store'

export default {
    components: {
        SchoolCard,
    },
    data() {
        return {
            loading: true,
            params: null,
            category: this.$route.query.t,
            schoolInfo: {},
            columns: ['id', 'Name', 'Actions'],
            options: {
                sortIcon: {
                    base: 'fa',
                    up: 'fa fa-angle-up',
                    down: 'fa fa-angle-down'
                },
                // see the options API
                skin: "table-hover table-striped table-bordered",
                perPage: 30,
                // footerHeadings: true,
                highlightMatches: true,
                pagination: {
                    chunk: 7,
                    //set dropdown to true to get dropdown instead of pagenation
                    dropdown: false
                }
            }
        }
    },
    computed: {
        ...mapGetters([
            'staffs',
            'school'
        ]),
        school_id() {
            return (this.$store.getters.userType == this.$store.getters.super_admin)
                ? this.$route.params.id : this.$store.getters.schoolId
        }
    },
    watch: {
        $route: (route) => {
            let school_id = (store.getters.userType == store.getters.super_admin)
                ? route.params.id : store.getters.schoolId;
            this.params = route.query ? {category: route.query.t} : null;
            store.dispatch('staffs', {id: school_id, params: this.params});
        },
        'staffs'() {
            this.loading = false;
        }
    },
    created() {
        this.loading = true;
        this.$store.dispatch('staffs', {id: this.school_id, params: this.params});
    },
}
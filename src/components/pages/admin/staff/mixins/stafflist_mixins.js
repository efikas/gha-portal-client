import {mapGetters} from 'vuex'
import store from '../../../../../store/store'

export default {
    data() {
        return {
            params: null,
            category: this.$route.query.t,
        }
    },
    computed: {
        ...mapGetters([
            'staffs'
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
        }
    },
    created() {
        this.loading = true;
        this.$store.dispatch('staffs', {id: this.school_id, params: this.params});
    },
}
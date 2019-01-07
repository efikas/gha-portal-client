<template>
    <div>
        <result_header v-if="students_result.student_info && students_result.assessment" :resultInfo="students_result"></result_header>
        <result_body v-if="students_result.result" :resultInfo="students_result"></result_body>
        <result_assessment v-if="students_result.assessment" :resultInfo="students_result"></result_assessment>
        <result_footer v-if="students_result.assessment" :resultInfo="students_result"></result_footer>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import result_header from './partials/result_header';
    import result_body from './partials/result_body';
    import result_assessment from './partials/result_assessment';
    import result_footer from './partials/result_footer';
    export default {
        name: "result",
        components: {
            result_header,
            result_body,
            result_assessment,
            result_footer,
        },
        created() {
            this.$store.dispatch('studentFullResult', {
                'student_id': 1,
                'term_id': 4
            });
        },
        computed: {
            ...mapGetters(['students_result']),
        },
    }
</script>

<style scoped>

</style>
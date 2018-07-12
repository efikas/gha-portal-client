<template>
    <div>
        <topCard></topCard>
        <school-lga-distribution></school-lga-distribution>
        <school-distribution></school-distribution>
    </div>
</template>
<script>
    import topCard from '../dashboard/partial/topCard'
    import schoolLgaDistribution from './partials/schoolLgaDist'
    import schoolDistribution from './partials/schoolDistChart'

    export default {
        name: "school-overview",
        components: {
            topCard,
            schoolLgaDistribution,
            schoolDistribution
        },
        data() {
            return {
                schoolsPerLgas: []
            }
        },
        created: function () {
            this.$school.getSchoolsDistributionsPerLga()
                .then((data) => {
                    this.schoolsPerLgas = data;
                })
                .catch((error) => console.log(error)
                )
        },
        beforeRouteLeave(to, from, next) {
            // unsub();
            next();
        },

        methods: {
            gotoLink(url) {
                this.$router.push('school/' + url);
            },

            exportExcel() {
                const mimeType = 'data:application/vnd.ms-excel';
                const html = this.$refs.exportRef.innerHTML.replace(/ /g, '%20');

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


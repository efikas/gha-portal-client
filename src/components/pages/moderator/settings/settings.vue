<template>
    <div style="margin-top: -0%;">
        <div class="container">
            <div class="row">
                <div class="col-md-12" style="padding: 0">
                    <SchoolCard></SchoolCard>
                </div>
            </div>
            <div class="row mt-3">
                <div class="col-md-12" id="profile" style="padding: 0">
                    <b-card class="" no-body>
                        <!-- Nav tabs -->
                        <b-tabs vertical card small :content-class="contentClass()" pills v-model="tabIndex"
                                @input="tabChanged($event)">
                            <b-tab title="Create Term">
                                <create-term></create-term>
                            </b-tab>
                            <b-tab title="Generate Results">
                                <generate-results></generate-results>
                            </b-tab>
                        </b-tabs>
                    </b-card>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import SchoolCard from "../../../widgets/sbemis/SchoolCard1";
    import CreateTerm from './partials/create_term';
    import GenerateResults from './partials/generate_results';
    export default {
        name: "settings",
        components: {
            CreateTerm,
            GenerateResults,
            SchoolCard
        },
        data() {
            return {
                tabIndex: 0
            };
        },
        methods: {
            contentClass() {
                return ['clear-content-padding'];
            },
            tabChanged(index) {
                switch (parseInt(index)) {
                    case 0:
                        this.tabIndex = 0;
                        this.$router.replace({query: {section: 0},
                            // hash: '#settings'
                        });
                        break;
                    case 1:
                        this.tabIndex = 1;
                        this.$router.replace({query: {section: 1}});
                        break;
                    default:
                        this.tabIndex = 0;
                        this.$router.replace({query: {section: 0}});
                        break;
                }
            }
        },
        watch: {
            '$route.query'(query) {
                this.tabChanged(query.section)
            }
        }
    }
</script>

<style scoped>

</style>
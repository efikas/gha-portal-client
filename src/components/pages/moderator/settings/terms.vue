<template>
    <div>
        <div class="row">
            <div class="col-lg-12">
                <b-card>
                    <a href="javascript:void(0)" v-b-modal.modal-create-term class="pull-right">
                        <i class=" fa fa-plus"></i> Add
                    </a>
                </b-card>
                <br><br>

                <b-modal id="modal-create-term" ref="modal" title="Create Term" size="lg" lazy centered hide-footer>
                    <create-term action="create"></create-term>
                </b-modal>
                <b-modal id="modal-edit-term" ref="modal" title="Add Subjects" size="lg" lazy centered hide-footer>
                    <create-term :termId="selectedTerm" action="update"></create-term>
                </b-modal>

                <div class="row">
                    <div class="col-lg-12 mb-3">
                        <div class="table-responsive">
                            <table id="mytable" class="table table-bordred table-striped">
                                <thead>
                                <tr class="">
                                    <th style="width: 4%">&nbsp;</th>
                                    <th>Term</th>
                                    <th style="width: 10%">&nbsp;</th>
                                    <th style="width: 20%">&nbsp;</th>
                                    <th style="width: 20%">&nbsp;</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="(term, index) in terms">
                                    <td>{{ index + 1 }}</td>
                                    <td>
                                        {{ `${term.term} term (${term.session} session)` }}
                                    </td>
                                    <td class="">
                                        <a href="javascript:void(0)" v-b-modal.modal-edit-term @click="editTerm(term.id)">
                                            <i class=" fa fa-edit"></i> edit
                                        </a>
                                    </td>
                                    <td class="">
                                        <button class="btn btn-success" v-if="(index == terms.length -1)" @click="generateResults(term.id)">Generate Results Table</button>
                                    </td>
                                    <td>
                                        <button class="btn btn-danger" v-if="(index == terms.length -1)" @click="generateResults(term.id)">Lock Result</button>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import {mapGetters} from 'vuex'
    import Toaster from '../../../mixins/toaster';
    import store from 'src/store/store';
    import CreateTerm from "./partials/create_term";

    export default {
        name: 'terms',
        props: ['schoolId'],
        mixins: [Toaster],
        components: {
            CreateTerm
        },
        data() {
            return {
                selectedTerm: null,
                school_id: this.schoolId
            }
        },
        methods: {
            editTerm(termId){
                this.selectedTerm = termId; // set selected term id
            },
            generateResults: function(termId){
                let term = {term: termId}
                store.dispatch('generateResult',
                    {id: this.school_id, terms})
                    .then(response => {
                        if (response == 'success') {
                            setTimeout(() => this.successMsg('Students result created Successfully.', 'Result Generation'), 200)
                        }
                        else {
                            setTimeout(() => this.errorMsg('There is an error generating the student results.', 'Result Generation'), 200)
                        }
                    })
                    .catch((error) => {
                        setTimeout(() => this.errorMsg('There is an error generating the student results.', 'Result Generation'), 200)
                        // console.log(error.message);
                    });
            }
        },
        computed: mapGetters(['terms']),
        async created() {
            if(!this.school_id) {
                this.school_id = store.getters.schoolId ;
            }
            await store.dispatch('fetchTerms', this.school_id).catch((error) => {
                console.log(error.message);
            });
        },
    }
</script>
<style scoped>
    .dz-progress {
        background-color: #08aa80 !important;
    }
    .red {
        color: red;
        font-weight: bold;
    }
    .green {
        color: darkgreen;
        font-weight: bold;
    }
</style>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

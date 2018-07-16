<template>
    <div>
        <b-card header="School Basic Information" header-tag="h4" class="bg-header-card">
            <vue-form :state="formstate" method="" class="form-horizontal" @submit.prevent="onSubmit">
                <basic-form :data="data"></basic-form>
                <button type="submit" class="btn btn-primary btn-lg btn-school pull-right">Submit</button>
            </vue-form>
        </b-card>
    </div>
</template>
<script>
    import BasicForm from './forms/basic.vue';
    import Toaster from '../../mixins/toaster';
    import { schoolBasicData } from '../../../data/school'

    export default {
        name: 'school-add',
        mixins: [Toaster],
        components: {
            basicForm: BasicForm,
        },
        data() {
            return {
                formstate: {},
                data: {},//schoolBasicData,
            }
        },
        methods: {
            onSubmit: function () {
                var vm = this;
                if (this.formstate.$invalid) {
                    return;
                } else {

                    this.$store.dispatch('addSchool', this.data)
                        .then(response => {
                        if (typeof  response === 'object') {
                            this.successMsg("School Record added Successfully!", "Success");
                            return vm.$router.push({name:'school-profile', params:{id: response.id}});
                        } else {

                        }
                    }).catch(error => {
                        console.log(error.data.errors);
                        this.errorMsg("error: saving record!", "Error");
                    });
                }
            }
        }
    }
</script>
<style type="text/css" scoped>

    /deep/ .form-control:disabled {
        cursor: not-allowed;
    }

    tab-content {
        border-top: 1px solid grey;
        border-bottom: 1px solid grey;
    }


    form .odd-row:first-of-type {
        border-top: 1px dashed #959DCC;
    }

    .form-group label {
        font-size: .8rem !important;
        letter-spacing: 1px;
        color: #684348 !important;
    }

    .btn-school {
        width: 200px;
        align-self: center;
        margin-left: calc(50% - 100px);
        margin-top: 30px;
    }

    input[type="text"], input[type="email"], input[type="number"], input[type="url"], select {
        height: 40px;
    }
</style>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
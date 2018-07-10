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
    import Vue from 'vue';

    import options from "src/validations/validations.js";
    import Multiselect from 'vue-multiselect';
    import BasicForm from './forms/basic_form.vue';
    import Toaster from '../../mixins/toaster';
    import { schoolBasicData } from '../../../data.js'

    Vue.use(options);

    export default {
        name: 'school-add',
        mixins: [Toaster],
        components: {
            Multiselect,
            basicForm: BasicForm,
        },
        data() {
            return {
                formstate: {},
                lgas: [],
                wards: [],
                lgasInfo: [],
                wardKeys: {}, // capture the ward id and ward name of the selected LGA
                schoolLocationsOptions: [{text: 'Rural', value: 'rural'}, {text: 'Urban', value: 'urban'}],
                educationLevelOptions: [{text: 'Primary', value: 'Primary'}, {text: 'Secondary', value: 'Secondary'}],
                schoolCategoryOptions: [{text: 'Public', value: 'Public'}, {text: 'Private', value: 'Private'}],
                schoolTypesOptions: [],
                schoolOwnershipOptions: [],
                lga: '',
                ward: '',
                yesNoOptions: [{text: 'Yes', value: '1'}, {text: 'No', value: '0'}],
                settings: {},
                data: {},//schoolBasicData,
                selectedSharedFacilities: [],
            }
        },
        methods: {
            onSubmit: function () {
                var vm = this;
                if (this.formstate.$invalid) {
                    return;
                } else {
                    this.$school.addSchool(this.data).then(response => {
                        if (typeof  response === 'object') {
                            this.successMsg("School Record added Successfully!", "Success");
                            vm.$router.push('/school')
                        } else {

                        }
                    }).catch(error => {
                        console.log(error.data.errors);
                        this.errorMsg("error: saving record!", "Error");
                    });
                }
            },
            getWard() {

                this.ward = '';
                this.wards = []; // clear previous ward elements
                this.wardKeys = [];
                // alert(this.data.lga);

                // get lga id
                let _lgaId = this.lgasInfo.filter(item => {
                    return (item.name === this.lga);
                });

                _lgaId = _lgaId[0].id;


                // populate LGA
                // todo: filter lga base on state
                let _wards = [];
                this.settings.lga_wards.forEach(item => {
                    // this.lgasInfo.push(item);
                    _wards.push(item);
                })


                this.wardKeys = _wards.filter(item => {
                    return (item.lga_id == _lgaId);
                });

                this.wardKeys.forEach(item => {
                    this.wards.push(item.name);
                    // this.wardKeys[item.id] = item.name;
                })
            },
            selectedWard() {
                /**
                 * @description called to get the id of the selected ward
                 * @name selectedWard
                 * @returns null
                 */

                let _wardId = this.settings.lga_wards.filter(item => {
                    return (item.name == this.ward);
                })

                // assign the selected ward id in the data object
                this.data.lga_ward_id = _wardId[0].id;
            }
        },
        created() {
            this.settings = JSON.parse(localStorage.getItem('settings'));

            if (this.settings) {
                // populate LGA
                this.settings.lga_areas.forEach(item => {
                    this.lgasInfo.push(item);
                    this.lgas.push(item.name);
                })

                this.settings.school_ownerships.forEach(owner => {
                    this.schoolOwnershipOptions.push({
                        text: owner.owner,
                        value: owner.id
                    });
                })

                this.settings.school_types.forEach(type => {
                    this.schoolTypesOptions.push({
                        text: type.name,
                        value: type.id
                    });
                })
            }
        },
        watch: {},
        destroyed: function () {

        }
    }
</script>
<style type="text/css" scoped>

    /deep/ .form-control:disabled {
        cursor: not-allowed;
    }

    .disabled {
        cursor: not-allowed;
    }

    .form-control:active, .input-group .form-control:hover {
        z-index: 1;
    }

    tab-content {
        border-top: 1px solid grey;
        border-bottom: 1px solid grey;
    }

    .even-row {
        background-color: #fafafa;
        border-top: 1px dashed #959DCC;
        border-bottom: 1px dashed #959DCC;
        min-height: 62px;
        padding: 8px 0;
    }

    .odd-row {
        padding: 8px 0;
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
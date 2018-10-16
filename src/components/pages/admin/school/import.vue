<template>
    <div>
        <div class="row">
            <b-card class="col-md-6 mt-5">
                <form action="" ref="form">

                    <div v-if="error" class="alert alert-danger">
                        {{ error }}
                    </div>
                    <div v-if="success" class="alert alert-success">
                        {{ success }}
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="form-group">
                                <div class="">
                                    <label class="control-label">LGA</label>
                                    <b-form-select
                                            @change="$v.lga_id.$touch()"
                                            v-model="lga_id" :options="lga_areas" class="mb-3"></b-form-select>
                                </div>
                            </div>

                            <div class="form-group p-10">
                                <label>Ward <abbr title="required">*</abbr></label>
                                <b-form-select :disabled="lga_id==null"
                                               @change="$v.lga_ward_id.$touch()"
                                               v-model="lga_ward_id" :options="wards"
                                               class="mb-3">
                                </b-form-select>
                            </div>

                            <div class="form-group">
                                <input type="file" :disabled="(lga_ward_id==null || lga_id==null)"
                                       @change="setFile($event.target.value); $v.lga_ward_id.$touch()"
                                       ref="file" class="form-control" accept=".xlsx,xls">
                            </div>


                            <button class="btn btn-block btn-primary" :disabled="$v.$invalid" @click.prevent="onSubmit">
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
            </b-card>
        </div>
    </div>
</template>
<script>
    import {mapGetters} from 'vuex'
    import Toaster from '../../../mixins/toaster'
    import {required, integer} from 'vuelidate/lib/validators'

    export default {
        name: 'school-import',
        data() {
            return {
                lga_id: null,
                lga_ward_id: null,
                my_file: null,
                error: null,
                success: null,
            }
        },
        validations: {
            lga_id: {required, integer},
            lga_ward_id: {required, integer},
            my_file: {required}
        },
        mixins: [Toaster],
        computed: {
            ...mapGetters({data: 'data', getSchool: 'school'}),
            lga_areas() {
                return [{value: null, text: 'Please select an option'}]
                    .concat(Object.values(this.data.lga_areas).map(item => {
                        return {value: item.id, text: item.name};
                    }));
            },
            wards() {
                return [{value: null, text: 'Please select an option'}]
                    .concat(Object.values(this.data.lga_wards).reduce((prev, next, index) => {
                        if (this.lga_id === next.lga_id) {
                            prev.push({value: next.id, text: next.name});
                        }
                        return prev
                    }, []));
            },
        },
        methods: {
            setFile: function (val) {
                this.my_file = val;
            },
            onSubmit() {
                this.error = null;
                this.success = null;
                let formData = new FormData();
                formData.append('upload', this.$refs.file.files[0]);
                let form = {lga_ward_id: this.lga_ward_id, formdata: formData};

                this.$store.dispatch('uploadSchoolSpreadsheet', form)
                    .then((msg) => {
                        this.success = msg;
                        this.successMsg(msg, 'Success');
                        this.$refs.form.reset();
                        this.lga_id = this.lga_ward_id = null;
                        this.$v.$reset();
                    })
                    .catch((error) => {
                        this.error = error.data;
                        this.lga_ward_id = null;
                        this.lga_id = null;
                        this.my_file = null;
                        this.errorMsg('spreadsheet upload error', 'Error')
                    })
            },
        },
    }
</script>

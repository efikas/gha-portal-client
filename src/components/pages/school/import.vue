<template>
    <div>
        <div class="row">
            <b-card class="col-md-6 mt-5">
                <div class="row">
                    <div class="col-md-12">
                        <div class="form-group">
                            <div class="">
                                <label class="control-label">LGA</label>
                                <b-form-select
                                        v-model="lga_id" :options="lga_areas" class="mb-3"/>
                            </div>
                        </div>

                        <div class="form-group">
                            <input type="file" ref="file" class="form-control" accept=".xlsx,xls">
                        </div>


                        <button class="btn btn-block btn-primary" :disabled="$v.$invalid" @click.prevent="onSubmit">Submit</button>
                    </div>
                </div>
            </b-card>
        </div>
    </div>
</template>
<script>
    import {mapGetters} from 'vuex'
    export default {
        name: 'school-import',
        data() {
            return {
                lga_id: null,
            }
        },
        validations:{},
        computed: {
            ...mapGetters({data: 'data', getSchool: 'school'}),
            lga_areas() {
                return [{value: null, text: 'Please select an option'}]
                    .concat(Object.values(this.data.lga_areas).map(item => {
                        return {value: item.id, text: item.name};
                    }));
            },
        },
        methods: {
            onSubmit() {
                let formData = new FormData();
                formData.append('upload', this.$refs.file.files[0]);
                let form = {lga_id: this.lga_id, formdata: formData};

                //todo: validate form
                this.$store.dispatch('uploadSpreadsheat', form)
            },
        },
    }
</script>

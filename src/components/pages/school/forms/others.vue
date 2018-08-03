<template>
    <div>
        <div class="row">
            <div class="col-md-12">
                <table class="table table-bordered table-striped">
                    <thead>
                    <tr>
                        <th>FACILITY TYPE</th>
                        <th>Number Available</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(ft, index) in data.facility_types">
                        <td>{{ft.type}}</td>
                        <td><input type="number" min="0" v-model="otherFacilities[ft.id].no_facility" class="form-control"
                                   placeholder=""></td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <button type="submit" :disabled="$v.$invalid" @click.prevent="onSubmit"
                class="btn btn-primary btn-lg btn-school pull-right">Submit
        </button>
    </div>
</template>
<script>

    import {schoolFormMixins} from './mixins'

    export default {
        validations:{},
        data() {
            return {}
        },
        mixins: [schoolFormMixins],
        methods: {
            onSubmit: function () {
                let form = {facilities:[]};
                for (let index in this.otherFacilities) {
                    if(this.otherFacilities[index].no_facility !== 0) {
                        form.facilities.push(this.otherFacilities[index])
                    }
                }

                this.$store.dispatch('updateSchool', form).then(() => {
                    this.successMsg('Record updated!', 'Success');
                    setTimeout(()=>this.$emit('closeModal', true), 500);
                }).catch(() => {
                    this.errorMsg('Error saving data!', 'Error');
                });

            },
        }
    }
</script>
<template>
    <div>
        <div class="row">
            <div class="col-lg-6">
                <table class="table table-bordered table-striped">
                    <thead>
                    <tr>
                        <th>FACILITY TYPE</th>
                        <th>Number Available</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(facility, index) in facilities">
                        <td>{{facilities[index].type}}</td>
                        <td><input type="number" min="0" v-model="facilities[index].no_facility" class="form-control"
                                   placeholder=""></td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<script>

    export default {
        props: {
            data: {type: Object, required: true}
        },
        data() {
            return {}
        },
        methods: {},
        created: function () {
            let settings = JSON.parse(localStorage.getItem('settings'));

            if(settings) {
                this.facilities = settings.facility_types
            }

            console.log('created', this.data.facility_list)

            this.facilities.filter(facility => {
                if ( typeof this.data.facility_list !== 'undefined')
                {
                    for(var i = 0; i<this.data.facility_list.length; i++) {
                        if(this.data.facility_list[i].facility_id === facility.id) {
                            facility.no_facility = this.data.facility_list[i].no_facility
                        }
                    }
                }
            });
        },

        mounted() {
            console.log('updated', this.data.facility_list)
            this.facilities.filter(facility => {
                if ( typeof this.data.facility_list !== 'undefined')
                {
                    for(var i = 0; i<this.data.facility_list.length; i++) {
                        if(this.data.facility_list[i].facility_id === facility.id) {
                            facility.no_facility = this.data.facility_list[i].no_facility
                        }
                    }
                }
            });
        },
    }
</script>
<style type="text/css" scoped>

    /deep/ .form-control:disabled {
        cursor: not-allowed;
    }


    .form-control:active, .input-group .form-control:hover {
        z-index: 1;
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
</style>
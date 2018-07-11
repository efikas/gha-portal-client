<template>
    <div>
        <div>
            <a class="btn btn-outline-primary pull-right" @click="addMore()">+ ADD</a>
            <div>
                MEMBERSHIP DETAILS
            </div>
            <div>
                Provide the following details about the membership details of the SBMC of this school.
            </div>
        </div>
        <div v-for="(members, index) in data.sbmc" class="mb-5">
            <div class="form-horizonal bordered-box">
                <div class="row even-row">
                    <div class="col-md-12">
                        <div class="remove-btn-div"><a class="btn btn-outline-danger pull-right red"
                                                       @click="removeElement(index)">X</a></div>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-4">
                        <div class="form-group p-10">
                            <label class="control-label col-md-12">Name</label>
                            <input type="text" class="form-control" name="name"
                                   v-model="data.sbmc[index].name" placeholder="membership Name" required>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-2">
                        <div class="form-group p-10">
                            <label class="control-label">Position
                            </label>
                            <input type="text" class="form-control" name="position[]"
                                   v-model="data.sbmc[index].office" placeholder="Position" required>

                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-2">
                        <div class="form-group p-10">
                            <label class="control-label">phone
                            </label>
                            <input type="text" class="form-control" name="phone[]"
                                   v-model="data.sbmc[index].phone" placeholder="phone" required>

                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-4">
                        <div class="form-group p-10">
                            <label class="control-label">Email
                            </label>
                            <input type="email" class="form-control" name="email"
                                   v-model="data.sbmc[index].email" placeholder="Email">

                        </div>
                    </div>
                </div>
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
        components: {},
        methods: {
            addMore() {
                this.data.sbmc.push({name: '', position: '', phone_number: '', email: ''});
            },
            removeElement(index) {
                this.data.sbmc.splice(index, 1);
            }
        },
        created: function () {
        },
        destroyed: function () {

        }
    }
</script>
<style type="text/css" scoped>
    #color {
        height: 35px;
    }

    /deep/ .form-control:disabled {
        cursor: not-allowed;
    }

    .disabled {
        cursor: not-allowed;
    }

    .form-control:active, .input-group .form-control:hover {
        z-index: 1;
    }

    .dropzone_wrapper {
        width: 100%;
    }

    .align-left {
        float: left;
    }

    .align-right {
        float: right;
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
</style>
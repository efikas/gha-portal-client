<template>
    <div>
        <div class="row">
            <div class="col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2">
                <b-card header="User Information" header-tag="h4" class="bg-header-card">
                   <create-form ></create-form>
                </b-card>
            </div>
        </div>
    </div>
</template>
<script>
    import create from 'pages/user/forms/create'

    export default {
        components: {
            'create-form': create,

        },
        data() {
            return {}
        }
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
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<template>
    <div>
        <b-card header="School Basic Information" header-tag="h4" class="bg-header-card">
            <basic-form></basic-form>
        </b-card>
    </div>
</template>
<script>
    import BasicForm from './forms/basic.vue';
    import { schoolBasicData } from '../../../../data/school'
    import Store from 'src/store/store'

    export default {
        name: 'school-add',
        components: {
            basicForm: BasicForm,
        },
        data() {
            return {
            }
        },
        beforeRouteEnter(to, from, next) {
            Store.commit('SET_SCHOOL', { ward: {lga_id: null}});
           return next();
        },
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
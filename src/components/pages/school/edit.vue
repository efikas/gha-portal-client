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
    import BasicForm from './forms/basic.vue';
    import classroom from './subcomponents/classroom';
    import facilities from './forms/facilities';
    import library from './subcomponents/library';
    import sbmc from './subcomponents/sbmc';
    import project from './subcomponents/project';
    import other_facilities from './subcomponents/other_facilities';

    import options from "src/validations/validations.js";
    Vue.use(options);

    export default {
        name: "staff-layout",
        components: {
            'basicForm': BasicForm,
            'classroom': classroom,
            'facilities': facilities,
            'other_facilities': other_facilities,
            'library': library,
            'sbmc': sbmc,
            'project': project,
        },
        data(){
            return {
                currentView: '',
                formstate: {},
            }
        },
        mounted() {
            // ]'$route.params.component']: function () {
            //     console.log(this.$route.params.component);
                switch (this.$route.params.component) {
                    case 'basic':
                        this.currentView = 'basic';
                        break;
                    case 'classroom':
                        this.currentView = 'classroom';
                        break;
                    case 'facilities':
                        this.currentView = 'facilities';
                        break;
                    case 'other_facilities':
                        this.currentView = 'other_facilities';
                        break;
                    case 'library':
                        this.currentView = 'library';
                        break;
                    case 'sbmc':
                        this.currentView = 'sbmc';
                        break;
                    case 'project':
                        this.currentView = 'project';
                        break;
                    default:
                        break;
                }
            // }
        }
    }
</script>













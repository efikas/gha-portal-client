<template>
    <div>
        <b-card header="School Basic Information" header-tag="h4" class="bg-header-card">
            <vue-form :state="formstate" method="" class="form-horizontal" @submit.prevent="onSubmit">
                <component :is="currentView" :data="data"></component>
                <button type="submit" class="btn btn-primary btn-lg btn-school pull-right">Submit</button>
            </vue-form>
        </b-card>
    </div>
</template>

<script>
    // import Vue from 'vue';
    // import options from "src/validations/validations.js";
    // Vue.use(options);

    import BasicForm from './forms/basic';
    import classroom from './forms/classroom';
    import facilities from './forms/facilities';
    import library from './forms/library';
    import sbmc from './forms/sbmc';
    import project from './forms/project';
    import others from './forms/others';

    export default {
        name: "staff-layout",
        components: {
            'basic': BasicForm,
            'classroom': classroom,
            'facilities': facilities,
            'other': others,
            'library': library,
            'sbmc': sbmc,
            'project': project,
        },
        data(){
            return {
                formstate: {},
                currentView: '',
                data:{}
            }
        },
        created() {
            this.$school.schoolProfile(this.$route.params.id).then(data => {
                this.data = data;
            });

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
                case 'others':
                    this.currentView = 'other';
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
        }
    }
</script>













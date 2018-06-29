<template>
    <component :is="currentView"></component>
</template>

<script>
    import basic from './subcomponents/basic';
    import classroom from './subcomponents/classroom';
    import facilities from './subcomponents/facilities';
    import library from './subcomponents/library';
    import sbmc from './subcomponents/sbmc';
    import project from './subcomponents/project';
    import other_facilities from './subcomponents/other_facilities';

    export default {
        name: "staff-layout",
        components: {
            'basic': basic,
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













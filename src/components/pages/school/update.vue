<template>
    <component :is="currentView"></component>
</template>

<script>
    import basic from './subcomponents/basic';
    import classroom from './subcomponents/classroom';
    import facilities from './subcomponents/facilities';
    import library from './subcomponents/library';
    import sbmc from './subcomponents/sbmc';
    import facilities_details from './subcomponents/facilities_details';

    export default {
        name: "staff-layout",
        components: {
            'basic': basic,
            'classroom': classroom,
            'facilities': facilities,
            'facilities_details': facilities_details,
            'library': library,
            'sbmc': sbmc,
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
                    case 'facilities_details':
                        this.currentView = 'facilities_details';
                        break;
                    case 'library':
                        this.currentView = 'library';
                        break;
                    case 'sbmc':
                        this.currentView = 'sbmc';
                        break;
                    default:
                        break;
                }
            // }
        }
    }
</script>













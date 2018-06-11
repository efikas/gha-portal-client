<template>
    <component :is="currentView"></component>
</template>

<script>
    import basic from './update/basic';
    import classroom from './update/classroom';
    import facilities from './update/facilities';
    import library from './update/library';
    import sbmc from './update/sbmc';
    import other_facilities from './update/other_facilities';

    export default {
        name: "staff-layout",
        components: {
            'basic': basic,
            'classroom': classroom,
            'facilities': facilities,
            'other_facilities': other_facilities,
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
                    case 'other_facilities':
                        this.currentView = 'other_facilities';
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













<template>
    <component :is="currentView"></component>
</template>

<script>
    import basic from './update/basic';
    import classroom from './update/classroom';
    import facilities from './update/facilities';
    import library from './update/library';
    import sbmc from './update/sbmc';
<<<<<<< HEAD
    import facilities_details from './update/facilities_details';
=======
    import other_facilities from './update/other_facilities';
>>>>>>> 4a549e8c38f4b84b7629c75a71e3a5bde68cbe77

    export default {
        name: "staff-layout",
        components: {
            'basic': basic,
            'classroom': classroom,
            'facilities': facilities,
<<<<<<< HEAD
            'facilities_details': facilities_details,
=======
            'other_facilities': other_facilities,
>>>>>>> 4a549e8c38f4b84b7629c75a71e3a5bde68cbe77
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
<<<<<<< HEAD
                    case 'facilities_details':
                        this.currentView = 'facilities_details';
=======
                    case 'other_facilities':
                        this.currentView = 'other_facilities';
>>>>>>> 4a549e8c38f4b84b7629c75a71e3a5bde68cbe77
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













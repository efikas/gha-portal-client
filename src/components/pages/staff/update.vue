<template>
    <component :is="currentView"></component>
</template>

<script>
    import basic from './subcomponents/basic';
    import professional from './subcomponents/professional';

    export default {
        name: "staff-layout",
        components: {
            'personal': basic,
            'professional': professional,
        },
        data(){
            return {
                currentView: '',
            }
        },
        mounted() {
            switch (this.$route.params.component) {
                case 'personal':
                    this.currentView = 'personal';
                    break;
                case 'professional':
                    this.currentView = 'professional';
                    break;
                default:
                    break;
            }
        }
    }
</script>













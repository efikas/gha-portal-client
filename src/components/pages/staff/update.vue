<template>
    <component :is="currentView"></component>
</template>

<script>
    import personal from './update/personal';
    import professional from './update/professional';

    export default {
        name: "staff-layout",
        components: {
            'personal': personal,
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













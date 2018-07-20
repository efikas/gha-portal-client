<template>
    <component :is="currentView"></component>
</template>

<script>
    import personal from './forms/personal';
    import professional from './forms/professional';

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
        created() {
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













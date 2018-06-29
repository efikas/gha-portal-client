<template>
    <component :is="currentView"></component>
</template>

<script>
    import basic from './subcomponents/basic';
    import parent from './subcomponents/parent';
    import academic from './subcomponents/academic';

    export default {
        name: "staff-layout",
        components: {
            'basic': basic,
            'parent': parent,
            'academic': academic,
        },
        data(){
            return {
                currentView: '',
            }
        },
        mounted() {
            switch (this.$route.params.component) {
                case 'basic':
                    this.currentView = 'basic';
                    break;
                case 'parent':
                    this.currentView = 'parent';
                    break;
                case 'academic':
                    this.currentView = 'academic';
                    break;
                default:
                    break;
            }
        }
    }
</script>













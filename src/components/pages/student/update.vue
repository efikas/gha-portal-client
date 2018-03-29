<template>
    <slot></slot>
</template>

<script>
    export default {
        name: "update-layout"
        data(){
            return {
                component: this.route.params.component || '',
            }
        }
    }
</script>

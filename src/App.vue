<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>
<script>
import Vue from "vue";
import BootstrapVue from 'bootstrap-vue';
import ToggleButton from 'vue-js-toggle-button'
require('./services/config.service')

import Auth from './packages/auth/Auth'
import Services from './packages/services/Services'

// Vue.use(Config)
Vue.use(Auth)
Vue.use(Services)
Vue.use(ToggleButton)
Vue.use(BootstrapVue);
export default {
    name: 'app'
}
</script>
<style lang="scss" src="assets/sass/bootstrap/bootstrap.scss"></style>
<style src="font-awesome/css/font-awesome.css"></style>
<style src="bootstrap-vue/dist/bootstrap-vue.css"></style>

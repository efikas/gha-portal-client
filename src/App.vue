<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>
<script>
import Vue from "vue";
import BootstrapVue from 'bootstrap-vue';
import ToggleButton from 'vue-js-toggle-button'
import VueForm from "vue-form";
import {ClientTable, Event} from 'vue-tables-2';
import VueSkeletonLoading from 'vue-skeleton-loading';


Vue.use(ToggleButton)
Vue.use(BootstrapVue);
Vue.use(VueForm);
Vue.use(ClientTable, {}, false);
Vue.use(VueSkeletonLoading);

export default {
    name: 'app'
}
</script>
<style type="text/css">
    abbr {
        color: red;
    }
    .form-group.has-error {
        color: red;
    }
    .form-group.has-error input,
    .form-group.has-error select,
    .form-group.has-error textarea {
        border: 1px solid red;
        background-color: #fffaef;
    }
</style>
<style lang="scss" src="assets/sass/bootstrap/bootstrap.scss"></style>
<style src="font-awesome/css/font-awesome.css"></style>
<style src="bootstrap-vue/dist/bootstrap-vue.css"></style>

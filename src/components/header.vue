<template>
<!-- <div> -->
      <header class="left full-width">
        <div class="navbar-fixed">
            <nav>
                <div class="nav-wrapper">
                    <a href="#" data-activates="slide-out" class="button-collapse dp48 top-nav waves-effect waves-ripple show-on-large"><i class="material-icons">menu</i></a><div class="page-title left">
                    <h1>Dashboard</h1>
                </div>
                    <div id="profile" class="">
                        <span class="avatar center">
                            <img src="static/images/manager.png" width="26" height="26">
                        </span>
                        <a data-activates="appbar-menu-dropdown" class="dropdown-button hide-on-small-only">
                            <h5 class="large">
                                <span class="medium yellow-text" id="user">Olaleye O. Oladipo</span>
                                <i class="material-icons">keyboard_arrow_down</i>
                            </h5>
                        </a>
                        <a class="dropdown-button dp48 hide-on-med-and-up" data-activates="appbar-menu-dropdown">
                            <i class="material-icons">more_vert</i>
                        </a><ul id="appbar-menu-dropdown" class="dropdown-content">
                        <li><a id="logout">Sign Out</a></li>
                    </ul>
                    </div>
                </div>
            </nav>
        </div>
        <sbemis-menu></sbemis-menu>
       <ul class="breadcrumb xsmall upper fixed full-width hide-on-med-and-down">
            <li v-for="(item, index) in items" :key="item.id" :class="isClass(index, items)">
                <a v-if="index < items.length - 1" :href="item.link">{{ item.name }}</a>
                <span v-else>{{ item.name }}</span>
            </li>
        </ul>
    </header>
<!-- </div> -->
</template>
<script>
import SbemisMenu from '@/components/menu'
export default {
  name: 'SbemisHeader',
  components: {SbemisMenu},
  props: ['items'],
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    isClass: (index, items) => {
      return index === items.length - 1 ? 'active' : ''
    }
  }
}
</script>
<style scoped>

</style>

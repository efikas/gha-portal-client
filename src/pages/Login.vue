<template>
<div class="index">
    <transition name="fade">
        <div id="splashscreen" class="animated" v-if="splashVisible">
            <div class="loader-wrapper center-align">
                <img src="/static/images/sbemis.png" width="30" height="auto">
                <!--<div class="load">
                    <div class="loader"></div>
                </div>-->
            </div>
        </div>
    </transition>
    <div id="app" class="container flex fullscreen" :class="containerVisible">
        <div class="row">
            <div id="login-page">
                <div class="skinny-wrapper mauto">
                    <div id="app-logo" class="center-align">
                        <img class="responsive-img" width="240" height="auto" alt="" :src="'static/images/logo/' + getStateName + '-logo.png'">
                    </div>
                    <div class="form-wrapper">
                        <form id="login-form" class="form" role="form" data-form-action="login_user">
                            <!--<input type="hidden" name="state" value="">-->
                            <!--<input type="hidden" name="csrfmiddlewaretoken" value="">-->
                            <div class="form-group relatively">
                                <div class="input-group">
                                    <input type="text" v-model="username" name="username" id="id_username" placeholder="e.g. someone@email.com" class="form-control validate" value="" autocapitalize="off" autocorrect="off" tabindex="1" required autofocus>
                                    <label for="id_username" class="active">Username</label>
                                </div>
                            </div>
                            <div class="form-group relatively">
                                <div class="input-group">
                                    <input type="password" v-model="password" name="password" id="id_password" class="form-control validate" value="" autocapitalize="off" autocorrect="off" tabindex="1" maxlength="16" required>
                                    <label for="id_password">Password</label>
                                    <span class="show-password smaller pointer" data-state="show"><i class="material-icons">visibility</i></span>
                                </div>
                            </div>
                            <div class="form-group relatively m32-top pointer">
                                <input type="checkbox" id="remember" />
                                <label for="remember" class="small blue-grey-text">Remember me</label>
                            </div>
                        </form>
                    </div>
                </div>
                <button id="button" :class="{'rubberBand': nullError, '': !nullError}" class="btn btn-primary waves-effect waves-ripple animated" type="submit" name="action" @click="login($event)">
                    <span>
                        Login
                        <i class="material-icons left">lock</i>
                    </span>
                </button>
                <div class="center help small">
                    <a href="reset.html" class="thick white-text">Forgotten Password? Reset</a>.
                </div>
            </div>
        </div>
    </div>

    <div id="loader" class="spinner-wrapper animated" ignore-mask-click="true">
        <div class="loader-wrapper">
            <div class="load">
                <div class="loader"></div>
            </div>
            <div class="spinner-text">Processing...</div>
        </div>
    </div>
    <simplert
        isUseRadius=true
        isUseIcon=true
        ref="simplert">
    </simplert>

    <audio id="error" src="assets/error.mp3" autostart="false"></audio>
</div>
</template>
<script>
import { mapGetters } from 'vuex'
import Simplert from 'vue2-simplert'
export default {
  name: 'Login',
  components: {Simplert},
  data () {
    return {
      username: '',
      password: '',
      containerVisible: '',
      splashVisible: true,
      nullError: false
    }
  },
  methods: {
    login (e) {
      if (this.username === '' || this.password === '') {
        this.nullError = true
        setTimeout(() => {
          this.nullError = false
        }, 1000)
      } else {
        if (this.username === 'leye@ctsllcweb.com' && this.password === 'chmod777') {
          //  this.$router.push('Dashboard')
          window.location.href = window.location.origin + '/dashboard'
        } else {
          this.openSimplert()
        }
      }
    },
    openSimplert () {
      this.$refs.simplert.openSimplert({
        title: 'User Login Failed!', //  string -- title alert
        message: 'Please register to access this portal.', // string -- message alert
        type: 'error', // string -- type : info (default), success, warning, error
        colorBtn: '#00b35e', // string -- hex color code (default: #068AC9)
        onClose: this.onClose, // function -- when close triggered
        customCloseBtnText: 'OK', //  string -- close button text
        customCloseBtnClass: 'btn btn-error' //  string -- custom class fro button close
        // customClass: '', // string -- custom class in simplert div
        // customIconUrl: '' //  string -- custom url custom image icon
      })
    }
  },
  mounted () {
    // this.splashVisible = ''
  },
  created () {
    setTimeout(() => {
      this.splashVisible = false
    }, 2000)
  },
  computed: {
    ...mapGetters([
      'getStateName'
    ])
  }
}
</script>
<style scoped>
  .fade-enter-active, .fade-leave-active {
      transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to {
      opacity: 0;
  }
</style>

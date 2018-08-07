<template>
    <div class="container-fluid img_backgrond">
        <div class="row">
            <div class="login-content mt-5">
                <div class="row">
                    <div class="col-sm-12 mt-3">
                        <h2 class="text-center logo">
                            <img class="" width="240" height="auto" src="~img/ekiti-logo.png" alt="Logo">
                        </h2>
                    </div>
                </div>
                <form @submit.prevent="onSubmit" novalidate>
                    <div class="form-wrapper">
                        <div class="row" v-if="error" id="login-error">
                            <div class="alert alert-danger col-sm-12">{{ error }}</div>
                        </div>

                        <div class="row">
                            <div class="col-sm-12 mt-3 ">
                                <div class="form-group" :class="{'has-error':$v.email.$error}">
                                    <label for="email"> E-mail</label>
                                    <input v-model="email" name="email" id="email" type="email"
                                           autofocus
                                           @blur="$v.email.$touch()"
                                           placeholder="E-mail" class="form-control"/>
                                    <p v-if="$v.email.$error">Please provide a valid email address.</p>
                                </div>
                            </div>
                            <div class="col-sm-12">
                                <div class="form-group">
                                    <label for="password"> Password</label>
                                    <div class="input-group">
                                        <input v-model="password" name="password" id="password" :type="input"
                                               placeholder="Password" class="form-control" minlength="4"
                                               maxlength="10"/>
                                        <div class="input-group-addon"
                                             style="padding: 2.5px 10px 0 10px!important; background: none!important;">
                                            <a href="" @click.prevent="toggleInput"><i class="material-icons"
                                                                                       style="font-size: 16px;"
                                                                                       v-html="icon_name"></i></a>
                                            <!--<i class="fa fa-eye-slash" aria-hidden="true"></i>-->
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-12 text-center">
                                <div class="form-group">
                                    <p>
                                        <router-link tag="a" to="/forgotpassword" class="">Forgot Your Password ?
                                        </router-link>
                                    </p>
                                    <!--<div class="form-group">-->
                                    <button type="submit" ref="button" :disabled="$v.$invalid"
                                            class="btn btn-block btn-primary login-btn"><i
                                            class="fa fa-lock"></i> <span v-html="logintext">Login</span>
                                    </button>
                                    <!--</div>-->
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
    import {loginV} from 'src/validations/validations'
    import Toaster from '../../mixins/toaster'

    export default {
        name: "login",
        data() {
            return {
                email: null,
                password: null,
                error: "",
                input: 'password',
                icon_name: 'visibility',
                logintext: 'Login',
            }
        },
        validations: loginV,
        mixins: [Toaster],
        methods: {
            toggleInput() {
                if (this.input === 'password') {
                    this.input = 'text';
                    this.icon_name = 'visibility_off'
                }
                else {
                    this.input = 'password';
                    this.icon_name = 'visibility'
                }

            },
            onSubmit() {
                this.$refs.button.disabled = true;
                this.logintext = "please wait...";
                this.$store.dispatch('login', {username: this.email, password: this.password})
                    .then(() => {
                        // console.log(redirect)
                        // this.$router.push({name: 'dashboard'})
                        window.location.href = this.$route.query.redirect || "/";
                    })
                    .catch(() => {
                        this.$refs.button.disabled = false;
                        this.logintext = "Login"
                        setTimeout(() => this.errorMsg('The user credentials were incorrect.', 'Login Error'), 200)
                    });
            }
        },
        beforeRouteLeave(to, from, next) {
            next()
        }
    }
</script>
<style scoped>
    .login-content {
        margin: 7% auto;
        box-shadow: 0 0 20px #ccc;
        border-radius: 7px;
        background-color: rgba(255, 255, 255, 1);
        width: 288px !important;
        padding: 20px;
        font-size: 12px;
    }

    .img_backgrond {
        /*background:linear-gradient(rgba(216, 49, 52, 0.56),rgba(107, 28, 43, 0.95)),url("~img/page_bck.jpg");*/
        /*background-repeat: no-repeat;*/
        width: 100%;
        /*background-size: cover;*/
        /*padding-bottom: 35px;*/
    }

    .logo {
        min-height: 60px;
    }

    label {
        font-size: 14px !important;
    }

    .form-group label {
        font-size: 12px !important;
    }

    .login-content input {
        height: 30px;
        font-size: 13px;
    }

    .login-content input:focus {
        border-color: #841515;
        box-shadow: 0 0 3px #841515;
    }

    ::-webkit-input-placeholder {
        font-size: 14px;
    }

    #login-error {
        margin: 2px 0 0 0;
    }
</style>

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
                <vue-form :state="formstate" @submit.prevent="onSubmit">
                    <div class="form-wrapper">
                        <div class="row" v-if="error" id="login-error">
                            <div class="alert alert-danger col-sm-12">{{ error }}</div>
                        </div>

                        <div class="row">
                            <div class="col-sm-12 mt-3 ">
                                <div class="form-group">
                                    <validate tag="div">
                                        <label for="email"> E-mail</label>
                                        <input v-model="model.email" name="email" id="email" type="email" required autofocus
                                               placeholder="E-mail" class="form-control"/>
                                        <field-messages name="email" show="$invalid && $submitted" class="text-danger">
                                            <div slot="required">Email is a required field</div>
                                            <div slot="email">Email is not valid</div>
                                        </field-messages>
                                    </validate>
                                </div>
                            </div>
                            <div class="col-sm-12">
                                <div class="form-group">
                                    <validate tag="div">
                                        <label for="password"> Password</label>
                                        <input v-model="model.password" name="password" id="password" type="password"
                                               required placeholder="Password" class="form-control" minlength="4"
                                               maxlength="10"/>
                                        <field-messages name="password" show="$invalid && $submitted" class="text-danger">
                                            <div slot="required">Password is required</div>
                                            <div slot="minlength">Password should be atleast 4 characters long</div>
                                            <div slot="maxlength">Password should be atmost 10 characters long</div>
                                        </field-messages>
                                    </validate>
                                </div>
                            </div>
                            <div class="col-lg-12 col-md-12">
                                <validate tag="label">
                                    <label class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input checkbox_label" name="remember"
                                               id="remember" v-model="model.remember" check-box>
                                        <span class="custom-control-indicator"></span>
                                        <span class="custom-control-description">Remember Me</span>
                                    </label>
                                    <field-messages name="remember" show="$invalid && $submitted" class="text-danger">
                                        <div slot="check-box">Terms must be accepted</div>
                                    </field-messages>
                                </validate>
                            </div>
                            <div class="col-sm-12 text-center">
                                <div class="form-group">
                                    <p>
                                        <router-link tag="a" to="/forgotpassword" class="">Forgot Your Password ?
                                        </router-link>
                                    </p>
                                    <!--<div class="form-group">-->
                                    <button type="submit" class="btn btn-block btn-primary login-btn"><i class="fa fa-lock"></i> Login</button>
                                    <!--</div>-->
                                </div>
                            </div>
                        </div>
                    </div>
                </vue-form>
            </div>
        </div>
    </div>
</template>
<script>
    import Vue from 'vue'
    import VueForm from "vue-form";
    import options from "src/validations/validations.js";

    Vue.use(VueForm, options);
    export default {
        name: "login2",
        data() {
            return {
                formstate: {},
                model: {
                    email: "ayodeji@ctsllcweb.com",
                    password: "ericson"

                },
                error: ""
            }
        },
        methods: {
            onSubmit() {
                if (this.formstate.$invalid) {
                    return;
                } else {
                    this.error = ""
                    let credentials = {
                        client_id: 2,
                        client_secret: "BsPZmqDtu7w5iFQuWOiPIOzdU17Uw64jbg9FWzZI",
                        grant_type: "password",
                        username: this.model.email,
                        password: this.model.password
                    };

                    this.$auth.login(credentials)
                        .then((data) => {
                            console.log(data);
                            var redirect = this.$route.query.redirect || "/"
                            console.log(redirect)
                            this.$router.push(redirect);
                        })
                        .catch(response => {
                            this.error = "The user credentials were incorrect."
                        });
                }
            }
        },
        mounted() {
            // this.$settings.getSettings().then(data => {
            //     localStorage.setItem('settings', JSON.stringify(data));
            // });
        },
        destroyed: function () {

        },
    //
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
        min-height:60px;
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

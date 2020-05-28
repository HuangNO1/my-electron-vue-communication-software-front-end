<template>
  <div style="background-color: #212121; height: 100%;">
    <v-app-bar color="dark darken-2" height="100" absolute dark app>
      <!-- -->
      <v-spacer></v-spacer>
      <v-avatar>
        <img
          src="https://avatars1.githubusercontent.com/u/48636976?s=460&u=6fc910ffe23ff8ff7ffc210d49ca81fdec486f9f&v=4"
          alt="Rem"
        />
      </v-avatar>
      <v-toolbar-title class="display-1 ml-4">BlutX</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-content style="height: 100%">
      <v-container fluid>
        <v-card
          class="mx-auto p4 mt-5"
          max-width="500"
          style="background-color: #212121;"
          flat
        >
          <v-window v-model="step">
            <!-- Sign In -->
            <v-window-item :value="1">
              <div class="white--text display-2 text-center">
                <p>SIGN IN</p>
              </div>
              <v-card-text>
                <v-text-field
                  v-model="signInEmail"
                  label="E-mail"
                  outlined
                  required
                  dark
                  :error-messages="signInEmailErrorsFunc"
                  :success-messages="signInEmailSuccessFunc"
                  @input="$v.signInEmail.$touch()"
                  @blur="$v.signInEmail.$touch()"
                >
                  <v-icon slot="prepend" color="white">mdi-email</v-icon>
                </v-text-field>

                <v-text-field
                  v-model="signInPassword"
                  label="Password"
                  :type="signInSeePwd"
                  outlined
                  required
                  dark
                  :error-messages="signInPasswordErrorsFunc"
                  :success-messages="signInPasswordSuccessFunc"
                  @input="$v.signInPassword.$touch()"
                  @blur="$v.signInPassword.$touch()"
                >
                  <v-icon slot="prepend" color="white">mdi-lock</v-icon>
                  <v-icon slot="append" color="red" @click="signInEyeClick">
                    {{ signInEye }}
                  </v-icon>
                </v-text-field>
                <div class="white--text mt-5" style="text-align: end;">
                  <a @click="step = 6">Forgot password?</a>
                </div>
              </v-card-text>

              <v-card-actions>
                <v-btn block x-large color="primary" to="main">Sign In</v-btn>
              </v-card-actions>
              <div class="white--text mt-5" style="text-align: center">
                <p>Have no account? To <a @click="step++">sign up</a>.</p>
              </div>
              <v-alert type="success">
                I'm a success alert.
              </v-alert>
            </v-window-item>
            <!-- Sign Up Part 1 -->
            <v-window-item :value="2">
              <div class="white--text display-2 text-center">
                <p>SIGN UP</p>
              </div>
              <v-card-text>
                <!-- username -->
                <v-text-field
                  v-model="signUpUsername"
                  :counter="20"
                  label="Username"
                  outlined
                  required
                  dark
                  :error-messages="signUpUsernameErrorsFunc"
                  :success-messages="signUpUsernameSuccessFunc"
                  @input="$v.signUpUsername.$touch()"
                  @blur="$v.signUpUsername.$touch()"
                >
                  <v-icon slot="prepend" color="white">mdi-account</v-icon>
                </v-text-field>
                <!-- email -->
                <v-text-field
                  v-model="signUpEmail"
                  label="E-mail"
                  outlined
                  required
                  dark
                  :error-messages="signUpEmailErrorsFunc"
                  :success-messages="signUpEmailSuccessFunc"
                  @input="$v.signUpEmail.$touch()"
                  @blur="$v.signUpEmail.$touch()"
                >
                  <v-icon slot="prepend" color="white">mdi-email</v-icon>
                </v-text-field>
                <!-- phone number -->
                <v-text-field
                  v-model="signUpPhone"
                  label="Phone"
                  outlined
                  required
                  dark
                  :error-messages="signUpPhoneErrorsFunc"
                  :success-messages="signUpPhoneSuccessFunc"
                  @input="$v.signUpPhone.$touch()"
                  @blur="$v.signUpPhone.$touch()"
                >
                  <v-icon slot="prepend" color="white">mdi-cellphone</v-icon>
                </v-text-field>
              </v-card-text>
              <v-card-actions>
                <v-btn block x-large color="success" @click="step++"
                  >Next</v-btn
                >
              </v-card-actions>
              <div class="white--text mt-5" style="text-align: center;">
                <a @click="step--">Back to sign in.</a>
              </div>
            </v-window-item>
            <!-- Sign Up Part 2 -->
            <v-window-item :value="3">
              <div class="white--text display-2 text-center">
                <p>SIGN UP</p>
              </div>
              <v-card-text>
                <!-- password -->
                <v-text-field
                  v-model="signUpPassword"
                  :type="signUpSeePwd"
                  label="Password"
                  outlined
                  required
                  dark
                  :error-messages="signUpPasswordErrorsFunc"
                  :success-messages="signUpPasswordSuccessFunc"
                  @input="$v.signUpPassword.$touch()"
                  @blur="$v.signUpPassword.$touch()"
                >
                  <v-icon slot="prepend" color="white">mdi-lock</v-icon>
                  <v-icon slot="append" color="red" @click="signUpEyeClick">{{
                    signUpEye
                  }}</v-icon>
                </v-text-field>
                <!-- repeat password -->
                <v-text-field
                  v-model="signUpRepeatPassword"
                  :type="signUpSeeRepeatPwd"
                  label="Repeat Password"
                  outlined
                  required
                  dark
                  :error-messages="signUpRepeatPasswordErrorsFunc"
                  :success-messages="signUpRepeatPasswordSuccessFunc"
                  @input="$v.signUpRepeatPassword.$touch()"
                  @blur="$v.signUpRepeatPassword.$touch()"
                >
                  <v-icon slot="prepend" color="white"
                    >mdi-lock-question</v-icon
                  >
                  <v-icon
                    slot="append"
                    color="red"
                    @click="signUpRepeatEyeClick"
                  >
                    {{ signUpRepeatEye }}
                  </v-icon>
                </v-text-field>
                <!-- agree -->
                <v-checkbox
                  v-model="signUpCheckbox"
                  label="I accept Pet Home's privacy policy."
                  required
                  dark
                  :error-messages="signUpCheckboxErrorsFunc"
                  @change="$v.signUpCheckbox.$touch()"
                  @blur="$v.signUpCheckbox.$touch()"
                ></v-checkbox>
              </v-card-text>
              <v-card-actions>
                <v-btn block x-large color="warning" @click="step++"
                  >Sign Up</v-btn
                >
              </v-card-actions>
              <div class="white--text mt-5" style="text-align: center;">
                <a @click="step--">Back to previous step.</a>
              </div>
            </v-window-item>
            <!-- 驗證 email -->
            <v-window-item :value="4">
              <div class="white--text display-2 text-center">
                <p>VERIFY</p>
              </div>
              <v-card-text>
                <v-text-field
                  v-model="signUpCaptcha"
                  label="Captcha"
                  outlined
                  required
                  dark
                  :error-messages="signUpCaptchaErrorsFunc"
                  :success-messages="signUpCaptchaSuccessFunc"
                  @input="$v.signUpCaptcha.$touch()"
                  @blur="$v.signUpCaptcha.$touch()"
                >
                </v-text-field>
              </v-card-text>
              <v-card-actions>
                <v-btn block x-large color="error" @click="step++"
                  >VERIFY</v-btn
                >
              </v-card-actions>
              <div class="white--text mt-5" style="text-align: center;">
                <a @click="step -= 2">Refill the form.</a>
              </div>
            </v-window-item>
            <!-- 註冊成功 -->
            <v-window-item :value="5">
              <div class="white--text display-2 text-center">
                <p>Welcome to BlutX</p>
              </div>
              <v-card-text class="text-center">
                <v-icon dark style="font-size: 15rem;">mdi-check-circle</v-icon
                ><br />
                <p class="white--text">You sign up successfully.</p>
              </v-card-text>
              <v-card-actions>
                <v-btn block x-large color="teal" @click="step = 1"
                  >Sign In
                </v-btn>
              </v-card-actions>
            </v-window-item>
            <!-- 忘記密碼找回 -->
            <v-window-item :value="6">
              <div class="white--text display-2 text-center">
                <p>FORGOT PASSWORD</p>
              </div>
              <v-card-text class="text-center">
                <p class="white--text">
                  Please enter your origin email to get new password.
                </p>
                <!-- email -->
                <v-text-field
                  v-model="forgotEmail"
                  label="E-mail"
                  outlined
                  required
                  dark
                  :error-messages="forgotEmailErrorsFunc"
                  :success-messages="forgotEmailSuccessFunc"
                  @input="$v.forgotEmail.$touch()"
                  @blur="$v.forgotEmail.$touch()"
                >
                  <v-icon slot="prepend" color="white">mdi-email</v-icon>
                </v-text-field>
              </v-card-text>
              <v-btn block x-large color="error" class="mb-4"
                >Get New Password
              </v-btn>
              <v-btn
                class="white--text"
                block
                x-large
                color="indigo"
                @click="step = 1"
                >Sign In
              </v-btn>
            </v-window-item>
          </v-window>
        </v-card>
      </v-container>
    </v-content>
    <v-footer dark fixed padless>
      <v-card
        flat
        tile
        class="dark lighten-1 white--text text-center"
        style="width: 100%"
      >
        <v-card-text>
          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-4 white--text"
            icon
          >
            <v-icon size="24px">{{ icon }}</v-icon>
          </v-btn>
        </v-card-text>

        <v-card-text class="white--text pt-0">
          We are a senior team, and we have produced such a great communication
          software.
        </v-card-text>

        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>BlutX</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </div>
</template>

<script>
// 引入 validate
import { validationMixin } from "vuelidate";
import {
  required,
  minLength,
  maxLength,
  email,
  sameAs,
} from "vuelidate/lib/validators";
// 引入 axios
import axios from "axios";
import Vue from "vue";

// chinese phone number
const isPhone = (value) => /^((13|14|15|17|18)[0-9]{1}\d{8})$/.test(value);

export default {
  // 定義 validate
  mixins: [validationMixin],

  validations: {
    // Sign In ------------------------
    signInEmail: { required, email },
    signInPassword: { required },
    // Sign Up ------------------------
    signUpUsername: {
      required,
      maxLength: maxLength(20),
    },
    signUpEmail: {
      required,
      email,
    },
    signUpPhone: {
      required,
      phoneValid: isPhone,
    },
    signUpPassword: { required, minLength: minLength(6) },
    signUpRepeatPassword: {
      required,
      sameAsPassword: sameAs("signUpPassword"),
    },

    signUpCheckbox: {
      checked(val) {
        return val;
      },
    },
    signUpCaptcha: {
      required,
    },
    // forgot ppassword
    forgotEmail: {
      required,
      email,
    },
  },
  // --------------------------------------------
  data: () => ({
    step: 1,
    icons: ["mdi-github", "mdi-telegram", "mdi-twitter"],
    // Sign In
    signInEmail: "",
    signInPassword: "",
    signInEye: "mdi-eye-off",
    signInSeePwd: "password",
    // Sign Up
    signUpUsername: "",
    signUpEmail: "",
    signUpPhone: "",
    signUpPassword: "",
    signUpRepeatPassword: "",
    signUpEye: "mdi-eye-off",
    signUpSeePwd: "password",
    signUpRepeatEye: "mdi-eye-off",
    signUpSeeRepeatPwd: "password",
    signUpCheckbox: true,
    signUpCaptcha: "",
    // Forgot Password
    forgotEmail: "",
    // many enter Errors
    // Sign In -------------
    signInEmailError: true,
    signInPasswordError: true,
    // Sign Up ------------
    signUpUsernameError: true,
    signUpEmailError: true,
    signUpPhoneError: true,
    signUpPasswordError: true,
    signUpRepeatPasswordError: true,
    signUpCheckboxError: true,
    // forgot password -------
    forgotEmailError: true,
    // request URL
    // Sign In -------------
    requestAutoSignInURL: "http://localhost:5000/user/auto_login",
    requestSignInURL: "http://localhost:5000/user/login",
    // Sign Up ----------
    requestSignUpURL: "http://localhost:5000/user/register",
    requestValidateEmailURL: "http://localhost:5000/user/validateEmail",
    // Forgot Password ----
    requestForgotPasswordURL: "http://localhost:5000/user/forgotPassword",
    // adjust -----
    signInSuccess: false,
    signUpSuccess: false,
    signUpValidateEmailSuccess: false,
    forgotPasswordSuccess: false,
    // response msg
    signInMsg: "",
    signUpMsg: "",
    signUpValidateEmailMsg: "",

  }),
  methods: {
    // -----------------------------------------------
    // 是否可以看到密碼的函式
    signInEyeClick() {
      if (this.signInEye === "mdi-eye-off") {
        this.signInEye = "mdi-eye";
        this.signInSeePwd = "";
      } else {
        this.signInEye = "mdi-eye-off";
        this.signInSeePwd = "password";
      }
    },
    signUpEyeClick() {
      if (this.signUpEye === "mdi-eye-off") {
        this.signUpEye = "mdi-eye";
        this.signUpSeePwd = "";
      } else {
        this.signUpEye = "mdi-eye-off";
        this.signUpSeePwd = "password";
      }
    },
    signUpRepeatEyeClick() {
      if (this.signUpRepeatEye === "mdi-eye-off") {
        this.signUpRepeatEye = "mdi-eye";
        this.signUpSeeRepeatPwd = "";
      } else {
        this.signUpRepeatEye = "mdi-eye-off";
        this.signUpSeeRepeatPwd = "password";
      }
    },
    //----------------------------------------------
    // Sign In request
    AutoSignInRequest() {
      // submit the auto login request

      let jwt_token = Vue.localStorage.get("jwt_token");
      axios
        .post(this.requestAutoSignInURL, {
          headers: { "Content-Type": "form-data", Authorization: jwt_token },
          transformRequest: [(headers) => data], //預設值，不做任何轉換
        })
        .then((response) => {
          console.log(response.data);
          if (response.data.data) {
            // 登入成功
            document.location.href = "/main";
          } else {
            // 登入失敗
            this.signInSuccess = false;
            // 去除 localstorage 的 token 和 user_id
            Vue.localStorage.remove('jwt_token')
            Vue.localStorage.remove('user_id')
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },

    SignInRequest() {
      if (
        this.signInEmailError === false &&
        this.signInPasswordError === false
      ) {
        // submit the sign in request

        let data = new FormData();
        data.append("email", this.signInEmail);
        data.append("password", this.signInPassword);
        axios
          .post(this.requestSignInURL, data, {
            headers: { "Content-Type": "form-data" },
            transformRequest: [(data, headers) => data], //預設值，不做任何轉換
          })
          .then((response) => {
            console.log(response.data);
            if(response.data.data) {
              // 登入成功
              // 將 token 和 user_id 存到 localstorage
              Vue.localStorage.set('jwt_token', response.data.jwt_token)
              Vue.localStorage.set('user_id', response.data.user_id)
            } else {
              // 登入失敗
              this.signInSuccess = false;
              this.signInMsg = response.data.message;
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
    SignUpRequest() {
      if (
        this.nameError === false &&
        this.emailError === false &&
        this.passwordError === false &&
        this.checkbox === true
      ) {
        // submit the login request

        let data = new FormData();
        data.append("username", this.name);
        data.append("email", this.email);
        data.append("password", this.password);
        axios
          .post(this.loginURL, data, {
            headers: { "Content-Type": "form-data" },
            transformRequest: [(data, headers) => data], //預設值，不做任何轉換
          })
          .then((response) => {
            console.log(response);
            console.log(response.data);
            this.loginSuccess = response.data.data;
            this.openDialog = false;
            if (this.loginSuccess) {
              this.dialog = true;
            }
          })
          .catch((error) => {
            console.log(error);

            this.openDialog = false;
            if (this.loginSuccess) {
              this.dialog = true;
            }
          });
      }
    },
    ValidateEmailRequest() {
      if (
        this.nameError === false &&
        this.emailError === false &&
        this.passwordError === false &&
        this.checkbox === true
      ) {
        // submit the login request

        let data = new FormData();
        data.append("username", this.name);
        data.append("email", this.email);
        data.append("password", this.password);
        axios
          .post(this.loginURL, data, {
            headers: { "Content-Type": "form-data" },
            transformRequest: [(data, headers) => data], //預設值，不做任何轉換
          })
          .then((response) => {
            console.log(response);
            console.log(response.data);
            this.loginSuccess = response.data.data;
            this.openDialog = false;
            if (this.loginSuccess) {
              this.dialog = true;
            }
          })
          .catch((error) => {
            console.log(error);

            this.openDialog = false;
            if (this.loginSuccess) {
              this.dialog = true;
            }
          });
      }
    },
    ForgotPasswordRequest() {
      if (
        this.nameError === false &&
        this.emailError === false &&
        this.passwordError === false &&
        this.checkbox === true
      ) {
        // submit the login request

        let data = new FormData();
        data.append("username", this.name);
        data.append("email", this.email);
        data.append("password", this.password);
        axios
          .post(this.loginURL, data, {
            headers: { "Content-Type": "form-data" },
            transformRequest: [(data, headers) => data], //預設值，不做任何轉換
          })
          .then((response) => {
            console.log(response);
            console.log(response.data);
            this.loginSuccess = response.data.data;
            this.openDialog = false;
            if (this.loginSuccess) {
              this.dialog = true;
            }
          })
          .catch((error) => {
            console.log(error);

            this.openDialog = false;
            if (this.loginSuccess) {
              this.dialog = true;
            }
          });
      }
    },
  },
  computed: {
    // validate---------------
    // Sign In --------------------
    signInEmailErrorsFunc() {
      const errors = [];
      if (!this.$v.signInEmail.$dirty) return errors;
      !this.$v.signInEmail.email && errors.push("Must be valid e-mail.");
      !this.$v.signInEmail.required && errors.push("E-mail is required.");
      this.signInEmailError = true;
      return errors;
    },
    signInPasswordErrorsFunc() {
      const errors = [];
      if (!this.$v.signInPassword.$dirty) return errors;
      !this.$v.signInPassword.required && errors.push("Password is required.");
      this.signInPasswordError = true;
      return errors;
    },
    signInEmailSuccessFunc() {
      if (this.signInEmail !== "" && this.$v.signInEmail.email) {
        this.signInEmailError = false;
        console.log("signInEmailSuccess");
      }
    },
    signInPasswordSuccessFunc() {
      if (this.signInPassword !== "") {
        this.signInPasswordError = false;
        console.log("signInPasswordSuccess");
      }
    },
    // Sign Up ------------------

    signUpUsernameErrorsFunc() {
      const errors = [];
      if (!this.$v.signUpUsername.$dirty) return errors;
      !this.$v.signUpUsername.maxLength &&
        errors.push("Username must be at most 20 characters long.");
      !this.$v.signUpUsername.required && errors.push("Username is required.");
      this.signUpUsernameError = true;
      return errors;
    },
    signUpEmailErrorsFunc() {
      const errors = [];
      if (!this.$v.signUpEmail.$dirty) return errors;
      !this.$v.signUpEmail.email && errors.push("Must be valid e-mail.");
      !this.$v.signUpEmail.required && errors.push("E-mail is required.");
      this.signUpEmailError = true;
      return errors;
    },
    signUpPhoneErrorsFunc() {
      const errors = [];
      if (!this.$v.signUpPhone.$dirty) return errors;
      !this.$v.signUpPhone.phoneValid &&
        errors.push("Must be valid phone number.");
      !this.$v.signUpPhone.required && errors.push("Phone number is required.");
      this.signUpPhoneError = true;
      return errors;
    },
    signUpPasswordErrorsFunc() {
      const errors = [];
      if (!this.$v.signUpPassword.$dirty) return errors;
      !this.$v.signUpPassword.minLength &&
        errors.push("Password must have at least 6 letters.");
      !this.$v.signUpPassword.required && errors.push("Password is required.");
      this.signUpPasswordError = true;
      return errors;
    },
    signUpRepeatPasswordErrorsFunc() {
      const errors = [];
      if (!this.$v.signUpRepeatPassword.$dirty) return errors;
      !this.$v.signUpRepeatPassword.sameAsPassword &&
        errors.push("Password must be identical.");
      !this.$v.signUpRepeatPassword.required &&
        errors.push("Password must be identical.");
      this.signUpRepeatPasswordError = true;
      return errors;
    },
    signUpCaptchaErrorsFunc() {
      const errors = [];
      if (!this.$v.signUpCaptcha.$dirty) return errors;
      !this.$v.signUpCaptcha.required && errors.push("captcha is required.");
      this.signUpCaptchaError = true;
      return errors;
    },
    signUpCheckboxErrorsFunc() {
      const errors = [];
      if (!this.$v.signUpCheckbox.$dirty) return errors;
      !this.$v.signUpCheckbox.checked &&
        errors.push("You must accept to continue!");
      return errors;
    },
    signUpUsernameSuccessFunc() {
      if (this.signUpUsername !== "" && this.$v.signUpUsername.maxLength) {
        this.signUpUsernameError = false;
        console.log("signUpUsernameSuccess");
        return "Username is OK.";
      }
    },
    signUpEmailSuccessFunc() {
      if (this.signUpEmail !== "" && this.$v.signUpEmail.email) {
        this.signUpEmailError = false;
        console.log("emailSuccess");
        return "E-mail is OK.";
      }
    },
    signUpPhoneSuccessFunc() {
      if (this.signUpPhone !== "" && this.$v.signUpPhone.phoneValid) {
        this.signUpPhoneError = false;
        console.log("phoneSuccess");
        return "Phone number is OK.";
      }
    },
    signUpPasswordSuccessFunc() {
      if (this.signUpPassword !== "" && this.$v.signUpPassword.minLength) {
        this.signUpPasswordError = false;
        console.log("passwordSuccess");
        return "Password is OK.";
      }
    },
    signUpRepeatPasswordSuccessFunc() {
      if (
        this.signUpRepeatPassword !== "" &&
        this.$v.signUpRepeatPassword.sameAsPassword
      ) {
        this.signUpRepeatPasswordError = false;
        console.log("repeatPasswordSuccess");
        return "Repeat is OK.";
      }
    },
    signUpCaptchaSuccessFunc() {
      if (this.signUpCaptcha !== "") {
        this.signUpCaptchaError = false;
        console.log("captchaSuccess");
        return "Captcha is OK.";
      }
    },
    // Forgot Password ---------------------
    forgotEmailErrorsFunc() {
      const errors = [];
      if (!this.$v.forgotEmail.$dirty) return errors;
      !this.$v.forgotEmail.email && errors.push("Must be valid e-mail.");
      !this.$v.forgotEmail.required && errors.push("E-mail is required.");
      this.forgotEmailError = true;
      return errors;
    },
    forgotEmailSuccessFunc() {
      if (this.forgotEmail !== "" && this.$v.forgotEmail.email) {
        this.forgotEmailError = false;
        console.log("forgotEmailSuccess");
      }
    },
  },
};
</script>

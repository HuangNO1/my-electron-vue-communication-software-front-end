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
                >
                  <v-icon slot="prepend" color="white">mdi-lock</v-icon>
                  <v-icon slot="append" color="red" @click="signInEyeClick">
                    {{ signInEye }}
                  </v-icon>
                </v-text-field>
                <div class="white--text mt-5" style="text-align: end;">
                  <a>Forgot password?</a>
                </div>
              </v-card-text>

              <v-card-actions>
                <v-btn block x-large color="primary">Sign In</v-btn>
              </v-card-actions>
              <div class="white--text mt-5" style="text-align: center">
                <p>Have no account? To <a @click="step++">sign up</a>.</p>
              </div>
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
                >
                </v-text-field>
              </v-card-text>
              <v-card-actions>
                <v-btn block x-large color="error" @click="step++"
                  >VERIFY</v-btn
                >
              </v-card-actions>
              <div class="white--text mt-5" style="text-align: center;">
                <a @click="step-=2">Refill the form.</a>
              </div>
            </v-window-item>
            <!-- 註冊成功 -->
            <v-window-item :value="5">
              <div class="white--text display-2 text-center">
                <p>Welcome to BlutX</p>
              </div>
              <v-card-text class="text-center">
                <v-icon dark style="font-size: 15rem;">mdi-check-circle</v-icon><br>
                <p class="white--text">You sign up successfully.</p>
              </v-card-text>
              <v-card-actions>
                <v-btn block x-large color="teal" @click="step++"
                  >Sign In
                </v-btn>
              </v-card-actions>
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
export default {
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
  },
  computed: {
    currentTitle() {
      switch (this.step) {
        case 1:
          return "Sign-up";
        case 2:
          return "Create a password";
        default:
          return "Account created";
      }
    },
  },
};
</script>

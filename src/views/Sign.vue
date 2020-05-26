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
          class="mx-auto p4 mt-12"
          max-width="500"
          style="background-color: #212121;"
          flat
        >
          <v-window v-model="step">
            <v-window-item :value="1">
              <v-card-text>
                <!-- name -->
                <v-text-field
                  v-model="signInUsername"
                  :error-messages="signInUsernameErrors"
                  :success-messages="nameSuccess"
                  label="E-mail"
                  outlined
                  required
                  dark
                >
                  <v-icon slot="prepend" color="white">mdi-account</v-icon>
                </v-text-field>
                <!-- password -->
                <v-text-field
                  v-model="password"
                  :type="seePwd"
                  :error-messages="passwordErrors"
                  :success-messages="passwordSuccess"
                  label="Password"
                  outlined
                  required
                  dark
                >
                  <v-icon slot="prepend" color="white">mdi-lock</v-icon>
                  <v-icon slot="append" color="red" @click="eyeClick">{{
                    eye
                  }}</v-icon>
                </v-text-field>
              </v-card-text>
            </v-window-item>

            <v-window-item :value="2">
              <v-card-text>
                <v-text-field label="Password" type="password"></v-text-field>
                <v-text-field
                  label="Confirm Password"
                  type="password"
                ></v-text-field>
                <span class="caption grey--text text--darken-1">
                  Please enter a password for your account
                </span>
              </v-card-text>
            </v-window-item>

            <v-window-item :value="3">
              <div class="pa-4 text-center">
                <v-img
                  class="mb-4"
                  contain
                  height="128"
                  src="https://cdn.vuetifyjs.com/images/logos/v.svg"
                ></v-img>
                <h3 class="title font-weight-light mb-2">
                  Welcome to Vuetify
                </h3>
                <span class="caption grey--text">Thanks for signing up!</span>
              </div>
            </v-window-item>
          </v-window>
        </v-card>
      </v-container>
    </v-content>
    <v-footer dark fixed padless>
      <v-card flat tile class="dark lighten-1 white--text text-center">
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
          Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet.
          Mauris cursus commodo interdum. Praesent ut risus eget metus luctus
          accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim
          a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula
          lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus
          iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum
          tempor vel ut orci. Orci varius natoque penatibus et magnis dis
          parturient montes, nascetur ridiculus mus.
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
  }),
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

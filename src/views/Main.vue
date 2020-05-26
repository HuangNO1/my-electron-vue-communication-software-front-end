<template>
  <div style="background-color: #212121; height: 100%">
    <v-navigation-drawer color="dark lighten-1" permanent dark>
      <v-row class="fill-height" no-gutters>
        <v-navigation-drawer
          color="grey darken-3"
          mini-variant
          permanent
          dark
        >
          <v-list nav class="py-0">
            <v-list-item class="px-0">
              <v-list-item-avatar>
                <img
                  src="https://avatars1.githubusercontent.com/u/48636976?s=460&u=6fc910ffe23ff8ff7ffc210d49ca81fdec486f9f&v=4"
                />
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title>Application</v-list-item-title>
                <v-list-item-subtitle>Subtext</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-list-item v-for="item in items" :key="item.title" link>
              <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
          <template v-slot:append>
            <v-list-item link @click.stop="drawer = !drawer">
              <v-list-item-icon>
                <v-icon>mdi-cog</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>Setting</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </template>
        </v-navigation-drawer>
        <v-list class="grow">
          <v-list-item v-for="link in links" :key="link" link>
            <v-list-item-title v-text="link"></v-list-item-title>
          </v-list-item>
        </v-list>
      </v-row>
    </v-navigation-drawer>
    <v-navigation-drawer v-model="drawer" color="#212121" absolute temporary dark>
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>John Leider</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list>
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [
        { title: "Chat", icon: "mdi-forum" },
        { title: "Personal", icon: "mdi-account" },
        { title: "Group", icon: "mdi-account-group" },
      ],
      drawer: null,
      links: ['Home', 'Contacts', 'Settings'],
    };
  },
};
</script>

<template>
  <div style="background-color: #212121; height: 100%">
    <v-navigation-drawer color="grey darken-4" mini-variant permanent dark app>
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
    <v-navigation-drawer
      v-model="drawer"
      color="#212121"
      absolute
      temporary
      dark
    >
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

    <v-content>
      <v-row style="padding: 0; margin: 0;">
        <v-col xs="auto" sm="auto" md="auto" lg="auto" xl="auto">
          <vue-resizable
            minWidth="200"
            maxWidth="800"
            height="100%"
            :active="['r']"
          >
            <div>
              <v-list class="resizable-content" two-line subheader dark>
                <v-subheader inset>Folders</v-subheader>

                <v-list-item
                  v-for="item in TESTitems"
                  :key="item.title"
                  @click=""
                  dark
                >
                  <v-list-item-avatar>
                    <v-icon
                      :class="[item.iconClass]"
                      v-text="item.icon"
                    ></v-icon>
                  </v-list-item-avatar>

                  <v-list-item-content>
                    <v-list-item-title v-text="item.title"></v-list-item-title>
                    <v-list-item-subtitle
                      v-text="item.subtitle"
                    ></v-list-item-subtitle>
                  </v-list-item-content>

                  <v-list-item-action>
                    <v-btn icon>
                      <v-icon color="grey lighten-1">mdi-information</v-icon>
                    </v-btn>
                  </v-list-item-action>
                </v-list-item>

                <v-divider inset></v-divider>

                <v-subheader inset>Files</v-subheader>

                <v-list-item
                  v-for="item in TESTitems2"
                  :key="item.title"
                  @click=""
                >
                  <v-list-item-avatar>
                    <v-icon
                      :class="[item.iconClass]"
                      v-text="item.icon"
                    ></v-icon>
                  </v-list-item-avatar>

                  <v-list-item-content>
                    <v-list-item-title v-text="item.title"></v-list-item-title>
                    <v-list-item-subtitle
                      v-text="item.subtitle"
                    ></v-list-item-subtitle>
                  </v-list-item-content>

                  <v-list-item-action>
                    <v-btn icon>
                      <v-icon color="grey lighten-1">mdi-information</v-icon>
                    </v-btn>
                  </v-list-item-action>
                </v-list-item>
              </v-list>
            </div>
          </vue-resizable>
        </v-col>
        <v-col>
          <div style="background-color: blue">
            jjjjjjjj
          </div>
        </v-col>
      </v-row>

      <!--<v-container id="cnt" fluid> </v-container>-->
    </v-content>
  </div>
</template>
<script>
import VueResizable from "vue-resizable";

export default {
  components: {
    VueResizable,
  },
  data() {
    return {
      items: [
        { title: "Chat", icon: "mdi-forum" },
        { title: "Personal", icon: "mdi-account" },
        { title: "Group", icon: "mdi-account-group" },
      ],
      drawer: null,
      links: ["Home", "Contacts", "Settings"],
      TESTitems: [
        {
          icon: "folder",
          iconClass: "grey lighten-1 white--text",
          title: "Photos",
          subtitle: "Jan 9, 2014",
        },
        {
          icon: "folder",
          iconClass: "grey lighten-1 white--text",
          title: "Recipes",
          subtitle: "Jan 17, 2014",
        },
        {
          icon: "folder",
          iconClass: "grey lighten-1 white--text",
          title: "Work",
          subtitle: "Jan 28, 2014",
        },
        {
          icon: "folder",
          iconClass: "grey lighten-1 white--text",
          title: "Work",
          subtitle: "Jan 28, 2014",
        },
        {
          icon: "folder",
          iconClass: "grey lighten-1 white--text",
          title: "Work",
          subtitle: "Jan 28, 2014",
        },
        {
          icon: "folder",
          iconClass: "grey lighten-1 white--text",
          title: "Work",
          subtitle: "Jan 28, 2014",
        },
        {
          icon: "folder",
          iconClass: "grey lighten-1 white--text",
          title: "Work",
          subtitle: "Jan 28, 2014",
        },
        {
          icon: "folder",
          iconClass: "grey lighten-1 white--text",
          title: "Work",
          subtitle: "Jan 28, 2014",
        },
        {
          icon: "folder",
          iconClass: "grey lighten-1 white--text",
          title: "Work",
          subtitle: "Jan 28, 2014",
        },
        {
          icon: "folder",
          iconClass: "grey lighten-1 white--text",
          title: "Work",
          subtitle: "Jan 28, 2014",
        },
      ],
      TESTitems2: [
        {
          icon: "assignment",
          iconClass: "blue white--text",
          title: "Vacation itinerary",
          subtitle: "Jan 20, 2014",
        },
        {
          icon: "call_to_action",
          iconClass: "amber white--text",
          title: "Kitchen remodel",
          subtitle: "Jan 10, 2014",
        },
      ],
    };
  },
};
</script>
<style scoped>
.resizable-content {
  height: 100%;
  background-color: #303030;
  overflow: auto;
}
</style>

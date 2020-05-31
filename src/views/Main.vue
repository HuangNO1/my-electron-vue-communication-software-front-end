<template>
  <div style="background-color: #212121; height: 100%; padding-bottom: 2rem;">
    <!-- 最左側的欄位 -->
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

        <v-list-item v-for="(item, i) in chatItems" :key="i" link>
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
    <!-- 隱藏的個人欄 -->
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
        <v-list-item v-for="(item, i) in settingItems" :key="i" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-content style="height: 100%">
      <v-row style="padding: 0; margin: 0; height: 100%">
        <v-col
          xs="auto"
          sm="auto"
          md="auto"
          lg="auto"
          xl="auto"
          style="padding: 0; margin: 0; "
        >
          <div style="height: 100%">
            <vue-resizable
              :minWidth="200"
              :maxWidth="800"
              :active="['r']"
              style="overflow-y: auto; overflow-x: hidden;"
            >
              <!-- 聊天欄 -->
              <v-list
                class="resizable-content"
                height="100%"
                two-line
                subheader
                dark
              >
                <v-subheader inset>Channels</v-subheader>

                <v-list-item>
                  <v-text-field
                    v-model="searchChannelKeyword"
                    label="Solo"
                    placeholder="Search Channel"
                    solo
                  ></v-text-field>
                </v-list-item>
                <v-list-item-group
                  v-model="selectItem"
                  mandatory
                  color="primary"
                >
                  <v-list-item
                    v-for="(item, i) in showChannels"
                    :key="i"
                    @click=""
                    dark
                  >
                    <v-list-item-avatar>
                      <v-img
                        src="https://avatars1.githubusercontent.com/u/11587044?s=460&v=4"
                      ></v-img>
                    </v-list-item-avatar>

                    <v-list-item-content>
                      <v-list-item-title
                        v-text="item.channelName"
                      ></v-list-item-title>
                      <v-list-item-subtitle
                        v-text="item.channelType"
                      ></v-list-item-subtitle>
                    </v-list-item-content>

                    <!--<v-list-item-action>
                      <v-btn icon>
                        <v-icon color="grey lighten-1">mdi-information</v-icon>
                      </v-btn>
                    </v-list-item-action>-->
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </vue-resizable>
          </div>
        </v-col>
        <v-col style="padding: 0; margin: 0;height: 100%; width: 100%;">
          <Chat></Chat>
        </v-col>
      </v-row>

      <!--<v-container id="cnt" fluid> </v-container>-->
    </v-content>
    <v-footer id="footer" dark fixed app padless>
      <v-textarea
        name=""
        label="Enter"
        value=""
        dense
        hide-details
        rows="1"
        solo
        row-height="15"
        auto-grow
        dark
        autofocus
        placeholder="Input some messages..."
      ></v-textarea>
    </v-footer>
  </div>
</template>
<script>
import Vue from "vue";
import VueResizable from "vue-resizable";
import Chat from "../components/Chat";
// 引入 VueX
import { mapState, mapMutations } from "vuex";
import {
  UPDATE_ALL_CHANNELS,
  CREATE_A_Channel,
  DELETE_A_CHANNEL,
  ADD_A_CHANNEL,
  EXIT_A_CHANNEL,
} from "../store/mutations-types/channel";
import {
  UPDATE_USER_USERNAME,
  UPDATE_USER_EMAIL,
  UPDATE_USER_PHONE,
  UPDATE_ALL_USER_DATA,
} from "../store/mutations-types/user";
import { ADD_TO_FRIEND, DELETE_FRIEND } from "../store/mutations-types/friend";
import {
  UPDATE_ALL_MESSAGE,
  ADD_A_MESSAGE,
} from "../store/mutations-types/message";
// 引入 axios
import axios from "axios";

export default {
  components: {
    Chat,
    VueResizable,
  },
  created() {
    this.getAllChannels();
  },
  data() {
    return {
      selectItem: 0,
      chatItems: [
        { title: "Chat", icon: "mdi-forum" },
        { title: "Personal", icon: "mdi-account" },
        { title: "Group", icon: "mdi-account-group" },
      ],
      drawer: null,
      settingItems: [
        { title: "Chat", icon: "mdi-forum" },
        { title: "New Group", icon: "mdi-account-multiple" },
        { title: "Logout", icon: "mdi-logout-variant" },
      ],
      channelItems: [],
      showChannels: [],
      searchChannelKeyword: "",
      // request url -------------------------------
      // 返回使用者所有加入的 Channel
      requestGetAllChannelsURL:
        "http://localhost:5000/user/channels/getAllChannels",
      // 返回某一 Channel 所有的 Message
      requestGetChannelAllMessagesURL:
        "http://localhost:5000/user/channels/getAllMessages",
      // 模糊搜索 所有 channelType 是 group 的群
      requestSearchChannelsURL:
        "http://localhost:5000/user/channels/searchChannels",
      // 模糊搜索使用者
      requestSearchUsersURL: "http://localhost:5000/user/searchUsers",
    };
  },
  methods: {
    // 異步請求
    async getAllChannels() {
      // 初始化
      this.showChannels = [];
      let jwt_token = Vue.localStorage.get("jwt_token");
      let UserID = Vue.localStorage.get("user_id");
      let data = new FormData();
      data.append("id", UserID);
      axios
        .post(this.requestGetAllChannelsURL, data, {
          headers: {
            "Content-Type": "form-data",
            Authorization: `Bearer ${jwt_token}`,
          },
          transformRequest: [(headers) => data], //預設值，不做任何轉換
        })
        .then((response) => {
          console.log(response.data);
          if (response.data.data === undefined) {
            // token 失效
            // 移除 token 和 id
            Vue.localStorage.remove("jwt_token");
            Vue.localStorage.remove("user_id");
            // 重新登入
            document.location.href = "/sign";
          } else if (response.data.data) {
            // 有找到數據
            this.showChannels = response.data.searchResult;
            // 推入 VueX
            this.$store.commit(UPDATE_ALL_CHANNELS, response.data.searchResult);
            console.log(this.showChannels);
            console.log(response.data.searchResult);
            // 請求 channel 的 message 並存入 VueX
            for(let i = 0; i < this.showChannels.length; i++) {
              this.getAllMessage(this.shoeChannels[i].id);
            }
          } else {
            // 沒找到數據
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async getAllMessage(channelID) {
      // 得到所有的 Message
      
      let jwt_token = Vue.localStorage.get("jwt_token");
      let data = new FormData();
      data.append("id", channelID);
      axios
        .post(this.requestGetChannelAllMessagesURL, data, {
          headers: {
            "Content-Type": "form-data",
            Authorization: `Bearer ${jwt_token}`,
          },
          transformRequest: [(headers) => data], //預設值，不做任何轉換
        })
        .then((response) => {
          console.log(response.data);
          if (response.data.data === undefined) {
            // token 失效
            // 移除 token 和 id
            Vue.localStorage.remove("jwt_token");
            Vue.localStorage.remove("user_id");
            // 重新登入
            document.location.href = "/sign";
          } else if (response.data.data) {
            // 有找到數據
            // 推入 VueX
            this.$store.commit(UPDATE_ALL_MESSAGE, response.data.searchResult);
            console.log(response.data.searchResult);
            console.log(this.allMessages);
          } else {
            // 沒找到數據
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  },
  watch: {
    searchChannelKeyword: function() {
      // 搜索 channel
      // 初始化
      this.showChannels = [];
      if (this.searchChannelKeyword === "") {
        // 沒有關鍵字
        this.showChannels = this.allChannels;
      } else {
        // 有關建字
        let jwt_token = Vue.localStorage.get("jwt_token");
        let data = new FormData();
        data.append("keyword", this.searchChannelKeyword);
        axios
          .post(this.requestSearchChannelsURL, data, {
            headers: {
              "Content-Type": "form-data",
              Authorization: `Bearer ${jwt_token}`,
            },
            transformRequest: [(headers) => data], //預設值，不做任何轉換
          })
          .then((response) => {
            console.log(response.data);
            if (response.data.data === undefined) {
              // token 失效
              // 移除 token 和 id
              Vue.localStorage.remove("jwt_token");
              Vue.localStorage.remove("user_id");
              // 重新登入
              document.location.href = "/sign";
            } else if (response.data.data) {
              // 有找到數據
              this.showChannels = response.data.searchResult;
              console.log(this.showChannels);
              console.log(response.data.searchResult);
            } else {
              // 沒找到數據
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
  },
  computed: {
    // get data from vuex
    ...mapState({
      allChannels: (state) => {
        return state.channel.channels;
      },
      allMessages: (state) => {
        return state.message.messages;
      }
    }),
  },
};
</script>
<style>
::-webkit-scrollbar {
  width: 8px;
  background: #212121;
}
::-webkit-scrollbar-track {
  -webkit-border-radius: 10px;
  border-radius: 10px;
  margin: 5px 0 5px 0;
}
::-webkit-scrollbar-thumb {
  -webkit-border-radius: 4px;
  border-radius: 4px;
  background: #212121;
}
</style>
<style scoped>
.resizable-content {
  height: 100%;
  background-color: #252525;
}

#footer {
  padding: 1rem 1rem 1rem 25rem;
  background-color: rbga(0, 0, 0, 0);
}
</style>

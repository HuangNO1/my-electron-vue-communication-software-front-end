<template>
  <v-container fluid>
    <div style="width: 100%">
      <div id="messageBox" class="white--text">
        <div v-for="(item, i) in messages" :key="i">
          <div v-if="item.fromId === '222'">
            <v-avatar size="24" color="red">
              <img
                :src="item.fromAvatar"
                alt="alt"
              />
            </v-avatar>
            <v-chip class="ma-2" color="primary" dark label>
              {{item.msg}}
            </v-chip>
          </div>
          <div v-if="item.fromId === '333'">
            <v-avatar size="24" color="pink">
              <img
                :src="item.fromAvatar"
                alt="alt"
              />
            </v-avatar>
            <v-chip class="ma-2" color="pink" dark label>
              {{item.msg}}
            </v-chip>
          </div>
        </div>
      </div>
    </div>
  </v-container>
</template>
<script>
export default {
  name: "Chat",
  data() {
    return {
      messages: [
        {
          userId: "",
          fromId: "333",
          toId: "222",
          ip: "",
          type: "",
          msg: "Hello",
          fromAvatar: "https://randomuser.me/api/portraits/men/78.jpg",
          fromName: "333",
          action: "send",
        },
        {
          userId: "",
          fromId: "333",
          toId: "222",
          ip: "",
          type: "",
          msg: "路遙X俊俊",
          fromAvatar: "https://randomuser.me/api/portraits/men/78.jpg",
          fromName: "333",
          action: "send",
        },
        {
          userId: "",
          fromId: "222",
          toId: "333",
          ip: "",
          type: "",
          msg: "好爽喔",
          fromAvatar: "https://avatars1.githubusercontent.com/u/48636976?s=460&u=6fc910ffe23ff8ff7ffc210d49ca81fdec486f9f&v=4",
          fromName: "222",
          action: "send",
        },
        {
          userId: "",
          fromId: "222",
          toId: "333",
          ip: "",
          type: "",
          msg: "多少錢",
          fromAvatar: "https://avatars1.githubusercontent.com/u/48636976?s=460&u=6fc910ffe23ff8ff7ffc210d49ca81fdec486f9f&v=4",
          fromName: "222",
          action: "send",
        },
        {
          userId: "",
          fromId: "333",
          toId: "222",
          ip: "",
          type: "",
          msg: "是俊俊的話是免費的喔",
          fromAvatar: "https://randomuser.me/api/portraits/men/78.jpg",
          fromName: "333",
          action: "send",
        },
        {
          userId: "",
          fromId: "222",
          toId: "333",
          ip: "",
          type: "",
          msg: "俊俊真幸福",
          fromAvatar: "https://avatars1.githubusercontent.com/u/48636976?s=460&u=6fc910ffe23ff8ff7ffc210d49ca81fdec486f9f&v=4",
          fromName: "222",
          action: "send",
        },
        {
          userId: "",
          fromId: "333",
          toId: "222",
          ip: "",
          type: "",
          msg: "俊俊真幸福",
          fromAvatar: "https://randomuser.me/api/portraits/men/78.jpg",
          fromName: "333",
          action: "send",
        },
      ],
    };
  },
};
</script>
<style>
#messageBox {
  overflow-y: auto;
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  padding: 1rem;
}
</style>

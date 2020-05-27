<template>
  <v-container fluid>
    <div
      style="width: 100%"
    >
      <div id="messageBox" class="white--text">
        <div v-for="i in 100" :key="i">hhhhhh <br /></div>
        <div>
          endgggggggggggggggg
        </div>
        <div>
          end
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

      };
  }
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

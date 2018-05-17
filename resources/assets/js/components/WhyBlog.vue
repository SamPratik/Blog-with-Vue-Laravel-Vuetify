<template>
  <div id="">
    <v-layout row wrap class="red lighten-5">
      <v-flex xs4>
        <v-container>
          <div class="red" style="height:50px;width:50px;border-radius:50%;">
            <v-icon color="white" x-large>forum</v-icon>
          </div>
          <p>Forum</p>
        </v-container>
      </v-flex>
      <v-flex xs4 class="text-xs-center">
        <v-icon>contact_support</v-icon>
        <p>Support</p>
      </v-flex>
      <v-flex xs4 class="text-xs-center">
        <v-icon>chat</v-icon>
        <p>Livechat</p>
      </v-flex>
    </v-layout>
  </div>
</template>
<script>
export default {
  name: "",
  data: () => ({

  })
}
</script>
<style lang="scss" scoped>
</style>

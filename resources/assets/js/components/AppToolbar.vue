<template>
  <v-toolbar dark class="red">
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-toolbar-title>Title</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat to="/home">HOME</v-btn>
      <v-btn flat to="/contact-us">CONTACT US</v-btn>
      <v-btn flat>SIGN UP</v-btn>
      <v-btn flat>LOGIN</v-btn>
    </v-toolbar-items>
  </v-toolbar>
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

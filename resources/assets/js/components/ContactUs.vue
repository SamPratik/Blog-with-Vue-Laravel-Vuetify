<template>
  <div class="">
    <v-flex xs12 mt-5>
      <h1 class="text-xs-center">CONTACT US</h1>
    </v-flex><br>
    <v-flex xs8 offset-xs2 offset-md3 md6>
      <v-form v-model="valid">
        <v-text-field
          v-model="name"
          :rules="nameRules"
          :counter="10"
          label="Name"
          required
        ></v-text-field>
        <v-text-field
          v-model="email"
          :rules="emailRules"
          label="E-mail"
          required
        ></v-text-field>
        <v-text-field
          v-model="subject"
          :rules="subjectRules"
          :counter="100"
          label="Subject"
          required
        ></v-text-field>
        <v-text-field
          v-model="message"
          label="Your Message"
          :rules="messageRules"
          required
          textarea
        ></v-text-field>
      </v-form>
    </v-flex>
  </div>
</template>

<script>
  export default {
    data: () => ({
      valid: false,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 10 || 'Name must be less than 10 characters'
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
      ],
      subject: '',
      subjectRules: [
        v => !!v || 'Subject field is required',
        v => v.length <= 100 || 'Subject length cannot cross 100 characters'
      ],
      message: '',
      messageRules: [
        v => !!v || 'Message is required',
      ]
    })
  }
</script>
<style lang="scss" scoped>
</style>

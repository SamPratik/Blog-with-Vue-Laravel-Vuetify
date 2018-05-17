<template>
  <v-layout row wrap mb-5 class="red lighten-5">
    <v-flex xs12 mt-5 mb-2>
      <h1 class="text-xs-center">SIGN UP</h1>
    </v-flex>
    <v-flex offset-xs3 xs6>
      <v-form v-model="valid">
        <v-text-field
          v-model="name"
          :rules="nameRules"
          :counter="10"
          label="Name"
          required
        ></v-text-field>
        <v-text-field
          v-model="username"
          :rules="usernameRules"
          :counter="15"
          label="Username"
          required
        ></v-text-field>
        <v-text-field
          v-model="email"
          :rules="emailRules"
          label="E-mail"
          required
        ></v-text-field>
        <v-select
          :items="states"
          v-model="a1"
          label="Select Country"
          autocomplete
          required
        ></v-select>
        <v-text-field
          :append-icon="e1 ? 'visibility' : 'visibility_off'"
          :append-icon-cb="() => (e1 = !e1)"
          :type="e1 ? 'password' : 'text'"
          label="Enter your password"
          hint="At least 8 characters"
          min="8"
          v-model="password"
          required
        ></v-text-field>
        <v-text-field
          :append-icon="e2 ? 'visibility' : 'visibility_off'"
          :append-icon-cb="() => (e2 = !e2)"
          :type="e2 ? 'password' : 'text'"
          label="Enter your password again"
          hint="At least 8 characters"
          min="8"
          v-model="confirmPassword"
          required
        ></v-text-field>
      </v-form>
    </v-flex>
    <v-flex xs12 class="text-xs-center">
      <v-btn color="error">REGISTER</v-btn>
    </v-flex>
  </v-layout>
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
      a1: null,
      states: [
        'Alabama', 'Alaska', 'American Samoa', 'Arizona',
        'Arkansas', 'California', 'Colorado', 'Connecticut',
        'Delaware', 'District of Columbia', 'Federated States of Micronesia',
        'Florida', 'Georgia', 'Guam', 'Hawaii', 'Idaho',
        'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
        'Louisiana', 'Maine', 'Marshall Islands', 'Maryland',
        'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
        'Missouri', 'Montana', 'Nebraska', 'Nevada',
        'New Hampshire', 'New Jersey', 'New Mexico', 'New York',
        'North Carolina', 'North Dakota', 'Northern Mariana Islands', 'Ohio',
        'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico',
        'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee',
        'Texas', 'Utah', 'Vermont', 'Virgin Island', 'Virginia',
        'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
      ],
      e1: true,
      password: null,
      e2: true,
      confirmPassword: null
    })
  }
</script>

<style scoped media="screen">

</style>

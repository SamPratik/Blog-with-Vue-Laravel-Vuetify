<template>
  <v-layout row wrap pb-5 class="red lighten-5">
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
        <p v-if="usernameErrorStatus" class="red--text" style="margin:0px;padding:0px;">{{usernameErrorMessage}}</p>
        <v-text-field
          v-model="email"
          :rules="emailRules"
          label="E-mail"
          required
        ></v-text-field>
        <v-select
          :items="countries"
          v-model="a1"
          label="Select Country"
          :rules="countryRules"
          autocomplete
          required
        ></v-select>
        <v-text-field
          :append-icon="e1 ? 'visibility' : 'visibility_off'"
          :append-icon-cb="() => (e1 = !e1)"
          :type="e1 ? 'password' : 'text'"
          :rules="passwordRules"
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
          :rules="[
            v => v.length > 0 || 'Type your password again!',
            comparePasswords || 'Passwords do not match!',
            v => v.length >= 8 || 'Password must contain atleast 8 characters',
          ]"
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
      // usernameExists: false,
      // usernameWhiteSpace: false,
      usernames: [],
      usernameErrorMessage: '',
      usernameErrorStatus: false,
      valid: false,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        // v => v.length <= 10 || 'Name must be less than 10 characters'
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
      ],
      username: '',
      usernameRules: [
        v => !!v || 'Username is required',
        v => v.length <= 15 ||  'Username must be less than 16 characters'
      ],
      a1: null,
      countries: [
        "Afghanistan", "Åland Islands", "Albania", "Algeria", "American Samoa", "Andorra", "Angola", "Anguilla", "Antarctica", "Antigua And Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia, Plurinational State Of", "Bonaire, Sint Eustatius And Saba", "Bosnia And Herzegovina", "Botswana", "Bouvet Island", "Brazil", "British Indian Ocean Territory", "Brunei Darussalam", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Central African Republic", "Chad", "Chile", "China", "Christmas Island", "Cocos (keeling) Islands", "Colombia", "Comoros", "Congo", "Congo, The Democratic Republic Of The", "Cook Islands", "Costa Rica", "Côte D'ivoire", "Croatia", "Cuba", "Curaçao", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Falkland Islands (malvinas)", "Faroe Islands", "Fiji", "Finland", "France", "French Guiana", "French Polynesia", "French Southern Territories", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea-bissau", "Guyana", "Haiti", "Heard Island And Mcdonald Islands", "Holy See (vatican City State)", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran, Islamic Republic Of", "Iraq", "Ireland", "Isle Of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea, Democratic People's Republic Of", "Korea, Republic Of", "Kuwait", "Kyrgyzstan", "Lao People's Democratic Republic", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macao", "Macedonia, The Former Yugoslav Republic Of", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico", "Micronesia, Federated States Of", "Moldova, Republic Of", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Niue", "Norfolk Island", "Northern Mariana Islands", "Norway", "Oman", "Pakistan", "Palau", "Palestine, State Of", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Pitcairn", "Poland", "Portugal", "Puerto Rico", "Qatar", "Réunion", "Romania", "Russian Federation", "Rwanda", "Saint Barthélemy", "Saint Helena, Ascension And Tristan Da Cunha", "Saint Kitts And Nevis", "Saint Lucia", "Saint Martin (french Part)", "Saint Pierre And Miquelon", "Saint Vincent And The Grenadines", "Samoa", "San Marino", "Sao Tome And Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Sint Maarten (dutch Part)", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Georgia And The South Sandwich Islands", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Svalbard And Jan Mayen", "Swaziland", "Sweden", "Switzerland", "Syrian Arab Republic", "Taiwan, Province Of China", "Tajikistan", "Tanzania, United Republic Of", "Thailand", "Timor-leste", "Togo", "Tokelau", "Tonga", "Trinidad And Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks And Caicos Islands", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "United States Minor Outlying Islands", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela, Bolivarian Republic Of", "Viet Nam", "Virgin Islands, British", "Virgin Islands, U.s.", "Wallis And Futuna", "Western Sahara", "Yemen", "Zambia", "Zimbabwe"
      ],
      countryRules: [
        v => !!v || 'Country is required'
      ],
      e1: true,
      password: '',
      passwordRules: [
        v => !!v || 'Password is required',
        v => v.length >= 8 || 'Password must have 8 characters'
      ],
      e2: true,
      confirmPassword: ''
    }),
    created() {
      //do something after creating vue instance
      this.usernames = ['Pratik', 'Affan', 'Shihab', 'Pranto'];
    },
    watch: {
      username: function() {
        if(this.username.length > 0) {
          // check that any username exists same as that...
          for (let i = 0; i < this.usernames.length; i++) {
            if (this.usernames[i] == this.username) {
              this.usernameErrorStatus = true;
              this.usernameErrorMessage = 'Username already exists!';
              return;
            } else {
              this.usernameErrorStatus = false;
            }
          }
          // check for whitespace in username...
          var containsWhiteSpace = /\s/;
          if(containsWhiteSpace.test(this.username)) {
            this.usernameErrorStatus = true;
            this.usernameErrorMessage = 'Username cannot contain white space!';
            // return;
          } else {

          }

          if(this.username.length > 15) {
            this.usernameErrorStatus = true;
            this.usernameErrorMessage = 'Username can contain maximum 15 characters!';
          }

        }

      }
    },
    computed: {
      comparePasswords: function() {
        return this.password !== this.confirmPassword ? false : true;
      }
    }
  }
</script>

<style scoped media="screen">

</style>

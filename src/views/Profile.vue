<template>
  <v-row justify="center">
    <v-col
      cols="12"
      sm="10"
      md="8"
      lg="6"
    >
      <v-card ref="form">
        <v-card-text>
          Your Username: {{ prev_name }}
          <v-text-field
            ref="name"
            v-model="name"
            :rules="[() => !!name || 'This field is required']"
            :error-messages="errorMessages"
            label="Full Name"
            placeholder="John Doe"
            required
          ></v-text-field>
        </v-card-text>
        <v-divider class="mt-12"></v-divider>
        <v-card-actions>
          <v-btn text>
            Cancel
          </v-btn>
          <v-spacer></v-spacer>
          <v-slide-x-reverse-transition>
            <v-tooltip
              v-if="formHasErrors"
              left
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  icon
                  class="my-0"
                  v-bind="attrs"
                  @click="resetForm"
                  v-on="on"
                >
                  <v-icon>mdi-refresh</v-icon>
                </v-btn>
              </template>
              <span>Refresh form</span>
            </v-tooltip>
          </v-slide-x-reverse-transition>
          <v-btn
            color="primary"
            text
            @click="submit"
          >
            Submit
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { Auth } from 'aws-amplify';
export default {
  name: 'Profile',
  data: () => ({
    errorMessages: '',
    name: null,
    formHasErrors: false,
    prev_name: ''
  }),
  
  computed: {
    form () {
      return {
        name: this.name
      };
    }
  },
  
  watch: {
    name () {
      this.errorMessages = '';
    }
  },
  
  methods: {
    resetForm () {
      this.errorMessages = [];
      this.formHasErrors = false;
      
      Object.keys(this.form).forEach(f => {
        this.$refs[f].reset();
      });
    },
    async submit () {
      this.formHasErrors = false;
      
      Object.keys(this.form).forEach(f => {
        if (!this.form[f]) this.formHasErrors = true;
        
        this.$refs[f].validate(true);
      });
      
      let user = await Auth.currentAuthenticatedUser();

      let result = await Auth.updateUserAttributes(user, {
        'name': this.name
      });
      if (result === 'SUCCESS') {
        console.log(result);
        user = await Auth.currentAuthenticatedUser();
        this.prev_name = user.attributes.name;
      }
    }
  },
  
  created: async function() {
    let user = await Auth.currentAuthenticatedUser();
    this.prev_name = user.attributes.name;
    console.log(user.attributes.name);
  }
};
</script>
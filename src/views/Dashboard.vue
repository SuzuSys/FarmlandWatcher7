<template>
  <div class="mx-auto">
    <v-btn
      elevation="2"
      @click="goProfile"
    >
      Profile
    </v-btn>
    <v-btn
      elevation="2"
      @click="putAuth"
    >
      Auth
    </v-btn>
    <v-btn
      elevation="2"
      @click="StorageTest"
    >
      Storage Test
    </v-btn>
    <v-btn
      elevation="2"
      @click="DynamoDBQuery"
    >
      DynamoDB Query
    </v-btn>
    <v-btn
      elevation="2"
      @click="DynamoDBCreate"
    >
      DynamoDB Create
    </v-btn>
    <amplify-greetings></amplify-greetings>
  </div>
</template>

<script>
import { API, Storage, graphqlOperation } from 'aws-amplify';
import { listIotNames } from '@/graphql/queries';
import { createIotName } from '@/graphql/mutations';

export default {
  name: 'Dashboard',
  methods: {
    goProfile() {
      this.$router.push({ path: '/profile' });
    },
    putAuth() {
      console.log(this.$store.state.user);
    },
    async StorageTest() {
      const result = await Storage.list('', {
        level: 'private'
      });
      console.log(result);
    },
    async DynamoDBQuery() {
      const result = await API.graphql(graphqlOperation(listIotNames));
      console.log(result);
    },
    async DynamoDBCreate() {
      const result = await API.graphql(graphqlOperation(createIotName, {
        input: {
          name: "My first IoT!"
        }
      }));
      console.log(result);
    },
    async SignOut() {
      
    }
  }
};
</script>
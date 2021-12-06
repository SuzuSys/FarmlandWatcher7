<template>
  <div>
    <v-app-bar app>
      <v-toolbar-title class="pl-0 pl-sm-2">
        FarmlandWatcher
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        @click.stop.prevent="goDashboard"
      >
        Dashboard
      </v-btn>
    </v-app-bar>
    <v-main>
      <router-view></router-view>
    </v-main>
  </div>
</template>

<script>
export default {
  name: 'NonMember',
  methods: {
    goDashboard: function() {
      this.$router.push({ path: '/dashboard' });
    }
  }
};
</script>
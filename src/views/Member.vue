<template>
  <div>
    <v-navigation-drawer
      app
      v-model="drawer"
    >
      <!-- -->
    </v-navigation-drawer>
    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="pl-0 pl-sm-2">
        FarmlandWatcher
      </v-toolbar-title>
    </v-app-bar>
    <v-main>
      <router-view></router-view>
    </v-main>
  </div>
</template>

<script>
export default {
  name: 'Member',
  data: () => ({
    drawer: false
  })
};
</script>
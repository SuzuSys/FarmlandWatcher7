<template>
  <div>
     <v-card
       class="mt-6 mx-auto"
       color="#000000"
       width="230px"
     >
     <v-card-text>
       <img src="../assets/logo.svg" width="200" height="200">
     </v-card-text>
    </v-card>
    <h1 style="text-align:center">FarmlandWatcher</h1>
    <v-card
     class="my-15 mx-auto"
     color="#ffffff"
     width="1000px"
    >
    <v-card-text>
      <h2>はじめに</h2>
      この製品は気温、湿度、土壌水分量等をセンサーで視覚化することを目的とした農業管理システムです。
    </v-card-text>
    </v-card>  
  </div>
</template>

<script>
export default {
  name: 'Top'
};
</script>
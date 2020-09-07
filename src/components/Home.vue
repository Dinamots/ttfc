<template>
  <div class="main">
    <Heart :percentage="percentage" :start="0"/>
    <b-form-input v-model="text" placeholder="Entrez votre prénom"></b-form-input>
  </div>
</template>

<script lang="ts">


import Heart from "@/components/Heart.vue";

export default {
  name: 'home',
  components: {Heart},
  data: function () {
    return {
      percentage: 0
    }
  },
  created() {
  }
};
</script>

<style>
.main {
  width: fit-content;
  margin: auto;
}

body {
  background-color: #ebc9fd;
}
</style>

<template>
  <div>
    <Heart :percentage="percentage" :start="0"/>
    <button @click="percentage+=8">test</button>
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

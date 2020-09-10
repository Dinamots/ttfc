<template>
  <div class="main">
    <Heart :percentage="percentage" :heartbeat="heartbeat" :circle="circle"/>
    <b-form-input @change="startConfetti()" placeholder="Entrez votre prénom"></b-form-input>
  </div>


</template>

<script lang="ts">


import Heart from "@/components/Heart.vue";

export default {
  name: 'home',
  components: {Heart},
  methods: {
    startConfetti() {
      //@ts-ignore
      this.$confetti.start()
      this.love()
      this.circle = true
      this.heartbeat = false
      this.percentage = Math.floor(Math.random() * 100)
      console.log(this.circle)
    },
    stopConfetti() {
      //@ts-ignore
      this.$confetti.stop()
    },

    love() {
      //@ts-ignore
      this.$confetti.update({
        particles: [
          {
            type: 'heart',
          }
        ],
        defaultColors: [
          'red'
        ],
        defaultSize: 15,
        defaultDropRate: 5,
        particlesPerFrame: 0.2
      });
    }
  },
  data: function () {
    return {
      percentage: 0,
      heartbeat: true,
      circle: false
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

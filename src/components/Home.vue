<template>
  <div class="main">
    <Heart :percentage="percentage" :heartbeat="heartbeat" :circle="circle"/>
    <b-form-input v-if="!circle" v-model="name" @change="startConfetti()" placeholder="Entrez votre prénom"></b-form-input>
    <span v-if="circle"> {{name}} vous êtes à {{percentage}}% Rieglerette ! </span>

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
      //@ts-ignore
      this.circle = true
      //@ts-ignore
      this.heartbeat = false
      //@ts-ignore
      this.percentage = Math.floor(Math.random() * 100)
      //@ts-ignore
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
      circle: false,
      name: ""
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

div input {
  margin-top: 15px;
}

div span {
  font-size: larger;
  font-family: "Segoe UI Semibold",serif;
}
</style>

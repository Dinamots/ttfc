<template>
  <div ref="main">
    <svg ref="main-svg" viewBox="0 -28 512.001 512" width="100%" height="100%">
      <svg v-if="circle" ref="percentage-circle" class="grow" x="35">
        <circle class="grow" cx="150" cy="150" r="130" style="stroke: #ffc0cb; stroke-width:18; fill:transparent"/>
        <path class="grow"
              style="stroke: #f541ba; stroke-dasharray:820; stroke-dashoffset:820; stroke-width:18; fill:transparent"
              d="M150,150 m0,-130 a 130,130 0 0,1 0,260 a 130,130 0 0,1 0,-260">
          <animate ref="animateCircle" attributeName="stroke-dashoffset" dur="1s" :to="820-((percentage*820)/100)" fill="freeze"/>
        </path>
      </svg>
      <animateTransform
          attributeName="transform"
          type="scale"
          dur="1s"
          values="1; 1.1; 1.2; 1.3; 1.3; 1;"
          repeatCount="indefinite">
      </animateTransform>
      <svg class="heart-empty" x="80" y="80" width="70%" height="70%" viewBox="0 -28 512.001 512"
           xmlns="http://www.w3.org/2000/svg">


        <path
            d="m256 455.515625c-7.289062 0-14.316406-2.640625-19.792969-7.4375-20.683593-18.085937-40.625-35.082031-58.21875-50.074219l-.089843-.078125c-51.582032-43.957031-96.125-81.917969-127.117188-119.3125-34.644531-41.804687-50.78125-81.441406-50.78125-124.742187 0-42.070313 14.425781-80.882813 40.617188-109.292969 26.503906-28.746094 62.871093-44.578125 102.414062-44.578125 29.554688 0 56.621094 9.34375 80.445312 27.769531 12.023438 9.300781 22.921876 20.683594 32.523438 33.960938 9.605469-13.277344 20.5-24.660157 32.527344-33.960938 23.824218-18.425781 50.890625-27.769531 80.445312-27.769531 39.539063 0 75.910156 15.832031 102.414063 44.578125 26.191406 28.410156 40.613281 67.222656 40.613281 109.292969 0 43.300781-16.132812 82.9375-50.777344 124.738281-30.992187 37.398437-75.53125 75.355469-127.105468 119.308594-17.625 15.015625-37.597657 32.039062-58.328126 50.167969-5.472656 4.789062-12.503906 7.429687-19.789062 7.429687zm-112.96875-425.523437c-31.066406 0-59.605469 12.398437-80.367188 34.914062-21.070312 22.855469-32.675781 54.449219-32.675781 88.964844 0 36.417968 13.535157 68.988281 43.882813 105.605468 29.332031 35.394532 72.960937 72.574219 123.476562 115.625l.09375.078126c17.660156 15.050781 37.679688 32.113281 58.515625 50.332031 20.960938-18.253907 41.011719-35.34375 58.707031-50.417969 50.511719-43.050781 94.136719-80.222656 123.46875-115.617188 30.34375-36.617187 43.878907-69.1875 43.878907-105.605468 0-34.515625-11.605469-66.109375-32.675781-88.964844-20.757813-22.515625-49.300782-34.914062-80.363282-34.914062-22.757812 0-43.652344 7.234374-62.101562 21.5-16.441406 12.71875-27.894532 28.796874-34.609375 40.046874-3.453125 5.785157-9.53125 9.238282-16.261719 9.238282s-12.808594-3.453125-16.261719-9.238282c-6.710937-11.25-18.164062-27.328124-34.609375-40.046874-18.449218-14.265626-39.34375-21.5-62.097656-21.5zm0 0"/>
        <g class="group">
          <svg fill="url(#grad1)" class="heart-filled" viewBox="-20 -13 550 560" xmlns="http://www.w3.org/2000/svg">
            <path
                d="m471.382812 44.578125c-26.503906-28.746094-62.871093-44.578125-102.410156-44.578125-29.554687 0-56.621094 9.34375-80.449218 27.769531-12.023438 9.300781-22.917969 20.679688-32.523438 33.960938-9.601562-13.277344-20.5-24.660157-32.527344-33.960938-23.824218-18.425781-50.890625-27.769531-80.445312-27.769531-39.539063 0-75.910156 15.832031-102.414063 44.578125-26.1875 28.410156-40.613281 67.222656-40.613281 109.292969 0 43.300781 16.136719 82.9375 50.78125 124.742187 30.992188 37.394531 75.535156 75.355469 127.117188 119.3125 17.613281 15.011719 37.578124 32.027344 58.308593 50.152344 5.476563 4.796875 12.503907 7.4375 19.792969 7.4375 7.285156 0 14.316406-2.640625 19.785156-7.429687 20.730469-18.128907 40.707032-35.152344 58.328125-50.171876 51.574219-43.949218 96.117188-81.90625 127.109375-119.304687 34.644532-41.800781 50.777344-81.4375 50.777344-124.742187 0-42.066407-14.425781-80.878907-40.617188-109.289063zm0 0"/>
            <text v-if="!circle" class="heart-text" id="shadow-text" x="45%" y="40%" dominant-baseline="middle" text-anchor="middle">
              TROUVE TON FAN-CLUB !
            </text>
            <text v-if="!circle" class="heart-text" x="45%" y="40%" dominant-baseline="middle" text-anchor="middle">TROUVE TON FAN-CLUB
              !
            </text>
            <text v-if="circle" class="heart-text" x="45%" y="40%" dominant-baseline="middle" text-anchor="middle"> {{percentage}}%
            </text>
          </svg>

          <defs>
            <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="2 2" result="shadow"/>
              <feOffset dx="6" dy="6"/>
            </filter>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style="stop-color:rgb(246,123,211);stop-opacity:1"/>
              <stop offset="33%" style="stop-color:rgb(248,100,208);stop-opacity:1"/>
              <stop offset="66%" style="stop-color:rgb(246,83,194);stop-opacity:1"/>
              <stop offset="100%" style="stop-color:rgb(245,65,186);stop-opacity:1"/>
            </linearGradient>
          </defs>
        </g>
      </svg>
    </svg>

  </div>
</template>

<script>
export default {
  name: 'heart',
  methods: {
    updateHeartBeat() {
      if (this.heartbeat) {
        this.$refs['main-svg'].unpauseAnimations()
      } else {
        this.$refs['main-svg'].pauseAnimations()

      }
    }
  },
  props: {
    percentage: Number,
    start: Number,
    heartbeat: Boolean,
    circle: Boolean
  },
  watch: {
    heartbeat: function (old,newVal) {
      console.log("watch")
      if (newVal) {
        this.$refs['main-svg'].unpauseAnimations()
      } else {
        this.$refs['main-svg'].pauseAnimations()

      }
    },
    // eslint-disable-next-line no-unused-vars
    percentage: function (old,newVal) {
      // this.$refs['animateCircle'].setAttribute('to',String((820 * newVal) / 100))
    }
  },
  updated() {
    this.updateHeartBeat()
  },
  mounted() {
    this.updateHeartBeat()
  }
}
</script>

<style>
.heart-empty {
  fill: white;
}

.group {
  fill: red;
  -webkit-transform-origin-x: center;
  -webkit-transform-origin-y: center;
}

.heart-text {
  fill: pink;
  font-size: 2.3rem;
}

#shadow-text {
  filter: url(#shadow);
  fill: black;
}

.grow {
  transform: scale(1.5);
  -ms-transform: scale(1.5);
  -webkit-transform: scale(1.5);
}
</style>

<template>
  <div v-if="loading.loading" class="loading"></div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['loading'])
  }
}
</script>

<style scoped>
.loading {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: solid var(--color-primary) 3px;
}
.loading::after {
  content: '';
  position: absolute;
  transform-origin: right center;
  transform: translate(0%, 0%) rotate(0deg);
  top: 50%;
  right: 50%;
  width: 15px;
  height: 15px;
  background-color: white;
  clip-path: polygon(0 0, 100% 50%, 0 100%);
  animation-name: loadingAnimation;
  animation-duration: 500ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  mix-blend-mode: screen;
}

@keyframes loadingAnimation {
  0% {
    transform: translate(0, -50%) rotate(0deg);
  }
  100% {
    transform: translate(0, -50%) rotate(360deg);
  }
}
</style>

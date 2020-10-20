<template>
  <div id="app">
    <h1 class="site-title">Hur långa skidor ska du ha?</h1>
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  /**Clearing localstorage when closing the app  */
  beforeDestroy() {
    localStorage.clear()
  }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');
:root {
  --color-primary: #154061;
  --color-secondary: #36bdbb;
  --color-disabled: grey;
  --gradient-color-1: #154061;
  --gradient-color-2: #36bdbb;
  --bg-gradient: linear-gradient(
    180deg,
    var(--color-primary) 0%,
    var(--color-secondary) 100%
  );
}

html,
body {
  margin: 0 auto;
  font-family: 'Poppins', sans-serif;
  background: var(--bg-gradient);
}
#app {
  display: flex;
  justify-content: center;
  padding-top: 100px;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  min-height: 100vh;
  box-sizing: border-box;
}

input {
  font-family: 'Poppins', sans-serif;
  border: none;
  font-size: 10pt;
}

textarea:focus,
input:focus {
  outline: none;
  background-color: rgba(0, 0, 0, 0.02);
}

.site-title {
  position: absolute;
  top: 80px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  color: white;
  opacity: 0.7;
  font-size: 30pt;
  max-width: 100vw;
  font-weight: 800;
  text-align: center;
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease-in-out;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}

@media screen and (max-width: 600px) {
  .site-title {
    font-size: 25pt;
    width: 95%;
    top: 50px;
  }
}

@media screen and (max-width: 375px) {
  .site-title {
    font-size: 20pt;
    width: 95%;
    top: 4vh;
  }
}
</style>

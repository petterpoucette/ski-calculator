<template>
  <div class="info-box">
    <BaseLoadingIcon />
    <slot />
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.info-box {
  position: relative;
  min-height: 100px;
  width: 400px;
  background-color: white;
  border-radius: 15px;
  padding: 30px;
  box-shadow: 2px 5px 10px rgba(0, 0, 0, 0.3);
  box-sizing: border-box;
}

h2 {
  font-size: 13pt;
  font-weight: 600;
}
p {
  font-size: 10pt;
}
.bold {
  font-weight: 600;
}
.buttons {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row-reverse;
  min-width: 100%;
  margin-top: 20px;
}

@media screen and (max-width: 667px) {
  .info-box {
    width: 95vw;
    padding: 25px;
  }
}
</style>

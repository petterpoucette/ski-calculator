<template>
  <form @change="sendInput">
    <div v-for="(val, index) in values" :key="index">
      <input v-model="inputData" type="radio" :id="val" :value="val" />
      <label :for="val">{{ val }}</label>
      <br />
    </div>
  </form>
</template>

<script>
export default {
  props: {
    values: {
      type: Array,
      requred: true
    },
    value: {
      type: String
    }
  },
  data() {
    return {
      inputData: ''
    }
  },
  methods: {
    sendInput() {
      this.$emit('change', this.inputData)
    }
  },
  created() {
    if (this.value !== '') {
      this.inputData = this.value
    }
  }
}
</script>

<style scoped>
form {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

input[type='radio'] {
  opacity: 0;
  position: fixed;
  width: 0;
}

label {
  background: white;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  margin-right: 20px;
  box-sizing: border-box;
  width: fit-content;
  min-width: 150px;
  border: 3px var(--color-secondary) solid;
  border-radius: 7px;
  transition: ease-in-out 250ms all;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.3);
}

label:hover {
  cursor: pointer;
  opacity: 0.8;
}

input[type='radio']:checked + label {
  background: var(--color-secondary);
  color: white;
}
</style>

<template>
  <div>
    <p class="input-title">{{ title }}</p>
    <input
      v-model="inputData"
      @input="sendInput"
      type="number"
      min="0"
      step="1"
      :placeholder="placeholder"
    />
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    placeholder: {
      type: String
    },
    value: {
      type: Number
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
  mounted() {
    if (this.value) {
      this.inputData = this.value
    }
  }
}
</script>

<style scoped>
input {
  width: 100%;
  height: 50px;
  border-width: 3px;
  border-color: var(--color-secondary);
  border-style: solid;
  border-radius: 7px;
  box-sizing: border-box;
  padding-left: 10px;
}
.input-title {
  margin-bottom: 10px;
  font-weight: 600;
}
</style>

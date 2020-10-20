<template>
  <div class="button" @click="click" :class="[type, { disabled: disabled }]">
    {{ title }}
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      requred: true
    },
    title: {
      type: String,
      required: true
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    click() {
      if (!this.disabled) {
        this.$emit('clicked')
      }
    }
  }
}
</script>

<style scoped>
.button {
  min-width: 40%;
  max-width: 45%;
  width: fit-content;
  height: 40px;
  padding-left: 20px;
  padding-right: 20px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  transition: all ease-in-out 100ms;
  cursor: pointer;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.3);
  position: relative;
}

.primary {
  background: var(--color-primary);
  color: white;
}

.secondary {
  background-color: white;
  border: 3px var(--color-primary) solid;
}

.button:hover {
  opacity: 0.9;
}

.button:active {
  transform: scale(0.97);
}

.disabled {
  cursor: not-allowed;
  background-color: var(--color-disabled);
}

.disabled:hover {
  opacity: 1;
}

.disabled:active {
  transform: scale(1);
}
</style>

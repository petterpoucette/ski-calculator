<template>
  <InfoBox>
    <h2>Information om dig</h2>
    <p>
      För att kunna räkna ut vilken längd på skidorna du ska ha så behöver vi
      veta din <span class="bold">ålder</span> och
      <span class="bold">längd</span>.
    </p>
    <BaseNumberInput
      title="Ålder"
      ref="length"
      :value="userInfo.age"
      placeholder="Hur gammal är du?"
      @change="v => setUserInfo(v, 'age')"
    />
    <BaseNumberInput
      title="Längd (cm)"
      ref="age"
      :value="userInfo.length"
      placeholder="Hur lång är du?"
      @change="v => setUserInfo(v, 'length')"
    />
    <div class="buttons">
      <BaseButton
        @clicked="fetchSkiInfo"
        title="Nästa"
        type="primary"
        :disabled="!valid"
      />
    </div>
  </InfoBox>
</template>

<script>
import store from '@/store/index'
import { mapState } from 'vuex'
import InfoBox from '@/components/InfoBox.vue'
export default {
  components: {
    InfoBox
  },
  computed: {
    ...mapState(['ski', 'loading']),
    valid() {
      return this.userInfo.length && this.userInfo.age >= 0
    }
  },
  /**Setting user values if they have been filled out earlier in the process */
  created() {
    if (Object.keys(this.ski.userInfo).length > 0) {
      this.userInfo = this.ski.userInfo
    }
  },
  data() {
    return {
      userInfo: {
        length: null,
        age: null
      }
    }
  },
  methods: {
    /**called on change when the user enters the age and lenght */
    setUserInfo(value, type) {
      this.userInfo[type] = parseInt(value)
    },
    /**triggered when the user have filled out the information and presses
     * next, sets the infomration user information to the state and route to the next step  */
    async fetchSkiInfo() {
      store.dispatch('ski/setUserInfo', this.userInfo)
      this.$router.push({
        name: 'SkiStyle'
      })
    }
  },
  beforeCreate() {
    localStorage.removeItem('style')
  }
}
</script>

<style scoped></style>

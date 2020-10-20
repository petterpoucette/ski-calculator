<template>
  <InfoBox>
    <h2>Din skidlängd</h2>
    <p>
      Utifrån din längd <span v-if="isChild">och ditt val av stil</span> så har
      vi räknar att du ska ha skidor som är:
    </p>
    <div class="ski-length">
      <p>{{ skiLength }}</p>
      <span @click="toggleInfo">?</span>
    </div>
    <div v-show="showInfo" class="info">
      <p>{{ skiInfo.info }}</p>
    </div>
    <div class="buttons">
      <BaseButton @clicked="newPerson" title="Ny person" type="primary" />
      <BaseButton @clicked="back" title="Bakåt" type="secondary" />
    </div>
  </InfoBox>
</template>

<script>
import InfoBox from '@/components/InfoBox.vue'
import { mapState } from 'vuex'
import store from '@/store/index'

export default {
  components: {
    InfoBox
  },
  data() {
    return {
      showInfo: false
    }
  },
  computed: {
    ...mapState(['ski']),
    isChild() {
      return !this.skiInfo.age.max
    },
    skiInfo() {
      return this.ski.skiInfo[0]
    },
    /**Creates a string on how how long the skies should be based on data from the state */
    skiLength() {
      var lengthString = ''
      const min = this.ski.skiLength.min
      const max = this.ski.skiLength.max
      if (min && max) {
        lengthString = min + ' - ' + max
      } else if (min) {
        lengthString = min !== this.skiInfo.skiLimit ? 'över ' : ' '
        lengthString += min
      } else if (max) {
        lengthString = 'under ' + max
      }
      lengthString += ' cm'
      return lengthString
    }
  },
  methods: {
    toggleInfo() {
      this.showInfo = !this.showInfo
    },
    back() {
      this.$router.push({ name: 'SkiStyle' })
    },
    newPerson() {
      this.$router.push({ name: 'UserInfo' })
      store.dispatch('ski/resetState')
    }
  }
}
</script>

<style scoped>
.ski-length {
  border-bottom: solid var(--color-secondary) 2px;
  position: relative;
}

.ski-length > p {
  font-weight: 600;
  font-size: 14pt;
  color: var(--color-secondary);
  text-align: center;
  margin: 0;
}
.ski-length > span {
  position: absolute;
  right: 0;
  top: 0;
  text-align: center;
  color: var(--color-secondary);
  line-height: 22px;
  width: 20px;
  height: 20px;
  border: solid var(--color-secondary) 2px;
  border-radius: 50%;
  font-weight: 600;
  background-color: white;
  transition: ease-in-out 150ms all;
}
.ski-length > span:hover {
  transform: scale(1.05);
  cursor: pointer;
}
</style>

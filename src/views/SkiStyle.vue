<template>
  <InfoBox>
    <h2>Vilken stil har du tänkt åka?</h2>
    <p>
      Vilken längd du ska ha på skidorna beror på vilken stil du har tänkt åka.
    </p>
    <BaseRadioInput
      @change="setStyleName"
      :value="styleName"
      :values="skiStyles"
    />
    <div class="buttons">
      <BaseButton
        @clicked="setSkiInfo"
        title="Nästa"
        type="primary"
        :disabled="!valid"
      />
      <BaseButton @clicked="back" title="Bakåt" type="secondary" />
    </div>
  </InfoBox>
</template>

<script>
import InfoBox from '@/components/InfoBox.vue'
import { mapGetters, mapState } from 'vuex'
import store from '@/store/index'

export default {
  components: {
    InfoBox
  },
  computed: {
    ...mapGetters({ getStyleByName: 'ski/getCategoryByName' }),
    ...mapState(['ski']),
    valid() {
      return this.styleName !== ''
    },
    /** transalte the state data for the radio select*/
    skiStyles() {
      const styleNames = []
      for (var style in this.ski.skiInfo) {
        styleNames.push(this.ski.skiInfo[style].name)
      }
      return styleNames
    }
  },
  data() {
    return {
      styleName: ''
    }
  },
  methods: {
    back() {
      this.$router.push({ name: 'UserInfo' })
    },
    setStyleName(name) {
      this.styleName = name
    },
    /**sets the ski info from the picked element in the radio select */
    setSkiInfo() {
      localStorage.style = this.styleName
      store.dispatch('ski/setSkiInfo', [this.getStyleByName(this.styleName)])
      this.$router.push({ name: 'Result' })
    }
  },
  /**If the user has earler on in the process picked a style, this will set the style as picked again */
  created() {
    if (localStorage.style) {
      this.styleName = localStorage.style
    }
  }
}
</script>

<style scoped></style>

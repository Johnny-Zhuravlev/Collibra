<template>
  <div class="fixed items-center top-2 w-full flex px-3 bg-white z-10">
    <BaseTooltip @click="$emit('close')" text="Turn back" class="mr-2" right>
      <BaseIcon name="arrowLeft" />
    </BaseTooltip>
    <TheSearch />
    <TheVoiceSearchBtn left />
  </div>
</template>

<script>
import BaseTooltip from '../BaseTooltip.vue'
import BaseIcon from '../BaseIcon.vue'
import TheSearch from './TheSearch.vue'
import TheVoiceSearchBtn from './TheVoiceSearchBtn.vue'

export default {
  mounted () {
    window.addEventListener('click', this.onClick)
  },
  beforeUnmount () {
    window.removeEventListener('click', this.onClick)
  },
  name: 'TheMobileSearch',
  components: {
    BaseTooltip,
    BaseIcon,
    TheSearch,
    TheVoiceSearchBtn
  },
  methods: {
    onClick (event) {
      if (!this.$el.contains(event.target)) {
        this.$emit('close')
      }
    }
  }
}
</script>

<style scoped></style>

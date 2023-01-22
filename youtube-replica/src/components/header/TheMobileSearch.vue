<template>
  <div :class="classes">
    <BaseTooltip text="Turn back" class="mr-2" right>
      <BaseIcon
        @click="$emit('close')"
        name="arrowLeft"
        class="w-5 h-5"
      />
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
  name: 'TheMobileSearch',
  mounted () {
    window.addEventListener('click', this.onClick)
  },
  beforeUnmount () {
    window.removeEventListener('click', this.onClick)
  },
  components: {
    BaseTooltip,
    BaseIcon,
    TheSearch,
    TheVoiceSearchBtn
  },
  data() {
    return {
      classes: [
        'absolute',
        'top-2',
        'w-full',
        'flex',
        'items-center',
        'px-3',
        'bg-white',
        'z-10'
      ]
    }
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

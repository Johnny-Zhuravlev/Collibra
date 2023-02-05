<template>
  <div :class="classes">
    <BaseTooltip text="Turn back" class="mr-2" right>
      <BaseIcon
        @click="$emit('close')"
        name="arrowLeft"
        class="w-5 h-5"
      />
    </BaseTooltip>
    <TheSearch
      :search-query="searchQuery"
      @update-search-query="$emit('update-search-query', $event)"
    />
    <TheVoiceSearchBtn @click="$emit('open-voice-modal')" left />
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
  components: {
    BaseTooltip,
    BaseIcon,
    TheSearch,
    TheVoiceSearchBtn
  },
  props: ['searchQuery'],
  emits: ['update-search-query', 'open-voice-modal'],
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

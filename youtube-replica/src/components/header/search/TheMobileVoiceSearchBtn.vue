<template>
  <BaseTooltip text="Voice search">
    <button
      class="sm:hidden p-1 sm:p-2 focus:outline-none"
      @click="$emit('open-voice-modal')"
    >
      <BaseIcon name="microphone" class="w-5 h-5" />
    </button>
  </BaseTooltip>
</template>

<script>
import BaseTooltip from '../../BaseTooltip.vue'
import BaseIcon from '../../BaseIcon.vue'

export default {
  name: 'TheMobileVoiceSearchBtn',
  components: {
    BaseTooltip,
    BaseIcon
  },
  emits: ['open-voice-modal']
}
</script>

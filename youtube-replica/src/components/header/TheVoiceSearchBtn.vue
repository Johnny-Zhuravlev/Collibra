<template>
  <BaseTooltip class="ml-2 lg:ml-4" text="Voice search">
    <button :class="classes">
        <BaseIcon name="microphone" class="w-5 h-5" />
      </button>
  </BaseTooltip>
</template>

<script>
import BaseTooltip from "../BaseTooltip.vue";
import BaseIcon from "../BaseIcon.vue";

export default {
  name: 'TheVoiceSearchBtn',
  components: {
    BaseTooltip,
    BaseIcon,
  },
  computed: {
    classes() {
      return [
        'p-2',
        'bg-gray-200',
        'rounded-full',
        'hover:bg-gray-300',
        'focus:outline-none',
      ]
    }
  }
}
</script>

<style></style>
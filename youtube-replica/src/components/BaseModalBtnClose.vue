<template>
  <button :class="classes">
    <BaseIcon name="x" />
  </button>
</template>

<script>
import BaseIcon from './BaseIcon.vue';

export default {
  components: {
		BaseIcon
	},
  data() {
    return {
      classes: [
        'p-2',
        'text-black',
        'outline-none',
        'transform',
        'transition-all',
        'hover:rotate-90'
      ]
    }
  }
}
</script>

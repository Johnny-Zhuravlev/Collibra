<template>
  <div :class="classes" @click.self="close" @keydown.esc="close" tabindex="-1">
    <div class="max-w-30 mt-20 mx-4 bg-white rounded-md">
      <div class="flex justify-between items-center p-4">
        <h3 class="p-2 text-xl font-semibold text-black">{{ title }}</h3>
        <BaseModalBtnClose @click="close" />
      </div>
      <div class="p-6">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
import BaseModalBtnClose from './BaseModalBtnClose.vue'

export default {
  mounted () {
    this.$el.focus()
  },
  components: {
    BaseModalBtnClose
  },
  props: ['title'],
  emits: ['close'],
  data() {
		return {
			classes: [
				'fixed',
				'inset-0',
				'flex',
				'justify-center',
				'items-start',
				'bg-black',
				'bg-opacity-70',
				'z-50',
				'focus:outline-none'
			]
		}
  },
  methods: {
    close () {
      setTimeout(() => {
        this.$emit('close')
      }, 100)
    }
  }
}
</script>

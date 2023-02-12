<template>
  <div :class="classes" @click.self="close" @keydown.esc="close" tabindex="-1">
    <div class="max-w-30 mt-20 mx-4 bg-white rounded-md">
      <div class="flex justify-between items-center px-4 pt-4">
        <h3 class="mr-48 px-2 text-xl font-semibold text-black">{{ title }}</h3>
        <BaseModalBtnClose v-if="hasCloseBtn" @click="close" />
      </div>
      <div class="p-6 pt-2">
        <slot />
      </div>
      <div v-if="$slots.footer" class="flex justify-end px-2 py-2 border-t-2 border-gray-200">
        <slot name="footer" :close="close" />
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
  props: {
    title: String,
    hasCloseBtn: Boolean
  },
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

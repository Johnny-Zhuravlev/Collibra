<template>
  <div :class="classes" @click.self="close" @keydown.esc="close" tabindex="-1">
    <div class="max-w-lg mt-20 mx-4 bg-white rounded-md">
      <div class="p-2 text-right">
        <BaseModalBtnClose @click="close" />
      </div>
      <div class="p-6">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint, dolor
        ipsum. Illum ullam vero numquam, totam pariatur quos possimus error
        dolor reiciendis dolorem deserunt dolorum quis aliquid ducimus quaerat.
        Autem distinctio, quasi natus explicabo aut vero at nihil porro mollitia
        officia? Molestias, omnis accusantium. Neque ratione repellendus a
        similique cupiditate.
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

<template>
  <div
		class="fixed inset-0 bg-black bg-opacity-80 z-10 focus:outline-none"
		@click.self="close"
		@keydown.esc="close"
		tabindex="-1"
	>
    <div class="max-w-sm mx-auto my-20 bg-white rounded-md">
      <div class="p-2 text-right">
				<BaseModalBtnClose @click="close" />
      </div>
      <div class="p-6">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea commodi,
        nulla quo vero aut ex aspernatur cum! Assumenda, repellendus ad!
      </div>
    </div>
  </div>
</template>

<script>
import BaseModalBtnClose from './BaseModalBtnClose.vue';

export default {
	mounted() {
		this.$el.focus()
	},
  components: {
		BaseModalBtnClose
	},
	emits: ['close'],
	methods: {
		close() {
			this.$emit('close')
		}
	}
}
</script>

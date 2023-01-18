<template>
	<div class="relative">
		<div
			class="h-full flex"
			@mouseenter="toogleTooltip"
			@mouseleave="toogleTooltip"
		>
			<slot />
		</div>
		<transition
      enter-from-class="transition opacity-0 scale-90"
      enter-active-class="transition ease-out duration-200"
      enter-to-class="opacity-100"
      leave-from-class="opacity-100"
      leave-active-class="transition ease-in duration-100"
      leave-to-class="opacity-0"
    >
			<div v-show="isShown" :class="classes">{{text}}</div>
		</transition>
	</div>
</template>

<script>
export default {
	name: 'BaseTooltip',
	props: {
		text: String,
	},
	data() {
		return {
			isShown: false,
		}
	},
	computed: {
		classes() {
			return [
					'bg-gray-600',
					'bg-opacity-85',
					'rounded-sm',
					'text-white',
					'text-xs',
					'whitespace-nowrap',
					'p-2',
					'absolute',
					'top-12',
					'left-1/2',
					'transform',
					'-translate-x-1/2'
			]
		}
	},
	methods: {
		toogleTooltip() {
			this.isShown = !this.isShown
		}
	}
}
</script>

<style scoped></style>
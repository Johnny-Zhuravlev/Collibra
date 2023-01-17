<template>
	<div class="relative">
		<div
			class="h-full"
			@mouseenter="toggle"
			@mouseleave="toggle"
		>
			<slot />
		</div>
  	<div v-show="isShown" :class="classes">{{text}}</div>
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
					'bg-opacity-80',
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
		toogle() {
			this.isShown = !this.isShown
		}
	}
}
</script>

<style scoped></style>
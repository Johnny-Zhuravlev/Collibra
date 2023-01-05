<template>
  <li>
    <a
      href="/"
      :class="classes"
    >
      <span :class="iconClasses">
        <BaseIcon :name="iconName" class="w-6 h-6" />
      </span>
      <span>{{ label }}</span>
    </a>
  </li>
</template>

<script>
import BaseIcon from '../BaseIcon.vue';

export default {
	props: {
		label: String,
		iconName: String,
		isActive: Boolean
	},
	components: {
		BaseIcon
	},
	computed: {
		classes() {
			const classes = [
				'flex',
				'items-center',
				'px-6',
				'py-2',
				'text-sm',
				'hover:bg-gray-100'
			]

			return this.isActive
				? [
						...classes,
						'font-medium',
						'text-gray-800',
						'bg-gray-200',
						'hover:bg-gray-300'
					]
				: [...classes, 'hover:bg-gray-100']
		},
		iconClasses() {
			return this.isActive ? 'flex mr-3 text-red-500' : 'flex mr-3'
		}
	}
}
</script>

<style scoped></style>

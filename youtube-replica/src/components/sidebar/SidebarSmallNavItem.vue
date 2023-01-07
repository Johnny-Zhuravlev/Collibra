<template>
  <li>
    <a
        href="/"
        :class="classes"
    >
      <span :class="iconClasses">
        <BaseIcon :name="iconName" class="w-6 h-6" />
      </span>
      <span class="text-xs">{{ label }}</span>
    </a>
  </li>
</template>

<script>
import BaseIcon from '../BaseIcon.vue'

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
        'flex-col',
        'items-center',
        'px-2',
        'py-5',
        'hover:bg-gray-100',
	  ]

	  return this.isActive
		? [
			...classes,
			'font-medium',
			'text-red-500',
			'hover:bg-gray-200'
		]
		: [...classes, 'hover:bg-gray-100']
	},
	iconClasses() {
	  return this.isActive ? 'flex mb-1.5 text-red-500' : 'flex mb-1.5'
	}
  }
}
</script>

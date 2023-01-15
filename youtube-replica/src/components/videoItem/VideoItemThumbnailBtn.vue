<template>
  <span
    @mouseenter="toggleTooltip"
    @mouseleave="toggleTooltip"
    :class="classes"
  >
    <BaseIcon :name="iconName" class="w-4 sm:w-5 h-4 sm:h-5 text-gray-600" />
    <span :class="tooltipClasses">
      <span class="inline-block py-1.5 px-3">{{ label }}</span>
    </span>
  </span>
</template>

<script>
import BaseIcon from "../BaseIcon.vue";

export default {
  props: {
    iconName: String,
    label: String
  },
  components: {
    BaseIcon
  },
  data() {
    return {
      isTooltipShown: false,
    }
  },
  methods: {
    toggleTooltip() {
      this.isTooltipShown = !this.isTooltipShown;
    }
  },
  computed: {
    classes() {
      return [
        'absolute',
        'top-0',
        'right-0',
        'bg-black',
        'text-white',
        'm-1',
        'p-1',
        'transition',
        'delay-100',
        'opacity-0',
        'group-hover:opacity-100',
        'bg-opacity-60',
        this.isTooltipShown ? 'rounded-r-md' : 'rounded'
      ]
    },
    tooltipClasses() {
      return [
        'absolute',
        'top-0',
        'right-full',
        'overflow-hidden',
        'font-semibold',
        'text-xs',
        'uppercase',
        'bg-black',
        'bg-opacity-60',
        'whitespace-nowrap',
        'rounded-l-md',
        'transition-width',
        'delay-100',
        this.isTooltipShown ? 'w-28' : 'w-0'
      ]
    }
  }
}
</script>

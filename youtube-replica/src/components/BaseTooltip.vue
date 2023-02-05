<template>
  <div class="relative">
    <div
      class="h-full flex"
      @mouseenter="this.isShown = true"
      @mouseleave="this.isShown = false"
      @click="this.isShown = false"
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
      <div v-show="isShown" :class="classes">{{ text }}</div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'BaseTooltip',
  props: {
    text: String,
    top: Boolean,
    right: Boolean,
    left: Boolean
  },
  data () {
    return {
      isShown: false,
      classes: [
        'bg-gray-600',
        'bg-opacity-85',
        'rounded-lg',
        'text-white',
        'text-xs',
        'whitespace-nowrap',
        'p-2',
        'absolute',
        'transform',
        ...this.getPositionClasses()
      ]
    }
  },
  methods: {
    getPositionClasses () {
      const topClass = this.top ? '-top-9' : 'top-12'

      if (this.right) {
        return [topClass, 'left-0']
      }

      if (this.left) {
        return [topClass, 'right-0']
      }

      return [topClass, 'left-1/2', '-translate-x-1/2']
    }
  }
}
</script>

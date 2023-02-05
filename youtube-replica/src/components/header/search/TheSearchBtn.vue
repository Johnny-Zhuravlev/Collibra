<template>
  <BaseTooltip text="Search">
    <button :class="btnClasses">
      <BaseIcon name="search" class="w-5 h-5" />
    </button>
  </BaseTooltip>
</template>

<script>
import BaseTooltip from "../../BaseTooltip.vue";
import BaseIcon from "../../BaseIcon.vue";

export default {
  components: {
    BaseTooltip,
    BaseIcon,
  },
  data() {
    return {
      btnClasses: [
        'h-full',
        'flex',
        'items-center ',
        'px-4 ',
        'lg:px-6 ',
        'py-1 ',
        'text-gray-600 ',
        'bg-gray-100 ',
        'border ',
        'border-l-0 ',
        'border-gray-300 ',
        'rounded-r-2xl ',
        'hover:bg-gray-300 ',
        'focus:outline-none',
      ]
    }
  }
}
</script>

<style></style>
<template>
  <li>
    <a href="/" class="flex items-center px-3 py-2 text-sm hover:bg-gray-100">
      <span v-if="name" class="flex mr-1.5 text-gray-500">
        <BaseIcon :name="name" class="w-5 sm:w-6 h-5 sm:h-6" />
      </span>
      <span class="inline-block mr-auto">{{ label }}</span>
      <span v-if="hasSubmenu" class="flex text-gray-500">
        <BaseIcon name="chevronRight" class="w-4 sm:w-5 h-4 sm:h-5" />
      </span>
    </a>
  </li>
</template>

<script>
import BaseIcon from '../BaseIcon.vue'

export default {
  props: {
    name: String,
    label: String,
    hasSubmenu: Boolean
  },
  components: {
    BaseIcon
  }
}
</script>

<style scoped></style>

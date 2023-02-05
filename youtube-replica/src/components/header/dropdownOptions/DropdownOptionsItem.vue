<template>
  <li>
    <a href="/" class="flex items-center px-3 py-2 text-sm hover:bg-gray-100">
      <span class="flex mr-1.5 text-red-500">
        <BaseIcon :name="name" class="w-5 sm:w-6 h-5 sm:h-6" />
      </span>
      <span>{{ label }}</span>
    </a>
  </li>
</template>

<script>
import BaseIcon from '../../BaseIcon.vue';

export default {
  props: ['name','label'],
  components: {
    BaseIcon
  }
}
</script>

<style scoped></style>

<template>
  <button
    class="w-30 flex items-center flex-none p-1 sm:px-2 sm:py-1.5 text-xs sm:text-sm text-blue-700 uppercase border border-blue-700 rounded-sm"
  >
    <span class="flex">
    <BaseIcon name="login" class="w-5 h-5" />
    </span>
    <span class="ml-1 sm:ml-2">Sign In</span>
  </button>
</template>

<script>
import BaseIcon from "../BaseIcon.vue";

export default {
  components: {
    BaseIcon
  }
}
</script>

<style scoped></style>

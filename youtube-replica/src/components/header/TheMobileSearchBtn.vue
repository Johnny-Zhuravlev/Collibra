<template>
    <BaseTooltip text="Search">
      <button class="sm:hidden p-1 sm:p-2 focus:outline-none">
        <BaseIcon name="search" class="w-5 h-5" />
      </button>
    </BaseTooltip>
  </template>

  <script>
  import BaseTooltip from "../BaseTooltip.vue";
  import BaseIcon from "../BaseIcon.vue";

  export default {
    name: 'TheMobileSearchBtn',
    components: {
      BaseTooltip,
      BaseIcon,
    },
  }
  </script>

  <style></style>
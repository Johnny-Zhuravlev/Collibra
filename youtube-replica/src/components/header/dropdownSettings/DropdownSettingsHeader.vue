<template>
  <section class="flex items-center text-black border-b border-gray-200">
    <button @click.stop="$emit('back')" class="px-3 focus:outline-none">
      <BaseIcon name="arrowLeft" class="w-4 h-4 lg:w-5 lg:h-5" />
    </button>
    <span class="py-3">{{ title }}</span>
  </section>
</template>

<script>
import BaseIcon from '../../BaseIcon.vue';

export default {
	name: 'TheDropdownSettingsHeader',
	components: {BaseIcon},
	props: ['title'],
  emits: ['back'],
}

</script>

<style scoped></style>
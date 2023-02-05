<template>
  <div :class="classes">
    <TheSearch
      :search-query="searchQuery"
      @update-search-query="$emit('update-search-query', $event)"
    />
    <TheVoiceSearchBtn @click="isVoiceModalOpen = true" />
    <transition
      enter-from-class="transition opacity-0"
      enter-active-class="transition ease-out duration-200"
      enter-to-class="opacity-100"
      leave-from-class="opacity-100"
      leave-active-class="transition ease-in duration-100"
      leave-to-class="opacity-0"
    >
      <BaseModal
        v-if="isVoiceModalOpen"
        @close="isVoiceModalOpen = false"
      />
    </transition>
  </div>
</template>

<script>
import TheSearch from './TheSearch.vue';
import TheVoiceSearchBtn from './TheVoiceSearchBtn.vue';
import BaseModal from '../BaseModal.vue';

export default {
  components: {
    TheSearch,
    TheVoiceSearchBtn,
    BaseModal
  },
  props: ['searchQuery'],
  emits: ['update-search-query', 'close'],
  data () {
    return {
      isVoiceModalOpen: false,
      classes: [
        'hidden',
        'sm:flex',
        'items-center',
        'sm:flex-1',
        'lg:w-1/2',
        'max-w-screen-md',
        'p-2.5',
        'sm:px-6',
        'md:px-12',
        'lg:px-0'
      ]
    }
  }
}
</script>

<style></style>

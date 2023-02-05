<template>
  <div :class="classes">
    <TheSearch
      :search-query="searchQuery"
      @update-search-query="$emit('update-search-query', $event)"
    />
    <TheVoiceSearchBtn @click="$emit('open-voice-modal')" />
  </div>
</template>

<script>
import TheSearch from './TheSearch.vue';
import TheVoiceSearchBtn from './TheVoiceSearchBtn.vue';

export default {
  components: {
    TheSearch,
    TheVoiceSearchBtn
  },
  props: ['searchQuery'],
  emits: ['update-search-query', 'open-voice-modal', 'close'],
  data () {
    return {
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

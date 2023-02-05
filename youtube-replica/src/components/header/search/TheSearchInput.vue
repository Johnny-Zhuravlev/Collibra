<template>
  <div class="relative w-full">
    <input
      type="text"
      :class="classes"
      :value="query"
      placeholder="Search"
      ref="searchInput"
      @input="updateQuery($event.target.value)"
      @focus="$emit('change-state', true)"
      @keydown.esc="$emit('change-state', false), this.$refs.searchInput.blur()"
      @keydown.enter="$emit('enter'), this.$refs.searchInput.blur()"
    />
    <button
      v-show="query"
      class="absolute top-0 right-0 h-full px-3 focus:outline-none"
      @click="updateQuery(''); this.$refs.searchInput.focus()"
    >
      <BaseIcon name="x" class="w-5 h-5" />
    </button>
  </div>
</template>

<script>
import BaseIcon from "../../BaseIcon.vue";

export default {
  mounted() {
    if (window.innerWidth < 640) {
      this.$refs.searchInput.focus()
    }
  },
  props: ['query'],
  emits: ['update:query', 'change-state', 'enter'],
  components: {BaseIcon},
  data() {
    return {
      classes: [
        'w-full',
        'h-full',
        'px-3',
        'py-1',
        'border',
        'border-gray-300',
        'shadow-inner',
        'rounded-l-2xl',
        'focus:border-blue-700',
        'focus:outline-none'
      ]
    }
  },
  methods: {
    updateQuery(query) {
      this.$emit('change-state', true)
      this.$emit('update:query', query)
    }
  }
}
</script>

<style></style>

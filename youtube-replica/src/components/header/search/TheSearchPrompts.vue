<template>
  <ul class="absolute top-10 w-full py-3 bg-white rounded-lg shadow-lg">
    <li
      v-for="(propmt, id) in prompts"
      :key="propmt"
      :class="getItemClasses(id)"
      @mouseenter="$emit('search-result-mouse-enter', id)"
      @mouseleave="$emit('search-result-mouse-leave')"
      @click="$emit('search-result-click')"
    >
      <span @mouseenter="$emit('search-result-mouse-enter', id)">{{ propmt }}</span>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'TheSearchPrompts',
  props: ['prompts', 'activeResultId'],
  emits: [
    'search-result-mouse-enter',
    'search-result-mouse-leave',
    'search-result-click'
  ],
  methods: {
    getItemClasses(resultId) {
      return [
        'py-1',
        'px-3',
        'text-black',
        'select-none',
        'truncate',
        resultId === this.activeResultId ? 'bg-gray-100' : 'bg-transparent'
      ]
    }
  }
}
</script>

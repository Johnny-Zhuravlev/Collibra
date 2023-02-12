<template>
  <div :class="wrapperClasses">
    <ul>
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

    <a
      href="#"
      :class="linkClasses"
      @click="openModalSearchReportPredictions"
    >
      Report search predictions
    </a>

    <teleport to="body">
      <TheModalSearchReportPredictions
        v-if="isModalSearchReportPredictionsOpen"
        :search-predictions="prompts"
        @close="isModalSearchReportPredictionsOpen = false"
      />
    </teleport>
  </div>
</template>

<script>
import TheModalSearchReportPredictions from '../../modals/TheModalSearchReportPredictions.vue'

export default {
  name: 'TheSearchPrompts',
  components: {TheModalSearchReportPredictions},
  props: ['prompts', 'activeResultId'],
  emits: [
    'search-result-mouse-enter',
    'search-result-mouse-leave',
    'search-result-click',
    'open-modal-search-report-predictions'
  ],
  data() {
    return {
      isModalSearchReportPredictionsOpen: false,
      wrapperClasses: [
        'absolute',
        'top-10',
        'w-full',
        'py-3',
        'bg-white',
        'rounded-lg',
        'shadow-lg'
      ],
      linkClasses: [
        'block',
        'px-3',
        'text-xs',
        'text-gray-500',
        'text-right',
        'hover:text-black'
      ]
    }
  },
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
    },
    openModalSearchReportPredictions() {
      this.$emit('open-modal-search-report-predictions')
      this.isModalSearchReportPredictionsOpen = true
    }
  }
}
</script>

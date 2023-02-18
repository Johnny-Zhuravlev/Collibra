<template>
  <BaseModal title="Report search predictions">
    <TheSearchPredictionsList
      v-model="selectedSearchPredictions"
      :search-predictions="searchPredictions"
    />

    <p class="mt-5 text-xs text-gray-400">The selected predictions are:</p>
    <TheSearchPredictionsCategories
      v-model="selectedSearchPredictionReported"
      :reported-variants="reportedVariants"
    />

    <div class="mt-5">
      <textarea
        class="w-full p-2 pb-5 border border-gray-300 resize-none focus:outline-none"
        v-model="searchPredictionsDetails"
        placeholder="Provide additional details (optional)"
      />
    </div>

    <template #footer="{close}">
      <button
        :class="btnClasses"
        @click="close"
      >Cancel</button>
      <button class="ml-1 text-gray-400" :class="btnClasses" disabled>Report</button>
    </template>
  </BaseModal>
</template>

<script>
import BaseModal from '../BaseModal.vue'
import TheSearchPredictionsList from '../header/search/TheSearchPredictionsList.vue'
import TheSearchPredictionsCategories from '../header/search/TheSearchPredictionsCategories.vue'

export default {
  components: {
    BaseModal,
    TheSearchPredictionsList,
    TheSearchPredictionsCategories
  },
  props: {
    searchPredictions: Array
  },
  data() {
    return {
      selectedSearchPredictions: [],
      selectedSearchPredictionReported: null,
      searchPredictionsDetails: '',
      reportedVariants: [
        'Hateful',
        'Sexual Explicit',
        'Violent',
        'Dangerous and harmful activity',
        'Other'
      ],
      btnClasses: [
        'py-2.5',
        'px-4',
        'uppercase',
        'text-sm',
        'font-semibold',
        'tracking-wider',
        'focus:outline-none',
        'hover:text-black'
      ]
    }
  }
}
</script>

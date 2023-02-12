<template>
  <BaseModal title="Report search predictions">
    <TheSearchPredictionsList
      v-model="selectedSearchPredictions"
      :search-predictions="searchPredictions"
    />

    <p class="mt-5 text-xs text-gray-400">The selected predictions are:</p>
    <div class="space-y-2 mt-4 text-black text-sm">
      <div
        v-for="(label, i) in reportedVariants"
        :key="label"
        class="flex items-center"
      >
        <input
          class="w-5 h-5 cursor-pointer focus:outline-none"
          type="radio"
          :id="`search-prediction-reported-${i}`"
          :value="label"
          v-model="selectedSearchPredictionReported"
        />
        <label
          class="w-5 h-5 flex-grow pl-2 cursor-pointer"
          :for="`search-prediction-reported-${i}`"
        >
          {{ label }}
        </label>
      </div>
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

export default {
  components: {
    BaseModal,
    TheSearchPredictionsList
  },
  props: {
    searchPredictions: Array
  },
  data() {
    return {
      selectedSearchPredictions: [],
      selectedSearchPredictionReported: null,
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

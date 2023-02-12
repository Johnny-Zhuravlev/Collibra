<template>
  <BaseModal title="Report search predictions">
    <TheSearchPredictionsList
      v-model="selectedSearchPredictions"
      :search-predictions="searchPredictions"
    />

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
  data() {
    return {
      selectedSearchPredictions: [],
      searchPredictions: [
        'new york cars',
        'new york streets',
        'new york culture',
        'new york architecture',
        'new york basketball teams',
        'new york accent',
        'new york movies',
        'new york jazz bands',
        'new york rappers',
        'new york parks',
        'new york mornings',
        'new york clubs',
        'new york bars'
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

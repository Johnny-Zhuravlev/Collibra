<template>
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
</template>

<script>
export default {
	props: {
		reportedVariants: Array,
		modelValue: String
	},
	emits: ['update:modelValue'],
	data() {
		return {
			selectedSearchPredictionReported: null,
		}
	},
	watch: {
    selectedSearchPredictionReported () {
      this.$emit('update:modelValue', this.selectedSearchPredictionReported)
    }
  }
}
</script>

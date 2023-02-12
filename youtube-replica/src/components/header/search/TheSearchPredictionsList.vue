<template>
  <div class="space-y-2 mt-4 text-black text-sm">
    <div
      v-for="(label, i) of searchPredictions"
      :key="label"
      class="flex items-center"
    >
      <input
        class="w-5 h-5 cursor-pointer focus:outline-none"
        type="checkbox"
        :id="i"
        :value="label"
        v-model="selectedSearchPredictions"
      />
      <label :for="i" class="flex-grow pl-2 cursor-pointer">{{ label }}</label>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    searchPredictions: Array,
    modelValue: Array
  },
  emits: ['update:modelValue'],
  data () {
    return {
      selectedSearchPredictions: this.modelValue
    }
  },
  watch: {
    selectedSearchPredictions () {
      this.$emit('update:modelValue', this.selectedSearchPredictions)
    }
  }
}
</script>

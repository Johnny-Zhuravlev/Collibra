<template>
  <div class="flex items-start mt-3">
    <img
      :src="`https://picsum.photos/seed/avatar${index}/68`"
      class="w-9 h-9 mr-3 rounded-full"
      alt="avatar of channel creator"
    />
    <div class="text-sm">
      <span class="font-semibold text-gray-700">Title video for example {{ index }}</span>
      <div class="flex items-center mt-1">
        <span>Channel label {{ index }}</span>
        <BaseIcon name="checkmark" class="w-4 sm:w-5 h-4 sm:h-5 ml-1" />
      </div>
      <div v-html="summary"></div>
    </div>
    <button
      class="ml-auto -mt-1 p-1 opacity-0 group-hover:opacity-100 text-gray-500 hover:text-gray-700 focus:outline-none"
    >
			<BaseIcon name="settingsDots" class="w-4 sm:w-5 h-4 sm:h-5" />
    </button>
  </div>
</template>

<script>
import BaseIcon from "../BaseIcon.vue";

export default {
  props: ['index'],
	components: {
		BaseIcon
	},
	computed: {
		summary() {
			const days = this.index === 1 ? 'day' : 'days';

			return `${this.index}K views &middot; ${this.index} ${days} ago`
		}
	}
}
</script>

<style scoped></style>

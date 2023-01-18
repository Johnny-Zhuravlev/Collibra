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
        <BaseTooltip :text="channelName" top>
          <span>{{ channelName }}</span>
        </BaseTooltip>
        <BaseTooltip text="Verified" top>
          <BaseIcon name="checkmark" class="w-4 sm:w-5 h-4 sm:h-5 ml-1" />
        </BaseTooltip>
      </div>
      <div v-html="summary"></div>
    </div>
    <VideoItemDropdown />
  </div>
</template>

<script>
import BaseTooltip from "../BaseTooltip.vue";
import BaseIcon from "../BaseIcon.vue";
import VideoItemDropdown from "./VideoItemDropdown.vue";

export default {
  props: ['index'],
	components: {
    BaseTooltip,
		BaseIcon,
		VideoItemDropdown
	},
  data() {
    return {
      channelName: `Channel name ${this.index}`
    }
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

<template>
  <div class="relative">
    <img
      :src="`https://picsum.photos/seed/image${index}/720/404`"
      alt="preview picture"
    />
    <span
      class="absolute top-0 right-0 bg-black text-white rounded m-1 p-1 transition opacity-0 group-hover:opacity-100 bg-opacity-60"
    >
			<BaseIcon name="clock" class="w-4 sm:w-5 h-4 sm:h-5" />
    </span>
    <span
      class="absolute top-8 right-0 bg-black text-white rounded m-1 p-1 transition opacity-0 group-hover:opacity-100 bg-opacity-60"
    >
      <BaseIcon name="list" class="w-3 sm:w-4 h-3 sm:h-4" />
    </span>
    <span
      class="absolute bottom-0 right-0 bg-black text-white rounded-sm m-1 p-1 text-xs font-semibold transition group-hover:opacity-0"
      >{{ Math.round(Math.random() * 10) }}:{{ Math.round(Math.random()) }}{{ Math.round(Math.random()) }}</span
    >
  </div>
</template>

<script>
import BaseIcon from "../BaseIcon.vue";

export default {
  props: ['index'],
	components: {
		BaseIcon
	},
}
</script>

<style scoped></style>

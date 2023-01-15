<template>
  <div class="relative">
    <img
      :src="`https://picsum.photos/seed/image${index}/720/404`"
      alt="preview picture"
    />
    <VideoItemThumbnailBtn
      icon-name="clock"
      label="Watch later"
    />
    <VideoItemThumbnailBtn
      icon-name="list"
      label="Add to queue"
      class="top-8"
    />
    <span
      class="absolute bottom-0 right-0 bg-black text-white rounded-sm m-1 p-1 text-xs font-semibold transition group-hover:opacity-0"
      >{{ Math.round(Math.random() * 10) }}:{{ Math.round(Math.random()) }}{{ Math.round(Math.random()) }}</span
    >
  </div>
</template>

<script>
import VideoItemThumbnailBtn from "./VideoItemThumbnailBtn.vue";

export default {
  props: ['index'],
	components: {
    VideoItemThumbnailBtn
},
}
</script>

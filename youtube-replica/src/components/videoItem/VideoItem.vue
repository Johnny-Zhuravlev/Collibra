<template>
  <a class="mb-7 group">
    <VideoItemThumbnail :index="index" />
    <VideoItemInfo :index="index" />
  </a>
</template>

<script>
import VideoItemThumbnail from "./VideoItemThumbnail.vue";
import VideoItemInfo from "./VideoItemInfo.vue";

export default {
  props: ['index'],
  components: {
    VideoItemThumbnail,
    VideoItemInfo
  }
}
</script>

<style scoped></style>

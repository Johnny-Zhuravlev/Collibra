<template>
  <div class="px-5 md:pl-28 lg:pl-30 xl:pl-64 sm:px-4 pt-32 pb-5">
    <div
      class="
        max-w-screen-2xl
        m-auto
        grid
        sm:grid-cols-2
        lg:grid-cols-3
        xl:grid-cols-4
        2xl:grid-cols-5
        gap-3
      "
    >
      <VideoItem v-for="video of 20" :key="video" :index="video" />
    </div>
  </div>
</template>

<script>
import VideoItem from "./VideoItem.vue";

export default {
  components: {
    VideoItem
  }
}
</script>

<style scoped>

</style>
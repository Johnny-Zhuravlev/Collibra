<template>
  <div :class="classes">
    <div class="max-w-screen-2xl m-auto grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3">
      <VideoItem v-for="video of 20" :key="video" :index="video" />
    </div>
  </div>
</template>

<script>
import VideoItem from './videoItem/VideoItem.vue'

export default {
  components: {
    VideoItem
  },
  props: {
    isSidebarOpen: Boolean
  },
  computed: {
    classes () {
      return [
        this.isSidebarOpen ? 'xl:pl-64' : 'md:pl-28',
        'px-5',
        'md:pl-28',
        'sm:px-4',
        'pt-32',
        'pb-5'
      ]
    }
  }
}
</script>

<style scoped></style>

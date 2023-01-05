<template>
  <TheHeader />
  <TheSidebarMobile />
  <TheSidebarSmall />
  <TheSidebar />
  <TheCategories />
  <TheVideos />
</template>

<script>
import TheHeader from "./components/header/TheHeader.vue";
import TheSidebarMobile from "./components/TheSidebarMobile.vue";
import TheSidebarSmall from "./components/TheSidebarSmall.vue";
import TheSidebar from "./components/TheSidebar.vue";
import TheCategories from "./components/TheCategories.vue";
import TheVideos from "./components/TheVideos.vue";
  export default {
    components: {
      TheHeader,
      TheSidebarMobile,
      TheSidebarSmall,
      TheSidebar,
      TheCategories,
      TheVideos
    }
  }
</script>

<style scoped>

</style>

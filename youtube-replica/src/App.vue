<template>
  <TheHeader @toggle-sidebar="toggleSidebar" />
  <TheSidebarMobile
    :is-open="isMobileSidebarOpen"
    @close-mobile-sidebar="closeMobileSidebar"
  />
  <TheSidebarSmall v-if="isSmallSidebarOpen" />
  <TheSidebar v-if="isSidebarOpen" />
  <TheCategories :is-sidebar-open="isSidebarOpen" />
  <TheVideos :is-sidebar-open="isSidebarOpen" />
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
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
  },
  data() {
    return {
      isSidebarOpen: false,
      isSmallSidebarOpen: false,
      isMobileSidebarOpen: false,
      sidebarState: null
    }
  },
  mounted() {
    if (window.innerWidth >= 768 && window.innerWidth < 1280) {
      this.sidebarState = 'small';
    }
    if (window.innerWidth >= 1280) {
      this.sidebarState = 'normal';
    }

    this.onResize()
    window.addEventListener('resize', this.onResize)
  },
  methods: {
    onResize() {
      if (window.innerWidth < 768) {
        this.isSidebarOpen = false;
        this.isSmallSidebarOpen = false;
      } else if (window.innerWidth < 1280) {
        this.isSmallSidebarOpen = true;
        this.isSidebarOpen = false;
      } else {
        this.isSidebarOpen = this.sidebarState === 'normal';
        this.isSmallSidebarOpen = this.sidebarState === 'small';
      }
    },
    toggleSidebar() {
      if (window.innerWidth >= 1280) {
        this.sidebarState =
          this.sidebarState === 'normal' ? 'small' : 'normal';
        this.onResize();
      } else {
        this.openMobileSidebar();
      }
    },
    openMobileSidebar() {
      this.isMobileSidebarOpen = true;
    },
    closeMobileSidebar() {
      this.isMobileSidebarOpen = false;
    }
  },
}
</script>

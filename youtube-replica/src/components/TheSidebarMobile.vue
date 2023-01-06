<template>
  <transition
    enter-from-class="opacity-0"
    enter-active-class="transition-opacity ease-linear duration-200"
    enter-to-class="opacity-100"
    leave-from-class="opacity-100"
    leave-active-class="transition-opacity ease-linear duration-200"
    leave-to-class="opacity-0"
  >
    <TheSidebarMobileOverlay
      v-show="isOpen"
      @click="$emit('closeMobileSidebar')"
      @keyup.esc="$emit('closeMobileSidebar')"
    />
  </transition>

  <transition
    enter-from-class="-translate-x-full"
    enter-active-class="transition ease-in-out duration-200 transform"
    enter-to-class="translate-x-0"
    leave-from-class="translate-x-0"
    leave-active-class="transition ease-in-out duration-200 transform"
    leave-to-class="-translate-x-full"
  >
    <aside
      v-show="isOpen"
      class="w-60 max-h-screen overflow-auto bg-white fixed inset-0 z-50"
      @keyup.esc="$emit('closeMobileSidebar')"
      ref="mobileSidebar"
      tabindex="-1"
    >
      <section
        class="flex items-center py-4 pl-6 border-b sticky top-0 bg-white"
      >
        <button
          class="mr-4"
          @click="$emit('closeMobileSidebar')"
        >
          <BaseIcon name="menu" />
        </button>
        <LogoMain />
      </section>
      <SidebarContent />
    </aside>
  </transition>
</template>

<script>
import TheSidebarMobileOverlay from './sidebar/TheSidebarMobileOverlay.vue';
import BaseIcon from './BaseIcon.vue';
import LogoMain from './header/LogoMain.vue';
import SidebarContent from './sidebar/SidebarContent.vue';

export default {
  props: {
    isOpen: Boolean
  },
  components: {
    TheSidebarMobileOverlay,
    BaseIcon,
    LogoMain,
    SidebarContent
  },
  emits: {
    closeMobileSidebar: null
  },
  watch: {
    isOpen() {
      this.$nextTick(() => this.isOpen && this.$refs.mobileSidebar.focus())
    }
  }
}
</script>
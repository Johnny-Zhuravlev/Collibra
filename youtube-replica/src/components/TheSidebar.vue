<template>
  <aside
    class="sidebar"
    :class="classes"
  >
    <SidebarContent />
  </aside>
</template>

<script>
import SidebarContent from './sidebar/SidebarContent.vue';

export default {
  components: {
    SidebarContent
  },
  computed: {
    classes() {
      return [
        'w-60',
        'max-h-screen',
        'overflow-auto',
        'px-2',
        'pb-12',
        'fixed',
        'top-14',
        'bg-white',
        'z-30',
      ]
    }
  }
}
</script>

<style scoped>
.sidebar::-webkit-scrollbar {

}
.sidebar::-webkit-scrollbar-track {

}
.sidebar::-webkit-scrollbar-thumb {

}
</style>
<template>
  <aside
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
        'pb-12',
        'fixed',
        'top-14',
        'bg-white',
        'z-20',
      ]
    }
  }
}
</script>
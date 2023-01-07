<template>
  <aside :class="classes">
    <section>
      <ul>
        <SidebarSmallNavItem
          v-for="navItem of navItems"
          :key="navItem.label"
          :label="navItem.label"
          :icon-name="navItem.icon"
          :is-active="navItem.isActive"
        />
      </ul>
    </section>
  </aside>
</template>

<script>
import SidebarSmallNavItem from './sidebar/SidebarSmallNavItem.vue';

export default {
  components: {
    SidebarSmallNavItem
  },
  data() {
    return {
      navItems: [
        {label: 'Home', icon: 'home', isActive: true},
        {label: 'Trending', icon: 'trending', isActive: false},
        {label: 'Subscriptions', icon: 'subscriptions', isActive: false},
        {label: 'Library', icon: 'library', isActive: false},
        {label: 'History', icon: 'history', isActive: false},
      ]
    }
  },
  computed: {
    classes() {
      return [
        "min-h-screen",
        "pt-14",
        "overflow-auto",
        "fixed",
        "top-0",
        "bg-white",
        "z-20",
      ];
    }
  },
}
</script>

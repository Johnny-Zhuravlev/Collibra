<template>
  <section :class="classes">
    <div class="py-2 px-2 sm:px-4 border-t border-b">
      <div class="max-w-screen-2xl m-auto p-0 flex space-x-3 overflow-auto text-sm whitespace-norwap categories-list">
        <CategoryItem
          v-for="category in categories"
          :key="category"
          :category="category"
          :is-active="category === 'All'"
        />
      </div>
    </div>
  </section>
</template>

<script>
import CategoryItem from './CategoryItem.vue'

export default {
  data () {
    return {
      categories: [
        'All',
        'NBA',
        'Interview',
        'Nature',
        'Moto',
        'Cars',
        'Ads',
        'Films',
        'Music',
        'Tech',
        'News',
        'Travelling',
        'Winter',
        'Snowboard',
        'Diving',
        'Drift',
        'RedBull',
        'Streaming',
        'Games',
        'Devs',
        'Photos'
      ]
    }
  },
  components: {
    CategoryItem
  },
  props: {
    isSidebarOpen: Boolean
  },
  computed: {
    classes() {
      return [
        this.isSidebarOpen ? 'xl:pl-60' : 'md:pl-24',
        'w-full',
        'pt-12',
        'sm:pt-14',
        'fixed',
        'bg-white',
        'bg-opacity-95',
        'z-20',
      ]
    }
  }
}
</script>

<style scoped>
.categories-list::-webkit-scrollbar {
  width: 0;
  height: 0;
}
</style>

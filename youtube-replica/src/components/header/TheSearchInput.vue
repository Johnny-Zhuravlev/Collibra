<template>
  <input
    type="text"
    class="w-full px-3 py-1 border border-gray-300 shadow-inner rounded-l-2xl focus:border-blue-700 focus:outline-none"
    placeholder="Search"
  />
</template>

<script>
export default {
  mounted() {
    if (window.innerWidth < 640) {
      this.$el.focus()
    }
  }
}
</script>

<style scoped></style>

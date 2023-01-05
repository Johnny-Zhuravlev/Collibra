<template>
  <a
    href="#"
    :class="classes"
  >
    {{ category }}
  </a>
</template>

<script>
  export default {
    props: ['category', 'is-active'],
    computed: {
        classes() {
            const classes = [
                'px-3','py-1','border','rounded-full','transition'
            ]

            // text-white bg-gray-600 border-gray-700 hover:bg-gray-400
            return this.isActive
                ? [...classes, 'text-white', 'bg-gray-600', 'border-gray-700', 'hover:bg-gray-400']
                : [...classes, 'bg-gray-100', 'border-gray-300', 'hover:bg-gray-200']
        }
    }
  }
</script>

<style scoped>

</style>
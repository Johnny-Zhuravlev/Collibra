<template>
  <div
  class="hidden w-48 sm:w-60 py-2 absolute top-9 right-0 sm:-left-2 bg-white rounded-md shadow-md group-hover:block"
>
    <section class="pb-2 border-b border-gray-400">
      <ul>
        <DropdownOptionsItem name="youtubeTV" label="YouTube TV" />
      </ul>
    </section>
    <section class="py-2 border-b border-gray-400">
      <ul>
        <DropdownOptionsItem name="youtubeMusic" label="YouTube Music" />
        <DropdownOptionsItem name="youtubeKids" label="YouTube Kids" />
      </ul>
    </section>
    <section class="pt-2">
      <ul>
        <DropdownOptionsItem name="creators" label="Creator Academy" />
        <DropdownOptionsItem name="artists" label="YouTube for Artists" />
      </ul>
    </section>
  </div>
</template>

<script>
import DropdownOptionsItem from './DropdownOptionsItem.vue';

export default {
  components: {
    DropdownOptionsItem
  }
}
</script>

<style scoped>

</style>
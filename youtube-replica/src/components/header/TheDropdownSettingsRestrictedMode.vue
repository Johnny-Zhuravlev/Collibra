<template>
  <DropdownSettingsHeader
    title="Restricted Mode"
    @back="$emit('select-menu', 'main')"
  />

  <section class="p-3 space-y-3 text-xs font-semibold">
    <div>
      This helps hide potentially mature videos.
      <br />
      No filter is 100% accurate.</div>
    <div>This setting only applies to this browser.</div>

    <div class="flex space-x-2 text-gray-500 uppercase">
      <label for="restricted_mode">Activate restricted mode</label>
      <input
        id="restricted_mode"
        type="checkbox"
        :checked="selectedPoints.restrictedMode"
        @input="selectPoint"
      />
    </div>
  </section>
</template>

<script>
import DropdownSettingsHeader from './DropdownSettingsHeader.vue'

export default {
  name: 'TheDropdownSettingsRestrictedMode',
  components: {
    DropdownSettingsHeader,
  },
  props: ['selectedPoints'],
  emits: ['select-menu', 'select-point'],
  methods: {
    selectPoint($event) {
      this.$emit('select-point', {name: 'restrictedMode', value: $event.target.checked})
    }
  }
}
</script>

<style scoped></style>
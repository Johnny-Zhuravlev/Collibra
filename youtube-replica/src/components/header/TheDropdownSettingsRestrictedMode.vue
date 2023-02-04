<template>
  <DropdownSettingsHeader
    title="Restricted Mode"
    @back="$emit('close')"
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
        :checked="selectedPoints.restrictedMode.enabled"
        @input="selectPoint"
      />
    </div>
    <template v-if="selectedPoints.restrictedMode.enabled">
      <p>
        Restricted Mode lock prevents others from changing the Restricted Mode settings on this browser
      </p>
      <p>
        Lock Restricted Mode on this browser
      </p>
    </template>
  </section>
</template>

<script>
import dropdownSubmenu from '../../mixins/dropdownSubmenu';

export default {
  name: 'TheDropdownSettingsRestrictedMode',
  mixins: [dropdownSubmenu],
  methods: {
    selectPoint($event) {
      const enabled = $event.target.checked
      const value = { enabled, txt: enabled ? 'On' : 'Off' }

      this.$emit('select-point', { name: 'restrictedMode', value })
    }
  }
}
</script>

<style scoped></style>
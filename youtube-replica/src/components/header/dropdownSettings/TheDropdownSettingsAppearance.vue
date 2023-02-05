<template>
  <DropdownSettingsHeader
    title="Appearance"
    @back="$emit('close')"
  />

  <section class="pb-2">
    <div class="p-3 text-xs text-gray-500">
      Setting applies to this browser only
    </div>
    <ul>
      <DropdownSettingsItem
        v-for="(theme, themeId) of themes"
        :key="themeId"
        :label="theme"
        :active="themeId === selectedPoints.theme.id"
        @click="selectPoint({id: themeId, txt: theme})"
      />
    </ul>
  </section>
</template>

<script>
import dropdownSubmenu from '../../../mixins/dropdownSubmenu';

export default {
  name: 'TheDropdownSettingsAppearance',
  mixins: [dropdownSubmenu],
  data() {
    return {
      pointName: 'theme',
      themes: [
        'Device theme',
        'Dark theme',
        'Light theme',
      ],
    }
  },
}
</script>

<style scoped></style>
<template>
  <DropdownSettingsHeader
    title="Appearance"
    @back="$emit('select-menu', 'main')"
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
        :active="themeId === selectedPoints.themeId"
        @click="selectPoint(themeId)"
      />
    </ul>
  </section>
</template>

<script>
import DropdownSettingsHeader from './DropdownSettingsHeader.vue'
import DropdownSettingsItem from './DropdownSettingsItem.vue'

export default {
  name: 'TheDropdownSettingsAppearance',
  components: {
    DropdownSettingsHeader,
    DropdownSettingsItem,
  },
  props: ['selectedPoints'],
  emits: ['select-menu', 'select-point'],
  data() {
    return {
      themes: [
        'Use device theme',
        'Dark theme',
        'Light theme',
      ],
    }
  },
  methods: {
    selectPoint(themeId) {
      this.$emit('select-point', {name: 'themeId', value: themeId})
    }
  }
}
</script>

<style scoped></style>
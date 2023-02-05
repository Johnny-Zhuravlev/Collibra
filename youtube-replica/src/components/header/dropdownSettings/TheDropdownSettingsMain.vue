<template>
  <section class="pb-2 border-b border-gray-400">
    <ul>
      <DropdownSettingsItem
        v-for="item of settingsList.slice(0, 8)"
        :key="item.label"
        :label="item.label"
        :name="item.iconName"
        :has-submenu="item.hasSubmenu"
        @click.stop="selectMenu(item)"
      />
    </ul>
  </section>
  <section class="pt-2">
    <ul>
      <DropdownSettingsItem
        :label="settingsList[8].label"
        :name="settingsList[8].iconName"
        :has-submenu="settingsList[8].hasSubmenu"
        @click.stop="selectMenu(settingsList[8])"
      />
    </ul>
  </section>
</template>

<script>
import DropdownSettingsItem from './DropdownSettingsItem.vue'

export default {
	name: 'TheDropdownSettingsMain',
	components: {
		DropdownSettingsItem,
	},
  props: ['settingsList'],
  emits: ['select-menu'],
  methods: {
    selectMenu(item) {
      if (item.hasSubmenu) {
        this.$emit('select-menu', item)
      }
    }
  }
}
</script>

<style scoped></style>

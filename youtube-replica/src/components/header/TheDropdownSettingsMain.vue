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
  props: ['selectedPoints'],
  emits: ['select-menu', 'select-point'],
	data() {
		return {
			settingsList: [
        {
          id: 'appearance',
          label: 'Appearance: Device theme',
          iconName: 'appearance',
          hasSubmenu: true
        },
        {
          id: 'lang',
          label: 'Language: English',
          iconName: 'lang',
          hasSubmenu: true
        },
        {
          id: 'location',
          label: 'Location: Costa-Rica',
          iconName: 'location',
          hasSubmenu: true
        },
        {
          id: 'settings',
          label: 'Settings',
          iconName: 'settings',
          hasSubmenu: false
        },
        {
          id: 'secutity_data',
          label: 'Security Data',
          iconName: 'security',
          hasSubmenu: false
        },
        {
          id: 'help',
          label: 'Help',
          iconName: 'help',
          hasSubmenu: false
        },
        {
          id: 'feedback',
          label: 'Feedback',
          iconName: 'feedback',
          hasSubmenu: false
        },
        {
          id: 'keyboard_shortcuts',
          label: 'Keyboard shortcuts',
          iconName: 'shortcuts',
          hasSubmenu: false
        },
        {
          id: 'restricted_mode',
          label: 'Restricted Mode: Off',
          iconName: null,
          hasSubmenu: true
        }
      ],
		}
	},
  methods: {
    selectMenu(item) {
      if (item.hasSubmenu) {
        this.$emit('select-menu', item.id)
      }
    }
  }
}
</script>

<style scoped></style>

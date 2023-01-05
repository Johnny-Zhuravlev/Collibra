<template>
  <div
    class="hidden w-48 sm:w-72 py-2 absolute top-9 right-0 bg-white rounded-md shadow-md group-hover:block"
  >
    <section class="pb-2 border-b border-gray-400">
      <ul>
		<DropdownSettingsItem
		  v-for="item of settingsList.slice(0, 8)"
		  :key="item.label"
		  :label="item.label"
		  :name="item.iconName"
		  :has-submenu="item.hasSubmenu"
		/>
      </ul>
    </section>
    <section class="pt-2">
      <ul>
		<DropdownSettingsItem
			:label="settingsList[8].label"
			:has-submenu="settingsList[8].hasSubmenu"
		/>
      </ul>
    </section>
  </div>
</template>

<script>
import DropdownSettingsItem from './DropdownSettingsItem.vue';

export default {
  components: {
    DropdownSettingsItem
  },
  data() {
    return {
	  settingsList: [
		{
		  label: 'Appearance: Device theme',
		  iconName: 'appearance',
		  hasSubmenu: true
		},
		{
		  label: 'Language: English',
		  iconName: 'lang',
		  hasSubmenu: true
		},
		{
		  label: 'Location: Costa-Rica',
		  iconName: 'location',
		  hasSubmenu: true
		},
		{
		  label: 'Settings',
		  iconName: 'settings',
		  hasSubmenu: false
		},
		{
		  label: 'Security Data',
		  iconName: 'security',
		  hasSubmenu: false
		},
		{
		  label: 'Help',
		  iconName: 'help',
		  hasSubmenu: false
		},
		{
		  label: 'Feedback',
		  iconName: 'feedback',
		  hasSubmenu: false
		},
		{
		  label: 'Keyboard shortcuts',
		  iconName: 'shortcuts',
		  hasSubmenu: false
		},
		{
		  label: 'Restricted Mode: Off',
		  iconName: null,
		  hasSubmenu: true
		},
	  ]
    }
  }
}
</script>

<style scoped></style>

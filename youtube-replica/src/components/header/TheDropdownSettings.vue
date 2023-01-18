<template>
  <div class="relative">
    <BaseTooltip text="Settings">
      <!-- Btn-trigger for opening settings list -->
      <button
        @click="isOpen = !isOpen"
        class="flex p-1 sm:p-2 focus:outline-none"
      >
        <BaseIcon name="settingsDots" class="w-5 h-5" />
      </button>
    </BaseTooltip>

    <!-- Settings list -->
    <transition
      enter-from-class="transition opacity-0 scale-90"
      enter-active-class="transition ease-out duration-200"
      enter-to-class="transform opacity-100 scale-100"
      leave-from-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-100"
      leave-to-class="transform opacity-0 scale-90"
    >
      <div
        v-show="isOpen"
        @keyup.esc="isOpen = false"
        ref="dropdown"
        tabindex="-1"
        class="w-48 sm:w-72 py-2 absolute top-9 right-0 bg-white rounded-md shadow-md focus:outline-none"
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
    </transition>
  </div>
</template>

<script>
import BaseTooltip from '../BaseTooltip.vue'
import BaseIcon from '../BaseIcon.vue'
import DropdownSettingsItem from './DropdownSettingsItem.vue'

export default {
  mounted () {
    window.addEventListener('click', event => {
      if (!this.$el.contains(event.target)) {
        this.isOpen = false
      }
    })
  },
  components: {
	BaseTooltip,
    BaseIcon,
    DropdownSettingsItem
  },
  data () {
    return {
      isOpen: false,
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
        }
      ]
    }
  },
  watch: {
    isOpen () {
      this.$nextTick(() => this.isOpen && this.$refs.dropdown.focus())
    }
  }
}
</script>

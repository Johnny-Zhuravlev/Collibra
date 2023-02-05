<template>
  <div class="relative">
    <BaseTooltip text="Settings">
      <!-- Btn-trigger for opening settings list -->
      <button
        @click="toggle"
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
        @keyup.esc="close"
        ref="dropdown"
        tabindex="-1"
        :class="classes"
      >
        <component
          v-if="selectedMenu"
          :is="menu"
          :selected-points="selectedPoints"
          @select-point="selectPoint"
          @close="closeMenu"
        />
        <TheDropdownSettingsMain
          v-else
          :settings-list="settingsList"
          @select-menu="selectMenu"
        />
      </div>
    </transition>
  </div>
</template>

<script>
import BaseTooltip from '../../BaseTooltip.vue'
import BaseIcon from '../../BaseIcon.vue'
import TheDropdownSettingsMain from './TheDropdownSettingsMain.vue'
import TheDropdownSettingsAppearance from './TheDropdownSettingsAppearance.vue'
import TheDropdownSettingsLang from './TheDropdownSettingsLang.vue'
import TheDropdownSettingsLocation from './TheDropdownSettingsLocation.vue'
import TheDropdownSettingsRestrictedMode from './TheDropdownSettingsRestrictedMode.vue'

export default {
  mounted () {
    window.addEventListener('click', event => {
      if (!this.$el.contains(event.target)) {
        this.close()
      }
    })
  },
  emits: ['select-menu'],
  components: {
	  BaseTooltip,
    BaseIcon,
    TheDropdownSettingsMain,
    TheDropdownSettingsAppearance,
    TheDropdownSettingsLang,
    TheDropdownSettingsLocation,
    TheDropdownSettingsRestrictedMode,
  },
  data () {
    return {
      isOpen: false,
      selectedMenu: null,
      selectedPoints: {
        theme: {
          id: 0,
          txt: 'Device theme'
        },
        lang: {
          id: 0,
          txt: 'Afrikaans'
        },
        location: {
          id: 0,
          txt: 'Costa-Rica'
        },
        restrictedMode: {
          enabled: false,
          txt: 'Off'
        }
      },
      classes: [
        'w-48',
        'sm:w-72',
        'py-2',
        'absolute',
        'top-9',
        'right-0',
        'bg-white r',
        'ounded-md',
        'shadow-md',
        'focus:outline-none',
        'z-10'
      ]
    }
  },
  watch: {
    isOpen () {
      this.$nextTick(() => this.isOpen && this.$refs.dropdown.focus())
    }
  },
  methods: {
    toggle() {
      this.isOpen ? this.close() : this.open()
    },
    open() {
      this.isOpen = true
    },
    close() {
      this.isOpen = false

      setTimeout(() => this.closeMenu, 100)
    },
    closeMenu() {
      this.selectMenu(null)
    },
    selectMenu(menuName) {
      this.selectedMenu = menuName
    },
    selectPoint(point) {
      this.selectedPoints[point.name] = point.value
    }
  },
  computed: {
    menu() {
      const innerMenuNames = {
        appearance: 'TheDropdownSettingsAppearance',
        lang: 'TheDropdownSettingsLang',
        location: 'TheDropdownSettingsLocation',
        restricted_mode: 'TheDropdownSettingsRestrictedMode',
      }

      return this.selectedMenu ? innerMenuNames[this.selectedMenu.id] : null
    },
    settingsList() {
      return [
        {
          id: 'appearance',
          label: 'Appearance: ' + this.selectedPoints.theme.txt,
          iconName: 'appearance',
          hasSubmenu: true
        },
        {
          id: 'lang',
          label: 'Language: ' + this.selectedPoints.lang.txt,
          iconName: 'lang',
          hasSubmenu: true
        },
        {
          id: 'location',
          label: 'Location: ' + this.selectedPoints.location.txt,
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
          label: 'Restricted Mode: ' + this.selectedPoints.restrictedMode.txt,
          iconName: null,
          hasSubmenu: true
        }
      ]
    },
  }
}
</script>

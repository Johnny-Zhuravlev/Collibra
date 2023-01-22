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
          :is="menu"
          @select-menu="showMenu"
          @select-point="selectPoint"
          :selected-points="selectedPoints"
        />
      </div>
    </transition>
  </div>
</template>

<script>
import BaseTooltip from '../BaseTooltip.vue'
import BaseIcon from '../BaseIcon.vue'
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
  emits: ['select-menu', 'select-point'],
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
      selectedMenu: 'main',
      selectedPoints: {
        themeId: 2,
        langId: 5,
        locationId: 0,
        restrictedMode: false,
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

      setTimeout(() => this.selectedMenu = 'main', 100)
    },
    showMenu(selectedMenu) {
      this.selectedMenu = selectedMenu
    },
    selectPoint(point) {
      this.selectedPoints[point.name] = point.value
    }
  },
  computed: {
    menu() {
      const menuNames = {
        main: 'TheDropdownSettingsMain',
        appearance: 'TheDropdownSettingsAppearance',
        lang: 'TheDropdownSettingsLang',
        location: 'TheDropdownSettingsLocation',
        restricted_mode: 'TheDropdownSettingsRestrictedMode',
      }

      return menuNames[this.selectedMenu]
    }
  }
}
</script>

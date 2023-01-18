<template>
  <header class="flex justify-between w-full fixed z-30">
    <div class="flex items-center lg:w-1/5 md:pl-4 pl-2">
      <button
        @click="$emit('toggleSidebar')"
        class="sm:pl-2 md:pr-6 pr-2 focus:outline-none"
      >
        <BaseIcon name="menu" />
      </button>
      <LogoMain />
    </div>
    <div
      class="hidden sm:flex items-center sm:flex-1 lg:w-1/2 max-w-screen-md p-2.5 sm:px-6 md:px-12 lg:px-0"
    >
      <TheSearch />
      <TheVoiceSearchBtn />
    </div>
    <div
      class="flex items-center justify-end py-2 px-2 space-x-1 sm:space-x-2 md:space-x-3 lg:space-x-5 lg:w-1/4"
    >
      <TheMobileVoiceSearchBtn />
      <TheMobileSearchBtn />

      <!-- List options of app -->
      <TheDropdownOptions />
      <!-- Settings Dropdown list -->
      <TheDropdownSettings />

      <BtnLogin />
    </div>
  </header>
</template>

<script>
import LogoMain from './header/LogoMain.vue'
import BaseIcon from './BaseIcon.vue'
import TheSearch from './header/TheSearch.vue'
import TheVoiceSearchBtn from './header/TheVoiceSearchBtn.vue'
import TheMobileVoiceSearchBtn from './header/TheMobileVoiceSearchBtn.vue'
import TheMobileSearchBtn from './header/TheMobileSearchBtn.vue'
import TheDropdownOptions from './header/TheDropdownOptions.vue'
import TheDropdownSettings from './header/TheDropdownSettings.vue'
import BtnLogin from './header/BtnLogin.vue'

export default {
  components: {
    LogoMain,
    BaseIcon,
    TheSearch,
    TheVoiceSearchBtn,
    TheMobileVoiceSearchBtn,
    TheMobileSearchBtn,
    TheDropdownOptions,
    TheDropdownSettings,
    BtnLogin,
},
  emits: {
    toggleSidebar: null
  }
}
</script>

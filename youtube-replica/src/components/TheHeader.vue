<template>
  <header class="flex justify-between w-full fixed z-30">
    <div class="flex items-center lg:w-1/5 md:pl-4 pl-2">
      <button class="sm:pl-2 md:pr-6 pr-2 focus:outline-none">
        <BaseIcon name="menu" />
      </button>
      <LogoMain />
    </div>
    <div
      class="hidden sm:flex items-center sm:flex-1 lg:w-1/2 max-w-screen-md p-2.5 sm:px-6 md:px-12 lg:px-0"
    >
      <TheSearch />
      <button class="ml-2 lg:ml-4 p-2 bg-gray-200 rounded-full hover:bg-gray-300 focus:outline-none">
        <BaseIcon name="microphone" class="w-5 h-5" />
      </button>
    </div>
    <div
      class="flex items-center justify-end py-2 px-2 space-x-1 sm:space-x-2 md:space-x-3 lg:space-x-5 lg:w-1/4"
    >
      <button class="sm:hidden p-1 sm:p-2 focus:outline-none">
        <BaseIcon name="microphone" class="w-5 h-5" />
      </button>
      <button class="sm:hidden p-1 sm:p-2 focus:outline-none">
        <BaseIcon name="search" class="w-5 h-5" />
      </button>
      <!-- Btn-trigger for YouTube options list -->
      <button class="flex p-1 sm:p-2 relative group focus:outline-none">
        <BaseIcon name="options" class="w-5 h-5" />
        <!-- List options of app -->
        <TheDropdownOptions />
      </button>
      <!-- Btn trigger for settings -->
      <button class="flex p-1 sm:p-2 relative group focus:outline-none">
        <BaseIcon name="settingsDots" class="w-5 h-5" />
        <!-- Settings Dropdown list -->
        <TheDropdownSettings />
      </button>

      <BtnLogin />
    </div>
  </header>
</template>

<script>
import LogoMain from './header/LogoMain.vue'
import BaseIcon from './BaseIcon.vue'
import TheSearch from './header/TheSearch.vue'
import TheDropdownOptions from './header/TheDropdownOptions.vue'
import TheDropdownSettings from './header/TheDropdownSettings.vue'
import BtnLogin from './header/BtnLogin.vue'

export default {
  components: {
    LogoMain,
    BaseIcon,
    TheSearch,
    TheDropdownOptions,
    TheDropdownSettings,
    BtnLogin
  }
}
</script>

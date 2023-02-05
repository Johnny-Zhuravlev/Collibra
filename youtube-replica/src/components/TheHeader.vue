<template>
  <header :class="headerClasses">
    <div :class="headerRightClasses">
      <button
        @click="$emit('toggleSidebar')"
        class="sm:pl-2 md:pr-6 pr-2 focus:outline-none"
      >
        <BaseIcon name="menu" />
      </button>
      <LogoMain />
    </div>
    <transition
      enter-from-class="transition opacity-0 scale-60"
      enter-active-class="transition ease-out duration-500"
      enter-to-class="transform opacity-100 scale-100"
      leave-from-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-400"
      leave-to-class="transform opacity-0 scale-60"
    >
      <TheMobileSearch
        v-if="isMobileSearchShown"
        :search-query="searchQuery"
        @update-search-query="searchQuery = $event"
        @close="isMobileSearchActive = false"
        @keyup.esc="isMobileSearchActive = false"
        tabindex="-1"
        ref="mobileSearch"
      />
      <TheMainSearch
        v-else
        :search-query="searchQuery"
        @update-search-query="searchQuery = $event"
      />
    </transition>
    <div :class="headerLeftClasses"
    >
      <TheMobileVoiceSearchBtn />
      <TheMobileSearchBtn
        @click.stop="(isMobileSearchActive = true), this.$refs.mobileSearch.focus()"
      />

      <!-- List options of app -->
      <TheDropdownOptions />
      <!-- Settings Dropdown list -->
      <TheDropdownSettings />

      <BtnLogin />
    </div>
  </header>
</template>

<script>
import LogoMain from "./header/LogoMain.vue";
import BaseIcon from "./BaseIcon.vue";
import TheMobileSearch from "./header/TheMobileSearch.vue";
import TheMainSearch from "./header/TheMainSearch.vue";
import TheMobileVoiceSearchBtn from "./header/TheMobileVoiceSearchBtn.vue";
import TheMobileSearchBtn from "./header/TheMobileSearchBtn.vue";
import TheDropdownOptions from "./header/TheDropdownOptions.vue";
import TheDropdownSettings from "./header/TheDropdownSettings.vue";
import BtnLogin from "./header/BtnLogin.vue";

export default {
  mounted() {
    window.addEventListener("resize", this.onResize);
    this.onResize();
  },
  components: {
    LogoMain,
    BaseIcon,
    TheMobileSearch,
    TheMainSearch,
    TheMobileVoiceSearchBtn,
    TheMobileSearchBtn,
    TheDropdownOptions,
    TheDropdownSettings,
    BtnLogin,
  },
  emits: {
    toggleSidebar: null,
  },
  data() {
    return {
      searchQuery: '',
      isSmallScreen: false,
      isMobileSearchActive: false,
      headerClasses: [
        'flex',
        'justify-between',
        'w-full',
        'fixed',
        'z-50'
      ],
      headerRightClasses: [
        'flex',
        'items-center',
        'lg:w-1/5',
        'md:pl-4',
        'pl-2'
      ],
      headerLeftClasses: [
        'flex',
        'items-center',
        'justify-end',
        'py-2',
        'px-2',
        'space-x-1',
        'sm:space-x-2',
        'md:space-x-3',
        'lg:space-x-5',
        'lg:w-1/4'
      ]
    }
  },
  methods: {
    onResize() {
      if (window.innerWidth < 640) {
        this.isSmallScreen = true;
      } else {
        this.isSmallScreen = false;
        this.isMobileSearchActive = false;
      }
    },
  },
  computed: {
    isMobileSearchShown() {
      return this.isSmallScreen && this.isMobileSearchActive;
    },
  },
};
</script>

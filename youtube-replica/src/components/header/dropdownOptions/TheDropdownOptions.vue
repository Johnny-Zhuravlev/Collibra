<template>
  <div class="relative">
    <BaseTooltip text="YouTube Apps">
      <!-- Btn-trigger for opening options list -->
      <button
        class="flex p-1 sm:p-2 focus:outline-none"
        @click="isOpen = !isOpen"
      >
        <BaseIcon name="options" class="w-5 h-5" />
      </button>
    </BaseTooltip>

    <!-- List options of app -->
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
        :class="dropdownClasses"
      >
        <section class="pb-2 border-b border-gray-400">
          <ul>
            <DropdownOptionsItem name="youtubeTV" label="YouTube TV" />
          </ul>
        </section>
        <section class="py-2 border-b border-gray-400">
          <ul>
            <DropdownOptionsItem name="youtubeMusic" label="YouTube Music" />
            <DropdownOptionsItem name="youtubeKids" label="YouTube Kids" />
          </ul>
        </section>
        <section class="pt-2">
          <ul>
            <DropdownOptionsItem name="creators" label="Creator Academy" />
            <DropdownOptionsItem name="artists" label="YouTube for Artists" />
          </ul>
        </section>
      </div>
    </transition>
  </div>
</template>

<script>
import BaseTooltip from "../../BaseTooltip.vue";
import BaseIcon from '../../BaseIcon.vue'
import DropdownOptionsItem from './DropdownOptionsItem.vue';

export default {
  mounted() {
    window.addEventListener('click', event => {
      if (!this.$el.contains(event.target)) {
        this.isOpen = false;
      }
    })
  },
  components: {
    BaseTooltip,
    BaseIcon,
    DropdownOptionsItem
  },
  data() {
    return {
      isOpen: false
    }
  },
  watch: {
    isOpen() {
      this.$nextTick(() => this.isOpen && this.$refs.dropdown.focus())
    }
  },
  computed: {
    dropdownClasses() {
      return [
        'w-48',
        'sm:w-60',
        'py-2 absolute',
        'top-9',
        'right-0',
        'sm:-left-2',
        'bg-white',
        'rounded-md',
        'shadow-md',
        'focus:outline-none',
        'z-10'
      ]
    }
  }
}
</script>

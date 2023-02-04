<template>
  <li>
    <a
      @click.prevent
      href="#"
      :class="classes"
    >
      <span v-if="isIconShown" class="flex mr-3 text-gray-500">
        <BaseIcon
          :name="iconName"
          class="w-4 sm:w-5 h-4 sm:h-5"
        />
      </span>
      <span
        class="inline-block flex-1 mr-auto cursor-pointer"
        :class="[{'ml-8': name && !isIconShown}, 'truncate']"
      >
        {{ label }}
      </span>
      <span v-if="hasSubmenu" class="flex text-gray-500">
        <BaseIcon name="chevronRight" class="w-4 sm:w-5 h-4 sm:h-5" />
      </span>
    </a>
  </li>
</template>

<script>
import BaseIcon from '../BaseIcon.vue'

export default {
  props: {
    label: String,
    active: Boolean,
    hasSubmenu: Boolean,
    name: {
      type: String,
      default: 'check'
    }
  },
  components: {
    BaseIcon
  },
  data() {
    return {
      classes: [
        'flex',
        'items-center',
        'px-3',
        'py-2',
        'text-sm',
        'hover:bg-gray-100'
      ]
    }
  },
  computed: {
    isIconShown() {
      return this.active || this.name !== 'check' && this.name !== null
    },
    iconName() {
      return this.active ? 'check' : this.name
    }
  }
}
</script>

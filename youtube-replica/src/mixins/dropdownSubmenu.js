import DropdownSettingsHeader from '../components/header/DropdownSettingsHeader.vue'
import DropdownSettingsItem from '../components/header/DropdownSettingsItem.vue'

export default {
  components: {
    DropdownSettingsHeader,
    DropdownSettingsItem,
  },

  props: ['selectedPoints'],

  emits: ['close', 'select-point'],

  data() {
    return {
        pointName: null
    }
  },

  methods: {
    selectPoint(point) {
      this.$emit('select-point', {name: this.pointName, value: point})
    }
  }
}
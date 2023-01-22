<template>
  <DropdownSettingsHeader
    title="Choose your location"
    @back="$emit('select-menu', 'main')"
  />

  <section class="py-2">
    <ul class="max-h-96 overflow-auto px-3">
      <DropdownSettingsItem
        v-for="(location, locationId) of locations"
        :key="locationId"
        :label="location"
        :active="locationId === selectedPoints.locationId"
        @click="selectPoint(locationId)"
      />
    </ul>
  </section>
</template>

<script>
import DropdownSettingsHeader from './DropdownSettingsHeader.vue'
import DropdownSettingsItem from './DropdownSettingsItem.vue'

export default {
  name: 'TheDropdownSettingsLocation',
  components: {
    DropdownSettingsHeader,
    DropdownSettingsItem,
  },
  props: ['selectedPoints'],
  emits: ['select-menu', 'select-point'],
  data() {
    return {
      locations: [
        'Costa-Rica',
        'Egypt',
        'Indonesia',
        'Malaysia',
        'Catalã',
        'Čeština',
        'United States',
        'England',
        'English (India)',
        'French',
        'Deutsch',
        'Español',
        'Mexica',
        'Popua New Guinea',
        'Brazil',
        'Français',
        'Italiano',
        'Norsk',
        'Polski',
        'Português',
        'Русский',
        'Қазақ Тiлi',
        'Украïньска',
        'Српски',
      ],
    }
  },
  methods: {
    selectPoint(locationId) {
      this.$emit('select-point', {name: 'locationId', value: locationId})
    }
  }
}
</script>

<style scoped></style>
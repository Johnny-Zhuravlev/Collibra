<template>
  <DropdownSettingsHeader
    title="Choose your location"
    @back="$emit('close')"
  />

  <section class="py-2">
    <ul class="max-h-96 overflow-auto px-3">
      <DropdownSettingsItem
        v-for="(location, locationId) of locations"
        :key="locationId"
        :label="location"
        :active="locationId === selectedPoints.location.id"
        @click="selectPoint({id: locationId, txt: location})"
      />
    </ul>
  </section>
</template>

<script>
import dropdownSubmenu from '../../../mixins/dropdownSubmenu';

export default {
  name: 'TheDropdownSettingsLocation',
  mixins: [dropdownSubmenu],
  data() {
    return {
      pointName: 'location',
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
}
</script>

<style scoped></style>
<template>
  <DropdownSettingsHeader
    title="Choose your language"
    @back="$emit('select-menu', 'main')"
  />

  <section class="py-2">
    <ul class="max-h-96 overflow-auto px-3">
      <DropdownSettingsItem
        v-for="(lang, langId) of langs"
        :key="langId"
        :label="lang"
        :active="langId === selectedPoints.langId"
        @click="selectPoint(langId)"
      />
    </ul>
  </section>
</template>

<script>
import DropdownSettingsHeader from './DropdownSettingsHeader.vue'
import DropdownSettingsItem from './DropdownSettingsItem.vue'

export default {
  name: 'TheDropdownSettingsLang',
  components: {
    DropdownSettingsHeader,
    DropdownSettingsItem,
  },
  props: ['selectedPoints'],
  emits: ['select-menu', 'select-point'],
  data() {
    return {
      langs: [
        'Afrikaans',
        'Bahasa Indonesia',
        'Bahasa Malaysia',
        'Catalã',
        'Čeština',
        'English (UK)',
        'English (US)',
        'English (India)',
        'French',
        'Deutsch',
        'Español (España)',
        'Español (Latinoamérica)',
        'Español (US)',
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
    selectPoint(langId) {
      this.$emit('select-point', {name: 'langId', value: langId})
    }
  }
}
</script>

<style scoped></style>
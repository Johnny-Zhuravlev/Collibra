<template>
  <DropdownSettingsHeader
    title="Choose your language"
    @back="$emit('close')"
  />

  <section class="py-2">
    <ul class="max-h-96 overflow-auto px-3">
      <DropdownSettingsItem
        v-for="(lang, langId) of langs"
        :key="langId"
        :label="lang"
        :active="langId === selectedPoints.lang.id"
        @click="selectPoint({id: langId, txt: lang})"
      />
    </ul>
  </section>
</template>

<script>
import dropdownSubmenu from '../../mixins/dropdownSubmenu';

export default {
  name: 'TheDropdownSettingsLang',
  mixins: [dropdownSubmenu],
  data() {
    return {
      pointName: 'lang',
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
}
</script>

<style scoped></style>
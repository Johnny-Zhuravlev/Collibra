<template>
  <div class="flex w-full h-full">
    <div class="relative w-full flex">
      <TheSearchInput
        v-model:query="query"
        @update:query="updateSearchResults"
        @change-state="toggleSearchPrompts"
        @keyup.up="handlePrevSearchResult"
        @keydown.down="handleNextSearchResult"
        @keydown.up.prevent
        @enter="selectSearchResult"
      />
      <TheSearchPrompts
        v-show="isSearchPromptsVisible && searchResults.length"
        :prompts="searchResults"
        :active-result-id="activeSearchResultId"
        @search-result-mouse-enter="activeSearchResultId = $event"
        @search-result-mouse-leave="activeSearchResultId = null"
        @search-result-click="selectSearchResult"
      />
    </div>
    <TheSearchBtn @click.stop="selectSearchResult" />
  </div>
</template>

<script>
import TheSearchInput from './TheSearchInput.vue';
import TheSearchPrompts from './TheSearchPrompts.vue';
import TheSearchBtn from './TheSearchBtn.vue';

 export default {
  mounted() {
    window.addEventListener('click', event => {
      if (!this.$el.contains(event.target)) {
        this.onClickAndResize()
      }
    })
    window.addEventListener('resize', this.onClickAndResize)
  },
  components: {
    TheSearchInput,
    TheSearchPrompts,
    TheSearchBtn,
  },
  props: ['searchQuery'],
  emits: ['update-search-query'],
  data() {
    return {
      searchResults: [],
      query: this.searchQuery,
      activeQuery: this.searchQuery,
      isSearchPromptsVisible: false,
      activeSearchResultId: null,
      searchResults: [],
      keywords: [
        'new york giants',
        'new york alicia keys',
        'new york giants nfl league',
        'new york giants vs washington football',
        'new york best jobs',
        'new york song',
        'new york new york frank sinatra',
        'new york jets',
        'new york state of mind',
        'new york accent',
        'new york skyscrapers',
        'new york history',
        'new york bridges',
        'new york nicks',
        'new york hostels',
        'new york fotos',
        'new york city'
      ]
    }
  },
  computed: {
    trimmedQuery() {
      return this.query.replace(/\s+/g, ' ').trim()
    }
  },
  watch: {
    query(query) {
      this.$emit('update-search-query', query)
    }
  },
  methods: {
    updateSearchResults() {
      this.activeSearchResultId = null
      this.activeQuery = this.query

      if (this.query === '') {
        this.searchResults = []
      } else {
        this.searchResults =  this.keywords.filter(prompt => {
          return prompt.includes(this.trimmedQuery)
        })
      }
    },
    toggleSearchPrompts(isSearchInputActive) {
      this.isSearchPromptsVisible = isSearchInputActive
    },
    onClickAndResize() {
      this.toggleSearchPrompts(false)
    },
    handlePrevSearchResult() {
      if (this.activeSearchResultId === null) {
        this.activeSearchResultId = this.keywords.length
      } if (this.activeSearchResultId === 0) {
        this.activeSearchResultId = null
      } else {
        this.activeSearchResultId--
      }

      this.updateQueryWithSearchResults()
    },
    handleNextSearchResult() {
      if (this.activeSearchResultId === null) {
        this.activeSearchResultId = 0
      } else if (this.activeSearchResultId + 1 === this.keywords.length) {
        this.activeSearchResultId = null
      } else {
        this.activeSearchResultId++
      }

      this.updateQueryWithSearchResults()
    },
    updateQueryWithSearchResults() {
      const hasActiveSearchResult = this.activeSearchResultId !== null

      this.query = hasActiveSearchResult
        ? this.keywords[this.activeSearchResultId]
        : this.activeQuery
    },
    selectSearchResult() {
      this.query = this.activeSearchResultId === null
        ? this.query
        : this.searchResults[this.activeSearchResultId]

      this.toggleSearchPrompts(false)
      this.updateSearchResults()
    },
  }
}
</script>

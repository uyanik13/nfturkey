<template>
  <div class="relative">
    <div class="relative w-full">
      <input
        type="text"
        placeholder="Search items, collections, and accounts"
        class="z-30 w-full text-sm rounded-lg border-1 border-gray-400 px-4 pl-10 py-4 focus:outline-none focus:ring-1 focus:indigo-500"
        v-model="query"
        @blur="searchResultsVisible = false"
        @focus="searchResultsVisible = true"
        @keydown.esc="searchResultsVisible = false"
        @input="softReset"
        ref="search"
        @keyup="performSearch"
        @keydown.up.prevent="highlightPrevious"
        @keydown.down.prevent="highlightNext"
        @keydown.enter="gotoLink"
      />

      <div class="absolute top-0 ml-3" style="top: 16px">
        <svg
          fill="currentColor"
          class="text-gray-500 h-5 w-5"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path
            class="heroicon-ui"
            d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"
          ></path>
        </svg>
      </div>

      <div
        v-if="query.length > 0"
        class="absolute top-0 right-0 mr-5 text-5 cursor-pointer text-gray-600 hover:text-gray-800"
        style="top: 2px"
        @click="reset"
      >
        &times;
      </div>
    </div>

    <transition name="fade">
      <div
        v-if="query.length > 0 && searchResultsVisible"
        class="absolute normal-case bg-white border left-0 right-0 w-108 text-left mb-4 mt-2 rounded-lg shadow overflow-hidden z-10 overflow-y-auto"
        style="max-height: 32rem"
      >
        <div class="flex flex-col" ref="results">
          <a
            v-for="(item, index) in searchResults"
            :key="index"
            :href="item.slug"
            @mousedown.prevent="searchResultsVisible = true"
            class="border-b border-gray-400 text-xl cursor-pointer p-4 hover:bg-blue-100"
            :class="{ 'bg-blue-100': index === highlightedIndex }"
          >
            {{ item.title }}

            <div class="flex">
              <img class="w-24 h-16 mx-1" :src="item.image" />
              <div class="grid">
                <span class="mx-1 font-normal text-sm my-1">{{
                  item.name
                }}</span>
                <span class="flex mx-2">
                  <p class="text-sm text-gray-800 mx-1">{{ item.price }} TL</p>
                </span>
              </div>
            </div>
          </a>

          <div
            v-if="searchResults.length === 0"
            class="font-normal w-full border-b cursor-pointer p-4 shadow-lg"
          >
            <p class="my-0">
              No results for '<strong>{{ query }}</strong
              >'
            </p>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      query: "",
      showHistory: false,
      searchResultsVisible: false,
      products: [],
      searchResults: [],
      highlightedIndex: 0,
      searchHistory: [
        {
          id: 1,
          title: "Calisma Masasi",
          slug: "giris-yap",
        },
        {
          id: 2,
          title: "Macbook Pro",
          slug: "my-network",
        },
        {
          id: 3,
          title: "Thunderbolt Type C",
          slug: "sepetim",
        },
      ],
    };
  },
  created() {
    this.$axios.get("/data/index.json").then((response) => {
      this.products = response.data;
    });
  },
  methods: {
    reset() {
      this.query = "";
      this.highlightedIndex = 0;
    },
    softReset() {
      this.searchResultsVisible = true;
      this.highlightedIndex = 0;
    },
    focusSearch(e) {
      if (e.key === "/") {
        this.$refs.search.focus();
      }
    },
    performSearch() {
      this.searchResults = this.products.filter((item) =>
        item.name.toLowerCase().includes(this.query.toLowerCase())
      );
    },
    highlightPrevious() {
      if (this.highlightedIndex > 0) {
        this.highlightedIndex = this.highlightedIndex - 1;
        this.scrollIntoView();
      }
    },
    highlightNext() {
      if (this.highlightedIndex < this.searchResults.length - 1) {
        this.highlightedIndex = this.highlightedIndex + 1;
        this.scrollIntoView();
      }
    },
    scrollIntoView() {
      this.$refs.results.children[this.highlightedIndex].scrollIntoView({
        block: "nearest",
      });
    },
    gotoLink() {
      if (this.searchResults[this.highlightedIndex]) {
        window.location = this.searchResults[this.highlightedIndex].item.slug;
      }
    },
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>


<template>
  <div class="font-raleway w-full min-h-screen">
    <div class="flex space-x-2 py-2">
      <div class="my-1 w-6/12">
        <div class="relative w-full my-2">
          <input
            type="text"
            placeholder="Filter"
            class="z-30 w-full text-sm rounded-lg border-1 border-gray-400 px-72 pl-10 py-4 focus:outline-none focus:ring-1 focus:indigo-500"
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
        </div>
      </div>
      <div class="my-1 w-3/12">
        <t-select
          v-model="selectedSearchItem"
          :options="searchItems"
          class="py-4 mt-2"
        ></t-select>
      </div>
      <div class="my-1 w-3/12">
        <t-select
          v-model="selectedFilter"
          :options="filterItems"
          class="py-4 mt-2"
        ></t-select>
      </div>
    </div>
    <div class="flex flex-col">
      <div
        class="flex flex-col justify-center items-center border-1 border-gray-300 rounded-lg h-64 my-2"
      >
        <p class="text-7 font-bold">No items to display</p>
        <button
          class="mx-8 my-2 transition focus:outline-none font-bold duration-500 ease-in-out bg-primary hover:bg-secondary text-white text-5 py-3 px-12 rounded-lg"
        >
          Back to All Items
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "@nuxtjs/composition-api";

export default defineComponent({
  head: {},
  props: {},
  setup() {
    const selectedSearchItem = ref(0);
    const searchItems = ref([
      { value: 0, text: "Single Items" },
      { value: 1, text: "Bundles" },
      { value: 2, text: "All Items" },
    ]);
    const selectedFilter = ref(0);
    const filterItems = ref([
      { value: 0, text: "Recently Created" },
      { value: 1, text: "Recently Listed" },
      { value: 2, text: "Recently Sold" },
      { value: 3, text: "Recently Received" },
      { value: 4, text: "Ending Soon" },
      { value: 5, text: "Price:  Hight to Low" },
      { value: 6, text: "Price:  Low to High" },
      { value: 7, text: "Price:  Low to High" },
      { value: 8, text: "Highest Sale" },
      { value: 9, text: "Most Viewed" },
      { value: 10, text: "Most Favorited" },
      { value: 11, text: "Oldest" },
    ]);

    return { selectedSearchItem, searchItems, selectedFilter, filterItems };
  },
});
</script>


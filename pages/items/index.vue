<template>
  <div class="font-raleway bg-white">
    <client-only>
      <div class="flex lg:w-full">
        <div class="lg:w-3/12 border-1 border-gray-400">
          <status-accordion />
          <price-accordion />
          <collection-accordion />
          <chains-accordion />
          <on-sale-in-accordion />
        </div>
        <div class="lg:w-9/12">
          <div class="w-full px-4 border-1 border-gray-400">
            <ul
              class="font-bold overflow-x-scroll flex items-center mt-8 lg:mt-0"
            >
              <li
                class="mx-2 lg:mx-6 lg:my-3"
                v-for="item in categories"
                :key="item.id"
              >
                <button
                  @click="changeCategory(item)"
                  :class="
                    selectedCategory == item.slug
                      ? `bg-primary`
                      : 'bg-secondary '
                  "
                  class="focus:outline-none font-bold text-white py-2 px-4 rounded-lg whitespace-nowrap"
                >
                  <p>
                    {{ item.title }}
                  </p>
                </button>
              </li>
            </ul>
          </div>

          <div class="flex px-8 py-8 justify-between">
            <div class="w-1/2 mt-4">
              <p>1,471,597 results</p>
            </div>
            <div class="flex w-1/2 space-x-2">
              <div class="my-1 w-6/12">
                <t-select
                  v-model="selectedSearchItem"
                  :options="searchItems"
                  class="py-4 mt-2"
                ></t-select>
              </div>
              <div class="my-1 w-6/12">
                <t-select
                  v-model="selectedFilter"
                  :options="filterItems"
                  class="py-4 mt-2"
                ></t-select>
              </div>
            </div>
          </div>

          <div class="flex flex-col mx-2">
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
          <div class="flex flex-wrap">
            <div
              class="flex justify-center items-center my-2 w-1/3"
              v-for="item in items"
              :key="item.id"
            >
              <div
                class="border-1 border-gray-400 rounded rounded-lg overflow-hidden shadow bg-white no-underline px-3"
              >
                <div class="flex justify-end py-4">
                  <button @click="true">
                    <fa
                      v-tooltip="'Favorite'"
                      :icon="['fas', 'heart']"
                      class="text-5 text-gray-500 hover:text-red-500"
                    />
                    {{ item.favoritesCount }}
                  </button>
                </div>
                <img :src="item.image" class="object-contain w-80 h-80" />

                <div v-if="item.itemId" class="text-center px-3 pb-3 pt-2">
                  <div class="flex justify-between items-center">
                    <p class="ml-1 mt-1 text-3.5 font-light text-gray-500">
                      {{ item.name }}
                    </p>
                    <p class="mt-1 text-3.5 font-light text-gray-500">Price</p>
                  </div>
                  <div class="flex justify-between items-center">
                    <p class="ml-1 mt-1 text-4 font-bold text-gray-900">
                      {{ item.title }}
                    </p>
                    <p class="mt-1 text-4 font-bold text-gray-900">
                      {{ item.price }}
                    </p>
                  </div>
                  <div
                    class="flex justify-between items-center"
                    v-if="item.endDate"
                  >
                    <p class="ml-1 text-4 font-bold text-gray-800">Left</p>
                    <p class="mt-1 text-4 font-normal text-gray-600">
                      <countdown :date="item.endDate" />
                    </p>
                  </div>
                  <div
                    class="flex justify-between items-center py-3"
                    v-else
                  ></div>
                </div>
                <div v-else class="text-center px-3 pb-3 pt-2">
                  <div class="flex justify-between items-center">
                    <p class="ml-1 mt-1 text-4 font-bold text-gray-800">
                      {{ item.name }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </client-only>
  </div>
</template>

<script>
import {
  defineComponent,
  useMeta,
  computed,
  ref,
} from "@nuxtjs/composition-api";

import StatusAccordion from "@/components/account/status-accordion.vue";
import PriceAccordion from "@/components/account/price-accordion.vue";
import CollectionAccordion from "@/components/account/collection-accordion.vue";
import ChainsAccordion from "@/components/account/chains-accordion.vue";
import OnSaleInAccordion from "@/components/account/on-sale-in-accordion.vue";
import WalletItems from "@/components/account/wallet-items.vue";
import ProfileHeader from "@/components/account/profile-header.vue";
import Countdown from "@/components/widgets/countdown.vue";
export default defineComponent({
  layout: "home",
  name: "rankings",
  head: {},
  components: {
    StatusAccordion,
    PriceAccordion,
    CollectionAccordion,
    ChainsAccordion,
    OnSaleInAccordion,
    WalletItems,
    ProfileHeader,
    Countdown,
  },
  setup() {
    const selectedCategory = ref("all");
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

    const categories = [
      {
        id: 1,
        title: "All NFTs",
        slug: "all",
        icon: null,
        submenu: [],
        featured: null,
      },
      {
        id: 2,
        title: "New",
        icon: null,
        slug: "new",
        submenu: [],
        featured: null,
      },
      {
        id: 3,
        title: "Art",
        icon: null,
        slug: "art",
        submenu: [],
        featured: null,
      },
      {
        id: 4,
        title: "Domain Names",
        icon: null,
        slug: "domain-names",
        submenu: [],
        featured: null,
      },
      {
        id: 5,
        title: "Virtual Worlds",
        icon: null,
        slug: "virtual-worlds",
        submenu: [],
        featured: null,
      },
      {
        id: 6,
        title: "Trading Cards",
        icon: null,
        slug: "trading-cards",
        submenu: [],
        featured: null,
      },
      {
        id: 7,
        title: "Collectibles",
        icon: null,
        slug: "collectibles",
        submenu: [],
        featured: null,
      },
      {
        id: 8,
        title: "Sports",
        icon: null,
        slug: "sports",
        submenu: [],
        featured: null,
      },
      {
        id: 9,
        title: "Utility",
        icon: null,
        slug: "utility",
        submenu: [],
        featured: null,
      },
    ];

    const items = [
      {
        image:
          "https://lh3.googleusercontent.com/17vU_UNWeMOVi4XOAwo4nvAXpeg1dnKPBk8VnAhJcFHOFZ9UBBvSL5Spj0ytvyfII3rdp4gHMY0mMvbnSzjdOZ0=s277",
        name: "The SandBox",
        title: "LAND (-152, -57",
        userId: "0x495f947276749ce646f68ac8c248420045cb7b5e",
        itemId: "74599564892152787812",
        price: "0.3549",
        endDate: null,
      },
      {
        image:
          "https://lh3.googleusercontent.com/8q8qdKYzG9jYXO-epUWRVTQcOphuWGjj7pbhrZyTaaJ7qrP_opiKU8AiD-ecu0RU6QGJZPDtVh5wmAi0dByT53-S=s277",
        name: "Ghxsts",
        title: "Test2",
        userId: "0x495f947276749ce646f68ac8c248420045cb7b5e",
        itemId: "74599564892152787812",
        price: "0.3979",
        endDate: "05/17/2021 17:23:55",
      },
      {
        image:
          "https://lh3.googleusercontent.com/gl5JX_tCTCc2wLgVaup02ZLKLw38pG6ZXuuF2J3U7w6xpGPeGp4Rrn3Lb6ABvC6zoFWQ1f209leaX2kTE2iSDXBcFjDAD3KNryuy2g=s277",
        name: "Polka City Asset",
        title: "Test3",
        userId: "0x495f947276749ce646f68ac8c248420045cb7b5e",
        itemId: "74599564892152787812",
        price: "0.4589",
        endDate: "05/19/2021 17:23:55",
      },
      {
        image:
          "https://lh3.googleusercontent.com/TAz_RirXqLCpf1xxP4Xbd1PxjbFL6NMidjDh7TYAIE84FqagL-MlphDX8BGqF-w7ayepQwefHCHFZcS2nnivJSYCefU-jR7jC-yeuw=s277",
        name: "ZED RUN",
        title: "Test4",
        userId: "0x495f947276749ce646f68ac8c248420045cb7b5e",
        itemId: "74599564892152787812",
        price: "0.7589",
        endDate: "05/21/2021 17:23:55",
      },
    ];

    const changeCategory = (item) => {
      selectedCategory.value = item.slug;
    };

    return {
      categories,
      selectedCategory,
      changeCategory,
      selectedSearchItem,
      searchItems,
      selectedFilter,
      filterItems,
      items,
    };
  },
});
</script>


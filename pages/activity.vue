<template>
  <div class="font-raleway">
    <client-only>
      <div class="flex focus-within:lg:w-full">
        <div class="lg:w-3/12 border-1 border-gray-400">
          <event-type-accordion />
          <collections-accordion />
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

import EventTypeAccordion from "@/components/activity/event-type-accordion.vue";
import CollectionAccordion from "@/components/activity/collections-accordion.vue";

export default defineComponent({
  layout: "home",
  name: "rankings",
  head: {},
  components: {
    EventTypeAccordion,
    CollectionAccordion,
  },
  setup() {
    const selectedCategory = ref("all");

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

    const changeCategory = (item) => {
      selectedCategory.value = item.slug;
    };

    return {
      categories,
      selectedCategory,
      changeCategory,
    };
  },
});
</script>
<style>
html,
body {
  height: 100%;
}

@media (min-width: 640px) {
  table {
    display: inline-table !important;
  }

  thead tr:not(:first-child) {
    display: none;
  }
}

td:not(:last-child) {
  border-bottom: 0;
}

th:not(:last-child) {
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);
}
</style>


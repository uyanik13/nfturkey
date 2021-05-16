<template>
  <div class="font-raleway w-full">
    <section class="shadow bg-gray-200">
      <article class="border-b">
        <div class="border-transparent">
          <header
            @click="showContent = !showContent"
            class="flex justify-between items-center p-5 pl-2 pr-8 cursor-pointer select-none bg-gray-100 border-1 border-gray-300"
          >
            <span class="flex text-gray-800 font-bold text-4.5"
              ><img
                class="mr-2 w-5"
                :src="require('~/assets/images/icons/star.svg')"
                alt=""
              />
              Event Type
            </span>
            <div
              class="rounded-full border border-grey w-7 h-7 flex items-center justify-center"
            >
              <div v-if="!showContent">
                <svg
                  aria-hidden="true"
                  class=""
                  data-reactid="266"
                  fill="none"
                  height="24"
                  stroke="#606F7B"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewbox="0 0 36 36"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </div>
              <div v-else>
                <svg
                  aria-hidden="true"
                  data-reactid="281"
                  fill="none"
                  height="24"
                  stroke="#606F7B"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewbox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polyline points="18 15 12 9 6 15"></polyline>
                </svg>
              </div>
            </div>
          </header>
          <div v-if="showContent">
            <div class="p-2 bg-gray-100 border-1 border-gray-200 rounded-md">
              <div class="flex flex-col justify-start pt-4 px-4">
                <div class="flex my-1">
                  <button
                    @click="listings = !listings"
                    :class="listings ? 'bg-indigo-600 text-white' : ''"
                    class="focus:outline-none border-1 w-36 text-left border-gray-300 font-bold text-black bg-white py-2 px-4 rounded-lg whitespace-nowrap"
                  >
                    Listings
                    <t-checkbox
                      v-show="false"
                      name="listings"
                      value="listings"
                      v-model="listings"
                    />
                  </button>
                  <button
                    @click="sales = !sales"
                    :class="sales ? 'bg-blue-900 text-white' : ''"
                    class="focus:outline-none border-1 mx-2 w-36 text-left border-gray-300 font-bold text-black bg-white py-2 px-4 rounded-lg whitespace-nowrap"
                  >
                    Sales
                    <t-checkbox
                      v-show="false"
                      name="sales"
                      value="sales"
                      v-model="sales"
                    />
                  </button>
                </div>
                <div class="flex my-1">
                  <button
                    @click="bids = !bids"
                    :class="bids ? 'bg-green-600 text-white' : ''"
                    class="focus:outline-none border-1 w-36 text-left border-gray-300 font-bold text-black bg-white py-2 px-4 rounded-lg whitespace-nowrap"
                  >
                    Bids
                    <t-checkbox
                      v-show="false"
                      name="bids"
                      value="bids"
                      v-model="bids"
                    />
                  </button>
                  <button
                    @click="transfers = !transfers"
                    :class="transfers ? 'bg-red-600 text-white' : ''"
                    class="focus:outline-none border-1 mx-2 w-36 text-left border-gray-300 font-bold text-black bg-white py-2 px-4 rounded-lg whitespace-nowrap"
                  >
                    Transfers
                    <t-checkbox
                      v-show="false"
                      name="transfers"
                      value="transfers"
                      v-model="transfers"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  </div>
</template>

<script>
import {
  defineComponent,
  useMeta,
  computed,
  ref,
} from "@nuxtjs/composition-api";

export default defineComponent({
  head: {},
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },
  setup() {
    const showContent = ref(true);
    const listings = ref(false);
    const sales = ref(false);
    const bids = ref(false);
    const transfers = ref(false);

    return { showContent, listings, sales, bids, transfers };
  },
});
</script>
<style></style>

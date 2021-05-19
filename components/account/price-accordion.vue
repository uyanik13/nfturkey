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
              Price
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
                <div>
                  <div class="flex mb-1">
                    <t-select
                      v-model="priceHistorySelectedDay"
                      :options="priceHistoryOptions"
                      class="block w-full pl-3 pr-10 py-2 text-black placeholder-gray-400 transition duration-100 ease-in-out bg-white border border-gray-300 rounded shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed"
                    ></t-select>
                  </div>
                  <div class="flex mb-1">
                    <div>
                      <input
                        type="number"
                        class="rounded-lg my-2 w-full pl-3 pr-10 py-2 text-black placeholder-gray-400 transition duration-100 ease-in-out bg-white border border-gray-300 rounded shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed"
                        placeholder="Min"
                      />
                    </div>
                    <div class="mt-2 mx-4">
                      <p class="text-4.5">to</p>
                    </div>

                    <div>
                      <input
                        type="number"
                        class="rounded-lg my-2 w-full pl-3 pr-10 py-2 text-black placeholder-gray-400 transition duration-100 ease-in-out bg-white border border-gray-300 rounded shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed"
                        placeholder="Max"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <button
                    class="transition focus:outline-none font-bold duration-500 ease-in-out bg-primary hover:bg-secondary text-white text-4/5 py-2 px-12 rounded-lg"
                  >
                    Apply
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
import { defineComponent, ref } from "@nuxtjs/composition-api";

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
    const buyNow = ref(false);
    const onAuction = ref(false);
    const newItem = ref(false);
    const hasOffers = ref(false);

    const priceHistorySelectedDay = ref(0);
    const priceHistoryOptions = ref([
      { value: 0, text: "$ United States Dollar (USD)" },
      { value: 1, text: "㆔ Ether (ETH)" },
    ]);

    return {
      showContent,
      buyNow,
      onAuction,
      newItem,
      hasOffers,
      priceHistorySelectedDay,
      priceHistoryOptions,
    };
  },
});
</script>


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
              Status
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
                    @click="buyNow = !buyNow"
                    :class="buyNow ? 'bg-indigo-600 text-white' : ''"
                    class="focus:outline-none border-1 w-36 text-left border-gray-300 font-bold text-black bg-white py-2 px-4 rounded-lg whitespace-nowrap"
                  >
                    Buy Now
                    <t-checkbox
                      v-show="false"
                      name="buyNow"
                      value="buyNow"
                      v-model="buyNow"
                    />
                  </button>

                  <button
                    @click="onAuction = !onAuction"
                    :class="onAuction ? 'bg-blue-900 text-white' : 'bg-white'"
                    class="focus:outline-none border-1 mx-2 w-36 text-left border-gray-300 font-bold text-black py-2 px-4 rounded-lg whitespace-nowrap"
                  >
                    On Auction
                    <t-checkbox
                      v-show="false"
                      name="onAuction"
                      value="onAuction"
                      v-model="onAuction"
                    />
                  </button>
                </div>
                <div class="flex my-1">
                  <button
                    @click="newItem = !newItem"
                    :class="newItem ? 'bg-green-600 text-white' : ''"
                    class="focus:outline-none border-1 w-36 text-left border-gray-300 font-bold text-black bg-white py-2 px-4 rounded-lg whitespace-nowrap"
                  >
                    New
                    <t-checkbox
                      v-show="false"
                      name="newItem"
                      value="newItem"
                      v-model="newItem"
                    />
                  </button>
                  <button
                    @click="hasOffers = !hasOffers"
                    :class="hasOffers ? 'bg-red-600 text-white' : ''"
                    class="focus:outline-none border-1 mx-2 w-36 text-left border-gray-300 font-bold text-black bg-white py-2 px-4 rounded-lg whitespace-nowrap"
                  >
                    Has Offers
                    <t-checkbox
                      v-show="false"
                      name="hasOffers"
                      value="hasOffers"
                      v-model="hasOffers"
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

    return { showContent, buyNow, onAuction, newItem, hasOffers };
  },
});
</script>


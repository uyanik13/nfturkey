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
              Collection
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
                <div class="relative w-full">
                  <input
                    type="text"
                    placeholder="Filter"
                    class="z-30 w-full text-sm rounded-lg border-1 border-gray-400 px-4 pl-10 py-4 focus:outline-none focus:ring-1 focus:indigo-500"
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

    return {
      showContent,
    };
  },
});
</script>


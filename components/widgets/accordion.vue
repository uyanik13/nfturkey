<template>
  <div class="flex font-raleway">
    <section class="shadow bg-gray-200">
      <article class="border-b">
        <div class="border-transparent">
          <header
            class="flex justify-between items-center p-5 pl-8 pr-8 cursor-pointer select-none bg-gray-100 border-1 border-gray-300 rounded-lg"
          >
            <span class="text-grey-darkest font-thin text-xl">
              Massa vitae tortor condimentum lacinia quis vel eros donec
            </span>
            <div
              class="rounded-full border border-grey w-7 h-7 flex items-center justify-center"
            >
              <button
                @click="showContent = !showContent"
                class="focus:outline-none"
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
              </button>
            </div>
          </header>
          <div v-if="showContent">
            <div class="pl-8 pr-8 pb-5 text-grey-darkest">
              <ul class="pl-4">
                <li class="pb-2">consectetur adipiscing elit</li>
                <li class="pb-2">
                  sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua
                </li>
                <li class="pb-2">
                  Viverra orci sagittis eu volutpat odio facilisis mauris
                </li>
              </ul>
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
  // You need to define an empty head to activate this functionality
  head: {},
  setup() {
    const showContent = ref(false);
    return { showContent };
  },
});
</script>
<style></style>

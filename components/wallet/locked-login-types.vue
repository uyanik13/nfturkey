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
                :src="require('~/assets/images/icons/wallet.svg')"
                alt=""
              />
              USE A DIFFERENT WALLET
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
              {{ selected }}
              <div class="flex justify-start pt-4 px-4 space-x-4">
                <button
                  v-for="item in wallets"
                  :key="item.id"
                  :class="
                    selected && selected.id === item.id
                      ? 'border-1 border-indigo-600 text-white'
                      : ''
                  "
                  @click="selected = item"
                  class="focus:outline-none border-1 w-54 text-left border-gray-300 font-bold text-black bg-white py-4 px-4 rounded-lg whitespace-nowrap"
                >
                  <div class="flex flex-col justify-center items-center">
                    <img class="mr-2 w-24 mb-1" :src="item.imageUrl" alt="" />
                    <p
                      class="text-3 font-light text-gray-500 whitespace-normal"
                    >
                      {{ item.description }}
                    </p>
                  </div>
                </button>
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
  props: {},
  setup() {
    const showContent = ref(true);
    const selected = ref(null);

    const wallets = ref([
      {
        id: 1,
        name: "Bitski",
        description:
          "A simple-to-use wallet that allows you to sign in with an email and password",
        imageUrl: require("~/assets/images/wallets/bitski.png"),
      },
      {
        id: 2,
        name: "Authereum",
        description:
          "A usability-focused wallet with no transaction fees and a fiat on-ramp",
        imageUrl: require("~/assets/images/wallets/authereum.png"),
      },
      {
        id: 3,
        name: "WalletConnect",
        description:
          "Pair with Trust, Argent, MetaMask  & more. Works from any browser, without an extension",
        imageUrl: require("~/assets/images/wallets/walletconnect.webp"),
      },
    ]);

    return {
      showContent,
      selected,
      wallets,
    };
  },
});
</script>
<style>
</style>

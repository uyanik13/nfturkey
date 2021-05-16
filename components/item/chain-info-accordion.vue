<template>
  <div class="font-raleway w-full my-2">
    <section class="shadow bg-gray-200">
      <article class="border-b">
        <div class="border-transparent">
          <header
            @click="showContent = !showContent"
            class="flex justify-between items-center p-4 pl-2 pr-8 cursor-pointer select-none bg-gray-100 border-1 border-gray-300 rounded-lg"
          >
            <span class="flex text-gray-800 font-bold text-4.5"
              ><img
                class="mr-2 w-5"
                :src="require('~/assets/images/icons/chain.svg')"
                alt=""
              />
              Chain Info
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
                <div class="flex justify-between my-1">
                  <p>Contract Address</p>
                  <a
                    :href="
                      `https://etherscan.io/address/` +
                      item.assetContract.account.address
                    "
                    target="_blank"
                    rel="nofollow"
                    class="text-blue-600"
                    >{{
                      showHidingAddress(item.assetContract.account.address)
                    }}</a
                  >
                </div>
                <div class="flex justify-between my-1">
                  <p>Token ID</p>
                  <p>1347(Manuel)</p>
                </div>
                <div class="flex justify-between my-1">
                  <p>Blockchain</p>
                  <p>{{ item.assetContract.account.chain.identifier }}</p>
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
    const showContent = ref(false);
    const showHidingAddress = (address) => {
      if (!address) return null;
      let first5 = null;
      let last4 = null;
      first5 = address.substring(0, 5);
      last4 = address.substring(address.length - 4);
      return first5 + `...` + last4;
    };
    return { showContent, showHidingAddress };
  },
});
</script>
<style></style>

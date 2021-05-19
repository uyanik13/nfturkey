<template>
  <div class="font-raleway bg-white">
    <client-only>
      <div class="w-full">
        <div class="relative">
          <div class="w-full static flex flex-col items-center pb-16">
            <div class="w-full flex flex-col items-center pb-8">
              <div class="relative inset-x-0"></div>
              <div
                class="bg-gray-400 relative shadow-xl w-5/6 md:w-4/6 lg:w-full xl:w-full mx-auto py-24"
              >
                <div class="flex justify-center">
                  <button class="focus:outline-none flex justify-center">
                    <img
                      v-tooltip="'Change Image'"
                      :src="account.imageUrl"
                      alt=""
                      class="rounded-full mx-auto absolute w-36 h-36 shadow-2xl border-4 border-white"
                    />
                  </button>
                </div>
              </div>
            </div>
            <div class="flex flex-col items-center pt-4">
              <h2 class="font-bold text-6 lg:text-10 text-gray-900">
                {{
                  account.user.publicUsername
                    ? account.user.publicUsername
                    : "Unnamed"
                }}
              </h2>
              <div>
                <button
                  v-tooltip="'Copy'"
                  class="flex space-x-2 focus:outline-none p-1 transform hover:scale-105 duration-300 ease-in-out"
                >
                  <p>
                    {{ showHidingAddress(account.address) }}
                  </p>
                  <fa
                    :icon="['fas', 'copy']"
                    class="text-4.5 text-gray-600 mt-1"
                  />
                </button>
              </div>
            </div>

            <div
              class="absolute top-0 right-0 m-5 bg-gray-200 rounded-lg p-4 text-indigo-50 inline-block"
            >
              <button v-tooltip="'Change Banner'" class="focus:outline-none">
                <fa :icon="['fas', 'edit']" class="text-5 text-gray-700" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="w-full flex flex-col items-center">
        <div class="w-full border-1 border-gray-400">
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
                  selectedCategory == item.slug ? `bg-primary` : 'bg-secondary '
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
            <wallet-items />
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
  },
  setup() {
    const selectedCategory = ref("in-wallet");

    const categories = [
      {
        id: 1,
        title: "In Wallet",
        slug: "in-wallet",
        icon: null,
      },
      {
        id: 2,
        title: "Activity",
        icon: null,
        slug: "activity",
      },
      {
        id: 3,
        title: "Offers",
        icon: null,
        slug: "offfers",
      },
      {
        id: 4,
        title: "Favorites",
        icon: null,
        slug: "favorites",
      },
      {
        id: 5,
        title: "Referrals",
        icon: null,
      },
    ];

    const changeCategory = (item) => {
      selectedCategory.value = item.slug;
    };

    const showHidingAddress = (address) => {
      if (!address) return null;
      let first5 = null;
      let last4 = null;
      first5 = address.substring(0, 5);
      last4 = address.substring(address.length - 4);
      return first5 + `...` + last4;
    };

    const account = {
      address: "0x0798c631126f67070a15682661abbd5cdf8a349a",
      chain: {
        identifier: "ETHEREUM",
        id: "Q2hhaW5UeXBlOjE=",
      },
      imageUrl:
        "https://storage.googleapis.com/opensea-static/opensea-profile/27.png",
      nickname: null,
      relayId: "QWNjb3VudFR5cGU6NDQ4NDk2NjQ=",
      user: {
        isStaff: false,
        relayId: "VXNlclR5cGU6ODI2Mzg4",
        username: "__OS__LimeGorillaFromVenus",
        publicUsername: null,
        id: "VXNlclR5cGU6ODI2Mzg4",
      },
      id: "QWNjb3VudFR5cGU6NDQ4NDk2NjQ=",
    };

    return {
      categories,
      selectedCategory,
      changeCategory,
      showHidingAddress,
      account,
    };
  },
});
</script>
<style>
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


<template>
  <div class="font-raleway bg-white">
    <client-only>
      <profile-header />
      <div class="flex lg:w-full min-h-screen">
        <div class="lg:w-3/12 border-1 border-gray-400">
          <collection-accordion />
        </div>
        <div class="lg:w-9/12">
          <div class="w-full px-4 border-1 border-gray-400">
            <account-offers-made-history />
            <account-offers-received-history />
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
import AccountOffersHistoryMade from "@/components/account/account-offers-made-history.vue";
import AccountOffersHistoryReceived from "@/components/account/account-offers-received-history.vue";
import ProfileHeader from "@/components/account/profile-header.vue";

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
    AccountOffersHistoryMade,
    AccountOffersHistoryReceived,
    ProfileHeader,
  },
  setup() {
    return {};
  },
});
</script>

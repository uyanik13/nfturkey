<template>
  <div class="font-raleway bg-white">
    <client-only>
      <profile-header />
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
            <account-activity-trading-history />
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
import AccountActivityTradingHistory from "@/components/account/account-activity-trading-history.vue";
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
    AccountActivityTradingHistory,
    ProfileHeader,
  },
  setup() {
    return {};
  },
});
</script>

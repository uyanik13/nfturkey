<template>
  <div class="font-raleway bg-white">
    <client-only>
      <profile-header />
      <div class="w-full px-4 my-6 min-h-screen">
        <div class="flex flex-col justify-center items-center my-2">
          <h2 class="text-6 font-bold">Refer a friend to NFTurkey</h2>
          <p>
            In order to refer a friend, you need to set your username, which can
            be done on the
            <a href="/account/settings" class="text-blue-600"
              >Account Settings</a
            >
            page.
          </p>
        </div>
        <section class="shadow bg-gray-200">
          <article class="border-b">
            <div class="border-transparent">
              <header
                class="flex justify-between items-center p-4 pl-2 pr-8 cursor-pointer select-none bg-gray-100 border-1 border-gray-300 rounded-lg"
              >
                <span class="flex text-gray-800 font-bold text-4.5"
                  ><img
                    class="mr-2 w-5"
                    :src="require('~/assets/images/icons/price-tag.svg')"
                    alt=""
                  />
                  Referred Sales
                </span>
              </header>
              <div>
                <div class="bg-gray-100 border-1 border-gray-200 rounded-md">
                  <div class="flex justify-center items-center my-2 p-2">
                    <div class="">
                      <img
                        class="w-40"
                        :src="
                          require('~/assets/images/icons/empty-results.svg')
                        "
                        alt=""
                      />
                      <p class="text-4.5">No referrals yet</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </section>
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

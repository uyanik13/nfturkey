<template>
  <div class="bg-white px-2 lg:px-8 pb-5 font-raleway">
    <client-only>
      <div class="lg:w-full lg:px-24 py-16">
        <div class="flex justify-center">
          <h2 class="font-bold text-8 text-gray-800">
            Sign in to your wallet.
          </h2>
        </div>
        <div class="flex justify-center my-5 mx-5 lg:mx-48">
          <p class="font-bold text-4.5 text-gray-800">
            SELECT A DESKTOP WALLET OPTION
          </p>
        </div>
        <div class="flex justify-center my-5 lg:mx-48">
          <locked-login-types />
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

import LockedLoginTypes from "@/components/wallet/locked-login-types.vue";

export default defineComponent({
  head: {},
  components: { LockedLoginTypes },
  setup() {
    return {};
  },
});
</script>

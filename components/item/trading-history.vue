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
                :src="require('~/assets/images/icons/deal.svg')"
                alt=""
              />
              Trading History
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
            <div class="bg-gray-200 border-1 border-gray-200 rounded-md">
              <div class="flex justify-center pt-4">
                <table class="w-full">
                  <tr class="bg-white">
                    <th class="lg:py-2 text-4 font-bold text-left pl-6 lg:pl-6">
                      Event
                    </th>
                    <th class="lg:py-2 text-4 font-bold text-left pl-6 lg:pl-6">
                      Price
                    </th>
                    <th class="lg:py-2 text-4 font-bold text-left pl-8 lg:pl-6">
                      From
                    </th>
                    <th class="lg:py-2 text-4 font-bold text-left pl-2 lg:pl-6">
                      To
                    </th>
                    <th class="lg:py-2 text-4 font-bold text-left px-l lg:pl-6">
                      Date
                    </th>
                  </tr>

                  <tr v-for="(item, index) in assetEvents" :key="index">
                    <td class="lg:px-6 text-4">Created</td>
                    <td class="lg:px-6 text-4">{{ item.node.price }}</td>
                    <td class="lg:px-6 text-4">
                      <NuxtLink
                        class="text-blue-600"
                        :to="`/accounts/` + item.node.fromAccount.address"
                        >{{
                          parseToAccount(item.node.fromAccount.address)
                        }}</NuxtLink
                      >
                    </td>
                    <td class="lg:px-6 text-4">
                      <NuxtLink
                        class="text-blue-600"
                        :to="`/accounts/` + item.node.toAccount.address"
                        >{{
                          parseToAccount(item.node.toAccount.address)
                        }}</NuxtLink
                      >
                    </td>
                    <td class="lg:pl-6 text-4">
                      {{ getDate(item.node.eventTimestamp) }}
                    </td>
                  </tr>
                </table>
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
    assetEvents: {
      type: Array,
      default: () => [],
    },
  },
  setup() {
    const showContent = ref(true);

    const parseToAccount = (address) => {
      if (!address) return null;
      return address.substring(2, 8);
    };
    const getDate = (date) => {
      let dateFormat = new Date(date);
      let dateFormat1 =
        dateFormat.toLocaleDateString("tr", {
          weekday: "short",
          year: "numeric",
          month: "short",
          day: "numeric",
        }) +
        " " +
        dateFormat.toLocaleTimeString("tr", {
          hour: "numeric",
          minute: "numeric",
        }); //toLocaleTime("tr-TR").substring(-3, 5);
      return dateFormat1;
    };

    return { showContent, parseToAccount, getDate };
  },
});
</script>
<style></style>

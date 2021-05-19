<template>
  <div class="font-raleway w-full my-8">
    <section class="shadow bg-gray-200">
      <article class="border-b">
        <div class="border-transparent">
          <header
            @click="showContent = !showContent"
            class="flex justify-between items-center p-4 pl-2 pr-8 cursor-pointer select-none bg-gray-100 border-1 border-gray-300"
          >
            <span class="flex text-gray-800 font-bold text-4.5"
              ><img
                class="mr-2 w-5"
                :src="require('~/assets/images/icons/deal.svg')"
                alt=""
              />
              Trading History
            </span>
          </header>
          <div v-if="showContent">
            <div class="bg-gray-100 border-1 border-gray-400 rounded-md">
              <div class="flex justify-center">
                <table class="w-full">
                  <tr class="bg-white">
                    <th class="lg:py-2 text-4 font-bold text-left pl-6 lg:pl-6">
                      Event
                    </th>
                    <th class="lg:py-2 text-4 font-bold text-left pl-6 lg:pl-6">
                      item
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

                  <tr
                    v-for="(item, index) in assetEvents"
                    :key="index"
                    class="border-b-1 border-gray-400"
                  >
                    <td class="lg:px-6 text-4">
                      {{ item.node.eventType }}
                    </td>
                    <td class="lg:px-6 text-4">
                      <div
                        class="flex focus:outline-none items-center w-48 my-2 mx-2"
                      >
                        <img
                          :src="
                            item.node.assetQuantity.asset.collection.imageUrl
                          "
                          :alt="item.node.assetQuantity.asset.collection.name"
                          class="w-8 h-8 rounded-full mr-2"
                        />
                        <p class="whitespace-normal">
                          {{ item.node.assetQuantity.asset.collection.name }}
                        </p>
                      </div>
                    </td>
                    <td class="lg:px-6 text-4">
                      {{ item.node.price.asset.usdSpotPrice }}
                    </td>
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
                      <div v-if="item.node.toAccount">
                        <NuxtLink
                          class="text-blue-600"
                          :to="`/accounts/` + item.node.toAccount.address"
                          >{{
                            parseToAccount(item.node.toAccount.address)
                          }}</NuxtLink
                        >
                      </div>
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

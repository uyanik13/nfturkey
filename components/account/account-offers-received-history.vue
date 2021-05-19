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
                :src="require('~/assets/images/icons/price-tag.svg')"
                alt=""
              />
              Offers Received
            </span>
          </header>
          <div v-if="showContent">
            <div class="bg-gray-100 border-1 border-gray-200 rounded-md">
              <div class="flex justify-center items-center my-2 p-2">
                <div class="">
                  <img
                    class="w-40"
                    :src="require('~/assets/images/icons/empty-bids.svg')"
                    alt=""
                  />
                  <p class="text-4.5">No offers yet</p>
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

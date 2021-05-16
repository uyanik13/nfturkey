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
                :src="require('~/assets/images/icons/read-more.svg')"
                alt=""
              />
              More from this collection
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
              <div class="flex justify-center pt-4 px-4">
                <swiper
                  :slides-per-view="3"
                  :auto-update="true"
                  :auto-destroy="true"
                  :options="swiperOption"
                  ref="swiperTop"
                >
                  <swiper-slide v-for="(item, index) in items" :key="index">
                    <NuxtLink :to="`/items/` + item.userId + `/` + item.itemId">
                      <div
                        class="rounded rounded-lg overflow-hidden shadow my-3 bg-white no-underline"
                      >
                        <img
                          :src="item.image"
                          class="object-cover w-full h-64"
                        />

                        <div
                          v-if="item.itemId"
                          class="text-center px-3 pb-3 pt-2"
                        >
                          <div class="flex justify-between items-center">
                            <p
                              class="ml-1 mt-1 text-3.5 font-light text-gray-500"
                            >
                              {{ item.name }}
                            </p>
                            <p class="mt-1 text-3.5 font-light text-gray-500">
                              Price
                            </p>
                          </div>
                          <div class="flex justify-between items-center">
                            <p class="ml-1 mt-1 text-4 font-bold text-gray-900">
                              {{ item.title }}
                            </p>
                            <p class="mt-1 text-4 font-bold text-gray-900">
                              {{ item.price }}
                            </p>
                          </div>
                          <div
                            class="flex justify-between items-center"
                            v-if="item.endDate"
                          >
                            <p class="ml-1 text-4 font-bold text-gray-800">
                              Left
                            </p>
                            <p class="mt-1 text-4 font-normal text-gray-600">
                              <countdown :date="item.endDate" />
                            </p>
                          </div>
                          <div
                            class="flex justify-between items-center py-3"
                            v-else
                          ></div>
                        </div>
                        <div v-else class="text-center px-3 pb-3 pt-2">
                          <div class="flex justify-between items-center">
                            <p class="ml-1 mt-1 text-4 font-bold text-gray-800">
                              {{ item.name }}
                            </p>
                          </div>
                        </div>
                      </div>
                    </NuxtLink>
                  </swiper-slide>

                  <div class="swiper-button-next" slot="button-next"></div>
                  <div class="swiper-button-prev" slot="button-prev"></div>
                </swiper>
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

import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import "swiper/swiper-bundle.css";
import Countdown from "@/components/widgets/countdown.vue";

export default defineComponent({
  head: {},
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    Swiper,
    SwiperSlide,
    Countdown,
  },
  directives: {
    swiper: directive,
  },
  setup() {
    const showContent = ref(true);

    const swiperOption = {
      loop: true,
      spaceBetween: 25,
      slidesPerView: 4.5,
      speed: 600,
      parallax: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    };

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

    return { showContent, swiperOption, parseToAccount, getDate };
  },
});
</script>
<style></style>

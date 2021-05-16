<template>
  <div class="my-24 font-raleway">
    <div class="mx-24 py-2 my-3 flex border-b-1 border-gray-400">
      <img :src="sectionIcon" class="mr-2 w-8 h-8" />
      <h2 class="text-5 font-bold">{{ sectionTitle }}</h2>
    </div>
    <div class="lg:w-full px-24">
      <client-only>
        <swiper
          :slides-per-view="3"
          :auto-update="true"
          :auto-destroy="true"
          :options="swiperOption"
          ref="swiperTop"
        >
          <swiper-slide v-for="(item, index) in items" :key="index">
            <NuxtLink :to="routeFunction(item)">
              <div
                class="rounded rounded-lg overflow-hidden shadow my-3 bg-white no-underline"
              >
                <img :src="item.image" class="object-cover w-full h-64" />

                <div v-if="item.itemId" class="text-center px-3 pb-3 pt-2">
                  <div class="flex justify-between items-center">
                    <p class="ml-1 mt-1 text-3.5 font-light text-gray-500">
                      {{ item.name }}
                    </p>
                    <p class="mt-1 text-3.5 font-light text-gray-500">Price</p>
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
                    <p class="ml-1 text-4 font-bold text-gray-800">Left</p>
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
      </client-only>
    </div>
  </div>
</template>
<script>
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import "swiper/swiper-bundle.css";
import Countdown from "@/components/widgets/countdown.vue";
export default {
  name: "slider",
  components: {
    Swiper,
    SwiperSlide,
    Countdown,
  },
  directives: {
    swiper: directive,
  },
  props: {
    sectionTitle: {
      type: String,
      default: "",
    },
    sectionIcon: {
      type: String,
      default: "",
    },
    items: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      swiperOption: {
        loop: true,
        spaceBetween: 25,
        slidesPerView: 3.5,
        speed: 600,
        parallax: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
    };
  },
  computed: {},
  watch: {},
  methods: {
    routeFunction(item) {
      if (item.itemId) {
        return `/items/` + item.userId + `/` + item.itemId;
      } else {
        return `/collection/` + item.slug;
      }
    },
  },
  mounted() {},
  created() {},
};
</script>

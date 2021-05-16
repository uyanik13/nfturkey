<template>
  <div class="lg:mx-auto sm:mx-0">
    <div class="lg:flex font-raleway">
      <div class="lg:w-8/12 lg:px-24 pt-24">
        <div class="px-6">
          <h1 class="font-bold text-12 text-gray-900">
            Discover, collect, and sell extraordinary NFTs
          </h1>
          <div class="mt-4 font-light text-6 text-gray-900 lg:pr-48">
            on the world's first & largest NFT marketplace
          </div>
          <div class="py-6 flex">
            <button
              class="transition focus:outline-none font-bold duration-500 ease-in-out bg-secondary hover:bg-primary text-white text-5 py-3 px-12 rounded-lg"
            >
              Explore
            </button>
            <button
              class="mx-8 transition focus:outline-none font-bold duration-500 ease-in-out bg-primary hover:bg-secondary text-white text-5 py-3 px-12 rounded-lg"
            >
              Create
            </button>
          </div>
        </div>
      </div>
      <div class="lg:w-6/12 px-6 lg:mx-24">
        <div class="rounded rounded-lg overflow-hidden shadow my-3 bg-white">
          <img
            src="https://lh3.googleusercontent.com/RoyRhg93cSYsVambabKQAwxroE6VsOMhwTlwzukZxD0lKJh8-FT-08vTZsVfEnptfdBaljJF1EJmzDK-onaadV1P5eBMXPdk1ANqNrY=s0"
            class="object-cover w-full h-96"
          />

          <div class="text-center px-3 pb-3 pt-2">
            <div class="flex flex-row justify-between items-center">
              <a class="flex items-center no-underline text-black" href="#">
                <img
                  alt="Placeholder"
                  class="block rounded-full w-10 my-2"
                  src="https://picsum.photos/32/32/?random"
                />
                <div class="grid">
                  <span class="ml-3 text-md font-bold">
                    JeffJag - Dodeca Heathen</span
                  >
                  <span class="text-blue-600 text-left ml-3">JeffJag</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mx-8 mt-10 lg:mt-0 lg:mx-28">
      <span class="text-lg text-blue-600 font-bold">
        Get featured on the homepage
      </span>
    </div>
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
  // You need to define an empty head to activate this functionality
  head: {},
  setup() {
    return {};
  },
});
</script>
<style>
/* .hide-scroll-bar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.hide-scroll-bar::-webkit-scrollbar {
  display: none;
} */
</style>

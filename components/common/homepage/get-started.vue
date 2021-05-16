<template>
  <div class="lg:mx-auto sm:mx-0 bg-white">
    <div class="font-raleway">
      <div class="lg:w-full lg:px-24 py-16">
        <div class="flex justify-center">
          <h2 class="font-bold text-8 text-gray-900">
            Get started creating & selling your NFTs
          </h2>
        </div>
        <div class="flex items-center my-5">
          <div
            class="flex flex-col justify-center items-center whitespace-pre-line mx-2"
          >
            <img
              class="w-8 h-8 my-3"
              :src="require('~/assets/images/icons/wallet1.svg')"
              alt=""
            />
            <h4 class="font-bold text-5 text-gray-900">Set up your wallet</h4>
            <p>
              Once you’ve set up your wallet of choice, connect it to OpenSea by
              clicking the wallet icon in the top right corner. Learn about the
              wallets we support.
            </p>
          </div>

          <div
            class="flex flex-col justify-center items-center whitespace-pre-line mx-2"
          >
            <img
              class="w-8 h-8 my-3"
              :src="require('~/assets/images/icons/collection.svg')"
              alt=""
            />
            <h4 class="font-bold text-5 text-gray-900">Create your collection</h4>
            <p>
              Click Create and set up your collection. Add social links, a
              description, profile & banner images, and set a secondary sales
              fee.
            </p>
          </div>

          <div
            class="flex flex-col justify-center items-center whitespace-pre-line mx-2"
          >
            <img
              class="w-8 h-8 my-3"
              :src="require('~/assets/images/icons/file.svg')"
              alt=""
            />
            <h4 class="font-bold text-5 text-gray-900">Add your NFTs</h4>
            <p>
              Upload your work (image, video, audio, or 3D art), add a title and
              description, and customize your NFTs with properties, stats, and
              unlockable content.
            </p>
          </div>

          <div
            class="flex flex-col justify-center items-center whitespace-pre-line mx-2"
          >
            <img
              class="w-8 h-8 my-3"
              :src="require('~/assets/images/icons/list.svg')"
              alt=""
            />
            <h4 class="font-bold text-5 text-gray-900">List them for sale</h4>
            <p>
              Choose between auctions, fixed-price listings, and declining-price
              listings. You choose how you want to sell your NFTs, and we help
              you sell them!
            </p>
          </div>
        </div>
        <div class="flex justify-center mt-24">
          <button
            class="transition focus:outline-none font-bold duration-500 ease-in-out bg-secondary hover:bg-primary text-white text-5 py-3 px-12 rounded-lg"
          >
            View our beginners' guide
          </button>
        </div>
      </div>

      <div class="lg:w-full lg:px-24 py-4 bg-gray-200">
        <div class="flex justify-center my-8">
          <h4 class="font-bold text-7 text-gray-900">Browse by category</h4>
        </div>

        <div class="flex-none lg:flex lg:space-x-8 justify-start my-24">
          <div
            class="w-full lg:w-1/3 my-10 lg:my-0 rounded-lg bg-white shadow-lg px-5 pt-5 pb-10 text-gray-800 transform hover:scale-105 duration-300 ease-in-out"
          >
            <NuxtLink :to="`/`">
              <div class="w-full pt-1 pb-5">
                <div
                  class="overflow-hidden rounded-full w-20 h-20 -mt-16 mx-auto shadow-lg"
                >
                  <img
                    class="p-5"
                    :src="require('~/assets/images/icons/art.svg')"
                    alt=""
                  />
                </div>
              </div>
              <div class="w-full flex justify-center">
                <h5 class="font-bold text-5.5 text-gray-800">Art</h5>
              </div>
              <div class="w-full">
                <p class="text-5 text-gray-600 text-center px-5">
                  An online community of makers, developers, and traders is
                  pushing the art world into new territory. Discover the world's
                  top crypto artists.
                </p>
              </div>
              <div class="w-full">
                <p class="text-5 text-blue-600 text-center px-5 my-2">
                  Explore Art
                </p>
              </div>
            </NuxtLink>
          </div>

          <div
            class="w-full lg:w-1/3 my-10 lg:my-0 rounded-lg bg-white shadow-lg px-5 pt-5 pb-10 text-gray-800 transform hover:scale-105 duration-300 ease-in-out"
          >
            <NuxtLink :to="`/`">
              <div class="w-full pt-1 pb-5">
                <div
                  class="overflow-hidden rounded-full w-20 h-20 -mt-16 mx-auto shadow-lg"
                >
                  <img
                    class="p-5"
                    :src="
                      require('~/assets/images/icons/domain-registration.svg')
                    "
                    alt=""
                  />
                </div>
              </div>
              <div class="w-full flex justify-center">
                <h5 class="font-bold text-5.5 text-gray-800">Domain Names</h5>
              </div>
              <div class="w-full">
                <p class="text-5 text-gray-600 text-center px-5">
                  Buy and sell domain names from the Ethereum Name Service
                  (ENS), Unstoppable Domains, and Decentraland Names on OpenSea.
                </p>
              </div>
              <div class="w-full">
                <p class="text-5 text-blue-600 text-center px-5 my-2">
                  Explore Domain Names
                </p>
              </div>
            </NuxtLink>
          </div>

          <div
            class="w-full lg:w-1/3 my-10 lg:my-0 rounded-lg bg-white shadow-lg px-5 pt-5 pb-10 text-gray-800 transform hover:scale-105 duration-300 ease-in-out"
          >
            <NuxtLink :to="`/`">
              <div class="w-full pt-1 pb-5">
                <div
                  class="overflow-hidden rounded-full w-20 h-20 -mt-16 mx-auto shadow-lg"
                >
                  <img
                    class="p-5"
                    :src="
                      require('~/assets/images/icons/world-with-people.svg')
                    "
                    alt=""
                  />
                </div>
              </div>
              <div class="w-full flex justify-center">
                <h5 class="font-bold text-5.5 text-gray-800">Virtual Worlds</h5>
              </div>
              <div class="w-full">
                <p class="text-5 text-gray-600 text-center px-5">
                  Buy and sell land parcels and wearables from projects like
                  Decentraland, Cryptovoxels and Somnium Space.
                </p>
              </div>
              <div class="w-full">
                <p class="text-5 text-blue-600 text-center px-5 my-2">
                  Explore Virtual Worlds
                </p>
              </div>
            </NuxtLink>
          </div>
        </div>

        <div class="flex-none lg:flex lg:space-x-8 justify-start my-24">
          <div
            class="w-full lg:w-1/3 my-10 lg:my-0 rounded-lg bg-white shadow-lg px-5 pt-5 pb-10 text-gray-800 transform hover:scale-105 duration-300 ease-in-out"
          >
            <NuxtLink :to="`/`">
              <div class="w-full pt-1 pb-5">
                <div
                  class="overflow-hidden rounded-full w-20 h-20 -mt-16 mx-auto shadow-lg"
                >
                  <img
                    class="p-5"
                    :src="require('~/assets/images/icons/trading-card.svg')"
                    alt=""
                  />
                </div>
              </div>
              <div class="w-full flex justify-center">
                <h5 class="font-bold text-5.5 text-gray-800">Trading Cards</h5>
              </div>
              <div class="w-full">
                <p class="text-5 text-gray-600 text-center px-5">
                  Classic games are taking on a new life on the blockchain. Buy
                  and sell digital trading cards from projects like Sorare, Gods
                  Unchained, and $MEME.
                </p>
              </div>
              <div class="w-full">
                <p class="text-5 text-blue-600 text-center px-5 my-2">
                  Explore Trading Cards
                </p>
              </div>
            </NuxtLink>
          </div>

          <div
            class="w-full lg:w-1/3 my-10 lg:my-0 rounded-lg bg-white shadow-lg px-5 pt-5 pb-10 text-gray-800 transform hover:scale-105 duration-300 ease-in-out"
          >
            <NuxtLink :to="`/`">
              <div class="w-full pt-1 pb-5">
                <div
                  class="overflow-hidden rounded-full w-20 h-20 -mt-16 mx-auto shadow-lg"
                >
                  <img
                    class="p-5"
                    :src="require('~/assets/images/icons/collectibles.svg')"
                    alt=""
                  />
                </div>
              </div>
              <div class="w-full flex justify-center">
                <h5 class="font-bold text-5.5 text-gray-800">Collectibles</h5>
              </div>
              <div class="w-full">
                <p class="text-5 text-gray-600 text-center px-5">
                  Kittens, punks, and memes are being traded through digital
                  wallets. Own and sell rare NFTs like CryptoKitties, Axie
                  Infinity, and more.
                </p>
              </div>
              <div class="w-full">
                <p class="text-5 text-blue-600 text-center px-5 my-2">
                  Explore Collectibles
                </p>
              </div>
            </NuxtLink>
          </div>

          <div
            class="w-full lg:w-1/3 my-10 lg:my-0 rounded-lg bg-white shadow-lg px-5 pt-5 pb-10 text-gray-800 transform hover:scale-105 duration-300 ease-in-out"
          >
            <NuxtLink :to="`/`">
              <div class="w-full pt-1 pb-5">
                <div
                  class="overflow-hidden rounded-full w-20 h-20 -mt-16 mx-auto shadow-lg"
                >
                  <img
                    class="p-5"
                    :src="require('~/assets/images/icons/sports.svg')"
                    alt=""
                  />
                </div>
              </div>
              <div class="w-full flex justify-center">
                <h5 class="font-bold text-5.5 text-gray-800">Sports</h5>
              </div>
              <div class="w-full">
                <p class="text-5 text-gray-600 text-center px-5">
                  Browse, buy, and sell non-fungible tokens from the world's top
                  sporting brands in golf, football, auto, racing, and more.
                </p>
              </div>
              <div class="w-full">
                <p class="text-5 text-blue-600 text-center px-5 my-2">
                  Explore Sports
                </p>
              </div>
            </NuxtLink>
          </div>
        </div>

        <div class="flex-none lg:flex lg:space-x-8 justify-start my-24">
          <div
            class="w-full lg:w-1/3 my-10 lg:my-0 rounded-lg bg-white shadow-lg px-5 pt-5 pb-10 text-gray-800 transform hover:scale-105 duration-300 ease-in-out"
          >
            <NuxtLink :to="`/`">
              <div class="w-full pt-1 pb-5">
                <div
                  class="overflow-hidden rounded-full w-20 h-20 -mt-16 mx-auto shadow-lg"
                >
                  <img
                    class="p-5"
                    :src="require('~/assets/images/icons/utility.svg')"
                    alt=""
                  />
                </div>
              </div>
              <div class="w-full flex justify-center">
                <h5 class="font-bold text-5.5 text-gray-800">Utility</h5>
              </div>
              <div class="w-full">
                <p class="text-5 text-gray-600 text-center px-5">
                  Through redeemable rewards, membership NFTs, and other utility
                  tokens, creators are using the blockchain to build their
                  communities.
                </p>
              </div>
              <div class="w-full">
                <p class="text-5 text-blue-600 text-center px-5 my-2">
                  Explore Utility
                </p>
              </div>
            </NuxtLink>
          </div>

          <div
            class="w-full lg:w-1/3 my-10 lg:my-0 rounded-lg bg-white shadow-lg px-5 pt-5 pb-10 text-gray-800 transform hover:scale-105 duration-300 ease-in-out"
          >
            <NuxtLink :to="`/`">
              <div class="w-full pt-1 pb-5">
                <div
                  class="overflow-hidden rounded-full w-20 h-20 -mt-16 mx-auto shadow-lg"
                >
                  <img
                    class="p-5"
                    :src="require('~/assets/images/icons/all-nft.svg')"
                    alt=""
                  />
                </div>
              </div>
              <div class="w-full flex justify-center">
                <h5 class="font-bold text-5.5 text-gray-800">All NFTs</h5>
              </div>
              <div class="w-full">
                <p class="text-5 text-gray-600 text-center px-5">
                  Just want to explore, browse, and discover the endless
                  possibilities of NFTs? Browse art, collectibles, trading
                  cards, and more.
                </p>
              </div>
              <div class="w-full">
                <p class="text-5 text-blue-600 text-center px-5 my-2">
                  Explore All NFTs
                </p>
              </div>
            </NuxtLink>
          </div>
        </div>

        <div class="flex justify-center mt-24">
          <button
            class="transition focus:outline-none font-bold duration-500 ease-in-out bg-secondary hover:bg-primary text-white text-5 py-3 px-12 rounded-lg"
          >
            Explore the marketplace
          </button>
        </div>
      </div>
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
</style>

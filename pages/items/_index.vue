<template>
  <div class="bg-white px-2 lg:px-8 pb-5 font-raleway">
    <client-only>
      <div class="lg:flex">
        <div class="lg:w-5/12">
          <div class="border-2 border-gray-300 rounded-lg m-3">
            <div class="flex justify-end p-5">
              <fa
                :icon="['fas', 'heart']"
                class="pb-2 text-8 text-gray-500 hover:text-red-500"
              />
              {{ item.favoritesCount }}
            </div>
            <div class="flex justify-center items-center lg:py-32">
              <img :src="item.imageUrl" alt="" />
            </div>
          </div>
          <div class="m-3">
            <detail-accordion :item="item" />
            <about-accordion :item="item" />
            <chain-info-accordion :item="item" />
          </div>
        </div>
        <div class="lg:w-7/12 order-first lg:order-last">
          <div class="flex justify-between pt-4 px-4">
            <div class="text-5 text-blue-600">
              {{ item.collection.name }}
            </div>
            <div class="text-4.5 text-blue-600">
              <div class="flex">
                <button
                  class="focus:outline-none border-2 border-gray-300 p-1 transform hover:scale-105 duration-300 ease-in-out"
                >
                  <img
                    class="w-7"
                    :src="require('~/assets/images/icons/refresh.svg')"
                    alt=""
                  />
                </button>
                <button
                  class="focus:outline-none border-2 border-gray-300 p-1 transform hover:scale-105 duration-300 ease-in-out"
                >
                  <img
                    class="w-7"
                    :src="require('~/assets/images/icons/magnifying-glass.svg')"
                    alt=""
                  />
                </button>
                <button
                  class="focus:outline-none border-2 border-gray-300 p-1 transform hover:scale-105 duration-300 ease-in-out"
                >
                  <img
                    class="w-7"
                    :src="require('~/assets/images/icons/share.svg')"
                    alt=""
                  />
                </button>
                <button
                  class="focus:outline-none border-2 border-gray-300 p-1 transform hover:scale-105 duration-300 ease-in-out"
                >
                  <img
                    class="w-7"
                    :src="require('~/assets/images/icons/more.svg')"
                    alt=""
                  />
                </button>
              </div>
            </div>
          </div>
          <div class="flex justify-between pt-4 px-4">
            <h1 class="font-bold text-8">{{ item.name }}</h1>
          </div>
          <div class="flex justify-start pt-4 px-4">
            <p class="font-normal text-4">
              Owned by
              <NuxtLink
                class="text-blue-600"
                :to="`/accounts/` + item.assetContract.account.address"
                >{{ item.collection.name }}</NuxtLink
              >
            </p>
          </div>
          <div class="flex flex-col justify-start pt-4 px-0 lg:px-4">
            <price-history-accordion />
            <listing-accordion />
            <offers-accordion />
          </div>
        </div>
      </div>
      <div class="lg:flex lg:ml-3">
        <trading-history :asset-events="assetEvents" />
      </div>
      <div class="lg:flex lg:ml-3">
        <more-from-this-collection :items="collectionItems" />
      </div>
    </client-only>
  </div>
</template>
<script>
import PriceHistoryAccordion from "@/components/item/price-history-accordion.vue";
import ListingAccordion from "@/components/item/listing-accordion.vue";
import OffersAccordion from "@/components/item/offers-accordion.vue";
import DetailAccordion from "@/components/item/detail-accordion.vue";
import AboutAccordion from "@/components/item/about-accordion.vue";
import ChainInfoAccordion from "@/components/item/chain-info-accordion.vue";
import TradingHistory from "@/components/item/trading-history.vue";
import MoreFromThisCollection from "@/components/item/more-from-this-collection.vue";

import {
  defineComponent,
  useMeta,
  computed,
  ref,
} from "@nuxtjs/composition-api";

export default defineComponent({
  // You need to define an empty head to activate this functionality
  head: {},
  components: {
    PriceHistoryAccordion,
    ListingAccordion,
    OffersAccordion,
    DetailAccordion,
    AboutAccordion,
    ChainInfoAccordion,
    TradingHistory,
    MoreFromThisCollection,
  },
  setup() {
    const item = {
      assetContract: {
        account: {
          address: "0x57e9a39ae8ec404c08f88740a9e6e306f50c937f",
          chain: {
            identifier: "ETHEREUM",
            id: "Q2hhaW5UeXBlOjE=",
          },
          id: "QWNjb3VudFR5cGU6MjE0Nzc0MDg=",
        },
        id: "QXNzZXRDb250cmFjdFR5cGU6MTk5MTE0",
        openseaVersion: null,
      },
      relayId: "QXNzZXRUeXBlOjIwMDg0MTEz",
      tokenId: "777",
      backgroundColor: null,
      collection: {
        displayData: {
          cardDisplayStyle: "COVER",
        },
        imageUrl:
          "https://lh3.googleusercontent.com/ohWULOqtOWbT4UsH-nHLFfOuWiRLMIJNRYt4y9Wf5cK2B-gHt3M_DV0SdvqkJDVM6j1j4luxWlhItSdnBZXzTdBb-5UTXezejhnpKlo=s120",
        id: "Q29sbGVjdGlvblR5cGU6Mzk3MTM=",
        description:
          "Polka City | Virtual Currency Investment Platform\nPolka City | A new fully autonomous contract based NFT platform that allows you to Invest in virtual assets in the form of a virtual city.",
        hidden: false,
        name: "Polka City Asset",
        slug: "polka-city-asset",
      },
      imageUrl:
        "https://lh3.googleusercontent.com/wsnVp9_o0Zmq0-cl_-IlEuNiHRL_hxuW57vXbWL0l9Dhe3Hz44PKcY5-neOwuW0bjCPWQj7-colw94kNNgbtlYLcKoDZRvX49bb8po4",
      name: "Compact Taxi",
      id: "QXNzZXRUeXBlOjIwMDg0MTEz",
      isDelisted: false,
      favoritesCount: 1,
      isFavorite: false,
      animationUrl: null,
      description:
        "This Polka City Compact Taxi pays 60 POLC tokens every week to NFT holder.",
      hasUnlockableContent: false,
      assetEventData: {
        firstTransfer: null,
        lastSale: null,
      },
      decimals: 0,
      orderData: {
        bestBid: {
          orderType: "BASIC",
          paymentAssetQuantity: {
            asset: {
              decimals: 6,
              imageUrl:
                "https://lh3.googleusercontent.com/PxC_K0Y22A1Xs0CeVknf4YUSxSqH_1bPCG0a4uD7WRkwbbtinqryjDEvoTYSbBFDXXTliuyo38-Y_ecNUEj0fMimQA",
              symbol: "USDC",
              usdSpotPrice: 0.997532,
              assetContract: {
                blockExplorerLink:
                  "https://etherscan.io/address/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                id: "QXNzZXRDb250cmFjdFR5cGU6MjA2OQ==",
              },
              id: "QXNzZXRUeXBlOjQ0MDM5MDg=",
            },
            quantity: "3280000",
            id:
              "QXNzZXRRdWFudGl0eVR5cGU6MTE4NjQwNzM0MjI3Njk1NDQ3ODE1MzY5MTEzNTU1ODk4ODUxMDQy",
          },
        },
        bestAsk: {
          closedAt: null,
          orderType: "BASIC",
          dutchAuctionFinalPrice: null,
          openedAt: "2021-05-15T08:38:16.898207",
          priceFnEndedAt: null,
          quantity: "1",
          decimals: "0",
          paymentAssetQuantity: {
            quantity: "3300000000000000000",
            asset: {
              decimals: 18,
              imageUrl:
                "https://lh3.googleusercontent.com/7hQyiGtBt8vmUTq4T0aIUhIhT00dPhnav87TuFQ5cLtjlk724JgXdjQjoH_CzYz-z37JpPuMFbRRQuyC7I9abyZRKA",
              symbol: "ETH",
              usdSpotPrice: 3747.32,
              assetContract: {
                blockExplorerLink:
                  "https://etherscan.io/address/0x0000000000000000000000000000000000000000",
                id: "QXNzZXRDb250cmFjdFR5cGU6MjMzMQ==",
              },
              id: "QXNzZXRUeXBlOjEzNjg5MDc3",
            },
            id:
              "QXNzZXRRdWFudGl0eVR5cGU6MjY0MDI2MzcwNDY5NzkyNTAyOTgwMDk4OTQ5NjI5ODkzNjE5OTUx",
          },
        },
      },
    };
    const assetEvents = [
      {
        node: {
          assetBundle: null,
          assetQuantity: {
            asset: {
              collection: {
                name: "Polka City Asset",
                id: "Q29sbGVjdGlvblR5cGU6Mzk3MTM=",
                description:
                  "Polka City | Virtual Currency Investment Platform\nPolka City | A new fully autonomous contract based NFT platform that allows you to Invest in virtual assets in the form of a virtual city.",
                displayData: {
                  cardDisplayStyle: "COVER",
                },
                imageUrl:
                  "https://lh3.googleusercontent.com/ohWULOqtOWbT4UsH-nHLFfOuWiRLMIJNRYt4y9Wf5cK2B-gHt3M_DV0SdvqkJDVM6j1j4luxWlhItSdnBZXzTdBb-5UTXezejhnpKlo=s120",
                hidden: false,
                slug: "polka-city-asset",
              },
              name: "Compact Taxi",
              animationUrl: null,
              backgroundColor: null,
              description:
                "This Polka City Compact Taxi pays 60 POLC tokens every week to NFT holder.",
              tokenId: "1347",
              imageUrl:
                "https://lh3.googleusercontent.com/wsnVp9_o0Zmq0-cl_-IlEuNiHRL_hxuW57vXbWL0l9Dhe3Hz44PKcY5-neOwuW0bjCPWQj7-colw94kNNgbtlYLcKoDZRvX49bb8po4",
              isDelisted: false,
              assetContract: {
                account: {
                  address: "0x57e9a39ae8ec404c08f88740a9e6e306f50c937f",
                  chain: {
                    identifier: "ETHEREUM",
                    id: "Q2hhaW5UeXBlOjE=",
                  },
                  id: "QWNjb3VudFR5cGU6MjE0Nzc0MDg=",
                },
                id: "QXNzZXRDb250cmFjdFR5cGU6MTk5MTE0",
              },
              id: "QXNzZXRUeXBlOjI1MDY0MDQx",
              decimals: 0,
            },
            quantity: "1",
            id:
              "QXNzZXRRdWFudGl0eVR5cGU6MjUxNTI2OTYxNjkwNDAzNTcxOTUwNjI0MTI5OTIwODkwMjA4Mjc4",
          },
          relayId: "QXNzZXRFdmVudFR5cGU6MTYyODA1NjIy",
          eventTimestamp: "2021-05-15T15:45:02",
          eventType: "TRANSFER",
          offerEnteredClosedAt: null,
          customEventName: null,
          devFee: null,
          devFeePaymentEvent: null,
          fromAccount: {
            address: "0x0000000000000000000000000000000000000000",
            chain: {
              identifier: "ETHEREUM",
              id: "Q2hhaW5UeXBlOjE=",
            },
            user: {
              publicUsername: "NullAddress",
              id: "VXNlclR5cGU6MTc2Ng==",
            },
            imageUrl:
              "https://storage.googleapis.com/opensea-static/opensea-profile/1.png",
            id: "QWNjb3VudFR5cGU6NjAx",
          },
          price: null,
          endingPrice: null,
          seller: null,
          toAccount: {
            address: "0x453311cbf5bb83eb41124f07c306567dd7dd7ed5",
            chain: {
              identifier: "ETHEREUM",
              id: "Q2hhaW5UeXBlOjE=",
            },
            user: null,
            imageUrl:
              "https://storage.googleapis.com/opensea-static/opensea-profile/8.png",
            id: "QWNjb3VudFR5cGU6MTgzNTQyOTg=",
          },
          winnerAccount: null,
          transaction: {
            blockExplorerLink:
              "https://etherscan.io/tx/0xa6a4eae28b8e8db1a0470447f6f068032f8e8309c957aba857b7c4623c68d629",
            id: "VHJhbnNhY3Rpb25UeXBlOjExNDYxNTM0Mg==",
          },
          id: "QXNzZXRFdmVudFR5cGU6MTYyODA1NjIy",
          __typename: "AssetEventType",
        },
        cursor: "YXJyYXljb25uZWN0aW9uOjA=",
      },
    ];
    const collectionItems = [
      {
        image:
          "https://lh3.googleusercontent.com/FlgcMexXc2M--ZzbdmMySYYAkoH3JwARodlRX5x5-gIObWAE_zXyb5weGWyfz19oZwF6o-WMkEyJZ9dH1HttQWdMITfqL_N-ZTK29Q=s277",
        name: "The SandBox",
        title: "Meebit #4696",
        userId: "0x495f947276749ce646f68ac8c248420045cb7b5e",
        itemId: "74599564892152787812",
        price: "0.3549",
        endDate: null,
      },
      {
        image:
          "https://lh3.googleusercontent.com/is1AUtLwv0-NCgWPMd2iIZ3jzUUbVmfu3n6_Y5KCowU5Twio6I-2CrgeQ7dd4Z0hvNFCo_MJEX6sMeuuSolX6Mli9SktVGpllQlpFQ=s277",
        name: "Ghxsts",
        title: "Test2",
        userId: "0x495f947276749ce646f68ac8c248420045cb7b5e",
        itemId: "74599564892152787812",
        price: "0.3979",
        endDate: "05/17/2021 17:23:55",
      },
      {
        image:
          "https://lh3.googleusercontent.com/TotyjWhqCiIQmGeJPj4QBNG2qLvCd32aAoN8dQ851upPlCF3-pphRz6lbcYBIo-tr7jpOUMFmubUwVzDy6zOKOqlk11as02KLSIB=s277",
        name: "Polka City Asset",
        title: "Test3",
        userId: "0x495f947276749ce646f68ac8c248420045cb7b5e",
        itemId: "74599564892152787812",
        price: "0.4589",
        endDate: "05/19/2021 17:23:55",
      },
      {
        image:
          "https://lh3.googleusercontent.com/TAz_RirXqLCpf1xxP4Xbd1PxjbFL6NMidjDh7TYAIE84FqagL-MlphDX8BGqF-w7ayepQwefHCHFZcS2nnivJSYCefU-jR7jC-yeuw=s277",
        name: "ZED RUN",
        title: "Test4",
        userId: "0x495f947276749ce646f68ac8c248420045cb7b5e",
        itemId: "74599564892152787812",
        price: "0.7589",
        endDate: "05/21/2021 17:23:55",
      },
    ];

    return { item, assetEvents, collectionItems };
  },
});
</script>

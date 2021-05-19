<template>
  <div class="font-raleway bg-white">
    <client-only>
      <div class="flex lg:w-full">
        <div class="lg:w-3/12 border-1 border-gray-400">
          <event-type-accordion />
          <collections-accordion />
        </div>
        <div class="lg:w-9/12">
          <div class="w-full px-4 border-1 border-gray-400">
            <ul
              class="font-bold overflow-x-scroll flex items-center mt-8 lg:mt-0"
            >
              <li
                class="mx-2 lg:mx-6 lg:my-3"
                v-for="item in categories"
                :key="item.id"
              >
                <button
                  @click="changeCategory(item)"
                  :class="
                    selectedCategory == item.slug
                      ? `bg-primary`
                      : 'bg-secondary '
                  "
                  class="focus:outline-none font-bold text-white py-2 px-4 rounded-lg whitespace-nowrap"
                >
                  <p>
                    {{ item.title }}
                  </p>
                </button>
              </li>
            </ul>
          </div>
          <div
            class="w-full px-4 border-1 border-gray-400"
            v-if="assetEvents.length > 0"
          >
            <trading-history :asset-events="assetEvents" />
          </div>
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

import EventTypeAccordion from "@/components/activity/event-type-accordion.vue";
import CollectionAccordion from "@/components/activity/collections-accordion.vue";
import TradingHistory from "@/components/activity/activity-trading-history.vue";

export default defineComponent({
  layout: "home",
  name: "rankings",
  head: {},
  components: {
    EventTypeAccordion,
    CollectionAccordion,
    TradingHistory,
  },
  setup() {
    const selectedCategory = ref("all");

    const categories = [
      {
        id: 1,
        title: "All NFTs",
        slug: "all",
        icon: null,
        submenu: [],
        featured: null,
      },
      {
        id: 2,
        title: "New",
        icon: null,
        slug: "new",
        submenu: [],
        featured: null,
      },
      {
        id: 3,
        title: "Art",
        icon: null,
        slug: "art",
        submenu: [],
        featured: null,
      },
      {
        id: 4,
        title: "Domain Names",
        icon: null,
        slug: "domain-names",
        submenu: [],
        featured: null,
      },
      {
        id: 5,
        title: "Virtual Worlds",
        icon: null,
        slug: "virtual-worlds",
        submenu: [],
        featured: null,
      },
      {
        id: 6,
        title: "Trading Cards",
        icon: null,
        slug: "trading-cards",
        submenu: [],
        featured: null,
      },
      {
        id: 7,
        title: "Collectibles",
        icon: null,
        slug: "collectibles",
        submenu: [],
        featured: null,
      },
      {
        id: 8,
        title: "Sports",
        icon: null,
        slug: "sports",
        submenu: [],
        featured: null,
      },
      {
        id: 9,
        title: "Utility",
        icon: null,
        slug: "utility",
        submenu: [],
        featured: null,
      },
    ];

    const assetEvents = [
      {
        node: {
          assetBundle: null,
          assetQuantity: {
            asset: {
              collection: {
                name: "IconPunks",
                id: "Q29sbGVjdGlvblR5cGU6NTQwNzY5",
                description:
                  "24x24 pixels and pushing the limit to the max! Tribute to the original CyberPunks. Each and every piece is unique and handcrafted with love. Say hello to the IconPunks!\n\n#1 to #20 = 0.05Ξ Make a Celebrity Your Own ❤️\n\n#21 to #42 = 0.1Ξ Make a Celebrity Your Own ❤️\n\n#43+            = 0.15Ξ Make a Celebrity Your Own ❤️\n\n💛 ...or get lucky and catch a rare one for yourself 💛",
                displayData: {
                  cardDisplayStyle: "PADDED",
                },
                imageUrl:
                  "https://lh3.googleusercontent.com/2dVGNcqjWQCX8XvVsGYQYeujl-Vnf7umCbQ24QthWzFkGhhtV-6U34GI6BXBCcnAa771mmhkNzCY-wS9Qt90uioiObtP9WceP6pS0Q=s120",
                hidden: true,
                slug: "iconpunks",
              },
              name: "IconPunk #31 Oprah Winfrey",
              animationUrl: null,
              backgroundColor: null,
              description:
                "24x24 pixels and pushing the limit to the max! Tribute to the original CyberPunks. Each and every piece is unique and handcrafted with love. Say hello to the IconPunks!\n",
              tokenId:
                "32683046835590650748529297309586757746249021653440172538419983539406165245953",
              imageUrl:
                "https://lh3.googleusercontent.com/PVW23pwLIi6JOaAEkUuj37jL3O4xZ9pP5iaRdPaSHZIoy6OrSBMRE48He14ZsCAAl3bjdZWDc7KN4HlGY2IwGCVGBgn8UP4jtf7nzA8",
              isDelisted: false,
              assetContract: {
                account: {
                  address: "0x495f947276749ce646f68ac8c248420045cb7b5e",
                  chain: {
                    identifier: "ETHEREUM",
                    id: "Q2hhaW5UeXBlOjE=",
                  },
                  id: "QWNjb3VudFR5cGU6MTUwNjkwNTY=",
                },
                id: "QXNzZXRDb250cmFjdFR5cGU6MTY3OTkw",
              },
              id: "QXNzZXRUeXBlOjIzOTI3NzI0",
              decimals: null,
            },
            quantity: "1",
            id:
              "QXNzZXRRdWFudGl0eVR5cGU6Mjc5MzU1ODUwNzE2MDQ2MzY3MzI2OTQwNzY0NzI4MjU4ODkwMTUw",
          },
          relayId: "QXNzZXRFdmVudFR5cGU6MTYzOTE1MDgw",
          eventTimestamp: "2021-05-16T17:57:16.629199",
          eventType: "CREATED",
          customEventName: null,
          offerEnteredClosedAt: null,
          devFee: {
            quantity: "0",
            asset: {
              decimals: 18,
              imageUrl:
                "https://lh3.googleusercontent.com/7hQyiGtBt8vmUTq4T0aIUhIhT00dPhnav87TuFQ5cLtjlk724JgXdjQjoH_CzYz-z37JpPuMFbRRQuyC7I9abyZRKA",
              symbol: "ETH",
              usdSpotPrice: 3506.61,
              assetContract: {
                blockExplorerLink:
                  "https://etherscan.io/address/0x0000000000000000000000000000000000000000",
                id: "QXNzZXRDb250cmFjdFR5cGU6MjMzMQ==",
              },
              id: "QXNzZXRUeXBlOjEzNjg5MDc3",
            },
            id:
              "QXNzZXRRdWFudGl0eVR5cGU6NzI5NTY3NTIwOTgyOTY5MzAwMDA4MTYzMTgwNjkzNDM3ODgxNTM=",
          },
          devFeePaymentEvent: null,
          fromAccount: {
            address: "0x4841f2ef7531022ad515d606875a0538e5337e9c",
            chain: {
              identifier: "ETHEREUM",
              id: "Q2hhaW5UeXBlOjE=",
            },
            user: {
              publicUsername: "iconpunks",
              id: "VXNlclR5cGU6NzQyMzc3",
            },
            imageUrl:
              "https://lh3.googleusercontent.com/3K-E6al2pQri8T2MM-e7zbDWbAO7OKibD1jwVVkhF56dydFzP3fxVRo-tKizVhokn3rYEJ9nRuatt7DnhquzXWztxtldNN482Ii2=s100",
            id: "QWNjb3VudFR5cGU6Mzc2MTI0MzY=",
          },
          price: {
            quantity: "100000000000000000",
            asset: {
              decimals: 18,
              imageUrl:
                "https://lh3.googleusercontent.com/7hQyiGtBt8vmUTq4T0aIUhIhT00dPhnav87TuFQ5cLtjlk724JgXdjQjoH_CzYz-z37JpPuMFbRRQuyC7I9abyZRKA",
              symbol: "ETH",
              usdSpotPrice: 3506.61,
              assetContract: {
                blockExplorerLink:
                  "https://etherscan.io/address/0x0000000000000000000000000000000000000000",
                id: "QXNzZXRDb250cmFjdFR5cGU6MjMzMQ==",
              },
              id: "QXNzZXRUeXBlOjEzNjg5MDc3",
            },
            id:
              "QXNzZXRRdWFudGl0eVR5cGU6NDQ1MDc2NzMxNzEwNzI1NTY4OTI5MjY5MTE1MzQ4NjQzNjg1MDI=",
          },
          endingPrice: {
            quantity: "100000000000000000",
            asset: {
              decimals: 18,
              imageUrl:
                "https://lh3.googleusercontent.com/7hQyiGtBt8vmUTq4T0aIUhIhT00dPhnav87TuFQ5cLtjlk724JgXdjQjoH_CzYz-z37JpPuMFbRRQuyC7I9abyZRKA",
              symbol: "ETH",
              usdSpotPrice: 3506.61,
              assetContract: {
                blockExplorerLink:
                  "https://etherscan.io/address/0x0000000000000000000000000000000000000000",
                id: "QXNzZXRDb250cmFjdFR5cGU6MjMzMQ==",
              },
              id: "QXNzZXRUeXBlOjEzNjg5MDc3",
            },
            id:
              "QXNzZXRRdWFudGl0eVR5cGU6NDIyODc3MTQ2NjcxNDQzOTAzNDMyMjcxMDg2MTYzNTA5NTgzNTY=",
          },
          seller: {
            address: "0x4841f2ef7531022ad515d606875a0538e5337e9c",
            chain: {
              identifier: "ETHEREUM",
              id: "Q2hhaW5UeXBlOjE=",
            },
            user: {
              publicUsername: "iconpunks",
              id: "VXNlclR5cGU6NzQyMzc3",
            },
            imageUrl:
              "https://lh3.googleusercontent.com/3K-E6al2pQri8T2MM-e7zbDWbAO7OKibD1jwVVkhF56dydFzP3fxVRo-tKizVhokn3rYEJ9nRuatt7DnhquzXWztxtldNN482Ii2=s100",
            id: "QWNjb3VudFR5cGU6Mzc2MTI0MzY=",
          },
          toAccount: null,
          winnerAccount: null,
          transaction: null,
          id: "QXNzZXRFdmVudFR5cGU6MTYzOTE1MDgw",
        },
      },
      {
        node: {
          assetBundle: null,
          assetQuantity: {
            asset: {
              collection: {
                name: "Picasso Bored Ape Yacht Club",
                id: "Q29sbGVjdGlvblR5cGU6NTI5MzMx",
                description:
                  "Picasso Bored Ape Yacht Club is what Bored Apes would look like if they were portrayed by well known artists.\n\nThis collection is the first Picasso Bored Ape Yach Club on Opensea, you can find us on the Top 100 fastest growing collection !\n\nGive it a shot ! \n\nThis project is inspired by the Bored Ape Yacht Club and is not affiliated with the official !!",
                displayData: {
                  cardDisplayStyle: "CONTAIN",
                },
                imageUrl:
                  "https://lh3.googleusercontent.com/hExIbz3pL3nuYNm0VQScsl2URbPA5t14GcZVYEdxHPTId2L3rWgw2ZT0ZkuTuSRBtRAIPeOm0veXJ6NcKwLn3-qvXh1Wsiu0bpaGytw=s120",
                hidden: true,
                slug: "picasso-bored-ape-yacht-club",
              },
              name: "197",
              animationUrl: null,
              backgroundColor: null,
              description: null,
              tokenId:
                "13702721427538676955850561906940322384588823120176556667515484205533573939201",
              imageUrl:
                "https://lh3.googleusercontent.com/qjNl-ZqGtU8RIs8nfECVSVgd5kvl0YLeDq_7QRQeZDK1iiPXFSdMQX0-I5ZJ0EC6T_d-fVxv8TBVaf3bl5rtvACBZlgEUES6mexpPw",
              isDelisted: false,
              assetContract: {
                account: {
                  address: "0x495f947276749ce646f68ac8c248420045cb7b5e",
                  chain: {
                    identifier: "ETHEREUM",
                    id: "Q2hhaW5UeXBlOjE=",
                  },
                  id: "QWNjb3VudFR5cGU6MTUwNjkwNTY=",
                },
                id: "QXNzZXRDb250cmFjdFR5cGU6MTY3OTkw",
              },
              id: "QXNzZXRUeXBlOjI1MDc4ODUx",
              decimals: null,
            },
            quantity: "1",
            id:
              "QXNzZXRRdWFudGl0eVR5cGU6MjEwMTIwNDczNjEyNzYyNjQ4Mjc1NjY2ODM2OTMzNDUwOTI5MDgx",
          },
          relayId: "QXNzZXRFdmVudFR5cGU6MTYzOTE1MDc5",
          eventTimestamp: "2021-05-16T17:57:16.580303",
          eventType: "CREATED",
          customEventName: null,
          offerEnteredClosedAt: null,
          devFee: {
            quantity: "0",
            asset: {
              decimals: 18,
              imageUrl:
                "https://lh3.googleusercontent.com/7hQyiGtBt8vmUTq4T0aIUhIhT00dPhnav87TuFQ5cLtjlk724JgXdjQjoH_CzYz-z37JpPuMFbRRQuyC7I9abyZRKA",
              symbol: "ETH",
              usdSpotPrice: 3506.61,
              assetContract: {
                blockExplorerLink:
                  "https://etherscan.io/address/0x0000000000000000000000000000000000000000",
                id: "QXNzZXRDb250cmFjdFR5cGU6MjMzMQ==",
              },
              id: "QXNzZXRUeXBlOjEzNjg5MDc3",
            },
            id:
              "QXNzZXRRdWFudGl0eVR5cGU6NTMwNTM4NzM0ODgzOTYzMDk0ODQxODAyNzg0OTc1MTg4MTE5NTg=",
          },
          devFeePaymentEvent: null,
          fromAccount: {
            address: "0x1e4b772a0077ca0341fc507862cc7da7aa28b04e",
            chain: {
              identifier: "ETHEREUM",
              id: "Q2hhaW5UeXBlOjE=",
            },
            user: {
              publicUsername: "PicassoBoredApe",
              id: "VXNlclR5cGU6Njk3NDg5",
            },
            imageUrl:
              "https://lh3.googleusercontent.com/hExIbz3pL3nuYNm0VQScsl2URbPA5t14GcZVYEdxHPTId2L3rWgw2ZT0ZkuTuSRBtRAIPeOm0veXJ6NcKwLn3-qvXh1Wsiu0bpaGytw=s100",
            id: "QWNjb3VudFR5cGU6MzU3NTM0MzA=",
          },
          price: {
            quantity: "50000000000000000",
            asset: {
              decimals: 18,
              imageUrl:
                "https://lh3.googleusercontent.com/7hQyiGtBt8vmUTq4T0aIUhIhT00dPhnav87TuFQ5cLtjlk724JgXdjQjoH_CzYz-z37JpPuMFbRRQuyC7I9abyZRKA",
              symbol: "ETH",
              usdSpotPrice: 3506.61,
              assetContract: {
                blockExplorerLink:
                  "https://etherscan.io/address/0x0000000000000000000000000000000000000000",
                id: "QXNzZXRDb250cmFjdFR5cGU6MjMzMQ==",
              },
              id: "QXNzZXRUeXBlOjEzNjg5MDc3",
            },
            id:
              "QXNzZXRRdWFudGl0eVR5cGU6MjExNzkxNTEwODk0NDk2NTAwNzk0Njg5NjA0NTc5MDgzOTkyNjM=",
          },
          endingPrice: {
            quantity: "50000000000000000",
            asset: {
              decimals: 18,
              imageUrl:
                "https://lh3.googleusercontent.com/7hQyiGtBt8vmUTq4T0aIUhIhT00dPhnav87TuFQ5cLtjlk724JgXdjQjoH_CzYz-z37JpPuMFbRRQuyC7I9abyZRKA",
              symbol: "ETH",
              usdSpotPrice: 3506.61,
              assetContract: {
                blockExplorerLink:
                  "https://etherscan.io/address/0x0000000000000000000000000000000000000000",
                id: "QXNzZXRDb250cmFjdFR5cGU6MjMzMQ==",
              },
              id: "QXNzZXRUeXBlOjEzNjg5MDc3",
            },
            id:
              "QXNzZXRRdWFudGl0eVR5cGU6MjkwMDE5NzQ2MDQyMjQ5ODc2OTc2Mzk3MzU3MDg2MjI3MDQzMDkz",
          },
          seller: {
            address: "0x1e4b772a0077ca0341fc507862cc7da7aa28b04e",
            chain: {
              identifier: "ETHEREUM",
              id: "Q2hhaW5UeXBlOjE=",
            },
            user: {
              publicUsername: "PicassoBoredApe",
              id: "VXNlclR5cGU6Njk3NDg5",
            },
            imageUrl:
              "https://lh3.googleusercontent.com/hExIbz3pL3nuYNm0VQScsl2URbPA5t14GcZVYEdxHPTId2L3rWgw2ZT0ZkuTuSRBtRAIPeOm0veXJ6NcKwLn3-qvXh1Wsiu0bpaGytw=s100",
            id: "QWNjb3VudFR5cGU6MzU3NTM0MzA=",
          },
          toAccount: null,
          winnerAccount: null,
          transaction: null,
          id: "QXNzZXRFdmVudFR5cGU6MTYzOTE1MDc5",
        },
      },
      {
        node: {
          assetBundle: null,
          assetQuantity: {
            asset: {
              collection: {
                name: "Crypto Posters AES-256",
                id: "Q29sbGVjdGlvblR5cGU6MjY5ODU4",
                description:
                  "A collection of AES-256 encrypted messages that form famous images.",
                displayData: {
                  cardDisplayStyle: "COVER",
                },
                imageUrl:
                  "https://lh3.googleusercontent.com/yWsuH29dXjg3Mv402hFtGKL-cN4larDt3ILdx3QLOptIhXpdTqs8BtPEd6QVlqCmRn6y5SjYFD7dybU5s6hLiJ7IeZm00k9BT4doeQ=s120",
                hidden: true,
                slug: "crypto-posters-aes-256",
              },
              name: "Elon Musk",
              animationUrl: null,
              backgroundColor: null,
              description:
                "The owner of this art will receive a secret phrase to decipher the text of the art",
              tokenId:
                "9870243454359818837048173191911104292730407279767673233444380246652980559873",
              imageUrl:
                "https://lh3.googleusercontent.com/b0BR4vEAVu364ypKv0vnyJv8_7V1Hu6AiKHju3Jgb6TONRZpzMQG0sd16ysk3NLeZnikLTBbbARfYTp2Eo9MKcHfsRLUq0k6z_an",
              isDelisted: false,
              assetContract: {
                account: {
                  address: "0x495f947276749ce646f68ac8c248420045cb7b5e",
                  chain: {
                    identifier: "ETHEREUM",
                    id: "Q2hhaW5UeXBlOjE=",
                  },
                  id: "QWNjb3VudFR5cGU6MTUwNjkwNTY=",
                },
                id: "QXNzZXRDb250cmFjdFR5cGU6MTY3OTkw",
              },
              id: "QXNzZXRUeXBlOjIwNDU1OTkz",
              decimals: null,
            },
            quantity: "1",
            id:
              "QXNzZXRRdWFudGl0eVR5cGU6MzE5Nzc2NTQzNTk1NDczMjc1MDg3MDU5ODU3MTU2MTgyNTI4NzM5",
          },
          relayId: "QXNzZXRFdmVudFR5cGU6MTYzOTE1MDc4",
          eventTimestamp: "2021-05-16T17:57:15.880196",
          eventType: "CREATED",
          customEventName: null,
          offerEnteredClosedAt: null,
          devFee: {
            quantity: "0",
            asset: {
              decimals: 18,
              imageUrl:
                "https://lh3.googleusercontent.com/7hQyiGtBt8vmUTq4T0aIUhIhT00dPhnav87TuFQ5cLtjlk724JgXdjQjoH_CzYz-z37JpPuMFbRRQuyC7I9abyZRKA",
              symbol: "ETH",
              usdSpotPrice: 3506.61,
              assetContract: {
                blockExplorerLink:
                  "https://etherscan.io/address/0x0000000000000000000000000000000000000000",
                id: "QXNzZXRDb250cmFjdFR5cGU6MjMzMQ==",
              },
              id: "QXNzZXRUeXBlOjEzNjg5MDc3",
            },
            id:
              "QXNzZXRRdWFudGl0eVR5cGU6MjE2MTM0MzIwODA1Nzk5Mzg4NDc5NDk2OTQzODk5NDEzNzc4NTY3",
          },
          devFeePaymentEvent: null,
          fromAccount: {
            address: "0x15d25c1d4c0410514f01ee0953b3db495ccf112d",
            chain: {
              identifier: "ETHEREUM",
              id: "Q2hhaW5UeXBlOjE=",
            },
            user: {
              publicUsername: "Irishman",
              id: "VXNlclR5cGU6MzAwMzQz",
            },
            imageUrl:
              "https://lh3.googleusercontent.com/6nkYdbeEJWeFMbpD_g0Z5ihExZ1zv-mHZvqMbvvcT-hzEsZTp7EdYd91aKy9E3QuZ2WatCaD3L1FoDLkmyb_QHVo6dP_j8zOotfivg=s100",
            id: "QWNjb3VudFR5cGU6MjM2MzQzOTc=",
          },
          price: {
            quantity: "100000000000000000",
            asset: {
              decimals: 18,
              imageUrl:
                "https://lh3.googleusercontent.com/7hQyiGtBt8vmUTq4T0aIUhIhT00dPhnav87TuFQ5cLtjlk724JgXdjQjoH_CzYz-z37JpPuMFbRRQuyC7I9abyZRKA",
              symbol: "ETH",
              usdSpotPrice: 3506.61,
              assetContract: {
                blockExplorerLink:
                  "https://etherscan.io/address/0x0000000000000000000000000000000000000000",
                id: "QXNzZXRDb250cmFjdFR5cGU6MjMzMQ==",
              },
              id: "QXNzZXRUeXBlOjEzNjg5MDc3",
            },
            id:
              "QXNzZXRRdWFudGl0eVR5cGU6MzE0MjU2OTc3ODE4NTY1MDU5NzQ0MDczMjIyODgzNjExODYwMzIy",
          },
          endingPrice: {
            quantity: "100000000000000000",
            asset: {
              decimals: 18,
              imageUrl:
                "https://lh3.googleusercontent.com/7hQyiGtBt8vmUTq4T0aIUhIhT00dPhnav87TuFQ5cLtjlk724JgXdjQjoH_CzYz-z37JpPuMFbRRQuyC7I9abyZRKA",
              symbol: "ETH",
              usdSpotPrice: 3506.61,
              assetContract: {
                blockExplorerLink:
                  "https://etherscan.io/address/0x0000000000000000000000000000000000000000",
                id: "QXNzZXRDb250cmFjdFR5cGU6MjMzMQ==",
              },
              id: "QXNzZXRUeXBlOjEzNjg5MDc3",
            },
            id:
              "QXNzZXRRdWFudGl0eVR5cGU6MTcxMjc4NzYxMzE0MDMxMjI0MDQ5OTQxODM5OTc0MDMwMTY5MDU3",
          },
          seller: {
            address: "0x15d25c1d4c0410514f01ee0953b3db495ccf112d",
            chain: {
              identifier: "ETHEREUM",
              id: "Q2hhaW5UeXBlOjE=",
            },
            user: {
              publicUsername: "Irishman",
              id: "VXNlclR5cGU6MzAwMzQz",
            },
            imageUrl:
              "https://lh3.googleusercontent.com/6nkYdbeEJWeFMbpD_g0Z5ihExZ1zv-mHZvqMbvvcT-hzEsZTp7EdYd91aKy9E3QuZ2WatCaD3L1FoDLkmyb_QHVo6dP_j8zOotfivg=s100",
            id: "QWNjb3VudFR5cGU6MjM2MzQzOTc=",
          },
          toAccount: null,
          winnerAccount: null,
          transaction: null,
          id: "QXNzZXRFdmVudFR5cGU6MTYzOTE1MDc4",
        },
      },
      {
        node: {
          assetBundle: null,
          assetQuantity: {
            asset: {
              collection: {
                name: "Picasso CryptoBabyPunks",
                id: "Q29sbGVjdGlvblR5cGU6NDkxMzIy",
                description:
                  "Picasso CryptoBabyPunks is a digital art project on the Ethereum Blockchain paying homage to Picasso. They are unique and single edition 1/1 NFTs. Only 999 unique Picasso CryptoBabyPunks will be created. This project is inspired by the The CryptoBabyPunks and is not affiliated with CryptoBabypunks project.\r\n\r\nThe #001 To #500 = 0.05 Eth\r\nand #501 to #999 = 0.07 Eth\r\n\r\n50 PicassoBabyPunks will be minted every days!  Follow us on twitter !",
                displayData: {
                  cardDisplayStyle: "CONTAIN",
                },
                imageUrl:
                  "https://lh3.googleusercontent.com/oA4-rqCS8m8IR8TA6eyLeZgW-V1Msf5McEV7SQ7hKVBhFnvW3WoSmPau72-s1K4kh_pdfwzjP-t38ciyhNo2wcXniEeAzy3aW_zOyA=s120",
                hidden: true,
                slug: "picasso-crypto-baby-punks",
              },
              name: "PicassoCryptoBabyPunk#023",
              animationUrl: null,
              backgroundColor: null,
              description: null,
              tokenId:
                "38523556064526974801776313311462817665733308191237815610298817571963879292929",
              imageUrl:
                "https://lh3.googleusercontent.com/LO1KKejCqcJhoDw2t3fQKr9GGIIIhHNsDMxILId_XyyP1KuqLRt8AgKVj7nXsarEfGgzWv9zotSd305NrP12q1vOw_2zTUErYLf6wg",
              isDelisted: false,
              assetContract: {
                account: {
                  address: "0x495f947276749ce646f68ac8c248420045cb7b5e",
                  chain: {
                    identifier: "ETHEREUM",
                    id: "Q2hhaW5UeXBlOjE=",
                  },
                  id: "QWNjb3VudFR5cGU6MTUwNjkwNTY=",
                },
                id: "QXNzZXRDb250cmFjdFR5cGU6MTY3OTkw",
              },
              id: "QXNzZXRUeXBlOjIzMTE3ODA3",
              decimals: null,
            },
            quantity: "1",
            id:
              "QXNzZXRRdWFudGl0eVR5cGU6MjM3MjA3Njg5Mjg3MDg2OTQxNTExMjY0MjQxNjg2MDQ5NDc0MTUx",
          },
          relayId: "QXNzZXRFdmVudFR5cGU6MTYzOTE1MDc3",
          eventTimestamp: "2021-05-16T17:57:15.675941",
          eventType: "CREATED",
          customEventName: null,
          offerEnteredClosedAt: null,
          devFee: {
            quantity: "0",
            asset: {
              decimals: 18,
              imageUrl:
                "https://lh3.googleusercontent.com/7hQyiGtBt8vmUTq4T0aIUhIhT00dPhnav87TuFQ5cLtjlk724JgXdjQjoH_CzYz-z37JpPuMFbRRQuyC7I9abyZRKA",
              symbol: "ETH",
              usdSpotPrice: 3506.61,
              assetContract: {
                blockExplorerLink:
                  "https://etherscan.io/address/0x0000000000000000000000000000000000000000",
                id: "QXNzZXRDb250cmFjdFR5cGU6MjMzMQ==",
              },
              id: "QXNzZXRUeXBlOjEzNjg5MDc3",
            },
            id:
              "QXNzZXRRdWFudGl0eVR5cGU6MjE4NDcwOTAxMDQ4NDA5NDYyMTk1NjM1ODQ5MTI3NzI1NzUwODk=",
          },
          devFeePaymentEvent: null,
          fromAccount: {
            address: "0x552b8f5f024aa847ccfab62166f4602578b0500b",
            chain: {
              identifier: "ETHEREUM",
              id: "Q2hhaW5UeXBlOjE=",
            },
            user: {
              publicUsername: "PicassoArt",
              id: "VXNlclR5cGU6NTc5MDQw",
            },
            imageUrl:
              "https://storage.googleapis.com/opensea-static/opensea-profile/12.png",
            id: "QWNjb3VudFR5cGU6MjMyMzI1MDQ=",
          },
          price: {
            quantity: "50000000000000000",
            asset: {
              decimals: 18,
              imageUrl:
                "https://lh3.googleusercontent.com/7hQyiGtBt8vmUTq4T0aIUhIhT00dPhnav87TuFQ5cLtjlk724JgXdjQjoH_CzYz-z37JpPuMFbRRQuyC7I9abyZRKA",
              symbol: "ETH",
              usdSpotPrice: 3506.61,
              assetContract: {
                blockExplorerLink:
                  "https://etherscan.io/address/0x0000000000000000000000000000000000000000",
                id: "QXNzZXRDb250cmFjdFR5cGU6MjMzMQ==",
              },
              id: "QXNzZXRUeXBlOjEzNjg5MDc3",
            },
            id:
              "QXNzZXRRdWFudGl0eVR5cGU6Mzc4NDM2MDI5OTY4NDcwMTg5NTQwMDU5MjU5Nzg4NjQ2MDU4NjQ=",
          },
          endingPrice: {
            quantity: "50000000000000000",
            asset: {
              decimals: 18,
              imageUrl:
                "https://lh3.googleusercontent.com/7hQyiGtBt8vmUTq4T0aIUhIhT00dPhnav87TuFQ5cLtjlk724JgXdjQjoH_CzYz-z37JpPuMFbRRQuyC7I9abyZRKA",
              symbol: "ETH",
              usdSpotPrice: 3506.61,
              assetContract: {
                blockExplorerLink:
                  "https://etherscan.io/address/0x0000000000000000000000000000000000000000",
                id: "QXNzZXRDb250cmFjdFR5cGU6MjMzMQ==",
              },
              id: "QXNzZXRUeXBlOjEzNjg5MDc3",
            },
            id:
              "QXNzZXRRdWFudGl0eVR5cGU6MzIzNzM4NDg2Nzc5MTYyMjgzNzUwMzAxMjk0MTMwMDI4MDg5Mjg2",
          },
          seller: {
            address: "0x552b8f5f024aa847ccfab62166f4602578b0500b",
            chain: {
              identifier: "ETHEREUM",
              id: "Q2hhaW5UeXBlOjE=",
            },
            user: {
              publicUsername: "PicassoArt",
              id: "VXNlclR5cGU6NTc5MDQw",
            },
            imageUrl:
              "https://storage.googleapis.com/opensea-static/opensea-profile/12.png",
            id: "QWNjb3VudFR5cGU6MjMyMzI1MDQ=",
          },
          toAccount: null,
          winnerAccount: null,
          transaction: null,
          id: "QXNzZXRFdmVudFR5cGU6MTYzOTE1MDc3",
        },
      },
    ];

    const changeCategory = (item) => {
      selectedCategory.value = item.slug;
    };

    return {
      categories,
      selectedCategory,
      changeCategory,
      assetEvents,
    };
  },
});
</script>
<style>
html,
body {
  height: 100%;
}

@media (min-width: 640px) {
  table {
    display: inline-table !important;
  }

  thead tr:not(:first-child) {
    display: none;
  }
}

td:not(:last-child) {
  border-bottom: 0;
}

th:not(:last-child) {
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);
}
</style>


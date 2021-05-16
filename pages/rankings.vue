<template>
  <div class="my-6">
    <client-only>
      <div class="lg:w-full px-2 lg:px-24 pb-4">
        <div class="flex justify-center">
          <h2 class="font-bold text-7 lg:text-10 text-gray-900">
            Top Non-Fungible Tokens
          </h2>
        </div>
        <div class="flex justify-center my-5 mx-5 lg:mx-48">
          <p class="font-normal text-4 lg:text-4.5 text-gray-800">
            Volume, average, price and other top statistics for non-fungible
            tokens (NFTs), updated hourly.
          </p>
        </div>
      </div>
      <div class="w-full px-8 lg:px-48">
        <ul
          class="font-bold overflow-x-scroll flex items-center mt-8 lg:mt-0 pb-4"
        >
          <li
            class="mx-2 lg:mx-6 lg:my-3"
            v-for="item in categories"
            :key="item.id"
          >
            <button
              @click="changeCategory(item)"
              :class="
                selectedCategory == item.slug ? `bg-primary` : 'bg-secondary '
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
      <div class="flex justify-center my-5 mx-5 lg:mx-48">
        <table
          class="w-full flex flex-row flex-no-wrap sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-5"
        >
          <thead class="text-white">
            <tr
              v-for="(item, index) in collections"
              :key="index"
              class="bg-teal-400 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0"
            >
              <th class="p-3 text-left">Collection</th>
              <th class="p-3 text-left">7 DAY VOLUME</th>
              <th class="p-3 text-left">7 DAY CHANGE</th>
              <th class="p-3 text-left">TOTAL VOLUME</th>
              <th class="p-3 text-left">AVG PRICE</th>
              <th class="p-3 text-left">OWNERS</th>
              <th class="p-3 text-left">ASSETS</th>
            </tr>
          </thead>
          <tbody class="flex-1 sm:flex-none">
            <tr
              v-for="(item, index) in collections"
              :key="index"
              class="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0"
            >
              <td class="border-grey-light border hover:bg-gray-100 p-3">
                {{ item.node.name }}
              </td>
              <td
                class="border-grey-light border hover:bg-gray-100 p-3 truncate"
              >
                ㆔
                {{
                  new Intl.NumberFormat("en-US", {
                    maximumSignificantDigits: 6,
                  }).format(item.node.stats.sevenDayVolume)
                }}
              </td>
              <td
                class="border-grey-light border hover:bg-gray-100 p-3 truncate"
              >
                <div
                  v-if="Math.round(item.node.stats.sevenDayChange * 100) > 0"
                >
                  <p class="text-green-600">
                    {{ Math.ceil(item.node.stats.sevenDayChange * 100) }}%
                  </p>
                </div>
                <div v-else>
                  <p class="text-red-600">
                    {{ Math.ceil(item.node.stats.sevenDayChange * 100) }}%
                  </p>
                </div>
              </td>
              <td
                class="border-grey-light border hover:bg-gray-100 p-3 truncate"
              >
                ㆔{{
                  new Intl.NumberFormat("en-US", {
                    maximumSignificantDigits: 8,
                  }).format(item.node.stats.totalVolume)
                }}
              </td>
              <td
                class="border-grey-light border hover:bg-gray-100 p-3 truncate"
              >
                ㆔{{
                  new Intl.NumberFormat("en-US", {
                    maximumSignificantDigits: 4,
                  }).format(item.node.stats.averagePrice)
                }}
              </td>
              <td
                class="border-grey-light border hover:bg-gray-100 p-3 truncate"
              >
                {{
                  new Intl.NumberFormat("en-US", {
                    maximumSignificantDigits: 4,
                  }).format(item.node.stats.numOwners)
                }}
              </td>
              <td
                class="border-grey-light border hover:bg-gray-100 p-3 truncate"
              >
                {{
                  item.node.stats.totalSupply > 99999
                    ? "---"
                    : new Intl.NumberFormat("en-US", {
                        maximumSignificantDigits: 4,
                      }).format(item.node.stats.totalSupply)
                }}
              </td>
            </tr>
          </tbody>
        </table>
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

export default defineComponent({
  layout: "home",
  name: "rankings",
  head: {},
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

    const collections = [
      {
        node: {
          createdDate: "2019-04-26 22:13:09.691572",
          imageUrl:
            "https://lh3.googleusercontent.com/BdxvLseXcfl57BiuQcQYdJ64v-aI8din7WPk0Pgo3qQFhAUH-B6i-dCqqc_mCkRIzULmwzwecnohLhrcH8A9mpWIZqA7ygc52Sr81hE=s120",
          name: "CryptoPunks",
          slug: "cryptopunks",
          stats: {
            averagePrice: 14.312794885708957,
            marketCap: 232772.43684626865,
            numOwners: 2279,
            sevenDayChange: -0.531304174732317,
            sevenDayVolume: 4626.7449,
            totalSupply: 9999,
            totalVolume: 171153.638448422,
            id: "Q29sbGVjdGlvblN0YXRzVHlwZToyNTYz",
          },
          id: "Q29sbGVjdGlvblR5cGU6MjU2Mw==",
          __typename: "CollectionType",
        },
        cursor: "YXJyYXljb25uZWN0aW9uOjA=",
      },
      {
        node: {
          createdDate: "2021-05-03 01:32:41.897161",
          imageUrl:
            "https://lh3.googleusercontent.com/d784iHHbqQFVH1XYD6HoT4u3y_Fsu_9FZUltWjnOzoYv7qqB5dLUqpGyHBd8Gq3h4mykK5Enj8pxqOUorgD2PfIWcVj9ugvu8l0=s120",
          name: "Meebits",
          slug: "meebits",
          stats: {
            averagePrice: 5.2434712604483416,
            marketCap: 100971.0862064302,
            numOwners: 4600,
            sevenDayChange: -0.8434377103398993,
            sevenDayVolume: 2461.22629265806,
            totalSupply: 20000,
            totalVolume: 18181.6548709666,
            id: "Q29sbGVjdGlvblN0YXRzVHlwZTo1MzY1MzU=",
          },
          id: "Q29sbGVjdGlvblR5cGU6NTM2NTM1",
          __typename: "CollectionType",
        },
        cursor: "YXJyYXljb25uZWN0aW9uOjE=",
      },
      {
        node: {
          createdDate: "2021-03-03 01:21:00.501733",
          imageUrl:
            "https://lh3.googleusercontent.com/tgpgbT3OwxX4REASLdyafzCWQ5EhOtgSiIlhI3am3aZ_mYPS0WbM9Z4F6hOhb0D-AKqhHlFg6BNBquchQy-_bwY=s120",
          name: "ZED RUN",
          slug: "zed-run-official",
          stats: {
            averagePrice: 0.5331572373292324,
            marketCap: 13629.252305528746,
            numOwners: 6542,
            sevenDayChange: 0.2551587199233369,
            sevenDayVolume: 1512.55189708285,
            totalSupply: 26970,
            totalVolume: 6109.71156594308,
            id: "Q29sbGVjdGlvblN0YXRzVHlwZTo2MTE3Mw==",
          },
          id: "Q29sbGVjdGlvblR5cGU6NjExNzM=",
          __typename: "CollectionType",
        },
        cursor: "YXJyYXljb25uZWN0aW9uOjI=",
      },
      {
        node: {
          createdDate: "2020-01-01 13:22:57.777065",
          imageUrl:
            "https://lh3.googleusercontent.com/FG0QJ00fN3c_FWuPeUr9-T__iQl63j9hn5d6svW8UqOmia5zp3lKHPkJuHcvhZ0f_Pd6P2COo9tt9zVUvdPxG_9BBw=s60",
          name: "Rarible",
          slug: "rarible",
          stats: {
            averagePrice: 0.000041104875929428,
            marketCap: 2562893413536172.5,
            numOwners: 132988,
            sevenDayChange: -0.5545688945879774,
            sevenDayVolume: 681.467488423118,
            totalSupply: 42384333329440400,
            totalVolume: 83682.1153573809,
            id: "Q29sbGVjdGlvblN0YXRzVHlwZTo2MDYx",
          },
          id: "Q29sbGVjdGlvblR5cGU6NjA2MQ==",
          __typename: "CollectionType",
        },
        cursor: "YXJyYXljb25uZWN0aW9uOjM=",
      },
      {
        node: {
          createdDate: "2019-04-26 22:13:23.645797",
          imageUrl:
            "https://lh3.googleusercontent.com/-1VbTF_qOdwTUTxW8KzJbFcMX0-mDF-BJM-gmmRl8ihvoo53PF_1z1m1snLXxwcxVFyJH7wk_kouq-KVyB55N9U=s60",
          name: "SuperRare",
          slug: "superrare",
          stats: {
            averagePrice: 2.1936544965496907,
            marketCap: 348940.5587027027,
            numOwners: 4025,
            sevenDayChange: 2.529824130407406,
            sevenDayVolume: 568.984,
            totalSupply: 22683,
            totalVolume: 36513.3793060272,
            id: "Q29sbGVjdGlvblN0YXRzVHlwZToyOTQx",
          },
          id: "Q29sbGVjdGlvblR5cGU6Mjk0MQ==",
          __typename: "CollectionType",
        },
        cursor: "YXJyYXljb25uZWN0aW9uOjQ=",
      },
      {
        node: {
          createdDate: "2019-07-04 10:01:29.511736",
          imageUrl:
            "https://lh3.googleusercontent.com/gj47nmAR3valkmpVbwamiuTJfWEWSCyVeORdjM6DRWrZ1o8WaqBxFXmpBrzZnGoWaPwq1Y0jiXRrBLbnLcawAp92=s120",
          name: "Sorare",
          slug: "sorare",
          stats: {
            averagePrice: 0.12514621564751086,
            marketCap: 12247.133716620281,
            numOwners: 18625,
            sevenDayChange: -0.18247306530809224,
            sevenDayVolume: 503.490720641314,
            totalSupply: 261811,
            totalVolume: 41718.5080159322,
            id: "Q29sbGVjdGlvblN0YXRzVHlwZTozNzU0",
          },
          id: "Q29sbGVjdGlvblR5cGU6Mzc1NA==",
          __typename: "CollectionType",
        },
        cursor: "YXJyYXljb25uZWN0aW9uOjU=",
      },
      {
        node: {
          createdDate: "2021-04-11 15:54:01.284597",
          imageUrl:
            "https://lh3.googleusercontent.com/ZTBjAOy61poNh1htSHJ-BeokMpvbui7DdUUMIVk1OI1MtcpGN6sG_oHs38r3AF1JO1l-AxVQZ-aam_h43Dr0XZZC2jblvNYUmZLyTkw=s120",
          name: "VoxoDeus Minter",
          slug: "voxodeus-minter",
          stats: {
            averagePrice: 0.30158311345646405,
            marketCap: 0.49879032258064515,
            numOwners: 1,
            sevenDayChange: -0.5696786792117899,
            sevenDayVolume: 242.4,
            totalSupply: 1,
            totalVolume: 914.399999999998,
            id: "Q29sbGVjdGlvblN0YXRzVHlwZTo0MjQwMzQ=",
          },
          id: "Q29sbGVjdGlvblR5cGU6NDI0MDM0",
          __typename: "CollectionType",
        },
        cursor: "YXJyYXljb25uZWN0aW9uOjY=",
      },
      {
        node: {
          createdDate: "2021-04-22 23:14:03.967121",
          imageUrl:
            "https://lh3.googleusercontent.com/Ju9CkWtV-1Okvf45wo8UctR-M9He2PjILP0oOvxE89AyiPPGtrR3gysu1Zgy0hjd2xKIgjJJtWIc0ybj4Vd7wv8t3pxDGHoJBzDB=s120",
          name: "Bored Ape Yacht Club",
          slug: "boredapeyachtclub",
          stats: {
            averagePrice: 0.6336779449991932,
            marketCap: 6057.055192298855,
            numOwners: 2814,
            sevenDayChange: -0.9146606987136938,
            sevenDayVolume: 232.854469057345,
            totalSupply: 10000,
            totalVolume: 3913.85193858213,
            id: "Q29sbGVjdGlvblN0YXRzVHlwZTo0ODg2MjE=",
          },
          id: "Q29sbGVjdGlvblR5cGU6NDg4NjIx",
          __typename: "CollectionType",
        },
        cursor: "YXJyYXljb25uZWN0aW9uOjc=",
      },
      {
        node: {
          createdDate: "2019-04-26 22:13:21.651227",
          imageUrl:
            "https://lh3.googleusercontent.com/5KIxEGmnAiL5psnMCSLPlfSxDxfRSk4sTQRSyhPdgnu70nGb2YsuVxTmO2iKEkOZOfq476Bl1hAu6aJIKjs1myY=s60",
          name: "Decentraland",
          slug: "decentraland",
          stats: {
            averagePrice: 8.874220520448468,
            marketCap: 187465.1951793161,
            numOwners: 4483,
            sevenDayChange: -0.5603742075003897,
            sevenDayVolume: 192.359035375415,
            totalSupply: 96757,
            totalVolume: 105128.355872779,
            id: "Q29sbGVjdGlvblN0YXRzVHlwZToyODk0",
          },
          id: "Q29sbGVjdGlvblR5cGU6Mjg5NA==",
          __typename: "CollectionType",
        },
        cursor: "YXJyYXljb25uZWN0aW9uOjg=",
      },
      {
        node: {
          createdDate: "2020-11-27 15:58:37.366034",
          imageUrl:
            "https://lh3.googleusercontent.com/ClKm5VUVeA_XuEvxx_jaDyCodqLqQcSNI6Cjk1S_b6YAMK6kLp8t4175jvmb9lQMiv9mWVFcbh4XksrhnHYqwoPD2tOxmVNK6Qn6=s120",
          name: "Art Blocks Curated",
          slug: "art-blocks",
          stats: {
            averagePrice: 0.9801539064449626,
            marketCap: 17349.73619018903,
            numOwners: 3810,
            sevenDayChange: 0.0979473884173996,
            sevenDayVolume: 153.635440014502,
            totalSupply: 27276,
            totalVolume: 9692.11308627906,
            id: "Q29sbGVjdGlvblN0YXRzVHlwZToxMzY1Mw==",
          },
          id: "Q29sbGVjdGlvblR5cGU6MTM2NTM=",
          __typename: "CollectionType",
        },
        cursor: "YXJyYXljb25uZWN0aW9uOjk=",
      },
      {
        node: {
          createdDate: "2019-04-26 22:13:23.350126",
          imageUrl:
            "https://lh3.googleusercontent.com/BX7cWHwWFzo6FVh-Ql_qzFbXtADQgLLlpLOl3l9tS6hUPlgtGHgHn_E1FxiHXmzNlvig00ZEAk9uZU-tMPT2Fg=s60",
          name: "Autoglyphs",
          slug: "autoglyphs",
          stats: {
            averagePrice: 18.878936262292303,
            marketCap: 30720,
            numOwners: 130,
            sevenDayChange: -0.5294117647058824,
            sevenDayVolume: 120,
            totalSupply: 512,
            totalVolume: 8042.43028277973,
            id: "Q29sbGVjdGlvblN0YXRzVHlwZToyOTM1",
          },
          id: "Q29sbGVjdGlvblR5cGU6MjkzNQ==",
          __typename: "CollectionType",
        },
        cursor: "YXJyYXljb25uZWN0aW9uOjEw",
      },
      {
        node: {
          createdDate: "2019-04-26 22:13:21.329117",
          imageUrl:
            "https://lh3.googleusercontent.com/Jy6UrKMSi0e9w9jYtC1ON-4tOVXA1mXLk7XCLxvWEDuXeLFExJSYnw2DLAGtP3Ly98WJbrrFm6xEodcrpGnKB2tF=s60",
          name: "Cryptovoxels",
          slug: "cryptovoxels",
          stats: {
            averagePrice: 2.0882911735335403,
            marketCap: 9535.968479564872,
            numOwners: 1201,
            sevenDayChange: -0.1149286012525859,
            sevenDayVolume: 119.9139171892,
            totalSupply: 4791,
            totalVolume: 15472.1575515343,
            id: "Q29sbGVjdGlvblN0YXRzVHlwZToyODg2",
          },
          id: "Q29sbGVjdGlvblR5cGU6Mjg4Ng==",
          __typename: "CollectionType",
        },
        cursor: "YXJyYXljb25uZWN0aW9uOjEx",
      },
      {
        node: {
          createdDate: "2021-04-11 16:15:12.862715",
          imageUrl:
            "https://lh3.googleusercontent.com/kSv-wxu6r8kUaQp2CyUKGbLCyp50nEpPFuVDmjVbi8Sh1pqdPSAOnn9ityAYs3exfaijTxEUifxjERx9YS9imEHDzwvr3UoFTcBIMQ=s120",
          name: "VoxoDeus",
          slug: "voxodeus",
          stats: {
            averagePrice: 0.6629880590976875,
            marketCap: 2056.8477223516747,
            numOwners: 1147,
            sevenDayChange: 14.971790080869141,
            sevenDayVolume: 102.045837067828,
            totalSupply: 3033,
            totalVolume: 108.434966686433,
            id: "Q29sbGVjdGlvblN0YXRzVHlwZTo0MjQxOTc=",
          },
          id: "Q29sbGVjdGlvblR5cGU6NDI0MTk3",
          __typename: "CollectionType",
        },
        cursor: "YXJyYXljb25uZWN0aW9uOjEy",
      },
      {
        node: {
          createdDate: "2021-01-28 15:01:12.705115",
          imageUrl:
            "https://lh3.googleusercontent.com/6X867ZmCsuYcjHpx-nmNkXeHaDFd2m-EDEEkExVLKETphkfcrpRJOyzFxRQlc-29J0e-9mB9uDGze0O9yracSA9ibnQm2sIq5i2Yuw=s120",
          name: "Hashmasks",
          slug: "hashmasks",
          stats: {
            averagePrice: 2.448594972266873,
            marketCap: 24739.36908598013,
            numOwners: 4201,
            sevenDayChange: -0.05439195301528704,
            sevenDayVolume: 98.181885703389,
            totalSupply: 16383,
            totalVolume: 30019.40806118,
            id: "Q29sbGVjdGlvblN0YXRzVHlwZToyMTUxOQ==",
          },
          id: "Q29sbGVjdGlvblR5cGU6MjE1MTk=",
          __typename: "CollectionType",
        },
        cursor: "YXJyYXljb25uZWN0aW9uOjEz",
      },
      {
        node: {
          createdDate: "2021-04-13 23:45:21.662101",
          imageUrl:
            "https://lh3.googleusercontent.com/8OogKrYF_3kTL3w_8J_TwEWTn6E4OS_SP5EVdeAJnw7GycEJJy36uZYkLKoMnrX-ObWNYlMpEIu5fGoRMtJrkL8HRnVz4gY8jrD2Cw=s120",
          name: "Apymon",
          slug: "apymon",
          stats: {
            averagePrice: 0.5711371792653845,
            marketCap: 3633.154239696791,
            numOwners: 1489,
            sevenDayChange: -0.8300889150286085,
            sevenDayVolume: 95.4979791419933,
            totalSupply: 6400,
            totalVolume: 729.345066435989,
            id: "Q29sbGVjdGlvblN0YXRzVHlwZTo0Mzk4Nzc=",
          },
          id: "Q29sbGVjdGlvblR5cGU6NDM5ODc3",
          __typename: "CollectionType",
        },
        cursor: "YXJyYXljb25uZWN0aW9uOjE0",
      },
      {
        node: {
          createdDate: "2019-12-04 10:58:29.069907",
          imageUrl:
            "https://lh3.googleusercontent.com/SXH8tW1siikB80rwCRnjm1a5xM_MwTg9Xl9Db6mioIk9HIlDM09pVoSR7GKJgS6ulSUpgW9BDtMk_ePX_NKgO9A=s60",
          name: "The Sandbox",
          slug: "sandbox",
          stats: {
            averagePrice: 0.36499144465050004,
            marketCap: 75606.57330451859,
            numOwners: 9931,
            sevenDayChange: -0.3185180320089018,
            sevenDayVolume: 88.8939042227687,
            totalSupply: 254496,
            totalVolume: 12502.1987069165,
            id: "Q29sbGVjdGlvblN0YXRzVHlwZTo1NjA0",
          },
          id: "Q29sbGVjdGlvblR5cGU6NTYwNA==",
          __typename: "CollectionType",
        },
        cursor: "YXJyYXljb25uZWN0aW9uOjE1",
      },
      {
        node: {
          createdDate: "2021-03-12 13:52:47.949993",
          imageUrl:
            "https://lh3.googleusercontent.com/3zPygmA4mawSxavBs57kDSVoIAwA1lyuuPf0yViVS9E8YFJk4xd2m-wFuR-eRa_7pV7RlNMGDm_93l9fw1Dmtw5mnoyxpJRfErbiaA=s120",
          name: "Malachite",
          slug: "malachite",
          stats: {
            averagePrice: 6.262782389315511,
            marketCap: 789.9361235385459,
            numOwners: 14,
            sevenDayChange: 1.188188707863008,
            sevenDayVolume: 83.1511708987943,
            totalSupply: 76,
            totalVolume: 281.825207519198,
            id: "Q29sbGVjdGlvblN0YXRzVHlwZToxMjU2ODk=",
          },
          id: "Q29sbGVjdGlvblR5cGU6MTI1Njg5",
          __typename: "CollectionType",
        },
        cursor: "YXJyYXljb25uZWN0aW9uOjE2",
      },
      {
        node: {
          createdDate: "2019-04-26 22:13:09.417671",
          imageUrl:
            "https://lh3.googleusercontent.com/KgKgvjxO8YUDbr747VRfmAEqhvjP8GzNIC23UMheTkzUQ1JmOK07FQ6BhlfBOtrKG_Jm7NoasA6PVch_0Ujf55mp=s60",
          name: "MakersPlace",
          slug: "makersplace",
          stats: {
            averagePrice: 0.876422898338607,
            marketCap: 41355.752040252155,
            numOwners: 9543,
            sevenDayChange: -0.5919436167311454,
            sevenDayVolume: 79.69171,
            totalSupply: 61949,
            totalVolume: 12935.7477309099,
            id: "Q29sbGVjdGlvblN0YXRzVHlwZToyNTUz",
          },
          id: "Q29sbGVjdGlvblR5cGU6MjU1Mw==",
          __typename: "CollectionType",
        },
        cursor: "YXJyYXljb25uZWN0aW9uOjE3",
      },
      {
        node: {
          createdDate: "2021-02-23 21:13:01.495096",
          imageUrl:
            "https://lh3.googleusercontent.com/ohWULOqtOWbT4UsH-nHLFfOuWiRLMIJNRYt4y9Wf5cK2B-gHt3M_DV0SdvqkJDVM6j1j4luxWlhItSdnBZXzTdBb-5UTXezejhnpKlo=s120",
          name: "Polka City Asset",
          slug: "polka-city-asset",
          stats: {
            averagePrice: 12.62021934234063,
            marketCap: 24416.9,
            numOwners: 931,
            sevenDayChange: 17.1,
            sevenDayVolume: 72.4,
            totalSupply: 1349,
            totalVolume: 782.483701195755,
            id: "Q29sbGVjdGlvblN0YXRzVHlwZTozOTcxMw==",
          },
          id: "Q29sbGVjdGlvblR5cGU6Mzk3MTM=",
          __typename: "CollectionType",
        },
        cursor: "YXJyYXljb25uZWN0aW9uOjE4",
      },
      {
        node: {
          createdDate: "2021-05-02 00:12:04.318582",
          imageUrl:
            "https://lh3.googleusercontent.com/uVziXd8Q64_zvofgrKFp5SmrcObngHoVWZMJQOHAZ3bdERsO4GaYvQcuGsz0ofr8zy8iajJdNQHCwFkSdBmkVy_osTPvoAuQFv489g=s120",
          name: "Ghxsts",
          slug: "ghxsts",
          stats: {
            averagePrice: 0.6457215294117647,
            marketCap: 197.3633918918919,
            numOwners: 55,
            sevenDayChange: 1.022533436596899,
            sevenDayVolume: 66.1071,
            totalSupply: 105,
            totalVolume: 98.795394,
            id: "Q29sbGVjdGlvblN0YXRzVHlwZTo1MzA2NjY=",
          },
          id: "Q29sbGVjdGlvblR5cGU6NTMwNjY2",
          __typename: "CollectionType",
        },
        cursor: "YXJyYXljb25uZWN0aW9uOjE5",
      },
      {
        node: {
          createdDate: "2019-09-09 12:59:27.887680",
          imageUrl:
            "https://lh3.googleusercontent.com/mzUNo5vk95qQfpAbXir0_6oJmZlyqnq_ix3BIjmfeVGrFPoxeAqf-vYHMvh115bSdJGxRtgGTWKldOzdJQGtEqGW=s120",
          name: "Somnium Space VR",
          slug: "somnium-space",
          stats: {
            averagePrice: 6.374571827816012,
            marketCap: 12416.149993028248,
            numOwners: 589,
            sevenDayChange: -0.7714638728479487,
            sevenDayVolume: 59.5162949427035,
            totalSupply: 5553,
            totalVolume: 20114.9555219417,
            id: "Q29sbGVjdGlvblN0YXRzVHlwZTo0NTc3",
          },
          id: "Q29sbGVjdGlvblR5cGU6NDU3Nw==",
          __typename: "CollectionType",
        },
        cursor: "YXJyYXljb25uZWN0aW9uOjIw",
      },
      {
        node: {
          createdDate: "2021-04-11 02:48:28.230699",
          imageUrl:
            "https://lh3.googleusercontent.com/jfaxQ_5s4pzm8Mi6tJwf1KKVaSZ5cr9Lq4Wsl_dugYGVMN82C3QVUT6LJ8l6i8-cj0U0UFMwPrEzNttH2wOJEcOn_FkfkdgqdUmOxw=s120",
          name: "Kaber Vasuki - Early Demos",
          slug: "kaber-vasuki-demo-collection-issue-01",
          stats: {
            averagePrice: 50,
            marketCap: 50,
            numOwners: 1,
            sevenDayChange: 0,
            sevenDayVolume: 50,
            totalSupply: 1,
            totalVolume: 50,
            id: "Q29sbGVjdGlvblN0YXRzVHlwZTo0MjA2MjA=",
          },
          id: "Q29sbGVjdGlvblR5cGU6NDIwNjIw",
          __typename: "CollectionType",
        },
        cursor: "YXJyYXljb25uZWN0aW9uOjIx",
      },
      {
        node: {
          createdDate: "2021-05-13 03:21:02.389141",
          imageUrl:
            "https://lh3.googleusercontent.com/WaqC68uGk9jMOmFdrwP3Pd66Y58HxDq4RUZqqc--Ap1OWAOTAEX9Py9RHfSr0DhDmPYCUlvNfLbRTqRLpZ5GWBiBzmlSU4_LJXhf=s120",
          name: "PXIN GXNG",
          slug: "pxin-gxng",
          stats: {
            averagePrice: 0.11070409113636365,
            marketCap: 33.32193143204539,
            numOwners: 137,
            sevenDayChange: 0,
            sevenDayVolume: 49.1098001,
            totalSupply: 301,
            totalVolume: 49.1098001,
            id: "Q29sbGVjdGlvblN0YXRzVHlwZTo2MTI0OTA=",
          },
          id: "Q29sbGVjdGlvblR5cGU6NjEyNDkw",
          __typename: "CollectionType",
        },
        cursor: "YXJyYXljb25uZWN0aW9uOjIy",
      },
      {
        node: {
          createdDate: "2019-04-26 22:13:07.714868",
          imageUrl:
            "https://lh3.googleusercontent.com/sQNyTCyW4SZ9BNTSnB0FdLCQY4B38czEP65BoCbF_18oKydeuxcG3TdDW0aoWePvay29CRjxvqRVDk4ERGhLo1w1=s60",
          name: "Urbit ID",
          slug: "urbit-id",
          stats: {
            averagePrice: 2.5356713792995973,
            marketCap: 23021.954613223723,
            numOwners: 5906,
            sevenDayChange: 4.08315948371608,
            sevenDayVolume: 34.392657066823,
            totalSupply: 12054,
            totalVolume: 5350.66998882002,
            id: "Q29sbGVjdGlvblN0YXRzVHlwZToyNDg5",
          },
          id: "Q29sbGVjdGlvblR5cGU6MjQ4OQ==",
          __typename: "CollectionType",
        },
        cursor: "YXJyYXljb25uZWN0aW9uOjIz",
      },
      {
        node: {
          createdDate: "2021-05-04 19:53:16.930034",
          imageUrl:
            "https://lh3.googleusercontent.com/8My7rmWHJCAi35QSp2IMf50NRNIRJelpEdassqIxiL6Q_m2SE2qG7QKIT_1wfXH2afDcACiWVGrt2jkfHqHKlElttUTdL6dmC9G0Mpk=s120",
          name: "Uniswap V3 Positions",
          slug: "uniswap-v3-positions",
          stats: {
            averagePrice: 1.1628394159304194,
            marketCap: 18669.59020562154,
            numOwners: 9146,
            sevenDayChange: 11.654553747667801,
            sevenDayVolume: 33.408021893843,
            totalSupply: 15153,
            totalVolume: 36.048021893843,
            id: "Q29sbGVjdGlvblN0YXRzVHlwZTo1NDcwMjA=",
          },
          id: "Q29sbGVjdGlvblR5cGU6NTQ3MDIw",
          __typename: "CollectionType",
        },
        cursor: "YXJyYXljb25uZWN0aW9uOjI0",
      },
      {
        node: {
          createdDate: "2021-05-07 15:54:53.503724",
          imageUrl:
            "https://lh3.googleusercontent.com/4Aox1xdBwRk-zk23tzQobgAMH5EmD70aYIWUtLFnneFm0OxwolSy-Aa2nwZw0p1tbe5xPM8wFJ1gSloAUU-UJnDdB9qiiJxGTQ5Xmg=s120",
          name: "D'EVOLs",
          slug: "devols1",
          stats: {
            averagePrice: 0.48194038461538463,
            marketCap: 24.578959615384615,
            numOwners: 30,
            sevenDayChange: 0,
            sevenDayVolume: 25.0609,
            totalSupply: 51,
            totalVolume: 25.0609,
            id: "Q29sbGVjdGlvblN0YXRzVHlwZTo1NjIwMjM=",
          },
          id: "Q29sbGVjdGlvblR5cGU6NTYyMDIz",
          __typename: "CollectionType",
        },
        cursor: "YXJyYXljb25uZWN0aW9uOjI1",
      },
      {
        node: {
          createdDate: "2021-04-05 12:40:46.091120",
          imageUrl:
            "https://lh3.googleusercontent.com/As-mBbeR0kQrbjpT9cvmmTuRqM9nTAXKd2q0GZqPxPNg9S7fihp4bJ4cIOL1kFuRgXjsfk4TBWF52_kh9iRCRdiP9IDICkJURAUwbg=s120",
          name: "The Meta Key",
          slug: "the-meta-key",
          stats: {
            averagePrice: 0.25263526878795883,
            marketCap: 459.1212686567164,
            numOwners: 773,
            sevenDayChange: -0.92840728534883,
            sevenDayVolume: 24.6089,
            totalSupply: 1250,
            totalVolume: 368.343595910127,
            id: "Q29sbGVjdGlvblN0YXRzVHlwZTozODM1MjU=",
          },
          id: "Q29sbGVjdGlvblR5cGU6MzgzNTI1",
          __typename: "CollectionType",
        },
        cursor: "YXJyYXljb25uZWN0aW9uOjI2",
      },
      {
        node: {
          createdDate: "2020-08-26 07:03:43.392725",
          imageUrl:
            "https://lh3.googleusercontent.com/PdnY4O8jliS51Gc085XSCSKSSErTuxY-qYKK1P9OmnmmU7wKC_u26iJQk76pXpI9zYMX2JgBlYJl6cDkUBEys4zR=s120",
          name: "Meme Ltd.",
          slug: "meme-ltd",
          stats: {
            averagePrice: 0.5675547049508468,
            marketCap: 18148.403061657184,
            numOwners: 7206,
            sevenDayChange: 0.725554691141419,
            sevenDayVolume: 22.339946540576,
            totalSupply: 51242,
            totalVolume: 4170.81454457915,
            id: "Q29sbGVjdGlvblN0YXRzVHlwZToxMTMxNQ==",
          },
          id: "Q29sbGVjdGlvblR5cGU6MTEzMTU=",
          __typename: "CollectionType",
        },
        cursor: "YXJyYXljb25uZWN0aW9uOjI3",
      },
      {
        node: {
          createdDate: "2021-04-14 14:01:40.099989",
          imageUrl:
            "https://lh3.googleusercontent.com/5obdKIWuvuh2dHdYUIg-tPZDNNBLBbKRt1gTzrlg11liG-Kzv9OLu-OXkcudgLS8ryoonU1SIu6J6D_QWYx3YON_7fHJZzZNsJ0suQ=s120",
          name: "Artvatars",
          slug: "artvatars",
          stats: {
            averagePrice: 0.24533158427105883,
            marketCap: 1240.8398596171571,
            numOwners: 1580,
            sevenDayChange: -0.13072313458849522,
            sevenDayVolume: 22.0498608797679,
            totalSupply: 6716,
            totalVolume: 298.644444601506,
            id: "Q29sbGVjdGlvblN0YXRzVHlwZTo0NDMzMjQ=",
          },
          id: "Q29sbGVjdGlvblR5cGU6NDQzMzI0",
          __typename: "CollectionType",
        },
        cursor: "YXJyYXljb25uZWN0aW9uOjI4",
      },
      {
        node: {
          createdDate: "2021-04-13 15:49:29.335556",
          imageUrl:
            "https://lh3.googleusercontent.com/DrHy5GRDYIa3KNjowp5l8dkBfj7XLMGn46GPxB_KhE6i4Z6YKoVwYxNKJEuscimyyOEIPUA5G1gLJcY1yKFZ_1dmGrMoRKqHjkP1wYM=s120",
          name: "SHIKI31",
          slug: "shiki31",
          stats: {
            averagePrice: 5.132588235294118,
            marketCap: 43.14,
            numOwners: 8,
            sevenDayChange: 0.7119047619047619,
            sevenDayVolume: 21.57,
            totalSupply: 10,
            totalVolume: 87.254,
            id: "Q29sbGVjdGlvblN0YXRzVHlwZTo0MzcyMzE=",
          },
          id: "Q29sbGVjdGlvblR5cGU6NDM3MjMx",
          __typename: "CollectionType",
        },
        cursor: "YXJyYXljb25uZWN0aW9uOjI5",
      },
      {
        node: {
          createdDate: "2021-04-07 04:33:00.091794",
          imageUrl:
            "https://lh3.googleusercontent.com/en1TvkhDtBpMHayO1cDe9Z6x0zQsz1qARmF14shtNtfmv0e3QhLqT2XEAwN02pTScOPO56OgqJ8i6QAIpFJZSL-hcZbhxCGULUNsFA=s120",
          name: "Fortune Teller Collection",
          slug: "fortune-teller-collection",
          stats: {
            averagePrice: 1.5902406666224376,
            marketCap: 2791.0753125,
            numOwners: 1007,
            sevenDayChange: -0.41850404688808257,
            sevenDayVolume: 20.835,
            totalSupply: 2103,
            totalVolume: 152.669630577848,
            id: "Q29sbGVjdGlvblN0YXRzVHlwZTozOTU4Mjc=",
          },
          id: "Q29sbGVjdGlvblR5cGU6Mzk1ODI3",
          __typename: "CollectionType",
        },
        cursor: "YXJyYXljb25uZWN0aW9uOjMw",
      },
      {
        node: {
          createdDate: "2021-04-21 11:58:09.105191",
          imageUrl:
            "https://lh3.googleusercontent.com/xVLaaQShl3vNXCc9IDoVAzhOcjS4txErZTFgUJqEKQ9e7di1-JWN5uoXWBvPTBOnTc_DoeFmszpJgch_QdGeCudMqzTUtl0XDhbQLw=s120",
          name: "Ksoids",
          slug: "ksoids",
          stats: {
            averagePrice: 0.400153792773048,
            marketCap: 250.39577562594096,
            numOwners: 198,
            sevenDayChange: -0.09734008439117602,
            sevenDayVolume: 20.2328493769531,
            totalSupply: 1000,
            totalVolume: 174.867207441822,
            id: "Q29sbGVjdGlvblN0YXRzVHlwZTo0ODEyMzU=",
          },
          id: "Q29sbGVjdGlvblR5cGU6NDgxMjM1",
          __typename: "CollectionType",
        },
        cursor: "YXJyYXljb25uZWN0aW9uOjMx",
      },
      {
        node: {
          createdDate: "2021-04-12 05:10:03.004851",
          imageUrl:
            "https://lh3.googleusercontent.com/ijC_URNi0k014Oqzfp2-1K73DUCfTcOTcm84ny_5pXeSUKMw3iUV-WSZU_5UZlVKiuA5BnFZGvvysoqvxQerQQMmizl5aDN3BGjtzw=s120",
          name: "The Fungible by Pak",
          slug: "the-fungible-by-pak",
          stats: {
            averagePrice: 1.0194935895783526,
            marketCap: 12528.376,
            numOwners: 547,
            sevenDayChange: 0.13879818983788728,
            sevenDayVolume: 19.88,
            totalSupply: 6302,
            totalVolume: 78.0739173382001,
            id: "Q29sbGVjdGlvblN0YXRzVHlwZTo0Mjc5OTI=",
          },
          id: "Q29sbGVjdGlvblR5cGU6NDI3OTky",
          __typename: "CollectionType",
        },
        cursor: "YXJyYXljb25uZWN0aW9uOjMy",
      },
      {
        node: {
          createdDate: "2020-10-06 14:44:37.466864",
          imageUrl:
            "https://lh3.googleusercontent.com/zH2rP3EBA9cpYdlxCkQhLAiJzqyoIIkQ6ex5YkbRczElE6H4-suVezS7gOkM143PFcns_WYvN0qwWKF2eJAL57t_0COOK5VGP5Y5Bw=s120",
          name: "Mirandus",
          slug: "mirandus",
          stats: {
            averagePrice: 0.5151912794122933,
            marketCap: 10132.138350210107,
            numOwners: 2390,
            sevenDayChange: -0.30777935111782984,
            sevenDayVolume: 18.7126213863914,
            totalSupply: 31154,
            totalVolume: 788.307496195631,
            id: "Q29sbGVjdGlvblN0YXRzVHlwZToxMTk4NQ==",
          },
          id: "Q29sbGVjdGlvblR5cGU6MTE5ODU=",
          __typename: "CollectionType",
        },
        cursor: "YXJyYXljb25uZWN0aW9uOjMz",
      },
      {
        node: {
          createdDate: "2021-02-24 16:14:22.328605",
          imageUrl:
            "https://lh3.googleusercontent.com/ClKm5VUVeA_XuEvxx_jaDyCodqLqQcSNI6Cjk1S_b6YAMK6kLp8t4175jvmb9lQMiv9mWVFcbh4XksrhnHYqwoPD2tOxmVNK6Qn6=s120",
          name: "Art Blocks Playground",
          slug: "art-blocks-playground",
          stats: {
            averagePrice: 0.6728147560668277,
            marketCap: 7359.472789240372,
            numOwners: 1529,
            sevenDayChange: 0.5165015157695004,
            sevenDayVolume: 18.3803016714295,
            totalSupply: 8008,
            totalVolume: 972.89114030525,
            id: "Q29sbGVjdGlvblN0YXRzVHlwZTo0MTUwMQ==",
          },
          id: "Q29sbGVjdGlvblR5cGU6NDE1MDE=",
          __typename: "CollectionType",
        },
        cursor: "YXJyYXljb25uZWN0aW9uOjM0",
      },
      {
        node: {
          createdDate: "2021-03-29 17:40:16.454131",
          imageUrl:
            "https://lh3.googleusercontent.com/5ciPSamybZfmS8m45I1hXlUWKOIfAVLApQswnUaJvKHyHFbvPYEpSCkGqhH0TGn54QZCyKh-kzT2sxXIoe4e0aWcHYagwCO3cc_4=s120",
          name: "Polkamon",
          slug: "polkamon",
          stats: {
            averagePrice: 0.6849534699971785,
            marketCap: 5390.931038780065,
            numOwners: 7403,
            sevenDayChange: -0.4176015415970158,
            sevenDayVolume: 18.0623282621982,
            totalSupply: 21790,
            totalVolume: 2663.16698191956,
            id: "Q29sbGVjdGlvblN0YXRzVHlwZTozMjMyMjI=",
          },
          id: "Q29sbGVjdGlvblR5cGU6MzIzMjIy",
          __typename: "CollectionType",
        },
        cursor: "YXJyYXljb25uZWN0aW9uOjM1",
      },
      {
        node: {
          createdDate: "2021-03-17 19:41:02.933367",
          imageUrl:
            "https://lh3.googleusercontent.com/4FIttWHpHHSf7chJgYF4S46SO4xoCFUx7tWLiheieuquYwc0_bWq9aRsR52D2PWFDRWlP8JAV5HJ9_xwRjXVcKQRicFjo1ge8MxDCA=s120",
          name: "Ether Cards Founder",
          slug: "ether-cards-founder",
          stats: {
            averagePrice: 1.5376655916256852,
            marketCap: 4359.0989213726525,
            numOwners: 1425,
            sevenDayChange: -0.4937143444762656,
            sevenDayVolume: 17.7718574428445,
            totalSupply: 10000,
            totalVolume: 1357.75872482518,
            id: "Q29sbGVjdGlvblN0YXRzVHlwZToxOTUxMTY=",
          },
          id: "Q29sbGVjdGlvblR5cGU6MTk1MTE2",
          __typename: "CollectionType",
        },
        cursor: "YXJyYXljb25uZWN0aW9uOjM2",
      },
      {
        node: {
          createdDate: "2021-03-06 22:42:04.933990",
          imageUrl:
            "https://lh3.googleusercontent.com/N5HuMda49wBB44s-m9ZbKIrhdG9gV8n3ShuRsrTABIF86JMKTEqQRETWLQgl1GBdqoTe5aUd488gmsnIHjKF4eg9PSRn-n4xy1v6MA=s120",
          name: "Picasso Punks",
          slug: "picassopunks",
          stats: {
            averagePrice: 0.9112468250675518,
            marketCap: 595.8006977263715,
            numOwners: 311,
            sevenDayChange: 0.18702712746200637,
            sevenDayVolume: 17.1714195363384,
            totalSupply: 1000,
            totalVolume: 1671.71567717389,
            id: "Q29sbGVjdGlvblN0YXRzVHlwZTo4NDYzOQ==",
          },
          id: "Q29sbGVjdGlvblR5cGU6ODQ2Mzk=",
          __typename: "CollectionType",
        },
        cursor: "YXJyYXljb25uZWN0aW9uOjM3",
      },
      {
        node: {
          createdDate: "2021-04-06 01:45:07.828229",
          imageUrl:
            "https://lh3.googleusercontent.com/sdmctPXlm9k8rbNKDeK1dVQ5QuK_G6PKbyh1UWsraLYzPvl2-jE3oXHPH-KNEN9mfQsy_hDWdWw1vCX9lHP7BZcuGW9-d37pwltU98o=s120",
          name: "SatoshiFaces",
          slug: "satoshifaces",
          stats: {
            averagePrice: 0.2009971594638138,
            marketCap: 639.8698733877295,
            numOwners: 626,
            sevenDayChange: -0.36480485544680585,
            sevenDayVolume: 15.0929353492429,
            totalSupply: 2869,
            totalVolume: 64.1180938689566,
            id: "Q29sbGVjdGlvblN0YXRzVHlwZTozODgxNTc=",
          },
          id: "Q29sbGVjdGlvblR5cGU6Mzg4MTU3",
          __typename: "CollectionType",
        },
        cursor: "YXJyYXljb25uZWN0aW9uOjM4",
      },
      {
        node: {
          createdDate: "2021-04-19 17:58:16.698431",
          imageUrl:
            "https://lh3.googleusercontent.com/1Eft887RS16BvocIwGpJU_CKCWAXX62QxJp1mlw8eU0v5o9ZyOp3M_T0IRWILXBORnA63MALoTjlHQGfmdW63pNZPHYnzF3WCKO0mg8=s120",
          name: "The Adoption Comic Book NFTs Store Front",
          slug: "the-adoption-comic-book-nfts-store-front",
          stats: {
            averagePrice: 15,
            marketCap: 15,
            numOwners: 1,
            sevenDayChange: 0,
            sevenDayVolume: 15,
            totalSupply: 1,
            totalVolume: 15,
            id: "Q29sbGVjdGlvblN0YXRzVHlwZTo0NzIyMDQ=",
          },
          id: "Q29sbGVjdGlvblR5cGU6NDcyMjA0",
          __typename: "CollectionType",
        },
        cursor: "YXJyYXljb25uZWN0aW9uOjM5",
      },
      {
        node: {
          createdDate: "2021-05-10 16:27:13.877664",
          imageUrl:
            "https://lh3.googleusercontent.com/75-pV7Mjzb2snM9_dHPUxkx-9zlo43QbwYWGmYuRskvPWoR8qzpvjMXSXrftTlxJf03_iE-qMbGv9PJ_5IUZQnqVYIrC4reNVUFJuA=s120",
          name: "Merriam-Webster",
          slug: "merriam-webster",
          stats: {
            averagePrice: 15,
            marketCap: 15,
            numOwners: 1,
            sevenDayChange: 0,
            sevenDayVolume: 15,
            totalSupply: 1,
            totalVolume: 15,
            id: "Q29sbGVjdGlvblN0YXRzVHlwZTo1NzU1NTc=",
          },
          id: "Q29sbGVjdGlvblR5cGU6NTc1NTU3",
          __typename: "CollectionType",
        },
        cursor: "YXJyYXljb25uZWN0aW9uOjQw",
      },
      {
        node: {
          createdDate: "2021-04-11 15:12:46.591261",
          imageUrl:
            "https://lh3.googleusercontent.com/UWv0rXJdm0VC6IntO_EEErl1QwTr4Q6OWtlLIDXbH5TTNfTONlfEcBNAqUNO0MmKDmOBnUZX05muk6grndWVz4A_xonXkyk0-QwQGw=s120",
          name: "munetakanyc",
          slug: "munetakanyc",
          stats: {
            averagePrice: 0.82380669484375,
            marketCap: 177.94224608625,
            numOwners: 7,
            sevenDayChange: 0,
            sevenDayVolume: 14.8285205071875,
            totalSupply: 216,
            totalVolume: 14.8285205071875,
            id: "Q29sbGVjdGlvblN0YXRzVHlwZTo0MjM3NzQ=",
          },
          id: "Q29sbGVjdGlvblR5cGU6NDIzNzc0",
          __typename: "CollectionType",
        },
        cursor: "YXJyYXljb25uZWN0aW9uOjQx",
      },
      {
        node: {
          createdDate: "2021-03-12 13:37:56.603207",
          imageUrl:
            "https://lh3.googleusercontent.com/oo1yB-bpqCth478MK_GSNv2DXgVo2abRmPbr8sxhT5LssKFwtfP0FuZyqfhVtPeDIWjQxAUyalR34Qb0uEM4PPtLkX388STGn4N70Q=s120",
          name: "The CryptoBabyPunks",
          slug: "cryptobabypunks",
          stats: {
            averagePrice: 0.3605096882010678,
            marketCap: 540.4946785714285,
            numOwners: 449,
            sevenDayChange: -0.616148679928558,
            sevenDayVolume: 14.459,
            totalSupply: 999,
            totalVolume: 467.581065596785,
            id: "Q29sbGVjdGlvblN0YXRzVHlwZToxMjU1Nzg=",
          },
          id: "Q29sbGVjdGlvblR5cGU6MTI1NTc4",
          __typename: "CollectionType",
        },
        cursor: "YXJyYXljb25uZWN0aW9uOjQy",
      },
      {
        node: {
          createdDate: "2021-03-05 19:49:24.502156",
          imageUrl:
            "https://lh3.googleusercontent.com/15jgVo39FHdYFzjZyyF7pipKqXh8Bgb938KCncS3WOeLg-36TwXivdZggF3U93SYNh6J7vLEMvhAGqGdLklI57pZn7DQOvL3_u-mMA=s120",
          name: "the#boi",
          slug: "the-boi",
          stats: {
            averagePrice: 26.93975,
            marketCap: 257.94,
            numOwners: 12,
            sevenDayChange: 0,
            sevenDayVolume: 14.33,
            totalSupply: 18,
            totalVolume: 431.036,
            id: "Q29sbGVjdGlvblN0YXRzVHlwZTo3NjkxOQ==",
          },
          id: "Q29sbGVjdGlvblR5cGU6NzY5MTk=",
          __typename: "CollectionType",
        },
        cursor: "YXJyYXljb25uZWN0aW9uOjQz",
      },
      {
        node: {
          createdDate: "2019-04-26 22:13:10.262099",
          imageUrl:
            "https://lh3.googleusercontent.com/53L422-5QSOKOaWTu3-EWZkymYoyFo6L60AnxPXqz4rNgX1-E162tIljSyVOa3hyVACvJNGdih4lFummnHPx-1Fa=s60",
          name: "Known Origin",
          slug: "known-origin",
          stats: {
            averagePrice: 0.38988079470621956,
            marketCap: 10240.4172,
            numOwners: 3844,
            sevenDayChange: -0.7223550821852288,
            sevenDayVolume: 14.28,
            totalSupply: 21281,
            totalVolume: 3836.46520389585,
            id: "Q29sbGVjdGlvblN0YXRzVHlwZToyNTg2",
          },
          id: "Q29sbGVjdGlvblR5cGU6MjU4Ng==",
          __typename: "CollectionType",
        },
        cursor: "YXJyYXljb25uZWN0aW9uOjQ0",
      },
      {
        node: {
          createdDate: "2021-05-10 22:51:16.746869",
          imageUrl:
            "https://lh3.googleusercontent.com/JbT4qA__hMuzz1jQYplduEh6wbr9cf9FjdRccHtebTUaCiJIRB9ZQmzcEDtAO4EQIQUGTlVIUlqN73pMYzvYmpjF2ISn6Uqn0o1zgg=s120",
          name: "Eelies",
          slug: "eelies",
          stats: {
            averagePrice: 2.79652828363188,
            marketCap: 55.9305656726376,
            numOwners: 5,
            sevenDayChange: 0,
            sevenDayVolume: 13.9826414181594,
            totalSupply: 20,
            totalVolume: 13.9826414181594,
            id: "Q29sbGVjdGlvblN0YXRzVHlwZTo1NzcwNzQ=",
          },
          id: "Q29sbGVjdGlvblR5cGU6NTc3MDc0",
          __typename: "CollectionType",
        },
        cursor: "YXJyYXljb25uZWN0aW9uOjQ1",
      },
      {
        node: {
          createdDate: "2021-04-16 19:57:15.677123",
          imageUrl:
            "https://lh3.googleusercontent.com/LIpf9z6Ux8uxn69auBME9FCTXpXqSYFo8ZLO1GaM8T7S3hiKScHaClXe0ZdhTv5br6FE2g5i-J5SobhKFsYfe6CIMCv-UfnrlYFWOM4=s120",
          name: "CyberKongz",
          slug: "cyberkongz",
          stats: {
            averagePrice: 0.9035682175333073,
            marketCap: 696.1834285714285,
            numOwners: 204,
            sevenDayChange: 0.9100796749260632,
            sevenDayVolume: 13.689,
            totalSupply: 1424,
            totalVolume: 85.8389806656642,
            id: "Q29sbGVjdGlvblN0YXRzVHlwZTo0NTY4ODg=",
          },
          id: "Q29sbGVjdGlvblR5cGU6NDU2ODg4",
          __typename: "CollectionType",
        },
        cursor: "YXJyYXljb25uZWN0aW9uOjQ2",
      },
      {
        node: {
          createdDate: "2021-01-04 17:12:08.305423",
          imageUrl:
            "https://lh3.googleusercontent.com/xttZf6L3I16h7HSgcfKFWhR7OhCdSO5UW_asXbRfGmQ7-a0QwJRNoPsmh_RlOpw-AFEngLqGYLD77cmjdBv4LCfVc5BxFG2PS1UU=s120",
          name: "Neon District Season One Item",
          slug: "neon-district-season-one-item",
          stats: {
            averagePrice: 0.018421778336316336,
            marketCap: 48535.347048181124,
            numOwners: 22422,
            sevenDayChange: 75.98046285334364,
            sevenDayVolume: 13.6644588204988,
            totalSupply: 403036,
            totalVolume: 20.3097062537687,
            id: "Q29sbGVjdGlvblN0YXRzVHlwZToxNjE3OA==",
          },
          id: "Q29sbGVjdGlvblR5cGU6MTYxNzg=",
          __typename: "CollectionType",
        },
        cursor: "YXJyYXljb25uZWN0aW9uOjQ3",
      },
      {
        node: {
          createdDate: "2021-03-02 00:11:13.409145",
          imageUrl:
            "https://lh3.googleusercontent.com/KJ_w29mCMp_HQNSQyREKQAyILh6wv69zJJN26uWrPUyuhSYDeg08UbobFH2_7K3zFQdffikEwzpi3wdOCW5ov7avPNq28BJ84arX=s120",
          name: "CryptoGFs",
          slug: "cryptogfs",
          stats: {
            averagePrice: 2.9241225394736845,
            marketCap: 221,
            numOwners: 15,
            sevenDayChange: 0,
            sevenDayVolume: 13,
            totalSupply: 17,
            totalVolume: 55.55832825,
            id: "Q29sbGVjdGlvblN0YXRzVHlwZTo1NTkxMA==",
          },
          id: "Q29sbGVjdGlvblR5cGU6NTU5MTA=",
          __typename: "CollectionType",
        },
        cursor: "YXJyYXljb25uZWN0aW9uOjQ4",
      },
      {
        node: {
          createdDate: "2021-03-16 04:18:14.284162",
          imageUrl:
            "https://lh3.googleusercontent.com/mj0hMu9yrIjlx5KiHZb4w2bQ4F9T_H1McSoGmBN7PuzuAiRddZwwUdf3R9Ig21Jo-NpwJTsY3P5PK6CdjKU742MCV1xPkFeixe4J0lQ=s120",
          name: "Rare Pizzas Box",
          slug: "rare-pizzas-box",
          stats: {
            averagePrice: 0.45138190871369294,
            marketCap: 277.04428085106383,
            numOwners: 421,
            sevenDayChange: 18.526615384615383,
            sevenDayVolume: 12.6923,
            totalSupply: 1044,
            totalVolume: 108.78304,
            id: "Q29sbGVjdGlvblN0YXRzVHlwZToxNzQwOTQ=",
          },
          id: "Q29sbGVjdGlvblR5cGU6MTc0MDk0",
          __typename: "CollectionType",
        },
        cursor: "YXJyYXljb25uZWN0aW9uOjQ5",
      },
      {
        node: {
          createdDate: "2021-01-27 02:36:31.308470",
          imageUrl:
            "https://lh3.googleusercontent.com/1PD-sO-BokG4bezW7UrlhW8491Blxv6j5ia5ZmAFUWTqfxNNM4f7B9mWr7mh0SuehCHnIH8rvkIA4Ug-JdS7jLlc60weamJf3Ht8MQ=s120",
          name: "PolkaPets TCG",
          slug: "polkapets",
          stats: {
            averagePrice: 0.3246162199067256,
            marketCap: 3826.385558263309,
            numOwners: 3672,
            sevenDayChange: -0.14963903675228726,
            sevenDayVolume: 12.5698236780781,
            totalSupply: 33166,
            totalVolume: 3267.79260938699,
            id: "Q29sbGVjdGlvblN0YXRzVHlwZToyMTE3MQ==",
          },
          id: "Q29sbGVjdGlvblR5cGU6MjExNzE=",
          __typename: "CollectionType",
        },
        cursor: "YXJyYXljb25uZWN0aW9uOjUw",
      },
      {
        node: {
          createdDate: "2021-03-16 22:41:35.329508",
          imageUrl:
            "https://lh3.googleusercontent.com/oTvsiKBv-qbaZry_O24IgZvHtIwduMma6vibPsoEk7KERS_M5C4dmuzA3QRRxV094yW4lrsNy8XW5XHNq0KEg5FdrsIQ_Vt-q4kc=s120",
          name: "Freedomain Philosophy Collectible Conversations!",
          slug: "freedomain-philosophy-collectible-conversations",
          stats: {
            averagePrice: 11.2495,
            marketCap: 24.998,
            numOwners: 1,
            sevenDayChange: 0,
            sevenDayVolume: 12.499,
            totalSupply: 2,
            totalVolume: 22.499,
            id: "Q29sbGVjdGlvblN0YXRzVHlwZToxODQ0Njc=",
          },
          id: "Q29sbGVjdGlvblR5cGU6MTg0NDY3",
          __typename: "CollectionType",
        },
        cursor: "YXJyYXljb25uZWN0aW9uOjUx",
      },
      {
        node: {
          createdDate: "2021-04-06 15:15:29.490940",
          imageUrl:
            "https://lh3.googleusercontent.com/x1Q7zCy5D4PRD-wVebZqqb9Hu42UOk7JmdpJN5j02EqHnWCL4x_-Dn7iYTWIhprMHONH7JMDY9ZI2pgUNSpYZfL36PCqRHn8HT0t=s120",
          name: "FLIPKICK",
          slug: "flipkick",
          stats: {
            averagePrice: 12.4329,
            marketCap: 87.0303,
            numOwners: 2,
            sevenDayChange: 0,
            sevenDayVolume: 12.4329,
            totalSupply: 7,
            totalVolume: 12.4329,
            id: "Q29sbGVjdGlvblN0YXRzVHlwZTozOTE3MTM=",
          },
          id: "Q29sbGVjdGlvblR5cGU6MzkxNzEz",
          __typename: "CollectionType",
        },
        cursor: "YXJyYXljb25uZWN0aW9uOjUy",
      },
      {
        node: {
          createdDate: "2019-04-26 22:13:04.207050",
          imageUrl:
            "https://lh3.googleusercontent.com/C272ZRW1RGGef9vKMePFSCeKc1Lw6U40wl9ofNVxzUxFdj84hH9xJRQNf-7wgs7W8qw8RWe-1ybKp-VKuU5D-tg=s60",
          name: "CryptoKitties",
          slug: "cryptokitties",
          stats: {
            averagePrice: 0.08846578336216916,
            marketCap: 143355.91172271842,
            numOwners: 99251,
            sevenDayChange: 1.2336637601209979,
            sevenDayVolume: 12.29855116713,
            totalSupply: 1998090,
            totalVolume: 66134.0420758666,
            id: "Q29sbGVjdGlvblN0YXRzVHlwZToyMzY1",
          },
          id: "Q29sbGVjdGlvblR5cGU6MjM2NQ==",
          __typename: "CollectionType",
        },
        cursor: "YXJyYXljb25uZWN0aW9uOjUz",
      },
      {
        node: {
          createdDate: "2021-02-23 22:19:11.467913",
          imageUrl:
            "https://lh3.googleusercontent.com/Hnqnb3vs3WAXtyMUxCNwEwDKa7dhURu_dxt1b-QnZd7lcYMuXcpljZ3tjXLqvGTeKy3Zo1aI1IZjuUnZHIUDoqQDNxsqmXREICFa=s120",
          name: "Mani Grupa Token",
          slug: "mani-grupa-token",
          stats: {
            averagePrice: 1.135810218978102,
            marketCap: 837.7199999999999,
            numOwners: 106,
            sevenDayChange: -0.40909090909090917,
            sevenDayVolume: 11.7,
            totalSupply: 358,
            totalVolume: 311.212,
            id: "Q29sbGVjdGlvblN0YXRzVHlwZTozOTg4Ng==",
          },
          id: "Q29sbGVjdGlvblR5cGU6Mzk4ODY=",
          __typename: "CollectionType",
        },
        cursor: "YXJyYXljb25uZWN0aW9uOjU0",
      },
      {
        node: {
          createdDate: "2021-03-28 17:58:36.404282",
          imageUrl:
            "https://lh3.googleusercontent.com/xNW1W9O2CYUNGS2GeHqv9yHw-wLdSb9uVoc51TL5GSp8yvC2en45pqp5zYFHhRGHZpgHJdagD2QELXwpu01frltG7Nl055aVqDTDSg=s120",
          name: "Curio.Cards",
          slug: "curiocardswrapper",
          stats: {
            averagePrice: 0.16895271383526475,
            marketCap: 346.13446153846155,
            numOwners: 472,
            sevenDayChange: 0.6665703303372733,
            sevenDayVolume: 11.533,
            totalSupply: 9108,
            totalVolume: 312.225662453734,
            id: "Q29sbGVjdGlvblN0YXRzVHlwZTozMTI2NTk=",
          },
          id: "Q29sbGVjdGlvblR5cGU6MzEyNjU5",
          __typename: "CollectionType",
        },
        cursor: "YXJyYXljb25uZWN0aW9uOjU1",
      },
      {
        node: {
          createdDate: "2021-04-05 00:23:08.657092",
          imageUrl:
            "https://lh3.googleusercontent.com/4PkPqsyS_RmcJo-bvzOaEKCQBFteLiVJvC82SO7_jkfDpa5qD9S-AU-rw4FuaoSAdZENi0u_ndptBBXC-CSAIVcjVXqXyojQukPN=s120",
          name: "Illuvium",
          slug: "illuvium",
          stats: {
            averagePrice: 0.4822593984450763,
            marketCap: 1464.7235294117647,
            numOwners: 1811,
            sevenDayChange: -0.5757423251132361,
            sevenDayVolume: 10.959,
            totalSupply: 5475,
            totalVolume: 174.827269483121,
            id: "Q29sbGVjdGlvblN0YXRzVHlwZTozODAyMjU=",
          },
          id: "Q29sbGVjdGlvblR5cGU6MzgwMjI1",
          __typename: "CollectionType",
        },
        cursor: "YXJyYXljb25uZWN0aW9uOjU2",
      },
      {
        node: {
          createdDate: "2020-12-08 02:47:50.884187",
          imageUrl:
            "https://lh3.googleusercontent.com/56vRSL-9WWCAsMZG3JZrWIVkIp47msE9-q5xNjo2R8YM5PDvFM30_qbTJc-wMp6DVlckQT5DhsbSxaJN4cG5CDlV=s120",
          name: "DeNations",
          slug: "decentralized-nations",
          stats: {
            averagePrice: 0.057723945832107444,
            marketCap: 782.2355473950247,
            numOwners: 376,
            sevenDayChange: 17.999503931262634,
            sevenDayVolume: 10.5257251779195,
            totalSupply: 10330,
            totalVolume: 148.812374546701,
            id: "Q29sbGVjdGlvblN0YXRzVHlwZToxMzk2Mw==",
          },
          id: "Q29sbGVjdGlvblR5cGU6MTM5NjM=",
          __typename: "CollectionType",
        },
        cursor: "YXJyYXljb25uZWN0aW9uOjU3",
      },
      {
        node: {
          createdDate: "2021-02-26 16:23:21.080553",
          imageUrl:
            "https://lh3.googleusercontent.com/70lSl0rSb8dliLWlOJ9Iaay99yezabU46kTSNOopaw-nZTU2PFfJEwLquxcnkQGlSUkYMS2IZ5uy_gra_EKF1W1hs4PaAvvDngbCOw=s120",
          name: "THE 5000 DAYS COLLECTION",
          slug: "makersplace-beeple",
          stats: {
            averagePrice: 77.68399838709678,
            marketCap: 624.75,
            numOwners: 108,
            sevenDayChange: 0,
            sevenDayVolume: 10.5,
            totalSupply: 119,
            totalVolume: 2408.20395,
            id: "Q29sbGVjdGlvblN0YXRzVHlwZTo0NTg2MQ==",
          },
          id: "Q29sbGVjdGlvblR5cGU6NDU4NjE=",
          __typename: "CollectionType",
        },
        cursor: "YXJyYXljb25uZWN0aW9uOjU4",
      },
      {
        node: {
          createdDate: "2021-04-22 03:18:24.841043",
          imageUrl:
            "https://lh3.googleusercontent.com/RwIPOH0RftzOWtyC0WBnMx2X4_4Xqeimk5iT6I1xNQKSuRTVNwBY0PcA6MkCiX2dVP5U_MDbseAq3LoaJ7BY_xyTfLpeUsGtt2-WTA=s120",
          name: "Official MoonCats - Acclimated",
          slug: "acclimatedmooncats",
          stats: {
            averagePrice: 0.3882903427543649,
            marketCap: 954.874,
            numOwners: 524,
            sevenDayChange: -0.5083001128370989,
            sevenDayVolume: 10.362,
            totalSupply: 3041,
            totalVolume: 52.0317303394547,
            id: "Q29sbGVjdGlvblN0YXRzVHlwZTo0ODQ2OTg=",
          },
          id: "Q29sbGVjdGlvblR5cGU6NDg0Njk4",
          __typename: "CollectionType",
        },
        cursor: "YXJyYXljb25uZWN0aW9uOjU5",
      },
      {
        node: {
          createdDate: "2021-03-07 09:35:55.722207",
          imageUrl:
            "https://lh3.googleusercontent.com/OmASa-C2xqTeg7S7Z1ZllWXVNm-sI4MFFtIlAsBuc1Nwbezdbq-DMiGyQoxvv66ohPi7z0S0hbLp9b7WBw90qHVmVBfaTYRwFTtN9w=s120",
          name: "Cat Casino Investors Chip",
          slug: "cat-casino-investors-chip",
          stats: {
            averagePrice: 0.24817525773195875,
            marketCap: 245,
            numOwners: 14,
            sevenDayChange: 0,
            sevenDayVolume: 10,
            totalSupply: 980,
            totalVolume: 240.73,
            id: "Q29sbGVjdGlvblN0YXRzVHlwZTo4NzEwOQ==",
          },
          id: "Q29sbGVjdGlvblR5cGU6ODcxMDk=",
          __typename: "CollectionType",
        },
        cursor: "YXJyYXljb25uZWN0aW9uOjYw",
      },
      {
        node: {
          createdDate: "2021-04-21 03:33:43.236477",
          imageUrl:
            "https://lh3.googleusercontent.com/Fm2sFVc7MDehnf8Y91kFkpEET7TOsRr3-a7Mdif2ApsQOjm6iw0M93vXldPxfXINcP4JlKJEEsZ4ZPuM3M6wQr_xvjw_DVuZNvoeEcM=s120",
          name: "HINOTION CURATED",
          slug: "hinotion-curated",
          stats: {
            averagePrice: 0.2926829268292683,
            marketCap: 130.25,
            numOwners: 22,
            sevenDayChange: 0,
            sevenDayVolume: 10,
            totalSupply: 521,
            totalVolume: 12,
            id: "Q29sbGVjdGlvblN0YXRzVHlwZTo0Nzk3NDU=",
          },
          id: "Q29sbGVjdGlvblR5cGU6NDc5NzQ1",
          __typename: "CollectionType",
        },
        cursor: "YXJyYXljb25uZWN0aW9uOjYx",
      },
      {
        node: {
          createdDate: "2021-03-30 22:58:00.799252",
          imageUrl:
            "https://lh3.googleusercontent.com/hjyrtasog6mj7MjSN13T9JA-uTQp-vzuPAJ5OnPs1WFsLOWeN61RmJuOQJXdT5ydGZT-N8uFYZh9oLuu8Pst9C0jwiZjCd2Qv2tKTA=s120",
          name: "Framergence",
          slug: "framergence",
          stats: {
            averagePrice: 0.3619524580459059,
            marketCap: 247.26597058823532,
            numOwners: 267,
            sevenDayChange: 3.1736170212765957,
            sevenDayVolume: 9.808,
            totalSupply: 883,
            totalVolume: 177.281751984448,
            id: "Q29sbGVjdGlvblN0YXRzVHlwZTozMzc1MTA=",
          },
          id: "Q29sbGVjdGlvblR5cGU6MzM3NTEw",
          __typename: "CollectionType",
        },
        cursor: "YXJyYXljb25uZWN0aW9uOjYy",
      },
      {
        node: {
          createdDate: "2021-05-11 18:22:19.398578",
          imageUrl:
            "https://lh3.googleusercontent.com/5y-UCAXiNOFXH551w5bWdZEYOCdHPwbqmcKb-xa3uVQEjQgxvih3HtZWSmzqDqd0uk7kIqFrZhw32Gt6xPBFg4t_n9BKhpou-dwnOg=s120",
          name: "VeeFriends",
          slug: "veefriends",
          stats: {
            averagePrice: 1.3944132909324283,
            marketCap: 10027.22597509509,
            numOwners: 3806,
            sevenDayChange: 0,
            sevenDayVolume: 9.36651398610526,
            totalSupply: 7191,
            totalVolume: 9.36651398610526,
            id: "Q29sbGVjdGlvblN0YXRzVHlwZTo1ODAzODA=",
          },
          id: "Q29sbGVjdGlvblR5cGU6NTgwMzgw",
          __typename: "CollectionType",
        },
        cursor: "YXJyYXljb25uZWN0aW9uOjYz",
      },
      {
        node: {
          createdDate: "2021-05-12 03:02:15.718224",
          imageUrl:
            "https://lh3.googleusercontent.com/Vr_Ow1uakAI9ab4aZ0YaENsBVlaqzMNbBEsF8krladkVllE9yrweagVIraMP4RMdj4kD3IKQXqA89Xm0nepCMhovuRjgBylomwVZ=s120",
          name: "TWELVE X BALAZS",
          slug: "twelve-x-balazs",
          stats: {
            averagePrice: 0.5,
            marketCap: 9.5,
            numOwners: 10,
            sevenDayChange: 0,
            sevenDayVolume: 9,
            totalSupply: 19,
            totalVolume: 9,
            id: "Q29sbGVjdGlvblN0YXRzVHlwZTo2MDc4MzM=",
          },
          id: "Q29sbGVjdGlvblR5cGU6NjA3ODMz",
          __typename: "CollectionType",
        },
        cursor: "YXJyYXljb25uZWN0aW9uOjY0",
      },
      {
        node: {
          createdDate: "2021-01-15 21:47:17.176104",
          imageUrl:
            "https://lh3.googleusercontent.com/J0Z4_cs_Ap2f8Q0USIQ40gnO1ovuhIIKa9qoNjX10_WK0d-w-25ykX9go0riOgF86XGvbcEVtjyCtyv0WDyrIn-cwoZip6vBEC7agBc=s120",
          name: "Cometh Spaceships",
          slug: "cometh-spaceships",
          stats: {
            averagePrice: 0.5219546934991712,
            marketCap: 6041,
            numOwners: 446,
            sevenDayChange: 2.0996889939354593,
            sevenDayVolume: 8.4,
            totalSupply: 4315,
            totalVolume: 1146.21250692418,
            id: "Q29sbGVjdGlvblN0YXRzVHlwZToxODQ5NA==",
          },
          id: "Q29sbGVjdGlvblR5cGU6MTg0OTQ=",
          __typename: "CollectionType",
        },
        cursor: "YXJyYXljb25uZWN0aW9uOjY1",
      },
      {
        node: {
          createdDate: "2020-02-06 00:31:58.997254",
          imageUrl:
            "https://lh3.googleusercontent.com/vnDFTuB81g8bxyHtDjLQVuE9P5aeobzLyT_W8r5okcFwO623tYUJEaLyDuj-UspiOybG_iFuwthiE6oiXSPHfecYxos7TPLJuaD3lg=s120",
          name: "Frenetik Void",
          slug: "frenetik-void",
          stats: {
            averagePrice: 10.252,
            marketCap: 558.75,
            numOwners: 30,
            sevenDayChange: 0,
            sevenDayVolume: 7.5,
            totalSupply: 149,
            totalVolume: 246.048,
            id: "Q29sbGVjdGlvblN0YXRzVHlwZTo2NjMw",
          },
          id: "Q29sbGVjdGlvblR5cGU6NjYzMA==",
          __typename: "CollectionType",
        },
        cursor: "YXJyYXljb25uZWN0aW9uOjY2",
      },
      {
        node: {
          createdDate: "2021-05-08 05:36:04.188239",
          imageUrl: null,
          name: "Unidentified contract - I8REgEfQNX",
          slug: "unidentified-contract-i8regefqnx",
          stats: {
            averagePrice: 0.267625,
            marketCap: 106.56352941176472,
            numOwners: 336,
            sevenDayChange: 1.1624815361890697,
            sevenDayVolume: 7.32,
            totalSupply: 436,
            totalVolume: 10.705,
            id: "Q29sbGVjdGlvblN0YXRzVHlwZTo1NjQ3MDU=",
          },
          id: "Q29sbGVjdGlvblR5cGU6NTY0NzA1",
          __typename: "CollectionType",
        },
        cursor: "YXJyYXljb25uZWN0aW9uOjY3",
      },
      {
        node: {
          createdDate: "2021-05-14 00:54:48.361338",
          imageUrl: null,
          name: "Pulsquares",
          slug: "pulsquares",
          stats: {
            averagePrice: 0.5097684952887455,
            marketCap: 152.42078009133488,
            numOwners: 81,
            sevenDayChange: 0,
            sevenDayVolume: 7.21699043875368,
            totalSupply: 299,
            totalVolume: 7.21699043875368,
            id: "Q29sbGVjdGlvblN0YXRzVHlwZTo2MTU4ODk=",
          },
          id: "Q29sbGVjdGlvblR5cGU6NjE1ODg5",
          __typename: "CollectionType",
        },
        cursor: "YXJyYXljb25uZWN0aW9uOjY4",
      },
      {
        node: {
          createdDate: "2021-03-29 04:08:28.050626",
          imageUrl:
            "https://lh3.googleusercontent.com/2wMNoHCnxCHOZEqeCeBj9CT9atRLOVt7Gl6Oh0Rw_TIDxx7tNes9Os4xWT7V_9iDOLMdmhUPG6MUySmbggCTEaYsdIWUO8RnsBMt0Q=s120",
          name: "Voxies",
          slug: "voxies",
          stats: {
            averagePrice: 0.14602715503873276,
            marketCap: 482.4822153846154,
            numOwners: 733,
            sevenDayChange: -0.6875285686296689,
            sevenDayVolume: 7.0993,
            totalSupply: 3584,
            totalVolume: 33.1011370387536,
            id: "Q29sbGVjdGlvblN0YXRzVHlwZTozMTc1NTM=",
          },
          id: "Q29sbGVjdGlvblR5cGU6MzE3NTUz",
          __typename: "CollectionType",
        },
        cursor: "YXJyYXljb25uZWN0aW9uOjY5",
      },
      {
        node: {
          createdDate: "2021-03-13 00:19:16.081840",
          imageUrl:
            "https://lh3.googleusercontent.com/ffThmo8TnoiB1vQ49Xiu-SfF5LgMjXb0IDD5En3XZ9Ghim0roeUg6qAPmqExpculvggW19oh-fNMo1c_2v23t7sWuRDdjLkg3vqN=s120",
          name: "Duchamp's Auctions",
          slug: "auctions",
          stats: {
            averagePrice: 3.4077881565583272,
            marketCap: 145.143590590252,
            numOwners: 11,
            sevenDayChange: 0,
            sevenDayVolume: 7.091167289008,
            totalSupply: 41,
            totalVolume: 88.9471643059571,
            id: "Q29sbGVjdGlvblN0YXRzVHlwZToxMzE3NjY=",
          },
          id: "Q29sbGVjdGlvblR5cGU6MTMxNzY2",
          __typename: "CollectionType",
        },
        cursor: "YXJyYXljb25uZWN0aW9uOjcw",
      },
      {
        node: {
          createdDate: "2020-12-22 03:22:24.864489",
          imageUrl:
            "https://lh3.googleusercontent.com/VQYeUcnebNo81rzrw0Hh1W5g6RiE-0pgCpDkc9rVILNpzkN029UmoYfFhGVfNtev5MnT2EH1fk2J6Rsmbz9Uq19srPog_bA3lpJUW-I=s120",
          name: "MoonHeads",
          slug: "moonheads",
          stats: {
            averagePrice: 0.002664101563937623,
            marketCap: 332964283.067357,
            numOwners: 221,
            sevenDayChange: 49.639140109221565,
            sevenDayVolume: 7.08947961529102,
            totalSupply: 1000000380,
            totalVolume: 11.214479615291,
            id: "Q29sbGVjdGlvblN0YXRzVHlwZToxNDUzMw==",
          },
          id: "Q29sbGVjdGlvblR5cGU6MTQ1MzM=",
          __typename: "CollectionType",
        },
        cursor: "YXJyYXljb25uZWN0aW9uOjcx",
      },
      {
        node: {
          createdDate: "2021-03-18 07:39:20.389370",
          imageUrl:
            "https://lh3.googleusercontent.com/DBD8vFv2QZ-ZrJ4jKH2lVwrJxiw4qFw2ntwmT6Ly_MrXoc4HLjZleHprxpfSCPX6_Sw7h-rIFVJ8zluRKqWtFnbvk04NU8nUsxUHdg=s120",
          name: "Chubbies",
          slug: "chubbies",
          stats: {
            averagePrice: 0.5420651773427575,
            marketCap: 1906.170475,
            numOwners: 2432,
            sevenDayChange: -0.5969064605963758,
            sevenDayVolume: 6.9629,
            totalSupply: 9999,
            totalVolume: 2347.30287157951,
            id: "Q29sbGVjdGlvblN0YXRzVHlwZToyMDEwODY=",
          },
          id: "Q29sbGVjdGlvblR5cGU6MjAxMDg2",
          __typename: "CollectionType",
        },
        cursor: "YXJyYXljb25uZWN0aW9uOjcy",
      },
      {
        node: {
          createdDate: "2020-10-20 19:31:14.007197",
          imageUrl:
            "https://lh3.googleusercontent.com/X_V_EbYK5XpjO_j1AETDTUkolFCx-HJzcpM5TtMbI3bVN1ny4wVvXcX_BYzcAkzbTHjtW0mgGNmqOSRiejhr3tPt=s120",
          name: "CryptoCubes",
          slug: "cryptocubes",
          stats: {
            averagePrice: 2.0398676963117013,
            marketCap: 567.2666666666667,
            numOwners: 124,
            sevenDayChange: 0.030769230769230795,
            sevenDayVolume: 6.7,
            totalSupply: 254,
            totalVolume: 587.48189653777,
            id: "Q29sbGVjdGlvblN0YXRzVHlwZToxMjUxNQ==",
          },
          id: "Q29sbGVjdGlvblR5cGU6MTI1MTU=",
          __typename: "CollectionType",
        },
        cursor: "YXJyYXljb25uZWN0aW9uOjcz",
      },
      {
        node: {
          createdDate: "2021-03-23 23:07:36.998798",
          imageUrl:
            "https://lh3.googleusercontent.com/nxaymgd9aJIzLXb0r3oLO0VCMFi0Zex1ubTmEYekEKwOVq1YijOULDeT1qCjk71OTsQW47zmvZ2ZuycXorgu6WA6Wosc6CiOuVnAXGk=s120",
          name: "Parallel Alpha",
          slug: "parallelalpha",
          stats: {
            averagePrice: 0.852150373216247,
            marketCap: 314011.549889524,
            numOwners: 256,
            sevenDayChange: -0.6949047899722507,
            sevenDayVolume: 6.56689798447266,
            totalSupply: 143452,
            totalVolume: 96.2942123145234,
            id: "Q29sbGVjdGlvblN0YXRzVHlwZToyNjQwNTY=",
          },
          id: "Q29sbGVjdGlvblR5cGU6MjY0MDU2",
          __typename: "CollectionType",
        },
        cursor: "YXJyYXljb25uZWN0aW9uOjc0",
      },
      {
        node: {
          createdDate: "2021-04-21 02:30:13.296237",
          imageUrl:
            "https://lh3.googleusercontent.com/af2OHClbQe25qX6jPajI_TgthSSpDkzcK0YRJcNzhMATKvWuyKoWJzkTwySxR2xfp8SZrUjW6vN054JND6uDabtpimqIfhZrFqUd=s120",
          name: "SAUNA LAND",
          slug: "sauna-land",
          stats: {
            averagePrice: 6.3814078125,
            marketCap: 6.3814078125,
            numOwners: 1,
            sevenDayChange: 0,
            sevenDayVolume: 6.3814078125,
            totalSupply: 1,
            totalVolume: 6.3814078125,
            id: "Q29sbGVjdGlvblN0YXRzVHlwZTo0Nzk1ODA=",
          },
          id: "Q29sbGVjdGlvblR5cGU6NDc5NTgw",
          __typename: "CollectionType",
        },
        cursor: "YXJyYXljb25uZWN0aW9uOjc1",
      },
      {
        node: {
          createdDate: "2021-04-08 16:44:41.114174",
          imageUrl:
            "https://lh3.googleusercontent.com/pHtfyEvb_MPhIEoomQH6GtxJcOFVontn9CksqVj9HBkFWAUGAxY_y8zjJUuwoYD74pkLiJvVDSfk9rNMuRgSEZrN7PjioOc-WNtp=s120",
          name: "Ape Only",
          slug: "ape-only",
          stats: {
            averagePrice: 0.316072771660126,
            marketCap: 511.56,
            numOwners: 345,
            sevenDayChange: -0.11836734693877553,
            sevenDayVolume: 6.264,
            totalSupply: 980,
            totalVolume: 120.423726002508,
            id: "Q29sbGVjdGlvblN0YXRzVHlwZTo0MDU1NzE=",
          },
          id: "Q29sbGVjdGlvblR5cGU6NDA1NTcx",
          __typename: "CollectionType",
        },
        cursor: "YXJyYXljb25uZWN0aW9uOjc2",
      },
      {
        node: {
          createdDate: "2020-10-31 13:05:53.321580",
          imageUrl:
            "https://lh3.googleusercontent.com/lcpoI_5KaLJO8LA6Y0dx42FyTOvZne-tW4EKtoD9UdL6Vdk2UANPwo531EWSslwySarGdu3C9shBAJQsyhoasCa1=s120",
          name: "BCCG",
          slug: "bccg",
          stats: {
            averagePrice: 1.0505548626409258,
            marketCap: 4006.343594285714,
            numOwners: 1553,
            sevenDayChange: 3.8464965971247156,
            sevenDayVolume: 6.23921,
            totalSupply: 9032,
            totalVolume: 3813.51249543357,
            id: "Q29sbGVjdGlvblN0YXRzVHlwZToxMjkzNQ==",
          },
          id: "Q29sbGVjdGlvblR5cGU6MTI5MzU=",
          __typename: "CollectionType",
        },
        cursor: "YXJyYXljb25uZWN0aW9uOjc3",
      },
      {
        node: {
          createdDate: "2021-03-12 18:06:34.679203",
          imageUrl:
            "https://lh3.googleusercontent.com/uheZXqcvxP_8TK7FzP7skUSNh3njmVStcqyLYkCnYPjb5c3enWOS88IAOTf8vdF5y4-vE7f0BQPHnEsVqjq0pD2QKLFugGZOdXUI=s120",
          name: "Deafbeef V2",
          slug: "deafbeef-v2",
          stats: {
            averagePrice: 3.3403265686274506,
            marketCap: 1303.70625,
            numOwners: 78,
            sevenDayChange: -0.8818903389170237,
            sevenDayVolume: 6.06375,
            totalSupply: 215,
            totalVolume: 170.356655,
            id: "Q29sbGVjdGlvblN0YXRzVHlwZToxMjgxMjI=",
          },
          id: "Q29sbGVjdGlvblR5cGU6MTI4MTIy",
          __typename: "CollectionType",
        },
        cursor: "YXJyYXljb25uZWN0aW9uOjc4",
      },
      {
        node: {
          createdDate: "2021-04-07 22:55:41.518780",
          imageUrl:
            "https://lh3.googleusercontent.com/EHbxj2IuK3aYpaCEy4W-jYN8T36H_7B9se6_3_Fr4exVjUwXF9VuN8FOdzGn4YwPNWYTFgbRjTzgN5szrMRko802XHIptWPow-T4=s120",
          name: "Happy Moonday",
          slug: "happy-moonday",
          stats: {
            averagePrice: 3,
            marketCap: 9,
            numOwners: 2,
            sevenDayChange: 0,
            sevenDayVolume: 6,
            totalSupply: 3,
            totalVolume: 6,
            id: "Q29sbGVjdGlvblN0YXRzVHlwZTo0MDEzMzE=",
          },
          id: "Q29sbGVjdGlvblR5cGU6NDAxMzMx",
          __typename: "CollectionType",
        },
        cursor: "YXJyYXljb25uZWN0aW9uOjc5",
      },
      {
        node: {
          createdDate: "2021-04-25 21:38:14.681308",
          imageUrl:
            "https://lh3.googleusercontent.com/o-YQgTP6CSvNvZByrCLm9GQHJ8UJY00M-227iqkXVb5pR4YZn5Q2BGHKxgMeaxmtWpvRxfnIsaNINh344pj6eT3uHgvFftNbzsRp=s120",
          name: "Imogen Heap x Endlesss : Firsts",
          slug: "imogenheap-x-endlesss-firsts",
          stats: {
            averagePrice: 2,
            marketCap: 12,
            numOwners: 3,
            sevenDayChange: 0,
            sevenDayVolume: 6,
            totalSupply: 6,
            totalVolume: 8,
            id: "Q29sbGVjdGlvblN0YXRzVHlwZTo1MDA4NDM=",
          },
          id: "Q29sbGVjdGlvblR5cGU6NTAwODQz",
          __typename: "CollectionType",
        },
        cursor: "YXJyYXljb25uZWN0aW9uOjgw",
      },
      {
        node: {
          createdDate: "2021-04-19 20:55:09.883020",
          imageUrl:
            "https://lh3.googleusercontent.com/rTiCrE1Dg_jcsVY4vdBHFxSt1j63mW0a9nio4EbUZquk4YAPcwyfBYYELlR3mXqqIZmkzlxbpJIT6nb9zuVAF84Z_H9UnzgoUTRTTw=s120",
          name: "Solvency by Ezra Miller",
          slug: "solvency-by-ezra-miller",
          stats: {
            averagePrice: 0.7822444444444444,
            marketCap: 1500,
            numOwners: 203,
            sevenDayChange: 0.13207547169811323,
            sevenDayVolume: 6,
            totalSupply: 500,
            totalVolume: 35.201,
            id: "Q29sbGVjdGlvblN0YXRzVHlwZTo0NzMwMjQ=",
          },
          id: "Q29sbGVjdGlvblR5cGU6NDczMDI0",
          __typename: "CollectionType",
        },
        cursor: "YXJyYXljb25uZWN0aW9uOjgx",
      },
      {
        node: {
          createdDate: "2021-04-19 10:54:24.755695",
          imageUrl:
            "https://lh3.googleusercontent.com/57Nb7k3-h-fYUFYw9UXaQXGxjUwtsjwF3TkvjhypFm45BInqF2zxI9bv6J8NnsaMBYWwPKXuZtkNNEVqOS2SW5yj0HftSrbrbsWIsg=s120",
          name: "Canelo v. Saunders: Face the Fearless",
          slug: "dazn-x-canelo-saunders",
          stats: {
            averagePrice: 0.6360693348704884,
            marketCap: 67.77462152500075,
            numOwners: 36,
            sevenDayChange: -0.44306497992306176,
            sevenDayVolume: 5.91577770663274,
            totalSupply: 49,
            totalVolume: 16.5378027066327,
            id: "Q29sbGVjdGlvblN0YXRzVHlwZTo0NzA0NTU=",
          },
          id: "Q29sbGVjdGlvblR5cGU6NDcwNDU1",
          __typename: "CollectionType",
        },
        cursor: "YXJyYXljb25uZWN0aW9uOjgy",
      },
      {
        node: {
          createdDate: "2021-03-27 19:54:26.268856",
          imageUrl:
            "https://lh3.googleusercontent.com/0d-n1uTMxsczAg2jhXxhDMBX4gpxwfBjBV99K0qSPj-2EHnTe36dtSCaZMC5y_XIHZGvIvA6k1eAyOD_x9M-WRvNArgbPuJT3hi53w=s120",
          name: "The ASCIIPunks",
          slug: "asciipunks-v2",
          stats: {
            averagePrice: 0.2849642206554222,
            marketCap: 667.5074999999999,
            numOwners: 720,
            sevenDayChange: 68.08823529411764,
            sevenDayVolume: 5.8725,
            totalSupply: 1705,
            totalVolume: 53.8582377038748,
            id: "Q29sbGVjdGlvblN0YXRzVHlwZTozMDM0MTI=",
          },
          id: "Q29sbGVjdGlvblR5cGU6MzAzNDEy",
          __typename: "CollectionType",
        },
        cursor: "YXJyYXljb25uZWN0aW9uOjgz",
      },
      {
        node: {
          createdDate: "2021-04-23 12:56:54.000798",
          imageUrl:
            "https://lh3.googleusercontent.com/OJ69TpK0OLjqdEddpCuogAp510whnujAdPh9bqMEpvH4GJpVdDLOUIGf5kGBDvJIjyggFuKghfI19nwpfafkI9sOYX7pV_70OEkMUw=s120",
          name: "RealPunks by Andre Mello",
          slug: "realpunks-by-andre-mello",
          stats: {
            averagePrice: 0.6491708333333334,
            marketCap: 18.83035,
            numOwners: 15,
            sevenDayChange: -0.003685185185185314,
            sevenDayVolume: 5.3801,
            totalSupply: 28,
            totalVolume: 15.5801,
            id: "Q29sbGVjdGlvblN0YXRzVHlwZTo0OTA2MDM=",
          },
          id: "Q29sbGVjdGlvblR5cGU6NDkwNjAz",
          __typename: "CollectionType",
        },
        cursor: "YXJyYXljb25uZWN0aW9uOjg0",
      },
      {
        node: {
          createdDate: "2021-04-24 12:20:23.755355",
          imageUrl:
            "https://lh3.googleusercontent.com/d-7OcZ1IN_t5oIF_AWGYtCRdS5htW40NmVULaZrRUb0OLNbBz4Ab4JnjBBJ4HhnCXV0LNngeKsEwgDFnxB5Y8ZXrMve7s07h9O44=s120",
          name: "XCOPYPUNKS",
          slug: "xcopypunks",
          stats: {
            averagePrice: 0.17849605166381688,
            marketCap: 12.385551999999999,
            numOwners: 28,
            sevenDayChange: 0.45077801463842254,
            sevenDayVolume: 5.3386,
            totalSupply: 58,
            totalVolume: 13.7441959781139,
            id: "Q29sbGVjdGlvblN0YXRzVHlwZTo0OTQ1NDU=",
          },
          id: "Q29sbGVjdGlvblR5cGU6NDk0NTQ1",
          __typename: "CollectionType",
        },
        cursor: "YXJyYXljb25uZWN0aW9uOjg1",
      },
      {
        node: {
          createdDate: "2021-03-21 20:03:50.004677",
          imageUrl:
            "https://lh3.googleusercontent.com/PaG7PILKFvHO6ezYERSM-F_zOmnt7zj3ImR5xvxCHDl9lDDefU5l8e7EJHulxj6hpI6frYk7UfjSoIwNgzzykMOZN8b-q0-o_-blsA=s120",
          name: "1111 by Kevin Abosch",
          slug: "1111-by-kevin-abosch",
          stats: {
            averagePrice: 3.3208178549115877,
            marketCap: 1966.47,
            numOwners: 246,
            sevenDayChange: -0.7989930927061685,
            sevenDayVolume: 5.28,
            totalSupply: 1111,
            totalVolume: 3994.94387945864,
            id: "Q29sbGVjdGlvblN0YXRzVHlwZToyNDAzMzM=",
          },
          id: "Q29sbGVjdGlvblR5cGU6MjQwMzMz",
          __typename: "CollectionType",
        },
        cursor: "YXJyYXljb25uZWN0aW9uOjg2",
      },
      {
        node: {
          createdDate: "2021-01-13 15:18:53.002842",
          imageUrl:
            "https://lh3.googleusercontent.com/0P5rEihQuLC2K2AcChiB1XVz3cJL0zA7b6hHVbqRKj645Ja2ZQM-dexnR6XtoOYojNfmdwEOeq39L8b44Nh-O6D3HQ=s120",
          name: "TheBlackSea Collection",
          slug: "theblacksea-collection",
          stats: {
            averagePrice: 0.1962484375,
            marketCap: 168.2967,
            numOwners: 57,
            sevenDayChange: 0.6999666666666666,
            sevenDayVolume: 5.0999,
            totalSupply: 231,
            totalVolume: 12.5599,
            id: "Q29sbGVjdGlvblN0YXRzVHlwZToxODE3OQ==",
          },
          id: "Q29sbGVjdGlvblR5cGU6MTgxNzk=",
          __typename: "CollectionType",
        },
        cursor: "YXJyYXljb25uZWN0aW9uOjg3",
      },
      {
        node: {
          createdDate: "2021-03-28 14:57:55.187964",
          imageUrl:
            "https://lh3.googleusercontent.com/bBZJGkpwTy1ZmfFzBvtMplTz3sRy8auPt2mw_DafprsO1boUR3wcsUZm3foUUrHlylTdi4KWjXxMeZA8Q96r8Q56aBSkFPMv3Ujt=s120",
          name: "Parallax  Island",
          slug: "parallaxisland",
          stats: {
            averagePrice: 0.18805555555555553,
            marketCap: 35.14,
            numOwners: 61,
            sevenDayChange: 9.04,
            sevenDayVolume: 5.02,
            totalSupply: 147,
            totalVolume: 6.77,
            id: "Q29sbGVjdGlvblN0YXRzVHlwZTozMTA3Nzc=",
          },
          id: "Q29sbGVjdGlvblR5cGU6MzEwNzc3",
          __typename: "CollectionType",
        },
        cursor: "YXJyYXljb25uZWN0aW9uOjg4",
      },
      {
        node: {
          createdDate: "2020-09-30 20:49:57.802724",
          imageUrl:
            "https://lh3.googleusercontent.com/A1goR3mIXR1P5n8zfx3ZhHiT_fAq12VEM3uIghADRf_Ref87FwQzqT0sa9w_T2jJVu_EDznmNkW5CIs5QBtCrasl=s120",
          name: "BigComicArt",
          slug: "bigcomicart",
          stats: {
            averagePrice: 0.37238095238095237,
            marketCap: 9290,
            numOwners: 24,
            sevenDayChange: 165.66666666666669,
            sevenDayVolume: 5,
            totalSupply: 1858,
            totalVolume: 7.82,
            id: "Q29sbGVjdGlvblN0YXRzVHlwZToxMTc4Ng==",
          },
          id: "Q29sbGVjdGlvblR5cGU6MTE3ODY=",
          __typename: "CollectionType",
        },
        cursor: "YXJyYXljb25uZWN0aW9uOjg5",
      },
      {
        node: {
          createdDate: "2021-05-07 23:00:45.108468",
          imageUrl:
            "https://lh3.googleusercontent.com/9i-kApGrXyecmZJxA6oDUbgQ8rHUVluD06YL_keKnqcfWyU3btGpTtTw5xC27hOyOoMdaZwlisg9Uk84nPzUCzkgmNjrfp-H3kr1Mw=s120",
          name: "BabyWeebits",
          slug: "babyweebits",
          stats: {
            averagePrice: 0.13023809523809524,
            marketCap: 5.681666666666667,
            numOwners: 19,
            sevenDayChange: 7.116666666666667,
            sevenDayVolume: 4.87,
            totalSupply: 42,
            totalVolume: 5.47,
            id: "Q29sbGVjdGlvblN0YXRzVHlwZTo1NjM1NzA=",
          },
          id: "Q29sbGVjdGlvblR5cGU6NTYzNTcw",
          __typename: "CollectionType",
        },
        cursor: "YXJyYXljb25uZWN0aW9uOjkw",
      },
      {
        node: {
          createdDate: "2021-03-31 19:02:35.341393",
          imageUrl:
            "https://lh3.googleusercontent.com/stQDZp36ffNXpmDXeEn-1QV_C34ziVVsHNQrR0-yo9l20NFe-Dl0voL6j7hACyDoFgpVG5vdurTjR3DCbiZA7V2ZDy7TRpalGWsrdA=s120",
          name: "SuperFarm Genesis Series",
          slug: "superfarm",
          stats: {
            averagePrice: 7.390883080493937,
            marketCap: 626.6666666666667,
            numOwners: 294,
            sevenDayChange: -0.3824727368282748,
            sevenDayVolume: 4.7,
            totalSupply: 400,
            totalVolume: 1182.54129287903,
            id: "Q29sbGVjdGlvblN0YXRzVHlwZTozNDYwNDM=",
          },
          id: "Q29sbGVjdGlvblR5cGU6MzQ2MDQz",
          __typename: "CollectionType",
        },
        cursor: "YXJyYXljb25uZWN0aW9uOjkx",
      },
      {
        node: {
          createdDate: "2021-05-01 19:48:30.609196",
          imageUrl:
            "https://lh3.googleusercontent.com/Fvy4gzTtqVgytR_KHi9FE4EHcw1kqyEu2bsE8MH8MH7USvw9pKPWj77JgA2SbrTfKgtHr-TfO-css2JA0Y7QBzoSzgwG1a-U7qOl=s120",
          name: "Graffiti Bored Ape Yacht Club",
          slug: "graffiti-bored-ape-yacht-club",
          stats: {
            averagePrice: 0.09519692307692308,
            marketCap: 30.5064,
            numOwners: 93,
            sevenDayChange: -0.6136276551436902,
            sevenDayVolume: 4.6384,
            totalSupply: 171,
            totalVolume: 18.5634,
            id: "Q29sbGVjdGlvblN0YXRzVHlwZTo1Mjk2MTk=",
          },
          id: "Q29sbGVjdGlvblR5cGU6NTI5NjE5",
          __typename: "CollectionType",
        },
        cursor: "YXJyYXljb25uZWN0aW9uOjky",
      },
      {
        node: {
          createdDate: "2021-03-16 01:05:12.212852",
          imageUrl:
            "https://lh3.googleusercontent.com/Sp6QVs871pTrvvlDlLISscpVRFzrE163BqTAd7MbL8BsWl4UjoeVKzaIzEutWnlvIrkgiVpRt6WAX_abuZgdCSV5Bf9bCDLqsT-2jA=s120",
          name: "MoonBoys Alpha Collection",
          slug: "moonboys",
          stats: {
            averagePrice: 0.24931158140963397,
            marketCap: 852.662872447917,
            numOwners: 122,
            sevenDayChange: -0.5790878082448885,
            sevenDayVolume: 4.60898849971847,
            totalSupply: 555,
            totalVolume: 114.435733388626,
            id: "Q29sbGVjdGlvblN0YXRzVHlwZToxNzI0NDE=",
          },
          id: "Q29sbGVjdGlvblR5cGU6MTcyNDQx",
          __typename: "CollectionType",
        },
        cursor: "YXJyYXljb25uZWN0aW9uOjkz",
      },
      {
        node: {
          createdDate: "2021-05-09 11:57:45.235527",
          imageUrl:
            "https://lh3.googleusercontent.com/nbjC5Z-8Bpqq48nwVxOmKhTTHsf-85WrkEOq4Vl8x2pukYtKnBk5elBNg_3phpF-POc3ZBLMgfkoLghxnAS7jZ5lXFy94C5jJo4ZQg=s120",
          name: "Shopping.io",
          slug: "shopping-io",
          stats: {
            averagePrice: 4.594613625,
            marketCap: 4.594613625,
            numOwners: 1,
            sevenDayChange: 0,
            sevenDayVolume: 4.594613625,
            totalSupply: 1,
            totalVolume: 4.594613625,
            id: "Q29sbGVjdGlvblN0YXRzVHlwZTo1NzAxNzA=",
          },
          id: "Q29sbGVjdGlvblR5cGU6NTcwMTcw",
          __typename: "CollectionType",
        },
        cursor: "YXJyYXljb25uZWN0aW9uOjk0",
      },
      {
        node: {
          createdDate: "2021-01-31 22:34:37.460107",
          imageUrl:
            "https://lh3.googleusercontent.com/w1VM7JEdwvso86C3VS7HZHUWu0WGYHX2s2dFbNpztGKVj9noL6CAIhf4IKWXShxUUZCaXt0agKbw-pbJfBXNx7N32GdJ20jmAhb-gg=s120",
          name: "GLEWME CITY",
          slug: "glewme-city-real-estate",
          stats: {
            averagePrice: 0.32208105166696677,
            marketCap: 224.49729340311967,
            numOwners: 164,
            sevenDayChange: -0.748907104834871,
            sevenDayVolume: 4.553109469215,
            totalSupply: 1290,
            totalVolume: 310.176841501636,
            id: "Q29sbGVjdGlvblN0YXRzVHlwZToyMjMxMA==",
          },
          id: "Q29sbGVjdGlvblR5cGU6MjIzMTA=",
          __typename: "CollectionType",
        },
        cursor: "YXJyYXljb25uZWN0aW9uOjk1",
      },
      {
        node: {
          createdDate: "2021-04-30 19:01:24.779527",
          imageUrl:
            "https://lh3.googleusercontent.com/NY4EwV_LKmrkOMChInW4-pzj0FdTl0xIkMWH8gH0PTSJVAg3qNwZJbutVJiw-Pxa8AWCWk5eHa-aat478PD9zOeUUz1MEqXWriTEUg=s120",
          name: "Habibis editions",
          slug: "habibis-editions",
          stats: {
            averagePrice: 0.29792901385700854,
            marketCap: 17.138613126912755,
            numOwners: 28,
            sevenDayChange: 0.24733901728560556,
            sevenDayVolume: 4.55278741309246,
            totalSupply: 63,
            totalVolume: 14.2027874130925,
            id: "Q29sbGVjdGlvblN0YXRzVHlwZTo1MjQ0ODQ=",
          },
          id: "Q29sbGVjdGlvblR5cGU6NTI0NDg0",
          __typename: "CollectionType",
        },
        cursor: "YXJyYXljb25uZWN0aW9uOjk2",
      },
      {
        node: {
          createdDate: "2021-03-29 06:51:28.194432",
          imageUrl:
            "https://lh3.googleusercontent.com/-ymEayeb6-Yr3Crk9JJ0vFTxRGFyYto1-6XzoiPOnVG3f8U944VV_AtxSUk_tKinlBcX4Y_GhQ3_Ohpns7G1_5CA-jjb6_HfzsPmMQ=s120",
          name: "RTFKT Capsule  Space Drip",
          slug: "rtfkt-capsule-space-drip",
          stats: {
            averagePrice: 0.8628545948968016,
            marketCap: 138.32,
            numOwners: 93,
            sevenDayChange: 4.416666666666667,
            sevenDayVolume: 4.55,
            totalSupply: 152,
            totalVolume: 50.9084210989113,
            id: "Q29sbGVjdGlvblN0YXRzVHlwZTozMTgzNTY=",
          },
          id: "Q29sbGVjdGlvblR5cGU6MzE4MzU2",
          __typename: "CollectionType",
        },
        cursor: "YXJyYXljb25uZWN0aW9uOjk3",
      },
      {
        node: {
          createdDate: "2021-03-23 19:35:22.288924",
          imageUrl:
            "https://lh3.googleusercontent.com/DQxvf8_asQ4JYnAUrvrbhT3RgmTS8XL1AIAz5WMj2SzMc2uG7ftyw1yWyYJvT9QGmY875edZ22OOf0ssFKQERybNOWeUJKSKpznmCA=s120",
          name: "MethodNFT",
          slug: "methodnft",
          stats: {
            averagePrice: 0.5860729685660715,
            marketCap: 3276.037878571429,
            numOwners: 1745,
            sevenDayChange: -0.5024063966397952,
            sevenDayVolume: 4.54915,
            totalSupply: 5041,
            totalVolume: 319.409769434889,
            id: "Q29sbGVjdGlvblN0YXRzVHlwZToyNjIxNTg=",
          },
          id: "Q29sbGVjdGlvblR5cGU6MjYyMTU4",
          __typename: "CollectionType",
        },
        cursor: "YXJyYXljb25uZWN0aW9uOjk4",
      },
      {
        node: {
          createdDate: "2021-04-30 01:36:40.292352",
          imageUrl:
            "https://lh3.googleusercontent.com/QrSS5r-BwZwFcJlWPul--pWD6A22UdslWR3HokHYE41Xv-eTyKKlgsfb5wNu0qnSOms9oXUjGzSJE0gjtgx7kQH2xvrvm6HHkGI8=s120",
          name: "3D Baby Punks",
          slug: "3dbaby-punks",
          stats: {
            averagePrice: 0.09800102827763496,
            marketCap: 59.582692307692305,
            numOwners: 151,
            sevenDayChange: -0.82974810437614,
            sevenDayVolume: 4.5176,
            totalSupply: 500,
            totalVolume: 38.1224,
            id: "Q29sbGVjdGlvblN0YXRzVHlwZTo1MjA5MzI=",
          },
          id: "Q29sbGVjdGlvblR5cGU6NTIwOTMy",
          __typename: "CollectionType",
        },
        cursor: "YXJyYXljb25uZWN0aW9uOjk5",
      },
    ];

    const round = (value, step) => {
      step || (step = 1.0);
      var inv = 1.0 / step;
      return Math.round(value * inv) / inv;
    };
    const changeCategory = (item) => {
      selectedCategory.value = item.slug;
    };

    return {
      categories,
      collections,
      round,
      selectedCategory,
      changeCategory,
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


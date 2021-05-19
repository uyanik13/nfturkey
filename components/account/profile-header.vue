<template>
  <div class="font-raleway w-full">
    <div class="w-full">
      <div class="relative">
        <div class="w-full static flex flex-col items-center pb-16">
          <div class="w-full flex flex-col items-center pb-8">
            <div class="relative inset-x-0"></div>
            <div
              class="bg-gray-400 relative shadow-xl w-5/6 md:w-4/6 lg:w-full xl:w-full mx-auto py-24"
            >
              <div class="flex justify-center">
                <button class="focus:outline-none flex justify-center">
                  <img
                    v-tooltip="'Change Image'"
                    :src="account.imageUrl"
                    alt=""
                    class="rounded-full mx-auto absolute w-36 h-36 shadow-2xl border-4 border-white"
                  />
                </button>
              </div>
            </div>
          </div>
          <div class="flex flex-col items-center pt-4">
            <h2 class="font-bold text-6 lg:text-10 text-gray-900">
              {{
                account.user.publicUsername
                  ? account.user.publicUsername
                  : "Unnamed"
              }}
            </h2>
            <div>
              <button
                v-tooltip="'Copy'"
                class="flex space-x-2 focus:outline-none p-1 transform hover:scale-105 duration-300 ease-in-out"
              >
                <p>
                  {{ showHidingAddress(account.address) }}
                </p>
                <fa
                  :icon="['fas', 'copy']"
                  class="text-4.5 text-gray-600 mt-1"
                />
              </button>
            </div>
          </div>

          <div
            class="absolute top-0 right-0 m-5 bg-gray-200 rounded-lg p-4 text-indigo-50 inline-block"
          >
            <button v-tooltip="'Change Banner'" class="focus:outline-none">
              <fa :icon="['fas', 'edit']" class="text-5 text-gray-700" />
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="w-full flex flex-col items-center">
      <div class="w-full border-1 border-gray-400">
        <ul class="font-bold overflow-x-scroll flex items-center mt-8 lg:mt-0">
          <li
            class="mx-2 lg:mx-6 lg:my-3"
            v-for="item in categories"
            :key="item.id"
          >
            <button
              @click="changeCategory(item)"
              :class="
                item.route == $router.currentRoute.name
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
    </div>
  </div>
</template>

<script>
import {
  defineComponent,
  useFetch,
  ref,
  useRoute,
  useRouter,
  onBeforeMount,
} from "@nuxtjs/composition-api";

export default defineComponent({
  head: {},
  props: {},
  setup() {
    const route = useRoute();
    const router = useRouter();

    const categories = [
      {
        id: 1,
        title: "In Wallet",
        slug: "in-wallet",
        route: "account",
        icon: null,
      },
      {
        id: 2,
        title: "Activity",
        icon: null,
        route: "account-activity",
        slug: "activity",
      },
      {
        id: 3,
        title: "Offers",
        icon: null,
        route: "account-offers",
        slug: "offers",
      },
      {
        id: 4,
        title: "Favorites",
        icon: null,
        route: "account-favorites",
        slug: "favorites",
      },
      {
        id: 5,
        title: "Referrals",
        route: "account-referrals",
        slug: "referrals",
        icon: null,
      },
    ];

    const changeCategory = (item) => {
      if (item.id == 1) {
        router.push("/account");
      } else {
        router.push("/account/" + item.slug);
      }
    };

    const showHidingAddress = (address) => {
      if (!address) return null;
      let first5 = null;
      let last4 = null;
      first5 = address.substring(0, 5);
      last4 = address.substring(address.length - 4);
      return first5 + `...` + last4;
    };

    const account = {
      address: "0x0798c631126f67070a15682661abbd5cdf8a349a",
      chain: {
        identifier: "ETHEREUM",
        id: "Q2hhaW5UeXBlOjE=",
      },
      imageUrl:
        "https://storage.googleapis.com/opensea-static/opensea-profile/27.png",
      nickname: null,
      relayId: "QWNjb3VudFR5cGU6NDQ4NDk2NjQ=",
      user: {
        isStaff: false,
        relayId: "VXNlclR5cGU6ODI2Mzg4",
        username: "__OS__LimeGorillaFromVenus",
        publicUsername: null,
        id: "VXNlclR5cGU6ODI2Mzg4",
      },
      id: "QWNjb3VudFR5cGU6NDQ4NDk2NjQ=",
    };

    onBeforeMount(() => {
      // selectedCategory.value = router.currentRoute.name;
    });

    return {
      categories,
      changeCategory,
      showHidingAddress,
      account,
    };
  },
});
</script>


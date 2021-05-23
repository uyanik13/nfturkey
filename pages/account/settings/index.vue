<template>
  <div class="font-raleway bg-white">
    <client-only>
      <div class="flex lg:w-full">
        <div class="lg:w-4/12 border-1 border-gray-400">
          <div class="min-h-screen">
            <ul>
              <li
                class="border-1 border-gray-300"
                :class="item.active ? 'bg-gray-200' : ''"
                v-for="(item, index) in menuItems"
                :key="item.id"
              >
                <button
                  class="focus:outline-none"
                  @click="item.disabled ? '' : showSection(item, index)"
                >
                  <div class="flex items-center space-x-2 py-7 px-4">
                    <img
                      v-if="item.id == 1 || item.id == 2"
                      :src="item.icon"
                      class="w-8 h-8 rounded-full"
                    />

                    <fa
                      :icon="['fas', item.icon]"
                      class="text-4.5 text-gray-600 mt-1"
                    />
                    <p class="text-4.5 font-bold">
                      {{ item.title }}
                    </p>
                  </div>
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div class="lg:w-8/12">
          <div class="w-full px-4 border-1 border-gray-400 min-h-screen">
            <div class="lg:p-12" v-if="menuItems[0].active">
              <section class="shadow bg-gray-200">
                <article class="border-b">
                  <div class="border-transparent">
                    <header
                      class="flex justify-between items-center p-4 pl-2 pr-8 cursor-pointer select-none bg-gray-100 border-1 border-gray-300 rounded-lg"
                    >
                      <span class="flex text-gray-800 font-bold text-4.5"
                        ><fa
                          :icon="['fas', 'wallet']"
                          class="text-6 text-gray-600 mx-2 mt-0.5"
                        />
                        <p class="text-5">Balance</p>
                      </span>
                    </header>
                    <div>
                      <div
                        class="bg-gray-100 border-1 border-gray-300 rounded-md"
                      >
                        <div
                          class="flex flex-col justify-items-center items-center my-2 p-2"
                        >
                          <p>Total Balance</p>
                          <h4>$0.00 USD</h4>
                          <button
                            @click="$refs.add_funds.show()"
                            class="btn-primary"
                          >
                            Add Funds
                          </button>
                          <t-modal
                            ref="add_funds"
                            header="Add ETH to your wallet"
                          >
                            <div class="flex flex-col space-y-2">
                              <p>
                                Select one of the options to deposit ETH to your
                                wallet
                              </p>
                              <div>
                                <button class="btn-secondary">
                                  Deposit from an Exchange
                                </button>
                              </div>
                              <div>
                                <button class="btn-secondary">
                                  Buy with card
                                </button>
                              </div>
                            </div>
                            <template v-slot:footer>
                              <div class="flex justify-between">
                                <t-button
                                  @click="$refs.add_funds.hide()"
                                  type="button"
                                >
                                  Cancel
                                </t-button>
                                <t-button type="button"> Ok </t-button>
                              </div>
                            </template>
                          </t-modal>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </section>
            </div>

            <div class="lg:p-12" v-if="menuItems[1].active">
              <section class="shadow bg-gray-200">
                <article class="border-b">
                  <div class="border-transparent">
                    <header
                      class="flex justify-between items-center p-4 pl-2 pr-8 cursor-pointer select-none bg-gray-100 border-1 border-gray-300 rounded-lg"
                    >
                      <span class="flex text-gray-800 font-bold text-4.5"
                        ><fa
                          :icon="['fas', 'cog']"
                          class="text-6 text-gray-600 mx-2 mt-0.5"
                        />
                        <p class="text-5">Settings</p>
                      </span>
                    </header>
                    <div>
                      <div
                        class="bg-gray-100 border-1 border-gray-300 rounded-md"
                      >
                        <div class="flex my-2 p-2">
                          <div class="flex flex-col w-full px-4">
                            <label for="" class="text-4.5 font-bold">
                              Your Wallet Address
                            </label>
                            <div class="flex space-x-2">
                              <input
                                class="custom-input focus:indigo-500"
                                type="text"
                                disabled
                                v-model="account.address"
                              />
                              <button v-tooltip="`Copy`">
                                <fa
                                  :icon="['fas', 'copy']"
                                  class="text-6 text-gray-600 mt-2"
                                />
                              </button>
                            </div>
                            <div class="flex space-x-2 py-4">
                              <button class="btn-primary">Add Funds</button>
                              <button class="btn-secondary">Logout</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </section>
            </div>

            <div class="lg:p-12" v-if="menuItems[2].active">
              <h2 class="my-2">General Settings</h2>

              <div class="my-2">
                <label for="username"> Username </label>
                <input
                  id="username"
                  placeholder="Enter Username"
                  class="custom-input focus:indigo-500"
                  type="text"
                  v-model="account.user.username"
                />
              </div>
              <div class="my-2">
                <label for="bio"> Bio </label>
                <textarea
                  id="bio"
                  placeholder="Tell the world your story"
                  class="custom-input focus:indigo-500"
                  type="text"
                  v-model="account.user.bio"
                />
              </div>
              <div class="my-2">
                <label for="email"> Email Address </label>
                <input
                  id="email"
                  placeholder="Please enter your email"
                  class="custom-input focus:indigo-500"
                  type="email"
                  v-model="account.user.email"
                />
              </div>
              <div class="my-2">
                <button class="btn-primary">Save</button>
              </div>
            </div>

            <div class="lg:p-12" v-if="menuItems[3].active">
              <div class="my-4">
                <h2>Notification Settings</h2>
                <p>Select which notifications you would like to receive</p>
              </div>
              <div class="with-border p-0">
                <div
                  class="item-center space-x-4 border-b-1 border-gray-200 px-4 py-2"
                  v-for="item in notifications"
                  :key="item.id"
                >
                  <div>
                    <input
                      type="checkbox"
                      v-model="item.active"
                      name="options"
                      class="w-6 h-6"
                    />
                  </div>
                  <div>
                    <h5>{{ item.title }}</h5>
                    <p>{{ item.description }}</p>
                  </div>
                </div>
              </div>
              <div class="my-2">
                <button class="btn-primary">Save</button>
              </div>
            </div>

            <div class="lg:p-12" v-if="menuItems[4].active">
              <div class="my-4">
                <h2>Appearance</h2>
                <p>Toggle between light and dark themes.</p>
              </div>
              <div class="flex">
                <button @click="darkMode = !darkMode">
                  <svg
                    width="32"
                    height="32"
                    :class="darkMode ? 'text-yellow-600' : 'text-gray-900'"
                    class="fill-current"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M16 2a1.4 1.4 0 011.4 1.4v1.4a1.4 1.4 0 11-2.8 0V3.4A1.4 1.4 0 0116 2zM6.1 6.1a1.4 1.4 0 011.98 0l.99.99a1.4 1.4 0 11-1.98 1.98l-.99-.99a1.4 1.4 0 010-1.98zm19.8 0a1.4 1.4 0 010 1.98l-.99.99a1.4 1.4 0 01-1.98-1.98l.99-.99a1.4 1.4 0 011.98 0zM9 16a7 7 0 1114 0 7 7 0 01-14 0zm-7 0a1.4 1.4 0 011.4-1.4h1.4a1.4 1.4 0 110 2.8H3.4A1.4 1.4 0 012 16zm23.8 0a1.4 1.4 0 011.4-1.4h1.4a1.4 1.4 0 110 2.8h-1.4a1.4 1.4 0 01-1.4-1.4zm-2.87 6.93a1.4 1.4 0 011.98 0l.99.99a1.4 1.4 0 01-1.98 1.98l-.99-.99a1.4 1.4 0 010-1.98zm-15.84 0a1.4 1.4 0 011.98 1.98l-.99.99a1.4 1.4 0 01-1.98-1.98l.99-.99zM16 25.8a1.4 1.4 0 011.4 1.4v1.4a1.4 1.4 0 11-2.8 0v-1.4a1.4 1.4 0 011.4-1.4z"
                    ></path>
                    <defs>
                      <linearGradient
                        id="paint0_linear"
                        x1="2"
                        y1="2"
                        x2="30"
                        y2="30"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop
                          class="transition-all duration-200"
                          stop-color="#FACC15"
                        ></stop>
                        <stop
                          class="transition-all duration-200"
                          offset="1"
                          stop-color="#FA9D16"
                        ></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                </button>
              </div>
            </div>
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
  onMounted,
} from "@nuxtjs/composition-api";

import StatusAccordion from "@/components/account/status-accordion.vue";
import PriceAccordion from "@/components/account/price-accordion.vue";
import CollectionAccordion from "@/components/account/collection-accordion.vue";
import ChainsAccordion from "@/components/account/chains-accordion.vue";
import OnSaleInAccordion from "@/components/account/on-sale-in-accordion.vue";
import WalletItems from "@/components/account/wallet-items.vue";
import ProfileHeader from "@/components/account/profile-header.vue";

export default defineComponent({
  layout: "home",
  name: "rankings",
  head: {},
  components: {
    StatusAccordion,
    PriceAccordion,
    CollectionAccordion,
    ChainsAccordion,
    OnSaleInAccordion,
    WalletItems,
    ProfileHeader,
  },
  setup() {
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
        email: "",
        bio: "",
        relayId: "VXNlclR5cGU6ODI2Mzg4",
        username: "__OS__LimeGorillaFromVenus",
        publicUsername: null,
        id: "VXNlclR5cGU6ODI2Mzg4",
      },
      id: "QWNjb3VudFR5cGU6NDQ4NDk2NjQ=",
    };

    const showHidingAddress = (address) => {
      if (!address) return null;
      let first5 = null;
      let last4 = null;
      first5 = address.substring(0, 5);
      last4 = address.substring(address.length - 4);
      return first5 + `...` + last4;
    };

    const menuItems = ref([
      {
        id: 1,
        title: "Wallet",
        icon: require("~/assets/images/icons/wallet.svg"),
        active: false,
        disabled: false,
      },
      {
        id: 2,
        title: "",
        icon: "",
        active: true,
        disabled: false,
      },
      {
        id: 3,
        title: "General",
        icon: "cog",
        active: false,
        disabled: false,
      },
      {
        id: 4,
        title: "Notification Settings",
        icon: "bell",
        active: false,
        disabled: false,
      },
      {
        id: 5,
        title: "Appearance",
        icon: "circle",
        active: false,
        disabled: false,
      },
    ]);

    const showSection = (item, index) => {
      let selected = menuItems.value[index];
      menuItems.value.filter((item) => {
        item.active = false;
      });
      selected.active = true;
    };

    onMounted(() => {
      menuItems.value[1] = {
        id: 2,
        title: showHidingAddress(account.address),
        description: null,
        icon: account.imageUrl,
        active: true,
      };
    });

    const notifications = ref([
      {
        id: 1,
        title: "Item Sold",
        description: "When someone purchased one of your items",
        active: false,
      },
      {
        id: 2,
        title: "Bid Activity",
        description: "When someone bids on one of your items",
        active: false,
      },
      {
        id: 3,
        title: "Price Change",
        description: "When an item you made an offer on changes in price",
        active: false,
      },
      {
        id: 4,
        title: "Auction Expiration",
        description: "When a Dutch or English auction you created ends",
        active: false,
      },
      {
        id: 5,
        title: "Outbid",
        description: "When an offer you placed is exceeded by another user",
        active: false,
      },
      {
        id: 6,
        title: "Referral Successful",
        description: "hen an item you referred is purchased",
        active: false,
      },
      {
        id: 8,
        title: "Owned Asset Updates",
        description:
          "When a significant update occurs for one of the items you have purchased on nfturkey",
        active: false,
      },
      {
        id: 9,
        title: "Successful Purchase",
        description: "When you successfully buy an item",
        active: false,
      },
      {
        id: 10,
        title: "NFTurkey Newsletter",
        description: "Occasional updates from the NFTurkey team",
        active: false,
      },
    ]);

    const darkMode = ref(false);
    return {
      account,
      showHidingAddress,
      menuItems,
      showSection,
      notifications,
      darkMode,
    };
  },
});
</script>


<template>
  <header class="block bg-white">
    <div id="header" class="h-15 w-full border-b border-gray-200 shadow-sm">
      <div
        id="topbar"
        class="bg-secondary mx-auto px-24 py-2 justify-between hidden sm:block md:block lg:flex"
      ></div>

      <div
        class="mx-auto sm:px-2 lg:px-24 py-4 mb-2 flex items-center justify-between border-b-default lg:border-none border-gray-300"
      >
        <!-- LOGO -->
        <NuxtLink to="/">
          <div id="logo" class="flex w-28 lg:w-64 mx-8">
            <img
              class="w-12 h-12"
              src="https://opensea.io/static/images/logos/opensea-logo.png"
            />
            <p class="mt-2 ml-2 text-5.5 font-raleway font-bold">NFTurkey</p>
          </div>
        </NuxtLink>

        <div id="search" class="lg:w-6/12 sm:w-full">
          <search-component />
        </div>

        <div id="quickMenu2" class="flex lg:w-6/12 sm:w-full mx-4">
          <ul
            class="tracking-wide font-bold w-full block flex-grow lg:flex lg:flex-initial lg:w-auto items-center mt-8 lg:mt-0"
            :class="menuOpen ? 'block' : 'hidden'"
          >
            <li class="mx-6 mb-6 lg:mb-0" v-for="item in Menu" :key="item.id">
              <mega-menu :menu="item" />
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div>
      <MobileBottomMenu />
    </div>
  </header>
</template>
<script>
import MobileBottomMenu from "./MobileBottomMenu.vue";
import SearchComponent from "@/components/common/header/SearchComponent.vue";
import MegaMenu from "@/components/common/header/MegaMenu.vue";
import { mapGetters } from "vuex";

export default {
  name: "Header",
  components: {
    MobileBottomMenu,
    MegaMenu,
    SearchComponent,
  },
  data() {
    return {
      showLoginModal: false,
      isShowSideCart: false,
      Menu: [
        {
          id: 1,
          title: "Marketplace",
          slug: "/",
          featured: null,
          submenu: [
            {
              id: 1,
              title: "All NFTs",
              slug: "all",
              icon: require("~/assets/images/icons/all-nft.svg"),
              featured: "NEW",
            },
            {
              id: 2,
              title: "New",
              icon: require("~/assets/images/icons/new.svg"),
              slug: "new",
            },
            {
              id: 3,
              title: "Art",
              icon: require("~/assets/images/icons/art.svg"),
              slug: "art",
            },
            {
              id: 4,
              title: "Domain Names",
              icon: require("~/assets/images/icons/domain-registration.svg"),
              slug: "domain-names",
            },
            {
              id: 5,
              title: "Virtual Worlds",
              icon: require("~/assets/images/icons/virtual.svg"),
              slug: "virtual-worlds",
            },
            {
              id: 6,
              title: "Trading Cards",
              icon: require("~/assets/images/icons/trading-card.svg"),
              slug: "trading-cards",
            },
            {
              id: 7,
              title: "Collectibles",
              icon: require("~/assets/images/icons/collectibles.svg"),
              slug: "collectibles",
            },
            {
              id: 8,
              title: "Sports",
              icon: require("~/assets/images/icons/sports.svg"),
              slug: "sports",
            },
            {
              id: 9,
              title: "Utility",
              icon: require("~/assets/images/icons/utility.svg"),
              slug: "utility",
            },
          ],
        },
        {
          id: 2,
          title: "Stats",
          slug: "/rankings",
          featured: null,
          submenu: [
            {
              id: 1,
              title: "Ranking",
              slug: "/rankings",
              featured: "NEW",
            },
            {
              id: 2,
              title: "Activity",
              slug: "/activity",
              featured: "NEW",
            },
          ],
        },
        {
          id: 3,
          title: "Resources",
          slug: "/resources",
          featured: null,
          submenu: [
            {
              id: 1,
              title: "Help Center",
              slug: "giyim",
              featured: "NEW",
            },
            {
              id: 2,
              title: "Partner & Developers",
              slug: "giyim",
              featured: "NEW",
            },
            {
              id: 3,
              title: "Suggestions",
              slug: "giyim",
              featured: "NEW",
            },
            {
              id: 4,
              title: "Discord Community",
              slug: "giyim",
              featured: "NEW",
            },
            {
              id: 5,
              title: "Blog",
              slug: "giyim",
              featured: "NEW",
            },
            {
              id: 6,
              title: "Subscribe to Newsletter",
              slug: "giyim",
              featured: "NEW",
            },
          ],
        },
        {
          id: 4,
          title: "My Profile",
          slug: "/account",
          icon: require("~/assets/images/icons/user.svg"),
          featured: null,
          submenu: [
            {
              id: 1,
              title: "My Profile",
              slug: "/account",
              featured: "NEW",
            },
            {
              id: 2,
              title: "My Collections",
              slug: "/account/",
              featured: "NEW",
            },
            {
              id: 3,
              title: "My Favorites",
              slug: "/account/favorites",
              featured: "NEW",
            },
            {
              id: 4,
              title: "My Account Settings",
              slug: "account/settings",
              featured: "NEW",
            },
          ],
        },
        {
          id: 5,
          title: "Balance",
          slug: "balance",
          icon: require("~/assets/images/icons/wallet.svg"),
          featured: null,
          submenu: [],
        },
      ],
      menuOpen: false,
    };
  },
  computed: {
    ...mapGetters({
      cartCount: "cart/getCount",
    }),
  },
  watch: {},
  methods: {
    click() {
      console.log("clicked");
    },
    closeLoginRegisterModal(e) {
      this.showLoginModal = e;
    },
    closeSideCart(e) {
      this.isShowSideCart = e;
    },
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
  },

  mounted() {},
  created() {},
};
</script>

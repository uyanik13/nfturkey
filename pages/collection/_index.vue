<template>
  <div>
    <client-only>
      <div class="w-full px-48">
        <ul
          class="tracking-wide font-bold w-full block flex-grow lg:flex lg:flex-initial lg:w-auto items-center mt-8 lg:mt-0"
          :class="menuOpen ? 'block' : 'hidden'"
        >
          <li class="mx-6 lg:my-3" v-for="item in categories" :key="item.id">
            <mega-menu :menu="item" />
          </li>
        </ul>
      </div>
      <div class="w-full pb-8">
        <img :src="collection.heroImage" class="object-cover w-full h-56" />
      </div>
      <div class="lg:w-full lg:px-24 pb-16">
        <div class="flex justify-center">
          <h2 class="font-bold text-10 text-gray-900">
            {{ collection.title }}
          </h2>
        </div>
        <div class="flex justify-center my-5 mx-5 lg:mx-48">
          <p class="font-normal text-4.5 text-gray-800">
            {{ collection.description }}
          </p>
        </div>
      </div>
      <slide-product-section
        :section-icon="require('~/assets/images/icons/arrow-up.svg')"
        :section-title="`TRENDING COLLECTIONS`"
        :items="collection.trendingCollections"
      />
      <slide-product-section
        :section-icon="require('~/assets/images/icons/clock.svg')"
        :section-title="`RECENTLY LISTED`"
        :items="collection.recentlyListed"
      />
      <slide-product-section
        :section-icon="require('~/assets/images/icons/new-blue.svg')"
        :section-title="`NEWLY MINTED`"
        :items="collection.newlyMinted"
      />
      <slide-product-section
        :section-icon="require('~/assets/images/icons/auction.svg')"
        :section-title="`ON AUCTION`"
        :items="collection.newlyMinted"
      />
    </client-only>
  </div>
</template>
<script>
import SlideProductSection from "@/components/common/homepage/slide-product-section.vue";

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
    SlideProductSection,
  },
  setup() {
    const menuOpen = ref(false);
    const collection = {
      name: "Trading Cards",
      title: "Explore Trading Cards",
      heroImage:
        "https://lh3.googleusercontent.com/8VGubP7xBfRaeO_EslP8yXVyI0sMyfysOnt1NfbBnY6O7djIVrMeCXHZ8Y2hDqu6DEEc7UZqf87CcxxEOlgVDcVG1TTT72KLpi4_G9M=h600",
      description:
        "With unique assets traded and stored on the blockchain, classic games are taking on a new life. Decentralized networks mean players and collectors can now trade in-game items on third-party platforms and marketplaces, fundamentally changing the way online ownership is perceived in the digital era.Buy and sell digital collectible trading cards from the likes of Sorare, Gods Unchained, and $MEME on OpenSea.",
      trendingCollections: [
        {
          image:
            "https://lh3.googleusercontent.com/vBefzstn1ncoKvbd-vXe_O5ZADtSA6-cU8TuS5lukztyj0u3k02eN0rgWlrRdFusLbXyvaWIsZOW0GbHyXONrGEkonF1Jo-TOxPK9Cg=w326",
          name: "VoxoDeus",
          slug: "voxoDeus",
        },
        {
          image:
            "https://lh3.googleusercontent.com/uVziXd8Q64_zvofgrKFp5SmrcObngHoVWZMJQOHAZ3bdERsO4GaYvQcuGsz0ofr8zy8iajJdNQHCwFkSdBmkVy_osTPvoAuQFv489g=w326",
          name: "Ghxsts",
          slug: "ghxsts",
        },
        {
          image:
            "https://lh3.googleusercontent.com/TVOmvJz3kgw97fTBHRf8w0hJ3REGgvowSnjt4rVcOufJ7_kmSsH6d2gIuEegcTjT6XFaGDcWXLsBMrobXDUZb23JInK89XJNY-WT9w=w326",
          name: "Polka City Asset",
          slug: "polka-city-asset",
        },
        {
          image:
            "https://lh3.googleusercontent.com/eGFYlEJ9cTe9aEjniBcD3k_g49QV_rsLMEMD6p60hCC6IDyOqkqHrKDO1rzyHRMPA_tPRYaKHhLu-zR6fKa-4E9SJbZMCV69X9xt=w326",
          name: "ZED RUN",
          slug: "zed-run",
        },
      ],
      recentlyListed: [
        {
          image:
            "https://lh3.googleusercontent.com/LsPCarg86lwSl30b7dPq___z8_tbarolwtEyJXW0GbO8uAbLfF40ws0mcNS21wxAJQPvq4pMUCyPbsa-Ie7FnfHhBRGcq0JR1gWIbA=s277",
          name: "VoxoDeus",
          title: "Test1",
          userId: "0x495f947276749ce646f68ac8c248420045cb7b5e",
          itemId: "74599564892152787812",
          price: "0.3549",
          endDate: "05/14/2021 17:23:55",
        },
        {
          image:
            "https://lh3.googleusercontent.com/JkrIkSzw04hBzlsFh4KLjwG2f2A-gzy_xoASjFKDiF4HZCbU_wm-Nrw1UbccJSD-hNLKSGcSwK7rYXRKNhtZO1hT03Wnkv-k8UIW=s277",
          name: "Ghxsts",
          title: "Test2",
          userId: "0x495f947276749ce646f68ac8c248420045cb7b5e",
          itemId: "74599564892152787812",
          price: "0.3979",
          endDate: "05/17/2021 17:23:55",
        },
        {
          image:
            "https://lh3.googleusercontent.com/gl5JX_tCTCc2wLgVaup02ZLKLw38pG6ZXuuF2J3U7w6xpGPeGp4Rrn3Lb6ABvC6zoFWQ1f209leaX2kTE2iSDXBcFjDAD3KNryuy2g=s277",
          name: "Polka City Asset",
          title: "Test3",
          userId: "0x495f947276749ce646f68ac8c248420045cb7b5e",
          itemId: "74599564892152787812",
          price: "0.4589",
          endDate: "05/19/2021 17:23:55",
        },
        {
          image:
            "https://lh3.googleusercontent.com/uy2DW4t9u_4PCwpwmoPEHP-FrSX2ZytHwU6y8UURyZE825bgNU2xpbxFOvc65O7wgHS9_MLHGmEpbQP8KTLuOd1UE9zaWlsNqFptt_o=s277",
          name: "ZED RUN",
          title: "Test4",
          userId: "0x495f947276749ce646f68ac8c248420045cb7b5e",
          itemId: "74599564892152787812",
          price: "0.7589",
          endDate: "05/21/2021 17:23:55",
        },
      ],
      newlyMinted: [
        {
          image:
            "https://lh3.googleusercontent.com/LGVGFmc1G-dB0IlSYVSUr32QbYw01sunERyjOqzAWbXB0Fxl3DLPx7qCxV2z2XeTsB2WdtOJ5JOjITo3xkxdIkYILzGRJIalBF-W=s259",
          name: "VoxoDeus",
          title: "Test1",
          userId: "0x495f947276749ce646f68ac8c248420045cb7b5e",
          itemId: "74599564892152787812",
          price: "0.3549",
          endDate: "05/14/2021 17:23:55",
        },
        {
          image:
            "https://lh3.googleusercontent.com/97hPNgd4THtBrCwdp-Xt96PbOL1fUcu25rxki9lRCA4oN9TqZ86Rx-sDZKGW-a0pGaFcpgIxZ6V6bdSs2-w70_Yo3IK6Dx48qzvgB9s=s259",
          name: "Ghxsts",
          title: "Test2",
          userId: "0x495f947276749ce646f68ac8c248420045cb7b5e",
          itemId: "74599564892152787812",
          price: "0.3979",
          endDate: "05/17/2021 17:23:55",
        },
        {
          image:
            "https://lh3.googleusercontent.com/gl5JX_tCTCc2wLgVaup02ZLKLw38pG6ZXuuF2J3U7w6xpGPeGp4Rrn3Lb6ABvC6zoFWQ1f209leaX2kTE2iSDXBcFjDAD3KNryuy2g=s277",
          name: "Polka City Asset",
          title: "Test3",
          userId: "0x495f947276749ce646f68ac8c248420045cb7b5e",
          itemId: "74599564892152787812",
          price: "0.4589",
          endDate: "05/19/2021 17:23:55",
        },
        {
          image:
            "https://lh3.googleusercontent.com/uy2DW4t9u_4PCwpwmoPEHP-FrSX2ZytHwU6y8UURyZE825bgNU2xpbxFOvc65O7wgHS9_MLHGmEpbQP8KTLuOd1UE9zaWlsNqFptt_o=s277",
          name: "ZED RUN",
          title: "Test4",
          userId: "0x495f947276749ce646f68ac8c248420045cb7b5e",
          itemId: "74599564892152787812",
          price: "0.7589",
          endDate: "05/21/2021 17:23:55",
        },
      ],
      onAuction: [
        {
          image:
            "https://lh3.googleusercontent.com/r1KxJioCSQEFsg0iIKdGQDulbu_KINZJsNgLYFBib3N7cVEGpcyAxQyPdpnxuq8pLonzdgSXhwRYHvRAcF_as-5NbBxKxj7jfjG-vw=s259",
          name: "VoxoDeus",
          title: "Test1",
          userId: "0x495f947276749ce646f68ac8c248420045cb7b5e",
          itemId: "74599564892152787812",
          price: "0.3549",
          endDate: "05/14/2021 17:23:55",
        },
        {
          image:
            "https://lh3.googleusercontent.com/97hPNgd4THtBrCwdp-Xt96PbOL1fUcu25rxki9lRCA4oN9TqZ86Rx-sDZKGW-a0pGaFcpgIxZ6V6bdSs2-w70_Yo3IK6Dx48qzvgB9s=s259",
          name: "Ghxsts",
          title: "Test2",
          userId: "0x495f947276749ce646f68ac8c248420045cb7b5e",
          itemId: "74599564892152787812",
          price: "0.3979",
          endDate: "05/17/2021 17:23:55",
        },
        {
          image:
            "https://lh3.googleusercontent.com/gl5JX_tCTCc2wLgVaup02ZLKLw38pG6ZXuuF2J3U7w6xpGPeGp4Rrn3Lb6ABvC6zoFWQ1f209leaX2kTE2iSDXBcFjDAD3KNryuy2g=s277",
          name: "Polka City Asset",
          title: "Test3",
          userId: "0x495f947276749ce646f68ac8c248420045cb7b5e",
          itemId: "74599564892152787812",
          price: "0.4589",
          endDate: "05/19/2021 17:23:55",
        },
        {
          image:
            "https://lh3.googleusercontent.com/uy2DW4t9u_4PCwpwmoPEHP-FrSX2ZytHwU6y8UURyZE825bgNU2xpbxFOvc65O7wgHS9_MLHGmEpbQP8KTLuOd1UE9zaWlsNqFptt_o=s277",
          name: "ZED RUN",
          title: "Test4",
          userId: "0x495f947276749ce646f68ac8c248420045cb7b5e",
          itemId: "74599564892152787812",
          price: "0.7589",
          endDate: "05/21/2021 17:23:55",
        },
      ],
    };
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

    return {
      collection,
      categories,
      menuOpen,
    };
  },
});
</script>

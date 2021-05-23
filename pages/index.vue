<template>
  <div class="my-6">
    <client-only>
      <featured />
      <slide-product-section
        :section-icon="require('~/assets/images/icons/arrow-up.svg')"
        :section-title="`TRENDING COLLECTIONS`"
        :items="trendingCollections"
      />
      <slide-product-section
        :section-icon="require('~/assets/images/icons/digital-art.svg')"
        :section-title="`DIGITAL ART`"
        :items="digitalArtCollections"
      />
      <slide-product-section
        :section-icon="require('~/assets/images/icons/virtual.svg')"
        :section-title="`VIRTUAL WORLDS`"
        :items="virtualWorldsCollections"
      />
      <slide-product-section
        :section-icon="require('~/assets/images/icons/trophy.svg')"
        :section-title="`COLLECTIBLES`"
        :items="collectibleCollections"
      />
      <get-started />
      <partners v-if="false" />
    </client-only>
  </div>
</template>

<script>
import {
  defineComponent,
  useMeta,
  computed,
  ref,
  useFetch,
  onMounted,
} from "@nuxtjs/composition-api";

import Featured from "@/components/common/homepage/featured.vue";
import SlideProductSection from "@/components/common/homepage/slide-product-section.vue";
import GetStarted from "@/components/common/homepage/get-started.vue";
import Partners from "@/components/common/homepage/partners.vue";
import { useQuery } from "@casperengl/apollo-composable";
import gql from "graphql-tag";

export default defineComponent({
  // You need to define an empty head to activate this functionality
  head: {},
  layout: "home",
  name: "Home",
  components: {
    Featured,
    SlideProductSection,
    GetStarted,
    Partners,
  },
  setup() {
    const GET_ASSETS = gql`
      {
        assets {
          title
        }
      }
    `;

    const trendingCollections = [
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
    ];
    const digitalArtCollections = [
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
    ];
    const virtualWorldsCollections = [
      {
        image:
          "https://lh3.googleusercontent.com/17vU_UNWeMOVi4XOAwo4nvAXpeg1dnKPBk8VnAhJcFHOFZ9UBBvSL5Spj0ytvyfII3rdp4gHMY0mMvbnSzjdOZ0=s277",
        name: "The SandBox",
        title: "LAND (-152, -57",
        userId: "0x495f947276749ce646f68ac8c248420045cb7b5e",
        itemId: "74599564892152787812",
        price: "0.3549",
        endDate: null,
      },
      {
        image:
          "https://lh3.googleusercontent.com/8q8qdKYzG9jYXO-epUWRVTQcOphuWGjj7pbhrZyTaaJ7qrP_opiKU8AiD-ecu0RU6QGJZPDtVh5wmAi0dByT53-S=s277",
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
          "https://lh3.googleusercontent.com/TAz_RirXqLCpf1xxP4Xbd1PxjbFL6NMidjDh7TYAIE84FqagL-MlphDX8BGqF-w7ayepQwefHCHFZcS2nnivJSYCefU-jR7jC-yeuw=s277",
        name: "ZED RUN",
        title: "Test4",
        userId: "0x495f947276749ce646f68ac8c248420045cb7b5e",
        itemId: "74599564892152787812",
        price: "0.7589",
        endDate: "05/21/2021 17:23:55",
      },
    ];
    const collectibleCollections = [
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

    onMounted(() => {
      const { result, loading, error } = useQuery(gql`
        query {
          assets {
            title
          }
        }
      `);
      console.log("err", error);
    });

    return {
      trendingCollections,
      digitalArtCollections,
      virtualWorldsCollections,
      collectibleCollections,
    };
  },
});
</script>


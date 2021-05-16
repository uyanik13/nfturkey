<template>
  <div class="bg-gray-200 min-h-screen flex flex-col">
    <Header @click="toggleNavbar" />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

export default {
  components: {
    Header,
    Footer
  },
  data() {
    return {
      openNavbar: false
    };
  },
  methods: {
    toggleNavbar() {
      //console.log('opened');
      this.openNavbar = !this.openNavbar;
    },
    closeNavbar() {
      this.openNavbar = false;
    }
  }
};
</script>

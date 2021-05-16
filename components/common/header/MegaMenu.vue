<template>
  <div class="relative" @mouseover="showMenu" @mouseleave="hideMenu">
    <a
      :href="menu.slug"
      class="text-gray-900 font-raleway font-bold hover:text-blue-600 border-b-3 py-6 border-white hover:border-blue-600"
      @focus="showMenu"
      @keydown.shift.tab="hideMenu"
      @keydown.esc.exact="hideMenu"
      @keydown.up.exact.prevent="startArrowKeys"
      @keydown.down.exact.prevent="startArrowKeys"
    >
      <div v-if="!menu.icon">
        <p>
          {{ menu.title }}
        </p>
      </div>
      <div v-else>
        <img :src="menu.icon" class="w-5 h-5" />
      </div>
    </a>

    <div class="absolute w-full">&nbsp;</div>

    <transition name="mega-menu-fade shadow-lg ">
      <div
        v-show="isVisible & (menu.submenu.length > 0)"
        class="absolute bg-white shadow-md rounded-sm overflow-hidden mt-6 z-10"
      >
        <div class="flex flex-col lg:flex-row">
          <ul class="w-full">
            <li
              v-for="submenu in menu.submenu"
              :key="submenu.id"
              class="py-1 border-b-1 border-gray-300 w-full"
            >
              <a
                :href="
                  menu.id === 1 ? `/collection/` + submenu.slug : submenu.slug
                "
                class="flex group mr-4"
                @keydown.esc.exact="hideMenu"
                @keydown.tab.exact="focusNext(false)"
                @keydown.down.exact.prevent="focusNext(true)"
                @keydown.up.exact.prevent=""
              >
                <div
                  class="pl-4 py-2 pr-10 text-gray-900 font-raleway font-normal group-hover:text-blue-600 flex items-center whitespace-nowrap"
                >
                  <img
                    v-if="submenu.icon"
                    :src="submenu.icon"
                    class="w-5 h-5 mr-2"
                  />
                  <span>{{ submenu.title }}</span>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  mounted() {
    this.menuItems = document.querySelectorAll(".mega-menu a");
  },
  props: {
    menu: {
      type: Object,
      required: false,
      default: {},
    },
  },
  data() {
    return {
      isVisible: false,
      menuItems: null,
      focusedIndex: 0,
    };
  },
  methods: {
    showMenu() {
      this.isVisible = true;
    },
    hideMenu() {
      this.isVisible = false;
      this.focusedIndex = 0;
    },
    startArrowKeys() {
      this.menuItems[0].focus();
    },
    focusPrevious(isArrowKey) {
      this.focusedIndex = this.focusedIndex - 1;

      if (isArrowKey) {
        this.focusItem();
      }
    },
    focusNext(isArrowKey) {
      this.focusedIndex = this.focusedIndex + 1;

      if (isArrowKey) {
        this.focusItem();
      }
    },
    focusItem() {
      this.menuItems[this.focusedIndex].focus();
    },
  },
};
</script>

<style scoped>
.mega-menu-fade-enter-active,
.mega-menu-fade-leave-active {
  transition: all 0.1s ease-in-out;
}
.mega-menu-fade-enter,
.mega-menu-fade-leave-to {
  opacity: 0;
  transform: translateY(-12px);
}
</style>

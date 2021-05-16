<template>
  <div id="side-cart" v-show="sidebarOpen" class="z-90 min-h-screen font-poppins bg-white bg-opacity-95  top-0  right-0 w-92  text-secondary absolute lg:fixed">

           <div class="flex justify-between mt-4 px-3 border-b-1 border-gray-200">
                <button @click="sidebarOpen & $emit('closeSideCart',false)" classs="focus:outline-none focus:bg-black ">
                  <fa
                    :icon="['fas', 'window-close']"
                    class="pb-2 text-8 hover:text-primary "  />
                </button>

                <a href="/cart" class="text-sm flex hover:text-primary">
                Go to Cart
                <fa
                    :icon="['fas', 'arrow-right']"
                    class="mx-2 mt-0.5 "  />
                </a>

           </div>

           <div class="mt-8 px-3 ">
              <ul v-if="cart.length > 0">
                  <li class="py-2" v-for="item in cart" :key="item.id" >
                      <div class="flex">
                            <img  class="w-24 mx-1" :src="item.thumbnail"/>
                            <div class="grid">
                            <span class="mx-1 text-sm">{{item.title}}</span>
                            <span class="flex mx-2">
                              <p class="text-sm text-gray-600 ">{{item.quantity}} X</p>
                              <p class="text-sm text-gray-800 mx-1">{{item.salePrice}} TL</p>
                            </span>
                            </div>
                            <div @click="deleteItemFromCart(item.id)">
                              <fa
                                  :icon="['fas', 'trash']"
                                  class="pb-2 text-6 hover:text-primary "  />
                            </div>

                      </div>
                  </li>
              </ul>
              <ul v-else>
                  <li class="py-2 text-center">
                      <fa
                      :icon="['fas', 'shopping-cart']"
                      class="mx-2 mt-0.5 "  />
                      <p class="text-sm text-gray-600 ">Cart Empty</p>
                  </li>
              </ul>
           </div>

          <div class="grid  mt-8 px-8 py-4 border-b-1 border-t-1 border-gray-200" v-show="cart.length > 0">
              <div class="flex justify-between ">
                    <span class="text-sm ">Subtotal</span>
                    <span class="text-sm font-bold ">{{cartTotal}} TL</span>
              </div>
              <div class="flex justify-between ">
                    <span class="text-sm ">Tax</span>
                    <span class="text-sm font-bold ">{{0}} TL</span>
              </div>
              <div class="flex justify-between ">
                    <span class="text-sm ">Total</span>
                    <span class="text-sm font-bold ">{{cartTotal}} TL</span>
              </div>
           </div>


           <div class="grid w-full px-8 my-6 font-poppins " v-show="cart.length > 0">
                <button class="transition duration-500 ease-in-out bg-secondary hover:bg-primary text-white text-4 py-3 rounded-sm">Buy now</button>
           </div>



  </div>
</template>


<script>

import { mapGetters } from 'vuex'

export default {
  components: {},
  props: {
    showSideCart: {
      type: Boolean,
      default : false
    }
  },

  computed: {
     ...mapGetters({
        cart: 'cart/getCart',
        cartTotal: 'cart/getTotal',
    }),
    sidebarOpen () {
      return this.showSideCart
    },

  },
  methods: {
    clearCart () {
      return this.$store.dispatch('cart/clear')
    },
    deleteItemFromCart(itemId) {
      const that = this
        this.$notiflix.Confirm.Show(
         'Silme Islemi',
         'Bunu Silmek Istediginizden Emin misiniz?',
         'Evet',
         'Hayir',
          function(){
            that.$store.dispatch('cart/remove', itemId).then((response) => {
              that.$notiflix.Notify.Success('Urun Basariyla Silindi');
            })
            .catch(error => {
              that.$notiflix.Notify.Failure(error.response.data.message);
            })
           },
          function(){

          }
          );


    },
  },
  data() {
    return {

    };
  }
};
</script>
<style>
</style>


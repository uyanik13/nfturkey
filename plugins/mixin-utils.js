import Vue from 'vue'
import {
  mapGetters
} from 'vuex'



Vue.mixin({
  data() {

    return {

    };
  },
  computed: {
    ...mapGetters({
      cart: 'cart/getCart',
      user: 'auth/user',
      auth: 'auth/isAuthenticated',
    }),

  },
  methods: {
    dateConverter(date) {
      let unixTime = Date.parse(date)
      let newDate = new Date(unixTime)
      const utcDate = newDate.toLocaleString('tr-TR', {
        timeZone: 'Europe/istanbul'
      })
      return utcDate
    },
    showLoading(value) {
      if (value) {
        this.$notiflix.Loading.Hourglass('Yukleniyor...');
      } else {
        this.$notiflix.Loading.Remove();
      }
    },
    copyToClipBoard(text) {
      var dummy = document.createElement("input");
      document.body.appendChild(dummy);
      dummy.setAttribute('value', text);
      dummy.select();
      document.execCommand("copy");
      document.body.removeChild(dummy);
      this.$notiflix.Notify.Success('Başarıyla kopyalandı');

    }

  },
  mounted() {

  }
})

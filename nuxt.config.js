export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'NFT Magazasi',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: ''
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/app.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    //{src: 'plugins/swiper.js', ssr: false},
    "~/plugins/notiflix.js",
    "~/plugins/local-storage.js",
    "~/plugins/axios.js",
    "~/plugins/vee-validate.js",
    "~/plugins/mixin-utils.js",
    "~/plugins/vue-tailwind.js",
    "~/plugins/vue-tooltip.js",
    "~/plugins/provide-apollo-client.js",
    //"~/plugins/i18n.js"
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/composition-api/module',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/router-extras',
    ['nuxt-fontawesome', {
      component: 'fa', //customize component name
      imports: [{
          set: '@fortawesome/free-solid-svg-icons',
          icons: ['faLightbulb', 'faCartArrowDown', 'faShoppingCart', 'faSearch', 'faUserCircle', 'faHeart', 'faWindowClose',
            'faTrash', 'faArrowRight', 'faRocket', 'faCreditCard', 'faEnvelope', 'faGift', 'faWallet', 'faEye', 'faCopy', 'faEdit',
            'faCog', 'faBell', 'faBellSlash', 'faShareSquare', 'faCircle'
          ]
        },
        {
          set: '@fortawesome/free-brands-svg-icons',
          icons: ['faGithub', 'faFacebook', ]
        },
        {
          set: '@fortawesome/free-regular-svg-icons',
          icons: ['faLightbulb', ]
        },
      ]
    }]

  ],



  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    //'nuxt-i18n',
    '@nuxtjs/apollo',
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],

  apollo: {
    // required
    clientConfigs: {
      default: {
        // required
        httpEndpoint: process.env.API_URL || 'http://localhost:3001/graphql',
        //browserHttpEndpoint: '/graphql',
        wsEndpoint: null,
        persisting: false,
        tokenName: 'AUTH_TOKEN',
        ssr: false,
        httpLinkOptions: {
          fetchOptions: {
            mode: 'cors' //Cors Needed for external Cross origins, need to allow headers from server
          },
          credentials: "omit" //must be omit to support application/json content type
        }
      },

    }
  },


  tailwindcss: {
    cssPath: '~/assets/css/plugins/tailwind.css',
    configPath: '~/tailwind.config.js',
    exposeConfig: false,
    config: {},
    viewer: true
  },


  axios: {
    proxy: true,
    credentials: true,
    debug: false,
    headers: {
      common: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      delete: {},
      get: {},
      head: {},
      post: {},
      put: {},
      patch: {}
    }
  },


  proxy: {
    'api': 'http://localhost:3001/api'
  },


  //i18n: {},



  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ["vee-validate/dist/rules"],



    extend(config, ctx) {}
  }
}

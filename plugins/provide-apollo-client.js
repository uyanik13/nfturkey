import {
  provide,
  onGlobalSetup,
  defineNuxtPlugin,
  onMounted
} from "@nuxtjs/composition-api";
import {
  DefaultApolloClient
} from "@casperengl/apollo-composable";

export default defineNuxtPlugin(({
  app
}) => {
  onGlobalSetup(() => {
    onMounted(()=>{
        console.log(DefaultApolloClient)
    })
    provide(DefaultApolloClient, app.apolloProvider?.defaultClient);
  });
});

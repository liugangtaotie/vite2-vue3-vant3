import { createApp } from "vue";
import App from "./App.vue";

// router
import router, { setupRouter } from "./router";

import { setupStore } from "./store";

import vant from "./utils/vant";
import "vant/lib/index.css"; // 全局引入样式

(async () => {
  const app = createApp(App);
  // Register global components
  // registerGlobComp(app)

  // Multilingual configuration
  // await setupI18n(app)

  // Configure routing
  setupRouter(app);

  // Configure vuex store
  setupStore(app);

  app.use(vant);

  // Register global directive
  // setupGlobDirectives(app)

  // Configure global error handling
  // setupErrorHandle(app)

  // Mount when the route is ready
  // https://next.router.vuejs.org/api/#isready
  await router.isReady();

  app.mount("#app", true);
})();

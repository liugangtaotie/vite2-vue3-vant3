import type { App } from "vue";
import { createStore } from "vuex";

const store = createStore({
  state: {
    listData: { 1: 10 },
    num: 10,
    count: 100,
  },
  mutations: {
    setData(state, value) {
      state.listData = value;
    },
    addNum(state) {
      state.num = state.num + 10;
    },
    increment(state: any) {
      state.count++;
    },
    subtraction(state: any) {
      state.count--;
    },
  },
  actions: {
    setData(context, value) {
      console.info("11111", context);
      console.info("2222", value);
      context.commit("setData", value);
    },
  },
  modules: {},
});

export function setupStore(app: App<Element>) {
  app.use(store);
}

export default store;

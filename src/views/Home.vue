<template>
  <p @click="$router.push('about')">home</p>
  <div>vuex:{{ $store.state.num }}</div>
  <button @click="add">++</button>
  <br />
  <van-button disabled type="primary">Diabled</van-button>

  <van-divider />

  <van-button type="success">Success</van-button>

  <van-divider />

  <van-tabs v-model:active="active">
    <van-tab v-for="index in 4" :title="'tab' + index"> content of tab {{ index }} </van-tab>
  </van-tabs>

  <van-tabbar v-model="activeFooter">
    <van-tabbar-item icon="home-o">Tab</van-tabbar-item>
    <van-tabbar-item icon="search">Tab</van-tabbar-item>
    <van-tabbar-item icon="friends-o">Tab</van-tabbar-item>
    <van-tabbar-item icon="setting-o">Tab</van-tabbar-item>
  </van-tabbar>
</template> 
 
<script lang='ts'>
import { defineComponent, onMounted, computed, reactive, ref, toRefs } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "home",
  components: {},
  setup(props: any) {
    let state = reactive({ num: 10, color: "#ccc" });

    const activeFooter = ref(0);
    const active = ref(2);

    onMounted(() => {});
    const test = computed(() => {
      return "";
    });

    const store = useStore();

    const add = () => {
      store.commit("addNum");
      state.num = store.state.num;
      state.num > 20 ? (state.color = "pink") : (state.color = "#ccc");
    };
    return {
      activeFooter,
      active,
      ...toRefs(state),
      ...toRefs(props),
      test,
      add,
    };
  },
});
</script>

function ref(arg0: number) {
  throw new Error("Function not implemented.");
}

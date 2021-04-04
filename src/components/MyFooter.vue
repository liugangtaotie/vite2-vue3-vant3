<template>
  <div>
    <van-tabbar v-model="activeIndex" @change="onChangeTabbar">
      <van-tabbar-item icon="home-o">home</van-tabbar-item>
      <van-tabbar-item icon="search" dot>two</van-tabbar-item>
      <van-tabbar-item icon="friends-o" badge="5">three</van-tabbar-item>
      <van-tabbar-item icon="setting-o" badge="3">four</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs, getCurrentInstance } from "vue";
export default defineComponent({
  name: "MyFooter",

  props: {
    active: {
      type: Number,
      default: 0,
    },
  },
  setup(props: any) {
    const current: any = getCurrentInstance();
    let state = reactive({ activeIndex: 0 });

    state.activeIndex = props.active;

    function onChangeTabbar() {
      const activeIndex = state.activeIndex;
      switch (activeIndex) {
        case 0:
          return current.proxy.$router.push("/home");
        case 1:
          return current.proxy.$router.push("/tabTwo");
        case 2:
          return current.proxy.$router.push("/tabThree");
        case 3:
          return current.proxy.$router.push("/tabFour");
        default:
          return true;
      }
    }
    return {
      ...toRefs(state),
      onChangeTabbar,
    };
  },
});
</script>



<style lang='less' scoped>
</style>

















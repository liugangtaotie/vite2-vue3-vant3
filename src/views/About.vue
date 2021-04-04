<template>
  <div class="about-model tcenter">
    <van-button class="flex" type="primary" @click="$router.push('/home')"
      >about,点击跳转home</van-button
    >
    <div class="single">about</div>
    <div class="single">about</div>
    <div class="single">about</div>
    <div class="single">about</div>
    <div class="single">about</div>
  </div>
</template> 
 
<script lang='ts'>
import { defineComponent, onMounted, computed, reactive, toRefs } from "vue";
export default defineComponent({
  name: "about",
  components: {},
  setup(props: any) {
    let state = reactive({});
    onMounted(() => {});
    const test = computed(() => {
      return "";
    });
    return {
      ...toRefs(state),
      ...toRefs(props),
      test,
    };
  },
});
</script>

<style lang='less' scoped>
.about-model {
  width: 100%;
  height: 100vh;
  margin-top: 50px;
}

.single {
  width: 100%;
  height: 30px;
  margin-top: 20px;
}
</style>

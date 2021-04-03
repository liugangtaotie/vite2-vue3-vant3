<template>
  <p @click="$router.push('/')">about</p>
  <p>about</p>
  <p>about</p>
  <p>about</p>
  <p>about</p>
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

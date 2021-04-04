<template>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
});
</script>

<style lang='less' scoped>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

#app {
  font-size: 12px;
}
</style>

<script setup lang="ts">
import ToolIcon from "../../assets/ToolIcon.vue";
import {ref} from "vue";

const title = ref<string>('halo tool')
const underline = ref(false)
</script>

<template>
  <el-link :underline=underline href="/" class="container">
    <tool-icon class="icon"/>
    <h2>{{ title }}</h2>
  </el-link>
</template>

<style scoped lang="scss">
.icon {
  width: 30px;
  height: 30px;
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    margin-right: 5px;
  }
}
</style>
<script setup lang="ts">
import ToolIcon from "../../assets/ToolIcon.vue";
import {ref} from "vue";

const props = defineProps<{
  title: string
}>()

const underline = ref(false)
</script>

<template>
  <el-link :underline=underline href="/" class="container">
    <tool-icon class="icon"/>
    <h2>{{ props.title }}</h2>
  </el-link>
</template>

<style scoped lang="scss">
.icon {
  width: 30px;
  height: 30px;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    margin-right: 5px;
  }
}
</style>
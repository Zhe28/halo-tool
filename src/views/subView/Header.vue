<script setup lang="ts">
import ToolIcon from "../../assets/ToolIcon.vue";
import {ref} from "vue";

const title = ref<string>('halo tool')
const underline = ref(false)
</script>

<template>
  <div class="container h-full w-full flex flex-row flex-nowrap justify-between items-center">
    <el-link :underline=underline href="/">
      <el-icon size="40">
        <ToolIcon/>
      </el-icon>
      <div class='m-2 text-xl'> {{ title }}</div>
    </el-link>

  </div>
</template>

<style scoped lang="scss">
</style>

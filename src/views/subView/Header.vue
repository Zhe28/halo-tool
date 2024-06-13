<script setup lang="ts">
import ToolIcon from "../../assets/ToolIcon.vue";
import {ref} from "vue";
import {useGlobalConfig} from "../../stores";

const title = ref<string>('halo tool')
const underline = ref(false)
</script>

<template>
  <div class="container h-full w-full flex flex-row flex-nowrap justify-between items-center">
    <el-link :underline=underline href="/" class="md:hidden">
      <el-icon>
        <ToolIcon/>
      </el-icon>
      <h1 class='m-2'> {{ title }}</h1>
    </el-link>

    <el-radio-group v-model="useGlobalConfig().sidebar.isCollapse">
      <el-radio-button :value="false">expand</el-radio-button>
      <el-radio-button :value="true">collapse</el-radio-button>
    </el-radio-group>
  </div>
</template>

<style scoped lang="scss">
</style>

<template>
  <div>
    <el-scrollbar>
      <el-menu
          :collapse="isCollapse"
          :router="true"
          :default-active="identityCardPath"
          :mode="globalConfig.navbarMode">
        <el-menu-item :index="identityCardPath">获取随机身份证</el-menu-item>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";

import {identityCardPath} from "../../router/path.ts";
import {useGlobalConfig} from "../../stores";

const globalConfig = useGlobalConfig()
const isCollapse = ref<boolean>(false)

</script>

<style scoped>

</style>

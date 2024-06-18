<template>
  <div>
    <el-scrollbar>
      <el-radio-group v-model="useGlobalConfig().sidebar.isCollapse">
        <el-radio-button :value="false">expand</el-radio-button>
        <el-radio-button :value="true">collapse</el-radio-button>
      </el-radio-group>
      <el-menu
          :collapse="globalConfig.sidebar.isCollapse"
          :router="true"
          :default-active="identityCardPath"
          :mode="globalConfig.sidebar.mode">
        <el-menu-item :index="identityCardPath">
          <el-icon>
            <Postcard/>
          </el-icon>
          <template #title>随机身份证</template>
        </el-menu-item>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script setup lang="ts">
import {identityCardPath} from "@/router/path.ts";
import {useGlobalConfig} from "@/stores";
import {Postcard} from "@element-plus/icons-vue";

const globalConfig = useGlobalConfig()

window.addEventListener('resize',
    () => useGlobalConfig().sidebar.isCollapse = window.innerWidth < 768)
</script>

<style scoped>
</style>

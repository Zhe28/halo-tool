<template>
  <div>
    <el-scrollbar>
      <el-menu
          :collapse="isCollapse"
          :router="true"
          default-active="getIdentityCard">
        <el-menu-item index="getIdentityCard">获取随机身份证</el-menu-item>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";

const isCollapse = ref<boolean>(false)

</script>

<style scoped>

</style>

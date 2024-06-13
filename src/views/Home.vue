<script setup lang="ts">

</script>

<template>
  <el-container>
    <el-header>
      <router-view name="nav"/>
    </el-header>
    <el-container>
      <!-- 左边栏 -->
      <el-aside width="auto">
        <!--<left-side/>-->
        <router-view name="leftSide"/>
      </el-aside>
      <!-- 内容栏 -->
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </el-container>
</template>

<style scoped>
</style>
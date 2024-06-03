<script setup lang="ts">
import GlobalHeader from "../components/GlobalHeader.vue";

const title = "MyTools";
</script>

<template>
  <el-container>
    <el-header class="header">
      <global-header :title="title"/>
    </el-header>
    <el-container>
      <!-- 左边栏 -->
      <el-aside width="200px">
        <!--<left-side/>-->
        <router-view
            name="leftSide"></router-view>
      </el-aside>
      <!-- 内容栏 -->
      <el-main>
        <!--<content/>-->
        <router-view
            name="content"></router-view>
      </el-main>
      <!-- 右边栏 -->
      <el-aside width="200px">
        <!--<right-side/>-->
        <router-view
            name="rightSideS"></router-view>
      </el-aside>
    </el-container>
  </el-container>
</template>

<style scoped>
.header {
  display: flex;

}
</style>
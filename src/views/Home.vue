<script setup lang="ts">
import {ref} from "vue";

const showLeftSide = ref<boolean>(true);
window.addEventListener("resize", () => {
  // 判断屏幕宽度 并决定是否展示侧边栏
  window.innerWidth < 768 ?
      showLeftSide.value = false
      : showLeftSide.value = true
})
</script>

<template>
  <el-container>
    <el-header class="header hidden">
      <router-view name="nav"/>
    </el-header>
    <el-container>
      <!-- 左边栏 -->
      <el-aside width="200px" v-if="showLeftSide">
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
.header {
  display: flex;
}
</style>
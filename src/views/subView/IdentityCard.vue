<script setup lang="ts">
import {Pointer} from "@element-plus/icons-vue";
import {reactive} from "vue";

const identity = reactive({number: '123321', name: '张三'})
</script>

<template>
  <div>
    <el-button type="primary" :icon="Pointer">获取随机身份证</el-button>
    <el-form label-position="right" label-width="auto">
      <el-form-item label="姓名">
        <el-input v-model="identity.name"/>
        <el-button type="primary">复制</el-button>
      </el-form-item>
      <el-form-item label="身份证号码">
        <el-input v-model="identity.number"/>
        <el-button type="primary">复制</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>


<style scoped>

</style>
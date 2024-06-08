<script setup lang="ts">
import {Pointer} from "@element-plus/icons-vue";
import {ref} from "vue";
import {ElNotification} from "element-plus";

const identity = ref<identityCard>({name: '张三', number: '123321'})
const name = ref(identity.value.name)
const number = ref(identity.value.number)
const loading = ref<boolean>(false)

function copyIdentityCardProp(props: keyof identityCardProps) {
  if (navigator.clipboard) {
    ElNotification({
      title: "复制成功",
      message: `当前复制的内容是：${<string>props}`,
      type: 'success',
      // position: "bottom-right",
      duration: 2000
    })
    navigator.clipboard.writeText(<string>props)
  }
}

</script>

<template>
  <div v-loading="loading">
    <el-form label-position="right" label-width="auto">
      <el-form-item>
        <el-button type="primary" :icon="Pointer" @click="getRandomIdentityCard()">获取随机身份证</el-button>
      </el-form-item>
      <el-form-item label="姓名">
        <el-input v-model="name" placeholder="点击获取按钮之后生成">
          <template #append>
            <el-button @click="copyIdentityCardProp(name)">复制</el-button>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item label="身份证号码">
        <el-input v-model="number" placeholder="点击获取按钮之后生成">
          <template #append>
            <el-button @click="copyIdentityCardProp(number)">复制</el-button>
          </template>
        </el-input>
      </el-form-item>
    </el-form>
  </div>
</template>


<style scoped>

</style>
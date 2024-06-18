<template>
  <div aria-label="page header">
    <!--面包屑导航-->
    <el-breadcrumb :separator-icon="ArrowRight" class="mb-3">
      <el-breadcrumb-item
          v-for="path in breadcrumbPaths"
          :to="{ path }">
        {{ path }}
      </el-breadcrumb-item>
    </el-breadcrumb>

    <!--页头-->
    <el-page-header title="返回">
      <template #title>

      </template>
      <template #content>
        <div class="flex items-center">
          <el-icon class="mr-3" :size="32">
            <component :is="icon"/>
          </el-icon>
          <span class="text-large font-600 mr-3"> {{ info.title }} </span>
          <span
              class="text-sm mr-2"
              style="color: var(--el-text-color-regular)"
          >
            {{ info.subTitle }}
          </span>
        </div>
      </template>
      <!--      <template #extra>-->
      <!--        <div class="flex items-center">-->
      <!--          <el-button>Print</el-button>-->
      <!--          <el-button type="primary" class="ml-2">Edit</el-button>-->
      <!--        </div>-->
      <!--      </template>-->
      <template #default>
        <router-view/>
      </template>
    </el-page-header>
  </div>
</template>

<script setup lang="ts">
import {ArrowRight} from "@element-plus/icons-vue";
import {useRoute} from "vue-router";
import {ref, shallowRef, watchEffect} from "vue";
import {routeInfo} from "@/utils/routeInfo.ts";

const breadcrumbPaths = ref<unknown[]>(['/'])
const info = ref()
const icon = shallowRef()
const route = useRoute();

watchEffect(async () => {
  const match = [...route.path.matchAll(/(?<=\/)\w+/g)]

  breadcrumbPaths.value.length = 0
  breadcrumbPaths.value.push('/')
  match.forEach(path => {
    breadcrumbPaths.value.push(path[0])
  })
  console.log(breadcrumbPaths.value)

  // locationUrl 地址变动时  重新获取相关信息
  info.value = routeInfo(route)
  icon.value = info.value.icon
})
</script>

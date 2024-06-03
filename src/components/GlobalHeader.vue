<script setup lang="ts">
import ToolIcon from "../assets/ToolIcon.vue";

const props = defineProps<{
  title: string
}>()
</script>

<template>
  <div class="container">
    <tool-icon class="icon"/>
    <h2>{{ props.title }}</h2>
    <div>

    </div>
  </div>
</template>

<style scoped lang="scss">
.icon {
  width: 30px;
  height: 30px;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    margin-right: 10px;
  }
}
</style>
<template>
  <div class="wrapper">
    <div class="container" :style="{ width: isCollapsed ? '0' : '150px', height: '100%' }">
      dafffffffffffffffffffffffffffffffffffffffffffff
    </div>
    <button class="toggle-button" @click="isCollapsed = !isCollapsed">
      <left-outlined v-if="!isCollapsed" />
      <right-outlined v-if="isCollapsed" />
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { LeftOutlined, RightOutlined } from '@ant-design/icons-vue'

const isCollapsed = ref(false)
</script>

<style scoped>
.wrapper {
  position: relative;
  display: inline-block;
  height: 100%;
}
.container {
  background-color: #f0f0f0; /* 示例背景颜色 */
  transition: width 0.3s ease; /* 平滑的过渡效果 */
  position: relative; /* 相对定位是为了绝对定位按钮 */
  overflow: hidden; /* 隐藏收起部分的内容 */
}

.toggle-button {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translate(100%, -50%); /* 将按钮置于中间位置 */
  border: none; /* 去除边框 */
  cursor: pointer; /* 鼠标指针变为手形 */
  width: 15px;
  height: 50px;
  padding: 0;
}
</style>

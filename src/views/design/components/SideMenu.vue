<template>
  <div class="menu">
    <div :key="1" :class="{ 'menu-item': true, active: 1 === activeItemId }" @click="selectItem(1)">
      <div class="tabItem">
        <apple-outlined />
        <span>添加</span>
      </div>
    </div>
    <div :key="2" :class="{ 'menu-item': true, active: 2 === activeItemId }" @click="selectItem(2)">
      <div class="tabItem">
        <apple-outlined />
        <span>模板</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { AppleOutlined, AndroidOutlined } from '@ant-design/icons-vue'

const activeItemId = ref(1) // 默认激活第一个菜单项

const selectItem = (id: number) => {
  activeItemId.value = id
}
</script>

<style scoped>
.menu-item {
  padding: 10px;
  cursor: pointer;
}

.menu-item:hover {
  background-color: #f0f0f0;
}

.active {
  background-color: #e0e0e0;
  color: #fff;
}

.tabItem {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>

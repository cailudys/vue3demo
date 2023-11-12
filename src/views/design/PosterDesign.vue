<template>
  <div class="tabsContiner">
    <Tabs
      v-model:activeKey="activeKey"
      tabPosition="left"
      centered
      :tabBarStyle="{ height: '100%' }"
    >
      <TabPane key="1">
        <template #tab>
          <div class="tabItem">
            <apple-outlined />
            <span>添加</span>
          </div>
        </template>
        <div>
          Render in this
          <div style="margin-top: 16px">
            <a-button type="primary" @click="showDrawer">Open</a-button>
          </div>
          <Drawer
            title="Basic Drawer"
            placement="right"
            :closable="false"
            :visible="visible"
            :get-container="false"
            :style="{ position: 'absolute' }"
            @close="onClose"
          >
            <p>Some contents...</p>
          </Drawer>
        </div>
      </TabPane>
      <TabPane key="2">
        <template #tab>
          <div class="tabItem">
            <android-outlined />
            <span> 模板 </span>
          </div>
        </template>
        Content of Tab Pane 2
      </TabPane>
      <TabPane key="3">
        <template #tab>
          <div class="tabItem">
            <android-outlined />
            <span> 模板 </span>
          </div>
        </template>
        Content of Tab Pane 2
      </TabPane>
      <TabPane key="4">
        <template #tab>
          <div class="tabItem">
            <android-outlined />
            <span> 模板 </span>
          </div>
        </template>
        Content of Tab Pane 2
      </TabPane>
    </Tabs>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Tabs, TabPane, Drawer } from 'ant-design-vue'
import { AppleOutlined, AndroidOutlined } from '@ant-design/icons-vue'
const activeKey = ref('1')
const visible = ref(false)

// const afterVisibleChange = (bool: boolean) => {
//   console.log('visible', bool)
// }

const showDrawer = () => {
  visible.value = true
}

const onClose = () => {
  visible.value = false
}
</script>

<style scoped lang="less">
// 样式代码
.tabsContiner {
  width: 50%;
  height: 100%;
  background-color: bisque;
}
.tabItem {
  display: flex;
  flex-direction: column;
  align-items: center;
  .anticon {
    margin-right: 0px;
  }
}
</style>

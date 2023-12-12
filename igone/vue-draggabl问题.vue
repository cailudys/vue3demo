<template>
  <div class="left">
    <div>
      <draggable :list="metrialList" :group="{ name: 'metrial', pull: false, put: false }">
        <template #item="{ element }">
          <div>{{ element.name }}</div>
        </template>
      </draggable>
    </div>
    <div>
      <draggable :list="templateList" :group="{ name: 'template', pull: false, put: false }">
        <template #item="{ element }">
          <div>{{ element.name }}</div>
        </template>
      </draggable>
    </div>
  </div>
  <div class="right">
    <draggable :list="uimodel" :group="{ name: 'template', pull: false }">
      <template #item="{ element: templatelist }">
        <draggable :list="templatelist" :group="{ name: 'metrial', pull: false }">
          <template #item="{ element }">
            <div>{{ element.name }}</div>
          </template>
        </draggable>
      </template>
    </draggable>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import draggable from 'vuedraggable'

const metrialList = ref<any[]>([])
const templateList = ref<any[]>([])
const uimodel = ref<any[]>([])
</script>

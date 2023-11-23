<template>
  <div class="row">
    <div class="col-3">
      <h3>Draggable 1</h3>
      <draggable class="list-group" :list="list1" group="people" itemKey="name">
        <template #item="{ element, index }">
          <div class="list-group-item">{{ element.name }}</div>
        </template>
      </draggable>
    </div>

    <div class="col-3">
      <h3>Draggable 2</h3>
      <draggable class="list-group" :list="list2" group="people" itemKey="name" @add="addToEnd">
        <template #item="{ element, index }">
          <div class="list-group-item">{{ element.name }}</div>
        </template>
      </draggable>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import draggable from 'vuedraggable'

const list1 = ref([
  { name: 'John', id: 1 },
  { name: 'Joao', id: 2 },
  { name: 'Jean', id: 3 },
  { name: 'Gerard', id: 4 }
])

const list2 = ref([
  { name: 'Juan', id: 5 },
  { name: 'Edgard', id: 6 },
  { name: 'Johnson', id: 7 }
])

// 总是把拖拽的内容添加到最后一项
const addToEnd = (event) => {
  // event.oldIndex 数据在原数组中的index
  // event.newIndex 数据在目标数组中的index
  const [item] = list2.value.splice(event.newIndex, 1)
  list2.value.push(item)
}
</script>

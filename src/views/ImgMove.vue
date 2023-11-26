<template>
  <div class="container">
    <img
      :src="yourImageSource"
      :style="{ top: `${imagePosition.y}px`, left: `${imagePosition.x}px` }"
      @mousedown="startDrag"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const imagePosition = ref({ x: 0, y: 0 })
const isDragging = ref(false)

const yourImageSource = 'your-image-url.jpg' // 替换为你的图片 URL

let start = { x: 0, y: 0 }

function startDrag(event: any) {
  start.x = event.clientX - imagePosition.value.x
  start.y = event.clientY - imagePosition.value.y
  isDragging.value = true
}

function doDrag(event: any) {
  if (isDragging.value) {
    imagePosition.value.x = event.clientX - start.x
    imagePosition.value.y = event.clientY - start.y
  }
}

function endDrag() {
  isDragging.value = false
}

window.addEventListener('mousemove', doDrag)
window.addEventListener('mouseup', endDrag)
</script>

<style scoped>
.container {
  position: relative;
  width: 800px;
  height: 800px;
}
img {
  position: absolute;
  width: 50px;
  height: 50px;
  cursor: pointer;
}
</style>

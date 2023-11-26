<template>
  <div class="container">
    <img
      :src="yourImageSource"
      :style="{
        width: `${imageSize.width}px`,
        height: `${imageSize.height}px`,
        transform: `translate(${imagePosition.x}px, ${imagePosition.y}px)`
      }"
      @mousedown="startDrag($event)"
    />
    <div
      v-for="handle in resizeHandles"
      :key="handle"
      :class="`handle ${handle}`"
      @mousedown.prevent="startResize($event, handle)"
    ></div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const yourImageSource = 'your-image-url.jpg' // 替换为你的图片 URL
const imagePosition = ref({ x: 0, y: 0 })
const imageSize = ref({ width: 100, height: 100 })
const isDragging = ref(false)
const isResizing = ref(false)
const resizeHandles = ['top-left', 'top-right', 'bottom-left', 'bottom-right']

let start = { x: 0, y: 0 }
let resizeStart = { x: 0, y: 0 }
let direction = ''

function startDrag(event: any) {
  isDragging.value = true
  start.x = event.clientX - imagePosition.value.x
  start.y = event.clientY - imagePosition.value.y
}

function doDrag(event: any) {
  if (isDragging.value) {
    imagePosition.value.x = event.clientX - start.x
    imagePosition.value.y = event.clientY - start.y
  }
}

function startResize(event: any, dir: any) {
  isResizing.value = true
  direction = dir
  resizeStart.x = event.clientX
  resizeStart.y = event.clientY
}

function doResize(event: any) {
  if (!isResizing.value) return

  let dx = event.clientX - resizeStart.x
  let dy = event.clientY - resizeStart.y

  switch (direction) {
    case 'top-left':
      imageSize.value.width -= dx
      imageSize.value.height -= dy
      imagePosition.value.x += dx
      imagePosition.value.y += dy
      break
    case 'top-right':
      imageSize.value.width += dx
      imageSize.value.height -= dy
      imagePosition.value.y += dy
      break
    case 'bottom-left':
      imageSize.value.width -= dx
      imageSize.value.height += dy
      imagePosition.value.x += dx
      break
    case 'bottom-right':
      imageSize.value.width += dx
      imageSize.value.height += dy
      break
  }

  resizeStart.x = event.clientX
  resizeStart.y = event.clientY
}

function endDrag() {
  isDragging.value = false
  isResizing.value = false
}

window.addEventListener('mousemove', (event) => {
  doDrag(event)
  doResize(event)
})
window.addEventListener('mouseup', endDrag)
</script>

<style>
.container {
  position: relative;
  width: 800px;
  height: 800px;
  border: 1px solid black;
}
img {
  position: absolute;
  cursor: grab;
}
.handle {
  position: absolute;
  width: 10px;
  height: 10px;
  background-color: blue;
  z-index: 10;
}
.top-left {
  top: -5px;
  left: -5px;
  cursor: nw-resize;
}
.top-right {
  top: -5px;
  right: -5px;
  cursor: ne-resize;
}
.bottom-left {
  bottom: -5px;
  left: -5px;
  cursor: sw-resize;
}
.bottom-right {
  bottom: -5px;
  right: -5px;
  cursor: se-resize;
}
</style>

<template>
  <div class="canvas-editor">
    <div class="materials" v-for="material in materials" :key="material.id">
      <img
        :src="material.src"
        :alt="material.name"
        draggable="true"
        @dragstart="handleDragStart($event, material)"
      />
    </div>
    <div
      id="canvas-container"
      @drop="handleDrop"
      @dragover="handleDragOver"
      style="position: relative; width: 800px; height: 600px"
    >
      <canvas id="canvas" width="800" height="600"></canvas>
    </div>
    <button @click="console.log(canvas.toJSON())">打印数据</button>
    <button @click="saveAsImage">保存画布图片</button>
    <button @click="addText">添加文本</button>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { fabric } from 'fabric'

const materials = [
  { id: 1, name: 'Material 1', src: '/cat.png' },
  { id: 2, name: 'Material 2', src: '/dog.png' }
  // ... 更多素材
]

const canvasRef = ref(null)
let canvas

const handleDragStart = (event, material) => {
  event.dataTransfer.setData('material', JSON.stringify(material))
}

onMounted(() => {
  canvas = new fabric.Canvas('canvas')
  canvasRef.value = canvas
})

const handleDrop = (event) => {
  event.preventDefault()
  const material = JSON.parse(event.dataTransfer.getData('material'))
  const rect = event.target.getBoundingClientRect()
  const x = event.clientX - rect.left
  const y = event.clientY - rect.top
  fabric.Image.fromURL(material.src, (img) => {
    img.set({
      left: x,
      top: y,
      originX: 'center',
      originY: 'center'
    })
    img.scaleToWidth(100) // 例如，调整素材的宽度为100px
    canvas.add(img)
    canvas.renderAll()
  })
}

const handleDragOver = (event) => {
  event.preventDefault()
}

const addText = () => {
  const textbox = new fabric.IText('双击编辑文本', {
    left: canvas.width / 2,
    top: canvas.height / 2,
    fontFamily: 'arial',
    fill: '#333',
    lineHeight: 1.1,
    fontSize: 16,
    originX: 'center',
    originY: 'center'
  })

  canvas.add(textbox)
  canvas.setActiveObject(textbox)
  textbox.enterEditing()
  textbox.selectAll()
  canvas.renderAll()

  // 监听“scaling”事件，以便文本在缩放时保持居中
  textbox.on('scaling', function () {
    textbox.set({ originX: 'center', originY: 'center' })
  })
}

const saveAsImage = () => {
  if (!canvas.backgroundColor) {
    canvas.setBackgroundColor('white', canvas.renderAll.bind(canvas))
  }

  const dataURL = canvas.toDataURL({
    format: 'png',
    quality: 1
  })
  const downloadAnchorNode = document.createElement('a')
  downloadAnchorNode.setAttribute('href', dataURL)
  downloadAnchorNode.setAttribute('download', 'canvas-preview.png')
  document.body.appendChild(downloadAnchorNode) // 需要为Firefox
  downloadAnchorNode.click()
  downloadAnchorNode.remove()
}
</script>

<style scoped>
.canvas-editor {
  display: flex;
}

.materials {
  width: 200px;
  margin-right: 10px; /* 与画布之间的间隔 */
}

#canvas-container {
  border: 1px solid black;
  position: relative; /* 为了正确计算相对位置 */
}
</style>

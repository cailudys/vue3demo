<template>
  <div id="container" class="container">
    <div id="item">123</div>
    <video controls>
      <source src="your-video-file.mp4" type="video/mp4" />
    </video>
  </div>
  <button id="screenshot-btn" @click="downloadPicture">截图并下载</button>
</template>

<script lang="ts" setup>
import html2canvas from 'html2canvas'

const downloadPicture = () => {
  html2canvas(document.getElementById('container')!)?.then((canvas) => {
    // 将 Canvas 转换为图片
    var image = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream')
    // 触发图片下载
    var link = document.createElement('a')
    link.download = 'screenshot.png'
    link.href = image
    link.click()
  })
}
</script>

<style lang="less" scoped>
.container {
  width: 500px;
  height: 400px;
  background-color: red;
  border: 10px solid black;
}
</style>

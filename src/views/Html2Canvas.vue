<template>
  <div id="container" class="container">
    <div id="item">123</div>
    <video id="video" controls>
      <source src="your-video-file.mp4" type="video/mp4" />
    </video>
  </div>
  <button id="screenshot-btn" @click="downloadPicture">截图并下载</button>
</template>

<script lang="ts" setup>
import html2canvas from 'html2canvas'

const downloadPicture = () => {
  const container = document.getElementById('container') as HTMLElement

  // 克隆容器
  const clonedContainer = container.cloneNode(true) as HTMLElement
  clonedContainer.style.position = 'absolute'
  clonedContainer.style.top = '-9999px'
  document.body.appendChild(clonedContainer)

  // 替换视频元素
  const videoElement = clonedContainer.querySelector('#video') as HTMLVideoElement
  const replacementDiv = document.createElement('div')
  replacementDiv.style.width = `${videoElement.offsetWidth}px`
  replacementDiv.style.height = `${videoElement.offsetHeight}px`
  replacementDiv.style.backgroundColor = 'blue'
  videoElement.parentNode?.replaceChild(replacementDiv, videoElement)

  // 截图克隆的容器
  html2canvas(clonedContainer).then((canvas: any) => {
    // 将 Canvas 转换为图片
    var image = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream')
    // 触发图片下载
    var link = document.createElement('a')
    link.download = 'screenshot.png'
    link.href = image
    link.click()

    // 移除克隆的容器
    document.body.removeChild(clonedContainer)
  })
}
</script>

<style lang="less" scoped>
.container {
  position: relative;
  width: 500px;
  height: 400px;
  background-color: red;
}
</style>

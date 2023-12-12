<template>
  <div ref="masonryContainer" class="container">
    <div class="grid-item" v-for="item in items" :key="item.id">
      <div
        :style="{
          width: '100px',
          height: `${item.height}px`,
          backgroundColor: item.color
        }"
      ></div>
      <!-- your item content -->
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import Masonry from 'masonry-layout'

const items = ref([
  {
    id: '1',
    height: 100,
    color: 'red'
  },
  {
    id: '2',
    height: 150,
    color: 'yellow'
  },
  {
    id: '3',
    height: 200,
    color: 'blue'
  },
  {
    id: '4',
    height: 100,
    color: 'black'
  },
  {
    id: '5',
    height: 50,
    color: 'green'
  }
]) // your items array
const masonryContainer = ref(null)

onMounted(() => {
  new Masonry(masonryContainer.value, {
    itemSelector: '.grid-item',
    columnWidth: 100,
    gutter: 10
  })
})
</script>

<style scoped>
.container {
  /* container styles */
  width: 230px;
}
.grid-item {
  margin-bottom: 10px;
}
</style>

<script setup>
import componentData from '../dataManage/component/data/index'
import { VueDraggable } from 'vue-draggable-plus'
import useGlobal from '@/hooks/useGlobal';


const { subscribe } = new useGlobal()
console.log('subscribe: ', subscribe);


const handleComponentClick = (item) => {
  const tempData = JSON.parse(JSON.stringify(item));
  tempData.data.key = Date.now();
  subscribe.emit('componentClick', tempData)
}

const onClone = () => {
  console.log(111);
}
</script>

<template>
  <div>

    <div @click="handleComponentClick(item)" v-for="item in componentData" :key="item.id"
      class="cursor-move h-50px bg-gray-500/5 rounded p-3">
      {{ item.meta.title }}
    </div>
  </div>
</template>

<style scoped></style>

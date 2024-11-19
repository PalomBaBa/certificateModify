<script setup>
import componentData from '../dataManage/component/data/index'
console.log('componentData: ', componentData);
import useGlobal from '@/hooks/useGlobal';


const { subscribe } = new useGlobal()


const handleComponentClick = (item) => {
  const tempData = JSON.parse(JSON.stringify(item));
  tempData.data.key = Date.now();
  subscribe.emit('componentClick', tempData)
}

</script>

<template>
  <div class="componentListArea">
    <div @click="handleComponentClick(item)" v-for="(item, index) in componentData" :key="item.id" class="componentListItem"
      :style="{ marginBottom: index + 1 !== componentData.length ? '10px' : '0' }">
      {{ item.meta.title }}
    </div>
  </div>
</template>

<style scoped lang="scss">
.componentListArea {
  padding: 16px;

  .componentListItem {
    cursor: pointer;
    border: 1px solid #aaa;
    border-radius: 6px;
    padding: 6px 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>

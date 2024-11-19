<script setup>
import { ref } from 'vue';
import { VueDraggable } from 'vue-draggable-plus'
import useGlobal from '@/hooks/useGlobal';

const platform = 'pc'

const { subscribe } = new useGlobal()

const componentList = ref([]);

subscribe.on('componentClick', (data) => {
  console.log('data: ', data);

  componentList.value.push(data)
  // handleLastStep();
});
</script>

<template>
  <div class="renderComponent">
    <div v-for="item in componentList" :key="item.id" class="cursor-move h-50px bg-gray-500/5 rounded p-3">
      <component :is="`${platform}-${item.meta.type}`" :data="item" />
    </div>
  </div>
</template>

<style scoped>
.renderComponent {
  width: 100%;
  height: 100%;
  position: relative;
}
</style>

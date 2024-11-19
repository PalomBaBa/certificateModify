<script setup>
import { ref , onMounted } from 'vue';
import useGlobal from '@/hooks/useGlobal';
import backgroundData from '../dataManage/component/data/background'


const backgroundComponentData = ref(backgroundData)
console.log('backgroundComponentData: ', backgroundComponentData.value);

const platform = 'pc'

const { subscribe } = new useGlobal()

const componentList = ref([]);

const activatedKey = ref('');

subscribe.on('componentClick', (data) => {
  console.log('data: ', data);

  componentList.value.push(data)
  // handleLastStep();
});



onMounted(()=>{
  subscribe.emit('backgroundInit', backgroundComponentData.value);
})


const handleRenderComponentClick = (item) => {
  activatedKey.value = item.data.key;
  subscribe.emit('renderComponentClick', item);

  let dom = document.getElementById(item.data.key);
  if (dom) {
    dom.onmousedown = function (ev) {
      console.log('ev: ', ev);
      ev.stopPropagation()
      const disX = ev.clientX;
      const disY = ev.clientY;
      const ex = disX - dom.offsetLeft;
      const ey = disY - dom.offsetTop;
      // document添加鼠标移动
      document.onmousemove = function (ev) {
        const container = document.querySelector('.renderComponent');
        const w1 = ev.clientX;
        const y1 = ev.clientY;

        item.data.left = w1 - ex;
        item.data.top = y1 - ey;

        if (item.data.left < 0) {
          item.data.left = 0;
        }

        if (item.data.top < 0) {
          item.data.top = 0;
        }

        // +2边框宽度
        if (item.data.left > container.clientWidth - (dom.clientWidth + 2)) {
          item.data.left = container.clientWidth - (dom.clientWidth + 2);
        }
        if (item.data.top > container.clientHeight - (dom.clientHeight + 2)) {
          item.data.top = container.clientHeight - (dom.clientHeight + 2);
        }

      };
      // document添加鼠标浮起事件
      document.onmouseup = (e) => {
        ev.stopPropagation()
        setTimeout(() => {
          const x = e.clientX;
          const y = e.clientY;
          document.onmousemove = null;
          document.onmouseup = null;

        }, 100);
      };

    };
  }
}

const deleteComponent = (data) => {
  const index = componentList.value.findIndex(item => item.id === data.id)
  componentList.value.splice(index, 1);
  subscribe.emit('componentDelete')
}


</script>

<template>
  <div class="renderComponent">
    <component :is="'pc-background'" :data="backgroundComponentData">
      <template #backgroundSlot>
        <div @click="handleRenderComponentClick(item)" :class="{ activated: item.data.key === activatedKey }"
          class="componentItem" :style="{ top: item.data.top + 'px', left: item.data.left + 'px', }" :id="item.data.key"
          v-for="item in componentList" :key="item.id">
          <el-popover placement="right" :width="100" trigger="click">
            <el-button type="primary" text style="width: 100%;" @click="deleteComponent(item)">删除</el-button>
            <template #reference>
              <component :is="`${platform}-${item.meta.type}`" :data="item" />
            </template>
          </el-popover>
        </div>
      </template>
    </component>
  </div>
</template>

<style scoped lang="scss">
.renderComponent {
  width: 100%;
  height: 100%;
  position: relative;

  .activated {
    border: 1px dashed blue !important;
  }

  .componentItem {
    border: 1px solid transparent;
    position: absolute;
    cursor: pointer;
  }

  .componentItem:hover {
    border: 1px dashed blue;
  }
}
</style>

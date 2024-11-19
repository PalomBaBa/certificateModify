<script setup>
import { ref } from 'vue';
import useGlobal from '@/hooks/useGlobal';

const { subscribe } = new useGlobal();

const componentData = ref(null);

const activeName = ref('page');

const backgroundComponentData = ref(null);

subscribe.on('renderComponentClick', (data) => {
  componentData.value = data;
})

subscribe.on('componentDelete', (data) => {
  componentData.value = null;
})

subscribe.on('backgroundInit', (data) => {
  backgroundComponentData.value = data;
  console.log('backgroundComponentData.value : ', backgroundComponentData.value);
})
</script>

<template>
  <div class="attributeModifyBox" v-if="backgroundComponentData">
    <el-tabs v-model="activeName" type="border-card">
      <el-tab-pane label="背景图设置" name="page" >
        <div v-for="(item, index) in backgroundComponentData?.configure?.attribute" :key="item.key" class="attributeItem"
          :style="{ marginBottom: index + 1 !== backgroundComponentData?.configure?.attribute.length ? '10px' : '0' }">
          <div style="width: 80px;font-size: 14px; margin-right: 10px;">{{ item.label }}</div>
          <div style="flex:1;">
            <el-input v-if="item.type === 'input'" v-model="backgroundComponentData.data[item.key]"
              :placeholder="`请输入${item.label}`"></el-input>
            <el-select v-model="backgroundComponentData.data[item.key]" v-if="item.type === 'select'">
              <el-option v-for="opItem in item.options" :label="opItem.label" :value="opItem.value"></el-option>
            </el-select>
            <el-color-picker v-model="backgroundComponentData.data[item.key]" v-if="item.type === 'color'" />
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="组件设置" name="component" v-if="componentData">
        <div v-for="(item, index) in componentData?.configure.attribute" :key="item.key" class="attributeItem"
          :style="{ marginBottom: index + 1 !== componentData.configure.attribute.length ? '10px' : '0' }">
          <div style="width: 80px;font-size: 14px; margin-right: 10px;">{{ item.label }}</div>
          <div style="flex:1;">
            <el-input v-if="item.type === 'input'" v-model="componentData.data[item.key]"
              :placeholder="`请输入${item.label}`"></el-input>
            <el-select v-model="componentData.data[item.key]" v-if="item.type === 'select'">
              <el-option v-for="opItem in item.options" :label="opItem.label" :value="opItem.value"></el-option>
            </el-select>
            <el-color-picker v-model="componentData.data[item.key]" v-if="item.type === 'color'" />
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>

  </div>
</template>

<style scoped lang="scss">
.attributeModifyBox {
  padding: 16px;

}

.attributeItem {
  display: flex;
  align-items: center;

}
</style>

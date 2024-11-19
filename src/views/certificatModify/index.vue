<script setup>
import ComponentArea from './components/ComponentArea.vue';
import AttributeModify from './components/AttributeModify.vue';
import Render from './components/Render.vue';
</script>

<template>
  <div class="certificateModifyBox">
    <div class="top_area"></div>
    <div class="middle_area">
      <div class="middle_area_componentArea">
        <ComponentArea />
      </div>
      <div class="middle_area_renderArea">
        <Render />
      </div>
      <div class="middle_area_attributeArea">
        <AttributeModify />
      </div>
    </div>
    <div class="bottom_area"></div>
  </div>
</template>

<style scoped lang="scss">
.certificateModifyBox {
  width: 100%;
  height: 100vh;

  .top_area {
    width: 100%;
    height: 6%;
    border-bottom: 2px solid #ccc;
  }

  .middle_area {
    display: flex;
    align-items: center;
    height: calc(100% - 6% - 4%);

    .middle_area_componentArea {
      width: 300px;
      height: 100%;
      border-right: 2px solid #ccc
    }

    .middle_area_renderArea {
      flex: 1;
      height: 100%;
      padding: 20px;
    }

    .middle_area_attributeArea {
      width: 400px;
      height: 100%;
      border-left: 2px solid #ccc
    }
  }

  .bottom_area {
    width: 100%;
    height: 4%;
    border-top: 2px solid #ccc
  }
}
</style>

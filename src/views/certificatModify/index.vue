<script setup>
import ComponentArea from './components/ComponentArea.vue';
import AttributeModify from './components/AttributeModify.vue';
import Render from './components/Render.vue';
import html2canvas from 'html2canvas'

const domToImg = () => {
  const element = document.querySelector('.renderComponent') // 获取到要转为图片的dom

html2canvas(element).then(canvas => { // 使用html2canvas库，将dom转为canvas
  const imgData = canvas.toDataURL('image/png') // toDataURL是canvas API的一个方法，将canvas上的内容转为Data URL格式的图像，包含了图像的二进制数据，并以Base64编码形式表现
  console.log('imgData: ', imgData);
  const img = new Image() // 创建一个图片元素对象
  img.src = imgData // 将该图片元素对象的src绑定刚刚的二进制数据
  document.body.appendChild(img) // 展示图片
})
}
</script>

<template>
  <div class="certificateModifyBox">
    <div class="top_area">
      <el-button @click="domToImg">转为图片</el-button>
    </div>
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

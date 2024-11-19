<script setup>
import { reactive } from 'vue';


const props = defineProps({
  data: {
    required: true,
    type: Object,
    default: () => { }
  },
  subscribe: {
    required: false,
    type: Object
  }
});

let propertiesData = reactive(props.data.data);

// const componentData = reactive(props.data);
</script>

<template>
  <div class="background">
    <img :src="propertiesData.backgroundURL" :style="{width: propertiesData.width + 'px', height: propertiesData.height + 'px',objectFit:propertiesData.backgroundSize}">
    <slot name="backgroundSlot"></slot>
  </div>
</template>

<style lang="scss" scoped>
.background{
  display: block;
}
</style>

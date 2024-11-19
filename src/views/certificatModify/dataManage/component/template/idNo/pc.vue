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
  <div class="content"
    :style="{ color: propertiesData.color, fontSize: propertiesData.size + 'px', top: propertiesData.top + 'px', left: propertiesData.left + 'px', fontWeight: propertiesData.weight }">
    {{ propertiesData.content }}</div>
</template>

<style lang="scss" scoped></style>

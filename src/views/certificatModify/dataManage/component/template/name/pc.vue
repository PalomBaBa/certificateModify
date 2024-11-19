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

const componentData = reactive(props.data);


</script>

<template>
  <div class="content">{{ propertiesData.content }}</div>
</template>

<style lang="scss" scoped>
.content{
  position: absolute;
}
</style>

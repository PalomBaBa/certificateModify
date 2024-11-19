import {
  defineAsyncComponent
} from 'vue';
export default {
  install(app) {
    //获取当前路径任意文件夹下的index.vue
    const components =
    import.meta.glob('./*/pc.vue');
    const componentsH5 =
      import.meta.glob('./*/h5.vue');
    for (const [key, value] of Object.entries(components)) {
      const componentName = 'pc-' + key.replace('./', '').split('/')[0];
      app.component(componentName, defineAsyncComponent(value));
    }
    for (const [key, value] of Object.entries(componentsH5)) {
      const componentName = 'h5-' + key.replace('./', '').split('/')[0];
      app.component(componentName, defineAsyncComponent(value));
    }
  }
};

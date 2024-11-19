
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import customBase from '@/views/certificatModify/dataManage/component/template/index';

const app = createApp(App)

app.use(router)
app.use(ElementPlus)
app.use(customBase)

app.mount('#app')

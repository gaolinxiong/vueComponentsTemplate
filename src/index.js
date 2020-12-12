// src/index.js
// 这里import 的 btn和btnDemo.vue的name属性名相同 ！

import glxBtn from './index.vue'

glxBtn.install = Vue => Vue.component(glxBtn.name, glxBtn) // 给组件配置install方法

export default glxBtn;

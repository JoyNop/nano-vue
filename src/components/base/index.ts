import { App } from 'vue'
import Button from './Button.vue';
import Select from './Select.vue';


//注册全局组件，装载注册后可全局调用，无需引用
//本实例采用function写法，在directive中采用了const 箭头函数写法
const install = function (app: App<Element>) {
  app.component('NanoUIButton', Button)
  app.component('NanoUISelect', Select)
}

export default install
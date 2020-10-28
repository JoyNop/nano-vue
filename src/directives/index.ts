import { App } from "vue";
import focus from "./focus";
import pin from "./pin";


//自定义指令，装载成功后可以再任意组件中使用如下自定义指令

const install = (app: App<Element>) => {
  app.directive("focus", focus);
  app.directive("pin", pin);
};

export default install;

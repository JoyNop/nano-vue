import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";


//reset style
import "@/assets/css/base.css";
//main style
import "@/assets/css/main.less";
import "@vant/touch-emulator"; 


//install Global Components
import BaseComponents from "@/components/base";
//install Custom Directives
import BaseDirective from '@/directives'


import axios from "axios";
import VueAxios from "vue-axios";

const app = createApp(App);

//use Global Components
app.use(BaseComponents)
//use Custom Directives
app.use(BaseDirective)

app.use(store);
app.use(router);
app.use(VueAxios, axios);
app.mount("#app");

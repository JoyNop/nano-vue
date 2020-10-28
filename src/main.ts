import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";


//reset style
import "@/assets/css/base.css";
//main style
import "@/assets/css/main.less";

//install globalComponents
import BaseComponents from "@/components/base";

import BaseDirective from '@/directives'
import "@vant/touch-emulator";
 
import axios from "axios";
import VueAxios from "vue-axios";

const app = createApp(App);

//use globalComponents
app.use(BaseComponents)
app.use(BaseDirective)

app.use(store);
app.use(router);
app.use(VueAxios, axios);
app.mount("#app");

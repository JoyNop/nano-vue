<template>
  <div class="home text-center">
    <!-- 样式使用方式 -->
    <header  v-pin:[direction]="pinPadding"  style='width:100%; text-align:"center' class="max640">
      <p>Stick Me! <span class="text-color">{{pinPadding}}</span>
      px from the {{direction}} of the page
      </p>
    </header>

    <p class="mg20 text-color">{{time}}</p>
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <p class='mg10 text-color'>以下是自定义全局组件</p>
    <div class="mg-b20">

      <NanoUIButton @click="handleClick()">自定义全局按钮</NanoUIButton>
    </div>
    <div class="mg-b20">
      <NanoUISelect/>
    </div>

    <div class="mg-b20 flex flex-center">
      自定义指令：
      <input type="range" min="0" max="500" v-model="pinPadding" style="z-index: 9" />
    </div>
    <Button type="success" @click="showToast">更改字体颜色</Button>
 

  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import { Button, Dialog, Toast } from "vant";
import dayjs from "dayjs";

interface HomeData {
  direction: string;
  pinPadding: number;
  time: string;
  timer: number;
  color: string;
  city: string[];
}
export default defineComponent({
  name: "Home",
  components: {
    HelloWorld,
    Button,
  },
  data(): HomeData {
    return {
      direction: "top",
      pinPadding: 0,
      time: "",
      timer: 0,
      color: "red",
      city: ["", "", ""],
    };
  },

  methods: {
    showToast() {
      Toast("颜色字体改为随机色");
      this.color = "#" + Math.floor(Math.random() * 0xffffff).toString(16);
    },
    handleClick() {
      Dialog({
        title: "标题",
        message: "这是一个全局按钮组件",
      });
    },
    initTime() {
      this.time = dayjs().format("YYYY-MM-DD HH:mm:ss");
      this.timer = setInterval(() => {
        this.time = dayjs().format("YYYY-MM-DD HH:mm:ss");
      }, 1000);
    },
  },
  created() {
    this.initTime();
  },
  beforeUnmount() {
    clearInterval(this.timer);
  },
});
</script>
<style vars="{ color }">
/* 可传递变量 */
.text-color {
  color: var(--color);
}
</style>
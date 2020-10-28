<template>
  <div class="wrapper">
    <transition name="nano-fade">
      <router-view />
    </transition>
    <Tabbar route placeholder v-show="showFooter">
     
      <TabbarItem replace to="/" icon="home-o">Home </TabbarItem>
      <TabbarItem replace to="/about" icon="search">About </TabbarItem>
      <TabbarItem replace to="/todoList" icon="friends-o">Todo </TabbarItem>
      <TabbarItem replace to="/luckdraw" icon="setting-o">LuckDraw </TabbarItem>
    </Tabbar>
    <input />
  </div>
</template>

 
 <script lang="ts">
import { defineComponent } from "vue";

import { Tabbar, TabbarItem } from "vant";

export default defineComponent({
  name: "App",
  components: {
    Tabbar,
    TabbarItem,
  },
  computed: {
    showFooter() {
      console.log(this.$route.path.split("/").length < 3);
      
      return this.$route.path.split("/").length < 3;
    },
  },
});
</script>

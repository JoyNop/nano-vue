<template>
  <div>
    vue
    <div v-if="isLoggedIn">
      <SigninButton @demo-click="handleLogoutClick" />
    </div>
    <div v-else><SignoutButton @demo-click="handleLoginClick" /></div>
    <MathRandom />

    <span>Multiline message is:</span>
    <p style="white-space: pre-line">{{ message }}</p>
    <br />
    <textarea
      style="width: 360px"
      v-model="message"
      placeholder="add multiple lines"
    ></textarea>
    <p>Slot</p>
    <SlotFather />
    <div>
      <p>keep-alive</p>
      <button @click="changeTab">changetab</button>
      <!-- <keep-alive>
        <template :is="currentTabComponent">
          <div >
            <p>text1</p>
            <p>{{ Math.random() }}</p>
          </div>
        </template>
      </keep-alive> -->
    </div>
    <div>
      <p>computed</p>
      {{ sum }}
      <input type="number" v-model="sum" />
      {{ isSumComputed }}
      <button @click="getValue">okkk</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SigninButton from "@/components/demo/SigninButton.vue";
import SignoutButton from "@/components/demo/SignoutButton.vue";
import MathRandom from "@/components/demo/MathRandom.vue";
import SlotFather from "@/components/demo/SlotFather.vue";

interface HomeData {
  isLoggedIn: boolean;
  message: string;
  currentTabComponent: boolean;
  sum: number;
}
export default defineComponent({
  name: "Home",
  components: { SigninButton, SignoutButton, MathRandom, SlotFather },
  data(): HomeData {
    return {
      isLoggedIn: true,
      message: "请撰写一篇关于你喜欢的 Vue  的文章",
      currentTabComponent: false,
      sum: 33,
    };
  },
  computed: {
    isSumComputed() {
      if (this.sum > 0) {
        return "这个数字>0";
      } else {
        return "这个数字<0";
      }

      // set() {},
    },
  },

  methods: {
    getValue() {
      console.log(this.sum);
    },
    handleLoginClick() {
      this.isLoggedIn = true;

      // this.$http.get("http://wwww.baidu.com").
    },

    handleLogoutClick() {
      this.isLoggedIn = false;
    },
    changeTab() {
      this.currentTabComponent = !this.currentTabComponent;
    },
  },
});
</script>
<style vars="{ color }">
/* 可传递变量 */
.text-color {
  color: var(--color);
}
</style>
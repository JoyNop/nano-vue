<template>
  <SlotChildren>
    <div>大家好我是父组件</div>
    <template v-slot:header>
      <h1>Here might be a page title</h1>
    </template>

    <p>A paragraph for the main content.</p>
    <p>And another one.</p>

    <template v-slot:footer>
      <p>Here's footer info</p>
    </template>
  </SlotChildren>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import SlotChildren from "./SlotChildren.vue";

export default defineComponent({
  name: "SlotFather",
  components:{
    SlotChildren
  }
   
});
</script>
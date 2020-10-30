<template>
    <div class="container">
      <header>
        <!-- 我们希望把页头放这里 -->
         <slot name="header"></slot>
      </header>
      <main>
        <!-- 我们希望把主要内容放这里 -->
        <slot></slot>
      </main>
      <footer>
        <!-- 我们希望把页脚放这里 -->
     <slot name="footer"></slot>
      </footer>
    </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SlotChildren",
   
});
</script>
<template>
  <div>
    <button @click="changeButton">signin</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SigninButton",

  setup(props, { emit }) {
    console.log(1);
    
    const changeButton = () => {
      emit("demo-click");
    };
    return { changeButton };
  },
});
</script>
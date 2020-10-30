<template>
  <div>
   <button @click="changeButton">signout</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SignoutButton",
  setup(props, { emit }) {
    console.log(2);
    
    const changeButton = () => {
      emit("demo-click");
    };
    return { changeButton };
  },
});
</script>
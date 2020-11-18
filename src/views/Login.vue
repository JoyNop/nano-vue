<template>
  <div>
    <p>Hello World</p> 
    <p>this is login page</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"; 
export default defineComponent({
  name: "Login",
  components: { 
  },
  data() {
    return {};
  },
  mounted() {
    console.log(this);
  },
});
</script>
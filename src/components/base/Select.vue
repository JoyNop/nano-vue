<template>
  <select name="123" id="abc">
    <option value="1">NanoVue</option>
    <option value="a">NanoReact</option>
    <option value="b">NanoAngular</option>
    <option value="c">NanojQuery</option>
  </select>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "NanoUISelect",
});
</script>
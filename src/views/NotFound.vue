<template>
  <div>
    erro
    <Empty image="error" description="Errrrror Not Found" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Empty } from "vant";
export default defineComponent({
  // name: "NotFound",
  components: { Empty },
  data() {
    return {};
  },
  mounted() {
    console.log(this);
  },
});
</script>
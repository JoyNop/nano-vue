<template>
  <div>
    <h3>最新的count值伪： {{ $store.state.count }}</h3>
    <button @click="test">-1</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "vuex";
export default defineComponent({
  name: "Subtraction",
  data() {
    return {};
  },

  setup() {
    const store = useStore();
    console.log(store);

    const test = () => {
      // alert("211")
      store.commit("noAdd");
    };

    return {
      test,
    };
  },
  // methods: {
  //   subtractionHander() {},
  // },
});
</script>
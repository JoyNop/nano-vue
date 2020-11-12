<template>
  <div>
    <h3>最新的count值伪：{{ count }}</h3>
    <button @click="add()">+1</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState ,mapMutations} from "vuex";
export default defineComponent({
  name: "Addition",
  data() {
    return {};
  }, computed: {
    ...mapState(["count"]),
  },
  methods: {
    ...mapMutations["add"],
    addHandler() {
       console.log(1111);
      //  alert("333")
  
      // (this as any).store.commit("add") ;
    },
  },

 
});
</script>
<template>
  <div>
    <p>
      
    </p>
  
      <Subtraction />
    
   <Addition />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Addition from "@/components/vuexdemo/Addition.vue";
import Subtraction from "@/components/vuexdemo/Subtraction.vue";
export default defineComponent({
  name: "Vuex",
  components: {
    Subtraction,
    Addition,
  },
  data() {
    return {};
  },
  mounted() {
    console.log(this);
  },
});
</script>
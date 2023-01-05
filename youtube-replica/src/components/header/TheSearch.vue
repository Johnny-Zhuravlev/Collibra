<template>
  <div class="flex w-full h-full">
    <TheSearchInput />
    <TheSearchBtn />
  </div>
</template>

<script>
import TheSearchInput from "./TheSearchInput.vue";
import TheSearchBtn from "./TheSearchBtn.vue";

 export default {
  components: {
    TheSearchInput,
    TheSearchBtn,
  }
 }
</script>

<style scoped></style>

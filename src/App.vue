<style scoped>

.error{
  color: #d03939;
}

</style>


<template>
  <div class="grid-overlay"></div>
  <headers />
  <main class="wrapper content-width">

        <RouterView />

  </main>
<footer  class="footer"></footer >
</template>


<script setup>

import headers from './components/header.vue';


</script>


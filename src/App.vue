<script setup>

import { RouterView } from 'vue-router'




</script>

<template>
  <div class="body">
  

      <nav>
        <span>Where in the world?</span>

        <span class="toggleSection">
          <img alt="toggle" class="toggle" src="@/assets/lightMoonToggle.svg" />

          <span>Dark Mode</span>
        
        </span>
        
      </nav>

  <RouterView />

</div>

</template>

<style scoped>

</style>

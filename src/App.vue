<script setup>

// import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'

import { storeToRefs } from 'pinia';

import { allcountryData } from '@/stores/countryData'


// let everyCountryData = allCountryData()


// let {dataFetched, errorState, isLoading, errorMessage} = storeToRefs(everyCountryData)



import SearchComponent from './components/SearchComponent.vue';
// import LoadingComponent from './components/LoadingComponent.vue';
// import ErrorComponent from './components/ErrorComponent.vue';
import DisplayFlagComponent from './components/DisplayFlagComponent.vue';

</script>

<template>
  
      <!-- <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav> -->

      <nav>
        <span>Where in the world?</span>

        <span class="toggleSection">
          <img alt="toggle" class="toggle" src="@/assets/lightMoonToggle.svg" />

          <span>Dark Mode</span>
        
        </span>
        
      </nav>


      <div>

        <SearchComponent />
        <!-- <LoadingComponent />
        <ErrorComponent  /> -->


        
      </div>


      <div class="displayCards">
        <DisplayFlagComponent />
      </div>
   








  <!-- <RouterView /> -->


</template>

<style scoped>

</style>

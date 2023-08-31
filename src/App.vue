<script setup>

// import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'

import { storeToRefs } from 'pinia';

import { storeData } from '@/stores/countryData'


let fetchedCountryData = storeData()


let {everyCountryData , errorState, isLoading, errorMessage} = storeToRefs(fetchedCountryData)



import SearchComponent from './components/SearchComponent.vue';
import LoadingComponent from './components/LoadingComponent.vue';
import ErrorComponent from './components/ErrorComponent.vue';
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

      </div>

      <div v-if="isLoading">
        <LoadingComponent />
      </div>
     
      <div v-if="errorState">
        <ErrorComponent  :errorMessage="errorMessage"/>
      </div>
      

      <div class="displayCards"> 

      <span  v-for="data in everyCountryData" :key="data.name">

        <DisplayFlagComponent 
      
          :flag="data.flags.svg"
          :countryName="data.name.common"
          :population="data.population" 
          :region="data.region" 
          :capital="data.capital"
        
        />


      </span>

    </div>
   








  <!-- <RouterView /> -->


</template>

<style scoped>

</style>

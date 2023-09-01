<script setup>



import { storeToRefs } from 'pinia';

import { storeData } from '@/stores/countryData'


let fetchedCountryData = storeData()


let {everyCountryData , errorState, isLoading, errorMessage} = storeToRefs(fetchedCountryData)



import SearchComponent from '../components/SearchComponent.vue';
import LoadingComponent from '../components/LoadingComponent.vue';
import ErrorComponent from '../components/ErrorComponent.vue';
import DisplayFlagComponent from '../components/DisplayFlagComponent.vue';

</script>

<template>


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

      <span  v-for="data in everyCountryData" :key="data.name" @click="this.$router.push({ name: 'cards', params:{data:JSON.stringify(data)}})">

        <DisplayFlagComponent 
      
          :flag="data.flags.svg"
          :countryName="data.name.common"
          :population="data.population" 
          :region="data.region" 
          :capital="data.capital"
        
        />


      </span>

    </div>
   

</template>

<style scoped>

</style>

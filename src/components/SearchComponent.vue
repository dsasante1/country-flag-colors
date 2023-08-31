
<script setup>

import { reactive, watch } from 'vue'

import { storeData } from '@/stores/countryData'

import { storeToRefs } from 'pinia';


let fetchedCountryData = storeData()

// let {searchData } = storeToRefs(fetchedCountryData)


import debounce from 'lodash.debounce'

const form = reactive ({

    userQuery: null,
    selectedFilter: null

})

// const userQuery = ref("")
// const selectedFilter = ref("")


function resetQuery(){
    form.userQuery = ""
}



function v(){
    if ( form.userQuery !== "" && form.selectedFilter !== null){
        debounce(() => {
    fetchedCountryData.searchData(    
    form.userQuery,
    form.selectedFilter
    )

    console.log(`debounce button clicked! ${form.userQuery} - ${form.selectedFilter}`)
}, 600)
    }
   
}





const sendUserQuery = debounce(() => {
    fetchedCountryData.searchData(    
    form.userQuery,
    form.selectedFilter
    )

    console.log(`debounce button clicked! ${form.userQuery} - ${form.selectedFilter}`)
}, 2000)
    



watch(form, sendUserQuery)




</script>


<template>


    <div class="inputSection">

    <span class="searchSection">
        <img id="magnifyGlass" src="@/assets/searchIcon.svg" alt="magnifying glass">
        <input type="text" v-model="form.userQuery" placeholder="Search for a country..."/>
        <span class="clearInput" @click="resetQuery()"> &#10006;</span>
    </span>

 


    <select name="Filter by Region" class="filterByRegion" v-model="form.selectedFilter">
        <option value="">Filter by Region</option>
        <option value="africa">Africa</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="Oceania">Oceania</option>
    </select>
    




    </div>





      
        

       
        
        
    


</template>



<style scoped>




.inputSection{
  
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}


.searchSection{
  border: solid #211e41;
  padding: 15px;
  /* padding-right: 10px; */
  padding-left: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  gap: 20px;


}


input{

    color: black;
    border: none;
    font-size: medium;
    padding-right: 200px;
    
}

textarea:focus, input:focus{
    outline: none;
}



.clearInput, option{
    cursor: pointer;
}




.filterByRegion{
    color: black;
    background-color: white;
    font-size: medium;
    padding: 15px;
    border: solid;
    align-items: center;
    cursor: pointer;
    
}




@media only screen and (max-width: 900px){


.inputSection{
  
  padding: 20px;

  display: flex;
  flex-direction: column;
  gap: 40px;
  
}


.searchSection{
  border: solid #211e41;
  padding: 15px;
  padding-right: 50px;
  padding-left: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  gap: 20px;


}


input{

    color: black;
    border: none;
    font-size: small;
    padding: 5px;
    
}

textarea:focus, input:focus{
    outline: none;
}


.filterByRegion{
    color: black;
    background-color: white;
    font-size: small;
    padding: 10px;
    border: solid;

    
}

.clearInput, option{
    cursor: pointer;
}





}



</style>
    
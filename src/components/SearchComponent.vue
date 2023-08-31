
<script setup>

import { ref } from 'vue'

// import { fetchedData } from '@/stores/countryData'


// const everyCountryData = fetchedData()


// let {countryData} = everyCountryData



const userQuery = ref("")


function resetQuery(){
    userQuery.value = ""
}


</script>


<template>


    <div class="inputSection">

    <span class="searchSection">
        <img id="magnifyGlass" src="@/assets/searchIcon.svg" alt="magnifying glass">
        <input type="text" v-model="userQuery" placeholder="Search for a country..."/>
        <span class="clearInput" @click="resetQuery()"> &#10006;</span>
    </span>

 


    <select name="Filter by Region" class="filterByRegion">
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

/* 
.searchButton{
   
    color: black;
    border-radius: 10px;
    padding-left: 20px;
    padding-right: 20px;
    padding: 15px;
    cursor: pointer;
    border-style:none;


} */


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
    
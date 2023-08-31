
<script setup>

// import { userData } from '@/stores/githubUserData'


// const userGithubData = userData()


// const {fetchUserData} = userGithubData


</script>


<template>


    <div class="inputSection">

    <span class="searchSection">
        <img id="magnifyGlass" src="@/assets/searchIcon.svg" alt="magnifying glass">
        <input type="text"  placeholder="Search for a country..."/>
    </span>

 


    <select name="filterByRegion" class="filterByRegion">
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
  padding-right: 250px;
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
    
}

textarea:focus, input:focus{
    outline: none;
}






.searchButton{
   
    color: black;
    border-radius: 10px;
    padding-left: 30px;
    padding-right: 30px;
    padding: 15px;
    cursor: pointer;
    border-style:none;


}


.filterByRegion{
    color: black;
    background-color: white;
    font-size: medium;
    padding: 15px;
    border: solid;
    align-items: center;

    
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
    
}

textarea:focus, input:focus{
    outline: none;
}


.filterByRegion{
    color: black;
    background-color: white;
    font-size: medium;
    padding: 20px;
    border: solid;

    
}


 

}



</style>
    
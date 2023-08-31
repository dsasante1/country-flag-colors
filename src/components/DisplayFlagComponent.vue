
<script setup>

defineProps([
    'flag',
    'countryName',
    'population',
    'region',
    'capital'

])



</script>




<template>

<span class="displayCard">
    
    <img class="cardImage" :src="flag" >
    
    <span class="cardDetails">

        <span id="countryName">{{countryName}}</span>
        
        <span id="countryDetails">
            <div>Population: {{ population }}</div>
            <div>Region: {{ region }}</div>
            <div>Capital: {{ capital }}</div>
        </span>

    </span>

</span>


</template>





<style scoped>



.displayCard{
    width: 300px;
    height: 400px;
    border-radius: 10px;
    display: flex;
    flex-direction:column;
    gap: 20px;
    border: solid;
    box-shadow: 5px 5px #f3f3f3;
}

.cardImage{
    width: 294px;
    height: 200px;
    object-fit: cover;
}

.cardDetails{
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 20px;
}







</style>
    
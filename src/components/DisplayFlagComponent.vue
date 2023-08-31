
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

    <img class="cardImage" :src="{ flag }">
    
    <span class="cardDetails">

        <span id="countryName">{{countryName}}</span>
        
        <span id="countryDetails">
            <span>Population: {{ population }}</span>
            <span>Region: {{ region }}</span>
            <span>Capital: {{ capital }}</span>
        </span>

    </span>

</span>


</template>





<style scoped>



.displayCard{
    width: 300px;
    height: 200px;
    border-radius: 10px;
    display: flex;
    flex-direction:column;
    gap: 20px;
    border: solid;
}

.cardImage{
    width: 50%;
}

.cardDetails{
    display: flex;
    flex-direction: column;
    gap: 10px;
}







</style>
    
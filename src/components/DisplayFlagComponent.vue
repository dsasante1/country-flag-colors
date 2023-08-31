
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

        <div id="countryName">{{countryName}}</div>
        
        <div id="countryDetails">
            <div>Population: {{ population }}</div>
            <div>Region: {{ region }}</div>
            <div>Capital: {{ capital }}</div>
        </div>

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
    gap: 30px;
}







</style>
    
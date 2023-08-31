
<script setup>

defineProps([
    'flag',
    'countryName',
    'nativeName',
    'subregion',
    'currency',
    'domain',
    'language',
    'population',
    'region',
    'capital',
    'bordercountries'

])



</script>




<template>

<span>U+02190 Back</span>


<span class="displayCard">
    
    <img class="cardImage" :src="flag" >
    
    <span class="cardDetails">

        <span id="countryName">{{countryName}}</span>
        
        <span id="countryDetails">
            <span>Native Name: {{ population }}</span>
            <span>Population: {{ population }}</span>
            <span>Region: {{ region }}</span>
            <span>Sub Region: {{ subregion }}</span>
            <span>Capital: {{ capital }}</span>

        </span>

        <span>
            <span>Top Level Domain: </span>
            <span>Currencies: </span>
            <span>Languages: </span>
        </span>

    </span>

</span>

<span class="borderItems">
    <span> Border Countries: </span>

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
    
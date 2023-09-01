<script setup>
// import CardDetailsComponent from '../components/CardDetailsComponent.vue'

defineProps([
  'data'

])

</script>


<template>

<span>U+02190 Back</span>


<span class="displayCard">
    
    <img class="cardImage" :src="flag" >
    
    <span class="cardDetails">

        <span id="countryName">{{data.countryName}}</span>
        
        <span id="countryDetails">
            <span>Native Name: {{ data.native_name }}</span>
            <span>Population: {{ data.population }}</span>
            <span>Region: {{ data.region }}</span>
            <span>Sub Region: {{ data.subregion }}</span>
            <span>Capital: {{ data.capital }}</span>

        </span>

        <span>
            <span>Top Level Domain: {{ data.domain }}</span>
            <span>Currencies: {{ data.currency }}</span>
            <span>Languages: {{ data.languages }}</span>
        </span>

    </span>

</span>

<span class="borderItems">
    <span> Border Countries: {{ border_countries }}</span>

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
    
<script setup>

import {ref} from 'vue'
import { useRoute } from 'vue-router';
import { countryData } from '@/stores/countryDetails'
import LoadingComponent from '../components/LoadingComponent.vue';
import ErrorComponent from '../components/ErrorComponent.vue';
import { storeToRefs } from 'pinia';


// country name from the route
const router = useRoute();


// fetch data from the store
let fetchedCountryData = countryData()
let { isLoading, errorState, errorMessage} = storeToRefs(fetchedCountryData)



const fetchedCountryDetails = ref("")


async function countryBio() {

    fetchedCountryDetails.value = await fetchedCountryData.getCountryInfo(router.params.data)

    }


countryBio()



// watchEffect(
//   async () => {



//     fetchedCountryData.setCountryName(router.params.data)


//     fetchedCountryData.getCountryInfo()

//     fetchedCountryData.countryDetailedData._rawValue[0]


//   }
// )



// onMounted(() => {
//     countryDetailedInfo.value = fetchedCountryData.countryData
//      countryDetailedInfo.value = localStorage(getId:fetchedCountryData.countryData)
// }
// )


</script>


<template>

<div class="body">

    <RouterLink to="/"><button>Back</button></RouterLink>



<div v-if="isLoading">
        <LoadingComponent />
      </div>

      <div v-if="errorState">
        <ErrorComponent  :errorMessage="errorMessage"/>
      </div>




<span v-if="fetchedCountryDetails" class="displayCard">

<img class="cardImage" :src="fetchedCountryDetails.flags.svg" > 



<span   class="cardDetails">

<h1 id="countryName">{{fetchedCountryDetails.name.common}}</h1>

<span id="countryDetails">


<span>

    <p>
        <strong>
            Native Name:
        </strong>
         {{ fetchedCountryDetails.name.nativeName}}
        </p>

    <p>
        <strong>
            Population:
        </strong> 
        {{ fetchedCountryDetails.population }}
    </p>

    <p>
        <strong>
            Region:
        </strong> 
        {{ fetchedCountryDetails.region }}
    </p>

    <p>
        <strong>
            Sub Region:
        </strong> 
        {{ fetchedCountryDetails.subregion }}
    </p>

    <p>
        <strong>
            Capital:
        </strong> 
        {{ fetchedCountryDetails.capital.toString() }}
    </p>

</span>

<span>
    <p>
        <strong>Top Level Domain:

        </strong> 
        {{ fetchedCountryDetails.tld.toString() }}
    </p>
    <p>
        <strong>
            Currencies:
        </strong> {{ fetchedCountryDetails.currencies}}
    </p>
    <p>
        <strong>
            Languages:
        </strong> 
        {{ fetchedCountryDetails.languages}}
    </p>
</span>


</span>

<span class="borderItems">

    <span>
         Border Countries: {{ fetchedCountryDetails.borders}}
    </span>

</span>

</span>



</span>




</div>



</template>





<style scoped>



.body{
    padding: 20px 50px 20px 50px;
    display: flex;
    flex-direction: column;
    gap: 40px;
}




.displayCard{
    border-radius: 10px;
    display: flex;
    flex-direction:row;
    gap: 100px;

}

.cardImage{
    width: 400px;
    height: 300px;
    object-fit: cover;
    border-radius: 15px;
    border: solid 0.2px;
}

.cardDetails{
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
}


.borderItems{
    padding-top: 30px;
}


#countryDetails{
    display: flex;
    flex-direction: row;
    gap: 20px;
}


span p {
    padding: 10px 0px 10px 0px;
}


@media only screen and (max-width: 900px){



    .body{
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 30px;
}




.displayCard{
    border-radius: 10px;
    display: flex;
    flex-direction:column;
    gap: 30px;

}

.cardImage{
    width: 300px;
    height: 300px;
    object-fit: cover;
    border-radius: 15px;
    border: solid 0.2px;
}

.cardDetails{
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
}


.borderItems{
    padding-top: 30px;
}


#countryDetails{
    display: flex;
    flex-direction: row;
    gap: 20px;
}


span p {
    padding: 10px 0px 10px 0px;
}


}



</style>

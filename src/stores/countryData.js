
import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const storeData = defineStore('countryData', () => {


    // const userQuery = ref("")
    // const userFilter = ref("")
    // const query = ref("")


    // let dataFetched = ref({});

    const isLoading =  ref(false)
    const errorState = ref(false)
    const errorMessage = ref("")




    const everyCountryData = ref({})


    async function fetchCountriesData(){

    try{

        isLoading.value = true
        errorState.value = false

       await axios.get(`https://restcountries.com/v3.1/all`).then((data) =>  {

       everyCountryData.value = data.data

    //    localStorage.setItem('countriesData', JSON.stringify(everyCountryData))


        });
    }catch (error){

        errorState.value = true
        errorMessage.value = error

    }finally{
        isLoading.value = false

        }
    }








  return {
    fetchCountriesData,
    everyCountryData,
    isLoading,
    errorState ,
    errorMessage,

    }
})

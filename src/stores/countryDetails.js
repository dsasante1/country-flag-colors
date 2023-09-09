
import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const countryData = defineStore('countryDetailData', () => {


    const query = ref("")

    const isLoading =  ref(false)
    const errorState = ref(false)
    const errorMessage = ref("")



    async function getCountryInfo(countryName){

            query.value = (`https://restcountries.com/v3.1/name/${countryName}`)

        try{

            isLoading.value = true
            errorState.value = false

            const data = await axios.get(query.value)
          
            //extract data here 


            // native name
            // currencies
            // languages
          

            return data.data[0]


        
        }catch (error){
            errorState.value = true
            errorMessage.value = error
        }finally{
            isLoading.value = false


        }
  }









  return {
    isLoading,
    errorState ,
    errorMessage,
    getCountryInfo,


    }
})


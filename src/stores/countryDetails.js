
import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
// import { map } from 'lodash'

export const countryData = defineStore('countryDetailData', () => {


    const query = ref("")

    const isLoading =  ref(false)
    const errorState = ref(false)
    const errorMessage = ref("")




    // get native name from nested native name
    function getCommonNativeName(objectItem){

        let objectValue = Object.values(objectItem)

        if (objectValue.length === 1){

        return objectValue[0].common

        }else{

            return objectValue[1].common
        }

    }


    //get currency from nested currency
    function getCurrency(currency){

        let currencyObject = Object.values(currency)

        if (currencyObject.length === 1){
            return currencyObject[0].name
        }else{
            return currencyObject[1].name
        }
    }



    //get languages from nested languages
    function getCurrency(languages){

        let currencyObject = Object.values(languages)

        if (currencyObject.length === 1){
            return currencyObject[0].name
        }else{
            return currencyObject[1].name
        }
    }




    async function getCountryInfo(countryName){

            query.value = (`https://restcountries.com/v3.1/name/${countryName}`)

        try{

            isLoading.value = true
            errorState.value = false



            const data = await axios.get(query.value)

            let fetchedInfo = data.data[0]

            console.log('fetched data ->', fetchedInfo)

            //extract data here

            let countryDataInfo = {

            flag: fetchedInfo.flags.svg,

            name: fetchedInfo.name.common,
            nativeName: getCommonNativeName(fetchedInfo.name.nativeName),
            population : fetchedInfo.population,
            region : fetchedInfo.region,
            subregion : fetchedInfo.subregion,
            capital : fetchedInfo.capital.toString(),
            domain : fetchedInfo.tld.toString(),
            currencies : getCurrency(fetchedInfo.currencies),
            languages : Object.values(fetchedInfo.languages).toString(),
            borders : fetchedInfo.borders ?? 'No borders',
            }
            // native name
            // currencies
            // languages


           //console.log('countryinfo native', countryDataInfo)


            return countryDataInfo



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


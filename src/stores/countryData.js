
import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const storeData = defineStore('countryData', () => {


    // const userQuery = ref("")
    // const userFilter = ref("")
    const query = ref("")


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

        console.log(everyCountryData.value[2])

        });
    }catch (error){

        errorState.value = true
        errorMessage.value = error

    }finally{
        isLoading.value = false
        
        }
    }
    
  
  
    fetchCountriesData()
  
    
    async function searchData(userQuery, userFilter){

        const defaultFilter = "all"

    if (userQuery !== ""){

        if (userFilter !== null && userFilter !== ""){
            query.value = (`https://api.github.com/users/${userQuery.value}`)
        }else{
            query.value = (`https://api.github.com/users/${userQuery.value}`)
        }

        https://restcountries.com/v3.1/{service}?fields={field},{field},{field}

        https://restcountries.com/v3.1/all?fields=name,capital,currencies



        try{

            isLoading.value = true
            errorState.value = false

           await axios.get(query.value).then((data) =>  {

            
            everyCountryData.value = data.data

            });
        }catch (error){

            errorState.value = true
            errorMessage.value = error
        }finally{
            isLoading.value = false
            userQuery.value = ""

        }
  }

}





    
  
//     async function fetchUserData(){

//     if (userQuery.value !== ""){

//         query.value = (`https://api.github.com/users/${userQuery.value}`)


//         try{

//             isLoading.value = true
//             errorState.value = false

//            await axios.get(query.value).then((data) =>  {

//             dataFetched.value = data.data

//             });
//         }catch (error){

//             errorState.value = true
//             errorMessage.value = error
//         }finally{
//             isLoading.value = false
//             userQuery.value = ""

//         }
//   }


// }





  return {
    fetchCountriesData,
    everyCountryData,
    isLoading, 
    errorState ,
    errorMessage,
    searchData

    }
})

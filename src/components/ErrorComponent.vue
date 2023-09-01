
<script setup>

import { ref } from 'vue';

const errorInfo = defineProps(['errorMessage'])



let fetchErrorMessage = errorInfo.errorMessage.toString()

let newErrorMessage = ref("");

if(fetchErrorMessage.includes("400")){
    newErrorMessage.value = "Enter a valid country name"
}else if(fetchErrorMessage.includes("404")){
    newErrorMessage.value = "Country not found"
}else if(fetchErrorMessage.includes("500")){
    newErrorMessage.value = "Oops an error has occured. Try again later!"
} 

</script>


<template>
<div class="body">
    <div>
    <p>{{ newErrorMessage }}</p>
</div> 
</div>


</template>

<style scoped>

div{
    text-align: center;
    color: red;

}

.body{


}

</style>
    
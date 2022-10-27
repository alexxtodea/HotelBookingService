<template>
 
 
 <router-view/>
</template>

<script>
import RoomsComponent from './components/RoomsComponent.vue';


export default {
  name: 'Rooms',
  components: {
    RoomsComponent
    
}}

</script>

<style scoped>
 
 * {
  margin: 0px;
  padding:0px;
}

</style>
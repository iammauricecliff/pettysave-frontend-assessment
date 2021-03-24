<template>
   <Navbar />
   
</template>


<script>
  import Navbar from './views/Navbar.vue'
  export default {
    components: { Navbar },

  }
</script>





<style>
#app {
   font-family: 'Pacifico',  'Yanone Kaffeesatz', cursive, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

* {
  padding: 0;
  margin: 0;
}

.history-button button {
  position: absolute;

}

</style>

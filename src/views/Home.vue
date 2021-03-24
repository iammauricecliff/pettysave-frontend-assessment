<template>
   <div class="home container animate__flipOutY animate__repeat-2">
     <h1>feel free to explore all our latest post</h1>
     <div class="button">
         <router-link class="btn btn-success" :to="{name: 'Explore'}">view posts</router-link>
     </div>
   </div>
</template>

<script>

export default {
  name: 'Home',
 
}
</script>


<style scoped>
   .home {
      margin: 5rem auto;
      color: #42b983;
      background: white;
      padding: 15px;
      border: solid;
      border-radius: 10px;
      border-width: 0px;
      position: relative;
      letter-spacing: 2px;
   }

   .button  {
     color: white;
     position: absolute;
     text-align: center;
   }

   

</style>
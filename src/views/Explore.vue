<template>
  <div class="explore">
    <h1>Explore all post</h1>
    <div class="container mt-5" v-if="posts.length">
      <div class="postList list" v-for="post in posts" :key="post.id">
       <ul class="list-group">
           <router-link :to="{name: 'ExploreDetails', params: {id: post.id}}"><li class="list-group-item">{{ post.name}}
           </li></router-link>
       </ul>
      </div>
    </div>
     <div v-else="posts">
        <div class="spinner-border text-success" role="status">
    </div>
  </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  //mapping the state with the namespaced property and the updated data
    computed: {
      ...mapState('posts', ['posts'])
    },
   
    //dispatch our actions using the create lifecyle
    created(){
      this.$store.dispatch('posts/loadPosts')
    }
    
}

</script>

<style scoped>
    #nav {
      padding: 30px;
    }

    #nav a {
      font-weight: bold;
      color: #42b983;
    }

    #nav a.router-link-exact-active {
      color: #42b983;
    }
    
    .explore h1 {
     color: #42b983
    }
    
   
</style>
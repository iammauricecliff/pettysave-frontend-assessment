<template>
    <h1 class="details">Post Details</h1>
    <div class="container">
        <div class="card">
            <div class="card-title">
                    <div class="card-body">
                        {{ post.body }}
                    </div>
            </div>
        </div>
        <!-- </div> -->
    </div>
</template>

<script>
    export default {
         props: ['id'],
        data() {
          return {
            post: null,
            id: this.$route.params.id 
          }
        },

        // mounted(id){
        //   this.post = id
        // }
      
        created(){
          fetch('https://jsonplaceholder.typicode.com/comments/' + this.id)
          .then(res => res.json())
          .then(data => this.post = data)
          .catch(err => console.log(err.message))
          this.post = ''
        }
    }
</script>

<style scoped>
    #nav a {
        font-weight: bold;
        color: #42b983;
        font-size: 20px;
    }

    .navbar-brand {
        font-size: 30px;
    }

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
    
    .details {
     color: #42b983
    }
    
    body {
      background: crimson;
    }
</style>
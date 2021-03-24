
<template>
    <div id="nav">
        <nav class="navbar navbar-expand-lg navbar-light bg-transparent">
            <div class="container-fluid">
                <router-link class="navbar-brand animate__pulse" :to="{name: 'Home'}">favExplora</router-link> 
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <router-link class="nav-link" :to="{name: 'Home'}">Home</router-link> 
                        </li>
                        <li class="nav-item ">
                            <router-link class="nav-link" :to="{name: 'Explore'}">Explore all latest post</router-link> 
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
   <router-view/>
</template>

<style  scoped>
    #nav a {
        font-weight: bold;
        color: #42b983;
        font-size: 20px;
    }

    .navbar-brand {
        font-size: 30px;
    }

    #nav a.router-link-exact-active {
        color: #42b983;
        background: white;
        padding: 10px;
        border: solid;
        border-radius: 10px;
        border-width: 0px;
    }

    .me-auto {
        margin-left: 70%!important;
   }
   
   /* menu breakpoint fix on mobile view */
   @media (max-width: 992px) {
       .me-auto {
        margin-left: auto!important;
     }

     .navbar-collapse {
         margin-top: 2rem;
         height: 100%;
     }
   }

</style>
<template> 

<nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" ><router-link :to="{name: 'home'}">Administrador de tareas</router-link>
      
    </a>

    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <a class="navbar-item">
        <router-link :to="{name: 'home'}">Home</router-link>
      </a>
    </div>
    </div>
    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-primary">
            <router-link :to="{name: 'signin'}">Registrar</router-link>
          </a>
          <a class="button is-light">
            <router-link :to="{name: 'login'}">Login</router-link>
          </a>
        </div>
      </div>
    </div>
  
</nav>
</template>


<script setup>

import { onMounted } from 'vue';
import { login, newTask } from './api';
import Home from './views/Home.vue';


// export default {
//     name: 'App',
//     components: {
//         Home
//     }
// }



//onMounted(async () => {
    // const id = await login('alberto.ramirez@ironhack.com', '1234567');
    // newTask({
    //     user_id: id,
    //     title: 'Titulo',
    //     description: 'Descripcion de otro task'
    // })

//})




</script>
<style scoped>
ul{
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: space-around;
    padding: 20px;
}
</style>
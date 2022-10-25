<template>
  <!-- el mensaje de autentificacion con el enlace de login -->
  <div class="section">
    <div class="container">
      <article v-if="!authStore.isAuth" class="message is-danger">
        <div class="message-body">
          <strong>Are you ready for take off?...Please  </strong>
          <router-link :to="{ name: 'login' }"> Login </router-link>
          <div class="earth">
              <div class="earthInside">
                
                  <img src="../../../plane-top-view-png-4.png">

              </div>
            </div>


        </div>
      </article>
      <div v-else>
        <!-- nombre del usuario y un botton ce cerrar sesion -->
        <div class="title">Tareas {{ authStore.user.name }}</div>
        <button @click="authStore.logout()" class="buttonIsRed">
          Cerrar sesion
        </button>
        <!-- formulario de los mensajes -->

        <a class="button is-primary">
          <router-link :to="{ name: 'newTask' }">Crear tarea</router-link>
        </a>

        <Task v-for="tarea in useTask.tasks" :task="tarea" />
      </div>
    </div>
  </div>
</template>
<script setup>
import { useAuthStore } from "../store/auth";
import Task from "../components/Task.vue";
import { getTasks } from "../api/index";
import { ref } from "vue";
import { useTaskStore } from "../store/task";

// const todasTareas = ref();

const tareas = async () => {
  const response = await getTasks();
   useTask.setTask(response);
  console.log(response);
};
tareas();

const useTask = useTaskStore();
const authStore = useAuthStore();
</script>
<style scoped>
.buttonIsRed {
  color: black;
  background-color: red;
  border-bottom: none;
}

.buttonIsRed:hover{
  background-color: rgb(80, 57, 193);
  text-transform:capitalize;
}


/* EARTH */

/* aqui es todo  +  */
.earth{

margin: 0;
padding: 0;
position: relative;
width: 200px;
height: 200px;

/* hasten;a aqui correcto */
/* overflow: hidden; */
}


/* aqui es el body */
.earthInside{

display: flex;
justify-content: center;
align-items: center;
min-height: 30vh;
background-color: blue;
background-image: url('../../../earth.png'); 
/* la imajen no functiona para colgarla encima  */
background-size: cover;
border-radius: 50%;
box-shadow: 0 0 50px rgba(0,0,0,0.85);

/* me quede al minuto 1.53 */

/* hasta aqui correcto */


}



</style>

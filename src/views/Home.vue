<template>
  <!-- el mensaje de autentificacion con el enlace de login -->
  <div class="section">
    <div class="container">
      <article v-if="!authStore.isAuth" class="message is-info">
        <div class="message-body">
          <strong>Are you ready for take off?...Please...</strong>
          <strong
            ><router-link :to="{ name: 'login' }"> Login </router-link></strong
          >
        </div>
       
      </article>

      
      <div v-else class="LogOutCreate">
        <!-- nombre del usuario y un botton ce cerrar sesion -->
        <div class="title">Tareas {{ authStore.user.name }}</div>

        <!-- HOME BOTONES  -->
        <div class="section is-10-mobile"> 
        <div class="buttons is-grouped linia-botones">
          <button @click="authStore.logout()" class="button is-link button-margen">
            <!-- <span class="icon"> <i class="fab fa-airplane"></i> </span> -->
            Log Out
          </button>

          <!-- formulario de los mensajes -->

          <a class="button is-primary">
            <router-link :to="{ name: 'newTask' }"
              >Create a task</router-link
            >
        
          </a>
        </div>
          <div class="colums is-multiline is-3-desktop">
            <Task
              class="column is-10-mobile is-3-desktop column-style"
              v-for="tarea in useTask.tasks"
              :task="tarea"
            />
          </div> 
        </div>
        
      </div>
    </div>
  </div>
  <div class="moverPlaneta">
    <div class="planetaEntera">
      <div class="earth">
        <div class="earthInside">
          <img class="plane" src="../imajenes/plane-top-view-png-4.png" />
        </div>
      </div>
    </div>
  </div>
  <div>
    <div class="content has-text-centered">
      <p>
        <Strong>ToDoApp</Strong> for Cabin Crew by<strong>
          Cristina Tanase</strong
        >
        Ironhack student
      </p>
      <div>
        <img
          class="ironHackLogo"
          src="../imajenes/logo-ironhack-blue.png"
          alt=""
        />
      </div>
    </div>
    <footer class="footer"></footer>
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

.buttonIsRed:hover {
  background-color: rgb(80, 57, 193);
  text-transform: capitalize;
}

/* EARTH */

/* aqui es todo  +  */

* {
  margin: 0;
  padding: 0;
}
.earth {
  position: relative;
  width: 60px;
  height: 80px;
}

.plane {
  display: flex;
  transition: 0.5s;
  animation: animate 12s linear infinite;
}
.planetaEntera {
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #1a68e5;
  overflow: hidden;
  height: 200px;
  width: 200px;
  background-image: url("../imajenes/earth.png");
  background-size: cover;
  border-radius: 50%;
  box-shadow: 0 0 50px rgba(0, 0, 0, 0.85);
  /* hasta aqui correcto */
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s;
  animation: animate 12s linear infinite;
  z-index: 1;
}

/* aqui son los nubes */
.earth:before {
  content: "";
  position: absolute;
  width: 400px;
  height: 200px;
  background-image: url("../imajenes/cloud.png");
  /* background-size: cover; */
  animation: animate 18s linear infinite;
  z-index: 50;

  /* left: 0; */
}
.earth img {
  position: absolute;
  z-index: 1;
  transition: 0.2s;
  pointer-events: none;
}

@keyframes animate {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 719px 0px;
  }
}

.moverPlaneta {
  display: flex;
  /* background-color: aqua; */
  justify-content: center;
  align-items: center;
  padding-top: 80px;
  padding-bottom: 150px;
}

.message-body {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;
  background-color: none;
}
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 50px;
  padding-left: 180px;
}
body {
  background-color: red;
  
}

template {
  background-color: #1a68e5;
}

router-link:hover {
  size: 40px;
}

/* .LogOutCreate{
  display: flex;
  justify-content: space-between;
  background-color: red;
} */

.ironHackLogo {
  height: 30px;
}

.column-style {
  margin-bottom: 30px;
  width: 100%;
}

.linia-botones{
  display: flex;
  justify-content: center;
}
.button-margen{
  padding: 5px;
  width: 48%;
}
</style>

<template>
  <!-- el mensaje de autentificacion con el enlace de login -->
  <div class="section">
    <div class="container">
      <article v-if="!authStore.isAuth" class="message is-info">
        <div class="message-body has-text-weight-bold">
          Are you ready for take off?...Please...
          
         <router-link :to="{ name: 'login' }"> Login </router-link>
          
        </div>
       
      </article>

      
      <div v-else class="LogOutCreate">
        <!-- nombre del usuario y un botton ce cerrar sesion -->
        <div class="title">Welcome {{ authStore.user.name }}</div>

        <!-- HOME BOTONES  -->
        <div class="section is-10-mobile contentCardImg"> 
        <div class="buttons is-grouped linia-botones">
         
          <button @click="authStore.logout()" class="button is-link button-margen botonesEditarTask">
            <!-- <span class="icon"> <i class="fab fa-airplane"></i> </span> -->
            Log Out
          </button>

          <!-- formulario de los mensajes -->

          <a class="button is-primary botonesEditarTask">
            <router-link :to="{ name: 'newTask' }"
              >Create task</router-link
            >
          </a>

        </div>
          <div class="columns is-multiline ">
            <div class="m-6 column is-10-mobile is-3-desktop is-4-tablet column-style" v-for="tarea in useTask.tasks" > 
             <Task
    
              :task="tarea"
            />
            </div>
           
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
    <div class="content has-text-centered norwegianFoto">
      <p>

       <span class="has-text-weight-bold">ToDoApp</span>  for Cabin Crew by
       <span class="has-text-weight-bold">Cristina Tanase<button class="button graduation">
    <span class="icon is-small">
      <i class="fa-solid fa-graduation-cap"></i>
    </span>
  </button></span> 
        
       <span class="has-text-weight-bold">   *Ironhack</span> student.
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
  background-color: rgb(236, 199, 199);
  border-bottom: none;
}

.buttonIsRed:hover {
  background-color: rgb(125, 107, 214);
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

  background-color: #155ac9;
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
  padding-bottom: 140px;
}

.message-body {
  display: flex;
  justify-content: center;
  align-items: center;
 
  padding-left: 40px;
  padding-right: 40px;
  
}
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 50px;
  
}
body {
  background-color: red;
  
}

template {
  background-color: #1a68e5;
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
  /* width: 100%; */
}

.linia-botones{
  display: flex;
  justify-content: center;
  padding: 1px;
  margin-bottom: 0;
  margin-right: 720px;
}
.button-margen{
  padding: 5px;
  width: 48%;
}

 /* .card-content{
  background-image: url('../imajenes/norwegian.jpg');
  width: 100%;
  height: 100%;
} 
  */
.card{
  /* background-image: url('../imajenes/1.webp'); */
  /* width: 100%; */
  height: 100%;
  text-shadow: 1px 3px 7px rgb(26, 22, 22);
/*   
  background-repeat: no-repeat;
  background-size: cover; */
    
} 
.card::before{
  content:'';
  background-image: url('../imajenes/1.webp');
  color:white;
  background-repeat: no-repeat;
  background-size: cover;
 
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    opacity: 0.2;

} 
/* .card::after{
  background-image: url('../imajenes/1.webp');
} */




.botonesEditarTask{
 
  margin: 5px;
 
  width: 70px;
  height: 25px;
 
}
.graduation{
  margin-left:15px;
  padding-bottom: 10px;
  margin-right: 10px;
}

/* .is-multiline{

} */

.title{
 margin-left: 40px;

}
</style>

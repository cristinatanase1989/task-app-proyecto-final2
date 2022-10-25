<template>
  <!-- el mensaje de autentificacion con el enlace de login -->
  <div class="section">
    <div class="container">
      <article v-if="!authStore.isAuth" class="message is-danger">
        <div class="message-body">
          <strong>Inicia sesion para entrar en la aplicacion </strong>
          <router-link :to="{ name: 'login' }"> Ir a Login </router-link>
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
</style>

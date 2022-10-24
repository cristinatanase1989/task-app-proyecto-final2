<template>

  <!-- el mensaje de autentificacion con el enlace de login -->
  <div class="section">
    <div class="container">
      <article v-if="!authStore.isAuth" class="message is-danger">
        <div class="message-body">
          <strong>Inicia sesion para entrar en la aplicacion </strong>
          <router-link :to="{name: 'login'}">   
           Ir a Login
        </router-link>
        </div>
      </article>
        <div v-else>
            <!-- nombre del usuario y un botton ce cerrar sesion -->
            <div class="title">Welcome {{authStore.user.name}}</div>
            <button @click="authStore.logout()" class="buttonIsRed">Cerrar sesion</button>
            <!-- formulario de los mensajes -->

            <Task />
        </div>
    </div>
  </div>
</template>
<script setup>
import { useAuthStore } from "../store/auth";
import Task from "../components/Task.vue";

const authStore = useAuthStore();
</script>
<style scoped>

.buttonIsRed{
    color: black;
    background-color: red;
}
</style>

<template>

<div class="card">
  <header class="card-header">
    <p class="card-header-title">
      {{task.title}}
    </p>
    <button class="card-header-icon" aria-label="more options">
      <span class="icon">
        <i class="fas fa-angle-down" aria-hidden="true"></i>
      </span>
    </button>
  </header>
  <div class="card-content">
    <div class="content">
      {{task.description}}
    </div>
  </div>
  <form class="box">
  <div class="field">
  <div class="control">
    <h2>Tarea completada</h2>
    <label class="switch">
      <input v-model="task.isCompleted" @change="completarTarea" type="checkbox">
      <span class="slider round"> </span>
       </label>
  </div>
</div>
</form>
  <footer class="card-footer">
    <button @click="editar=true">Editar Tarea</button>
        <!-- <RouterLink  :to="{name: 'editTask', params:{id: task.id} }" class="card-footer-item">Editar</RouterLink> -->
    <button @click = "borrarTarea" class="card-footer-item">Eliminar</button>
  </footer>
</div>
</template>
<script setup>

import { ref } from 'vue';

import { useAuthStore } from '../store/auth'
// import {NewTask} from '../views/NewTask.vue'
import {deleteTask , updateTask} from '../api/index'
import {useTaskStore} from '../store'

 const taskStore = useTaskStore();
const authStore = useAuthStore();
const message = ref('');
const title = ref('')


const onSubmit = () => {
taskStore.new(message.value , authStore.user.name)
message.value='';
}

const borrarTarea = () => {
    deleteTask(props.task.id)
}

const prop = defineProps({
  tarea : Object

})


</script>
<style scoped>
</style>
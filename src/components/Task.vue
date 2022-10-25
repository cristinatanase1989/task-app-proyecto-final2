<template>
  <form v-if="editar" @submit.prevent="editarTarea">
      <div class="control">
        <label class="label">Título*</label>

        <input
          v-model="title"
          class="input"
          type="text"
          placeholder="Inserte un título"
          required
        />

        <label class="label">Description de la tarea*</label>
        <textarea
          v-model="description"
          class="textarea"
          placeholder="Escribe una tarea"
          required
        >
Description de la tarea</textarea
        >
      </div>
      <div class="control">
        <!-- enviar botton  -->
        <button type="submit" class="mt-4 button is-info">OK</button>
         <!-- nuevo -->
         <button class="button is-success is-rounded">Completar</button>
        <!-- cancelar botton task -->
        <button @click="cancelarTarea" class="mt-4 button is-danger">
          Cancelar
        </button>
  
        
       
     
      </div>
    </form>

  <div v-else class="card">
    <header class="card-header">
      <p class="card-header-title">
        {{ props.task.title }}
      </p>
      <button class="card-header-icon" aria-label="more options">
        <span class="icon">
          <i class="fas fa-angle-down" aria-hidden="true"></i>
        </span>
      </button>
    </header>
    <div class="card-content">
      <div class="content">
        {{props.task.description }}
      </div>
    </div>
    <form class="box">
      <div class="field">
        <div class="control">
          <!-- <h2>Tarea completada</h2>
          <label class="switch">
            <input
              v-model="task.isCompleted"
              @change="completarTarea"
              type="checkbox"
            /> -->
            <!-- <span class="slider round"> </span>
          </label> -->
        </div>
      </div>
    </form>
    <footer class="card-footer">
      <button @click="editar = true" class="editar">Editar Tarea</button>
      <!-- <RouterLink
        :to="{ name: 'editTask', params: { id: task.id } }"
        class="card-footer-item"
        >Editar</RouterLink
      > -->

       <!-- nuevo -->
       <button @click="completarTarea" class="button is-success is-rounded">Completar</button>

      <button @click="borrarTarea" class="card-footer-item">Eliminar</button>
    </footer>
  </div>
</template>
<script setup>
import { ref } from "vue";

import { useAuthStore } from "../store/auth";
//  import {NewTask} from '../views/NewTask.vue'
import { deleteTask, updateTask, updateTaskCreated } from "../api/index";
import { useTaskStore } from "../store";
import { defineProps } from 'vue';

const props = defineProps({
      task: Object
});
const taskStore = useTaskStore();
const authStore = useAuthStore();
const description = ref(props.task.description);
const title = ref(props.task.title);
const editar =ref(false);


const onSubmit = () => {
  taskStore.new(description.value, authStore.user.name);
  description.value = "";
};

const borrarTarea = () => {
  deleteTask(props.task.id);
   taskStore.deleteTask(props.task.id)

};

const completarTarea =  () => {
  props.task.isCreated = !props.task.isCreated
  updateTaskCreated(props.task.id, {isCreated: props.task.isCreated})

}
//conexion con supabase//
const editarTarea = () => {
  updateTask(props.task.id, {
      title: title.value,
      description: description.value
  });
  editar.value = false;
  
  //actualizar estore
  taskStore.updateTask(props.task.id, {
      title: title.value,
      description: description.value
  })
}

// const prop = defineProps({
//   tarea: Object
// });
</script>

<style scoped>
.card-footer-item{
  background-color: rgb(84, 195, 246);
}

.editar{
background-color: rgb(230, 230, 140);
}
</style>

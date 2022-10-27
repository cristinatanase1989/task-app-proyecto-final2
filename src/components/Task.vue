<template>
  <form v-if="editar" @submit.prevent="editarTarea">
      <div class="control">
        <label class="label">Títle*</label>

        <input
          v-model="title"
          class="input"
          type="text"
          placeholder="Inserte un título"
          required
        />

        <label class="label">Task Description*</label>
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
        <button type="submit" class="mt-4 button is-info botonesEditarTask">Submit</button>
         <!-- nuevo -->
         <button class="mt-4 button is-link botonesEditarTask">Save changes</button>
        <!-- cancelar botton task -->
        <button @click="cancelarTarea" class="mt-4 button is-danger botonesEditarTask">
          Cancel
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
    <form>
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
      <button @click="editar = true" class="button is-warning is-active editarTresBotones">Edit Task</button>
      <!-- <RouterLink
        :to="{ name: 'editTask', params: { id: task.id } }"
        class="card-footer-item"
        >Editar</RouterLink
      > -->

       <!-- nuevo -->
       <button @click="completarTarea" class="button is-success editarTresBotones">Complet task</button>

      <button @click="borrarTarea" class="button is-danger is-active editarTresBotones">Delete</button>
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
  background-color: rgb(50, 131, 168);
}


.card-footer{
  
  display: flex;
 
}
.editar{
background-color: rgb(230, 230, 140);
}

.card{
  background-color: rgb(238, 221, 221);
  padding: 10px;

}


.control{
  background-color: rgb(191, 189, 239);
}

.box{
  padding: 20px;
  padding-bottom: 100px;
}
.field{
  background-color: aqua;
}

form{
  background-color: brown;
} 
.editarTresBotones{
  margin: 5px;
  margin-bottom: 0px;
  background-color: red;
 
}

.card-content{
  margin: 80px;
}

.botonesEditarTask{
  border-left: 10px;
  margin: 5px;
  width: 70px;
  height: 25px;
}

</style>

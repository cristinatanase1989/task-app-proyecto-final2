<template>
  <!-- <h1>esta es la pajina de post</h1>
<div class="post">
<header>
     <div class="has-text-weight-bold">{{props.post.user}}</div> -->
  <!-- <div>{{date}}</div> -->
  <!-- </header> -->
  <!-- <div>{{props.post.message}}</div> -->

  <!-- </div> -->
<div class="container">
  <div class="foto mt-5">
    <form @submit.prevent="onSubmit">
      <div class="control">
        <label class="label">Títle*</label>

        <input
          v-model="title"
          class="input"
          type="text"
          placeholder="Title..."
          required
        />

        <label class="label">Task description...*</label>
        <textarea
          v-model="message"
          class="textarea"
          placeholder="Things to remember..."
          required
        >
Description de la tarea</textarea
        >
      </div>
      <div class="botonesPadreMyRoster">
        
        <div class="control">
          <!-- enviar botton  -->
          <button type="submit" class="mt-4 button is-info espacioBotones">
            Add Task
          </button>

          <!-- cancelar botton task -->
          <button @click="cancelarTarea" class="mt-4 button is-danger espacioBotones">
            Cancel
          </button>

        </div>
      </div>
    </form>
  </div>
  <form>
    <div class="fotoAzafata"></div>
  </form>
</div>
</template>

<script setup>
import { defineProps, computed } from "vue";
import { newTask } from "../api";
import { ref } from "vue";
import { useTaskStore } from "../store/task";
import { useAuthStore } from "../store/auth";
import { useRouter } from "vue-router";

const props = defineProps({
  post: Object,
});
// const date = computed(() => props.post.date.toLocaleString())

const title = ref("");
const message = ref("");

const router = useRouter();
const taskStore = useTaskStore();
const authStore = useAuthStore();

const cancelarTarea = () => {
  title.value = "";
  message.value = "";
  router.push({ name: "home" });
};

const onSubmit = async () => {
  console.log(message.value);
  const tarea = {
    user_id: authStore.user.id,
    title: title.value,
    description: message.value,
  };
  await newTask(tarea);
  // taskStore.addTask(task)
  alert("Tarea creada con exito");
  router.push({ name: "home" });
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
}

.post {
  margin-top: 10px;

  border: solid 1px rgb(82, 153, 224);
  padding: 1rem;
}
.fotoAzafata {
  background-image: url("https://i.etsystatic.com/24291756/r/il/efb60b/4112987344/il_1588xN.4112987344_5smm.jpg");
  height: calc(100vh - 90px);
  background-size: cover;
  padding: 10px;
  width: 60%;
 

  /* padding-left: 20%; */
}

::placeholder {
  color: brown;
}

.input,
textarea {
  background-color: rgb(225, 231, 231);
}

.botonesPadreMyRoster {
  display: flex;
/* aqui no quiere seprarse si le estoy diciendo al padre que sea space-between */
  justify-content:space-between; 
   align-items: center;


}


.input{
  max-width: 50%;
}

.textarea{
  max-width: 50%;
  min-width: 50%;
}

.espacioBotones{
  
  margin: 5px;
}

/* .container{
  background-image: "../imajenes/aircraft-routing-featured-1000x1000.jpg" !important;
} */
</style>

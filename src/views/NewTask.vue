<template>
    <!-- <h1>esta es la pajina de post</h1>
<div class="post">
<header>
     <div class="has-text-weight-bold">{{props.post.user}}</div> -->
    <!-- <div>{{date}}</div> -->
<!-- </header> -->
<!-- <div>{{props.post.message}}</div> -->


<!-- </div> --> 

<div class="mt-5"> 
    <form @submit.prevent="onSubmit">
        <div class="control"> 
            <label class="label">Título*</label>

            <input v-model="title" class="input" type="text" placeholder="Inserte un título" required>

            <label class="label">Description de la tarea*</label>
        <textarea v-model="message" class="textarea" placeholder="Escribe un post" required>Description de la tarea</textarea>
        </div>
        <div class="control">
            <!-- enviar botton  -->
            <button type="submit" class="mt-4 button is-info">Añadir tarea</button>
            <!-- eliminar botton task -->
            <button @click = "borrarTarea" class="mt-4 button is-danger">Eliminar</button>
            <!-- editar botton task -->
            <button @click = "editarTarea" class="mt-4 button is-success">Editar</button>
            <!-- i agree with term and conditions -->
             <label class="checkbox">
                <input type="checkbox">Tarea completada
                
                </label>

        </div>


    </form>
    </div>
</template>



<script setup>
import { defineProps, computed } from 'vue'
import { newTask } from '../api';
import { ref } from 'vue';
import { useTaskStore} from '../store/task'
import { useAuthStore} from '../store/auth'
import { useRouter } from 'vue-router'


const props = defineProps({
    post: Object
})
// const date = computed(() => props.post.date.toLocaleString())

// asta am copiad din alta parte

const title = ref('');
const message = ref('');



const router = useRouter();
const taskStore = useTaskStore();
const authStore = useAuthStore();
const onSubmit = async()=> {
    console.log(message.value)
    const tarea = {
        user_id: authStore.id,
        title: title.value,
        description: message.value
    }
     await newTask(tarea)
    // taskStore.addTask(task)
    alert('Tarea creada con exito')
    router.push({ name: 'home' })
}



</script>



<style scoped>







header{
    display: flex;
    justify-content: space-between;
}

.post{
    margin-top: 10px;
   
    border: solid 1px rgb(82, 153, 224);
    padding: 1rem;
}

</style>
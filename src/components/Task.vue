<template>
<div class="mt-5"> 
    <form @submit.prevent="onSubmit">
        <div class="control"> 
        <textarea v-model="message" class="textarea" placeholder="Escribe un post"></textarea>
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
                <input type="checkbox">
                I agree to the <a href="#">terms and conditions</a>
                </label>

        </div>
        

    </form>
    </div>

    <PostMessage v-for="post in postStore.posts"
    
    :key="post.id" :post="post"/>
</template>
<script setup>
import { ref } from 'vue';
import { usePostsStore } from '../store/posts'
import { useAuthStore } from '../store/auth'
import PostMessage from './PostMessage.vue'
import {deleteTask} from '../api/index'

const postStore = usePostsStore();
const authStore = useAuthStore();
const message = ref('');

const onSubmit = () => {
postStore.new(message.value , authStore.user.name)
message.value='';
}

const borrarTarea = () => {
    deleteTask(props.task.id)
}

</script>
<style scoped>
</style>
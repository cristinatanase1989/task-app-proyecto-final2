<template>
<div class="mt-5"> 
    <form @submit.prevent="onSubmit">
        <div class="control"> 
        <textarea v-model="message" class="textarea" placeholder="Escribe un post"></textarea>
        </div>
        <div class="control">
            <button type="submit" class="mt-4 button is-info">Enviar</button>
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

const postStore = usePostsStore();
const authStore = useAuthStore();
const message = ref('');

const onSubmit = () => {
postStore.new(message.value , authStore.user.name)
message.value='';
}

</script>
<style scoped>
</style>
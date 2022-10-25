<template>
 
  <ul>
      <li>
          <router-link :to="{name: 'home'}">Home</router-link>
      </li>
      <li>
          <router-link :to="{name: 'login'}">Login</router-link>
      </li>
      <li>
          <router-link :to="{name: 'createAccount'}">Create Account</router-link>
        </li>


  </ul>
  <router-view></router-view>
</template>
<script setup>
import { onMounted } from 'vue';
import { login, newTask } from './api';
// import router from './router';
import {useAuthStore} from './store/auth';
import { useRouter } from 'vue-router';
//onMounted(async () => {
  // const id = await login('alberto.ramirez@ironhack.com', '1234567');
  // newTask({
  //     user_id: id,
  //     title: 'Titulo',
  //     description: 'Descripcion de otro task'
  // })

// })
const authStore = useAuthStore();
const router = useRouter();

onMounted (async () => {
  // const appReady = ref(null);
  try {
    if (!authStore.user.id) {
      // appReady.value = true; 
      router.push({
        name: 'login'
      });
    } else {
      router.push({
        name: 'home'
      })
    }
  }
  catch (error) {
    console.log(error)
  }
});


 
</script>
<style scoped>
ul{
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: space-around;
    padding: 20px;
}
</style>
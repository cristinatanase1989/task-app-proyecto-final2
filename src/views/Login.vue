<template>
  <div class="section">
    <div class="container">
      <form @submit.prevent="onSubmit">  
      <label class="label">Sing up</label>
      <div class="field">
        <!-- el placeholder se ve muy poco casi invisible....porque?????? -->
        <input v-model="email" class="input" type="email" placeholder="Email" />
      </div>
      <div class="field">
        <!-- el placeholder se ve muy poco casi invisible....porque?????? -->
        <input
          v-model="password" class="input" type="password" placeholder="Password"/>
      </div>

      <div class="field">
        <div>
          <button class="button is-normal button is-link is-rounded">
            Log in
          </button>
        </div>
      </div>
    </form>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue';
import{useRouter} from 'vue-router';
import {useAuthStore} from '../store/auth';
import {login} from '../api/index';



const router = useRouter();
const authStore = useAuthStore();
//importamos v-model y ref a las variables, vincular las variables al imput//
const email = ref('');
const password = ref('');
const name = ref('');

const onSubmit = async () => {
  console.log('formulario enviado', email.value, password.value);
  const response = await login(email.value,password.value);
       if (response){
        authStore.login(response);
        router.push({name:'home'})

} else{
    alert('Introduce tu mail y password.')
    }
  console.log(response)
}


</script>
<style scoped>
.section {
  background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
}
.is-success {
  background-color: blue;
}
.input {
  background-color: rgb(194, 169, 169);
  color: black;
}


</style>

<template>
 
  <div class="padre">
    <div class="section">
      <div class="container">
        <form @submit.prevent="onSubmit">
          <label class="label">  

            <span class="icon-text">
  <span class="icon">
    <i class="fa-solid fa-plane"></i>
  </span>
  </span>


            <!-- <i class="fa-solid fa-plane"> -->

            <!-- </i> -->
            Sing In</label>
          <div class="field">
            <!-- el placeholder se ve muy poco casi invisible....porque?????? -->
            <input
              v-model="email"
              class="input"
              type="email"
              placeholder="Enter your mail..."
            />
          </div>
          <div class="field">
            <!-- el placeholder se ve muy poco casi invisible....porque?????? -->
            <input
              v-model="password"
              class="input"
              type="password"
              placeholder="Password"
            />
          </div>

          <div class="field">
            <div>
              <button class="button is-normal button is-link is-rounded">
                Log in
              </button>
            </div>
            <!--
              este es ejemplo de button con bulma y font awesome <button class="button">
    <span class="icon">
      <i class="fa-solid fa-ticket"></i>
    </span>
  </button> -->
          </div>
        </form>
      </div>
    </div>


  <div>
    
  </div>

</div>

<div class="anotherAdventureFoto"> </div>

</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "../store/auth";
import { login } from "../api/index";

const router = useRouter();
const authStore = useAuthStore();
//importamos v-model y ref a las variables, vincular las variables al imput//
const email = ref("");
const password = ref("");
const name = ref("");

const onSubmit = async () => {
  console.log("formulario enviado", email.value, password.value);
  const response = await login(email.value, password.value);
  if (response) {
    authStore.login(response);
    router.push({ name: "home" });
  } else {
    alert("Introduce tu mail y password.");
  }
  console.log(response);
};
</script>

<style scoped>
.section {
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
  background-color: rgb(221, 202, 202);
  color: black;
}

.section {
  background-image: url("https://i.etsystatic.com/24291756/r/il/b5e66f/2499159921/il_1588xN.2499159921_dk50.jpg");
  height: calc(100vh - 70px);
  background-size: cover;
  padding: 0px;
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
}

::placeholder {
  color: red;
}

.padre{
display: flex;
justify-content: center;

}


</style>

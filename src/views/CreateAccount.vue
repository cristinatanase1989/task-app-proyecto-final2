<template>
  <div class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-6">
          <form class="box" @submit.prevent="onSubmit">
            <div class="field">
              <label class="label">Name</label>
              <div class="control">
                <input
                  v-model="name"
                  class="input"
                  type="text"
                  placeholder="Name"
                />
              </div>
            </div>
            <div class="field">
              <label class="label">Email</label>
              <div class="control">
                <input
                  v-model="email"
                  class="input"
                  type="email"
                  placeholder="e.g. alex@example.com"
                  required
                />
              </div>
            </div>
            <div class="field">
              <label class="label">Password</label>
              <div class="control">
                <input
                  v-model="pass1"
                  class="input"
                  type="password"
                  placeholder="*******"
                  required
                />
              </div>
            </div>
            <div class="field">
              <label class="label">Confirm Password</label>
              <div class="control">
                <input
                  v-model="pass2"
                  class="input"
                  type="password"
                  placeholder="*******"
                  required
                />
              </div>
            </div>
            <div class="field">
              <div class="control">
                <input
                  class="button is-link"
                  type="submit"
                  placeholder="Text input"
                />
              </div>
            </div>
          </form>
        </div>
        <div class="column is-6">
          <img src="../imajenes/norwegian.jpg" alt="">
           </div>
      </div>
    </div>
  </div>
 
</template>
<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { registro } from "../api/index";

const router = useRouter();
const name = ref("");
const email = ref("");
const pass1 = ref("");
const pass2 = ref("");

const onSubmit = async () => {
  if (comprobarClave() == true) {
    await registro(email.value, pass1.value);
    router.push({ name: "home" });
  }
};
const comprobarClave = () => {
  if (pass1.value !== pass2.value) {
    alert("Las dos contrase??as no coinciden");
    return false;
  } else {
    return true;
  }
};
</script>

<style scoped>
.container {
  /* background-color: red; */
  /* background-image: url("https://i.etsystatic.com/24291756/r/il/da6a96/2883628396/il_1588xN.2883628396_btm9.jpg"); */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  /* padding: 20px;
  padding-right: 800px; */
  height: calc(100vh - 70px);
  background-size: cover;
  padding: 20px;
  width: 50%;
}

img {
  object-fit: cover;
  height: 100%;


}

.label {
  background-color: rgb(217, 229, 229);
}

.input {
  background-color: rgb(225, 237, 233);
}
.section {
  display: flex;
  justify-content:center;
  /* align-items: end; */
  /* flex-direction: column; */
  /* padding: 20px; */
  height: calc(100vh - 70px);
  background-size: cover;
  padding: 20px;
 
}

.columns{
  width: 70%;
}
.column{
  height: 100%;

}

h1 {
  background-color: aqua;
}
/* .box{
  padding-left: -900px;
} */

.norwegianAvion {
  width: 400px;
  height: 400px;
  background-color: red;
}


</style>

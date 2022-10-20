<template>
  <div class="boxPadre">
    <form @submit.prevent ="registerButton" class="box">
     
<div class="form-group">
  <label>First Name</label>
  <input type="text" class="form-control" v-model="first_name" placeholder="First Name"/>
</div>

<div class="form-group">
  <label>Email</label>
  <input type="text" class="form-control"  v-model="last_name" placeholder="Last Name"/>
</div>

<div class="form-group">
  <label>Email</label>
  <input type="text" class="form-control"  v-model="email" placeholder="Email"/>
</div>


<div class="form-group">
  <label>Password</label>
  <input type="text" class="form-control"  v-model="password" placeholder="Password"/>
</div>

<div class="form-group">
  <label>Confirm Password</label>
  <input type="text" class="form-control"  v-model="password_confirm" placeholder=" Confirm Password"/>
</div>


       </form>
<!-- 
        <div class="boeingCompany">
          <label class="label">Company</label>
          <select>
            <option class="boeing" value="opt1">Norwegian</option>
            <option class="boeing" value="opt2">KLM</option>
            <option class="boeing" value="opt2">Lufthansa</option>
            <option class="boeing" value="opt2">British Airways</option>
            <option class="boeing" value="opt2">Alitalia</option>
          </select>
        </div>

        <div class="boeingAircraft">
            <label class="label">Aircraft</label>
          <select>
            <option class="boeing" value="opt1">Boeing 737</option>
            <option class="boeing" value="opt2">Boeing 787 Next Generation</option>
          </select>
        </div> -->
      </div>

      <button class="button is-primary">Register</button>
    
  
</template>
<script setup>



const registerButton = (e) =>{
    e.preventDefault()
    console.log("Hola")
}

// const data () => {
//   return {
//     email: '',
//     password: '',
//     password_confirm: ''
//   }
// }




</script>
<style scoped>
.boxPadre {
  background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
}

.boeing {
  padding: 30px;
}

.boeingCompany , .boeingAircraft{
  padding-top: 10px;
}

h1 {
  background-color: aqua;
}
.label{
  background-color: aqua;
}
</style>

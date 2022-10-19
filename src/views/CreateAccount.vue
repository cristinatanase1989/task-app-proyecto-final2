<template>
  <div class="boxPadre">
    <form class="box">
     
      <label class="label">Create account</label>
      <div class="field">
        <label class="label">Enter your name</label>
        <div class="control">
          <input
            class="input"
            type="email"
            placeholder="e.g. alex@example.com"
          />
        </div>
      </div>

      <div class="field">
        <label class="label">Password</label>
        <div class="control">
          <input class="input" type="password" placeholder="********" />
        </div>
      </div>

      <div class="field">
        <label class="label">Repet your Password</label>
        <div class="control">
          <input class="input" type="password" placeholder="********" />
        </div>

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
            <option class="boeing" value="opt2">
              Boeing 787 Next Generation
            </option>
          </select>
        </div>
      </div>

      <button class="button is-primary">Register</button>
    </form>
  </div>
</template>
<script setup></script>
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
</style>

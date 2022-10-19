<template>
    <div class="singInFormularioPadre">

   
   <label class="label">Sing up</label>
    <div class="field">
      <p class="control has-icons-left"> <input class="input" type="email" placeholder="Email">
        <span class="icon is-small is-left">
          <i class="fas fa-envelope"></i>
        </span>
        <span class="icon is-small is-right"><i class="fas fa-check"></i>
        </span>
      </p>
    </div>
    <div class="field">
      <p class="control has-icons-left">
        <input class="input" type="password" placeholder="Password">
      </p>
    </div>
    
    
    <div class="buttonPadreSingUp"> 
     <button class="is-success">Log in</button>
    
      <div><button class="is-one-third is-rounded ">Create an account</button></div>
    </div>
    </div>
    </template>
    <script setup>
    </script>
    <style scoped>

    .singInFormularioPadre{
        background-color: red;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding: 20px;

    }

    .is-success{
        background-color: blue;
    }
    </style>
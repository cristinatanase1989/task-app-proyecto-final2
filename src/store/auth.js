//esta es la autentification del usuario//
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
    state: () => ({
            // Nos indicara si el usuario esta autenticado
            isAuth: false,
            id: '',

            // Guardaremos el id de supabase que nos dara al hacer el login
           user:{
            email:'',
            id: ''
        
           }
        
    }),
  actions: {
        login(id) {
           this.isAuth = true;
          //  this.user.email = email;
          this.id= id;
          this.user.id=id;
        },

       logout(){
             this.isAuth = false;
            this.user.email = '';
       }
},

persist: {
  enabled: true,
  strategies: [
    {
      key: 'user',
      storage: localStorage,
    },
  ],
},

})
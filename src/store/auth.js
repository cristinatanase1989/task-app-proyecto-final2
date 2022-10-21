//esta es la autentification del usuario//
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
    state: () => ({
            // Nos indicara si el usuario esta autenticado
            isAuth: false,
            // Guardaremos el id de supabase que nos dara al hacer el login
           user:{
            email:''
            // password:'' esto no se si hace falta aqui
           }
        
    }),
  actions: {
        login(email) {
           this.isAuth = true;
           this.user.email = email;
      //      this.id= id;
        },

       logout(){
             this.isAuth = false;
            this.user.email = '';
       }
}
})
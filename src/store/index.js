// Nos permite importar los dos stores en la misma linea
export * from './auth'
export * from './task'


//esta es la autentification del usuario//
import { defineStore } from 'pinia'

export const usePostsStore = defineStore('posts', {
    state: () => ({
            posts : []
        
    }),
  actions: {
       
}
})
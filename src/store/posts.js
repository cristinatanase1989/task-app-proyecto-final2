import { defineStore } from 'pinia'


export const usePostsStore = defineStore('posts', {
    state: () => ({
            posts : []
        
    }),
  actions: {
    new(message, user){
        const post ={
             id: this.posts.length + 1,
             message: message,
             user: user,
             date: new Date()
            
        }
        this.posts.push(post);
    }
       
}
})
import{d}from"./file_index.102e57a3.js";const a=d("task",{state:()=>({tasks:[]}),actions:{setTask(s){this.tasks=s},updateTask(s,t){const e=this.tasks.findIndex(i=>{if(i.id==s)return!0});this.tasks[e].title=t.title,this.tasks[e].description=t.description},deleteTask(s){const t=this.tasks.findIndex(e=>{if(e.id==s)return!0});this.tasks.splice(t,1)},addTask(s){const t=this.tasks.findIndex(e=>{if(e.id==id)return!0});this.tasks[t].isCompleted=s.isCompleted}}});export{a as u};

import{_ as m,y as h,r as c,o as f,c as b,a as s,b as w,w as n,v as i,p as x,h as y,A as g}from"./file_index.2a96cb34.js";const S="/task-app-proyecto-final2/assets/file_norwegian.0aee0aa1.jpg";const o=a=>(x("data-v-cd7733af"),a=a(),y(),a),C={class:"section"},V={class:"container"},k={class:"columns"},A={class:"column is-6"},I=["onSubmit"],U={class:"field"},q=o(()=>s("label",{class:"label"},"Name",-1)),B={class:"control"},N={class:"field"},E=o(()=>s("label",{class:"label"},"Email",-1)),M={class:"control"},P={class:"field"},T=o(()=>s("label",{class:"label"},"Password",-1)),j={class:"control"},D={class:"field"},L=o(()=>s("label",{class:"label"},"Confirm Password",-1)),R={class:"control"},z=o(()=>s("div",{class:"field"},[s("div",{class:"control"},[s("input",{class:"button is-link",type:"submit",placeholder:"Text input"})])],-1)),F=o(()=>s("div",{class:"column is-6"},[s("img",{src:S,alt:""})],-1)),G={__name:"CreateAccount",setup(a){const _=h(),u=c(""),d=c(""),l=c(""),r=c(""),p=async()=>{v()==!0&&(await g(d.value,l.value),_.push({name:"home"}))},v=()=>l.value!==r.value?(alert("Las dos contrase\xF1as no coinciden"),!1):!0;return(H,e)=>(f(),b("div",C,[s("div",V,[s("div",k,[s("div",A,[s("form",{class:"box",onSubmit:w(p,["prevent"])},[s("div",U,[q,s("div",B,[n(s("input",{"onUpdate:modelValue":e[0]||(e[0]=t=>u.value=t),class:"input",type:"text",placeholder:"Name"},null,512),[[i,u.value]])])]),s("div",N,[E,s("div",M,[n(s("input",{"onUpdate:modelValue":e[1]||(e[1]=t=>d.value=t),class:"input",type:"email",placeholder:"e.g. alex@example.com",required:""},null,512),[[i,d.value]])])]),s("div",P,[T,s("div",j,[n(s("input",{"onUpdate:modelValue":e[2]||(e[2]=t=>l.value=t),class:"input",type:"password",placeholder:"*******",required:""},null,512),[[i,l.value]])])]),s("div",D,[L,s("div",R,[n(s("input",{"onUpdate:modelValue":e[3]||(e[3]=t=>r.value=t),class:"input",type:"password",placeholder:"*******",required:""},null,512),[[i,r.value]])])]),z],40,I)]),F])])]))}},K=m(G,[["__scopeId","data-v-cd7733af"]]);export{K as default};
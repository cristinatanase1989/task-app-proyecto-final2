<template>
    <h1>esta es la pajina de post</h1>
<div class="post">
<header>
    <div class="has-text-weight-bold">{{props.post.user}}</div>
    <div>{{date}}</div>
</header>
<div>{{props.post.message}}</div>


</div>


</template>



<script setup>
import { defineProps, computed } from 'vue'
const props = defineProps({
    post: Object
})
const date = computed(() => props.post.date.toLocaleString())

</script>
<style scoped>
header{
    display: flex;
    justify-content: space-between;
}

.post{
    margin-top: 10px;
   
    border: solid 1px rgb(82, 153, 224);
    padding: 1rem;
}

</style>
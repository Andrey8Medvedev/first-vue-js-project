<template>
   <div class="text-block">
      <h1>Сохраненные  шутки</h1>
      <p>Здесь хранятся шутки которые вы сохранили</p>

    </div>

    <div class="joke-container">
    <arrayjoke 
    v-for="item in jokeStore.joke"
      :array= "{
          id: item.id ,
          type: item.type ,
          setup: item.setup ,
          punchline: item.punchline ,
          statusBtn: 'delete',
          }"
    />
    </div>
</template>

<script setup>
import { useJokeStore } from '@/stores/JokeStore.js';
import arrayjoke from '../components/joke.vue';

const jokeStore = useJokeStore()

</script>


<style scoped>

  .text-block{
      text-align: center;
      z-index: 2;
      background: rgba(10, 10, 11, 0.6);
      padding: 3rem;
      border-radius: 24px;
      backdrop-filter: blur(12px);
      border: 1px solid rgba(200, 207, 195, 0.315);
      box-shadow: 0 20px 40px rgba(32, 32, 32, 0.5); 
      margin-bottom: 1em;
  }
  .joke-container{
      display: flex;
      flex-direction: row;
      width: 100%;
      flex-wrap: wrap;
      justify-content: space-between;
  }

  button{
      display: block;
      background: #e3dc4b;
      color: #000000;
      border-radius: 10px;
      border: 2px solid #b99935;
      padding: 10px 15px;
      cursor: pointer;
      margin-left: auto;
      margin-right: auto;
      margin-top: 15px;
      font-size: 15px;
  }
  button:hover{
        transform: scale(1.1) translateY(-5px);
      }
  a{
      color:white;
      margin-bottom: 10px;
  }

</style>
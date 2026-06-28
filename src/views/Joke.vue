<template>
   <div class="text-block">
      <h1>Генератор случайных шуток</h1>
      <p>Получеине случайных шуток по api</p>
      <a href="https://github.com/15Dkatz/official_joke_api" target="_blank">Ссылка на используемое api</a>
      <button  @click="getJoke()">Получить шутку</button>
      <p class="error">{{ error }}</p>
    </div>

    <div class="joke-container">
    <arrayjoke 
    v-for="item in joke"
      :array= "{
          id: item.id ,
          type: item.type ,
          setup: item.setup ,
          punchline: item.punchline ,
          statusBtn: 'add',
          }"
    />
    </div>
</template>

<script setup>

import { ref } from 'vue';
import axios from 'axios';

import arrayjoke from '../components/joke.vue';

let error = ref("");
let joke= ref([]);

function getJoke() {
    axios.get(`https://official-joke-api.appspot.com/random_joke`)
      .then(res=>(this.joke.push({
        id: res.data.id,
        type: res.data.type,
        setup: res.data.setup,
        punchline: res.data.punchline,
       })))
        this.error=""
    
}

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
        width: 30%;
        margin-top: 1em;
        margin-left: auto;
        margin-right: auto;
        padding: 0.6rem 1.2rem;
        border-radius: 30px;
        font-weight: 500;
        cursor: pointer;
        border: none;
        color: var(--bg-dark);
        background: var(--text-main);
        transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        text-decoration: none;
  }
  button:hover{
        transform: scale(1.1) translateY(-5px);
      }
  a{
      color:white;
      margin-bottom: 10px;
  }

</style>
<style scoped>

.text-block{
   /* width: 570px; */
  
  border-radius: 10px;
  background: #2721219f;
  padding: 20px;
  text-align: center;
  color: white;
  backdrop-filter: blur(10px);
  border: 2px solid rgb(17, 207, 255);
  margin-bottom: 20px;
      text-align: center;
}
.joke-container{
   display: flex;
    flex-direction: row;
    width: 100%;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap:25px;
}

.wrapper a{
  color:white;
  margin-bottom: 10px;
}
.wrapper button{
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
.wrapper button:hover{
  transform: scale(1.1) translateY(-5px);
}
.error{
  color: #d03939;
}

</style>


<template>
  <headers />
  <main class="wrapper content-width">
    <div class="text-block">
      <h1>Первый проект на vue js</h1>
      <p>Демонстарция работы со сторонней api и вывод результата</p>
    </div>
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
          }"
    />
    </div>
    

  </main>
<footer  class="footer"></footer >
</template>


<script setup>

import { ref } from 'vue';
import axios from 'axios';

import headers from './components/header.vue';
import arrayjoke from './components/joke.vue';

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


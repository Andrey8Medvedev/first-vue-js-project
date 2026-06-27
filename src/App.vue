<style scoped>

.wrapper{
}
.text-block{
   width: 570px;
  
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
    width: 650px;
    flex-wrap: wrap;
    /* justify-content: space-between; */
    justify-content: flex-start;
    gap:25px;
}
.joke{
  width: 250px;
  border-radius: 10px;
  background: #2721219f;
  text-align: center;
  color: white;
  backdrop-filter: blur(10px);
  border: 2px solid rgb(17, 207, 255);
  text-align: left;
  padding: 20px;
}
.wrapper .idjoke{
  font-size: 12px;
  font-weight: 300;
}
.wrapper .typejoke{
  font-size: 12px;
  font-weight: 300;
}
.wrapper .setupjoke{
  font-size: 16px;
  font-weight: 400;
}
.wrapper .punchlinejoke{
 font-size: 16px;
  font-weight: 400;
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
  <div class="wrapper">
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
      <div class="joke" v-if="joke != null" v-for="value in joke" :key="id">
        <p class="idjoke">Номер шутки: {{ value.id }}</p>
        <p class="typejoke">Категория шуток: {{ value.type }}</p>
        <p class="setupjoke">Сетап: {{ value.setup }}</p>
        <p class="punchlinejoke">Панчлайн: {{ value.punchline }}</p>
      </div>
    </div>
  </div>

</template>


<script setup>

import { ref } from 'vue';
import axios from 'axios';

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


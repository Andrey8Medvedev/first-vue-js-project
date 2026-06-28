<template>

      <div class="joke">
        <p class="idjoke">Номер шутки: {{ array.id }}</p>
        <p class="typejoke">Категория шуток: {{ array.type }}</p>
        <p class="setupjoke">Сетап: {{ array.setup }}</p>
        <p class="punchlinejoke">Панчлайн: {{ array.punchline }}</p>
        <button  v-if="array.statusBtn === 'add'" class="save-joke" @click="addJoke(array)">Сохранить</button>
        <button  v-if="array.statusBtn === 'delete'"  class="delete-joke" @click="jokeStore.deletejoke(array.id)">Удалить</button>
      </div>
    
</template>

<script setup>
import { useJokeStore } from '@/stores/JokeStore';
const props = defineProps(['array'])

const jokeStore = useJokeStore()

function addJoke(array) {
    console.log(array.id)
    jokeStore.joke.push({
        id: array.id,
        type: array.type,
        setup: array.setup,
        punchline: array.punchline,
       })
}


</script>

<style scoped>


.joke{
  width: 26%;
  border-radius: 10px;
  background: #2721219f;
  text-align: center;
  color: white;
  backdrop-filter: blur(10px);
  border: 2px solid rgb(17, 207, 255);
  text-align: left;
  padding: 20px;
}
.idjoke{
  font-size: 12px;
  font-weight: 300;
}
.typejoke{
  font-size: 12px;
  font-weight: 300;
}
.setupjoke{
  font-size: 16px;
  font-weight: 400;
}
.punchlinejoke{
 font-size: 16px;
  font-weight: 400;
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


</style>
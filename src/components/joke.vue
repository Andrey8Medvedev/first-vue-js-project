<template>

      <div class="joke">
        <p class="idjoke">Номер шутки: {{ array.id }}</p>
        <p class="typejoke">Категория шуток: {{ array.type }}</p>
        <p class="setupjoke">Сетап: {{ array.setup }}</p>
        <p class="punchlinejoke">Панчлайн: {{ array.punchline }}</p>
        <button  v-if="array.statusBtn === 'add'" :class="buttonClass" @click="addJoke(array);clickbtn()">{{btnText}}</button>
        <button  v-if="array.statusBtn === 'delete'"  class="delete-joke" @click="jokeStore.deletejoke(array.id)">Удалить</button>
      </div>
    
</template>

<script setup>
import { useJokeStore } from '@/stores/JokeStore';
import { ref } from "vue";
const props = defineProps(['array']);
const buttonClass = ref('');

const btnText = ref("Сохранить");

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
function clickbtn(){
  btnText.value = "Сохранено...";
  buttonClass.value = 'btn-active'
}

</script>

<style scoped>


.joke{
  width: calc((100% / 3) - (((3 - 1) / 3) * 1rem));
  box-sizing: border-box;
  margin-bottom: 1rem; 
  z-index: 2;
  background: rgba(10, 10, 11, 0.6);
  padding: 2rem;
  border-radius: 24px;
  backdrop-filter: blur(12px);
  border: 1px solid rgba(200, 207, 195, 0.315);
  box-shadow: 0 20px 40px rgba(32, 32, 32, 0.5); 
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
  margin-top: 1em;
  padding: 0.6rem 1.2rem;
  border-radius: 30px;
  font-weight: 500;
  cursor: pointer;
  border: none;
  color: var(--bg-dark);
  background: var(--text-main);
  transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  }

button:hover{
    transform: scale(1.1) translateY(-5px);
}
.btn-active{
  cursor: not-allowed;
  opacity: 0.5;
}
.btn-active:hover{
   transform: scale(1) translateY(0px);
}

</style>
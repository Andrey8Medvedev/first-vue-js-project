import { defineStore } from "pinia";
import { ref, watch } from "vue";



export const useJokeStore = defineStore('jokeStore', () =>{
    const joke = ref([]);

  const jokeInLocalStorage = localStorage.getItem("joke");
    if (jokeInLocalStorage) {
        try {
            joke.value = JSON.parse(jokeInLocalStorage);
        } catch (e) {
            console.error('Ошибка при загрузке шуток:', e);
            joke.value = [];
        }
    }

    const deletejoke = (id) =>{
        console.log(id)
        joke.value = joke.value.filter((el) => el.id !== id)
    }


    watch(
        joke,
        (state) => {
        localStorage.setItem("joke", JSON.stringify(state));
        },
        { deep: true }
    );

    return{
        joke, deletejoke
    }
})
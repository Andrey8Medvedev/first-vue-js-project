<template>

      <div class="joke">
        <p class="idjoke">Номер шутки: {{ array.id }}</p>
        <p class="typejoke">Категория шуток: {{ array.type }}</p>
        <p class="setupjoke">Сетап: {{ array.setup }}</p>
        <p class="punchlinejoke">Панчлайн: {{ array.punchline }}</p>
      </div>
    
</template>

<script setup>
const props = defineProps(['array'])
</script>

<style>


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




</style>
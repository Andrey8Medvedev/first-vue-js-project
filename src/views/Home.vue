<script>

</script>

<template>
    <div class="text-block">
        <h1>Первый проект на vue js</h1>
        <div class="text-container">
            <p>Это тестовый проект на котором обучаюсь использовать vue js</p>
            <p>Что уже было реализовано в проекте:</p>
            <ul>
                <li>Работа с сторонней API</li>
                <li>Созданиеи компонентов и их использование</li>
                <li>Работа с роутами</li>
                <li>Работа с сторонней API</li>
            </ul>
        </div>
        <RouterLink  to="/joke/">Перейти к генерации шуток</RouterLink>
    </div>
</template>


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
    a{
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
        width: 200px;
        color:rgb(0, 0, 0);
        margin-bottom: 10px;
        text-decoration: none;
    }
    a:hover{
          transform: scale(1.1) translateY(-5px);
        }
    .text-container{
        width: 450px;
        text-align: left;
        margin-left: auto;
        margin-right: auto;
    }
    ul{
        margin-left: 35px;
    }
    p{
        margin-bottom: 10px;
    }

</style>
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
                <li>Сохранение дынных через LocalStorage pinia</li>
            </ul>
        </div>
        <RouterLink   to="/joke/">Перейти к генерации шуток</RouterLink>
    </div>
</template>


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
    a{
        display: block;
        width: 40%;
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
<template>
    <header class="header content-width">
        <nav>
            <ul>
                <li><a href="/">Главная</a></li>
                <li><a href="/save/">Сохраненные шутки</a></li>
                <li><a href="/user/">Пользователь</a></li>
                <li><a href="/contacts/">Контакты</a></li>
            </ul>
        </nav>
    </header>
</template>

<script>


</script>

<style>
.header {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: center;
    padding: 15px 0;
    margin-bottom: 50px;
}
nav {
    display: inline-block;
    vertical-align: middle;
    border-bottom: 1px solid rgba(255, 255, 255, 0.301);
}
nav > ul {
    padding: 0;
    list-style-type: none;
}
nav > ul > li {
    display: inline-block;
    vertical-align: bottom;
    margin: 0 10px;
    position: relative;
    padding: 0 0 5px 0;
}
nav > ul > li > a {
    font-size: 20px;
    font-weight: 500;
    color: #ffffff;
    text-decoration: none;
}

</style>

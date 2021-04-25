<template>
        <section>
                <div class="news">
                        <section class="container popular__container  ">
                                <div class="popular__heading">
                                        Новости
                                </div>
                        </section>

                        <div class="news__box container">
                                <div class=" news__box--item">
                                        <img
                                                class="news__box--item--img"
                                                src="../assets/img/news/news--1.png"
                                                alt="News"
                                        />
                                        <div class="news__box--description">
                                                <span
                                                        class="news__box--description--header"
                                                >
                                                        Ретейлеры предупредили о
                                                        росте цен на одежду к
                                                        лету
                                                </span>
                                                <div
                                                        class="news__box--description--p"
                                                >
                                                        Это связано с ростом
                                                        стоимости материалов, в
                                                        том числе хлопка,
                                                        который с начала этого
                                                        года подорожал на
                                                        30–35%.
                                                </div>
                                        </div>
                                        <div class="data__box">
                                                <a
                                                        href="#"
                                                        class="data__box--btn"
                                                        >Подробно</a
                                                >
                                                <p class="data__box--date">
                                                        24.04.2021
                                                </p>
                                        </div>
                                </div>
                                <div class=" news__box--item">
                                        <img
                                                class="news__box--item--img"
                                                src="../assets/img/news/news--2.png"
                                                alt="News"
                                        />
                                        <div class="news__box--description">
                                                <span
                                                        class="news__box--description--header"
                                                >
                                                        AliExpress сравнил число
                                                        становящихся счастливее
                                                        от покупки сумок и книг
                                                </span>
                                                <div
                                                        class="news__box--description--p"
                                                >
                                                        Покупка сумок и одежды
                                                        делает счастливыми
                                                        больше россиян, чем
                                                        покупка книг. Это
                                                        показал опрос
                                                        «AliExpress Россия»,
                                                        ....
                                                </div>
                                        </div>
                                        <div class="data__box">
                                                <a
                                                        href="#"
                                                        class="data__box--btn"
                                                        >Подробно</a
                                                >
                                                <p class="data__box--date">
                                                        24.04.2021
                                                </p>
                                        </div>
                                </div>

                                <div class=" news__box--item">
                                        <img
                                                class="news__box--item--img"
                                                src="../assets/img/news/news--3.png"
                                                alt="News"
                                        />
                                        <div class="news__box--description">
                                                <span
                                                        class="news__box--description--header"
                                                >
                                                        Прибыль владельца Uniqlo
                                                        выросла на 23% из-за
                                                        продаж домашней одежды
                                                </span>
                                                <div
                                                        class="news__box--description--p"
                                                >
                                                        Операционная прибыль
                                                        компании Fast Retailing,
                                                        владельца японской сети
                                                        одежды Uniqlo, превысила
                                                        уровень прибыли, который
                                                        компания ....
                                                </div>
                                        </div>
                                        <div class="data__box">
                                                <a
                                                        href="#"
                                                        class="data__box--btn"
                                                        >Подробно</a
                                                >
                                                <p class="data__box--date">
                                                        24.04.2021
                                                </p>
                                        </div>
                                </div>
                        </div>
                </div>
        </section>
</template>

<script>
export default {};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap");
</style>
<style lang="scss">
.news {
        &__box {
                display: flex;
                justify-content: space-around;
                align-items: center;
                flex-wrap: wrap;
                padding: 10px;

                &::after {
                        content: "";
                        padding: 10px;
                        flex: 0 1 50%;
                }

                &--item {
                        height: 550px;
                        width: 380px;

                        &--img {
                                height: 300px;
                                width: inherit;
                        }
                }
                &--description {
                        padding: 12px 5px;
                        &--header {
                                font-family: Roboto;
                                font-weight: 500;
                                font-size: 16px;
                                color: #000000;
                                display: block;
                                overflow: hidden;
                                height: 4.7em;
                        }
                        &--p {
                                width: inherit;
                                height: 4.5em;
                                font-size: 14px;
                                color: #666666;
                                overflow: hidden;
                                display: block;
                        }
                }

                .data__box {
                        display: flex;
                        align-items: baseline;
                        justify-content: space-between;
                        &--btn {
                                &,
                                &:link,
                                &:visited {
                                        text-align: center;
                                        border-radius: 5px;
                                        transition: all 0.2s;

                                        width: 104px;
                                        height: 40px;

                                        padding: 10px;
                                        text-decoration: none;
                                        font-family: inherit;
                                        font-weight: 500;
                                        font-size: 14px;
                                        color: rgb(255, 255, 255, 0.9);
                                        box-shadow: 0px 5px 10px
                                                rgba(0, 0, 0, 0.25);

                                        // Change for the <button> element
                                        background-color: #f7931e;
                                        border: none;
                                        cursor: pointer;
                                }

                                @include hover__active--animation;
                        }

                        &--date {
                                font-family: Roboto;
                                font-size: 14px;
                                color: #219ebc;
                                padding-right: 5px;
                        }
                }
        }
}

@media only screen and (max-width: 790px) {
        .news {
                &__box {
                        padding: 8px;

                        &--item {
                                width: 343px;

                                &--img {
                                        height: 275px;
                                }
                        }
                }
        }
}

@media only screen and (max-width: 360px) {
        .news {
                &__box {
                        &--item {
                                height: 500px;
                                width: 280px;

                                &--img {
                                        height: 245px;
                                        width: inherit;
                                }
                        }
                }
        }
}
</style>

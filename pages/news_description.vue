<template>
        <section class="news_description">
                <div class="container">
                        <div class="title-box">
                                <ul>
                                        <li>
                                                <nuxt-link to="/"
                                                        >Главная
                                                        страница</nuxt-link
                                                >
                                                /
                                        </li>
                                        <li>
                                                <nuxt-link to="/rubashki"
                                                        >Новости
                                                        подробно</nuxt-link
                                                >
                                        </li>
                                </ul>
                        </div>
                </div>

                <main class="news__section container">
                        <div class="news__about__box">
                                <div class="news__about--heading">
                                        <h2>
                                                Российская компания Wildberries
                                                планирует выход на рынок
                                                Узбекистана
                                        </h2>
                                </div>

                                <div class="news__about--first--img">
                                        <img
                                                src="../assets/img/news about/4.png"
                                                alt="News image"
                                        />
                                        <span>
                                                08.02.2021
                                        </span>
                                </div>
                                <div class="news__about--txt">
                                        <p>
                                                Стороны обсудили возможное
                                                сотрудничество в сфере
                                                экспортных интернет-продаж
                                                текстильной и швейно-трикотажной
                                                промышленности с производителями
                                                Узбекистана. ТАШКЕНТ, 5 мар -
                                                Sputnik. Российская компания
                                                Wildberries рассматривает рынок
                                                Узбекистана как очень
                                                перспективный, сообщает
                                                Ассоциация "Узтекстиль".
                                                <br />
                                                <br />На днях в Ассоциации
                                                прошла встреча руководства с
                                                представителями российского
                                                онлайн-ритейлера Wildberries,
                                                где узбекская компания была
                                                ознакомлена с действующей
                                                бизнес-моделью, со спецификой
                                                интернет-торговлиВ частности,
                                                стороны обсудили возможное
                                                сотрудничество в сфере
                                                экспортных интернет-продаж
                                                текстильной и швейно-трикотажной
                                                промышленности с производителями
                                                Узбекистана. <br />
                                                <br />
                                                Wilbderries выразили повышенную
                                                заинтересованность входа на
                                                рынок электронной коммерции
                                                Узбекистана, а также проработали
                                                вопрос входа на рынок с
                                                инвестированием своих средств в
                                                экономику страны", - говорится в
                                                сообщении.
                                        </p>
                                </div>
                                <div class="news__about--second">
                                        <div class="news__about--second--first">
                                                <img
                                                        src="../assets/img/news about/1.png"
                                                        alt="News image"
                                                />
                                        </div>
                                        <div
                                                class="news__about--second--second"
                                        >
                                                <div class="img--first">
                                                        <img
                                                                src="../assets/img/news about/2.png"
                                                                alt="News image"
                                                        />
                                                </div>
                                                <div class="img--second">
                                                        <img
                                                                src="../assets/img/news about/3.png"
                                                                alt="News image"
                                                        />
                                                </div>
                                        </div>
                                </div>
                        </div>
                        <div class="news__up__to__date">
                                <h2>
                                        Последние новости
                                </h2>

                                <div class="news__box">
                                        <div class="img">
                                                <img
                                                        src="../assets/img/news about/1.png"
                                                        alt="News image"
                                                />
                                        </div>
                                        <div class="news__box--heading">
                                                <h4>
                                                        AliExpress запустил в
                                                        России интернет-магазин
                                                        "Лоукостер"
                                                </h4>
                                        </div>
                                        <div class="news__box--p">
                                                <p>
                                                        Новый интернет-магазин
                                                        будет рассчитан на
                                                        аудиторию до 25 лет, а
                                                        также на тех, кто хочет
                                                        купить известные бренды
                                                        с доставкой из
                                                        России....
                                                </p>
                                        </div>
                                        <div class="news__box--data">
                                                <button class="news__box--btn">
                                                        Подробно
                                                </button>
                                                <span class="news__box--date">
                                                        09.04.2021</span
                                                >
                                        </div>
                                </div>

                                <div class="news__box">
                                        <div class="img">
                                                <img
                                                        src="../assets/img/news about/4.png"
                                                        alt="News image"
                                                />
                                        </div>
                                        <div class="news__box--heading">
                                                <h4>
                                                        AliExpress запустил в
                                                        России интернет-магазин
                                                        "Лоукостер"
                                                </h4>
                                        </div>
                                        <div class="news__box--p">
                                                <p>
                                                        Новый интернет-магазин
                                                        будет рассчитан на
                                                        аудиторию до 25 лет, а
                                                        также на тех, кто хочет
                                                        купить известные бренды
                                                        с доставкой из
                                                        России....
                                                </p>
                                        </div>
                                        <div class="news__box--data">
                                                <button class="news__box--btn">
                                                        Подробно
                                                </button>
                                                <span class="news__box--date">
                                                        09.04.2021</span
                                                >
                                        </div>
                                </div>
                        </div>
                </main>
        </section>
</template>

<script>
export default {};
</script>

<style lang="scss">
.news__section {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;

        .news__about__box {
                margin-right: 25px;
                flex: 2;
                .news__about--heading {
                        h2 {
                                height: 84px;
                                font-family: Poppins, Roboto, sans-serif;
                                font-weight: 700;
                                font-size: 32px;
                                line-height: 1.3;
                                /* or 42px */

                                text-transform: uppercase;

                                margin-bottom: 20px;
                        }
                }

                .news__about--first--img {
                        position: relative;
                        img {
                                height: auto;
                                width: 100%;
                        }

                        span {
                                position: absolute;
                                top: 40px;
                                left: 40px;

                                padding: 8px;
                                background-color: #374c91;
                                border-radius: 4px;

                                font-family: Poppins, Roboto, sans-serif;
                                font-size: 14px;
                                color: #ffffff;
                        }
                }

                .news__about--txt {
                        margin: 20px 0;
                        p {
                                font-family: Roboto, sans-serif;

                                font-size: 14px;
                                line-height: 1.5;
                                /* or 18px */

                                color: #666666;
                        }
                }

                .news__about--second {
                        display: flex;
                        justify-content: space-between;

                        .news__about--second--first {
                                flex: 1;
                                align-self: stretch;
                                margin-right: 20px;

                                img {
                                        max-width: 100%;
                                        height: 100%;
                                        object-fit: cover;
                                }
                        }

                        .news__about--second--second {
                                flex: 1;
                                display: flex;
                                flex-direction: column;
                                justify-content: space-between;

                                .img--first {
                                        margin-bottom: 20px;
                                        img {
                                                max-width: 100%;
                                                object-fit: cover;
                                        }
                                }

                                .img--second {
                                        img {
                                                max-width: 100%;
                                                object-fit: cover;
                                        }
                                }
                        }
                }
        }

        .news__up__to__date {
                flex: 1;

                h2 {
                }

                .news__box {
                        .img {
                                img {
                                        width: 100%;
                                        height: auto;
                                }
                        }

                        .news__box--heading {
                                h4 {
                                }
                        }

                        .news__box--p {
                                p {
                                }
                        }

                        .news__box--data {
                                .news__box--btn {
                                }

                                .news__box--date {
                                }
                        }
                }
        }
}
</style>

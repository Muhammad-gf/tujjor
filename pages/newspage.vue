<template>
    <div>
        <base-loading v-if="!isGet"></base-loading>
        <div v-else class="container">
            <div class="title-box">
                <ul>
                    <li>
                        <nuxt-link to="/">Главная страница </nuxt-link>
                        /
                    </li>

                    <li>
                        <nuxt-link to="#">Новости </nuxt-link>
                    </li>
                </ul>
            </div>
        </div>

        <div class="news">
            <section
                class="container popular__container news__section__heading "
            >
                <div class="popular__heading">
                    Новости
                </div>
            </section>

            <div class="news__box container">
                <div
                    class=" news__box--item"
                    v-for="(newsItem, index) in newsImage"
                    :key="index"
                >
                    <img
                        class="news__box--item--img"
                        :src="'http://cdn.tujjor.org' + newsItem.file"
                        alt="News"
                    />
                    <div class="news__box--description">
                        <span class="news__box--description--header">
                            {{ newsItem.title.uz }}
                        </span>
                        <div
                            class="news__box--description--p"
                            v-html="newsItem.description.uz"
                        ></div>
                    </div>
                    <div class="data__box">
                        <nuxt-link
                            :to="{
                                name: 'news-id___' + $i18n.locale,
                                params: { id: newsItem.slug }
                            }"
                            class="data__box--btn text-center"
                        >
                            Подробно
                        </nuxt-link>

                        <p class="data__box--date">
                            {{ getDate(newsItem.createdAt) }}
                        </p>
                    </div>
                </div>

                <div class=" news__box--item">
                    <img
                        class="news__box--item--img"
                         src="../assets/img/magazine description/bg.png"
                        alt="News"
                    />
                    <div class="news__box--description">
                        <span class="news__box--description--header"
                            >В AliExpress представили портрет типичного
                            покупателя в регионах
                        </span>
                        <div class="news__box--description--p">
                            Петербуржцы закупаются пляжными сабо, омички —
                            теплыми тапочками, а в Нижнем Новгороде заказывают
                            жилеты с подогревом.
                        </div>
                    </div>
                    <div class="data__box">
                        <a href="#" class="data__box--btn text-center"
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
                          src="../assets/img/magazine description/bg.png"
                        alt="News"
                    />
                    <div class="news__box--description">
                        <span class="news__box--description--header"
                            >Аналитики AliExpress показали типичный облик
                            жителей российских городов
                        </span>
                        <div class="news__box--description--p">
                            В AliExpress проанализировали запросы пользователей
                            из семи городов России и составили портрет их
                            жителей по их предпочтениям в одежде и товарам ...
                        </div>
                    </div>
                    <div class="data__box">
                        <a href="#" class="data__box--btn text-center"
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
                         src="../assets/img/magazine description/bg.png"
                        alt="News"
                    />
                    <div class="news__box--description">
                        <span class="news__box--description--header"
                            >«Почта России» ответила на предложение о сборе за
                            покупки из-за рубежа
                        </span>
                        <div class="news__box--description--p">
                            В «Почте России» прокомментировали предложение
                            ретейлеров заменить пошлины на дорогостоящие посылки
                            из-за рубежа единым сбором в 15%.
                        </div>
                    </div>
                    <div class="data__box">
                        <a href="#" class="data__box--btn text-center"
                            >Подробно</a
                        >
                        <p class="data__box--date">
                            24.04.2021
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <section
            class="news__video__section"
            v-if="newsVideo && newsVideo.length > 0"
        >
            <section class="container popular__container">
                <div class="popular__heading">
                    Видео новости
                </div>
            </section>

            <section class="video__box__container container">
                <div class="video__box--first">
                    <div class="video__box--item">
                        <div class="video__img__container">
                            <video
                                :src="
                                    'http://cdn.tujjor.org' + newsVideo[0].file
                                "
                                controls="controls"
                            ></video>
                        </div>
                        <div class="video__about__box">
                            <div class="video__about--description">
                                <span class="video__about--description--header">
                                    {{ newsVideo[0].title.uz }}
                                </span>
                                <div class="video__about--description--p">
                                    {{ newsVideo[0].description.uz }}
                                </div>
                                <div class="video__about--data__box">
                                    <a
                                        href="#"
                                        class="video__about--data__box--btn text-center"
                                        >Подробно</a
                                    >
                                    <p class="video__about--data__box--date">
                                        {{ getDate(newsVideo[0].createdAt) }}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="video__box--second">
                    <div class="video__box--item">
                        <img
                            class="video__box--item--img"
                            src="../assets/img/magazine description/bg.png"
                            alt="News"
                        />
                        <div class="video__about__box">
                            <div class="video__about--description">
                                <span class="video__about--description--header"
                                    >В топ-10 российских онлайн-магазинов
                                    впервые вошла интернет-аптека
                                </span>
                                <div class="video__about--description--p">
                                    OВ десятку крупнейших интернет-магазинов
                                    России по версии аналитического агентства
                                    Data Insight впервые вошла онлайн-аптека –
                                    apteka.ru. По итогам 2019 г. она поднялась с
                                    13-го на 7-е место.
                                </div>
                                <div class="video__about--data__box">
                                    <a
                                        href="#"
                                        class="video__about--data__box--btn text-center"
                                        >Подробно</a
                                    >
                                    <p class="video__about--data__box--date">
                                        24.04.2021
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="video__box--item">
                        <img
                            class="video__box--item--img"
                              src="../assets/img/magazine description/bg.png"
                            alt="News"
                        />
                        <div class="video__about__box">
                            <div class="video__about--description">
                                <span class="video__about--description--header"
                                    >Глава китайского Alibaba обсудил с Трампом
                                    создание рабочих мест в США
                                </span>
                                <div class="video__about--description--p">
                                    Глава китайской компании Alibaba обсудил с
                                    Дональдом Трампом создание миллиона новых
                                    рабочих мест, ранее китайский интернет-рынок
                                    TaoBao был внесен в черный список за
                                    поддельные товары на своем сайте
                                </div>
                                <div class="video__about--data__box">
                                    <a
                                        href="#"
                                        class="video__about--data__box--btn"
                                        >Подробно</a
                                    >
                                    <p class="video__about--data__box--date">
                                        24.04.2021
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    </div>
</template>

<script>
import BaseLoading from "../components/UI/BaseLoading.vue";

export default {
    head: {
        title: "Новости — Tujjor. Низкие цены и широкий ассортимент!",
        meta: [
            {
                hid: "description",
                name: "description",
                content: "Новости - Tujjor"
            }
        ]
    },

    components: { BaseLoading },
    data() {
        return {
            newsArray: [],
            newsImage: [],
            newsVideo: [],
            isGet: false
        };
    },

    methods: {
        getDate(time) {
            const date = new Date(time);
            const day =
                date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
            const month =
                date.getMonth() + 1 < 10
                    ? "0" + (date.getMonth() + 1)
                    : date.getMonth() + 1;
            const year = date.getFullYear();
            return day + "." + month + "." + year;
        }
    },

    async mounted() {
        this.isGet = false;
        const ip = await this.$axios
            .$get("http://cdn.tujjor.org/api/news/all")
            .then(response => {
                if (response.success) {
                    this.isGet = true;
                    return response;
                } else {
                    throw new Error("Could not save data!");
                }
            })
            .catch(error => {
                // handle error
                console.log(error);
                this.error = error.message;
            });
        this.a;
        this.newsArray = ip.data;
        for (let i = 0; i < this.newsArray.length; i++) {
            if (this.newsArray[i].type === "video") {
                this.newsVideo.push(this.newsArray[i]);
            }
            if (this.newsArray[i].type === "image") {
                this.newsImage.push(this.newsArray[i]);
            }
        }
    }
};
</script>

<style lang="scss">
// //////////////////////
// news section
.news {
    .news__section__heading {
        margin-top: 0;
    }
}

///////////////////////////
// video section
.news__video__section {
    .popular__container {
        margin-top: 0;
    }

    .video__box__container {
        display: flex;
        justify-content: space-between;

        .video__box--first {
            flex-grow: 0;
            flex-basis: 49%;
            margin-right: 5px;

            .video__box--item {
                .video__img__container {
                    video {
                        height: auto;
                        width: 100%;
                    }

                    img {
                        height: auto;
                        width: 100%;
                    }
                }

                .video__about__box {
                    z-index: 6;

                    .video__about--description {
                        &--header {
                            display: inline-block;
                            height: 46px;
                            overflow: hidden;

                            font-family: Roboto;
                            font-size: 18px;
                            line-height: 1.4;
                            font-weight: 500;
                            color: #000;
                        }

                        &--p {
                            display: inline-block;
                            height: 54px;
                            overflow: hidden;

                            margin-top: 8px;
                            color: #666666;
                            font-size: 15px;
                            line-height: 1.3;
                        }

                        .video__about--data__box {
                            display: inline-block;
                            height: 50px;

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
                                    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);

                                    // Change for the <button> element
                                    background-color: #f7931e;
                                    border: none;
                                    cursor: pointer;
                                }

                                @include button__bg--color;
                                @include hover__active--animation;
                            }

                            &--date {
                                margin-top: 20px;
                                font-family: Roboto;
                                font-size: 14px;
                                color: #219ebc;
                                padding-right: 10px;
                            }
                        }
                    }
                }
            }
        }

        .video__box--second {
            flex-grow: 0;
            flex-basis: 49%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: flex-start;

            .video__box--item {
                display: flex;
                justify-content: space-between;
                align-items: flex-start;

                &:not(:last-child) {
                    margin-bottom: 20px;
                }

                img {
                    flex-grow: 0;
                    width: 284px;
                    height: 245px;
                    object-fit: cover;
                    margin-right: 21px;
                }

                .video__about--description {
                    height: 245px;

                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;

                    .video__about--description--header {
                        display: inline-block;
                        height: 72px;
                        overflow: hidden;

                        font-family: Roboto;
                        font-size: 18px;
                        line-height: 1.4;
                        font-weight: 500;
                        color: #000;
                    }

                    .video__about--description--p {
                        display: inline-block;
                        height: 108px;
                        overflow: hidden;

                        margin-top: 8px;
                        color: #666666;
                        font-size: 14px;
                        line-height: 1.3;
                    }

                    .video__about--data__box {
                        display: inline-block;
                        height: 50px;

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
                                box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);

                                // Change for the <button> element
                                background-color: #f7931e;
                                border: none;
                                cursor: pointer;
                            }

                            @include button__bg--color;
                            @include hover__active--animation;
                        }

                        &--date {
                            margin-top: 20px;
                            font-family: Roboto;
                            font-size: 14px;
                            color: #219ebc;
                            padding-right: 10px;
                        }
                    }
                }
            }
        }
    }
}

@media only screen and (max-width: 1100px) {
    .news__video__section {
        .video__box__container {
            flex-direction: column;
            justify-content: space-between;

            .video__box--first {
                flex-basis: 100%;
                margin-bottom: 40px;

                .video__box--item {
                    .video__about__box {
                        .video__about--description {
                            &--header {
                                height: 56px;
                                font-size: 22px;
                            }

                            &--p {
                                height: 66px;
                                font-size: 17px;
                            }
                        }
                    }
                }
            }

            .video__box--second {
                .video__box--item {
                    &:not(:last-child) {
                        margin-bottom: 20px;
                    }

                    img {
                        width: 361px;
                        height: 311px;
                        margin-right: 16px;
                    }

                    .video__about--description {
                        height: 311px;

                        .video__about--description--header {
                            height: 86px;
                            font-size: 22px;
                        }

                        .video__about--description--p {
                            height: 114px;
                            margin-top: 8px;
                            font-size: 17px;
                        }
                    }
                }
            }
        }
    }
}

@media only screen and (max-width: 700px) {
    .news__video__section {
        .video__box__container {
            .video__box--second {
                .video__box--item {
                    img {
                        width: 290px;
                        height: 250px;
                    }

                    .video__about--description {
                        height: 250px;
                    }
                }
            }
        }
    }
}

@media only screen and (max-width: 600px) {
    .news__video__section {
        .video__box__container {
            .video__box--first {
                .video__box--item {
                    .video__about__box {
                        .video__about--description {
                            &--header {
                                height: 40px;
                                font-size: 16px;
                            }

                            &--p {
                                height: 54px;
                                font-size: 14px;
                            }
                        }
                    }
                }
            }

            .video__box--second {
                .video__box--item {
                    img {
                        width: 232px;
                        height: 200px;
                    }

                    .video__about--description {
                        height: 200px;

                        .video__about--description--header {
                            height: 63px;
                            font-size: 16px;
                        }

                        .video__about--description--p {
                            margin-top: 0;
                            height: 54px;
                            font-size: 14px;
                        }
                    }
                }
            }
        }
    }
}

@media only screen and (max-width: 500px) {
    .news__video__section {
        .video__box__container {
            .video__box--first {
                .video__box--item {
                    .video__about__box {
                        .video__about--description {
                            &--header {
                                height: 40px;
                                font-size: 16px;
                            }

                            &--p {
                                height: 54px;
                                font-size: 14px;
                            }

                            .video__about--data__box {
                                height: 25px;
                                align-items: flex-end;

                                &--btn {
                                    &,
                                    &:link,
                                    &:visited {
                                        width: 60px;
                                        height: 23px;
                                        padding: 4px;
                                        font-size: 8px;
                                    }
                                }

                                &--date {
                                    margin-top: 20px;
                                    font-size: 8px;
                                    padding-right: 10px;
                                }
                            }
                        }
                    }
                }
            }

            .video__box--second {
                .video__box--item {
                    img {
                        width: 168px;
                        height: 145px;
                    }

                    .video__about--description {
                        height: 145px;

                        .video__about--description--header {
                            font-size: 11px;
                            height: 41px;
                        }

                        .video__about--description--p {
                            height: 55px;
                            font-size: 10px;
                        }

                        .video__about--data__box {
                            height: 25px;
                            align-items: flex-end;

                            &--btn {
                                &,
                                &:link,
                                &:visited {
                                    width: 60px;
                                    height: 23px;
                                    padding: 4px;
                                    font-size: 8px;
                                }
                            }

                            &--date {
                                margin-top: 20px;
                                font-size: 8px;
                                padding-right: 10px;
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>

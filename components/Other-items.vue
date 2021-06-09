<template>
    <section class="container popular__container">
        <div class="container other__item__banner">
            <!-- <div class="other__item__banner--carousel">
                                <img
                                        class="banner--carousel--img"
                                        src="../assets/img/other/banner-3.png"
                                        alt="Banner photo"
                                />
                        </div> -->
            <div class=" other__item__banner--carousel">
                <b-carousel
                    class="b-carousel"
                    id="carousel-1"
                    v-model="slide"
                    :interval="3000"
                    indicators
                    background="#ababab"
                    style="text-shadow: 1px 1px 2px #333;"
                    @sliding-start="onSlideStart"
                    @sliding-end="onSlideEnd"
                >
                    <!-- Text slides with image -->
                    <b-carousel-slide
                        class="b-carousel-slide"
                        img-src="../assets/img/banner/banner-large.png"
                    ></b-carousel-slide>

                    <!-- Slides with custom text -->
                    <b-carousel-slide
                        class="b-carousel-slide"
                        img-src="https://picsum.photos/1024/480/?image=54"
                    >
                    </b-carousel-slide>

                    <!-- Slides with image only -->
                    <b-carousel-slide
                        class="b-carousel-slide"
                        img-src="https://picsum.photos/1024/480/?image=58"
                    ></b-carousel-slide>

                    <!-- Slide with blank fluid image to maintain slide aspect ratio -->
                </b-carousel>
            </div>

            <div class="other__item__banner--banner--box">
                <div class="other__item__banner--banner--1">
                    <img
                        src="../assets/img/Other/grid-1.png"
                        alt="Other item photo"
                    />
                </div>
                <div class="other__item__banner--banner--2">
                    <img
                        src="../assets/img/Other/grid-2.png"
                        alt="Other item photo"
                    />
                </div>
                <div class="other__item__banner--banner--3">
                    <img
                        src="../assets/img/other/grid-3.png"
                        alt="Other item photo"
                    />
                </div>
            </div>
        </div>
        <div class="popular__item-box">
            <div class="popular__items">
                <img
                    class="popular__items__img"
                    src="../assets/img/Popular/boy-1.png"
                    alt="Popular item photo"
                    type="photo/png"
                />
                <div class="popular__items__desription">
                    <span class="popular__items__desription--name"
                        >Футболки</span
                    >
                    <h4 class="popular__items__desription--categorie">
                        Детская одежда
                    </h4>
                    <span
                        class="popular__items__desription--price popular__items__desription--old--price hidden"
                        >580 000 сум</span
                    >
                    <span class="popular__items__desription--price"
                        >480 000 сум</span
                    >
                </div>
            </div>

            <div class="popular__items">
                <img
                    class="popular__items__img"
                    src="../assets/img/Popular/boy-2.png"
                    alt="Popular item photo"
                    type="photo/png"
                />
                <div class="popular__items__desription">
                    <span class="popular__items__desription--name"
                        >Футболки</span
                    >
                    <h4 class="popular__items__desription--categorie">
                        Мужская кожаная куртка
                    </h4>
                    <span class="popular__items__desription--price"
                        >1 080 000 сум</span
                    >
                </div>
            </div>

            <div class="popular__items">
                <img
                    class="popular__items__img"
                    src="../assets/img/Popular/item-1.png"
                    alt="Popular item photo"
                    type="photo/png"
                />
                <div class="popular__items__desription">
                    <span class="popular__items__desription--name"
                        >Кроссовки</span
                    >
                    <h4 class="popular__items__desription--categorie">
                        для фанатов футбола Ювентуса
                    </h4>
                    <span class="popular__items__desription--price"
                        >1 280 000 сум</span
                    >
                </div>
            </div>

            <div class="popular__items">
                <img
                    class="popular__items__img"
                    src="../assets/img/Popular/boy-3.png"
                    alt="Popular item photo"
                    type="photo/png"
                />
                <div class="popular__items__desription">
                    <span class="popular__items__desription--name"
                        >Рубашки</span
                    >
                    <h4 class="popular__items__desription--categorie">
                        весенная рубашка для мужчин
                    </h4>
                    <span class="popular__items__desription--price"
                        >474 000 сум</span
                    >
                </div>
            </div>

            <div class="popular__items">
                <img
                    class="popular__items__img"
                    src="../assets/img/Popular/woman-1.png"
                    alt="Popular item photo"
                    type="photo/png"
                />
                <div class="popular__items__desription">
                    <span class="popular__items__desription--name">Одежда</span>
                    <h4 class="popular__items__desription--categorie">
                        Новая весенная коллекция для женщин
                    </h4>
                    <span
                        class="popular__items__desription--price popular__items__desription--old--price"
                        >1 480 000 сум</span
                    >
                    <span class="popular__items__desription--price"
                        >1 280 000 сум</span
                    >
                </div>
            </div>

            <div class="popular__items">
                <img
                    class="popular__items__img"
                    src="../assets/img/other/6.png"
                    alt="Popular item photo"
                    type="photo/png"
                />
                <div class="popular__items__desription">
                    <span class="popular__items__desription--name">Одежда</span>
                    <h4 class="popular__items__desription--categorie">
                        Новая весенная коллекция для женщин
                    </h4>
                    <span
                        class="popular__items__desription--price popular__items__desription--old--price"
                        >1 480 000 сум</span
                    >
                    <span class="popular__items__desription--price"
                        >1 280 000 сум</span
                    >
                </div>
            </div>

            <div class="popular__items">
                <img
                    class="popular__items__img"
                    src="../assets/img/other/7.png"
                    alt="Popular item photo"
                    type="photo/png"
                />
                <div class="popular__items__desription">
                    <span class="popular__items__desription--name">Одежда</span>
                    <h4 class="popular__items__desription--categorie">
                        Новая весенная коллекция для женщин
                    </h4>
                    <span
                        class="popular__items__desription--price popular__items__desription--old--price"
                        >1 480 000 сум</span
                    >
                    <span class="popular__items__desription--price"
                        >1 280 000 сум</span
                    >
                </div>
            </div>

            <div class="popular__items">
                <img
                    class="popular__items__img"
                    src="../assets/img/other/8.png"
                    alt="Popular item photo"
                    type="photo/png"
                />
                <div class="popular__items__desription">
                    <span class="popular__items__desription--name">Одежда</span>
                    <h4 class="popular__items__desription--categorie">
                        Новая весенная коллекция для женщин
                    </h4>
                    <span
                        class="popular__items__desription--price popular__items__desription--old--price"
                        >1 480 000 сум</span
                    >
                    <span class="popular__items__desription--price"
                        >1 280 000 сум</span
                    >
                </div>
            </div>

            <div class="popular__items">
                <img
                    class="popular__items__img"
                    src="../assets/img/other/9.png"
                    alt="Popular item photo"
                    type="photo/png"
                />
                <div class="popular__items__desription">
                    <span class="popular__items__desription--name">Одежда</span>
                    <h4 class="popular__items__desription--categorie">
                        Новая весенная коллекция для женщин
                    </h4>
                    <span
                        class="popular__items__desription--price popular__items__desription--old--price"
                        >1 480 000 сум</span
                    >
                    <span class="popular__items__desription--price"
                        >1 280 000 сум</span
                    >
                </div>
            </div>

            <div class="popular__items">
                <img
                    class="popular__items__img"
                    src="../assets/img/other/10.png"
                    alt="Popular item photo"
                    type="photo/png"
                />
                <div class="popular__items__desription">
                    <span class="popular__items__desription--name">Одежда</span>
                    <h4 class="popular__items__desription--categorie">
                        Новая весенная коллекция для женщин
                    </h4>
                    <span
                        class="popular__items__desription--price popular__items__desription--old--price"
                        >1 480 000 сум</span
                    >
                    <span class="popular__items__desription--price"
                        >1 280 000 сум</span
                    >
                </div>
            </div>

            <div class="popular__items">
                <img
                    class="popular__items__img"
                    src="../assets/img/other/11.png"
                    alt="Popular item photo"
                    type="photo/png"
                />
                <div class="popular__items__desription">
                    <span class="popular__items__desription--name">Одежда</span>
                    <h4 class="popular__items__desription--categorie">
                        Новая весенная коллекция для женщин
                    </h4>
                    <span
                        class="popular__items__desription--price popular__items__desription--old--price"
                        >1 480 000 сум</span
                    >
                    <span class="popular__items__desription--price"
                        >1 280 000 сум</span
                    >
                </div>
            </div>

            <div class="popular__items">
                <img
                    class="popular__items__img"
                    src="../assets/img/other/12.png"
                    alt="Popular item photo"
                    type="photo/png"
                />
                <div class="popular__items__desription">
                    <span class="popular__items__desription--name">Одежда</span>
                    <h4 class="popular__items__desription--categorie">
                        Новая весенная коллекция для женщин
                    </h4>
                    <span
                        class="popular__items__desription--price popular__items__desription--old--price"
                        >1 480 000 сум</span
                    >
                    <span class="popular__items__desription--price"
                        >1 280 000 сум</span
                    >
                </div>
            </div>

            <div class="popular__items">
                <img
                    class="popular__items__img"
                    src="../assets/img/other/13.png"
                    alt="Popular item photo"
                    type="photo/png"
                />
                <div class="popular__items__desription">
                    <span class="popular__items__desription--name">Одежда</span>
                    <h4 class="popular__items__desription--categorie">
                        Новая весенная коллекция для женщин
                    </h4>
                    <span
                        class="popular__items__desription--price popular__items__desription--old--price"
                        >1 480 000 сум</span
                    >
                    <span class="popular__items__desription--price"
                        >1 280 000 сум</span
                    >
                </div>
            </div>

            <div class="popular__items">
                <img
                    class="popular__items__img"
                    src="../assets/img/other/14.png"
                    alt="Popular item photo"
                    type="photo/png"
                />
                <div class="popular__items__desription">
                    <span class="popular__items__desription--name">Одежда</span>
                    <h4 class="popular__items__desription--categorie">
                        Новая весенная коллекция для женщин
                    </h4>
                    <span
                        class="popular__items__desription--price popular__items__desription--old--price"
                        >1 480 000 сум</span
                    >
                    <span class="popular__items__desription--price"
                        >1 280 000 сум</span
                    >
                </div>
            </div>

            <div class="popular__items">
                <img
                    class="popular__items__img"
                    src="../assets/img/other/15.png"
                    alt="Popular item photo"
                    type="photo/png"
                />
                <div class="popular__items__desription">
                    <span class="popular__items__desription--name">Одежда</span>
                    <h4 class="popular__items__desription--categorie">
                        Новая весенная коллекция для женщин
                    </h4>
                    <span
                        class="popular__items__desription--price popular__items__desription--old--price"
                        >1 480 000 сум</span
                    >
                    <span class="popular__items__desription--price"
                        >1 280 000 сум</span
                    >
                </div>
            </div>
        </div>

        <a href="#" class="popular__btn btn--animated text-center"
            >Показать ещё</a
        >
    </section>
</template>

<script>
export default {
    data() {
        return {
            slide: 0,
            sliding: null
        };
    },
    methods: {
        onSlideStart(slide) {
            this.sliding = true;
        },
        onSlideEnd(slide) {
            this.sliding = false;
        }
    }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap");
</style>
<style lang="scss">
.other__item__banner {
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    flex-wrap: wrap;
    padding: 5px;
    margin-bottom: 10px;

    &--carousel {
        flex-basis: 49%;
        height: auto;
        margin-right: 9px;

        overflow: hidden;
        border-radius: 5px;

        .b-carousel {
            width: 100% !important;
            height: 100% !important;
            .carousel-inner {
                width: 100% !important;
                height: 100% !important;

                .b-carousel-slide {
                    width: 100% !important;
                    height: 100% !important;
                    img {
                        width: 100% !important;
                        height: 100% !important;
                        object-fit: cover;
                    }
                }
            }
        }
    }
    &--banner--box {
        flex-basis: 49%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        flex-wrap: wrap;
        align-items: flex-start;
    }

    &--banner--1 {
        flex-basis: 100%;
        height: 49%;
        margin-bottom: 1%;
        overflow: hidden;
        border-radius: 5px;
        img {
            width: 100%;
            height: 100%;
        }
    }

    &--banner--2,
    &--banner--3 {
        flex-basis: 49%;
        height: 49%;
        overflow: hidden;
        border-radius: 5px;
        img {
            width: 100%;
            height: 100%;
        }
    }
}

@media only screen and (max-width: 1200px) and (min-width: 765px) {
    .other__item__banner {
        &--banner {
            flex-basis: 30%;
        }
    }
}

@media only screen and (max-width: 543px) {
    .other__item__banner {
        &--carousel {
            flex-basis: 100%;
            height: auto;
            margin-right: 0;
            margin-bottom: 5px;

            .banner--carousel--img {
                width: 100%;
                height: 100%;
            }
        }

        &--banner--box {
            flex-basis: 100%;
        }
    }
}

@media only screen and (max-width: 375px) {
    .other__item__banner {
        &--carousel {
            display: none;
        }
    }
}
</style>

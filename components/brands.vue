<template>
        <section>
                <div class="brands">
                        <section class="container popular__container  ">
                                <div class="popular__heading">
                                        Бренды
                                </div>
                        </section>
                        <!-- <div class="brands__box"> -->
                        <VueSlickCarousel
                                class="brands__box"
                                v-bind="slickOptions"
                        >
                                <div class="img">
                                        <img
                                                src="../assets/img/brands/lg.png"
                                                alt="Brand"
                                        />
                                </div>

                                <div class="img">
                                        <img
                                                src="../assets/img/brands/nike.png"
                                                alt="Brand"
                                        />
                                </div>

                                <div class="img">
                                        <img
                                                src="../assets/img/brands/vector.png"
                                                alt="Brand"
                                        />
                                </div>

                                <div class="img">
                                        <img
                                                src="../assets/img/brands/penti.png"
                                                alt="Brand"
                                        />
                                </div>

                                <div class="img">
                                        <img
                                                src="../assets/img/brands/xiaomi.png"
                                                alt="Brand"
                                        />
                                </div>

                                <div class="img">
                                        <img
                                                src="../assets/img/brands/lg.png"
                                                alt="Brand"
                                        />
                                </div>

                                <div class="img">
                                        <img
                                                src="../assets/img/brands/zara.png"
                                                alt="Brand"
                                        />
                                </div>

                                <div class="img">
                                        <img
                                                src="../assets/img/brands/vector.png"
                                                alt="Brand"
                                        />
                                </div>

                                <div class="img">
                                        <img
                                                src="../assets/img/brands/zara.png"
                                                alt="Brand"
                                        />
                                </div>
                        </VueSlickCarousel>
                        <!-- </div> -->
                </div>
        </section>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
        data() {
                return {
                        slickOptions: {
                                focusOnSelect: true,
                                slidesToScroll: 7,
                                touchThreshold: 5,
                                infinite: true,
                                speed: 500,
                                slidesToShow: 7,
                                responsive: [
                                        {
                                                breakpoint: 1135,
                                                settings: {
                                                        slidesToShow: 6,
                                                        slidesToScroll: 6
                                                }
                                        },

                                        {
                                                breakpoint: 1000,
                                                settings: {
                                                        slidesToShow: 5,
                                                        slidesToScroll: 5
                                                }
                                        },

                                        {
                                                breakpoint: 780,
                                                settings: {
                                                        slidesToShow: 4,
                                                        slidesToScroll: 4
                                                }
                                        }
                                ]
                        }
                };
        },
        name: "MyComponent",
        components: { VueSlickCarousel }
};
</script>

<style lang="scss">
.brands {
        &__box {
                width: 100%;
                height: 95px;
                overflow: hidden;
                display: flex !important;
                align-items: center;

                .img {
                        height: 95px;
                        display: flex !important;
                        justify-content: center;
                        align-items: center;
                        width: auto;
                        margin: 0 auto;

                        img {
                                max-height: 80%;
                                max-width: 80%;
                        }
                }
        }
}

@media only screen and (max-width: 764px) {
        .brands {
                .popular__heading {
                        margin-bottom: 0;
                }
                &__box {
                        width: 100%;
                        height: 80px;

                        .img {
                                height: 80px;
                        }
                }
        }
}

@media only screen and (max-width: 600px) {
        .brands {
                &__box {
                        height: 55px;

                        .img {
                                height: 55px;
                        }
                }
        }
}

@media only screen and (max-width: 600px) {
        .brands {
                &__box {
                        height: 30px;

                        .img {
                                height: 30px;
                        }
                }
        }
}
</style>

<template>
    <section>
        <base-loading v-if="!isGet"></base-loading>
        <section class="container banner__container" v-if="isGet">
            <div class="banner__box">
                <div class="banner__box--large--img">
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

                        <a
                            v-if="$i18n.locale == 'uz'"
                            :href="item.url.uz"
                            v-for="(item, index) in slider"
                            :key="index"
                            class="b-carousel-slide"
                        >
                            <b-carousel-slide
                                :img-src="$cdn + item.image.uz"
                            ></b-carousel-slide>
                        </a>

                        <a
                            v-if="$i18n.locale == 'ru'"
                            :href="item.url.ru"
                            v-for="(item, index) in slider"
                            :key="index"
                            class="b-carousel-slide"
                        >
                            <b-carousel-slide
                                :img-src="$cdn + item.image.ru"
                            ></b-carousel-slide>
                        </a>

                        <!-- Slide with blank fluid image to maintain slide aspect ratio -->
                    </b-carousel>
                </div>
                <!-- <div class="banner__box--large--img">
                <img
                    src="../assets/img/banner/banner-large.png"
                    alt="Banner photo"
                />
            </div> -->
                <div class="banner__box--small--img">
                    <img
                        src="../assets/img/other/banner.png"
                        alt="Banner photo"
                    />
                </div>
            </div>
        </section>
    </section>
</template>

<script>
import BaseLoading from "../components/UI/BaseLoading.vue";

export default {
    components: { BaseLoading },

    data() {
        return {
            isGet: false,
            slider: [],
            slide: 0,
            sliding: null,
            image: ""
        };
    },
    async mounted() {
        let slider = await this.$axios.get("/slider/all").then(res => {
            if (res.success) {
                return res;
            }
            return res;
        });
        this.slider = slider.data.data;
        this.isGet = true;
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

<style lang="scss">
.container {
    .banner__box {
        margin-top: 25px;
        width: 100%;
        // height: 500px;

        display: flex;
        justify-content: center;
        align-items: stretch;
        .carousel-item {
            height: 100%;
        }
        &--large--img {
            height: 403px;
            width: 895px;

            border-radius: 5px;
            overflow: hidden;

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

        &--small--img {
            margin-left: 20px;
            width: 286px;

            border-radius: 5px;
            overflow: hidden;

            img {
                height: 100%;
                width: 100%;
            }
        }
    }
}

@media only screen and (max-width: 1000px) {
    .container {
        .banner__box {
            &--large--img {
                max-height: 370px;
                width: 100%;
            }
            &--small--img {
                display: none;
            }
        }
    }
}

@media only screen and (max-width: 600px) {
    .container {
        .banner__box {
            &--large--img {
                max-height: 300px;
            }
        }
    }
}

@media only screen and (max-width: 550px) {
    .container {
        .banner__box {
            &--large--img {
                max-height: 300px;
            }
        }
    }
}

@media only screen and (max-width: 500px) {
    .container {
        .banner__box {
            &--large--img {
                max-height: 250px;
            }
        }
    }
}

@media only screen and (max-width: 450px) {
    .container {
        .banner__box {
            &--large--img {
                max-height: 220px;
            }
        }
    }
}

@media only screen and (max-width: 500px) {
    .banner__container {
        padding: 0;
        margin: 0;
        .banner__box {
            margin-top: 20px;
            &--large--img {
                border-radius: 0;
                max-height: 140px;
            }
        }
    }
}
</style>

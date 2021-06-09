<template>
    <section>
        <div class="brands">
            <section class="container popular__container  ">
                <div class="popular__heading">
                    Бренды
                </div>
            </section>
            <!-- <div class="brands__box"> -->

            <slick v-if="brand.length > 0" :options="slickOptions">
                <div class="img__box" v-for="item in brand" :key="item._id">
                    <img :src="$store.state.uploads + item.image" alt="Brand" />
                </div>
            </slick>
            <!-- </div> -->
        </div>
    </section>
</template>

<script>
// import VueSlickCarousel from "vue-slick-carousel";
// import "vue-slick-carousel/dist/vue-slick-carousel.css";
// // optional style for arrows & dots
// import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
    data() {
        return {
            brand: [],
            slickOptions: {
                arows: false,
                slidesToShow: 6,
                autoplay: true,
                autoplaySpeed: 500,

                responsive: [
                    {
                        breakpoint: 1000,
                        settings: {
                            slidesToShow: 5
                        }
                    }
                ]
            }
        };
    },

    name: "MyComponent",
    // components: { VueSlickCarousel },

    async mounted() {
        let b = await this.$axios.get("/brand/all");

        this.brand = b.data.data;

        // this.slickOptions.slidesToShow = this.brand.length;
    }
};
</script>

<style lang="scss">
.brands {
    .img__box {
        display: flex !important;
        justify-content: center;
        align-items: center;
        width: 84px !important;
        height: 54px;
        margin: 0 auto;

        img {
            height: 100%;
            width: 100%;
            object-fit: contain;
        }
    }

    .slick-list {
        margin: 0 -15px;
    }
    .slick-slide > div {
        padding: 0 15px;
    }
}

@media only screen and (max-width: 764px) {
    .brands {
        .popular__heading {
            margin-bottom: 0;
        }

        .img__box {
            width: 74px !important;
            height: 47px;
        }
    }
}

@media only screen and (max-width: 600px) {
    .brands {
        .img__box {
            width: 68px !important;
            height: 43px;
        }
    }
}

@media only screen and (max-width: 450px) {
    .brands {
        .img__box {
            width: 52px !important;
            height: 35px;
        }
    }
}

@media only screen and (max-width: 400px) {
    .brands {
        .img__box {
            width: 48px !important;
            height: 30px;
        }
    }
}
</style>

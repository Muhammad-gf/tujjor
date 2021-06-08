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
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
    data() {
        return {
            brand: [],
            slickOptions: {
                arows: false,
                slidesToShow: 7,
                autoplay: true,
                autoplaySpeed: 500,

                responsive: [
                    {
                        breakpoint: 1000,
                        settings: {
                            slidesToShow: 5
                        }
                    },

                    {
                        breakpoint: 764,
                        settings: {
                            slidesToShow: 4
                        }
                    }
                ]
            }
        };
    },

    name: "MyComponent",
    components: { VueSlickCarousel },

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
        width: auto;
        height: 114px;
        margin: 0 auto;

        img {
            height: 100%;
            width: 100%;
            object-fit: contain;
        }
    }
}

@media only screen and (max-width: 764px) {
    .brands {
        .popular__heading {
            margin-bottom: 0;
        }

        .img__box {
            height: 80px;
        }
    }
}

@media only screen and (max-width: 600px) {
    .brands {
        .img__box {
            height: 50px;
        }
    }
}

@media only screen and (max-width: 400px) {
    .brands {
        .img__box {
            height: 40px;
        }
    }
}
</style>

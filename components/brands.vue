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
                <div class="img" v-for="item in brand" :key="item._id">
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
                slidesToShow: 9,
                autoplay: true,
                autoplaySpeed: 500
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
    .img {
        display: flex !important;
        justify-content: center;
        align-items: center;
        width: auto;
        margin: 0 auto;

        img {
            max-width: 80%;
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

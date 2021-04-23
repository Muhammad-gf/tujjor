<template>
        <div class="product-show">
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
                                                        >Рубашки</nuxt-link
                                                >
                                                /
                                        </li>
                                        <li>Базовая рубашка</li>
                                </ul>
                        </div>

                        <h1 class="name_product">Базовая рубашка</h1>

                        <div class="row">
                                <div class="col-md-5">
                                        <div class="image-product">
                                                <div class="top-img">
                                                        <div class="img-view">
                                                                <img
                                                                        src="@/assets/img/p5.png"
                                                                        alt=""
                                                                />
                                                        </div>
                                                </div>
                                                <div class="bottom-img">
                                                        <!-- <Carousel v-bind="slickOptions">
                                <div>3</div>
                                <div>3</div>
                                <div>3</div>
                                <div>3</div>
                                <div>3</div>
                                <div>3</div>
                                <div>3</div>
                            </Carousel> -->
                                                        <Carousel
                                                                v-bind="
                                                                        slickOptions
                                                                "
                                                        >
                                                                <div
                                                                        class="__item"
                                                                >
                                                                        <img
                                                                                src="@/assets/img/p1.png"
                                                                                alt=""
                                                                        />
                                                                </div>
                                                                <div
                                                                        class="__item"
                                                                >
                                                                        <img
                                                                                src="@/assets/img/p2.png"
                                                                                alt=""
                                                                        />
                                                                </div>
                                                                <div
                                                                        class="__item"
                                                                >
                                                                        <img
                                                                                src="@/assets/img/p2.png"
                                                                                alt=""
                                                                        />
                                                                </div>
                                                                <div
                                                                        class="__item"
                                                                >
                                                                        <img
                                                                                src="@/assets/img/p2.png"
                                                                                alt=""
                                                                        />
                                                                </div>
                                                                <div
                                                                        class="__item"
                                                                >
                                                                        <img
                                                                                src="@/assets/img/p2.png"
                                                                                alt=""
                                                                        />
                                                                </div>
                                                                <div
                                                                        class="__item"
                                                                >
                                                                        <img
                                                                                src="@/assets/img/p3.png"
                                                                                alt=""
                                                                        />
                                                                </div>
                                                                <div
                                                                        class="__item"
                                                                >
                                                                        <img
                                                                                src="@/assets/img/p4.png"
                                                                                alt=""
                                                                        />
                                                                </div>
                                                        </Carousel>
                                                </div>
                                        </div>
                                </div>
                                <div class="col-md-7">
                                        <div class="product-info">
                                                <h2>POLO Рубашка</h2>
                                                <div class="row">
                                                        <div class="col-md-6">
                                                                <div
                                                                        class="__price"
                                                                >
                                                                        <h6>
                                                                                Цена:
                                                                        </h6>
                                                                        <b
                                                                                >100
                                                                                000
                                                                                cум</b
                                                                        >
                                                                </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                                <div
                                                                        class="product-count"
                                                                >
                                                                        <h3>
                                                                                Количество:
                                                                        </h3>
                                                                        <div
                                                                                class="count__input"
                                                                        >
                                                                                <button
                                                                                        class="minus"
                                                                                >
                                                                                        -
                                                                                </button>
                                                                                <input
                                                                                        type="text"
                                                                                        value="3"
                                                                                />
                                                                                <button
                                                                                        class="plus"
                                                                                >
                                                                                        +
                                                                                </button>
                                                                        </div>
                                                                </div>
                                                        </div>
                                                </div>
                                                <h4>Цвет</h4>
                                                <div class="select__image">
                                                        <div class="__item">
                                                                <img
                                                                        src="@/assets/img/p4.png"
                                                                        alt=""
                                                                />
                                                        </div>
                                                        <div class="__item">
                                                                <img
                                                                        src="@/assets/img/p4.png"
                                                                        alt=""
                                                                />
                                                        </div>
                                                        <div class="__item">
                                                                <img
                                                                        src="@/assets/img/p4.png"
                                                                        alt=""
                                                                />
                                                        </div>
                                                        <div class="__item">
                                                                <img
                                                                        src="@/assets/img/p4.png"
                                                                        alt=""
                                                                />
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                        </div>
                </div>
        </div>
</template>

<script>
import Carousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
        data() {
                return {
                        slickOptions: {
                                infinite: false,
                                margin: 10,
                                speed: 100,
                                slidesToShow: 4,
                                slidesToScroll: 1,
                                initialSlide: 0,
                                responsive: [
                                        {
                                                breakpoint: 1024,
                                                settings: {
                                                        slidesToShow: 3,
                                                        slidesToScroll: 3,
                                                        infinite: true,
                                                        dots: true
                                                }
                                        },
                                        {
                                                breakpoint: 600,
                                                settings: {
                                                        slidesToShow: 2,
                                                        slidesToScroll: 2,
                                                        initialSlide: 2
                                                }
                                        },
                                        {
                                                breakpoint: 480,
                                                settings: {
                                                        slidesToShow: 1,
                                                        slidesToScroll: 1
                                                }
                                        }
                                ]
                        }
                };
        },
        components: { Carousel }
};
</script>

<style lang="scss" scoped>
.slick-slider {
        margin: 0 -5px;
}
.slick-arrow {
        background-color: red;
        z-index: 3;
        width: 20px;
        height: 20px;
}
div.product-info {
        div.select__image {
                display: flex;
                flex-wrap: wrap;
                .__item {
                        width: 80px;
                        height: 80px;
                        border-radius: 5px;
                        position: relative;
                        margin-right: 10px;
                        overflow: hidden;
                        cursor: pointer;
                        img {
                                position: absolute;
                                width: 100%;
                                top: 50%;
                                left: 50%;
                                transform: translate(-50%, -50%);
                        }
                }
        }
        h3 {
                font-weight: normal;
                font-size: 16px;
                line-height: 100%;
                margin-bottom: 0px;
                color: #000000;
                margin-right: 10px;
        }
        h4 {
                font-weight: bold;
                font-size: 22px;
                line-height: 100%;
                margin-bottom: 16px;
                color: #023047;
        }
        div.product-count {
                display: flex;
                align-items: center;
                margin-bottom: 20px;
                h3 {
                        font-weight: normal;
                        font-size: 16px;
                        line-height: 100%;
                        margin-bottom: 0px;
                        color: #000000;
                        margin-right: 10px;
                }
                div.count__input {
                        display: flex;

                        button {
                                width: 40px;
                                height: 50px;
                                font-size: 34px;
                                border: none;
                                font-weight: bold;
                                display: flex;
                                align-items: center;
                                line-height: 50px;
                                justify-content: center;
                                vertical-align: text-top;
                                padding-bottom: 8px;
                        }
                        input {
                                width: 90px;
                                border: none;
                                border-top: 1px solid #c4c4c4;
                                font-size: 18px;
                                border-bottom: 1px solid #c4c4c4;
                                text-align: center;
                                &:focus {
                                        outline: none;
                                }
                        }
                        .minus {
                                background-color: #ede9e9;
                                color: #333;
                                &:hover {
                                        background-color: #f3f3f3;
                                }
                        }
                        .plus {
                                background-color: #f7931f;
                                color: #fff;
                                &:hover {
                                        background-color: #ffa640;
                                }
                        }
                }
        }
        div.__price {
                padding: 12px 20px;
                background: #ffffff;
                margin-bottom: 20px;
                border: 1px solid #f7931e;
                box-sizing: border-box;
                border-radius: 5px;
                display: flex;
                align-items: center;
                justify-content: center;
                h6 {
                        font-weight: bold;
                        font-size: 20px;
                        line-height: 100%;
                        margin-bottom: 0px;
                        margin-right: 10px;
                        color: #f7931e;
                }
                b {
                        font-weight: bold;
                        font-size: 24px;
                        line-height: 100%;

                        color: #f7931e;
                }
        }
        h2 {
                font-weight: bold;
                font-size: 24px;
                line-height: 100%;
                margin-bottom: 20px;
                color: #023047;
        }
}
h1.name_product {
        font-style: normal;
        font-weight: 500;
        font-size: 48px;
        line-height: 56px;
        color: #f7931f;
}
div.image-product {
        display: flex;
        justify-content: space-between;
        padding-top: 35px;
        flex-wrap: wrap;
        div.bottom-img {
                width: 100%;

                div.__item {
                        width: 100%;
                        height: 100px;
                        position: relative;
                        padding: 0px 5px;
                        overflow: hidden;
                        cursor: pointer;
                        margin-bottom: 10px;
                        img {
                                position: relative;
                                width: 100%;
                                z-index: -1;
                                // top: 50%;
                                // left: 50%;
                                // transform: translate(-50%, -50%);
                        }
                }
        }
        div.top-img {
                width: 100%;
                div.img-view {
                        width: 100%;
                        height: 457px;
                        position: relative;
                        overflow: hidden;
                        img {
                                position: absolute;
                                width: 100%;
                                top: 50%;
                                left: 50%;
                                transform: translate(-50%, -50%);
                                object-fit: cover;
                        }
                }
        }
}
div.title-box {
        padding: 40px 0px;
        ul {
                li {
                        display: inline-block;
                        font-weight: normal;
                        font-size: 15px;
                        line-height: 18px;

                        color: #000000;
                        a {
                                display: inline-block;
                                font-weight: normal;
                                font-size: 15px;
                                line-height: 18px;
                                color: #000000;
                                &:hover {
                                        color: #f7931f;
                                }
                        }
                }
        }
}
</style>

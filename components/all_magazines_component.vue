<template>
        <section class="all_magazine__section">
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
                                                        <nuxt-link
                                                                to="/rubashki"
                                                                >Все
                                                                магазины</nuxt-link
                                                        >
                                                </li>
                                        </ul>
                                </div>
                        </div>
                </div>
                <section
                        class="container popular__container magazin__container"
                >
                        <div class="popular__heading">Все магазины</div>
                        <div class="popular__dropdown__box">
                                <button class="popular__dropdown--btn">
                                        <span>Сортировка по</span>
                                        <img
                                                src="../assets/img/magazines/vector.png"
                                                alt="Vector"
                                        />
                                </button>
                                <div class="popular__dropdown__content">
                                        <a
                                                href="#"
                                                class="popular__dropdown--link"
                                                >По дате</a
                                        >
                                        <a
                                                href="#"
                                                class="popular__dropdown--link"
                                                >По рейтинг</a
                                        >
                                </div>
                        </div>
                </section>

                <div class="magazines__box container">
                        <div class="magazine__item__box">
                                <div class="magazine__item--logo__box">
                                        <div class="magazine__item--logo">
                                                <img
                                                        src="../assets/img/magazines/logo.png"
                                                        alt="Magazine logo"
                                                />
                                        </div>
                                        <div class="magazine__item--rating">
                                                <img
                                                        src="../assets/img/magazines/star.png"
                                                        alt="Star img"
                                                /><span>4</span>
                                        </div>
                                </div>
                                <div class="magazine__item--description">
                                        <span
                                                >Товары из категории Акции и
                                                скидки Товары из
                                                категории....</span
                                        >
                                </div>
                                <div class="magazine__item__img__box">
                                        <div class="magazine__item__img--first">
                                                <img
                                                        src="../assets/img/magazines/img-first.png"
                                                        alt="Item img"
                                                />
                                        </div>
                                        <div
                                                class="magazine__item__img--second"
                                        >
                                                <div
                                                        class="magazine__item__img--second--first"
                                                >
                                                        <img
                                                                src="../assets/img/magazines/img-second.png"
                                                                alt="Item img"
                                                        />
                                                </div>

                                                <div
                                                        class="magazine__item__img--second--second"
                                                >
                                                        <img
                                                                src="../assets/img/magazines/img-second-2.png"
                                                                alt="Item img"
                                                        />
                                                </div>
                                        </div>
                                </div>
                        </div>

                        <div class="magazine__item__box">
                                <div class="magazine__item--logo__box">
                                        <div class="magazine__item--logo">
                                                <img
                                                        src="../assets/img/magazines/logo.png"
                                                        alt="Magazine logo"
                                                />
                                        </div>
                                        <div class="magazine__item--rating">
                                                <img
                                                        src="../assets/img/magazines/star.png"
                                                        alt="Star img"
                                                /><span>4</span>
                                        </div>
                                </div>
                                <div class="magazine__item--description">
                                        <span
                                                >Товары из категории Акции и
                                                скидки Товары из
                                                категории....</span
                                        >
                                </div>
                                <div class="magazine__item__img__box">
                                        <div class="magazine__item__img--first">
                                                <img
                                                        src="../assets/img/magazines/img-first.png"
                                                        alt="Item img"
                                                />
                                        </div>
                                        <div
                                                class="magazine__item__img--second"
                                        >
                                                <div
                                                        class="magazine__item__img--second--first"
                                                >
                                                        <img
                                                                src="../assets/img/magazines/img-second.png"
                                                                alt="Item img"
                                                        />
                                                </div>

                                                <div
                                                        class="magazine__item__img--second--second"
                                                >
                                                        <img
                                                                src="../assets/img/magazines/img-second-2.png"
                                                                alt="Item img"
                                                        />
                                                </div>
                                        </div>
                                </div>
                        </div>

                        <div class="magazine__item__box">
                                <div class="magazine__item--logo__box">
                                        <div class="magazine__item--logo">
                                                <img
                                                        src="../assets/img/magazines/logo.png"
                                                        alt="Magazine logo"
                                                />
                                        </div>
                                        <div class="magazine__item--rating">
                                                <img
                                                        src="../assets/img/magazines/star.png"
                                                        alt="Star img"
                                                /><span>4</span>
                                        </div>
                                </div>
                                <div class="magazine__item--description">
                                        <span
                                                >Товары из категории Акции и
                                                скидки Товары из
                                                категории....</span
                                        >
                                </div>
                                <div class="magazine__item__img__box">
                                        <div class="magazine__item__img--first">
                                                <img
                                                        src="../assets/img/magazines/img-first.png"
                                                        alt="Item img"
                                                />
                                        </div>
                                        <div
                                                class="magazine__item__img--second"
                                        >
                                                <div
                                                        class="magazine__item__img--second--first"
                                                >
                                                        <img
                                                                src="../assets/img/magazines/img-second.png"
                                                                alt="Item img"
                                                        />
                                                </div>

                                                <div
                                                        class="magazine__item__img--second--second"
                                                >
                                                        <img
                                                                src="../assets/img/magazines/img-second-2.png"
                                                                alt="Item img"
                                                        />
                                                </div>
                                        </div>
                                </div>
                        </div>
                </div>
        </section>
</template>
<script>
export default {};
</script>

<style lang="scss">
.all_magazine__section {
        .magazin__container {
                margin-top: 0;
                display: flex;
                justify-content: space-between;
                align-items: baseline;
                .popular__dropdown__box {
                        position: relative;
                        .popular__dropdown--btn {
                                width: 170px;
                                height: 36px;
                                border: 1px solid #f7931e;
                                border-radius: 5px;
                                background-color: transparent;

                                padding: 0 10px;
                                font-family: Roboto;
                                font-weight: 500;
                                font-size: 16px;
                                color: #f7931e;

                                display: flex;
                                justify-content: space-between;
                                align-items: center;

                                &:hover + .popular__dropdown__content {
                                        visibility: visible;
                                        opacity: 1;
                                }
                        }
                        .popular__dropdown__content {
                                position: absolute;
                                left: 0;
                                top: 36px;
                                width: 170px;
                                display: flex;
                                flex-direction: column;
                                justify-content: center;

                                transition: all 0.2s;
                                visibility: hidden;
                                opacity: 0;

                                border-radius: 5px;
                                overflow: hidden;
                                box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
                                .popular__dropdown--link {
                                        color: #f7931e;
                                        background-color: #fcf6f6;
                                        padding: 5px;
                                        text-decoration: none;

                                        &:active,
                                        &:hover {
                                                font-weight: 500;
                                        }
                                }

                                &:hover {
                                        visibility: visible;
                                        opacity: 1;
                                }
                        }
                }
        }

        .magazines__box {
                margin-bottom: 80px;
                display: flex;
                justify-content: space-between;
                align-items: stretch;

                .magazine__item__box {
                        flex-basis: 32.6%;
                        background-color: #f1efed;
                        border-radius: 5px;
                        padding: 15px 15px 10px;

                        display: flex;
                        flex-direction: column;

                        .magazine__item--logo__box {
                                flex-basis: 10%;
                                padding: 5px 0;
                                display: flex;
                                justify-content: space-between;
                                align-items: center;
                                .magazine__item--logo {
                                        img {
                                                height: 100%;
                                                width: auto;
                                        }
                                }

                                .magazine__item--rating {
                                        display: flex;
                                        justify-content: center;
                                        align-items: baseline;
                                        img {
                                                margin: 0 2px;
                                                width: 14px;
                                                height: 14px;
                                        }
                                        span {
                                                font-family: Roboto, sans-serif;
                                                font-weight: 500;
                                                font-size: 16px;
                                                line-height: 16px;
                                                color: #565656;
                                        }
                                }
                        }

                        .magazine__item--description {
                                flex-basis: 12%;

                                padding: 5px 0;

                                // overflow: hidden;
                                // text-overflow: hidden;
                                // overflow: scroll;

                                text-overflow: clip;
                                font-family: Roboto, sans-serif;
                                font-weight: 500;
                                font-size: 14px;
                                line-height: 1.2em;
                                color: #000000;
                        }

                        .magazine__item__img__box {
                                flex-basis: 63%;
                                flex-grow: 1;
                                padding: 5px 0 0;

                                display: flex;
                                justify-content: space-between;

                                .magazine__item__img--first {
                                        flex-basis: 49%;
                                        overflow: hidden;

                                        img {
                                                width: 100%;
                                                height: 100%;
                                        }
                                }

                                .magazine__item__img--second {
                                        flex-basis: 49%;

                                        display: flex;
                                        flex-direction: column;
                                        justify-content: space-between;

                                        .magazine__item__img--second--first {
                                                flex-basis: 48%;
                                                overflow: hidden;

                                                img {
                                                        height: 100%;
                                                        width: 100%;
                                                }
                                        }

                                        .magazine__item__img--second--second {
                                                flex-basis: 48%;
                                                overflow: hidden;
                                                img {
                                                        height: 100%;
                                                        width: 100%;
                                                }
                                        }
                                }
                        }
                }
        }
}

@media only screen and(max-width: 1100px) {
        .all_magazine__section {
                .magazin__container {
                        .popular__heading {
                                font-size: 48px;
                                margin-bottom: 12px;
                                margin-right: 15px;
                        }
                }
                .magazines__box {
                        flex-wrap: wrap;
                        .magazine__item__box {
                                flex-basis: 49%;
                                padding: 9px;
                                margin-bottom: 18px;

                                // .magazine__item--logo__box {
                                //         .magazine__item--logo {
                                //                 img {
                                //                         height: 24px;
                                //                 }
                                //         }

                                //         .magazine__item--rating {
                                //                 img {
                                //                         width: 10px;
                                //                         height: 10px;
                                //                 }
                                //                 span {
                                //                         font-size: 12px;
                                //                 }
                                //         }
                                // }

                                .magazine__item--description {
                                        font-size: 12px;
                                }
                        }
                }
        }
}

@media only screen and(max-width: 550px) {
        .all_magazine__section {
                .magazin__container {
                        flex-wrap: wrap;
                        justify-content: flex-start;

                        .popular__dropdown__box {
                                margin-bottom: 12px;
                        }
                }
                .magazines__box {
                        .magazine__item__box {
                                flex-basis: 99%;
                        }
                }
        }
}
</style>

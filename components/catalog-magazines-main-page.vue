<template>
    <section class="magazines__main__page">
        <section class="container popular__container">
            <div class="popular__heading">Ваши магазины</div>
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
                        >Товары из категории Акции и скидки Товары из
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
                    <div class="magazine__item__img--second">
                        <div class="magazine__item__img--second--first">
                            <img
                                src="../assets/img/magazines/img-second.png"
                                alt="Item img"
                            />
                        </div>

                        <div class="magazine__item__img--second--second">
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
                        >Товары из категории Акции и скидки Товары из
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
                    <div class="magazine__item__img--second">
                        <div class="magazine__item__img--second--first">
                            <img
                                src="../assets/img/magazines/img-second.png"
                                alt="Item img"
                            />
                        </div>

                        <div class="magazine__item__img--second--second">
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
                        />
                        <span>4</span>
                    </div>
                </div>
                <div class="magazine__item--description">
                    Товары из категории Акции и скидки Товары из категории....
                </div>
                <div class="magazine__item__img__box">
                    <div class="magazine__item__img--first">
                        <img
                            src="../assets/img/magazines/img-first.png"
                            alt="Item img"
                        />
                    </div>
                    <div class="magazine__item__img--second">
                        <div class="magazine__item__img--second--first">
                            <img
                                src="../assets/img/magazines/img-second.png"
                                alt="Item img"
                            />
                        </div>

                        <div class="magazine__item__img--second--second">
                            <img
                                src="../assets/img/magazines/img-second-2.png"
                                alt="Item img"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <section class="container popular__container btn__box">
            <a href="#" class="popular__btn text-center">Показать ещё</a>
        </section>
    </section>
</template>

<script>
export default {};
</script>

<style lang="scss">
.magazines__main__page {
    .magazines__box {
        display: flex;
        justify-content: space-between;
        align-items: stretch;

        .magazine__item__box {
            transition: all 0.2s;
            @include hover__active--animation;
            cursor: pointer;

            flex-basis: 32.6%;
            background-color: #f1efed;
            border-radius: 5px;
            padding: 15px;

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
                padding: 5px 0 0;

                display: flex;
                justify-content: space-between;

                .magazine__item__img--first {
                    flex-basis: 49%;

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
                        flex-basis: 49%;

                        img {
                            height: 100%;
                            width: 100%;
                        }
                    }

                    .magazine__item__img--second--second {
                        flex-basis: 49%;
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

@media only screen and(max-width: 768px) {
    .magazines__main__page {
        .magazines__box {
            .magazine__item__box {
                padding: 9px;
                .magazine__item--logo__box {
                    .magazine__item--logo {
                        img {
                            height: 24px;
                        }
                    }

                    .magazine__item--rating {
                        img {
                            width: 10px;
                            height: 10px;
                        }
                        span {
                            font-size: 12px;
                        }
                    }
                }

                .magazine__item--description {
                    font-size: 9px;
                }
            }
        }
    }
}

@media only screen and(max-width: 560px) {
    .magazines__main__page {
        .popular__container {
            margin-top: 40px;
            padding-top: 0;
            padding-bottom: 0;
        }
        .magazines__box {
            flex-wrap: wrap;
            .magazine__item__box {
                margin: 0 0 10px;
                padding: 9px;
                flex-basis: 167px;

                .magazine__item--logo__box {
                    .magazine__item--logo {
                        img {
                            height: 24px;
                        }
                    }

                    .magazine__item--rating {
                        img {
                            width: 10px;
                            height: 10px;
                        }
                        span {
                            font-size: 12px;
                        }
                    }
                }

                .magazine__item--description {
                    font-size: 9px;
                }
            }
        }

        .btn__box {
            margin-top: 30px;
        }
    }
}

@media only screen and(max-width: 370px) {
    .magazines__main__page {
        .magazines__box {
            .magazine__item__box {
                margin: 0 0 6px;
                padding: 7px;
                flex-basis: 140px;

                .magazine__item--description {
                    font-size: 8px;
                }
            }
        }
    }
}
</style>

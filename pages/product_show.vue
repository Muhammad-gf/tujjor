<template>
    <div class="product-show">
        <div class="container">
            <div class="title-box">
                <ul>
                    <li>
                        <nuxt-link to="/">Главная страница</nuxt-link>
                        /
                    </li>
                    <li>
                        <nuxt-link to="/rubashki">Рубашки</nuxt-link>
                        /
                    </li>
                    <li>Базовая рубашка</li>
                </ul>
            </div>

            <h1 class="name_product">Базовая рубашка</h1>

            <div class="row">
                <div class="col-md-12 product__name">
                    <h2>POLO Рубашка</h2>
                </div>

                <div class="col-md-5 col-sm-5">
                    <div class="image-product">
                        <!-- <div class="top-img">
                            <div class="img-view">
                                <img src="@/assets/img/p5.png" alt="" />
                            </div>
                        </div> -->

                        <VueSlickCarousel
                            ref="c1"
                            :asNavFor="$refs.c2"
                            :focusOnSelect="true"
                        >
                            <div class="__item">
                                <img src="@/assets/img/p1.png" alt="" />
                            </div>
                            <div class="__item">
                                <img src="@/assets/img/p2.png" alt="" />
                            </div>
                            <div class="__item">
                                <img src="@/assets/img/p2.png" alt="" />
                            </div>
                            <div class="__item">
                                <img src="@/assets/img/p2.png" alt="" />
                            </div>
                            <div class="__item">
                                <img src="@/assets/img/p2.png" alt="" />
                            </div>
                            <div class="__item">
                                <img src="@/assets/img/p3.png" alt="" />
                            </div>
                            <div class="__item">
                                <img src="@/assets/img/p4.png" alt="" />
                            </div>
                        </VueSlickCarousel>

                        <div class="bottom-img">
                            <VueSlickCarousel
                                ref="c2"
                                :asNavFor="$refs.c1"
                                :slidesToShow="4"
                                :focusOnSelect="true"
                            >
                                <div class="__item">
                                    <img src="@/assets/img/p1.png" alt="" />
                                </div>
                                <div class="__item">
                                    <img src="@/assets/img/p2.png" alt="" />
                                </div>
                                <div class="__item">
                                    <img src="@/assets/img/p2.png" alt="" />
                                </div>
                                <div class="__item">
                                    <img src="@/assets/img/p2.png" alt="" />
                                </div>
                                <div class="__item">
                                    <img src="@/assets/img/p2.png" alt="" />
                                </div>
                                <div class="__item">
                                    <img src="@/assets/img/p3.png" alt="" />
                                </div>
                                <div class="__item">
                                    <img src="@/assets/img/p4.png" alt="" />
                                </div>
                            </VueSlickCarousel>
                        </div>
                    </div>
                </div>

                <div class="col-md-7 col-sm-7">
                    <div class="product-info">
                        <div class="row">
                            <div class="col-md-6  price__col">
                                <div class="__price">
                                    <h6>
                                        Цена:
                                    </h6>
                                    <b>100 000 cум</b>
                                </div>
                            </div>

                            <div class="col-md-6  ">
                                <div class="product-count">
                                    <h3>
                                        Количество:
                                    </h3>
                                    <div class="count__input">
                                        <button class="minus">
                                            -
                                        </button>
                                        <input type="text" value="3" />
                                        <button class="plus">
                                            +
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <h4>Цвет</h4>
                        <div class="select__image">
                            <div class="__item">
                                <img src="@/assets/img/p4.png" alt="" />
                            </div>
                            <div class="__item">
                                <img src="@/assets/img/p4.png" alt="" />
                            </div>
                            <div class="__item">
                                <img src="@/assets/img/p4.png" alt="" />
                            </div>
                            <div class="__item">
                                <img src="@/assets/img/p4.png" alt="" />
                            </div>
                        </div>
                        <h4 class="heading__size">Размер</h4>
                        <div class="select__size">
                            <div>
                                <input
                                    type="radio"
                                    id="xxlarge"
                                    name="product__size"
                                    value="XXL-44"
                                />
                                <label for="xxlarge">XXL-44</label>
                            </div>

                            <div>
                                <input
                                    type="radio"
                                    id="xlarge"
                                    name="product__size"
                                    value="XL-42"
                                />
                                <label for="xlarge">XL-42</label>
                            </div>

                            <div>
                                <input
                                    type="radio"
                                    id="L"
                                    name="product__size"
                                    value="L-40"
                                />
                                <label for="L">L-40</label>
                            </div>

                            <div>
                                <input
                                    type="radio"
                                    id="M"
                                    name="product__size"
                                    value="M-38"
                                />
                                <label for="M">M-38</label>
                            </div>

                            <div>
                                <input
                                    type="radio"
                                    id="S"
                                    name="product__size"
                                    value="S-36"
                                />
                                <label for="S">S-36</label>
                            </div>
                        </div>
                        <div class="row ">
                            <div class="product__info--txt col-md-6 col-sm-6">
                                SKU:
                                <Span>685813</Span>
                            </div>

                            <div class="product__info--txt col-md-6 col-sm-6">
                                Крой:
                                <Span>средняя посадка</Span>
                            </div>

                            <div class="product__info--txt col-md-6 col-sm-6">
                                Посадка:
                                <Span>высокая посадка </Span>
                            </div>

                            <div class="product__info--txt col-md-6 col-sm-6">
                                Состав:
                                <Span>100% хлопок</Span>
                            </div>

                            <div class="product__info--txt col-md-6 col-sm-6">
                                Рейтинг:
                                <Span>100% хлопок</Span>
                            </div>

                            <div class="product__info--txt col-md-6 col-sm-6">
                                В избранное:
                                <Span>100% хлопок</Span>
                            </div>
                        </div>

                        <p class="product__info--description">
                            Рубашка с контрастным дизайном Свитшот из мягкого
                            футера. Довольно свободная модель с заниженной
                            линией плеча. Рельефная трикотажная резинка по
                            горловине, низу рукавов и нижнему краю.
                        </p>

                        <div class="row">
                            <div
                                class="col-md-7 col-sm-8  d-flex justify-content-around justify-content-sm-between"
                            >
                                <a href="#" class="btn btn--buy">
                                    Купить
                                </a>
                                <a href="#" class="btn btn--basket">
                                    В корзину
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-10 product__image__exp">
                    <div class="row">
                        <div class="col-md-12 product__image--img">
                            <img
                                src="../assets/img/product show/exp-1.png"
                                alt="Product img"
                            />
                        </div>

                        <div class="d-flex flex-wrap align-items-stretch">
                            <div
                                class="col-md-5 col-sm-12 product__image--img img--flex"
                            >
                                <img
                                    src="../assets/img/product show/exp-2.png"
                                    alt="Product img"
                                />
                            </div>

                            <div
                                class="col-md-7 col-sm-12 product__image--img img--flex"
                            >
                                <img
                                    src="../assets/img/product show/exp-3.png"
                                    alt="Product img"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script></script>

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
.product-info {
    .select__image {
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
    .product-count {
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
        .count__input {
            display: flex;

            border-radius: 3px;
            overflow: hidden;
            button {
                flex-basis: 20%;
                max-width: 20%;
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
                flex-basis: 50%;
                max-width: 50%;
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
    .__price {
        padding: 12px 20px;
        width: auto !important;
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
.name_product {
    font-style: normal;
    font-weight: 500;
    font-size: 48px;
    line-height: 56px;
    color: #f7931f;
}
.image-product {
    display: flex;
    justify-content: space-between;
    padding-top: 35px;
    flex-wrap: wrap;
    .bottom-img {
        width: 100%;

        .__item {
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
    .top-img {
        width: 100%;
        .img-view {
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
.title-box {
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

.product__name {
    padding-left: 43%;

    h2 {
        font-family: Roboto;
        font-weight: 600;
        font-size: 24px;
        line-height: 100%;
        /* identical to box height, or 24px */
        /* dark blue */
        color: #023047;
        margin-bottom: 15px;
    }
}

.product-info {
    .heading__size {
        margin-top: 20px;
    }

    .select__size {
        font-family: Roboto;
        font-size: 16px;
        font-weight: 500;
        line-height: 100%;
        /* identical to box height, or 16px */
        color: #000000;
        margin-bottom: 5px;
        padding-bottom: 5px;
        border-bottom: 1px solid #e5e5e5;
        div {
            &:not(:last-child) {
                margin-bottom: 5px;
            }
            display: inline-block;
            label {
                margin-right: 30px;
                margin-left: 2px;
            }
        }
    }

    .product__info--txt {
        font-family: Roboto;
        font-weight: 500;
        font-size: 16px;
        line-height: 1.8;
        /* identical to box height, or 16px */
        color: #000000;

        span {
            font-family: Montserrat;
            font-size: 14px;
            line-height: 1.8;
            /* or 18px */
            color: #666666;
        }
    }

    .product__info--description {
        font-family: Montserrat;
        font-size: 14px;
        line-height: 130%;
        /* or 18px */
        color: #666666;

        margin-top: 5px;
        margin-bottom: 0;
        padding: 5px 0 20px;
    }

    .row {
        .btn {
            font-family: Roboto;
            font-weight: 500;
            font-size: 18px;
            line-height: 100%;
            /* identical to box height, or 18px */
            text-align: center;
            color: #ffffff;
        }

        .btn--buy {
            padding: 10px 25px;
            background-color: #003466;
            border-radius: 4px;
        }

        .btn--basket {
            padding: 10px 22px;
            background-color: #f7931e;
            border-radius: 4px;
        }
    }
}

.product__image__exp {
    margin: 80px auto 40px;

    .product__image--img {
        padding: 0 15px;
        img {
            margin-bottom: 40px;
            width: 100%;
            height: auto;
            object-fit: cover;
        }
    }

    .img--flex {
        img {
            height: 100%;
        }
    }
}

@media only screen and (max-width: 952px) {
    .product-info {
        h4 {
            font-size: 18px;
            margin-bottom: 10px;
        }

        .heading__size {
            margin-top: 10px;
        }

        .__price {
            padding: 9px 10px;

            h6 {
                font-size: 16px;
            }
            b {
                font-size: 20px;
            }
        }

        // CLEAR PADDING RIGHT
        .price__col {
            padding-right: 0;
        }

        .product-count {
            h3 {
                font-size: 14px;
            }

            .count__input {
                button {
                    width: 28.33px;
                    height: 35.41px;
                    font-size: 28px;
                }
                .minus {
                    border-top-left-radius: 3px;
                    border-bottom-left-radius: 3px;
                }

                .plus {
                    border-top-right-radius: 3px;
                    border-bottom-right-radius: 3px;
                }

                input {
                    font-size: 15px;
                    max-width: 40%;
                    flex-basis: 40%;
                }
            }
        }

        .select__size {
            div {
                label {
                    margin-right: 20px;
                }
            }
        }

        .product__info--txt {
            font-size: 14px;
            span {
            }
        }

        .product__info--description {
            margin-top: 0;
        }

        .row {
            button,
            .btn--basket,
            .btn--buy {
                font-size: 14px;
                padding: 7px 14px;
            }
        }
    }
}

@media only screen and (max-width: 767px) {
    .product__image__exp {
        .img--flex {
            img {
                height: auto;
            }
        }
    }
}

@media only screen and (max-width: 500px) {
    .product-info {
        .select__size {
            display: flex;
            flex-direction: column;
        }
    }
}
</style>

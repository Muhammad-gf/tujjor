<template>
    <section class="basket">
        <div class="container">
            <div class="title-box">
                <ul>
                    <li>
                        <nuxt-link to="/">Главная страница </nuxt-link>
                        /
                    </li>

                    <li>
                        <nuxt-link to="#">Корзина покупателя </nuxt-link>
                    </li>
                </ul>
            </div>
        </div>

        <main class="basket__container container">
            <div class="basket__heading">
                <h2>Корзина покупателя</h2>
            </div>

            <div class="basket__item__box">
                <div class="basket__item--header">
                    <img src="../../assets/img/basket/1.png" alt="Item image" />
                    <div class="basket__item__description">
                        <h3>POLO рубашка</h3>
                        <p class="p-first">
                            Рубашка с контрастным дизайном
                        </p>
                        <p class="p-second"><span>Размер:</span>XXL - 44</p>
                    </div>
                </div>
                <div class="basket__item--secondary">
                    <div class="basket__item--btn">
                        <span>Количество:</span>
                        <div class="btn__box">
                            <a class="btn--primary" v-on:click="decrease()">
                                _
                            </a>
                            <span> {{ counter }} шт</span>
                            <a class="btn--secondary" v-on:click="increase()">
                                +
                            </a>
                        </div>
                    </div>
                    <div class="basket__item--price">
                        <span>{{ total }} cум </span>
                    </div>
                    <div class="basket__item--color">
                        <span>Цвет:</span>
                        <img
                            src="../../assets/img/basket/color.png"
                            alt="Color image"
                        />
                    </div>
                    <div class="backet__item--activity">
                        <a href="#" class="item__btn btn--submit">
                            Оформить заказ
                        </a>
                        <a href="#" class="item__btn btn--reject">
                            Стереть
                        </a>
                    </div>
                </div>
            </div>

            <div class="basket__item__box">
                <div class="basket__item--header">
                    <img src="../../assets/img/basket/1.png" alt="Item image" />
                    <div class="basket__item__description">
                        <h3>POLO рубашка</h3>
                        <p class="p-first">
                            Рубашка с контрастным дизайном
                        </p>
                        <p class="p-second"><span>Размер:</span>XXL - 44</p>
                    </div>
                </div>
                <div class="basket__item--secondary">
                    <div class="basket__item--btn">
                        <span>Количество:</span>
                        <div class="btn__box">
                            <a class="btn--primary">
                                _
                            </a>
                            <span> 1 шт</span>
                            <a class="btn--secondary">
                                +
                            </a>
                        </div>
                    </div>
                    <div class="basket__item--price">
                        <span>100 000 cум </span>
                    </div>
                    <div class="basket__item--color">
                        <span>Цвет:</span>
                        <img
                            src="../../assets/img/basket/color.png"
                            alt="Color image"
                        />
                    </div>
                    <div class="backet__item--activity">
                        <a href="#" class="item__btn btn--submit">
                            Оформить заказ
                        </a>
                        <a href="#" class="item__btn btn--reject">
                            Стереть
                        </a>
                    </div>
                </div>
            </div>

            <div class="basket__item__box">
                <div class="basket__item--header">
                    <img src="../../assets/img/basket/1.png" alt="Item image" />
                    <div class="basket__item__description">
                        <h3>POLO рубашка</h3>
                        <p class="p-first">
                            Рубашка с контрастным дизайном
                        </p>
                        <p class="p-second"><span>Размер:</span>XXL - 44</p>
                    </div>
                </div>
                <div class="basket__item--secondary">
                    <div class="basket__item--btn">
                        <span>Количество:</span>
                        <div class="btn__box">
                            <a class="btn--primary">
                                _
                            </a>
                            <span> 1 шт</span>
                            <a class="btn--secondary">
                                +
                            </a>
                        </div>
                    </div>
                    <div class="basket__item--price">
                        <span>100 000 cум </span>
                    </div>
                    <div class="basket__item--color">
                        <span>Цвет:</span>
                        <img
                            src="../../assets/img/basket/color.png"
                            alt="Color image"
                        />
                    </div>
                    <div class="backet__item--activity">
                        <a href="#" class="item__btn btn--submit">
                            Оформить заказ
                        </a>
                        <a href="#" class="item__btn btn--reject">
                            Стереть
                        </a>
                    </div>
                </div>
            </div>

            <div class="basket__price">
                <div class="basket__price--total">
                    <span>Общая сумма:</span>
                    <span class="all__price">450 000 cум</span>
                </div>

                <div class="backet__price--activity">
                    <a href="#" class="activity__btn btn--submit">
                        Оформить все заказы
                    </a>
                    <a href="#" class="activity__btn btn--reject">
                        Стереть все заказы
                    </a>
                </div>
            </div>
        </main>
    </section>
</template>

<script>
export default {
    head: {
        title: "Корзина — Tujjor. Низкие цены и широкий ассортимент!",
        meta: [
            {
                hid: "description",
                name: "description",
                content: "Корзина - Tujjor"
            }
        ]
    },
    data() {
        return {
            user: {
                token: this.$auth.strategy.token.get()
            }
        };
    },

    methods: {
        increaseCount() {
            this.counter++;
            this.total = this.counter * 100000;
        },

        decreaseCount() {
            if (this.counter >= 1) this.counter--;
            this.total = this.counter * 100000;
        },

        // update priceFormat
        updatePriceFormat(price) {
            const form = new Intl.NumberFormat("en-US").format(price);
            return form.replaceAll(",", " ");
        },

        updatePrice(price) {}
    },

    async mounted() {}
};
</script>

<style lang="scss">
.basket__container {
    .basket__heading {
        h2 {
            font-family: Roboto, sans-serif;
            font-weight: 500;
            font-size: 48px;
            line-height: 56px;
            color: #f7931f;
        }
        margin-bottom: 40px;
    }

    .basket__item__box {
        margin: 20px 0;
        padding: 20px;
        background: #ffffff;
        border-radius: 5px;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

        font-family: Roboto, sans-serif;

        display: flex;
        justify-content: space-between;

        .basket__item--header {
            flex-basis: 340px;
            flex-grow: 0;
            display: flex;
            margin-right: 100px;

            img {
                margin-right: 18px;
                max-height: 100%;
                border-radius: 3px;
            }

            .basket__item__description {
                h3 {
                    font-family: Roboto;
                    font-weight: 700;
                    font-size: 18px;
                    line-height: 100%;
                    /* or 18px */
                    height: 1em;
                    overflow: hidden;

                    text-transform: uppercase;

                    color: #000000;
                }

                .p-first {
                    font-family: Roboto;
                    font-weight: 500;
                    font-size: 14px;
                    line-height: 100%;
                    /* or 14px */
                    height: 2em;
                    overflow: hidden;

                    color: #000000;

                    margin-bottom: 40px;
                }

                .p-second {
                    font-family: Roboto, sans-serif;
                    font-size: 16px;
                    font-weight: 500;
                    color: #000000;
                    line-height: 100%;
                    /* or 16px */
                    height: 1em;
                    overflow: hidden;

                    display: flex;
                    align-items: center;

                    span {
                        margin-right: 5px;
                        font-family: Roboto, sans-serif;
                        font-weight: 400;
                        font-size: 14px;
                        line-height: 100%;
                        /* identical to box height, or 14px */

                        /* dark blue */

                        color: #023047;
                    }
                }
            }
        }

        .basket__item--secondary {
            flex: 2;
            display: flex;
            flex-flow: row wrap;
            justify-content: space-between;
            align-items: center;

            .basket__item--btn {
                height: 40px;
                display: flex;
                align-items: center;
                margin-bottom: 30px;
                span {
                    font-family: Roboto, sans-serif;
                    font-weight: 400;
                    font-size: 16px;
                    line-height: 100%;
                    /* identical to box height, or 16px */

                    /* dark blue */

                    color: #023047;

                    margin-right: 10px;
                }
                .btn__box {
                    height: 40px;
                    width: 170px;
                    border-radius: 5px;
                    border: 0.854999px solid #c4c4c4;
                    overflow: hidden;

                    display: flex;
                    justify-content: space-between;
                    font-family: Roboto, sans-serif;
                    font-weight: 500;
                    font-size: 15.39px;
                    line-height: 100%;
                    /* or 15px */
                    color: #000000;

                    span {
                        padding-top: 10px;
                    }

                    a {
                        border: none;
                        padding: 2px 12px;
                        font-size: 28px;
                        font-family: Roboto, sans-serif;

                        cursor: pointer;
                        &:hover {
                            opacity: 0.85;
                        }
                    }

                    .btn--primary {
                        background: #ede9e9;
                        color: #023047;
                    }

                    .btn--secondary {
                        background: #f7931e;
                        color: #ffffff;
                        padding-top: 12px;
                    }
                }
            }

            .basket__item--price {
                flex-basis: 400px;
                display: flex;
                justify-content: flex-end;

                margin-bottom: 30px;
                span {
                    font-family: Roboto, sans-serif;
                    font-weight: 600;
                    font-size: 28px;
                    line-height: 100%;
                    /* or 28px */
                    /* asosiy */
                    color: #f7931e;
                }
            }

            .basket__item--color {
                flex-grow: 0;
                span {
                    font-family: Roboto, sans-serif;
                    font-weight: 400;
                    font-size: 16px;
                    line-height: 100%;
                    /* identical to box height, or 16px */
                    /* dark blue */
                    color: #023047;
                    margin-right: 5px;
                }

                img {
                    border-radius: 3px;
                    width: 50px;
                    height: 50px;
                }
            }

            .backet__item--activity {
                .item__btn {
                    &:hover {
                        opacity: 0.85;
                    }

                    padding: 10px 0;
                    font-family: Roboto, sans-serif;
                    font-weight: 500;
                    font-size: 16px;
                    line-height: 100%;
                    /* or 16px */
                    text-align: center;
                    color: #ffffff;

                    border-radius: 5px;
                }

                .btn--submit {
                    background: #f7931e;
                    padding-right: 16px;
                    padding-left: 16px;
                    margin-right: 20px;
                }

                .btn--reject {
                    background: #023047;
                    padding-right: 28px;
                    padding-left: 28px;
                }
            }
        }
    }

    .basket__price {
        display: flex;
        justify-content: space-between;

        margin: 35px 0 80px;
        padding: 35px 0 0;
        border-top: 1px solid #dddddd;

        .basket__price--total {
            span {
                font-family: Roboto, sans-serif;
                font-weight: 500;
                font-size: 28px;
                line-height: 100%;
                color: #000000;
            }

            .all__price {
                margin-left: 10px;
                font-weight: 900;
                color: #f7931e;
            }
        }

        .backet__price--activity {
            .activity__btn {
                &:not(:last-child) {
                    margin-right: 20px;
                }

                transition: all 0.2s;

                &:hover {
                    opacity: 0.85;
                }

                background: #f7931e;
                border-radius: 5px;
                padding: 14px 16px;
                font-family: Roboto, sans-serif;
                font-weight: 500;
                font-size: 16px;
                line-height: 100%;
                /* or 16px */

                text-align: center;

                color: #ffffff;
            }

            .btn--reject {
                background: #023047;
                padding: 14px 12px;
            }
        }
    }
}

@media screen and (max-width: 1200px) {
    .basket__container {
        .basket__item__box {
            .basket__item--header {
                margin-right: 50px;
            }
            .basket__item--secondary {
                .basket__item--btn {
                    flex-basis: 50%;
                }
                .basket__item--price {
                    flex-basis: 40%;
                }
            }
        }
    }
}

@media screen and (max-width: 920px) {
    .basket__container {
        .basket__item__box {
            padding: 14px 18px;
            .basket__item--header {
                margin-right: 15px;
                flex-basis: 270px;

                img {
                    margin-right: 14px;
                }

                .basket__item__description {
                    max-width: 160px;
                    h3 {
                        font-size: 16px;
                    }

                    .p-first {
                        font-size: 12px;
                        height: 2em;
                        overflow: hidden;
                        margin-bottom: 30px;
                    }

                    .p-second {
                        margin-bottom: 0;
                        font-size: 16px;
                        span {
                            font-size: 14px;
                        }
                    }
                }
            }
            .basket__item--secondary {
                .basket__item--btn {
                    height: 35px;
                    margin-bottom: 20px;
                    span {
                        font-size: 14px;
                    }
                    .btn__box {
                        height: 35px;
                        width: 130px;
                        font-size: 14px;

                        span {
                            font-size: 14px;
                            font-weight: 700;
                        }

                        a {
                            padding: 1px 10px;
                            font-size: 24px;
                        }

                        .btn--secondary {
                            padding-top: 9px;
                        }
                    }
                }

                .basket__item--price {
                    margin-bottom: 20px;
                    span {
                        font-size: 20px;
                    }
                }

                .basket__item--color {
                    img {
                        width: 40px;
                        height: 40px;
                    }

                    span {
                        font-size: 14px;
                    }
                }

                .backet__item--activity {
                    .item__btn {
                        padding: 12px 14px;
                        font-size: 14px;
                    }
                }
            }
        }

        .basket__price {
            .basket__price--total {
                flex-basis: auto;
                display: flex;
                justify-content: space-between;
                align-items: center;

                span {
                    font-size: 14px;
                }

                .all__price {
                    font-size: 28px;
                }
            }
        }
    }
}

@media screen and (max-width: 700px) {
    .basket__container {
        .basket__price {
            flex-direction: column;

            .basket__price--total {
                flex-basis: 100%;
            }
            .backet__price--activity {
                display: flex;
                justify-content: space-between;
                .activity__btn {
                    display: inline-block;
                    margin: 20px 0 0;

                    &:not(:last-child) {
                        margin-right: 0;
                    }
                }
            }
        }
    }
}

@media screen and (max-width: 560px) {
    .basket__container {
        .basket__heading {
            margin-bottom: 5px;
            h2 {
                font-size: 32px;
                line-height: 1;
                height: 2em;
            }
        }

        .basket__item__box {
            flex-direction: column;
            margin: 20px 0 0;
            padding: 14px 20px;
            .basket__item--header {
                flex-basis: auto;
                margin-right: 0;
                margin-bottom: 20px;

                img {
                    width: 95px;
                    height: 95px;
                }

                .basket__item__description {
                    max-width: 55%;
                    .p-first {
                        font-size: 14px;
                        margin-bottom: 25px;
                    }
                }
            }

            .basket__item--secondary {
                align-content: center;

                .basket__item--btn {
                    flex-basis: 100%;
                    margin-left: auto;
                    margin-right: auto;
                }

                .backet__item--activity {
                    order: 3;
                    margin: 10px 0 0;
                    flex-basis: 100%;
                    display: flex;
                    justify-content: space-between;
                }
                .basket__item--price {
                    order: 2;
                    margin-bottom: 20px;
                    flex-basis: auto;
                }
                .basket__item--color {
                    order: 1;
                    flex-basis: auto;
                    margin-bottom: 20px;
                }
            }
        }
    }
}
</style>

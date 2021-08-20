<template>
    <section class="checkout__order">
        <div class="container">
            <div class="title-box">
                <ul>
                    <li>
                        <nuxt-link to="/">Главная страница </nuxt-link>
                        /
                    </li>

                    <li>
                        <nuxt-link to="#">Оформить заказ </nuxt-link>
                    </li>
                </ul>
            </div>
        </div>

        <main class="checkout__order__container container">
            <div class="checkout__order__heading">
                <h2>Оформить заказ</h2>
            </div>

            <form v-on:submit.prevent class="checkout__box">
                <div class="person__home">
                    <h4>Укажите ваши данные</h4>

                    <div class="person__home--description">
                        <span>Город</span>
                        <select name="city" id="city">
                            <option value="" disabled selected
                                >Ваш Город</option
                            >
                            <option value="Tashkent">Tashkent</option>
                            <option value="Namangan">Namangan</option>
                            <option value="Farg'ona">Farg'ona</option>
                            <option value="Samarqand">Samarqand</option>
                        </select>
                    </div>

                    <div class="person__home--description">
                        <span>Район</span>

                        <select name="village" id="village">
                            <option value="" disabled selected
                                >Ваш Район</option
                            >
                            <option value="Bekobod">Bekobod</option>
                            <option value="Chinoz">Chinoz</option>
                            <option value="Shayxantaxur">Shayxantaxur</option>
                            <option value="Yakkasaroy">Yakkasaroy</option>
                            <option value="Yunusobod">Yunusobod</option>
                        </select>
                    </div>

                    <div class="person__home--description">
                        <span>Адрес</span>
                        <input
                            type="text"
                            placeholder="Введите адрес"
                            id="Adress"
                            name="Adress"
                        />
                    </div>

                    <div class="person__home--description">
                        <span>Номер</span>
                        <input
                            type="number"
                            placeholder="Ваш номер"
                            id="Number"
                            name="Number"
                        />
                    </div>
                </div>

                <div class="person__checkout">
                    <span>Ваш заказ</span>
                    <div class="span__container">
                        <span>Товары (3)</span>
                        <span class="primary">450 000 cум</span>
                    </div>

                    <div class="span__container">
                        <span>Скидка</span>
                        <span class="secondary">-70 000 cум</span>
                    </div>

                    <div class="span__container">
                        <span>Доставка</span>
                        <span class="tritary">50 000 cум</span>
                    </div>

                    <div class="span__container span__container--last ">
                        <span>Общая сумма:</span>
                        <span class="tertiary">430 000 cум</span>
                    </div>

                    <input
                        type="submit"
                        class="checkout__you__order submit"
                        value="Заказать"
                    />
                </div>
            </form>

            <section class="checkout__order__section">
                <h2 class="header">Radius Заказ №23</h2>
                <div class="checkout__order__item__box">
                    <div class="checkout__order__item--header">
                        <img
                            src="../assets/img/magazine description/bg.png"
                            alt="Item image"
                        />
                        <div class="checkout__order__item__description">
                            <h3>POLO рубашка</h3>
                            <p class="p-first">
                                Рубашка с контрастным дизайном
                            </p>
                            <p class="p-second"><span>Размер:</span>XXL - 44</p>
                        </div>
                    </div>
                    <div class="checkout__order__item--secondary">
                        <div class="checkout__order__item--number">
                            <span>Количество:</span>

                            <span class="number"> 1 шт</span>
                        </div>
                        <div class="checkout__order__item--price">
                            <span>100 000 cум </span>
                        </div>
                        <div class="checkout__order__item--color">
                            <span>Цвет:</span>
                            <img
                                src="../assets/img/magazine description/bg.png"
                                alt="Color image"
                            />
                        </div>
                    </div>
                </div>

                <div class="checkout__order__item__box">
                    <div class="checkout__order__item--header">
                        <img
                            src="../assets/img/magazine description/bg.png"
                            alt="Item image"
                        />
                        <div class="checkout__order__item__description">
                            <h3>POLO рубашка</h3>
                            <p class="p-first">
                                Рубашка с контрастным дизайном
                            </p>
                            <p class="p-second"><span>Размер:</span>XXL - 44</p>
                        </div>
                    </div>
                    <div class="checkout__order__item--secondary">
                        <div class="checkout__order__item--number">
                            <span>Количество:</span>

                            <span class="number"> 1 шт</span>
                        </div>
                        <div class="checkout__order__item--price">
                            <span>200 000 cум </span>
                        </div>
                        <div class="checkout__order__item--color">
                            <span>Цвет:</span>
                            <img
                                src="../assets/img/magazine description/bg.png"
                                alt="Color image"
                            />
                        </div>
                    </div>
                </div>

                <div class="checkout__order__item__box">
                    <div class="checkout__order__item--header">
                        <img
                            src="../assets/img/magazine description/bg.png"
                            alt="Item image"
                        />
                        <div class="checkout__order__item__description">
                            <h3>POLO рубашка</h3>
                            <p class="p-first">
                                Рубашка с контрастным дизайном
                            </p>
                            <p class="p-second"><span>Размер:</span>XXL - 44</p>
                        </div>
                    </div>
                    <div class="checkout__order__item--secondary">
                        <div class="checkout__order__item--number">
                            <span>Количество:</span>

                            <span class="number"> 1 шт</span>
                        </div>
                        <div class="checkout__order__item--price">
                            <span>150 000 cум </span>
                        </div>
                        <div class="checkout__order__item--color">
                            <span>Цвет:</span>
                            <img
                                src="../assets/img/magazine description/bg.png"
                                alt="Color image"
                            />
                        </div>
                    </div>
                </div>
                <div class="checkout__order__price">
                    <div class="checkout__order__price--total">
                        <span>Общая сумма:</span>
                        <span class="all__price">450 000 cум</span>
                    </div>
                </div>
            </section>
        </main>
    </section>
</template>

<script>
export default {
    head: {
        title: "Оформить заказ — Tujjor. Низкие цены и широкий ассортимент!",
        meta: [
            {
                hid: "description",
                name: "description",
                content: "Оформить заказ - Tujjor"
            }
        ]
    }
};
</script>

<style lang="scss">
.checkout__order__container {
    .checkout__order__heading {
        h2 {
            font-family: Roboto, sans-serif;
            font-weight: 500;
            font-size: 48px;
            line-height: 56px;
            color: #f7931f;
        }
        margin-bottom: 40px;
    }

    .checkout__box {
        display: flex;
        justify-content: space-between;

        .person__home {
            flex: 2;
            margin-right: 20px;
            padding: 30px 30px 46px;
            background: #ffffff;
            box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
            border-radius: 5px;

            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;

            h4 {
                margin-bottom: 34px;
                flex-basis: 100%;
                font-family: Montserrat, sans-serif;
                font-weight: bold;
                font-size: 24px;
                line-height: 100%;
                /* identical to box height, or 24px */
                color: #f7931f;
            }

            .person__home--description {
                margin-top: 16px;
                flex-basis: 47%;
                display: flex;
                flex-direction: column;

                span {
                    font-family: Roboto, sans-serif;
                    font-weight: 500;
                    font-size: 16px;
                    line-height: 28px;
                    /* identical to box height, or 168% */
                    color: #000000;
                }

                input,
                select {
                    // border: ;
                    border: 1.16px solid #f7931e;
                    outline: none;
                    background-color: transparent;
                    padding: 8px 12px;
                    border-radius: 5px;

                    /* asosiy */

                    text-align: left;
                    font-family: Roboto, sans-serif;
                    font-weight: normal;
                    font-size: 16px;
                    line-height: 28px;
                    /* identical to box height, or 168% */
                    color: #666666;

                    // To center vector png
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                input::-webkit-outer-spin-button,
                input::-webkit-inner-spin-button {
                    -webkit-appearance: none;
                    margin: 0;
                }

                /* Firefox */
                input[type="number"] {
                    -moz-appearance: textfield;
                }

                select {
                    -webkit-appearance: none;
                    -moz-appearance: none;
                    appearance: none;

                    background-image: url("../assets/img/magazine description/bg.png");
                    background-repeat: no-repeat;
                    background-position: 97% 50%;
                }
            }
        }

        .person__checkout {
            flex: 1;
            background: #ffffff;
            box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
            border-radius: 5px;
            padding: 20px 20px 30px;
            display: flex;
            flex-direction: column;

            span {
                font-family: Roboto;
                font-weight: 500;
                font-size: 22px;
                line-height: 100%;
                /* or 22px */

                color: #023047;
                display: inline-block;
                margin-bottom: 22px;
            }

            .span__container {
                margin-bottom: 12px;
                display: flex;
                justify-content: space-between;

                span {
                    margin-bottom: 0;
                    font-family: Roboto;
                    font-size: 18px;
                    line-height: 100%;
                    /* or 18px */

                    color: #666666;
                }

                .primary {
                    font-family: Roboto;
                    font-weight: 900;
                    font-size: 20px;
                    line-height: 100%;
                    /* or 20px */
                    /* asosiy */

                    color: #f7931e;
                }

                .secondary {
                    font-family: Roboto;
                    font-weight: 900;
                    font-size: 20px;
                    line-height: 100%;
                    /* or 20px */

                    text-align: right;

                    /* Red */

                    color: #eb5757;
                }

                .tritary {
                    font-family: Roboto;
                    font-weight: 900;
                    font-size: 20px;
                    line-height: 100%;
                    /* or 20px */
                    /* Green 2 */
                    color: #27ae60;
                }

                .tertiary {
                    font-family: Roboto;
                    font-weight: 900;
                    font-size: 20px;
                    line-height: 100%;
                    /* or 20px */

                    text-align: right;

                    /* dark blue */

                    color: #023047;
                }

                &--last {
                    margin-top: 10px;
                    padding: 10px 0;
                    border-top: 1px solid #dddddd;
                }
            }

            .checkout__you__order {
                flex-basis: 100%;
                outline: none;
                border: none;

                background: #f7931e;
                /* asosiy */
                box-shadow: 0px 2.32px 11.6px rgba(0, 0, 0, 0.25);
                border-radius: 5px;

                font-family: Roboto;
                font-weight: 500;
                font-size: 16px;
                /* or 147% */
                padding: 18px 0;
                text-align: center;

                color: #fcf6f6;

                &:hover {
                    opacity: 0.85;
                }
            }
        }
    }

    .checkout__order__section {
        padding: 30px 0;

        .header {
            padding-left: 20px;
            font-family: Roboto;
            font-size: 32px;
            font-weight: 500;
            line-height: 100%;
            /* identical to box height, or 32px */
            /* dark blue */

            color: #023047;
        }

        .checkout__order__item__box {
            margin: 20px 15px 0;
            padding: 20px;
            background: #ffffff;
            border-radius: 5px;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

            &:last-child {
                margin-bottom: 70px;
                border-bottom: 1px solid #dddddd;
            }

            font-family: Roboto, sans-serif;
            display: flex;
            justify-content: space-between;

            .checkout__order__item--header {
                flex-basis: 340px;
                flex-grow: 0;
                display: flex;
                margin-right: 100px;

                img {
                    margin-right: 18px;
                    max-height: 100%;
                    border-radius: 3px;
                }

                .checkout__order__item__description {
                    h3 {
                        font-family: Roboto;
                        font-weight: 700;
                        font-size: 18px;
                        line-height: 100%;
                        /* or 18px */

                        text-transform: uppercase;

                        color: #000000;
                    }

                    .p-first {
                        font-family: Roboto;
                        font-weight: 500;
                        font-size: 14px;
                        line-height: 100%;
                        /* or 14px */

                        color: #000000;

                        margin-bottom: 40px;
                    }

                    .p-second {
                        font-family: Roboto, sans-serif;
                        font-size: 16px;
                        line-height: 100%;
                        /* or 16px */
                        font-weight: 500;
                        color: #000000;

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

            .checkout__order__item--secondary {
                flex: 2;
                display: flex;
                flex-flow: row wrap;
                justify-content: space-between;
                align-items: center;

                .checkout__order__item--number {
                    height: 40px;
                    display: flex;
                    align-items: center;
                    margin-bottom: 30px;
                    font-size: 18px;
                    font-weight: 700;
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

                    span.number {
                        font-size: 18px;
                        font-weight: 700;
                    }
                }

                .checkout__order__item--price {
                    flex-basis: 500px;
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

                .checkout__order__item--color {
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
            }
        }

        .checkout__order__price {
            display: flex;
            justify-content: space-between;

            margin-top: 30px;
            padding-top: 30px;
            border-top: 1px solid #dddddd;
            .checkout__order__price--total {
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
        }
    }
}

@media screen and (max-width: 1200px) {
    .checkout__order__container {
        .checkout__order__section {
            .checkout__order__item__box {
                .checkout__order__item--secondary {
                    .checkout__order__item--price {
                        flex-basis: 70%;
                    }
                }
            }
        }
    }
}

@media screen and (max-width: 1045px) {
    .checkout__order__container {
        .checkout__order__section {
            .checkout__order__item__box {
                .checkout__order__item--header {
                    flex-basis: 300px;
                }
                .checkout__order__item--secondary {
                    align-items: baseline;
                    .checkout__order__item--number {
                        flex-basis: 100%;
                    }
                    .checkout__order__item--price {
                        flex-basis: auto;
                        order: 1;
                    }
                }
            }
        }
    }
}

@media screen and (max-width: 873px) {
    .checkout__order__container {
        .checkout__box {
            flex-direction: column;
            align-items: center;

            .person__home {
                margin-right: 0;
                margin-bottom: 20px;
            }

            .person__checkout {
                width: 387px;
            }
        }
    }
}

@media screen and (max-width: 777px) {
    .checkout__order__container {
        .checkout__order__section {
            .checkout__order__item__box {
                .checkout__order__item--header {
                    margin-right: 15px;
                }
            }
        }
    }
}

@media screen and (max-width: 677px) {
    .checkout__order__container {
        .checkout__order__section {
            .checkout__order__item__box {
                flex-direction: column;
                .checkout__order__item--header {
                    flex-basis: auto;
                    margin-right: 0;
                    margin-bottom: 30px;
                }
            }
        }
    }
}

@media screen and (max-width: 544px) {
    .checkout__order__container {
        .checkout__box {
            .person__home {
                width: 100%;
                flex-direction: column;
            }

            .person__checkout {
                width: 100%;
            }
        }
    }
}

@media screen and (max-width: 400px) {
    .checkout__order__container {
        padding-right: 0;
        padding-left: 0;

        .checkout__order__heading {
            padding-right: 15px;
            padding-left: 15px;
            margin-bottom: 30px;
            h2 {
                font-size: 32px;
                line-height: 1.3;
            }
        }

        .checkout__box {
            .person__home {
                padding: 30px 27px;
                margin-bottom: 50px;
                h4 {
                    margin-bottom: 30px;
                }
            }

            .person__checkout {
                padding: 30px 27px;
                margin-bottom: 10px;
            }
        }

        .checkout__order__section {
            padding-right: 15px;
            padding-left: 15px;
            .header {
                padding-left: 0;
                font-size: 24px;
            }

            .checkout__order__item__box {
                flex-direction: column;
                padding: 13px 17px 18px;
                margin: 20px 0 0;
                .checkout__order__item--header {
                    flex-basis: auto;
                    margin-right: 0;
                    margin-bottom: 25px;

                    .checkout__order__item__description {
                        h3 {
                            font-size: 16px;
                        }

                        .p-first {
                            margin-bottom: 27px;
                        }
                        .p-second {
                            font-size: 14px;
                        }
                    }
                }

                .checkout__order__item--secondary {
                    .checkout__order__item--number {
                        margin-bottom: 20px;
                        span,
                        span.number {
                            font-size: 14px;
                        }
                    }
                    .checkout__order__item--price {
                        margin-bottom: 0;
                        span {
                            font-size: 18px;
                        }
                    }
                    .checkout__order__item--color {
                        span {
                            font-size: 14px;
                        }

                        img {
                            width: 40px;
                            height: 40px;
                        }
                    }
                }
            }

            .checkout__order__price {
                .checkout__order__price--total {
                    flex-basis: 100%;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;

                    span {
                        font-size: 16px;
                    }

                    .all__price {
                        font-size: 28px;
                    }
                }
            }
        }
    }
}
</style>

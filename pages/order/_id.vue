<template>
    <section>
        <base-loading v-if="!isGet"></base-loading>
        <section class="checkout__order" v-if="isGet">
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

            <section class="favourite__is__empty" v-if="isGet && noData">
                <section class="container popular__container">
                    <div class="popular__heading">
                        У вас нет продукта для оформления!
                    </div>
                </section>
            </section>

            <main
                class="checkout__order__container container"
                v-if="isGet && !noData"
            >
                <div class="checkout__order__heading">
                    <h2>Оформить заказ</h2>
                </div>

                <form v-on:submit.prevent class="checkout__box">
                    <div class="person__home">
                        <h4>Укажите ваши данные</h4>

                        <div class="person__home--description">
                            <span>Город</span>
                            <select
                                name="region"
                                id="region"
                                v-model="selectedAdress.region"
                                @change="giveCity()"
                            >
                                <option value="" disabled selected
                                    >Ваш Город</option
                                >
                                <option
                                    v-for="region in allRegions"
                                    :key="region._id"
                                    :value="region.name.uz"
                                >
                                    {{ region.name.uz }}</option
                                >
                            </select>
                        </div>

                        <div class="person__home--description">
                            <span>Район</span>

                            <select
                                name="village"
                                id="village"
                                v-model="selectedAdress.district"
                                @change="giveDistrict()"
                            >
                                <option value="" disabled selected
                                    >Ваш Район</option
                                >
                                <option
                                    v-for="district in selectedCityDistricts"
                                    :key="district._id"
                                    :value="district.name.uz"
                                >
                                    {{ district.name.uz }}
                                </option>
                            </select>
                        </div>

                        <div class="person__home--description">
                            <span>Адрес</span>
                            <input
                                type="text"
                                placeholder="Введите адрес"
                                id="Adress"
                                name="Adress"
                                v-model="order.address.address"
                            />
                        </div>

                        <div class="person__home--description">
                            <span>Номер</span>
                            <input
                                type="text"
                                placeholder="Ваш номер"
                                id="Number"
                                name="Number"
                                v-model="order.address.phone"
                            />
                        </div>
                    </div>

                    <div class="person__checkout">
                        <span>Ваш заказ</span>
                        <div class="span__container">
                            <span>Товары ({{ orderAll.products.length }})</span>
                            <span class="primary">
                                {{
                                    !!updatePriceFormat(orderAll.amount)
                                        ? updatePriceFormat(orderAll.amount)
                                        : 0
                                }}
                                cум</span
                            >
                        </div>

                        <div class="span__container">
                            <span>Скидка</span>
                            <span class="secondary"
                                >{{
                                    orderAll.amount.length
                                        ? orderAll.amount.length
                                        : 0
                                }}
                                cум</span
                            >
                        </div>

                        <div class="span__container">
                            <span>Доставка</span>
                            <span class="tritary"
                                >{{
                                    orderAll.amount.length
                                        ? orderAll.amount.length
                                        : 0
                                }}
                                cум</span
                            >
                        </div>

                        <div class="span__container span__container--last ">
                            <span>Общая сумма:</span>
                            <span class="tertiary">
                                {{ updatePriceFormat(orderAll.amount) }} cум
                            </span>
                        </div>

                        <a
                            class="checkout__you__order submit"
                            target="_blank"
                            @click="fetchOrder()"
                        >
                            Заказать
                        </a>
                    </div>
                </form>

                <section class="checkout__order__section">
                    <h2 class="header">Ваш заказ</h2>
                    <div
                        class="checkout__order__item__box"
                        v-for="item in orderAll.products"
                        :key="item.size"
                    >
                        <div class="checkout__order__item--header">
                            <img
                                :src="$store.state.uploads + item.image"
                                alt="Item image"
                            />
                            <div class="checkout__order__item__description">
                                <h3>{{ item.name.uz }}</h3>
                                <p class="p-first">
                                    {{ item.description.uz }}
                                </p>
                                <p class="p-second">
                                    <span>Размер:</span> {{ item.size }}
                                </p>
                            </div>
                        </div>
                        <div class="checkout__order__item--secondary">
                            <div class="checkout__order__item--number">
                                <span>Количество:</span>

                                <span class="number"> {{ item.count }} шт</span>
                            </div>
                            <div class="checkout__order__item--price">
                                <span
                                    >{{ updatePrice(item.amount, item.count) }}
                                    cум
                                </span>
                                <span v-if="''"
                                    >{{ updatePrice(item.amount, item.count) }}
                                    cум
                                </span>
                            </div>
                            <div class="checkout__order__item--color">
                                <span>Цвет:</span>
                                <img
                                    :src="$store.state.uploads + item.color"
                                    alt="Color image"
                                />
                            </div>
                        </div>
                    </div>

                    <div class="checkout__order__price">
                        <div class="checkout__order__price--total">
                            <span>Общая сумма:</span>
                            <span class="all__price"
                                >{{
                                    updatePriceFormat(this.orderAll.amount)
                                }}
                                cум</span
                            >
                        </div>
                    </div>
                </section>
            </main>
        </section>

        <warning-message
            v-if="warningMessage"
            post-title="Пополните пустые поле!"
        >
        </warning-message>

        <warning-message v-if="errorrMessage" post-title="Произошло ошибка!">
        </warning-message>
    </section>
</template>

<script>
import BaseLoading from "../../components/UI/BaseLoading.vue";
import WarningMessage from "../../components/Modals/WarningMessage.vue";
import { mapActions, mapMutations, mapGetters } from "vuex";

export default {
    components: { BaseLoading, WarningMessage },

    head: {
        title: "Оформить заказ — Tujjor. Низкие цены и широкий ассортимент!",
        meta: [
            {
                hid: "description",
                name: "description",
                content: "Оформить заказ - Tujjor"
            }
        ]
    },

    middleware: "auth",

    data() {
        return {
            user: {
                token: this.$auth.strategy.token.get()
            },

            selectedAdress: {
                region: "",
                district: ""
            },

            selectedCityDistricts: [],

            order: {
                address: {
                    region: "",
                    district: "",
                    address: "",
                    phone: ""
                }
            },

            product: "",
            warningMessage: false,
            errorrMessage: false,
            isGet: false,
            noData: false,
            base64Data: ""
        };
    },
    computed: mapGetters([
        "orderAmount",
        "orderAddress",
        "orderProducts",
        "allRegions",
        "allInBasket",
        "orderAll"
    ]),

    methods: {
        ...mapMutations([
            "resetOrderSetts",
            "setRegions",
            "updateOrderAddress"
        ]),
        ...mapActions(["fetchRegion", "fetchBasket", "createOrder"]),

        // select region and find districts depends on in
        giveCity() {
            this.order.address.district = this.selectedAdress.district = "";
            const region = this.selectedAdress.region;
            const result = this.allRegions.filter(arr => {
                return arr.name.uz == region || arr.name.ru == region;
            });
            this.selectedCityDistricts = result[0].districts;
            this.order.address.region = result[0];
            console.log(result);
        },

        giveDistrict() {
            const district = this.selectedAdress.district;
            const result = this.order.address.region.districts.filter(arr => {
                return arr.name.uz === district || arr.name.ru === district;
            });

            this.order.address.district = result[0]._id;
            console.log(result[0]._id);
        },

        collectInfo() {
            console.log(this.order);
        },

        async getProduct() {
            await this.$axios
                .$get("/product/403685-iphone-11-pro")
                .then(response => {
                    if (response.success) {
                        console.log("product", response);
                        this.isGet = true;
                        this.product = response.data[0];
                        this.updateProduct(this.product);
                        console.log(
                            "selected",
                            this.selectedProduct,
                            this.product
                        );
                    } else {
                        throw new Error("Could not save data!");
                    }
                })
                .catch(error => {
                    console.log(error);
                });
        },

        // update priceFormat
        updatePriceFormat(price) {
            const form = new Intl.NumberFormat("en-US").format(price);
            return form.replaceAll(",", " ");
        },

        updatePrice(price, count) {
            const resultPrice = price * count;
            return this.updatePriceFormat(resultPrice);
        },

        // ------------------------------------- go to payment create order ----------------
        // main function
        async fetchOrder() {
            // this.isGet = false;
            this.warningMessage = this.errorrMessage = false;
            const add = {
                region: this.order.address.region._id,
                district: this.order.address.district,
                address: this.order.address.address,
                phone: this.order.address.phone
            };
            await this.updateOrderAddress({ add });
            console.log("order all", this.orderAll, add);
            const amount = this.orderAll.amount;
            const address = this.orderAll.address;
            const products = this.orderAll.products;
            const token = this.user.token;
            console.log(token, amount, address, products);
            console.log("window", window);
            if (
                !!address.address &&
                !!address.district &&
                !!address.phone &&
                !!address.region
            ) {
                const result = await this.createOrder({
                    token,
                    amount,
                    address,
                    products
                });
                console.log("result", result);
                // this.isGet = true;
                if (!!result) {
                    this.base64Data = result.data;
                    const link = this.redirectToPayMe();
                    window.open(link, "_blank");
                } else {
                    // this.isGet = true;
                    this.errorrMessage = true;
                }
            } else {
                // this.isGet = true;
                this.warningMessage = true;
            }
        },
        // go to pay me
        redirectToPayMe() {
            const teene = this.base64Data.amount * 100;
            const str =
                "m=6113b418754e932e68fd87ad;ac.order=" +
                this.base64Data.orderId +
                ";a=" +
                +teene;

            const base64 = btoa(str);
            console.log("base64", base64, str);
            // this.$router.beforeEnter({
            //     location: "https://checkout.paycom.uz/"
            // }),
            // this.$router.push({
            //     // beforeEnter(to, from, next) {
            //     //     // Put the full page URL including the protocol http(s) below
            //     //     // window.location.replace("https://checkout.paycom.uz/");
            //     // },
            //     // location: "https://checkout.paycom.uz/",
            //     location: "https://checkout.paycom.uz/",
            //     path: base64
            // });\
            const link = "https://checkout.paycom.uz/" + base64;
            return link;
            //     this.$router.beforeEnter(to, from, next, {
            // 		        // Put the full page URL including the protocol http(s) below
            // window.location.replace("https://example.com")
            // 	});
        }
    },

    async mounted() {
        console.log("this router", this.$router);
        const token = this.user.token;
        const router = this.$route.params.id;
        if (router === "order-all") {
            const [basket, region] = await Promise.all([
                this.fetchBasket(token),
                this.fetchRegion(token)
            ]);
            console.log("basket", basket, "orderAll", this.orderAll);
            this.isGet = true;
            if (!this.orderAll.amount) this.noData = true;
        }

        if (router !== "order-all") {
            const [basket, region] = await Promise.all([
                this.fetchBasket(token),
                this.fetchRegion(token)
            ]);
            console.log("basket", basket, "orderAll", this.orderAll);
            this.isGet = true;
            if (!this.orderAll.amount) this.noData = true;
        }
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

                    background-image: url("../../assets/img/checkout__order/vector.png");
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

                background-color: #f7931e;
                /* asosiy */
                box-shadow: 0 2.32px 11.6px rgb(0 0 0 / 25%);

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
                    cursor: pointer;
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
                    height: 120px;
                    widows: 120px;
                }

                .checkout__order__item__description {
                    h3 {
                        font-family: Roboto;
                        font-weight: 700;
                        font-size: 18px;
                        line-height: 100%;
                        /* or 18px */
                        overflow: hidden;
                        height: 2.8em;

                        text-transform: uppercase;

                        color: #000000;
                    }

                    .p-first {
                        font-family: Roboto;
                        font-weight: 500;
                        font-size: 14px;
                        line-height: 100%;
                        /* or 14px */
                        height: 1em;
                        overflow: hidden;

                        color: #000000;

                        margin-bottom: 40px;
                    }

                    .p-second {
                        font-family: Roboto, sans-serif;
                        font-size: 16px;
                        line-height: 100%;
                        height: 1em;
                        overflow: hidden;
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
                    margin-bottom: 0;

                    img {
                        height: 95px;
                        width: 95px;
                    }

                    .checkout__order__item__description {
                        h3 {
                            font-size: 16px;
                        }

                        .p-first {
                            margin-bottom: 3px;
                        }
                        .p-second {
                            font-size: 14px;
                        }
                    }
                }

                .checkout__order__item--secondary {
                    .checkout__order__item--number {
                        margin-bottom: 0;
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

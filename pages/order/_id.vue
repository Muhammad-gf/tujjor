<template>
    <section>
        <base-loading v-if="!isGet"></base-loading>
        <section class="checkout__order" v-if="isGet">
            <div class="container">
                <div class="title-box">
                    <ul>
                        <li>
                            <nuxt-link to="/">{{ $t("home") }} </nuxt-link>
                            /
                        </li>

                        <li>
                            <nuxt-link to="#">{{ $t("oformit") }} </nuxt-link>
                        </li>
                    </ul>
                </div>
            </div>

            <section class="favourite__is__empty" v-if="isGet && noData">
                <section class="container popular__container">
                    <div class="popular__heading">
                        {{ $t("noof") }}
                    </div>
                </section>
            </section>

            <main
                class="checkout__order__container container"
                v-if="isGet && !noData"
            >
                <div class="checkout__order__heading">
                    <h2>{{ $t("oformit") }}</h2>
                </div>

                <form v-on:submit.prevent class="checkout__box">
                    <div class="person__home">
                        <h4>{{ $t("danni") }}</h4>

                        <div class="person__home--description">
                            <span>{{ $t("city") }}</span>
                            <select
                                name="region"
                                id="region"
                                v-model="selectedAdress.region"
                                @change="giveCity()"
                            >
                                <option value="" disabled selected>{{
                                    $t("myCity")
                                }}</option>
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
                            <span>{{ $t("ray") }}</span>

                            <select
                                name="village"
                                id="village"
                                v-model="selectedAdress.district"
                                @change="giveDistrict()"
                            >
                                <option value="" disabled selected>{{
                                    $t("myRay")
                                }}</option>
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
                            <span>{{ $t("address") }}</span>
                            <input
                                type="text"
                                :placeholder="$t('addressSecondary')"
                                id="Adress"
                                name="Adress"
                                v-model="order.address.address"
                            />
                        </div>

                        <div class="person__home--description">
                            <span>{{ $t("tel") }}</span>
                            <input
                                type="text"
                                :placeholder="$t('tel')"
                                id="Number"
                                name="Number"
                                v-model="order.address.phone"
                                v-mask="'+998 (##) ###-##-##'"
                            />
                        </div>
                        <div class="person__home--description">
                            <div class="to-home">
                                <label for="tohome">
                                    <input
                                        id="tohome"
                                        type="checkbox"
                                        name=""
                                        v-model="tohome"
                                        @change="changeHome"
                                    />
                                    Uygacha yetkazib berish
                                </label>
                            </div>
                        </div>
                    </div>

                    <div class="person__checkout">
                        <span>{{ $t("vzakaz") }}</span>
                        <div class="span__container">
                            <span
                                >{{ $t("tovar") }} ({{
                                    allProduct.length
                                }})</span
                            >
                            <span class="primary">
                                {{ updatePriceFormat(allPriceProduct) }}
                                {{ $t("sum") }}</span
                            >
                        </div>

                        <div class="span__container">
                            <span>{{ $t("sales") }}</span>
                            <span class="secondary"
                                >{{ updatePriceFormat(allPriceSale) }}
                                {{ $t("sum") }}</span
                            >
                        </div>

                        <div class="span__container">
                            <span>{{ $t("dostavka") }}</span>
                            <span class="tritary"
                                >{{
                                    updatePriceFormat(
                                        delivery * orderProds.length
                                    )
                                }}
                                {{ $t("sum") }}</span
                            >
                        </div>

                        <div class="span__container span__container--last ">
                            <span>{{ $t("allsum") }}:</span>
                            <span class="tertiary">
                                {{ updatePriceFormat(allPricePay) }} cум
                            </span>
                        </div>

                        <a
                            class="checkout__you__order submit"
                            target="_blank"
                            @click="fetchOrder()"
                        >
                            {{ $t("zakazat") }}
                        </a>
                    </div>
                </form>

                <section
                    class="checkout__order__section"
                    v-if="orderProds.length > 0"
                >
                    <h2 class="header">{{ $t("vzakaz") }}</h2>

                    <div
                        class="order-one-shop"
                        v-for="(item, index) in orderProds"
                        :key="index"
                    >
                        <h5>
                            Do'kon: <b>{{ item.name }}</b>
                        </h5>
                        <div
                            class="checkout__order__item__box"
                            v-for="(product, i) in item.products"
                            :key="i"
                        >
                            <div class="checkout__order__item--header">
                                <img
                                    :src="$store.state.uploads + product.image"
                                    alt="Item image"
                                />
                                <div class="checkout__order__item__description">
                                    <h3>{{ product.name[$i18n.locale] }}</h3>
                                    <p class="p-first">
                                        {{ product.description[$i18n.locale] }}
                                    </p>
                                    <p class="p-second">
                                        <span>Размер:</span>
                                        {{ product.size.size }}
                                    </p>
                                </div>
                            </div>
                            <div class="checkout__order__item--secondary">
                                <div class="checkout__order__item--number">
                                    <span>{{ $t("kol") }}:</span>

                                    <span class="number">
                                        {{ product.count }} шт</span
                                    >
                                </div>
                                <div class="checkout__order__item--price">
                                    <span>
                                        {{
                                            updatePriceFormat(
                                                product.size.price *
                                                    product.count
                                            )
                                        }}
                                        {{ $t("sum") }}
                                    </span>
                                </div>
                                <div class="checkout__order__item--color">
                                    <span>{{ $t("color") }}:</span>
                                    <img
                                        :src="
                                            $store.state.uploads +
                                                product.param.image
                                        "
                                        alt="Color image"
                                    />
                                </div>
                            </div>
                        </div>

                        <div class="deliver-bottom" v-if="tohome">
                            <h6>Dostavka</h6>

                            <h3>{{ updatePriceFormat(delivery) }} so'm</h3>
                        </div>
                    </div>

                    <div class="checkout__order__price">
                        <div class="checkout__order__price--total">
                            <span>{{ $t("allsum") }}:</span>
                            <span class="all__price"
                                >{{
                                    updatePriceFormat(
                                        allPriceProduct +
                                            delivery * orderProds.length
                                    )
                                }}
                                {{ $t("sum") }}</span
                            >
                        </div>
                    </div>
                </section>
            </main>
        </section>

        <warning-message
            v-if="warningMessage"
            :post-title="$t('err1')"
        ></warning-message>

        <warning-message v-if="errorrMessage" :post-title="$t('oshibka')">
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
            tohome: false,
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
            base64Data: "",
            orderProds: [],
            delivery: 0
        };
    },
    computed: {
        ...mapGetters([
            "orderAmount",
            "orderAddress",
            "orderProducts",
            "allRegions",
            "allInBasket",
            "orderAll",
            "orderAllProducts",
            "allProduct"
        ]),

        allPriceProduct() {
            let s = 0;
            this.allProduct.forEach(item => {
                s = s + item.size.price * item.count;
            });

            return s;
        },

        allPriceSale() {
            let s = 0;
            this.allProduct.forEach(item => {
                if (item.size.discount) {
                    s = s + (item.size.price - item.size.discount) * item.count;
                }
            });

            return s;
        },

        allPricePay() {
            return (
                this.allPriceProduct -
                this.allPriceSale +
                this.delivery * this.orderProds.length
            );
        }
    },

    methods: {
        changeHome() {
            if (this.tohome) {
                this.delivery = 20000;
            } else {
                this.delivery = 0;
            }
        },
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
        },

        giveDistrict() {
            const district = this.selectedAdress.district;
            const result = this.order.address.region.districts.filter(arr => {
                return arr.name.uz === district || arr.name.ru === district;
            });

            this.order.address.district = result[0]._id;
        },

        async getProduct() {
            await this.$axios
                .$get("/product/403685-iphone-11-pro")
                .then(response => {
                    if (response.success) {
                        this.isGet = true;
                        this.product = response.data[0];
                        this.updateProduct(this.product);
                    } else {
                        throw new Error("Could not save data!");
                    }
                })
                .catch(error => {
                    console.error(error);
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
            this.warningMessage = this.errorrMessage = false;
            const add = {
                region: this.order.address.region._id,
                district: this.order.address.district,
                address: this.order.address.address,
                phone: this.order.address.phone.replace(/[^0-9]/g, "")
            };
            await this.updateOrderAddress({ add });
            const address = this.orderAll.address;

            if (
                !!address.address &&
                !!address.district &&
                !!address.phone &&
                !!address.region
            ) {
                let prod = [];

                this.allProduct.forEach(item => {
                    let price;
                    if (item.size.discount) {
                        price = item.size.discount;
                    } else {
                        price = item.size.price;
                    }

                    prod.push({
                        product: item.product,
                        param: item.param._id,
                        size: item.size._id,
                        count: item.count,
                        amount: price
                    });
                });

                const result = await this.$axios
                    .$post("order/create", {
                        amount: this.allPricePay,
                        address: address,
                        toMyHouse: this.tohome,
                        products: prod
                    })
                    .then(res => {
                        return res;
                    });

                console.log("data", result);

                if (!!result) {
                    this.redirectToPayMe(result);
                } else {
                    this.warningMessage = true;
                }
            } else {
                this.warningMessage = true;
            }
        },
        // go to pay me
        redirectToPayMe(data) {
            const teene = data.data.amount * 100;
            const str = `m=6113b418754e932e68fd87ad;ac.order=${data.data.orderId};a=${teene};c=https://tujjor.org`;

            const base64 = btoa(str);
            console.log("base64", base64, str);

            const link = "https://checkout.paycom.uz/" + base64;

            // create element for iphone problem
            let a = document.createElement("a");
            document.body.appendChild(a);
            a.style = "display:none";
            a.href = link;
            a.target = "_blank";
            a.click();

            // return link;
        }
    },

    async mounted() {
        await this.$store.dispatch("fetchRegion");
        const router = this.$route.params.id;
        if (router == "all") {
            let shopList = [];

            this.allProduct.forEach(item => {
                let shopid = item.shop._id;

                let find = shopList.find(i => i._id == shopid);

                if (!find) {
                    shopList.push(item.shop);
                }
            });

            shopList.forEach(item => {
                let products = this.allProduct.filter(
                    i => item._id == i.shop._id
                );

                this.orderProds.push({
                    name: item.name,
                    products: products
                });
            });

            this.isGet = true;
        }
    }
};
</script>

<style lang="scss">
.to-home {
    label {
        font-size: 16px;
        color: #333;
        display: inline-flex;
        cursor: pointer;
        align-items: center;
        input {
            width: 20px;
            height: 20px;
            margin-right: 10px;
        }
    }
}
.order-one-shop {
    margin-top: 40px;
    // border-top: 2px solid #ccc;
    padding: 15px;
    background-color: rgb(250, 250, 250);
    border-radius: 5px;
    h5 {
        font-size: 16px;
        color: #666;
        b {
            color: #f7931e;
            font-size: 18px;
            margin-left: 10px;
        }
    }

    div.deliver-bottom {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 15px;
        h6 {
            font-size: 16px;
            color: #666;
        }
        h3 {
            color: #f7931e;
            font-size: 18px;
        }
    }
}
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
        align-items: flex-start;

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
        padding: 40px 0px 30px 0;

        .header {
            font-family: Roboto;
            font-size: 32px;
            font-weight: 500;
            line-height: 100%;
            /* identical to box height, or 32px */
            /* dark blue */

            color: #023047;
        }

        .checkout__order__item__box {
            margin: 20px 0px 0;
            padding: 20px;
            background: #ffffff;
            border-radius: 5px;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

            &:last-child {
                // margin-bottom: 70px;
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

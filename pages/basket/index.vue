<template>
    <section>
        <base-loading v-if="!isGet"></base-loading>

        <section class="basket" v-if="isGet">
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

            <section class="favourite__is__empty" v-if="isGet && noData">
                <section class="container popular__container">
                    <div class="popular__heading">
                        У вас нет продукта в корзины!
                    </div>
                </section>
            </section>

            <main class="basket__container container" v-if="isGet && !noData">
                <div class="basket__heading">
                    <h2>Корзина покупателя</h2>
                </div>

                <div
                    class="basket__item__box"
                    v-for="(item, index) in allInBasket"
                    :key="item._id"
                >
                    <div class="basket__item--header">
                        <img
                            :src="$store.state.uploads + item.product.image"
                            alt="Item image"
                        />
                        <div class="basket__item__description">
                            <h3>POLO рубашка</h3>
                            <p class="p-first">
                                Рубашка с контрастным дизайном
                            </p>
                            <p class="p-second">
                                <span>Размер:</span>{{ item.size.size }}
                            </p>
                        </div>
                    </div>
                    <div class="basket__item--secondary">
                        <div class="basket__item--btn">
                            <span>Количество:</span>
                            <div class="btn__box">
                                <a
                                    class="btn--primary"
                                    v-on:click="
                                        decreaseCount(
                                            index,
                                            item.count,
                                            item._id
                                        )
                                    "
                                >
                                    _
                                </a>
                                <span> {{ item.count }} шт</span>
                                <a
                                    class="btn--secondary"
                                    v-on:click="
                                        increaseCount(
                                            index,
                                            item.count,
                                            item._id
                                        )
                                    "
                                >
                                    +
                                </a>
                            </div>
                        </div>
                        <div class="basket__item--price">
                            <span
                                >{{ updatePrice(item.count, item.size.price) }}
                                cум
                            </span>
                        </div>
                        <div class="basket__item--color">
                            <span>Цвет:</span>
                            <img
                                :src="$store.state.uploads + item.param.image"
                                alt="Color image"
                            />
                        </div>
                        <div class="backet__item--activity">
                            <a
                                href="#"
                                class="item__btn btn--submit"
                                @click="goToOrder(item)"
                            >
                                Оформить заказ
                            </a>

                            <a
                                href="#"
                                class="item__btn btn--reject"
                                @click.prevent="
                                    openRemoveModal(item._id, index)
                                "
                            >
                                Стереть
                            </a>
                        </div>
                    </div>
                </div>

                <div class="basket__price">
                    <div class="basket__price--total">
                        <span>Общая сумма:</span>
                        <span class="all__price"
                            >{{ updatePriceAll() }} cум</span
                        >
                    </div>

                    <div class="backet__price--activity">
                        <a
                            href="#"
                            class="activity__btn btn--submit"
                            @click.prevent="orderAllProducts()"
                        >
                            Оформить все заказы
                        </a>
                        <a
                            href="#"
                            class="activity__btn btn--reject"
                            @click.prevent="openRemoveModal('rm/all', 0)"
                        >
                            Стереть все заказы
                        </a>
                    </div>
                </div>
            </main>
        </section>
        <section>
            <!-- modal on deleting -->
            <b-modal
                id="modal-danger"
                v-model="basketObj.removeModal.showModal"
                hide-footer
                hide-header
                centered
                class="b-modal"
            >
                <div v-if="basketObj.removeModal.showContent">
                    <div class="d-block text-center">
                        <h3>
                            Вы хотите удалить этот продукт из корзины???
                        </h3>
                    </div>
                    <b-button
                        class="b-button"
                        variant="warning"
                        block
                        @click="closeRemoveModal()"
                        >Нет</b-button
                    >
                    <b-button
                        class="b-button"
                        variant="danger"
                        block
                        @click="deleteFromBasket()"
                        >Да!</b-button
                    >
                </div>
                <div
                    v-if="basketObj.removeModal.showLoading"
                    class="text-center  d-flex justify-content-center align-items-center loading__spinner"
                >
                    <b-spinner
                        :variant="'warning'"
                        :key="'warning'"
                    ></b-spinner>
                </div>

                <div
                    class="success__block"
                    v-if="basketObj.removeModal.showSuccess"
                >
                    <div class="success__icon">
                        <svg
                            xml:space="preserve"
                            viewBox="0 0 100 100"
                            y="0"
                            x="0"
                            xmlns="http://www.w3.org/2000/svg"
                            id="圖層_1"
                            version="1.1"
                            width="200px"
                            height="200px"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            style="width:100%;height:100%;background-size:initial;background-repeat-y:initial;background-repeat-x:initial;background-position-y:initial;background-position-x:initial;background-origin:initial;background-color:initial;background-clip:initial;background-attachment:initial;animation-play-state:play"
                        >
                            <g
                                class="ldl-scale"
                                style="transform-origin:50% 50%;transform:rotate(0deg) scale(0.8, 0.8);animation-play-state:play"
                            >
                                <circle
                                    stroke-miterlimit="10"
                                    stroke-width="
						5"
                                    stroke="#333"
                                    fill="none"
                                    r="40"
                                    cy="50"
                                    cx="50"
                                    style="stroke:rgb(2, 48, 71);animation-play-state:play"
                                ></circle>
                                <g
                                    style="animation-play-state:play"
                                    class="exl"
                                >
                                    <path
                                        d="M43.7 69.4L25 47.7l3.9-3.9 14.8 12.6 28.6-25.8 2.7 2.7z"
                                        fill="#abbd81"
                                        style="fill:rgb(247, 147, 31);animation-play-state:play"
                                    ></path>
                                </g>
                                <metadata
                                    xmlns:d="https://loading.io/stock/"
                                    style="animation-play-state:play"
                                >
                                    <d:name style="animation-play-state:play"
                                        >ok</d:name
                                    >
                                    <d:tags style="animation-play-state:play"
                                        >ok,confirm,ready,positive,check,right,correct,affirmative,success</d:tags
                                    >
                                    <d:license style="animation-play-state:play"
                                        >by</d:license
                                    >
                                    <d:slug style="animation-play-state:play"
                                        >47ibm8</d:slug
                                    >
                                </metadata>
                            </g>
                            <!-- generated by https://loading.io/ -->
                        </svg>
                    </div>
                </div>
            </b-modal>

            <!-- /////////////////////////////////////////////
            modals on event -->
            <modal-success
                v-if="basketObj.updatedModal"
                post-title="Продукт успешно обновлён!"
            >
            </modal-success>
            <warning-message
                v-if="basketObj.updatedBlockedModal"
                post-title="Количество продукта не может быть меньше одного!"
            ></warning-message>

            <!-- deleted successfully modal -->
            <modal-success
                v-show="basketObj.removeModal.deletedSuccess"
                post-title="Продукт успешно удалён из корзины!"
            >
            </modal-success>
        </section>
    </section>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";

import ModalSuccess from "../../components/Modals/SuccessModal.vue";
import WarningMessage from "../../components/Modals/WarningMessage.vue";
import BaseLoading from "../../components/UI/BaseLoading.vue";

export default {
    components: { ModalSuccess, WarningMessage, BaseLoading },

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
            },

            basketObj: {
                updatedModal: false,
                updatedBlockedModal: false,
                removeModal: {
                    showModal: false,
                    showContent: false,
                    showLoading: false,
                    showSuccess: false,
                    deletedSuccess: false
                },

                removeObject: {
                    id: null,
                    index: null
                }
            },

            isGet: false,
            noData: false
        };
    },

    computed: mapGetters(["allInBasket", "countBasket", "orderAll"]),

    methods: {
        ...mapActions(["fetchBasket", "fetchCounBasket", "updateBasketCount"]),
        ...mapMutations([
            "changeCountItem",
            "updateOrder",
            "updateOrderProduct"
        ]),
        // --------------------- modal settings --------------------------
        resetAllModals() {
            this.basketObj.updatedModal = false;
            this.basketObj.updatedBlockedModal = false;
            this.basketObj.removeModal.showModal = this.basketObj.removeModal.showContent = this.basketObj.removeModal.showLoading = this.basketObj.removeModal.showSuccess = false;
        },

        // show loading on start of deleting
        deleteStarted() {
            this.basketObj.removeModal.showContent = false;
            this.basketObj.removeModal.deletedSuccess = false;
            this.basketObj.removeModal.showLoading = true;
        },

        // show succes on the end of deleting
        deleteEnded() {
            this.basketObj.removeModal.showLoading = false;
            this.basketObj.removeModal.showSuccess = true;
            this.basketObj.removeModal.deletedSuccess = true;
            setTimeout(() => {
                this.basketObj.removeModal.showModal = false;
            }, 1000);
        },

        async increaseCount(index, resCount, id) {
            this.resetAllModals();

            const count = resCount + 1;
            const token = this.user.token;

            this.changeCountItem({ index, count });
            await this.updateBasketCount({ token, id, count });
            this.basketObj.updatedModal = true;

            console.log(this.allInBasket[index]);
        },

        async decreaseCount(index, resCount, id) {
            this.resetAllModals();

            if (resCount > 1) {
                const count = resCount - 1;
                const token = this.user.token;

                this.changeCountItem({ index, count });
                await this.updateBasketCount({ token, id, count });
                this.basketObj.updatedModal = true;
            } else {
                // this.basketObj.updatedBlockedModal = true;
                this.blockModal = true;
            }

            console.log(this.allInBasket[index]);
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

        updatePriceAll() {
            let amount = 0;
            this.allInBasket.forEach(item => {
                amount += item.count * item.size.price;
            });
            return this.updatePriceFormat(amount);
        },

        // --------------------------------- remove settings --------------------------------
        closeRemoveModal() {
            this.basketObj.removeModal.showModal = false;
        },

        openRemoveModal(id, index) {
            this.resetAllModals();

            this.basketObj.removeModal.showModal = true;
            this.basketObj.removeModal.showContent = true;

            this.basketObj.removeObject.id = id;
            this.basketObj.removeObject.index = index;
        },

        // main function for deleting
        async deleteFromBasket(
            token = this.user.token,
            id = this.basketObj.removeObject.id
        ) {
            this.deleteStarted();

            await this.$axios
                .$delete("basket/" + id, {
                    headers: {
                        token: token
                    }
                })
                .then(response => {
                    if (response.success) {
                        this.deleteEnded();
                        console.log(response);

                        return response;
                    } else {
                        throw new Error("Could not save data!");
                    }
                })
                .catch(error => console.error(error));

            const response = await this.fetchBasket(token);
            if (response.data.length === 0) this.noData = true;

            // this.fetchCounBasket(token)
        },

        // -------------------------------- order settings -------------------------
        goToOrder(item) {
            const products = [
                {
                    productId: item.product._id,
                    paramId: item.param._id,
                    sizeId: item.size._id,
                    shop: item.product.shop._id,
                    amount: item.size.price,
                    size: item.size.size,
                    count: item.count,
                    color: item.param.image,
                    image: item.product.image,
                    name: {
                        uz: item.product.name.uz,
                        ru: item.product.name.ru
                    },
                    description: {
                        uz: item.product.description.uz,
                        ru: item.product.description.ru
                    }
                }
            ];
            const amount = item.count * item.size.price;

            this.updateOrderProduct({ products, amount });
            console.log(this.orderAll);

            this.$router.push({
                name: "order-id",
                params: { id: item.product.slug }
            });
        },

        orderAllProducts() {
            const products = [];
            let amount = 0;
            this.allInBasket.forEach(item => {
                console.log("item", item);

                const obj = {
                    productId: item.product._id,
                    paramId: item.param._id,
                    sizeId: item.size._id,
                    shop: item.product.shop._id,
                    amount: item.size.price,
                    size: item.size.size,
                    count: item.count,
                    color: item.param.image,
                    image: item.product.image,
                    name: {
                        uz: item.product.name.uz,
                        ru: item.product.name.ru
                    },
                    description: {
                        uz: item.product.description.uz,
                        ru: item.product.description.ru
                    }
                };

                amount += item.count * item.size.price;

                products.push(obj);
            });

            console.log("obj", products, amount);

            this.updateOrderProduct({ products, amount });
            console.log(this.orderAll);

            this.$router.push({
                name: "order-id",
                params: { id: "order-all" }
            });
        }
    },

    async mounted(token = this.user.token) {
        const res = await this.fetchBasket(token);
        console.log(res);
        if (res.success) {
            this.isGet = true;
        }
        if (res.data.length === 0) {
            this.noData = true;
        }
    }
};
</script>

<style lang="scss">
.favourite__is__empty {
    .popular__container {
        height: 50vh;
        display: flex;
        justify-content: center;
        align-items: center;
        .popular__heading {
            transform: translateY(-5vh);
        }
    }
}

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
                width: 120px;
                height: 120px;
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

#modal-danger___BV_modal_body_ {
    .loading__spinner {
        min-height: 80px;
    }

    .success__block {
        min-height: 80px;
        width: 100%;
        z-index: 9999;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;

        .success__icon {
            max-width: 80%;
            width: 80px;
            animation: scaleIcon 1.3s infinite linear forwards;
            color: #155724;
            border-color: #c3e6cb;
            border-radius: 4px;
            padding: 3px 8px;

            display: flex;

            justify-content: center;
            align-items: center;
            overflow: hidden;
        }
    }

    @keyframes scaleIcon {
        0% {
            transform: scale(1);
        }
        25% {
            transform: scale(0.9);
        }
        50% {
            transform: scale(1);
        }
        75% {
            transform: scale(1.08);
        }
        100% {
            transform: scale(1);
        }
    }

    // --------------------
    div > h3 {
        font-size: 20px;
    }
    button {
        font-size: 12px;
    }
    button:first-of-type {
        margin-top: 20px;
    }

    .input__box {
        flex-grow: 0;
        height: auto;

        &:not(:first-of-type) {
            margin-top: 10px;
        }
        label {
            font-family: Roboto, sans-serif;
            font-size: 14px;
            line-height: 24px;
            margin: 0;
            padding: 4px 0;
        }

        input,
        textarea {
            border: 0.98px solid #f7931e;
            box-sizing: border-box;
            border-radius: 5px;

            font-size: 18px;
            line-height: 1.3;

            cursor: pointer;
        }

        .input__file,
        .input__file__label {
            padding: 4px 0;
            display: inline-block;
            border: none;
            margin-right: 10px;
            font-size: 14px;
            line-height: 1;

            margin: 5px 5px 5px 0;
        }

        .input__file__label {
            font-size: 16px;
        }

        textarea {
            padding-top: 10px;
        }
        .form-control:focus {
            color: #495057;
            background-color: #fff;
            border-color: #f7931e;
            outline: 0;
            box-shadow: 0 0 0 0.2rem rgba(247, 147, 30, 0.25);
        }
    }
    div > a {
        cursor: pointer;
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

// Flexible modal
@media only screen and (max-width: 440px) {
    #modal-danger___BV_modal_body_ {
        div > h3 {
            font-size: 18px;
        }
        button {
            display: inline-block;
            width: 45%;
            font-size: 10px;
            margin-top: 15px !important;
        }
        .success__block {
            .success__icon {
                max-width: 70%;
                width: 80px;
            }
        }
    }
}
</style>

<template>
    <section>
        <base-loading v-if="!isGet"></base-loading>

        <section class="favourite__is__empty" v-if="isGet && noData">
            <div class="container">
                <div class="title-box title__about__us">
                    <ul>
                        <li>
                            <nuxt-link to="/">Главная страница </nuxt-link>
                            /
                        </li>

                        <li>
                            <nuxt-link to="#"> Избранное </nuxt-link>
                        </li>
                    </ul>
                </div>
            </div>
            <section class="container popular__container">
                <div class="popular__heading">
                    У вас нет продукта в корзины!
                </div>
            </section>
        </section>
        <section v-if="isGet && !noData">
            <div class="container">
                <div class="title-box title__about__us">
                    <ul>
                        <li>
                            <nuxt-link to="/">Главная страница </nuxt-link>
                            /
                        </li>

                        <li>
                            <nuxt-link to="#"> Избранное </nuxt-link>
                        </li>
                    </ul>
                </div>
            </div>

            <section class="container popular__container">
                <div class="popular__heading">Избранное</div>
                <div class="popular__item-box">
                    <div
                        class="popular__items"
                        v-for="product in allFavourites"
                        :key="product._id"
                    >
                        <img
                            class="popular__items__img"
                            :src="$store.state.uploads + product.product.image"
                            alt="Popular item photo"
                            type="photo/png"
                        />
                        <div class="popular__items__desription">
                            <div class="name__rating">
                                <span class="popular__items__desription--name">
                                    {{ product.product.category.name.uz }}
                                </span>

                                <div class="magazine__item--rating">
                                    <img
                                        src="../../assets/img/magazines/star.png"
                                        alt="Star img"
                                    /><span>4</span>
                                </div>
                            </div>

                            <h4 class="popular__items__desription--categorie">
                                {{ product.product.name.uz }}
                            </h4>
                            <span
                                class="popular__items__desription--price popular__items__desription--old--price hidden"
                                >630 000 сум</span
                            >
                            <span class="popular__items__desription--price">
                                {{ updatePriceFormat(product.price.price) }} сум
                            </span>

                            <p
                                class="button__delete"
                                @click.prevent="
                                    showDeleteModal();
                                    defaultProductId();
                                    addProductId(product._id);
                                "
                            >
                                <svg
                                    width="10"
                                    height="10"
                                    viewBox="0 0 10 10"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M9.37507 0.625018C9.02991 0.279827 8.47027 0.279794 8.12507 0.624945L4.99956 3.75L1.87489 0.625055C1.52972 0.279855 0.970058 0.279856 0.624889 0.625055C0.279763 0.970212 0.279763 1.52979 0.624889 1.87494L3.74967 5L0.624889 8.12506C0.279763 8.47021 0.279763 9.02979 0.624889 9.37495C0.970058 9.72015 1.52972 9.72014 1.87489 9.37494L4.99956 6.25L8.12507 9.37506C8.47027 9.72021 9.02991 9.72017 9.37507 9.37498C9.72022 9.02981 9.72022 8.4702 9.37507 8.12502L6.25033 5L9.37507 1.87498C9.72022 1.5298 9.72022 0.970195 9.37507 0.625018Z"
                                        fill="#F7931E"
                                    />
                                </svg>
                            </p>
                        </div>
                    </div>

                    <div class="popular__items">
                        <img
                            class="popular__items__img"
                            src="../../assets/img/Popular/boy-1.png"
                            alt="Popular item photo"
                            type="photo/png"
                        />
                        <div class="popular__items__desription">
                            <div class="name__rating">
                                <span class="popular__items__desription--name"
                                    >Футболки</span
                                >

                                <div class="magazine__item--rating">
                                    <img
                                        src="../../assets/img/magazines/star.png"
                                        alt="Star img"
                                    /><span>4</span>
                                </div>
                            </div>

                            <h4 class="popular__items__desription--categorie">
                                Детская одежда
                            </h4>
                            <span
                                class="popular__items__desription--price popular__items__desription--old--price hidden"
                                >630 000 сум</span
                            >
                            <span class="popular__items__desription--price"
                                >480 000 сум</span
                            >

                            <p
                                class="button__delete"
                                @click.prevent="showDeleteModal"
                            >
                                <svg
                                    width="10"
                                    height="10"
                                    viewBox="0 0 10 10"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M9.37507 0.625018C9.02991 0.279827 8.47027 0.279794 8.12507 0.624945L4.99956 3.75L1.87489 0.625055C1.52972 0.279855 0.970058 0.279856 0.624889 0.625055C0.279763 0.970212 0.279763 1.52979 0.624889 1.87494L3.74967 5L0.624889 8.12506C0.279763 8.47021 0.279763 9.02979 0.624889 9.37495C0.970058 9.72015 1.52972 9.72014 1.87489 9.37494L4.99956 6.25L8.12507 9.37506C8.47027 9.72021 9.02991 9.72017 9.37507 9.37498C9.72022 9.02981 9.72022 8.4702 9.37507 8.12502L6.25033 5L9.37507 1.87498C9.72022 1.5298 9.72022 0.970195 9.37507 0.625018Z"
                                        fill="#F7931E"
                                    />
                                </svg>
                            </p>
                        </div>
                    </div>

                    <div class="popular__items">
                        <img
                            class="popular__items__img"
                            src="../../assets/img/Popular/boy-2.png"
                            alt="Popular item photo"
                            type="photo/png"
                        />
                        <div class="popular__items__desription">
                            <div class="name__rating">
                                <span class="popular__items__desription--name"
                                    >Футболки</span
                                >

                                <div class="magazine__item--rating">
                                    <img
                                        src="../../assets/img/magazines/star.png"
                                        alt="Star img"
                                    /><span>3.5</span>
                                </div>
                            </div>

                            <h4 class="popular__items__desription--categorie">
                                Мужская кожаная куртка
                            </h4>
                            <span
                                class="popular__items__desription--price popular__items__desription--old--price hidden"
                                >1 580 000 сум</span
                            >
                            <span class="popular__items__desription--price"
                                >1 080 000 сум</span
                            >
                            <p
                                class="button__delete"
                                @click.prevent="showDeleteModal"
                            >
                                <svg
                                    width="10"
                                    height="10"
                                    viewBox="0 0 10 10"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M9.37507 0.625018C9.02991 0.279827 8.47027 0.279794 8.12507 0.624945L4.99956 3.75L1.87489 0.625055C1.52972 0.279855 0.970058 0.279856 0.624889 0.625055C0.279763 0.970212 0.279763 1.52979 0.624889 1.87494L3.74967 5L0.624889 8.12506C0.279763 8.47021 0.279763 9.02979 0.624889 9.37495C0.970058 9.72015 1.52972 9.72014 1.87489 9.37494L4.99956 6.25L8.12507 9.37506C8.47027 9.72021 9.02991 9.72017 9.37507 9.37498C9.72022 9.02981 9.72022 8.4702 9.37507 8.12502L6.25033 5L9.37507 1.87498C9.72022 1.5298 9.72022 0.970195 9.37507 0.625018Z"
                                        fill="#F7931E"
                                    />
                                </svg>
                            </p>
                        </div>
                    </div>

                    <div class="popular__items">
                        <img
                            class="popular__items__img"
                            src="../../assets/img/Popular/item-1.png"
                            alt="Popular item photo"
                            type="photo/png"
                        />
                        <div class="popular__items__desription">
                            <div class="name__rating">
                                <span class="popular__items__desription--name"
                                    >Кроссовки</span
                                >

                                <div class="magazine__item--rating">
                                    <img
                                        src="../../assets/img/magazines/star.png"
                                        alt="Star img"
                                    /><span>4.5</span>
                                </div>
                            </div>

                            <h4 class="popular__items__desription--categorie">
                                для фанатов футбола Ювентуса
                            </h4>
                            <span
                                class="popular__items__desription--price popular__items__desription--old--price hidden"
                                >1 399 000 сум</span
                            >
                            <span class="popular__items__desription--price"
                                >1 280 000 сум</span
                            >

                            <p
                                class="button__delete"
                                @click.prevent="showDeleteModal"
                            >
                                <svg
                                    width="10"
                                    height="10"
                                    viewBox="0 0 10 10"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M9.37507 0.625018C9.02991 0.279827 8.47027 0.279794 8.12507 0.624945L4.99956 3.75L1.87489 0.625055C1.52972 0.279855 0.970058 0.279856 0.624889 0.625055C0.279763 0.970212 0.279763 1.52979 0.624889 1.87494L3.74967 5L0.624889 8.12506C0.279763 8.47021 0.279763 9.02979 0.624889 9.37495C0.970058 9.72015 1.52972 9.72014 1.87489 9.37494L4.99956 6.25L8.12507 9.37506C8.47027 9.72021 9.02991 9.72017 9.37507 9.37498C9.72022 9.02981 9.72022 8.4702 9.37507 8.12502L6.25033 5L9.37507 1.87498C9.72022 1.5298 9.72022 0.970195 9.37507 0.625018Z"
                                        fill="#F7931E"
                                    />
                                </svg>
                            </p>
                        </div>
                    </div>

                    <div class="popular__items">
                        <img
                            class="popular__items__img"
                            src="../../assets/img/Popular/boy-3.png"
                            alt="Popular item photo"
                            type="photo/png"
                        />
                        <div class="popular__items__desription">
                            <div class="name__rating">
                                <span class="popular__items__desription--name"
                                    >Рубашки</span
                                >

                                <div class="magazine__item--rating">
                                    <img
                                        src="../../assets/img/magazines/star.png"
                                        alt="Star img"
                                    /><span>4.9</span>
                                </div>
                            </div>

                            <h4 class="popular__items__desription--categorie">
                                весенная рубашка для мужчин
                            </h4>
                            <span
                                class="popular__items__desription--price popular__items__desription--old--price hidden"
                                >532 000 сум</span
                            >
                            <span class="popular__items__desription--price"
                                >474 000 сум</span
                            >

                            <p
                                class="button__delete"
                                @click.prevent="showDeleteModal"
                            >
                                <svg
                                    width="10"
                                    height="10"
                                    viewBox="0 0 10 10"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M9.37507 0.625018C9.02991 0.279827 8.47027 0.279794 8.12507 0.624945L4.99956 3.75L1.87489 0.625055C1.52972 0.279855 0.970058 0.279856 0.624889 0.625055C0.279763 0.970212 0.279763 1.52979 0.624889 1.87494L3.74967 5L0.624889 8.12506C0.279763 8.47021 0.279763 9.02979 0.624889 9.37495C0.970058 9.72015 1.52972 9.72014 1.87489 9.37494L4.99956 6.25L8.12507 9.37506C8.47027 9.72021 9.02991 9.72017 9.37507 9.37498C9.72022 9.02981 9.72022 8.4702 9.37507 8.12502L6.25033 5L9.37507 1.87498C9.72022 1.5298 9.72022 0.970195 9.37507 0.625018Z"
                                        fill="#F7931E"
                                    />
                                </svg>
                            </p>
                        </div>
                    </div>

                    <div class="popular__items">
                        <img
                            class="popular__items__img"
                            src="../../assets/img/Popular/woman-1.png"
                            alt="Popular item photo"
                            type="photo/png"
                        />
                        <div class="popular__items__desription">
                            <div class="name__rating">
                                <span class="popular__items__desription--name"
                                    >Одежда</span
                                >

                                <div class="magazine__item--rating">
                                    <img
                                        src="../../assets/img/magazines/star.png"
                                        alt="Star img"
                                    /><span>3.6</span>
                                </div>
                            </div>

                            <h4 class="popular__items__desription--categorie">
                                Новая весенная коллекция для женщин
                            </h4>
                            <span
                                class="popular__items__desription--price popular__items__desription--old--price"
                                >1 619 000 сум</span
                            >
                            <span class="popular__items__desription--price"
                                >1 280 000 сум</span
                            >

                            <p
                                class="button__delete"
                                @click.prevent="showDeleteModal"
                            >
                                <svg
                                    width="10"
                                    height="10"
                                    viewBox="0 0 10 10"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M9.37507 0.625018C9.02991 0.279827 8.47027 0.279794 8.12507 0.624945L4.99956 3.75L1.87489 0.625055C1.52972 0.279855 0.970058 0.279856 0.624889 0.625055C0.279763 0.970212 0.279763 1.52979 0.624889 1.87494L3.74967 5L0.624889 8.12506C0.279763 8.47021 0.279763 9.02979 0.624889 9.37495C0.970058 9.72015 1.52972 9.72014 1.87489 9.37494L4.99956 6.25L8.12507 9.37506C8.47027 9.72021 9.02991 9.72017 9.37507 9.37498C9.72022 9.02981 9.72022 8.4702 9.37507 8.12502L6.25033 5L9.37507 1.87498C9.72022 1.5298 9.72022 0.970195 9.37507 0.625018Z"
                                        fill="#F7931E"
                                    />
                                </svg>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- modals on deleting -->
            <b-modal
                id="modal-danger"
                v-model="dangerModal.showModal"
                hide-footer
                hide-header
                centered
                class="b-modal"
            >
                <div v-if="dangerModal.showContent">
                    <div class="d-block text-center">
                        <h3>
                            Вы хотите удалить этот продукт из корзины???
                        </h3>
                    </div>
                    <b-button
                        class="b-button"
                        variant="warning"
                        block
                        @click.prevent="closeModal"
                        >Нет</b-button
                    >
                    <b-button
                        class="b-button"
                        variant="danger"
                        block
                        @click.prevent="removeFavourite()"
                        >Да!</b-button
                    >
                </div>
                <div
                    v-if="dangerModal.showLoading"
                    class="text-center  d-flex justify-content-center align-items-center loading__spinner"
                >
                    <b-spinner
                        :variant="'warning'"
                        :key="'warning'"
                    ></b-spinner>
                </div>

                <div class="success__block" v-if="dangerModal.showSuccess">
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

            <modal-success
                v-show="dangerModal.deletedSuccess"
                post-title="Продукт успешно удалён из корзины!"
            >
            </modal-success>

            <!-- remove all button -->
            <section class="container popular__container">
                <a
                    href="#"
                    class="popular__btn text-center remove__all__product"
                    @click.prevent="
                        showDeleteModal();
                        defaultProductId();
                        addProductId('rm/all');
                    "
                    >Удалить все продукты из списка</a
                >
            </section>
        </section>
    </section>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import BaseLoading from "../../components/UI/BaseLoading.vue";
import ModalSuccess from "../../components/Modals/SuccessModal.vue";

export default {
    components: {
        BaseLoading,
        ModalSuccess
    },

    data() {
        return {
            isGet: false,
            noData: false,
            dangerModal: {
                showModal: false,
                showContent: true,
                showLoading: false,
                showSuccess: false,
                deletedSuccess: false
            },
            // dangerModal: false,

            removeProductId: null,
            user: {
                token: this.$auth.strategy.token.get()
            }
        };
    },

    computed: mapGetters(["allFavourites", "allFavouritesId"]),

    methods: {
        // -------------- modals settings ----------------
        // open modal on click
        showDeleteModal() {
            // this.dangerModal = true;
            this.dangerModal.showModal = true;
        },

        // close modal on click
        closeModal() {
            this.dangerModal.showModal = false;
        },

        // show loading on start of deleting
        deleteStarted() {
            this.dangerModal.showContent = false;
            this.dangerModal.deletedSuccess = false;
            this.dangerModal.showLoading = true;
        },
        // show succes on the end of deleting
        deleteEnded() {
            this.dangerModal.showLoading = false;
            this.dangerModal.showSuccess = true;
            this.dangerModal.deletedSuccess = true;
            setTimeout(() => {
                this.dangerModal.showModal = false;
            }, 1500);
        },
        // update priceFormat
        updatePriceFormat(price) {
            const form = new Intl.NumberFormat("en-US").format(price);
            return form.replaceAll(",", " ");
        },

        // add product id for deleting
        addProductId(id) {
            this.removeProductId = id;
        },

        // set default product id
        defaultProductId() {
            this.removeProductId = null;
        },

        // filter on the end of deleting
        filterProducts() {
            if (this.removeProductId === "rm/all") {
                this.deleteAllFavourites();
                this.deleteAllFavouritesId();
            } else {
                this.deleteFavouritesId(this.removeProductId);
                this.deleteFavourites(this.removeProductId);
            }
        },
        // remove product from favourite
        async removeFavourite() {
            this.deleteStarted();
            await this.$axios
                .$delete("like/" + this.removeProductId, {
                    headers: {
                        token: this.user.token
                    }
                })
                .then(response => {
                    if (response.success) {
                        this.filterProducts();
                        this.deleteEnded();
                    } else {
                        throw new Error("Could not save data!");
                    }
                })
                .catch(err => console.error(err));

            console.log("remove ended");
        },

        ...mapActions(["fetchFavourites", "fetchFavouritesId"]),
        ...mapMutations([
            "deleteFavouritesId",
            "deleteFavourites",
            "deleteAllFavourites",
            "deleteAllFavouritesId"
        ])
    },

    async mounted(token = this.user.token) {
        await this.fetchFavourites(token);
        await this.fetchFavouritesId(token);
        this.isGet = true;
        if (this.allFavourites.length === 0) this.noData = true;
    }
};
</script>

<style lang="scss" scoped>
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

.popular__container {
    margin-top: 0;
    .popular__item-box {
        .popular__items {
            .popular__items__desription {
                .button__delete {
                    position: absolute;
                    top: 90%;
                    left: 87%;
                    border: none;
                    color: none;
                    outline: none;
                    width: 20px;
                    height: 20px;
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    svg {
                        width: 70%;
                        height: 70%;
                    }
                }

                .button__delete:hover {
                    border-radius: 50%;
                    background-color: #e2e2e2;
                    svg {
                        width: 50%;
                        height: 50%;
                    }
                }
            }
        }
    }

    .remove__all__product {
        width: 324px !important;
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

@media only screen and (max-width: 765px) {
    .popular__container {
        .popular__item-box {
            .popular__items {
                .popular__items__desription {
                    .button__delete {
                        top: 86%;
                        left: 87%;
                        width: 15px;
                        height: 15px;
                    }
                }
            }
        }
    }
}

// Flexible modal
@media only screen and (max-width: 440px) {
    .popular__container {
        .remove__all__product {
            width: 260px !important;
        }
    }
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

//-------------------

@media only screen and (max-width: 365px) {
    .popular__container {
        .popular__item-box {
            .popular__items {
                .popular__items__desription {
                    .button__delete {
                        top: 86%;
                        left: 87%;
                        width: 15px;
                        height: 15px;
                    }
                }
            }
        }
    }
}
</style>

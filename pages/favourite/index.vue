<template>
    <section>
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

                        <p class="button__delete" @click="deleteItem">
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
                        <p class="button__delete" @click="deleteItem">
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

                        <p class="button__delete" @click="deleteItem">
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

                        <p class="button__delete" @click="deleteItem">
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

                        <p class="button__delete" @click="deleteItem">
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

        <!-- Danger message modal when client want delete item from array! -->

        <b-modal
            id="modal-danger"
            v-model="dangerModal"
            hide-footer
            hide-header
            centered
            class="b-modal"
        >
            <div class="d-block text-center">
                <h3>
                    Вы уже отправили запрос, хотите изменить ваши данные?
                </h3>
            </div>
            <b-button
                class="b-button"
                variant="warning"
                block
                @click="dangerModal = !dangerModal"
                >Нет!</b-button
            >
            <b-button
                class="b-button"
                variant="danger"
                block
                @click="dangerModal = !dangerModal"
                >Да!</b-button
            >
        </b-modal>
    </section>
</template>

<script>
export default {
    data() {
        return {
            dangerModal: false
        };
    },

    methods: {
        deleteItem() {
            this.dangerModal = true;
        }
    }
};
</script>

<style lang="scss" scoped>
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
}

#modal-danger___BV_modal_body_,
#modal-info___BV_modal_body_ {
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
    #modal-danger___BV_modal_body_,
    #modal-info___BV_modal_body_ {
        div > h3 {
            font-size: 18px;
        }
        button {
            display: inline-block;
            width: 45%;
            font-size: 10px;
            margin-top: 15px !important;
        }
    }
}

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

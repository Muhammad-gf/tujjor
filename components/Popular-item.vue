<template>
        <section class="container popular__container">
                <div class="popular__heading">Популярные товары</div>
                <div class="popular__item-box">
                        <div class="popular__items">
                                <img
                                        class="popular__items__img"
                                        src="../assets/img/Popular/boy-1.png"
                                        alt="Popular item photo"
                                        type="photo/png"
                                />
                                <div class="popular__items__desription">
                                        <div class="name__rating">
                                                <span
                                                        class="popular__items__desription--name"
                                                        >Футболки</span
                                                >

                                                <div
                                                        class="magazine__item--rating"
                                                >
                                                        <img
                                                                src="../assets/img/magazines/star.png"
                                                                alt="Star img"
                                                        /><span>4</span>
                                                </div>
                                        </div>
                                        <h4
                                                class="popular__items__desription--categorie"
                                        >
                                                Детская одежда
                                        </h4>
                                        <span
                                                class="popular__items__desription--price popular__items__desription--old--price hidden"
                                                >580 000 сум</span
                                        >
                                        <span
                                                class="popular__items__desription--price"
                                                >480 000 сум</span
                                        >
                                </div>
                        </div>

                        <div class="popular__items">
                                <img
                                        class="popular__items__img"
                                        src="../assets/img/Popular/boy-2.png"
                                        alt="Popular item photo"
                                        type="photo/png"
                                />
                                <div class="popular__items__desription">
                                        <div class="name__rating">
                                                <span
                                                        class="popular__items__desription--name"
                                                        >Футболки</span
                                                >

                                                <div
                                                        class="magazine__item--rating"
                                                >
                                                        <img
                                                                src="../assets/img/magazines/star.png"
                                                                alt="Star img"
                                                        /><span>3.5</span>
                                                </div>
                                        </div>

                                        <h4
                                                class="popular__items__desription--categorie"
                                        >
                                                Мужская кожаная куртка
                                        </h4>
                                        <span
                                                class="popular__items__desription--price"
                                                >1 080 000 сум</span
                                        >
                                </div>
                        </div>

                        <div class="popular__items">
                                <img
                                        class="popular__items__img"
                                        src="../assets/img/Popular/item-1.png"
                                        alt="Popular item photo"
                                        type="photo/png"
                                />
                                <div class="popular__items__desription">
                                        <div class="name__rating">
                                                <span
                                                        class="popular__items__desription--name"
                                                        >Кроссовки</span
                                                >

                                                <div
                                                        class="magazine__item--rating"
                                                >
                                                        <img
                                                                src="../assets/img/magazines/star.png"
                                                                alt="Star img"
                                                        /><span>4.5</span>
                                                </div>
                                        </div>

                                        <h4
                                                class="popular__items__desription--categorie"
                                        >
                                                для фанатов футбола Ювентуса
                                        </h4>
                                        <span
                                                class="popular__items__desription--price"
                                                >1 280 000 сум</span
                                        >
                                </div>
                        </div>

                        <div class="popular__items">
                                <img
                                        class="popular__items__img"
                                        src="../assets/img/Popular/boy-3.png"
                                        alt="Popular item photo"
                                        type="photo/png"
                                />
                                <div class="popular__items__desription">
                                        <span
                                                class="popular__items__desription--name"
                                                >Рубашки</span
                                        >
                                        <h4
                                                class="popular__items__desription--categorie"
                                        >
                                                весенная рубашка для мужчин
                                        </h4>
                                        <span
                                                class="popular__items__desription--price"
                                                >474 000 сум</span
                                        >
                                </div>
                        </div>

                        <div class="popular__items">
                                <img
                                        class="popular__items__img"
                                        src="../assets/img/Popular/woman-1.png"
                                        alt="Popular item photo"
                                        type="photo/png"
                                />
                                <div class="popular__items__desription">
                                        <span
                                                class="popular__items__desription--name"
                                                >Одежда</span
                                        >
                                        <h4
                                                class="popular__items__desription--categorie"
                                        >
                                                Новая весенная коллекция для
                                                женщин
                                        </h4>
                                        <span
                                                class="popular__items__desription--price popular__items__desription--old--price"
                                                >1 480 000 сум</span
                                        >
                                        <span
                                                class="popular__items__desription--price"
                                                >1 280 000 сум</span
                                        >
                                </div>
                        </div>
                </div>

                <a href="#" class="popular__btn">Показать ещё</a>
        </section>
</template>

<script>
export default {};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap");
</style>
<style lang="scss">
@mixin hover__active--animation {
        &:hover {
                transform: translateY(-3px) scale(1.05);
                box-shadow: 0 1rem 2rem rgba(#999, 0.2);
                &::after {
                        transform: scaleX(1.4) scaleY(1.6);
                        opacity: 0;
                }
        }

        &:active {
                outline: none;
                transform: translateY(-1px);
                box-shadow: 0 0.5rem 1rem rgba(#999, 0.2);
        }
}

// MAIN PAGE CONTAINER

.popular__container {
        margin-top: 80px;
        // padding: 0 80px;

        .popular__heading {
                font-family: Roboto, sans-serif;
                font-weight: 500;
                font-size: 48px;
                color: #f7931e;
                margin-bottom: 40px;
                text-shadow: 0px 0px 3px rgba(247, 147, 30, 0.3);
                display: inline-block;
        }

        .popular__item-box {
                display: flex;
                justify-content: space-between;
                align-items: center;
                flex-wrap: wrap;

                &::after {
                        content: "";
                        flex: 0 1 32%;
                }

                .popular__items {
                        flex: 0 0 auto;
                        width: 222px;
                        height: 370px;
                        background-color: #ffffff;
                        box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12);
                        border-radius: 5px;
                        overflow: hidden;
                        margin: 0 2px;
                        margin-bottom: 37px;

                        cursor: pointer;
                        transition: all 0.2s;

                        @include hover__active--animation;

                        .popular__items__img {
                                width: 222px;
                                height: 222px;
                        }
                        .popular__items__desription {
                                padding-left: 16px;
                                display: flex;
                                flex-direction: column;
                                justify-content: flex-start;
                                position: relative;

                                &--name {
                                        margin-top: 5px;
                                        font-family: Roboto;
                                        font-weight: 500;
                                        font-size: 14px;
                                        line-height: 16px;
                                        opacity: 0.7;
                                        color: #666666;
                                }

                                &--categorie {
                                        margin-top: 9px;
                                        font-family: Roboto;
                                        font-weight: 700;
                                        font-size: 16px;
                                        line-height: 100%;
                                        color: #000000;

                                        height: 70px;
                                }

                                &--price {
                                        font-family: Roboto;
                                        font-weight: 700;
                                        font-size: 20px;
                                        line-height: 100%;

                                        color: #219ebc;
                                }

                                &--old--price {
                                        font-size: 14px;
                                        color: #f7931e;
                                        text-decoration: line-through;

                                        position: absolute;
                                        bottom: 20px;
                                }
                        }
                }
        }
        .popular__btn {
                &,
                &:link,
                &:visited {
                        display: block;
                        border-radius: 5px;
                        transition: all 0.2s;

                        width: 224px;
                        height: 50px;

                        margin: 0 auto;
                        margin-top: 20px;
                        padding: 10px;
                        text-align: center;
                        text-decoration: none;
                        font-family: inherit;
                        font-weight: 500;
                        font-size: 18px;
                        color: rgb(255, 255, 255, 0.9);
                        box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);

                        // Change for the <button> element
                        background-color: #f7931e;
                        border: none;
                        cursor: pointer;
                }

                @include hover__active--animation;
        }
}

@media only screen and (max-width: 1440px) and (min-width: 1200px) {
        .popular__container {
                .popular__item-box {
                        padding: 0 4px;
                }
        }
}

@media only screen and (max-width: 1200px) and (min-width: 765px) {
        .popular__container {
                padding: 20px;
                .popular__item-box {
                        .popular__items {
                                width: 229px;
                                height: 381.67px;
                                margin-bottom: 22px;

                                .popular__items__img {
                                        width: 230px;
                                        height: 230px;
                                }
                        }
                }
        }
}

@media only screen and (max-width: 765px) {
        .popular__container {
                padding: 16px;
                .popular__heading {
                        font-size: 22px;
                        margin-bottom: 28px;
                }

                .popular__item-box {
                        .popular__items {
                                width: 164px;
                                height: 273px;
                                margin-bottom: 14px;

                                .popular__items__img {
                                        width: 164px;
                                        height: 164px;
                                }
                                .popular__items__desription {
                                        padding-left: 12px;

                                        &--name {
                                                margin-top: 3.7px;
                                                font-size: 10px;
                                        }

                                        &--categorie {
                                                margin: 0;
                                                margin-top: 6.6px;
                                                font-size: 12px;
                                                height: 58px;
                                                padding: 0;
                                        }

                                        &--price {
                                                font-size: 14px;
                                        }

                                        &--old--price {
                                                font-size: 10px;
                                        }
                                }
                        }
                }

                .popular__btn {
                        &,
                        &:link,
                        &:visited {
                                width: 160px;
                                height: 35px;

                                margin-top: 18px;
                                padding: 8px;
                                font-size: 12px;
                        }
                }
        }
}

@media only screen and (max-width: 365px) {
        .popular__container {
                padding: 14px;
                .popular__heading {
                        font-size: 22px;
                        margin-bottom: 12px;
                }

                .popular__item-box {
                        .popular__items {
                                width: 140px;
                                height: 245px;
                                .popular__items__img {
                                        width: 140px;
                                        height: 140px;
                                }
                                .popular__items__desription {
                                        &--categorie {
                                                margin-top: 3.6px;
                                                font-size: 12px;
                                                height: 56px;
                                                padding: 0;
                                        }

                                        &--price {
                                                font-size: 12px;
                                        }

                                        &--old--price {
                                                font-size: 9px;
                                                bottom: 17px;
                                        }
                                }
                        }
                }
        }
}
</style>

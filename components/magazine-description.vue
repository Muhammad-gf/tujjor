<template>
        <section class="magazine__section">
                <div class="product-show">
                        <div class="container">
                                <div class="title-box">
                                        <ul>
                                                <li>
                                                        <nuxt-link to="/"
                                                                >Главная
                                                                страница</nuxt-link
                                                        >
                                                        /
                                                </li>

                                                <li>
                                                        <nuxt-link
                                                                to="/rubashki"
                                                                >Все
                                                                магазины</nuxt-link
                                                        >
                                                        /
                                                </li>

                                                <li>
                                                        <nuxt-link
                                                                to="/rubashki"
                                                                >Аристокракта</nuxt-link
                                                        >
                                                </li>
                                        </ul>
                                </div>
                        </div>
                </div>
                <div class="container magazine__description__box">
                        <div class="magazine__description__logo__text">
                                <img
                                        class="magazine__description--logo"
                                        src="../assets/img/magazine description/magazine-icon.png"
                                        alt="Logo image"
                                />
                                <p class="magazine__description--text">
                                        АРИСТОКРАТКА - это больше чем элитный
                                        бутик это идеальный шопинг для вашей
                                        души, дополняйте модные предметы
                                        гардероба стильной одеждой, обувью,
                                        сумками и изысканными аксессуарами.
                                </p>
                        </div>
                        <div class="magazine__description__img">
                                <div class="magazine__description__img--box">
                                        <img
                                                src="../assets/img/magazine description/icon/Vector-1.png"
                                                alt="Icon image"
                                        />
                                        <span> +998 90 999-20-30 </span>
                                </div>

                                <div class="magazine__description__img--box">
                                        <img
                                                src="../assets/img/magazine description/icon/Vector-3.png"
                                                alt="Icon image"
                                        />
                                        <span>
                                                info@aristokratka.uz
                                        </span>
                                </div>

                                <div class="magazine__description__img--box">
                                        <img
                                                src="../assets/img/magazine description/icon/Vector-2.png"
                                                alt="Icon image"
                                        />
                                        <span
                                                >Шахрисабз 3/74, Метро Айбек
                                                <br />
                                                Ташкент, ул. Шахрисабзская 3/74
                                                (Ориентир: Метро Айбек), 100015
                                        </span>
                                </div>
                        </div>
                </div>

                <section class="catalog__container container">
                        <div class="catalog__filtraiton__box">
                                <section
                                        class="popular__container catalog__dropdown__container"
                                >
                                        <div class="popular__dropdown__box">
                                                <button
                                                        class="popular__dropdown--btn"
                                                >
                                                        <span
                                                                >Сортировка
                                                                по</span
                                                        >
                                                        <img
                                                                src="../assets/img/magazines/vector.png"
                                                                alt="Vector"
                                                        />
                                                </button>
                                                <div
                                                        class="popular__dropdown__content"
                                                >
                                                        <a
                                                                href="#"
                                                                class="popular__dropdown--link"
                                                                >По дате</a
                                                        >
                                                        <a
                                                                href="#"
                                                                class="popular__dropdown--link"
                                                                >По рейтинг</a
                                                        >
                                                </div>
                                        </div>
                                </section>

                                <form action="#" class="filtraiton__form__box">
                                        <h5 class="filtraiton__header">
                                                Диапазон цена
                                        </h5>
                                        <div class="input__range">
                                                <vue-slider
                                                        id="range"
                                                        name="range"
                                                        value="range"
                                                        v-model="value_2"
                                                        :min="0"
                                                        :max="1500000"
                                                        :interval="10000"
                                                        :process-style="{
                                                                backgroundColor:
                                                                        '#FE9E0D'
                                                        }"
                                                        :tooltip-style="{
                                                                backgroundColor:
                                                                        'black',
                                                                borderColor:
                                                                        'black'
                                                        }"
                                                ></vue-slider>
                                        </div>
                                        <h5 class="filtraiton__header">
                                                Филтр по брендам.
                                        </h5>

                                        <div class="center__input__label">
                                                <input
                                                        class="filtraiton__form--input"
                                                        type="checkbox"
                                                        id="zara"
                                                        name="zara"
                                                        value="Zara"
                                                />
                                                <label
                                                        class="filtraiton__form--label"
                                                        for="zara"
                                                >
                                                        Zara</label
                                                ><br />
                                        </div>

                                        <div class="center__input__label">
                                                <input
                                                        class="filtraiton__form--input"
                                                        type="checkbox"
                                                        id="legendr"
                                                        name="legendr"
                                                        value="legendr"
                                                />
                                                <label
                                                        class="filtraiton__form--label"
                                                        for="legendr"
                                                >
                                                        Legendr</label
                                                ><br />
                                        </div>

                                        <div class="center__input__label">
                                                <input
                                                        class="filtraiton__form--input"
                                                        type="checkbox"
                                                        id="abb"
                                                        name="abb"
                                                        value="abb"
                                                />
                                                <label
                                                        class="filtraiton__form--label"
                                                        for="abb"
                                                >
                                                        ABB</label
                                                ><br />
                                        </div>

                                        <div class="center__input__label">
                                                <input
                                                        class="filtraiton__form--input"
                                                        type="checkbox"
                                                        id="navigator"
                                                        name="navigator"
                                                        value="navigator"
                                                />
                                                <label
                                                        class="filtraiton__form--label"
                                                        for="navigator"
                                                >
                                                        Navigator</label
                                                ><br />
                                        </div>
                                        <div class="center__input__label">
                                                <input
                                                        class="filtraiton__form--input"
                                                        type="checkbox"
                                                        id="telfor"
                                                        name="telfor"
                                                        value="telfor"
                                                />
                                                <label
                                                        class="filtraiton__form--label"
                                                        for="telfor"
                                                >
                                                        TEKFOR</label
                                                ><br />
                                        </div>
                                        <div class="center__input__label">
                                                <input
                                                        class="filtraiton__form--input"
                                                        type="checkbox"
                                                        id="wago"
                                                        name="wago"
                                                        value="wago"
                                                />
                                                <label
                                                        class="filtraiton__form--label"
                                                        for="wago"
                                                >
                                                        Wago</label
                                                ><br />
                                        </div>
                                        <div class="center__input__label">
                                                <input
                                                        class="filtraiton__form--input"
                                                        type="checkbox"
                                                        id="universal"
                                                        name="universal"
                                                        value="universal"
                                                />
                                                <label
                                                        class="filtraiton__form--label"
                                                        for="universal"
                                                >
                                                        UniVersal</label
                                                ><br />
                                        </div>
                                        <div class="submit__box">
                                                <input
                                                        class="filtraiton__form--submit"
                                                        type="submit"
                                                        value="Фильтр"
                                                />
                                        </div>
                                </form>
                        </div>
                        <div class="catalog__page__about">
                                <section class="container popular__container">
                                        <div class="popular__item-box">
                                                <div class="popular__items">
                                                        <img
                                                                class="popular__items__img"
                                                                src="../assets/img/Popular/boy-1.png"
                                                                alt="Popular item photo"
                                                                type="photo/png"
                                                        />
                                                        <div
                                                                class="popular__items__desription"
                                                        >
                                                                <span
                                                                        class="popular__items__desription--name"
                                                                        >Футболки</span
                                                                >
                                                                <h4
                                                                        class="popular__items__desription--categorie"
                                                                >
                                                                        Детская
                                                                        одежда
                                                                </h4>
                                                                <span
                                                                        class="popular__items__desription--price popular__items__desription--old--price hidden"
                                                                        >580 000
                                                                        сум</span
                                                                >
                                                                <span
                                                                        class="popular__items__desription--price"
                                                                        >480 000
                                                                        сум</span
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
                                                        <div
                                                                class="popular__items__desription"
                                                        >
                                                                <span
                                                                        class="popular__items__desription--name"
                                                                        >Футболки</span
                                                                >
                                                                <h4
                                                                        class="popular__items__desription--categorie"
                                                                >
                                                                        Мужская
                                                                        кожаная
                                                                        куртка
                                                                </h4>
                                                                <span
                                                                        class="popular__items__desription--price"
                                                                        >1 080
                                                                        000
                                                                        сум</span
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
                                                        <div
                                                                class="popular__items__desription"
                                                        >
                                                                <span
                                                                        class="popular__items__desription--name"
                                                                        >Кроссовки</span
                                                                >
                                                                <h4
                                                                        class="popular__items__desription--categorie"
                                                                >
                                                                        для
                                                                        фанатов
                                                                        футбола
                                                                        Ювентуса
                                                                </h4>
                                                                <span
                                                                        class="popular__items__desription--price"
                                                                        >1 280
                                                                        000
                                                                        сум</span
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
                                                        <div
                                                                class="popular__items__desription"
                                                        >
                                                                <span
                                                                        class="popular__items__desription--name"
                                                                        >Рубашки</span
                                                                >
                                                                <h4
                                                                        class="popular__items__desription--categorie"
                                                                >
                                                                        весенная
                                                                        рубашка
                                                                        для
                                                                        мужчин
                                                                </h4>
                                                                <span
                                                                        class="popular__items__desription--price"
                                                                        >474 000
                                                                        сум</span
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
                                                        <div
                                                                class="popular__items__desription"
                                                        >
                                                                <span
                                                                        class="popular__items__desription--name"
                                                                        >Одежда</span
                                                                >
                                                                <h4
                                                                        class="popular__items__desription--categorie"
                                                                >
                                                                        Новая
                                                                        весенная
                                                                        коллекция
                                                                        для
                                                                        женщин
                                                                </h4>
                                                                <span
                                                                        class="popular__items__desription--price popular__items__desription--old--price"
                                                                        >1 480
                                                                        000
                                                                        сум</span
                                                                >
                                                                <span
                                                                        class="popular__items__desription--price"
                                                                        >1 280
                                                                        000
                                                                        сум</span
                                                                >
                                                        </div>
                                                </div>
                                        </div>

                                        <a href="#" class="popular__btn"
                                                >Показать ещё</a
                                        >
                                </section>

                                <!-- <div class="catalog__page__btn--box">
                                        <a
                                                href="#"
                                                class="catalog__page--btn catalog__page--btn--active"
                                                >1</a
                                        >
                                        <a href="#" class="catalog__page--btn"
                                                >2</a
                                        >
                                        <a href="#" class="catalog__page--btn"
                                                >3</a
                                        >
                                        <a href="#" class="catalog__page--btn"
                                                >4</a
                                        >
                                        <a href="#" class="catalog__page--btn"
                                                >5</a
                                        >
                                        <a href="#" class="catalog__page--btn"
                                                >...</a
                                        >
                                        <a href="#" class="catalog__page--btn"
                                                >30</a
                                        >
                                        <a href="#" class="catalog__page--btn"
                                                >></a
                                        >
                                </div> -->
                        </div>
                </section>
        </section>
</template>

<script>
export default {
        data: function() {
                return {
                        value_2: [50000, 500000]
                };
        }
};
</script>

<style lang="scss">
.magazine__section {
        .magazine__description__box {
                display: flex;
                justify-content: space-between;
                margin-top: 40px;
                margin-bottom: 50px;

                .magazine__description__logo__text {
                        flex-basis: 350px;
                        flex-grow: 0;
                        img {
                                margin-bottom: 20px;
                        }

                        .magazine__description--text {
                                color: #000000;
                                font-family: Roboto;
                                font-size: 14px;
                                line-height: 1.4;
                                margin-bottom: 0;
                        }
                }

                .magazine__description__img {
                        flex-basis: 790px;
                        flex-grow: 0;
                        display: flex;
                        flex-direction: column;
                        justify-content: flex-end;
                        align-items: flex-start;

                        padding: 30px;
                        border-radius: 5px;
                        overflow: hidden;

                        background-image: url("../assets/img/magazine description/bg-2.jpg");
                        background-repeat: no-repeat;
                        background-size: cover;

                        .magazine__description__img--box {
                                padding-top: 10px;
                                font-family: Roboto;
                                font-size: 16px;
                                line-height: 19px;
                                color: #ffffff;
                                display: flex;
                                align-items: center;

                                &:hover {
                                        cursor: pointer;
                                        color: rgb(255, 255, 255, 0.7);
                                }

                                img {
                                        flex-grow: 0;
                                }
                                span {
                                        padding: 0 10px;
                                        display: block;
                                }
                        }
                }
        }
        .catalog__page__filtr__box {
                margin-top: 0;
                display: flex;
                justify-content: flex-end;
        }
}
.catalog__container {
        margin-top: 15px;
        display: flex;
        position: relative;
        padding-top: 55px;

        .catalog__filtraiton__box {
                flex-shrink: 0;
                flex-basis: 230px;
                padding: 0 8px;

                .catalog__dropdown__container {
                        padding: 0;
                        margin: 0;
                        position: absolute;
                        right: 18px;
                        top: 0;
                }

                .filtraiton__header {
                        font-family: Roboto;
                        font-size: 18px;
                        line-height: 100%;
                        color: #000000;

                        padding-bottom: 13px;
                        border-bottom: 1px solid rgba(102, 102, 102, 0.5);

                        &:not(:first-child) {
                                padding-top: 13px;
                        }
                }

                .filtraiton__form__box {
                        .input__range {
                                padding: 18px 0 9px;
                        }

                        padding: 5px 0;

                        .center__input__label {
                                display: flex;
                                align-items: center;
                                .filtraiton__form--input {
                                        width: 16px;
                                        height: 16px;
                                }
                                .filtraiton__form--input,
                                .filtraiton__form--label {
                                        cursor: pointer;
                                        padding: 0;
                                        margin: 0 0 8px;

                                        &:hover {
                                                opacity: 0.7;
                                        }
                                }

                                .filtraiton__form--label {
                                        font-size: 16px;
                                        font-weight: 500;
                                        padding: 0 10px;
                                }
                        }
                        .filtraiton__form--submit {
                                margin-top: 15px;
                                margin-bottom: 50px;

                                background: #003466;
                                border-radius: 5px;
                                width: 119px;
                                height: 36px;

                                font-size: 14px;
                                color: #fff;

                                transition: all 0.2s;
                                @include hover__active--animation;

                                &:hover {
                                        background-color: rgba(0, 52, 102, 0.9);
                                }
                        }
                }
        }

        .catalog__page__about {
                .popular__container {
                        margin: 0;
                        padding: 0;
                }

                .catalog__page__btn--box {
                        margin: 70px 0;
                        height: auto;
                        display: flex;
                        justify-content: flex-end;
                        align-items: center;

                        .catalog__page--btn {
                                background-color: #dddddd;
                                width: 36px;
                                height: 31px;
                                border-radius: 5px;

                                color: #252424;
                                font-weight: 700;
                                &:not(:last-child) {
                                        margin-right: 15px;
                                }

                                display: flex;
                                justify-content: center;
                                align-items: center;

                                &--active {
                                        background-color: #f7931e;
                                        color: #fff;
                                }
                        }
                }
        }
}
@media only screen and (max-width: 1200px) {
        .catalog__container {
                margin-top: 0;
        }
}
@media only screen and (max-width: 960px) {
        .magazine__section {
                .magazine__description__box {
                        display: flex;
                        flex-direction: column;
                        margin-top: 40px;
                        margin-bottom: 50px;

                        .magazine__description__logo__text {
                                flex-grow: 1;
                                flex-basis: auto;
                                margin-bottom: 30px;

                                display: flex;
                                flex-direction: column;

                                justify-content: flex-start;
                                align-items: center;
                        }

                        .magazine__description__img {
                                flex-grow: 1;
                                flex-basis: 235px;
                        }
                }
        }
        .catalog__container {
                .catalog__filtraiton__box {
                        flex-basis: 245px;
                }

                .catalog__page__about {
                        .popular__item-box {
                                justify-content: space-around;
                        }
                }
        }
}

@media only screen and (max-width: 768px) {
        .catalog__container {
                .catalog__page__about {
                        .catalog__page__btn--box {
                                .catalog__page--btn {
                                        width: 31px;
                                        height: 27px;
                                }
                        }
                }
        }
}

@media only screen and (max-width: 633px) {
        .catalog__container {
                .catalog__filtraiton__box {
                        flex-basis: 225px;
                }
        }
}

@media only screen and (max-width: 602px) {
        .magazine__section {
                position: relative;
                .catalog__page__filtr__box {
                        justify-content: flex-start;
                        position: absolute;
                        top: 1240px;
                }

                .magazine__description__box {
                        padding-left: 0;
                        padding-right: 0;

                        .magazine__description__logo__text {
                                padding-left: 15px;
                                padding-right: 15px;
                        }

                        .magazine__description__img {
                                flex-basis: 280px;
                                padding: 20px;
                                border-radius: 0;

                                .magazine__description__img--box {
                                        font-size: 14px;
                                }
                        }
                }
        }

        .catalog__container {
                flex-wrap: wrap;

                .catalog__filtraiton__box {
                        display: flex;
                        flex-direction: column;
                        justify-content: flex-start;
                        flex-basis: 100%;

                        .catalog__dropdown__container {
                                order: 1;
                                position: relative;
                                right: auto;
                                top: auto;
                        }
                        .filtraiton__form__box {
                                .submit__box {
                                        display: flex;
                                        justify-content: center;
                                }
                        }
                }

                .catalog__page__about {
                        margin-top: 18px;
                        .catalog__page__btn--box {
                                justify-content: center;
                        }
                }
        }
}

@media only screen and (max-width: 395px) {
        .catalog__container {
                .catalog__page__about {
                        .popular__item-box {
                                justify-content: space-between;
                        }
                }
        }
}

@media only screen and (max-width: 370px) {
        .catalog__container {
                .catalog__page__about {
                        .catalog__page__btn--box {
                                justify-content: space-between;
                                .catalog__page--btn {
                                        &:not(:last-child) {
                                                margin-right: 0;
                                        }
                                }
                        }
                }
        }
}
</style>

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
                        <VueSlickCarousel
                            class="product__img__box"
                            v-bind="productSlickOptions"
                        >
                            <div class="img">
                                <img
                                    src="../assets/img/product show/exp-2.png"
                                    alt="Brand"
                                />
                            </div>

                            <div class="img">
                                <img
                                    src="../assets/img/product show/exp-3.png"
                                    alt="Brand"
                                />
                            </div>

                            <div class="img">
                                <img
                                    src="../assets/img/order/1.png"
                                    alt="Brand"
                                />
                            </div>

                            <div class="img">
                                <img
                                    src="../assets/img/other/12.png"
                                    alt="Brand"
                                />
                            </div>
                        </VueSlickCarousel>
                        <!-- <div class="top-img">
                            <div class="img-view">
                                <img src="@/assets/img/p5.png" alt="" />
                            </div>
                        </div> -->
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
                                    checked
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

                            <div class="product__info--txt col-md-6 col-sm-6 ">
                                Рейтинг:
                                <Span>
                                    <star-rating
                                        class="star__rating "
                                        :increment="0.5"
                                        inactive-color="#219EBC"
                                        :star-size="12"
                                        :show-rating="false"
                                        :rating="4.5"
                                    >
                                    </star-rating>
                                </Span>
                            </div>

                            <div class="product__info--txt col-md-6 col-sm-6">
                                В избранное:
                                <Span>
                                    <svg
                                        class="favorite__icon"
                                        width="18"
                                        height="16"
                                        viewBox="0 0 14 13"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M13.1719 2.47814C12.9624 1.99319 12.6604 1.55374 12.2828 1.18439C11.9049 0.813927 11.4593 0.519528 10.9703 0.317199C10.4632 0.106563 9.91939 -0.00125279 9.37031 1.09826e-05C8.6 1.09826e-05 7.84844 0.210948 7.19531 0.609386C7.03906 0.704698 6.89062 0.809386 6.75 0.923449C6.60938 0.809386 6.46094 0.704698 6.30469 0.609386C5.65156 0.210948 4.9 1.09826e-05 4.12969 1.09826e-05C3.575 1.09826e-05 3.0375 0.106261 2.52969 0.317199C2.03906 0.520324 1.59687 0.812511 1.21719 1.18439C0.839057 1.55333 0.536997 1.99288 0.328125 2.47814C0.110938 2.98282 0 3.51876 0 4.07032C0 4.59064 0.10625 5.13282 0.317188 5.68439C0.49375 6.14532 0.746875 6.62345 1.07031 7.10626C1.58281 7.87032 2.2875 8.6672 3.1625 9.47501C4.6125 10.8141 6.04844 11.7391 6.10938 11.7766L6.47969 12.0141C6.64375 12.1188 6.85469 12.1188 7.01875 12.0141L7.38906 11.7766C7.45 11.7375 8.88437 10.8141 10.3359 9.47501C11.2109 8.6672 11.9156 7.87032 12.4281 7.10626C12.7516 6.62345 13.0062 6.14532 13.1812 5.68439C13.3922 5.13282 13.4984 4.59064 13.4984 4.07032C13.5 3.51876 13.3891 2.98282 13.1719 2.47814Z"
                                            fill="#F7931E"
                                        />
                                    </svg>
                                </Span>
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

                <div class="col-lg-8 clients__review__container">
                    <h4 class="clients__review__header ">
                        Отзывы покупателей
                        <span>
                            (24)
                        </span>
                    </h4>

                    <div class="client__review__box row">
                        <div
                            class="client__review__heading  col-lg-6 col-sm-8 col-12  d-flex justify-content-between align-items-start"
                        >
                            <h4 class="client__review__name">
                                Турсунов Асрор
                            </h4>

                            <star-rating
                                class="star__rating"
                                :read-only="true"
                                :increment="0.5"
                                :rating="4.5"
                                :show-rating="false"
                                inactive-color="#219EBC"
                                :star-size="18"
                            ></star-rating>
                        </div>
                        <div class="client__review__txt col-sm-12">
                            <span>
                                Качество ткани хорошее, но если вы предпочитаете
                                оверсайз, выбирайте размер меньше вашего,
                                например, слишком свободные рукава.
                            </span>
                        </div>
                        <div
                            class="client__review__date col-lg-6 col-sm-8 col-12 d-flex justify-content-between align-items-center"
                        >
                            <span class="client__review--date">
                                30.04.2021
                            </span>

                            <div class="client__buy--svg">
                                <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M16 8C16 10.1217 15.1571 12.1566 13.6569 13.6569C12.1566 15.1571 10.1217 16 8 16C5.87827 16 3.84344 15.1571 2.34315 13.6569C0.842855 12.1566 0 10.1217 0 8C0 5.87827 0.842855 3.84344 2.34315 2.34315C3.84344 0.842855 5.87827 0 8 0C10.1217 0 12.1566 0.842855 13.6569 2.34315C15.1571 3.84344 16 5.87827 16 8ZM12.03 4.97C11.9586 4.89882 11.8735 4.84277 11.7799 4.80522C11.6863 4.76766 11.5861 4.74936 11.4853 4.75141C11.3845 4.75347 11.2851 4.77583 11.1932 4.81717C11.1012 4.85851 11.0185 4.91797 10.95 4.992L7.477 9.417L5.384 7.323C5.24183 7.19052 5.05378 7.1184 4.85948 7.12183C4.66518 7.12525 4.47979 7.20397 4.34238 7.34138C4.20497 7.47879 4.12625 7.66418 4.12283 7.85848C4.1194 8.05278 4.19152 8.24083 4.324 8.383L6.97 11.03C7.04128 11.1012 7.12616 11.1572 7.21958 11.1949C7.313 11.2325 7.41305 11.2509 7.51375 11.2491C7.61444 11.2472 7.71374 11.2251 7.8057 11.184C7.89766 11.1429 7.9804 11.0837 8.049 11.01L12.041 6.02C12.1771 5.8785 12.2523 5.68928 12.2504 5.49296C12.2485 5.29664 12.1698 5.10888 12.031 4.97H12.03Z"
                                        fill="#219EBC"
                                    />
                                </svg>
                                <span>
                                    Я купил товар
                                </span>
                            </div>
                        </div>
                    </div>

                    <div class="client__review__box row">
                        <div
                            class="client__review__heading  col-lg-6 col-sm-8 col-12 d-flex justify-content-between align-items-start"
                        >
                            <h4 class="client__review__name">
                                Ахмад Собиров
                            </h4>

                            <star-rating
                                class="star__rating"
                                :read-only="true"
                                :increment="0.5"
                                :rating="3.5"
                                :show-rating="false"
                                inactive-color="#219EBC"
                                :star-size="18"
                            ></star-rating>
                        </div>
                        <div class="client__review__txt col-sm-12">
                            <span>
                                Ткань по своей фактуре - это не ткань, которая
                                создает очень мелкие морщинки, занимает все ваше
                                тело, качество проявляется в любом виде.
                            </span>
                        </div>
                        <div
                            class="client__review__date col-lg-6 col-sm-8 col-12 d-flex justify-content-between align-items-center"
                        >
                            <span class="client__review--date">
                                21.04.2021
                            </span>

                            <div class="client__buy--svg">
                                <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M16 8C16 10.1217 15.1571 12.1566 13.6569 13.6569C12.1566 15.1571 10.1217 16 8 16C5.87827 16 3.84344 15.1571 2.34315 13.6569C0.842855 12.1566 0 10.1217 0 8C0 5.87827 0.842855 3.84344 2.34315 2.34315C3.84344 0.842855 5.87827 0 8 0C10.1217 0 12.1566 0.842855 13.6569 2.34315C15.1571 3.84344 16 5.87827 16 8ZM12.03 4.97C11.9586 4.89882 11.8735 4.84277 11.7799 4.80522C11.6863 4.76766 11.5861 4.74936 11.4853 4.75141C11.3845 4.75347 11.2851 4.77583 11.1932 4.81717C11.1012 4.85851 11.0185 4.91797 10.95 4.992L7.477 9.417L5.384 7.323C5.24183 7.19052 5.05378 7.1184 4.85948 7.12183C4.66518 7.12525 4.47979 7.20397 4.34238 7.34138C4.20497 7.47879 4.12625 7.66418 4.12283 7.85848C4.1194 8.05278 4.19152 8.24083 4.324 8.383L6.97 11.03C7.04128 11.1012 7.12616 11.1572 7.21958 11.1949C7.313 11.2325 7.41305 11.2509 7.51375 11.2491C7.61444 11.2472 7.71374 11.2251 7.8057 11.184C7.89766 11.1429 7.9804 11.0837 8.049 11.01L12.041 6.02C12.1771 5.8785 12.2523 5.68928 12.2504 5.49296C12.2485 5.29664 12.1698 5.10888 12.031 4.97H12.03Z"
                                        fill="#219EBC"
                                    />
                                </svg>
                                <span>
                                    Я купил товар
                                </span>
                            </div>
                        </div>
                    </div>

                    <div class="client__review__box row">
                        <div
                            class="client__review__heading  col-lg-6 col-sm-8 col-12 d-flex justify-content-between align-items-start"
                        >
                            <h4 class="client__review__name">
                                Улугбек Мустаков
                            </h4>

                            <star-rating
                                class="star__rating"
                                :read-only="true"
                                :increment="0.5"
                                :rating="4"
                                :show-rating="false"
                                inactive-color="#219EBC"
                                :star-size="18"
                            ></star-rating>
                        </div>
                        <div class="client__review__txt col-sm-12">
                            <span>
                                Полноразмерное качество красивое.
                            </span>
                        </div>
                        <div
                            class="client__review__date  col-lg-6 col-sm-8 col-12 d-flex justify-content-between align-items-center"
                        >
                            <span class="client__review--date">
                                26.04.2021
                            </span>

                            <div class="client__buy--svg">
                                <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M16 8C16 10.1217 15.1571 12.1566 13.6569 13.6569C12.1566 15.1571 10.1217 16 8 16C5.87827 16 3.84344 15.1571 2.34315 13.6569C0.842855 12.1566 0 10.1217 0 8C0 5.87827 0.842855 3.84344 2.34315 2.34315C3.84344 0.842855 5.87827 0 8 0C10.1217 0 12.1566 0.842855 13.6569 2.34315C15.1571 3.84344 16 5.87827 16 8ZM12.03 4.97C11.9586 4.89882 11.8735 4.84277 11.7799 4.80522C11.6863 4.76766 11.5861 4.74936 11.4853 4.75141C11.3845 4.75347 11.2851 4.77583 11.1932 4.81717C11.1012 4.85851 11.0185 4.91797 10.95 4.992L7.477 9.417L5.384 7.323C5.24183 7.19052 5.05378 7.1184 4.85948 7.12183C4.66518 7.12525 4.47979 7.20397 4.34238 7.34138C4.20497 7.47879 4.12625 7.66418 4.12283 7.85848C4.1194 8.05278 4.19152 8.24083 4.324 8.383L6.97 11.03C7.04128 11.1012 7.12616 11.1572 7.21958 11.1949C7.313 11.2325 7.41305 11.2509 7.51375 11.2491C7.61444 11.2472 7.71374 11.2251 7.8057 11.184C7.89766 11.1429 7.9804 11.0837 8.049 11.01L12.041 6.02C12.1771 5.8785 12.2523 5.68928 12.2504 5.49296C12.2485 5.29664 12.1698 5.10888 12.031 4.97H12.03Z"
                                        fill="#219EBC"
                                    />
                                </svg>
                                <span>
                                    Я купил товар
                                </span>
                            </div>
                        </div>
                    </div>

                    <a href="#" class="clients__review__btn">
                        Показать больше комментариев
                    </a>
                </div>

                <div class="col-lg-4 customer__review__container">
                    <div class="customer__review__box row">
                        <h4 class="customer__review__header col-sm-12">
                            Оставьте ваш отзыв
                        </h4>

                        <input
                            type="text"
                            placeholder="Ваше имя"
                            class="customer__review__input col-sm-12"
                        />

                        <input
                            type="text"
                            placeholder="Ваш e-mail"
                            class="customer__review__input col-sm-12"
                        />

                        <textarea
                            name="review"
                            class="customer__review__input customer__review__txt col-sm-12"
                            placeholder="Ваш отзыв"
                        >
                        </textarea>

                        <a href="#" class="customer__review__send--btn ">
                            Отправить отзыв
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <section class="container popular__container">
            <div class="popular__heading">В магазине</div>
            <div class="popular__item-box">
                <div class="popular__items">
                    <img
                        class="popular__items__img"
                        src="../assets/img/other/6.png"
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
                                    src="../assets/img/magazines/star.png"
                                    alt="Star img"
                                /><span>4</span>
                            </div>
                        </div>
                        <h4 class="popular__items__desription--categorie">
                            Детская одежда
                        </h4>
                        <span
                            class="popular__items__desription--price popular__items__desription--old--price hidden"
                            >580 000 сум</span
                        >
                        <span class="popular__items__desription--price"
                            >480 000 сум</span
                        >
                    </div>
                </div>

                <div class="popular__items">
                    <img
                        class="popular__items__img"
                        src="../assets/img/other/7.png"
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
                                    src="../assets/img/magazines/star.png"
                                    alt="Star img"
                                /><span>4</span>
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
                    </div>
                </div>

                <div class="popular__items">
                    <img
                        class="popular__items__img"
                        src="../assets/img/other/8.png"
                        alt="Popular item photo"
                        type="photo/png"
                    />
                    <div class="popular__items__desription">
                        <div class="name__rating">
                            <span class="popular__items__desription--name">
                                Кросовки
                            </span>

                            <div class="magazine__item--rating">
                                <img
                                    src="../assets/img/magazines/star.png"
                                    alt="Star img"
                                /><span>4</span>
                            </div>
                        </div>
                        <h4 class="popular__items__desription--categorie">
                            для фанатов футбола Ювентус
                        </h4>
                        <span
                            class="popular__items__desription--price popular__items__desription--old--price hidden"
                        ></span>
                        <span class="popular__items__desription--price"
                            >1 280 000 сум</span
                        >
                    </div>
                </div>

                <div class="popular__items">
                    <img
                        class="popular__items__img"
                        src="../assets/img/other/9.png"
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
                                    src="../assets/img/magazines/star.png"
                                    alt="Star img"
                                /><span>4</span>
                            </div>
                        </div>
                        <h4 class="popular__items__desription--categorie">
                            Женская Футболка
                        </h4>
                        <span
                            class="popular__items__desription--price popular__items__desription--old--price hidden"
                            >350 000 сум</span
                        >
                        <span class="popular__items__desription--price"
                            >200 000 сум</span
                        >
                    </div>
                </div>

                <div class="popular__items">
                    <img
                        class="popular__items__img"
                        src="../assets/img/other/10.png"
                        alt="Popular item photo"
                        type="photo/png"
                    />
                    <div class="popular__items__desription">
                        <div class="name__rating">
                            <span class="popular__items__desription--name">
                                Одежда
                            </span>

                            <div class="magazine__item--rating">
                                <img
                                    src="../assets/img/magazines/star.png"
                                    alt="Star img"
                                /><span>4</span>
                            </div>
                        </div>
                        <h4 class="popular__items__desription--categorie">
                            Новая весенняя коллекция для женщин
                        </h4>
                        <span
                            class="popular__items__desription--price popular__items__desription--old--price hidden"
                        ></span>
                        <span class="popular__items__desription--price"
                            >1 280 000 сум</span
                        >
                    </div>
                </div>

                <div class="popular__items">
                    <img
                        class="popular__items__img"
                        src="../assets/img/other/11.png"
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
                                    src="../assets/img/magazines/star.png"
                                    alt="Star img"
                                /><span>4</span>
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
                    </div>
                </div>

                <div class="popular__items">
                    <img
                        class="popular__items__img"
                        src="../assets/img/other/12.png"
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
                                    src="../assets/img/magazines/star.png"
                                    alt="Star img"
                                /><span>4</span>
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
                    </div>
                </div>

                <div class="popular__items">
                    <img
                        class="popular__items__img"
                        src="../assets/img/other/13.png"
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
                                    src="../assets/img/magazines/star.png"
                                    alt="Star img"
                                /><span>4</span>
                            </div>
                        </div>
                        <h4 class="popular__items__desription--categorie">
                            для фанатов футбола Ювентус
                        </h4>
                        <span
                            class="popular__items__desription--price popular__items__desription--old--price hidden"
                        ></span>
                        <span class="popular__items__desription--price"
                            >1 280 000 сум</span
                        >
                    </div>
                </div>

                <div class="popular__items">
                    <img
                        class="popular__items__img"
                        src="../assets/img/other/14.png"
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
                                    src="../assets/img/magazines/star.png"
                                    alt="Star img"
                                /><span>4</span>
                            </div>
                        </div>
                        <h4 class="popular__items__desription--categorie">
                            весенняя рубашка для мужчин
                        </h4>
                        <span
                            class="popular__items__desription--price popular__items__desription--old--price hidden"
                        ></span>
                        <span class="popular__items__desription--price"
                            >474 000 сум</span
                        >
                    </div>
                </div>

                <div class="popular__items">
                    <img
                        class="popular__items__img"
                        src="../assets/img/other/15.png"
                        alt="Popular item photo"
                        type="photo/png"
                    />
                    <div class="popular__items__desription">
                        <div class="name__rating">
                            <span class="popular__items__desription--name">
                                Одежда
                            </span>

                            <div class="magazine__item--rating">
                                <img
                                    src="../assets/img/magazines/star.png"
                                    alt="Star img"
                                /><span>4</span>
                            </div>
                        </div>
                        <h4 class="popular__items__desription--categorie">
                            Новая весенняя коллекция для женщин
                        </h4>
                        <span
                            class="popular__items__desription--price popular__items__desription--old--price hidden"
                        ></span>
                        <span class="popular__items__desription--price"
                            >1 280 000 сум</span
                        >
                    </div>
                </div>
            </div>
        </section>

        <section class="container popular__container">
            <div class="popular__heading">Похожи товари</div>
            <div class="popular__item-box">
                <div class="popular__items">
                    <img
                        class="popular__items__img"
                        src="../assets/img/Other/1.png"
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
                                    src="../assets/img/magazines/star.png"
                                    alt="Star img"
                                /><span>4</span>
                            </div>
                        </div>
                        <h4 class="popular__items__desription--categorie">
                            Детская одежда
                        </h4>
                        <span
                            class="popular__items__desription--price popular__items__desription--old--price hidden"
                            >580 000 сум</span
                        >
                        <span class="popular__items__desription--price"
                            >480 000 сум</span
                        >
                    </div>
                </div>

                <div class="popular__items">
                    <img
                        class="popular__items__img"
                        src="../assets/img/Popular/boy-1.png"
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
                                    src="../assets/img/magazines/star.png"
                                    alt="Star img"
                                /><span>4</span>
                            </div>
                        </div>
                        <h4 class="popular__items__desription--categorie">
                            Детская одежда
                        </h4>
                        <span
                            class="popular__items__desription--price popular__items__desription--old--price hidden"
                            >580 000 сум</span
                        >
                        <span class="popular__items__desription--price"
                            >480 000 сум</span
                        >
                    </div>
                </div>

                <div class="popular__items">
                    <img
                        class="popular__items__img"
                        src="../assets/img/catalog_page/2.png"
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
                                    src="../assets/img/magazines/star.png"
                                    alt="Star img"
                                /><span>3.5</span>
                            </div>
                        </div>

                        <h4 class="popular__items__desription--categorie">
                            Мужская кожаная куртка
                        </h4>
                        <span class="popular__items__desription--price"
                            >1 080 000 сум</span
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
                        <span class="popular__items__desription--name"
                            >Одежда</span
                        >
                        <h4 class="popular__items__desription--categorie">
                            Новая весенная коллекция для женщин
                        </h4>
                        <span
                            class="popular__items__desription--price popular__items__desription--old--price"
                            >1 480 000 сум</span
                        >
                        <span class="popular__items__desription--price"
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
                        <span class="popular__items__desription--name"
                            >Рубашки</span
                        >
                        <h4 class="popular__items__desription--categorie">
                            весенная рубашка для мужчин
                        </h4>
                        <span class="popular__items__desription--price"
                            >474 000 сум</span
                        >
                    </div>
                </div>
            </div>
            <a href="#" class="popular__btn">Показать ещё</a>
        </section>
    </div>
</template>

<script>
export default {
    data() {
        return {
            rating: "No Rating Selected",
            currentRating: "No Rating",
            currentSelectedRating: "No Current Rating",
            boundRating: 3,

            productSlickOptions: {
                focusOnSelect: true,
                slidesToScroll: 1,
                touchThreshold: 1,
                infinite: true,
                speed: 500,
                slidesToShow: 1
            }
        };
    },
    methods: {
        setRating: function(rating) {
            this.rating = "You have Selected: " + rating + " stars";
        },
        showCurrentRating: function(rating) {
            this.currentRating =
                rating === 0
                    ? this.currentSelectedRating
                    : "Click to select " + rating + " stars";
        },
        setCurrentSelectedRating: function(rating) {
            this.currentSelectedRating =
                "You have Selected: " + rating + " stars";
        }
    }
};
</script>

<style lang="scss" scoped>
.image-product {
    .product__img__box {
        width: 100%;
        height: 457px;
        overflow: hidden;

        .img {
            width: 100%;
            height: 457px;

            img {
                width: 100%;
                height: 457px;
                object-fit: cover;
            }
        }
    }
}

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

        .star__rating,
        .favorite__icon {
            padding-left: 4px;
            transform: translateY(-2px);
            display: inline-block;
        }

        .favorite__icon {
            transform: translateY(-1px);
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

.clients__review__container {
    .clients__review__header {
        margin-bottom: 30px;
        font-family: Roboto, sans-serif;
        font-weight: 500;
        font-size: 24px;
        line-height: 100%;
        /* identical to box height, or 24px */
        color: #000000;
        span {
            color: #219ebc;
        }
    }

    .client__review__box {
        margin-bottom: 20px;

        .client__review__heading {
            .client__review__name {
                margin-bottom: 10px;
                font-family: Roboto, sans-serif;
                font-weight: 500;
                font-size: 20px;
                line-height: 130%;
                /* identical to box height, or 26px */
                color: #000000;
            }

            .star__rating {
                width: 127px;
            }
        }

        .client__review__txt {
            margin-bottom: 20px;
            span {
                font-family: Roboto;
                font-size: 16px;
                line-height: 130%;
                /* or 21px */
                color: #666666;
            }
        }

        .client__review__date {
            .client__review--date {
                font-family: Roboto;
                font-size: 14px;
                line-height: 130%;
                /* or 18px */
                color: #666666;
            }

            .client__buy--svg {
                span {
                    font-family: Roboto;
                    font-size: 16px;
                    line-height: 130%;
                    /* identical to box height, or 21px */
                    color: #666666;
                }
            }
        }
    }

    .clients__review__btn {
        display: inline-block;
        margin: 20px 0;
        padding: 12px 24px;
        border: 1px solid #666666;
        border-radius: 5px;

        // TEXT STYLING
        font-family: Roboto, sans-serif;
        font-size: 14px;
        line-height: 100%;
        /* identical to box height, or 14px */
        color: #666666;
    }
}

.customer__review__container {
    .customer__review__box {
        margin: 0;
        padding: 30px;
        max-width: 373px;
        background-color: #fce3a4;
        border-radius: 5px;

        .customer__review__header {
            font-family: Roboto, sans-serif;
            font-size: 24px;
            line-height: 1;
            /* or 31px */
            color: #023047;
            margin-bottom: 20px;
            padding: 0;
        }

        .customer__review__input {
            display: inline-block;
            padding: 15px 12px;
            font-family: Roboto, sans-serif;
            font-size: 14px;
            line-height: 100%;
            /* identical to box height, or 14px */
            &::-webkit-input-placeholder {
                color: #c4c4c4;
                font-style: italic;
            }
            border: none;
            border-radius: 3px;

            color: #000;
            height: 1em;
            margin-bottom: 20px;
        }

        .customer__review__txt {
            height: 7em;
            line-height: 1.3;
            padding: 10px 12px;
        }

        .customer__review__send--btn {
            margin: auto;
            padding: 12px 33px;
            background-color: #fe9e0d;
            border-radius: 5px;

            color: #ffffff;
            font-family: Roboto, sans-serif;
            font-weight: 500;
            font-size: 16px;
            line-height: 1;
            /* identical to box height, or 16px */

            transition: all 0.2s;
            @include button__bg--color;
            @include hover__active--animation;
        }
    }
}

@media only screen and (max-width: 992px) {
    //  TO SET ENTER REVIEW SEND BOX
    .customer__review__container {
        padding: 80px 15px;
        .customer__review__box {
            margin-left: auto;
            margin-right: auto;
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
        // .price__col {
        //     padding-right: 0;
        // }

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

@media only screen and (max-width: 576px) {
    // STYLING REVIEW CONTAINER FOR MOBILE DEVICE
    .clients__review__container {
        .client__review__box {
            margin-bottom: 60px;

            .client__review__heading {
                .star__rating {
                    width: auto;
                }
            }

            .client__review__txt {
                margin-bottom: 10px;
            }
        }

        .clients__review__btn {
            display: block;
            padding: 16px 24px;
            // TEXT STYLING
            text-align: center;
        }
    }

    .customer__review__container {
        padding: 60px 0;
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

@media only screen and (max-width: 377px) {
    // DELETING BORDER ON REVIEW SEND BOX
    .customer__review__container {
        .customer__review__box {
            border-radius: 0;
            margin-left: 0;
            margin-right: 0;
            max-width: 375px;
        }
    }
}
</style>

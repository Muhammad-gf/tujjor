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

                <div class="col-md-6 d-flex image__product__container">
                    <div class="row image__product">
                        <div class="col-md-3 col-sm-3  slick__box__container ">
                            <div class="slick__box">
                                <slick
                                    :options="slickOptions"
                                    @afterChange="slideIndex"
                                >
                                    <div>
                                        <img
                                            src="@/assets/img/p4.png"
                                            alt="Image product"
                                        />
                                    </div>

                                    <div>
                                        <img
                                            src="@/assets/img/p4.png"
                                            alt="Image product"
                                        />
                                    </div>

                                    <div>
                                        <img
                                            src="@/assets/img/p4.png"
                                            alt="Image product"
                                        />
                                    </div>

                                    <div>
                                        <img
                                            src="@/assets/img/p4.png"
                                            alt="Image product"
                                        />
                                    </div>

                                    <div>
                                        <img
                                            src="@/assets/img/p4.png"
                                            alt="Image product"
                                        />
                                    </div>
                                    <div>
                                        <img
                                            src="@/assets/img/p4.png"
                                            alt="Image product"
                                        />
                                    </div>

                                    <div>
                                        <img
                                            src="@/assets/img/p4.png"
                                            alt="Image product"
                                        />
                                    </div>

                                    <div>
                                        <img
                                            src="@/assets/img/p4.png"
                                            alt="Image product"
                                        />
                                    </div>
                                </slick>
                            </div>
                        </div>
                        <div class="col-md-9 col-sm-9 ">
                            <div
                                class="img__preview__exp"
                                ref="img__preview__exp"
                            >
                                <img
                                    :src="slideArray[currentSlide]"
                                    alt="Image product"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-6 ">
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

        <section class="navbar__bottom container">
            <div class="navbar__bottom__box row">
                <span
                    class="icon__box d-flex justify-content-center align-items-center "
                >
                    <svg
                        width="24"
                        height="30	"
                        viewBox="0 0 1024 1024"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M882 272.1V144C882 126.3 867.7 112 850 112H174C156.3 112 142 126.3 142 144V272.1C125.3 273.1 112 287 112 304V435.7C111.936 459.904 116.837 483.865 126.4 506.1C130.7 516.3 136 525.9 142 535V880C142 897.6 156.3 912 174 912H850C867.7 912 882 897.7 882 880V535C888.094 525.877 893.317 516.201 897.6 506.1C907.1 483.8 912 460.1 912 435.7V304C912 287 898.7 273.1 882 272.1ZM214 184H810V272H214V184ZM576 840.1H448V736H576V840.1ZM810 840.1H640V704C640 686.3 625.7 672 608 672H416C398.3 672 384 686.3 384 704V840.1H214V597.9C216.9 599.3 219.9 600.7 223 601.9C245.3 611.3 269 616 293.4 616C317.8 616 341.4 611.3 363.8 601.9C377.6 596.1 390.6 588.7 402.5 579.8C402.7 579.7 402.9 579.7 403.1 579.8C415.037 588.738 428.036 596.161 441.8 601.9C464.1 611.3 487.8 616 512.2 616C536.6 616 560.2 611.3 582.6 601.9C596.4 596.1 609.4 588.7 621.3 579.8C621.5 579.7 621.7 579.7 621.9 579.8C633.837 588.738 646.836 596.161 660.6 601.9C682.9 611.3 706.6 616 731 616C755.4 616 779 611.3 801.4 601.9C804.4 600.6 807.4 599.3 810.4 597.9V840.1H810ZM840 435.7C840 495.5 791 544 730.7 544C689.9 544 654.3 521.9 635.5 489.1C632.6 484.1 627.4 481 621.6 481H621C615.3 481 610 484.1 607.1 489.1C597.506 505.832 583.653 519.725 566.949 529.368C550.246 539.011 531.287 544.059 512 544C471.3 544 435.8 522 417 489.3C414 484.2 408.6 481 402.7 481C396.8 481 391.3 484.2 388.4 489.3C378.75 505.968 364.879 519.799 348.184 529.402C331.489 539.004 312.559 544.039 293.3 544C233 544 184 495.5 184 435.7V344.5C184 344.2 184.2 344 184.5 344H839.5C839.8 344 840 344.2 840 344.5V435.7V435.7Z"
                            fill="#FB8500"
                        />
                    </svg>
                </span>

                <span
                    class="header__item icon__box d-flex justify-content-center align-items-center"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="23"
                        viewBox="0 0 24 23"
                        fill="none"
                    >
                        <path
                            d="M23.2243 8.09896L16.0296 7.04962L12.8133 0.506195C12.7255 0.32704 12.581 0.182009 12.4024 0.0938536C11.9547 -0.127957 11.4106 0.0568852 11.1868 0.506195L7.97055 7.04962L0.77582 8.09896C0.577461 8.12739 0.396105 8.22124 0.257255 8.36342C0.0893918 8.53657 -0.0031083 8.76951 7.97568e-05 9.01106C0.00326781 9.25261 0.101883 9.48301 0.274257 9.65163L5.47974 14.7448L4.24992 21.9365C4.22108 22.1038 4.23953 22.2759 4.30317 22.4332C4.36681 22.5905 4.47311 22.7268 4.60999 22.8266C4.74688 22.9263 4.90889 22.9856 5.07764 22.9977C5.24639 23.0098 5.41514 22.9742 5.56475 22.8949L12.0001 19.4995L18.4354 22.8949C18.6111 22.9887 18.8151 23.02 19.0106 22.9859C19.5037 22.9006 19.8352 22.4314 19.7502 21.9365L18.5204 14.7448L23.7259 9.65163C23.8675 9.51229 23.9611 9.33029 23.9894 9.13123C24.0659 8.63358 23.7202 8.17289 23.2243 8.09896Z"
                            fill="#FB8500"
                        />
                    </svg>
                </span>

                <span
                    class="basket icon__box d-flex justify-content-center align-items-center"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="21"
                        height="24"
                        viewBox="0 0 21 24"
                        fill="none"
                    >
                        <path
                            d="M10.4426 1.66086C9.67089 1.66086 8.93077 1.96765 8.38508 2.51373C7.83938 3.05982 7.53281 3.80047 7.53281 4.57275V7.48463H6.07791V4.57275C6.07791 3.41433 6.53776 2.30335 7.3563 1.48423C8.17485 0.665098 9.28503 0.204918 10.4426 0.204918C11.6002 0.204918 12.7104 0.665098 13.5289 1.48423C14.3475 2.30335 14.8073 3.41433 14.8073 4.57275V7.48463H13.3524V4.57275C13.3524 3.80047 13.0459 3.05982 12.5002 2.51373C11.9545 1.96765 11.2144 1.66086 10.4426 1.66086ZM6.07791 7.48463H3.69187C3.16937 7.48475 2.66426 7.67245 2.26833 8.01363C1.87239 8.35481 1.61192 8.82681 1.53424 9.34387L0.0400561 19.3214C-0.0373626 19.8392 -0.00228232 20.3675 0.142904 20.8704C0.28809 21.3733 0.539966 21.8389 0.881348 22.2356C1.22273 22.6322 1.64559 22.9505 2.12107 23.1687C2.59656 23.3869 3.11348 23.4999 3.63658 23.5H17.2472C17.7704 23.5001 18.2875 23.3873 18.7632 23.1691C19.2388 22.951 19.6619 22.6328 20.0034 22.2361C20.345 21.8395 20.597 21.3737 20.7422 20.8707C20.8875 20.3677 20.9226 19.8393 20.8452 19.3214L19.3495 9.34387C19.2719 8.82706 19.0116 8.35525 18.616 8.0141C18.2204 7.67296 17.7156 7.4851 17.1934 7.48463H14.8073V9.66854C14.8073 9.86162 14.7307 10.0468 14.5943 10.1833C14.4578 10.3198 14.2728 10.3965 14.0799 10.3965C13.887 10.3965 13.7019 10.3198 13.5655 10.1833C13.4291 10.0468 13.3524 9.86162 13.3524 9.66854V7.48463H7.53281V9.66854C7.53281 9.86162 7.45617 10.0468 7.31975 10.1833C7.18332 10.3198 6.99829 10.3965 6.80536 10.3965C6.61243 10.3965 6.4274 10.3198 6.29098 10.1833C6.15455 10.0468 6.07791 9.86162 6.07791 9.66854V7.48463Z"
                            fill="#FB8500"
                        />
                    </svg>
                    <span class="basket-count">
                        4
                    </span>
                </span>

                <a
                    href="#"
                    class="navbar__bottom__button button__to__basket  d-flex justify-content-center align-items-center"
                >
                    корзину
                </a>
                <a
                    href="#"
                    class="navbar__bottom__button button__buy__now d-flex justify-content-center align-items-center"
                >
                    Купить
                </a>
            </div>
        </section>
    </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
    components: {
        VueSlickCarousel
    },
    head: {
        title: "Продукт — Tujjor. Низкие цены и широкий ассортимент!",
        meta: [
            {
                hid: "description",
                name: "description",
                content: "Продукт - Tujjor"
            }
        ]
    },
    data() {
        return {
            rating: "No Rating Selected",
            currentRating: "No Rating",
            currentSelectedRating: "No Current Rating",
            boundRating: 3,
            currentSlideHeight: 0,
            currentSlide: 0,
            slideArray: [
                "_nuxt/assets/img/catalog_page/4.png",
                "_nuxt/assets/img/catalog_page/3.png",
                "_nuxt/assets/img/catalog_page/2.png",
                "_nuxt/assets/img/catalog_page/1.png",
                "_nuxt/assets/img/catalog_page/4.png",
                "_nuxt/assets/img/catalog_page/2.png",
                "_nuxt/assets/img/catalog_page/3.png",
                "_nuxt/assets/img/catalog_page/1.png"
            ],

            slickOptions: {
                focusOnSelect: true,

                dots: false,
                arrows: true,
                infinite: true,
                slidesToShow: 4,
                slidesToScroll: 1,
                vertical: true,
                verticalSwiping: true
            },

            productData: {}
        };
    },

    mounted() {
        this.currentSlide = 0;
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
        },

        slideIndex(event, slick, currentSlide) {
            console.log("afterChange", event, slick, currentSlide);
            this.currentSlide = currentSlide;
        }
    },

    async mounted() {
        await this.$axios
            .$get("http://cdn.tujjor.org/api/product/714034-asd")
            .then(response => {
                if (response.success) {
                    this.productData = response.data[0];
                    console.log("product", response);
                    console.log("data", this.productData);
                    this.isGet = true;
                    return response;
                } else {
                    throw new Error("Could not save data!");
                }
            })
            .catch(error => {
                // handle error
                console.log(error);
                this.error = error.message;
            });
    }
};
</script>

<style lang="scss" scoped>
.image__product__container {
    align-items: flex-start;
    .image__product {
        flex-wrap: nowrap;
        // .slick__box__container {
        //     position: relative;

        //     .slick__box {
        //         position: absolute;
        //         top: 0;
        //         left: 0;
        //         right: 0;
        //         bottom: 0;
        //         .slick-slider {
        //             height: 100% !important;
        //             width: 100%;

        //             slick-list {
        //                 height: 100% !important;
        //                 padding: 0;
        //                 .slick-track {
        //                     height: 100% !important;
        //                     padding: 0;
        //                     .slick-slide {
        //                         div > div > img {
        //                             object-fit: cover;
        //                             width: 100%;
        //                         }
        //                     }
        //                 }
        //             }
        //         }
        //     }
        // }

        .img__preview__exp {
            width: 100%;
            height: 100%;
            img {
                height: 100%;
                width: 100%;
                object-fit: cover;
            }
        }

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

.navbar__bottom {
    display: none;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100vw;
    background-color: #fcf6f6;
    z-index: 15;
    padding: 0 15px;
    text-transform: uppercase;
    font-size: 16px;
    color: white;
    height: 45px;
    .navbar__bottom__box {
        // justify-content: space-evenly;
        .icon__box {
            cursor: pointer;
            padding: 10px 10px;
            height: 45px;
            position: relative;

            .basket-count {
                position: absolute;
                top: 7px;
                right: 4px;
                background: #023047;
                box-shadow: 0px 0px 2px rgb(0 0 0 / 40%);
                display: inline-block;
                padding: 2px 6px;
                border-radius: 15px;
                font-style: Roboto;
                font-weight: 500;
                font-size: 9.63934px;
                line-height: 14px;
                color: #ffffff;

                display: flex;
                align-items: center;
                justify-content: center;
            }
        }

        .navbar__bottom__button {
            flex: 0 0 30%;
            flex-grow: 1;
            position: relative;
            padding: 0 10px;

            font-family: Roboto;
            font-style: normal;
            font-weight: 500;
            font-size: 16px;
            line-height: 100%;
            /* or 16px */
        }
        .button__to__basket {
            background-color: #fff1f1;
            color: #fe9e0d;
        }
        .button__buy__now {
            background-color: #fe9e0d;
            color: #fff;
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

    .navbar__bottom {
        display: block;
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

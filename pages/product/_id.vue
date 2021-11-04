<template>
    <div>
        <base-loading v-if="!isGet"></base-loading>

        <div v-if="isGet && noData">
            <section
                class="container popular__container search__noData d-flex justify-content-center align-items-center"
                style="height: 50vh"
            >
                <div class="popular__heading">
                    {{ $t("err4") }}
                </div>
            </section>
        </div>

        <div v-if="isGet && !noData" class="product-show">
            <div class="container">
                <div class="row">
                    <div class="image__product__container col-md-6 d-flex">
                        <div class="image__product row">
                            <div
                                class=" col-2 col-sm-2 col-md-2 col-lg-2 flex-shrink-1 flex-grow-0 pr-0"
                            >
                                <div
                                    class="img__view__box"
                                    :style="{
                                        height: carouselData.boxHeight + 'px'
                                    }"
                                >
                                    <ul
                                        ref="img__view__item"
                                        class="img__view__list"
                                    >
                                        <li
                                            v-for="(item,
                                            index) in product.images"
                                            :key="index"
                                            :class="{ active: index === 0 }"
                                        >
                                            <div
                                                class="img__view__item"
                                                :style="{
                                                    height:
                                                        carouselData.imgWidth +
                                                        'px'
                                                }"
                                            >
                                                <img
                                                    :src="$cdn + item.image"
                                                    @click="
                                                        selectImg($event);
                                                        addClassActive($event);
                                                    "
                                                    @onload="onResize"
                                                    alt="Image item"
                                                />
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div
                                class="col-10 col-sm-10 col-md-10 col-lg-10  flex-grow-0 h-100 w-100 pr-0"
                                ref="img__preview__exp"
                                style="padding-left:8px"
                            >
                                <div class="img__preview__exp">
                                    <img
                                        ref="img__preview"
                                        :src="
                                            product.images
                                                ? $cdn + product.images[0].image
                                                : ''
                                        "
                                        alt="Image product"
                                        :style="{
                                            height: carouselData.imgHeight
                                        }"
                                        @onload="onResize"
                                    />
                                </div>
                            </div>

                            <!-- img modal to show on full size -->
                            <div
                                class="img__modal"
                                v-if="carouselData.imgBoxModal"
                                @click="
                                    carouselData.imgBoxModal = !carouselData.imgBoxModal
                                "
                            >
                                <div class="img__box">
                                    <img
                                        :src="
                                            this.$refs.img__preview
                                                ? this.$refs.img__preview.src
                                                : ''
                                        "
                                        @onload="onResize"
                                        alt="Image product"
                                    />
                                </div>
                                <button class="img__close">
                                    X
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-6 ">
                        <div class="col-md-12 product__name">
                            <h2>
                                {{ product.name[$i18n.locale] }}
                            </h2>
                        </div>
                        <div class="product-info">
                            <div class="row">
                                <div class="col-md-6  price__col">
                                    <div class="__price">
                                        <b
                                            v-text="
                                                productPrice + ` ${$t('sum')}`
                                            "
                                        >
                                        </b>
                                    </div>
                                </div>
                            </div>

                            <h4>{{ $t("color") }}:</h4>
                            <div class="select__image">
                                <div
                                    class="select__option"
                                    v-for="(param, index) in product.params"
                                    :key="param._id"
                                >
                                    <input
                                        type="radio"
                                        name="product param"
                                        :id="param._id"
                                        :checked="index === 0"
                                    />
                                    <label :for="param._id">
                                        <img
                                            :src="$cdn + param.image"
                                            alt="Select Option"
                                            @click="
                                                selectProductParam(
                                                    $event,
                                                    param
                                                )
                                            "
                                        />
                                    </label>
                                </div>
                            </div>
                            <h4 class="heading__size">
                                {{ $t("size") }}:
                                <span v-text="productSize"> </span>
                            </h4>
                            <div class="select__size">
                                <div
                                    v-for="(size, index) in selectedProduct
                                        .params.sizes"
                                    :key="size._id"
                                    ref="productSizes"
                                >
                                    <input
                                        type="radio"
                                        name="product__size"
                                        :id="size._id"
                                        :value="size.size"
                                        :checked="
                                            size.size ===
                                                selectedProduct.size.size
                                        "
                                        @click="selectProductSize($event)"
                                    />
                                    <label :for="size._id">{{
                                        size.size
                                    }}</label>
                                </div>
                            </div>

                            <h4
                                class="heading__size d-flex align-items-center mt-0 mb-1 pb-2 border__bottom"
                            >
                                {{ $t("kol") }}:
                                <div class="product-count pl-2 mb-0 mt-1">
                                    <div class="count__input">
                                        <button
                                            class="minus"
                                            @click="changeCount(-1)"
                                        >
                                            -
                                        </button>
                                        <input
                                            type="text"
                                            disabled="disabled"
                                            :value="productCount"
                                        />
                                        <button
                                            class="plus"
                                            @click="changeCount(1)"
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                            </h4>

                            <div class="row ">
                                <div
                                    class="product__info--txt col-md-6 col-sm-6 col-6"
                                >
                                    {{ $t("nomtov") }}:
                                    <Span>{{ product.article }}</Span>
                                </div>

                                <div
                                    class="product__info--txt col-md-6 col-sm-6 col-6"
                                >
                                    {{ $t("brand") }}:
                                    <Span>
                                        {{ selectedProduct.brand.name }}
                                    </Span>
                                </div>

                                <div
                                    class="product__info--txt col-md-6 col-sm-6 col-6"
                                >
                                    {{ $t("rating") }}:
                                    <Span>
                                        <star-rating
                                            class="star__rating "
                                            :increment="0.5"
                                            inactive-color="#219EBC"
                                            :star-size="12"
                                            :show-rating="false"
                                            :rating="4.5"
                                            :read-only="true"
                                        >
                                        </star-rating>
                                    </Span>
                                </div>

                                <div
                                    class="product__info--txt col-md-6 col-sm-6 col-6"
                                >
                                    {{ $t("deliverTime") }}:
                                    <Span>
                                        {{ selectedProduct.deliver.from }}-{{
                                            selectedProduct.deliver.to
                                        }}
                                        {{ $t("day") }}
                                    </Span>
                                </div>

                                <div
                                    class="product__info--txt col-md-6 col-sm-6 col-6"
                                >
                                    {{ $t("like") }}:
                                    <Span>
                                        <svg
                                            class="favourite__icon "
                                            width="30"
                                            height="20"
                                            viewBox="12 -1 14 28"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            @click="toggleFavourite($event)"
                                        >
                                            <path
                                                ref="favourite__icon"
                                                d="M23.2243 8.09896L16.0296 7.04962L12.8133 0.506195C12.7255 0.32704 12.581 0.182009 12.4024 0.0938536C11.9547 -0.127957 11.4106 0.0568852 11.1868 0.506195L7.97055 7.04962L0.77582 8.09896C0.577461 8.12739 0.396105 8.22124 0.257255 8.36342C0.0893918 8.53657 -0.0031083 8.76951 7.97568e-05 9.01106C0.00326781 9.25261 0.101883 9.48301 0.274257 9.65163L5.47974 14.7448L4.24992 21.9365C4.22108 22.1038 4.23953 22.2759 4.30317 22.4332C4.36681 22.5905 4.47311 22.7268 4.60999 22.8266C4.74688 22.9263 4.90889 22.9856 5.07764 22.9977C5.24639 23.0098 5.41514 22.9742 5.56475 22.8949L12.0001 19.4995L18.4354 22.8949C18.6111 22.9887 18.8151 23.02 19.0106 22.9859C19.5037 22.9006 19.8352 22.4314 19.7502 21.9365L18.5204 14.7448L23.7259 9.65163C23.8675 9.51229 23.9611 9.33029 23.9894 9.13123C24.0659 8.63358 23.7202 8.17289 23.2243 8.09896Z"
                                                :fill="
                                                    favouriteObj.status
                                                        ? '#fb8500'
                                                        : '#ccc'
                                                "
                                            />
                                        </svg>
                                    </Span>
                                </div>
                            </div>

                            <p class="product__info--description">
                                {{ selectedProduct.description[$i18n.locale] }}
                            </p>

                            <div class="row navi__buttons">
                                <div
                                    class="col-md-7 col-sm-8  d-flex justify-content-around justify-content-sm-between"
                                >
                                    <a
                                        href="#"
                                        class="btn btn--buy"
                                        @click.prevent="goToOrder"
                                    >
                                        {{ $t("sale") }}
                                    </a>

                                    <a
                                        href="#"
                                        class="btn btn--basket"
                                        @click.prevent="toggleBasket"
                                    >
                                        {{ $t("bag") }}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-10 product__image__exp">
                        <div class="row">
                            <div
                                class="col-md-12 product__image--img "
                                v-for="img in selectedProduct.footerImages"
                                :key="img._id"
                            >
                                <img
                                    :src="$cdn + img.image"
                                    alt="Product img"
                                />
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-12 clients__review__container">
                        <h4 class="clients__review__header ">
                            {{ $t("comments") }}
                            <span>
                                {{ comments.length }}
                            </span>
                        </h4>

                        <div
                            class="client__review__box row"
                            v-if="comments != null"
                            v-for="(item, index) in comments"
                            :key="item"
                        >
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
                                    Качество ткани хорошее, но если вы
                                    предпочитаете оверсайз, выбирайте размер
                                    меньше вашего, например, слишком свободные
                                    рукава.
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
                        <a
                            href="#"
                            class="clients__review__btn"
                            v-if="comments.length != 0"
                        >
                            {{ $t("allComment") }}
                        </a>

                        <div
                            class="alert alert-warning"
                            v-if="comments.length == 0"
                            role="alert"
                        >
                            {{ $t("noComment") }}
                        </div>
                    </div>
                </div>
            </div>

            <section class="container popular__container">
                <div class="popular__heading">{{ $t("mag") }}</div>
                <div class="popular__item-box">
                    <nuxt-link
                        class="popular__items"
                        v-for="product in productsInMagazine.data"
                        :key="product._id"
                        :to="{
                            name: `product-id___${$i18n.locale}`,
                            params: { id: product.slug }
                        }"
                    >
                        <img
                            class="popular__items__img"
                            :src="$cdn + product.image"
                            alt="Popular item photo"
                            type="photo/png"
                        />
                        <div class="popular__items__desription">
                            <div class="name__rating">
                                <span class="popular__items__desription--name">
                                    {{ product.category[$i18n.locale] }}
                                </span>

                                <div class="magazine__item--rating">
                                    <img
                                        src="../../assets/img/magazines/star.png"
                                        alt="Star img"
                                    /><span>4</span>
                                </div>
                            </div>
                            <h4 class="popular__items__desription--categorie">
                                {{ product.name[$i18n.locale] }}
                            </h4>
                            <span
                                class="popular__items__desription--price"
                                v-if="!product.discount"
                                >{{ updatePriceFormat(product.price) }}
                                {{ $t("sum") }}</span
                            >
                            <span
                                class="popular__items__desription--price"
                                v-if="!!product.discount"
                                >{{ updatePriceFormat(product.discount) }}
                                {{ $t("sum") }}</span
                            >
                            <span
                                class="popular__items__desription--price popular__items__desription--old--price hidden"
                                v-if="!!product.discount"
                                >{{ updatePriceFormat(product.price) }}
                                {{ $t("sum") }}</span
                            >
                        </div>
                    </nuxt-link>
                </div>
                <a
                    href="#"
                    class="popular__btn"
                    v-if="
                        productsInMagazine.data.length >=
                            productsInMagazine.limit - 1
                    "
                    @click.prevent="updateMagazineLimit"
                    >{{ $t("all") }}</a
                >
            </section>

            <section class="container popular__container">
                <div class="popular__heading">{{ $t("red") }}</div>
                <div class="popular__item-box">
                    <nuxt-link
                        class="popular__items"
                        v-for="product in productsByCategory.data"
                        :key="product._id"
                        :to="{
                            name: `product-id___${$i18n.locale}`,
                            params: { id: product.slug }
                        }"
                    >
                        <img
                            class="popular__items__img"
                            :src="$cdn + product.image"
                            alt="Popular item photo"
                            type="photo/png"
                        />
                        <div class="popular__items__desription">
                            <div class="name__rating">
                                <span class="popular__items__desription--name">
                                    {{ product.category[$i18n.locale] }}
                                </span>

                                <div class="magazine__item--rating">
                                    <img
                                        src="../../assets/img/magazines/star.png"
                                        alt="Star img"
                                    /><span>4</span>
                                </div>
                            </div>
                            <h4 class="popular__items__desription--categorie">
                                {{ product.name[$i18n.locale] }}
                            </h4>
                            <span
                                class="popular__items__desription--price"
                                v-if="!product.discount"
                                >{{ updatePriceFormat(product.price) }}
                                {{ $t("sum") }}</span
                            >
                            <span
                                class="popular__items__desription--price"
                                v-if="!!product.discount"
                                >{{ updatePriceFormat(product.discount) }}
                                {{ $t("sum") }}</span
                            >
                            <span
                                class="popular__items__desription--price popular__items__desription--old--price hidden"
                                v-if="!!product.discount"
                                >{{ updatePriceFormat(product.price) }}
                                {{ $t("sum") }}</span
                            >
                        </div>
                    </nuxt-link>
                </div>
                <a
                    href="#"
                    class="popular__btn"
                    v-if="
                        productsByCategory.data.length >=
                            productsByCategory.limit - 1
                    "
                    @click.prevent="updateCategoryLimit"
                    >{{ $t("all") }}</a
                >
            </section>

            <section class="navbar__bottom container">
                <div class="navbar__bottom__box row">
                    <nuxt-link
                        :to="{
                            name: `maganize-id___${$i18n.locale}`,
                            params: { id: 2 }
                        }"
                    >
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
                    </nuxt-link>

                    <span
                        class="header__item icon__box d-flex justify-content-center align-items-center"
                    >
                        <nuxt-link to="/favourite" class="header__item basket">
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
                        </nuxt-link>
                    </span>

                    <nuxt-link to="/basket" class=" header__item basket">
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
                            <span class="basket-count" v-if="countBasket > 0">
                                {{ countBasket }}
                            </span>
                        </span>
                    </nuxt-link>

                    <a
                        href="#"
                        class="navbar__bottom__button button__to__basket  d-flex justify-content-center align-items-center"
                        @click.prevent="toggleBasket"
                    >
                        {{ $t("bag") }}
                    </a>

                    <a
                        href="#"
                        class="navbar__bottom__button button__buy__now d-flex justify-content-center align-items-center"
                        @click.prevent="goToOrder"
                    >
                        {{ $t("sale") }}
                    </a>
                </div>
            </section>

            <!-- /////////////////////////////////////////////
            modals on event -->
            <!-- modal favourite -->
            <modal-success v-show="favouriteObj.add" :post-title="$t('upr5')">
            </modal-success>

            <modal-success
                v-show="favouriteObj.remove"
                :post-title="$t('upr5')"
            >
            </modal-success>

            <!-- modal basket -->

            <modal-success v-show="basketObj.added" :post-title="$t('upr6')">
            </modal-success>

            <modal-success v-show="basketObj.updated" :post-title="$t('upr')">
            </modal-success>

            <modal-success v-if="basketObj.inBasket" :post-title="$t('upr7')">
            </modal-success>
        </div>
    </div>
</template>

<script type="text/javascript">
// BaseLoading spinner
import BaseLoading from "../../components/UI/BaseLoading.vue";
import ModalSuccess from "../../components/Modals/SuccessModal.vue";
import { mapGetters, mapActions, mapMutations } from "vuex";

export default {
    components: {
        BaseLoading,
        ModalSuccess
    },

    head() {
        return {
            title: "Продукт — Tujjor. Низкие цены и широкий ассортимент!",
            meta: [
                {
                    hid: this.product ? this.product.brand.name : "!",
                    name: this.product ? this.product.name.uz : "!",
                    content: this.product ? this.product.description.uz : "!"
                }
            ]
        };
    },

    data() {
        return {
            isGet: false,
            noData: false,
            // rating options default
            rating: "No Rating Selected",
            currentRating: "No Rating",
            currentSelectedRating: "No Current Rating",
            boundRating: 3,
            currentSlideHeight: 0,

            // carousel data
            carouselData: {
                // img width for aspect ratio 1:1 in item images carousel
                imgWidth: null,
                imgHeight: "100%",

                // find img height for carousel box
                boxHeight: null,

                // Img list
                imgArray: [
                    "_nuxt/assets/img/catalog_page/4.png",
                    "_nuxt/assets/img/catalog_page/3.png",
                    "_nuxt/assets/img/catalog_page/2.png",
                    "_nuxt/assets/img/catalog_page/1.png",
                    "_nuxt/assets/img/catalog_page/4.png",
                    "_nuxt/assets/img/catalog_page/2.png",
                    "_nuxt/assets/img/catalog_page/3.png",
                    "_nuxt/assets/img/catalog_page/1.png"
                ],

                //image show on screen modal
                imgBoxModal: false
            },

            // product data
            product: null,
            comments: null,
            // selected options
            selectedProduct: null,

            // product price
            productPrice: null,

            // product count
            productCount: 1,
            // product size
            productSize: null,

            checkedProduct: 0,

            productsInMagazine: {
                data: [],
                page: 1,
                limit: 11,
                id: ""
            },
            productsByCategory: {
                data: [],
                page: 1,
                limit: 11,
                id: ""
            },

            favouriteObj: {
                add: false,
                remove: false,
                status: null,
                favouriteId: null
            },

            basketObj: {
                inBasket: false,
                added: false,
                updated: false,
                product: null,
                param: null,
                size: null,
                count: null,
                isCountChanges: false,
                basketId: null
            },

            user: {
                token: this.$auth.strategy.token.get()
            }
        };
    },

    computed: mapGetters([
        "allFavourites",
        "allFavouritesId",
        "allInBasket",
        "isInBasket",
        "countBasket",
        "redirectArray"
    ]),

    methods: {
        // Vuex settings ----------------------------------------------------------
        ...mapActions([
            "fetchFavourites",
            "fetchFavouritesId",
            "fetchBasket",
            "fetchToBasket",
            "fetchCounBasket",
            "updateBasketCount"
        ]),
        ...mapMutations([
            "updateFavourites",
            "updateFavouritesId",
            "pushFavouritesId",
            "deleteFavouritesId",
            "basketFilter",
            "updateOrderProduct",
            "updateOrderAllProducts",
            "setRedirect",
            "resetRedirect",
            "orderProduct"
        ]),

        // ----------------------------------------------------------
        onResize() {
            this.setBoxHeight();
            this.setImgWidth();
            this.setImgHeight();
        },

        setImgHeight() {
            if (window.innerWidth <= 767) {
                this.carouselData.imgHeight =
                    this.$refs.img__preview.clientWidth + "px";
            }
        },

        setImgWidth() {
            this.carouselData.imgWidth = this.$refs.img__view__item.clientWidth;
        },

        setBoxHeight() {
            this.carouselData.boxHeight = this.$refs.img__preview.clientHeight;
        },

        // find carousel src
        selectImg(event) {
            this.$refs.img__preview.src = event.target.currentSrc;
        },

        // add active class to li on hover or click
        addClassActive(event) {
            const pathObj = event.composedPath();
            for (let i = 0; i < pathObj[3].children.length; i++) {
                pathObj[3].children[i].classList.remove("active");
            }
            pathObj[2].classList.add("active");
        },

        // checkbox give sizes on  select param
        selectProductParam(event, param) {
            const oldSize = this.selectedProduct.size.size;
            const obj = this.product.params.reduce((arr, item) =>
                item._id === param._id ? (arr = item) : arr
            );
            this.selectedProduct.params = obj;
            // update size on selected product
            this.updatePrice();
            this.updateSize();
            this.selectImg(event);
            this.selectProductSize(false, oldSize);
            // Check selected

            // event.path[1].control.checked = true;
            // Check first param checked
            // this.$refs.productSizes[0].children[0].checked = true;
        },

        // checkbox give price on select size
        selectProductSize(event, oldSize) {
            if (!!event) {
                const pathObj = event.composedPath();
                const obj = this.selectedProduct.params.sizes.reduce(
                    (obj, param) =>
                        param._id === pathObj[0].id ? (obj = param) : obj
                );
                this.selectedProduct.size = obj;
            }
            if (!!oldSize) {
                const obj = this.selectedProduct.params.sizes.reduce(
                    (obj, param) =>
                        param.size === oldSize ? (obj = param) : obj
                );
                this.selectedProduct.size = obj;
            }

            this.updatePrice();
            this.updateSize();
        },

        // update selected product
        updateProduct(product) {
            this.selectedProduct = { ...product };
            this.selectedProduct.params = product.params[0];
            this.selectedProduct.size = product.params[0].sizes[0];
            if (product.params[0].sizes[0].discount !== null) {
                this.productPrice = this.updatePriceFormat(
                    product.params[0].sizes[0].discount
                );
            } else {
                this.productPrice = this.updatePriceFormat(
                    product.params[0].sizes[0].price
                );
            }
            this.productSize = product.params[0].sizes[0].size;
        },

        // update price on currency format
        updatePriceFormat(price) {
            const form = new Intl.NumberFormat("en-US").format(price);
            return form.replaceAll(",", " ");
        },

        // update product price
        updatePrice() {
            if (this.selectedProduct.size.discount !== null) {
                // const data =
                //     this.selectedProduct.size.discount * this.productCount;
                const data = this.selectedProduct.size.discount;

                this.productPrice = this.updatePriceFormat(data);
            } else {
                // const data =
                //     this.selectedProduct.size.price * this.productCount;

                const data = this.selectedProduct.size.price;
                this.productPrice = this.updatePriceFormat(data);
            }
        },

        // change product count
        changeCount(x) {
            // to fix many clicking in  one moment
            if (this.productCount == 1 && x == "-1") return "1";
            this.productCount += x;
            this.updatePrice();
        },
        // update product size
        updateSize() {
            this.productSize = this.selectedProduct.size.size;
        },

        // favourite settings -----------------------------------------------
        // favourite icon theme
        toggleFavouriteColor(event) {
            const path = event.path[0];
            const svgPath = event.path[0].children[0];
            if (path.nodeName === "path") {
                this.toggleColorImmediat(path);
            } else {
                this.toggleColorImmediat(svgPath);
            }
        },

        // helper toggle color function
        toggleColorImmediat(obj) {
            if (obj.attributes.fill.nodeValue === "#FB8500") {
                obj.attributes.fill.nodeValue = "#ccc";
            } else {
                obj.attributes.fill.nodeValue = "#FB8500";
            }
        },

        // favourite message modal settings
        resetModal() {
            this.favouriteObj.add = false;
            this.favouriteObj.remove = false;
        },

        modalAdd(bool) {
            this.favouriteObj.add === bool
                ? (this.favouriteObj.add = false)
                : (this.favouriteObj.add = true);
        },

        modalRemove(bool) {
            this.favouriteObj.remove === bool
                ? (this.favouriteObj.remove = false)
                : (this.favouriteObj.remove = true);
        },

        showFavouriteModals(add, remove) {
            this.modalAdd(add);
            this.modalRemove(remove);
        },

        // setFavourite all changes
        setFavouriteChanges(event) {
            this.toggleFavouriteColor(event);
            this.resetModal();
            if (!!this.favouriteObj.status) {
                this.showFavouriteModals(true, false);
            }
            if (!this.favouriteObj.status) {
                this.showFavouriteModals(false, true);
            }
            setTimeout(() => {
                this.resetModal();
            }, 1800);
        },

        // find is favurited this product
        isFavourite() {
            const [array] = this.allFavouritesId.filter(
                el => el.product === this.selectedProduct._id
            );
            if (!!array) {
                this.favouriteObj.favouriteId = array._id;
                this.favouriteObj.status = true;
            }
        },

        // remove from favourite fetch request
        async removeFavourite(event) {
            await this.$axios
                .$delete("like/" + this.favouriteObj.favouriteId, {
                    headers: {
                        token: this.user.token
                    }
                })
                .then(response => {
                    if (response.success) {
                        this.favouriteObj.status = false;
                        this.setFavouriteChanges(event);
                        this.deleteFavouritesId(this.favouriteObj.favouriteId);
                    } else {
                        throw new Error("Could not save data!");
                    }
                })
                .catch(err => console.error(err));
        },

        // set favourite fetch request
        async setFavourite(event) {
            await this.$axios
                .$post("like/create", {
                    headers: {
                        token: this.user.token
                    },
                    product: this.selectedProduct._id
                })
                .then(response => {
                    if (response.success) {
                        this.favouriteObj.status = true;
                        this.favouriteObj.favouriteId = response.data._id;
                        this.setFavouriteChanges(event);
                        this.pushFavouritesId({
                            product: response.data.product,
                            _id: response.data._id
                        });
                    } else {
                        throw new Error("Could not save data!");
                    }
                })
                .catch(err => console.error(err));
        },

        // toggle favourite main function for favourite
        toggleFavourite(event) {
            if (!!this.$auth.user) {
                if (!this.favouriteObj.status) {
                    this.setFavourite(event);
                } else {
                    this.removeFavourite(event);
                }
            } else {
                const index = 1;
                const link = this.$route.fullPath;
                this.setRedirect({ link, index });
                this.$router.push({
                    path: "/auth/login"
                });
            }
        },
        // -------------------------------------------------
        // -------------------------- basket settings -------------------------------------
        setProductOptionToBasket() {
            const product = this.selectedProduct._id;
            const param = this.selectedProduct.params._id;
            const size = this.selectedProduct.size._id;
            const count = this.productCount;
            return { product, param, size, count };
        },

        async addToBasket(token, product, param, size, count) {
            await this.fetchToBasket({ token, product, param, size, count });
            this.basketObj.added = true;
        },

        async updateCountOfProduct(token, count) {
            const id = this.isInBasket[0]._id;
            await this.updateBasketCount({ token, id, count });
            this.basketObj.updated = true;
        },

        productInBasket() {
            this.basketObj.inBasket = true;
        },

        resetBasketSetts() {
            this.basketObj.added = false;
            this.basketObj.inBasket = false;
            this.basketObj.updated = false;
        },

        isCountChanged(count) {
            if (!(count === this.isInBasket[0].count)) {
                this.basketObj.isCountChanges = true;
            } else {
                this.basketObj.isCountChanges = false;
                this.productInBasket();
            }
        },

        async toggleBasket() {
            if (!!this.$auth.user) {
                const {
                    product,
                    param,
                    size,
                    count
                } = this.setProductOptionToBasket();
                const token = this.user.token;

                this.resetBasketSetts();

                // await this.fetchCounBasket(token);
                // await this.basketFilter({ product, param, size });
                await Promise.all([
                    this.fetchCounBasket(token),
                    this.basketFilter({ product, param, size })
                ]);
                if (this.isInBasket.length > 0) {
                    this.isCountChanged(count);
                }

                if (this.basketObj.isCountChanges) {
                    await this.updateCountOfProduct(token, count);
                }

                if (this.isInBasket.length === 0) {
                    await this.addToBasket(token, product, param, size, count);
                }

                setTimeout(() => {
                    this.resetBasketSetts();
                }, 1800);
            } else {
                const index = 1;
                const link = this.$route.fullPath;
                this.setRedirect({ link, index });
                this.$router.push({
                    path: "/auth/login"
                });
            }
        },

        goToOrder() {
            if (!!this.$auth.user) {
                const product = this.selectedProduct;
                let basket = [];

                basket.push({
                    image: product.image,
                    name: product.name,
                    count: this.productCount,
                    param: product.params,
                    size: product.size,
                    shop: product.shop,
                    description: product.description,
                    product: product._id
                });

                console.log("alll", basket);
                this.orderProduct(basket);

                this.$router.push({
                    name: `order-id___${this.$i18n.locale}`,
                    params: { id: "all" }
                });
            } else {
                const index = 1;
                const link = this.$route.fullPath;
                this.setRedirect({ link, index });
                this.$router.push({
                    path: "/auth/login"
                });
            }
        },

        // fetch products by magazine
        async searchProductByMagazine() {
            const shopId = this.productsInMagazine.id;
            const page = this.productsInMagazine.page;
            const limit = 11;
            const res = await this.$axios
                .$post("product/filter?page=" + page + "&limit=" + limit, {
                    shop: shopId
                })
                .then(response => {
                    if (response.success) {
                        return response;
                    } else {
                        throw new Error("Could not save data!");
                    }
                })
                .catch(err => console.error(err));
            return res;
        },

        //  go to product on click card of product
        goToProduct(slug) {
            this.$router.push({
                path: "/product/_id",
                params: { id: slug }
            });
        },

        // fetch products by magazine
        async searchProductByCategory() {
            const categoryId = this.productsByCategory.id;
            const limit = 11;
            const page = this.productsByCategory.page;
            const res = await this.$axios
                .$post("product/filter?page=" + page + "&limit=" + limit, {
                    category: [categoryId],
                    brand: [],
                    start: null,
                    end: null,
                    search: "",
                    sort: ""
                })
                .then(response => {
                    if (response.success) {
                        return response;
                    } else {
                        throw new Error("Could not save data!");
                    }
                })
                .catch(err => console.error(err));
            return res;
        },
        async updateCategoryLimit() {
            // this.isGet = false;
            this.productsByCategory.limit += 11;
            this.productsByCategory.page += 1;
            const search = await this.searchProductByCategory();
            this.updateCategoryData(search.data);
            // this.isGet = true;
        },

        async updateMagazineLimit() {
            // this.isGet = false;
            this.productsInMagazine.limit += 11;
            this.productsInMagazine.page += 1;
            const search = await this.searchProductByMagazine();
            this.updateMagazineData(search.data);

            // this.isGet = true;
        },

        updateMagazineData(data) {
            const limit = this.productsInMagazine.limit - 1;
            let result = data.filter(
                res => res._id !== this.selectedProduct._id
            );
            if (result.length > limit) {
                result.pop();
            }
            result.forEach(item => {
                this.productsInMagazine.data.push(item);
            });
        },

        updateCategoryData(data) {
            const limit = this.productsByCategory.limit;
            const result = data.filter(
                res => res._id !== this.selectedProduct._id
            );
            if (result.length > limit) {
                result.pop();
            }
            result.forEach(item => {
                this.productsByCategory.data.push(item);
            });
        },

        resSuccessFunction(response) {
            this.product = response.data[0];
            this.comments = response.comments;
            this.updateProduct(this.product);
        },

        async fetchProduct() {
            const slug = this.$route.params.id;
            const response = await this.$axios
                .$get("/product/" + slug)
                .then(res => {
                    if (res.success && res.data.length > 0) {
                        return res;
                    } else {
                        throw new Error("Could not save data!");
                    }
                })
                .catch(error => {
                    if (error?.response?.status === 404) {
                        this.isGet = this.noData = true;
                    }
                });
            return response;
        }
    },

    async mounted() {
        const data = await this.fetchProduct();
        if (!!data) {
            this.resSuccessFunction(data);
            this.productsInMagazine.id = this.product.shop._id;
            this.productsByCategory.id = this.product.category._id;

            const [productsInMagazine, productsByCategory] = await Promise.all([
                this.searchProductByMagazine(),
                this.searchProductByCategory()
            ]);
            this.updateMagazineData(productsInMagazine.data);
            this.updateCategoryData(productsByCategory.data);
            // is product favourite?
            if (!!this.$auth.user && !!this.product) {
                await this.isFavourite();
            }

            // Register an event listener when the Vue component is ready
            window.addEventListener("resize", this.onResize);

            const interval = setInterval(() => {
                this.onResize();
            }, 1000);
            setTimeout(() => {
                (function() {
                    clearInterval(interval);
                })();
            }, 5000);
            this.isGet = true;
        }
    },

    beforeDestroy() {
        // Unregister the event listener before destroying this Vue instance
        window.removeEventListener("resize", this.onResize);
    }
};
</script>

<style lang="scss" scoped>
html,
body {
    touch-action: auto !important;
}
.border__bottom {
    border-bottom: 1px solid #e5e5e5;
}
.product-show {
    margin-top: 1rem;
}

.image__product__container {
    align-items: flex-start;
    overflow: hidden;
    padding-right: 0;
    .image__product {
        height: 100%;
        width: 100%;
        flex-wrap: wrap;
        align-items: flex-start;
        margin-right: 0;
        padding-right: 0;

        .img__preview__exp {
            width: 100%;
            height: 100%;
            overflow: hidden;
            img {
                height: 100%;
                width: 100%;
                object-fit: cover;
            }

            //  img:hover {
            //     position: relative;
            //     top: 10px;
            //     left: 20px;
            //     transform: scale(2);
            // }
        }

        // styling scrollbar
        ::-webkit-scrollbar {
            width: 7px;
        }

        ::-webkit-scrollbar-thumb {
            border-radius: 5px;
            background-color: #f7931f;
        }

        ::-webkit-scrollbar-track {
            border-radius: 5px;
            box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.25);
        }

        ::-webkit-scrollbar-thumb:hover {
            background-color: rgba(247, 147, 31, 0.7);
        }

        // styling img__view__box
        .img__view__box {
            height: 150px;
            overflow-y: auto;

            .img__view__list {
                height: 100%;

                background-color: #fff;
                padding: 0;
                margin: 0;
                list-style-type: none;
                text-align: center;

                li {
                    box-sizing: border-box;
                    width: 98%;
                    display: inline-block;
                    vertical-align: middle;
                    -moz-box-shadow: inset 0 0 0 1px #ccc;
                    -webkit-box-shadow: inset 0 0 0 1px #ccc;
                    box-shadow: inset 0 0 0 1px #ccc;
                    border-radius: 3px;
                    border: none;
                    cursor: pointer;
                    margin-bottom: 5px;
                }

                .active {
                    -moz-box-shadow: inset 0 0 0 2px #f7931f;
                    -webkit-box-shadow: inset 0 0 0 2px #f7931f;
                    box-shadow: inset 0 0 0 2px #f7931f;
                }

                .img__view__item {
                    width: 100%;
                    height: 54px;
                    display: -ms-flexbox;
                    display: flex;
                    -ms-flex-pack: center;
                    justify-content: center;
                    -ms-flex-align: center;
                    align-items: center;
                    position: relative;

                    img {
                        width: 90%;
                        height: 90%;
                        object-fit: cover;
                        cursor: pointer;
                    }
                }
            }
        }

        // img modal style
        .img__modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 110vh;
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1000;
            background-color: rgba(0, 0, 0, 0.6);

            transition: transform 0.4s ease-out;
            transform: translate(0, -50px);

            .img__box {
                height: 70%;
                width: 70%;

                img {
                    width: 100%;
                    height: 100%;
                    object-fit: contain;
                }
            }

            .img__close {
                position: absolute;
                border: none;
                outline: none;
                background-color: transparent;
                font-size: 24px;
                color: white;
                top: 6%;
                right: 2%;
            }
        }
    }
}

.product-info {
    .select__image {
        display: flex;
        flex-wrap: wrap;

        .select__option {
            input {
                display: none;
            }

            label {
                display: inline-block;
                width: 80px;
                height: 80px;
                border-radius: 5px;
                margin-right: 8px;
                overflow: hidden;
                cursor: pointer;

                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }

            input:checked ~ label {
                background-color: #f7931f;
                box-shadow: 0 0 0 2.5px rgba(247, 147, 31, 0.7);
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
    margin-bottom: 15px;
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
    padding: 20px 0px !important;
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
    padding-left: 0;

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
        margin-bottom: 10px;
    }

    .select__size {
        /* identical to box height, or 16px */

        // border-bottom: 1px solid #e5e5e5;

        div {
            display: inline-block;
            label {
                margin-right: 7px;
                font-family: Roboto;
                font-size: 16px;
                line-height: 1.3;
                padding: 4px 6px 0px;
                background-color: #f7931e;
                color: white;
                border-radius: 3px;
                cursor: pointer;

                // transition for effects
                transition: color 0.15s ease-in-out,
                    background-color 0.15s ease-in-out,
                    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
            }

            input {
                visibility: hidden;
                width: 0;
                height: 0;
                cursor: pointer;
            }

            input:checked ~ label {
                background-color: #003466;
                box-shadow: 0 0 0 2.5px rgba(0, 52, 102, 0.7);
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
        .favourite__icon {
            transform: translateY(-2px);
            display: inline-block;
        }

        .favourite__icon {
            cursor: pointer;
            position: relative;
            transform: translateY(-1px);
            path {
                position: absolute;
                top: 0;
                left: 0;
            }
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
            padding: 3px 5px;
            margin-bottom: 8px;

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
                    width: 0.33px;
                    height: 25.41px;
                    font-size: 28px;
                    padding-bottom: 5px;
                    flex-basis: 15%;
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
                    max-width: 17%;
                    flex-basis: 20%;
                }
            }
        }

        .select__size {
            div {
                label {
                    margin-right: 6px;
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
    .image__product__container {
        .image__product {
            // styling scrollbar
            ::-webkit-scrollbar {
                width: 5px;
            }
        }
    }

    .container {
        .product__name {
            margin-top: 15px;
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
            flex-wrap: wrap;
        }
    }

    .navbar__bottom {
        display: block;
    }
    .navi__buttons {
        display: none;
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

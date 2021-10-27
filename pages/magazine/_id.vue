<template>
    <section class="magazine__section">
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

        <div class="filtr__section" v-if="isGet && noProduts">
            <div class="product-show">
                <div class="container">
                    <div class="container magazine__description__box">
                        <div class="magazine__description__logo__text">
                            <img
                                class="magazine__description--logo"
                                :src="magazine.logo"
                                alt="Logo image"
                            />
                            <p
                                class="magazine__description--text"
                                v-text="magazine.description[$i18n.locale]"
                            ></p>
                        </div>
                        <div class="magazine__description__img">
                            <div class="magazine__description__img--box">
                                <img
                                    src="../../assets/img/magazine description/icon/Vector-1.png"
                                    alt="Icon image"
                                />
                                <span v-text="magazine.phone"> </span>
                            </div>

                            <div class="magazine__description__img--box">
                                <img
                                    src="../../assets/img/magazine description/icon/Vector-3.png"
                                    alt="Icon image"
                                />
                                <span v-text="magazine.email"> </span>
                            </div>

                            <div class="magazine__description__img--box">
                                <img
                                    src="../../assets/img/magazine description/icon/Vector-2.png"
                                    alt="Icon image"
                                />
                                <span v-text="magazine.address"> </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section class="container popular__container search__noData">
                <div class="popular__heading">
                    {{ $t(notPro) }}
                </div>
            </section>
        </div>

        <div class="filtr__section" v-if="isGet && !noProduts">
            <div class="product-show">
                <div class="container">
                    <div class="container magazine__description__box">
                        <div class="magazine__description__logo__text">
                            <img
                                class="magazine__description--logo"
                                :src="magazine.logo"
                                alt="Logo image"
                            />

                            <p
                                class="magazine__description--text"
                                v-text="magazine.description[$i18n.locale]"
                            ></p>
                        </div>
                        <div
                            class="magazine__description__img"
                            :style="{
                                backgroundImage: `url('${magazine.image}')`
                            }"
                        >
                            <div class="magazine__description__img--box">
                                <img
                                    src="../../assets/img/magazine description/icon/Vector-1.png"
                                    alt="Icon image"
                                />
                                <span v-text="magazine.phone"> </span>
                            </div>

                            <div class="magazine__description__img--box">
                                <img
                                    src="../../assets/img/magazine description/icon/Vector-3.png"
                                    alt="Icon image"
                                />
                                <span v-text="magazine.email"> </span>
                            </div>

                            <div class="magazine__description__img--box">
                                <img
                                    src="../../assets/img/magazine description/icon/Vector-2.png"
                                    alt="Icon image"
                                />
                                <span v-text="magazine.address"> </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section
                class="container popular__container catalog__page__filtr__box"
                v-if="!noProduts"
            >
                <div class="popular__dropdown__box">
                    <div class="person__home--description">
                        <select
                            name="region"
                            id="region"
                            v-model="filter.sort"
                            @change="filterBySort()"
                        >
                            <option value="" disabled selected>{{
                                $t("sortBy")
                            }}</option>
                            <option value="new"> {{ $t("sortNew") }}</option>
                            <option value="popular">
                                {{ $t("sortPop") }}
                            </option>
                            <option value="priceDown">
                                {{ $t("sortUb") }}</option
                            >
                            <option value="priceUp">
                                {{ $t("sortVoz") }}</option
                            >
                        </select>
                    </div>
                </div>
            </section>

            <section class="catalog__container container">
                <div class="catalog__filtraiton__box" v-if="!isProductOnlyOne">
                    <form @submit.prevent class="filtraiton__form__box">
                        <h5
                            class="filtraiton__header"
                            v-if="!isSliderPricesEqual"
                        >
                            {{ $t("sortPrice") }}
                        </h5>

                        <div class="input__range" v-if="!isSliderPricesEqual">
                            <vue-slider
                                v-model="sliderValue"
                                :min="sliderMinPrice"
                                :max="sliderMaxPrice"
                                :interval="1"
                                :process-style="{
                                    backgroundColor: '#FE9E0D'
                                }"
                                :tooltip-style="{
                                    backgroundColor: 'black',
                                    borderColor: 'black'
                                }"
                            ></vue-slider>
                        </div>

                        <h5
                            class="filtraiton__header"
                            v-if="brandsOnPage.length > 1"
                        >
                            {{ $t("sortBrand") }}
                        </h5>

                        <div
                            class="center__input__label"
                            v-for="brand in brandsOnPage"
                            :key="brand._id"
                        >
                            <input
                                class="filtraiton__form--input"
                                type="checkbox"
                                v-model="filter.brands"
                                :id="brand._id"
                                :name="brand"
                                :value="brand._id"
                            />
                            <label
                                class="filtraiton__form--label"
                                :for="brand._id"
                            >
                                {{ brand.name }}</label
                            ><br />
                        </div>
                        <div class="submit__box">
                            <input
                                class="filtraiton__form--submit"
                                type="submit"
                                value="Фильтр"
                                @click.prevent="filterProducts"
                            />
                        </div>
                    </form>
                </div>
                <div class="catalog__page__about">
                    <loading-on-blocks
                        v-if="!filter.isGetData"
                    ></loading-on-blocks>
                    <section
                        class="container popular__container"
                        v-if="filter.isGetData && products.length > 0"
                    >
                        <div class="popular__item-box">
                            <nuxt-link
                                class="popular__items"
                                v-for="product in products"
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
                                    <span
                                        class="popular__items__desription--name"
                                    >
                                        {{ product.category[$i18n.locale] }}
                                    </span>
                                    <h4
                                        class="popular__items__desription--categorie"
                                    >
                                        {{ product.name[$i18n.locale] }}
                                    </h4>

                                    <span
                                        class="popular__items__desription--price"
                                        v-if="!!product.discount"
                                    >
                                        {{
                                            updatePriceFormat(product.discount)
                                        }}
                                        {{ $t("sum") }}
                                    </span>

                                    <span
                                        v-if="!!product.discount"
                                        class="popular__items__desription--price popular__items__desription--old--price hidden"
                                    >
                                        {{ updatePriceFormat(product.price) }}
                                        {{ $t("sum") }}
                                    </span>

                                    <span
                                        class="popular__items__desription--price"
                                        v-if="!product.discount"
                                    >
                                        {{ updatePriceFormat(product.price) }}
                                        {{ $t("sum") }}
                                    </span>
                                </div>
                            </nuxt-link>
                        </div>

                        <a
                            href="#"
                            class="popular__btn"
                            v-if="products.length >= limit"
                            @click.prevent="showProductMore"
                            >{{ $t("all") }}</a
                        >
                    </section>
                </div>
            </section>
        </div>
    </section>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import LoadingOnBlocks from "../../components/UI/LoadingOnBlocks.vue";
import BaseLoading from "../../components/UI/BaseLoading.vue";
export default {
    components: { LoadingOnBlocks, BaseLoading },

    head: {
        title: "Магазин — Tujjor. Низкие цены и широкий ассортимент!",
        meta: [
            {
                hid: "description",
                name: "description",
                content: "Магазин - Tujjor"
            }
        ]
    },

    data() {
        return {
            sliderMaxPrice: 0,
            sliderMinPrice: 0,
            isSliderPricesEqual: false,
            isProductOnlyOne: false,
            sliderValue: [5000, 100000],
            linksForTitle: "",
            categoryLinksForTitle: [],
            brandsOnPage: [],

            isGet: false,
            noData: false,
            noProduts: false,

            filter: {
                sort: "",
                brands: [],
                start: null,
                end: null,
                isGetData: false
            },

            products: [],
            page: 1,
            limit: 12,

            magazine: {}
        };
    },

    computed: mapGetters(["searchBody"]),

    methods: {
        ...mapActions(["searchProduct", "productCount"]),
        ...mapMutations([
            "setSearchBrand",
            "setSearchPriceStart",
            "setSearchPriceEnd",
            "setSearchSort",
            "resetSearchSettings",
            "setSearchShopId"
        ]),

        async fetchAllBrands() {
            return await this.$axios
                .$get("brand/client/all")
                .then(response => {
                    if (response.success) {
                        return response.data;
                    } else {
                        throw new Error("Could not fetch data");
                    }
                })
                .catch(err => console.error(err));
        },

        // add to router link on the top of page
        addLinksOnTheTopPage() {
            if (this.searchBody.search.length > 0) {
                this.linksForTitle = this.searchBody.search;
            } else {
                if (!!this.searchBody.mainCategory.name)
                    this.categoryLinksForTitle.push(
                        this.searchBody.mainCategory
                    );

                if (!!this.searchBody.childCategory.name)
                    this.categoryLinksForTitle.push(
                        this.searchBody.childCategory
                    );
            }
        },

        // filter brands for page to show
        filterBrandForShowOnPage(data, brands) {
            if (data.count > 0) {
                brands.forEach(item => {
                    if (data.brands.includes(item._id)) {
                        this.brandsOnPage.push(item);
                    }
                });
            }

            console.log(
                "all brands",
                brands,
                data,
                "filtered brands",
                this.brandsOnPage
            );
        },

        // filter max end min value in search product and show
        filterMaxAndMin(search) {
            if (search.data.length > 0) {
                const maxValue = search.data.reduce(function(acc, item) {
                    acc.price < item.price ? (acc = item) : acc;
                    return acc;
                });
                const minValue = search.data.reduce(function(acc, item) {
                    acc.price > item.price ? (acc = item) : acc;
                    return acc;
                });
                [this.sliderMinPrice, this.sliderMaxPrice] = [
                    minValue.price,
                    maxValue.price
                ];
                if (minValue.price === maxValue.price) {
                    this.isSliderPricesEqual = true;
                }
                this.sliderValue = [minValue.price, maxValue.price];
            }
        },
        // filter products on click on filter
        async filterProducts() {
            const [start, end, brand] = [
                this.sliderValue[0],
                this.sliderValue[1],
                this.filter.brands
            ];

            const page = this.page;
            const limit = 12;

            this.setSearchPriceStart(start);
            this.setSearchPriceEnd(end);
            this.setSearchBrand(brand);
            this.filter.isGetData = false;
            const search = await this.searchProduct({ page, limit });
            this.products = search.data;
            this.filter.isGetData = true;
        },

        // sort products
        async filterBySort() {
            const page = this.page;
            const limit = 12;

            this.setSearchSort(this.filter.sort);
            this.filter.isGetData = false;
            const search = await this.searchProduct({ page, limit });
            this.products = search.data;
            this.filter.isGetData = true;
        },

        //  go to product on click card of product
        goToProduct(slug) {
            this.$router.push({
                path: "/product/" + slug
            });
        },

        // update price on currency format
        updatePriceFormat(price) {
            const form = new Intl.NumberFormat("en-US").format(price);
            return form.replaceAll(",", " ");
        },

        async showProductMore() {
            this.limit += 12;
            this.page += 1;
            const limit = 12;
            const page = this.page;
            const search = await this.searchProduct({ page, limit });
            search.data.forEach(item => {
                this.products.push(item);
            });
        },

        async fetchMagazine() {
            const slug = this.$route.params.id;
            const response = await this.$axios
                .$get("shop/client/" + slug)
                .then(res => {
                    if (!!res.success) {
                        return res;
                    } else {
                        throw new Error("Couldn't fetch data");
                    }
                })
                .catch(error => {
                    if (error?.response?.status === 404) {
                        this.noData = this.isGet = true;
                    }
                });
            return response;
        }
    },

    async mounted() {
        const page = this.page;
        const limit = 12;
        this.resetSearchSettings();
        const data = await this.fetchMagazine();
        console.log("data", data);
        if (!!data) {
            this.magazine = data.data;
            this.setSearchShopId(data.data._id);
            let [brands, Allbrands, search] = await Promise.all([
                this.productCount(),
                this.fetchAllBrands(),
                this.searchProduct({ page, limit })
            ]);
            this.products = search.data;
            this.filter.isGetData = this.isGet = true;

            // add to router link on the top of page
            this.addLinksOnTheTopPage();

            if (search.data.length === 1) {
                this.isProductOnlyOne = true;
            } else {
                // filter brands for page to show
                this.filterBrandForShowOnPage(brands, Allbrands);

                //     // filter max end min value in search product and show
                this.filterMaxAndMin(search);
            }

            if (search.data.length === 0) this.noProduts = true;
        }
    }
};
</script>

<style lang="scss" scoped>
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
                height: 154px;
                width: 200px;
                object-fit: cover;
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

            background-image: url("../../assets/img/magazine description/bg-2.jpg");
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
}

.filtr__section {
    .search__noData {
        height: 50vh;
        display: flex;

        .popular__heading {
            margin-top: 10%;
            text-align: center;
        }
    }

    .product-show {
        .container {
            .title-box {
                padding-bottom: 0;
            }
        }
    }
    .catalog__page__filtr__box {
        margin-top: 0;
        display: flex;
        justify-content: flex-end;

        .popular__dropdown__box {
            .person__home--description {
                span {
                    font-family: Roboto, sans-serif;
                    font-weight: 500;
                    font-size: 15px;
                    line-height: 28px;
                    /* identical to box height, or 168% */
                    color: #000000;
                }

                input,
                select {
                    width: 180px;
                    // border: ;
                    border: 1.4px solid #f7931e;
                    outline: none;
                    background-color: transparent;
                    padding: 3px 10px;
                    border-radius: 5px;

                    /* asosiy */

                    text-align: left;
                    font-family: Roboto, sans-serif;
                    color: #f7931e;
                    font-weight: 500;
                    font-size: 16px;
                    line-height: 28px;

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

                    background-image: url("../../assets/img/other/vector.png");
                    background-repeat: no-repeat;
                    background-position: 97% 50%;
                }
            }
        }
    }
}
.catalog__container {
    margin-top: 15px;
    display: flex;

    .catalog__filtraiton__box {
        flex-shrink: 0;
        flex-basis: 230px;

        padding: 0 8px;

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
                padding: 18px 4px 9px;
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
        margin-bottom: 40px;
        flex-grow: 1;

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
            margin-top: 20px;
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
            flex-basis: 100%;

            .submit__box {
                display: flex;
                justify-content: center;
            }
        }

        .catalog__page__about {
            .catalog__page__btn--box {
                justify-content: center;
            }
        }
    }

    .filtr__section {
        position: relative;
        .catalog__page__filtr__box {
            justify-content: flex-start;
            width: 100%;
        }
    }
}

@media only screen and (max-width: 395px) {
    .product-show {
        div {
            padding: 0;

            .magazine__description__box {
                .magazine__description__logo__text {
                    img {
                        margin-bottom: 5px;
                    }
                    margin-bottom: 10px;
                }
            }
        }
    }
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

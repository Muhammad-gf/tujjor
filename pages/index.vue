<template>
        <div>
                <div class="container">
                        <div class=" title-index">
                                <ul>
                                        <li>
                                                <nuxt-link to="/about_us"
                                                        >About us
                                                </nuxt-link>
                                        </li>

                                        <li>
                                                <nuxt-link to="/all_magazines">
                                                        All magazines
                                                </nuxt-link>
                                        </li>

                                        <li>
                                                <nuxt-link to="/catalog_page">
                                                        Catalog page
                                                </nuxt-link>
                                        </li>

                                        <li>
                                                <nuxt-link
                                                        to="/magazine__description"
                                                >
                                                        Magazine description
                                                </nuxt-link>
                                        </li>

                                        <li>
                                                <nuxt-link to="/Product_show">
                                                        Product show
                                                </nuxt-link>
                                        </li>

                                        <li class="done">
                                                <nuxt-link to="/basket">
                                                        Basket
                                                </nuxt-link>
                                        </li>

                                        <li class="done">
                                                <nuxt-link
                                                        to="/checkout__order"
                                                >
                                                        Checkout order
                                                </nuxt-link>
                                        </li>

                                        <li class="done">
                                                <nuxt-link to="/my__orders">
                                                        My orders
                                                </nuxt-link>
                                        </li>

                                        <li>
                                                <nuxt-link
                                                        to="/news_description"
                                                >
                                                        News full
                                                </nuxt-link>
                                        </li>

                                        <li class="done">
                                                <nuxt-link to="/news__page"
                                                        >News
                                                </nuxt-link>
                                        </li>
                                </ul>
                        </div>
                </div>
                <banner-on-main-page />
                <catalog-magazines-main-page />
                <Popular-item />
                <Other-items />
                <logo-rectangle />
                <on-sale-item />
                <brands />
                <news />
        </div>
</template>

<script>
import aboutUs from "../components/about-us.vue";
import CatalogMagazinesMainPage from "../components/catalog-magazines-main-page.vue";
export default {
        components: { aboutUs }
};
</script>

<style lang="scss">
div.title-index {
        padding: 40px 0 0;
        ul {
                display: flex;
                flex-flow: row wrap;
                justify-content: space-between;
                align-content: center;

                &::after {
                        content: "";
                        padding: 10px;
                        flex: 30%;
                }

                .done {
                        background-color: #ddd;
                }

                li {
                        display: inline-block;
                        font-weight: normal;
                        font-size: 15px;
                        line-height: 1.3;

                        color: #000000;

                        background-color: #fff;
                        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.14);
                        padding: 15px 30px;
                        border-radius: 10px;
                        margin: 10px;
                        a {
                                display: inline-block;
                                font-weight: normal;
                                font-size: 15px;
                                line-height: 18px;
                                color: #000000;
                                &:hover {
                                        color: $gc;
                                }
                        }
                }
        }
}

@media screen and (max-width: 680px) {
        div.title-index {
                ul {
                        li {
                                font-size: 10px;
                                padding: 8px 12px;
                                margin: 5px;
                        }
                }
        }
}

@media screen and (max-width: 380px) {
        div.title-index {
                ul {
                        li {
                                font-size: 8px;
                                padding: 5px 10px;
                                margin: 4px;
                        }
                }
        }
}
</style>

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

                                        <li class="done">
                                                <nuxt-link to="/basket">
                                                        Basket
                                                </nuxt-link>
                                        </li>

                                        <li>
                                                <nuxt-link to="/catalog_page">
                                                        Catalog page
                                                </nuxt-link>
                                        </li>

                                        <li class="done">
                                                <nuxt-link
                                                        to="/checkout__order"
                                                >
                                                        Checkout order
                                                </nuxt-link>
                                        </li>

                                        <li>
                                                <nuxt-link
                                                        to="/magazine__description"
                                                >
                                                        Magazine description
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

                                        <li>
                                                <nuxt-link to="/news"
                                                        >News
                                                </nuxt-link>
                                        </li>

                                        <li>
                                                <nuxt-link to="/Product_show">
                                                        Product show
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
                .done {
                        background-color: #ddd;
                }

                li {
                        display: inline-block;
                        font-weight: normal;
                        font-size: 15px;
                        line-height: 18px;

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
</style>

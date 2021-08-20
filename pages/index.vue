<template>
    <section>
        <!-- <div class="container"> -->
        <!-- HEADER -->

        <!-- HEADER END -->
        <!-- <div class=" title-index">
                <ul>
                    <li class="done">
                        <nuxt-link to="/aboutus">About us </nuxt-link>
                    </li>

                    <li class="done">
                        <nuxt-link to="/faq">FAQ</nuxt-link>
                    </li>

                    <li class="done">
                        <nuxt-link to="/allmagazines">
                            All magazines
                        </nuxt-link>
                    </li>

                    <li class="done">
                        <nuxt-link to="/catalogpage">
                            Catalog page
                        </nuxt-link>
                    </li>

                    <li class="done">
                        <nuxt-link to="/magazinedescription">
                            Magazine description
                        </nuxt-link>
                    </li>

                    <li>
                        <nuxt-link to="/productshow">
                            Product show
                        </nuxt-link>
                    </li>

                    <li class="done">
                        <nuxt-link to="/basket">
                            Basket
                        </nuxt-link>
                    </li>

                    <li class="done">
                        <nuxt-link to="/checkoutorder">
                            Checkout order
                        </nuxt-link>
                    </li>

                    <li class="done">
                        <nuxt-link to="/myorders">
                            My orders
                        </nuxt-link>
                    </li>

                    <li class="done">
                        <nuxt-link to="/newsdescription">
                            News full
                        </nuxt-link>
                    </li>

                    <li class="done">
                        <nuxt-link to="/newspage">News </nuxt-link>
                    </li>

                    <li class="done">
                        <nuxt-link to="/favourite">Избранное </nuxt-link>
                    </li>

                    <li class="done">
                        <nuxt-link to="/product">product </nuxt-link>
                    </li>
                </ul>
            </div>
        </div> -->

        <banner-on-main-page />
        <catalog-magazines-main-page />
        <Popular-item />
        <Other-items />
        <logo-rectangle />
        <on-sale-item />
        <brands />
        <news />
    </section>
</template>

<script>
export default {
    layout: "main__page__layout",
    data() {
        return {
            seach: null
        };
    }
};
</script>

<style lang="scss">
html,
body {
    touch-action: auto !important;
}
/////////////////
section {
    padding: 0;
    margin: 0;
}
</style>

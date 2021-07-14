<template>
    <div>
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
    </div>
</template>

<script>
export default {
    layout: "main__page__layout"
};
</script>

<style lang="scss">
/////////////////
// TITLE BOX PROPERTY
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

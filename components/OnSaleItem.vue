<template>
    <section>
        <base-loading v-if="!isGet"></base-loading>

        <section class="container popular__container" v-if="isGet">
            <div class="popular__heading">{{$t('skidka')}}</div>
            <div class="popular__item-box">
                <div
                    class="popular__items"
                    v-for="product in onSaleProducts.data"
                    :key="product._id"
                    @click="goToProduct(product.slug)"
                >
                    <img
                        class="popular__items__img"
                        :src="$store.state.uploads + product.image"
                        alt="Popular item photo"
                        type="photo/png"
                    />
                    <div class="popular__items__desription">
                        <span class="popular__items__desription--name">
                            {{ product.category.uz }}
                        </span>
                        <h4 class="popular__items__desription--categorie">
                            {{ product.name.uz }}
                        </h4>

                        <span
                            class="popular__items__desription--price"
                            v-if="!!product.discount"
                        >
                            {{ updatePriceFormat(product.discount) }}
                            сум
                        </span>

                        <span
                            v-if="!!product.discount"
                            class="popular__items__desription--price popular__items__desription--old--price hidden"
                        >
                            {{ updatePriceFormat(product.price) }}
                            сум
                        </span>

                        <span
                            class="popular__items__desription--price"
                            v-if="!product.discount"
                        >
                            {{ updatePriceFormat(product.price) }}
                            сум
                        </span>
                    </div>
                </div>
            </div>

            <a
                href="#"
                class="popular__btn text-center"
                v-if="onSaleProducts.data.length >= onSaleProducts.limit"
                @click.prevent="updateSaleLimit"
                >{{$t('all')}}</a
            >
        </section>
    </section>
</template>

<script>
import BaseLoading from "../components/UI/BaseLoading.vue";
export default {
    components: {
        BaseLoading
    },
    data() {
        return {
            onSaleProducts: {
                data: [],
                page: 1,
                limit: 10
            },
            isGet: false
        };
    },
    methods: {
        async updateSaleLimit() {
            this.isGet = false;
            this.onSaleProducts.limit += 10;
            const products = await this.fetchProduct();
            this.onSaleProducts.data = products.data;
            this.isGet = true;
        },
        async fetchProduct() {
            const page = this.onSaleProducts.page;
            const limit = this.onSaleProducts.limit;
            const res = await this.$axios
                .$post("product/filter?page=" + page + "&limit=" + limit, {
                    category: [],
                    brand: [],
                    search: "",
                    sort: "",
                    start: null,
                    end: null,
                    discount: true
                })
                .then(response => {
                    console.log("searc", response);
                    if (response.success) {
                        console.log("search", response);
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
                name: "product-id",
                params: { id: slug }
            });
        },

        // update price on currency format
        updatePriceFormat(price) {
            const form = new Intl.NumberFormat("en-US").format(price);
            return form.replaceAll(",", " ");
        }
    },

    async mounted() {
        const products = await this.fetchProduct();
        this.onSaleProducts.data = products.data;
        console.log(products);
        this.isGet = true;
    }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap");
</style>
<style lang="scss"></style>

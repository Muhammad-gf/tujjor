<template>
    <div>
        <nuxt-link
            :to="{
                name: `product-id___${$i18n.locale}`,
                params: { id: product.slug }
            }"
        >
            <div class="product-card">
                <div class="img">
                    <img :src="$cdn + product.image" />
                </div>

                <div class="product-info">
                    <!-- <div class="brand">
                        <h6>{{ product.category[$i18n.locale] }}</h6>
                    </div> -->
                    <h4>{{ product.name[$i18n.locale] }}</h4>

                    <div v-if="product.discount != null">
                        <h5 class="old-price">
                            {{ beautySum(product.price) }} {{ $t("sum") }}
                        </h5>
                        <h5 class="price">
                            {{ beautySum(product.discount) }} {{ $t("sum") }}
                        </h5>
                    </div>

                    <div v-else>
                        <h5 class="old-price"></h5>
                        <h5 class="price">
                            {{ beautySum(product.price) }} {{ $t("sum") }}
                        </h5>
                    </div>
                </div>
            </div>
        </nuxt-link>
    </div>
</template>

<script>
export default {
    props: {
        product: {
            type: Object
        }
    }
};
</script>

<style lang="scss" scoped>
div.product-card {
    width: 100%;
    background: #ffffff;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12);
    border-radius: 5px;
    overflow: hidden;
    margin-bottom: 20px;
    &:hover {
        box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.18);
    }
    div.img {
        img {
            height: 222px;
            width: 100%;
            object-fit: cover;
        }
    }

    div.product-info {
        padding: 5px 15px;
        div.brand {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 10px;
            h6 {
                font-weight: normal;
                font-size: 14px;
                line-height: 16px;
                margin-bottom: 0px;
                color: #666666;
            }

            div.rating {
                display: flex;
                align-items: center;
                span {
                    font-weight: 500;
                    font-size: 12px;
                    line-height: 14px;
                    margin-left: 2px;
                    color: #565656;
                }
            }
        }

        h4 {
            height: 19px;
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
            margin-bottom: 15px !important;
            font-weight: 500;
            font-size: 16px;
            line-height: 19px;
            color: #000000;
        }

        h5.old-price {
            text-decoration: line-through;
            font-weight: bold;
            font-size: 14px;
            line-height: 16px;
            height: 16px;
            margin-bottom: 5px;
            text-decoration-color: #2e2e2e;
            text-decoration-thickness: 1px;
            color: #f7931e;
        }
        h5.price {
            font-weight: bold;
            font-size: 20px;
            line-height: 100%;
            margin-bottom: 10px;
            color: #219ebc;
        }
    }
}

@media (max-width: 768px) {
    div.product-card {
        div.img {
            img {
                height: 164px;
            }
        }
        div.product-info {
            padding: 3px 10px;
            div.brand {
                margin-bottom: 6px;
                h6 {
                    font-size: 10px;
                }
            }

            h4 {
                height: 14px;
                display: -webkit-box;
                -webkit-line-clamp: 1;
                -webkit-box-orient: vertical;
                overflow: hidden;
                text-overflow: ellipsis;
                margin-bottom: 15px;
                font-weight: 500;
                font-size: 12px;
                line-height: 14px;
            }

            h5.old-price {
                text-decoration: line-through;
                font-weight: bold;
                margin-bottom: 5px !important;
                font-size: 12px;
                line-height: 100%;
                margin-bottom: 0px !important;
                text-decoration-color: #2e2e2e;
                text-decoration-thickness: 1px;
                color: #f7931e;
            }
            h5.price {
                font-size: 14px;
            }
        }
    }
}
</style>

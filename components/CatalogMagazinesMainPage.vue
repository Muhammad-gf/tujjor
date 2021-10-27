<template>
    <section>
        <base-loading v-if="!isGet"></base-loading>
        <section class="magazines__main__page" v-if="isGet">
            <section class="container popular__container">
                <div class="popular__heading">{{ $t("magazine") }}</div>
            </section>
            <div class="magazines__box container">
                <div class="card-row ">
                    <div
                        class="card-3 "
                        v-for="magazine in magazines"
                        :key="magazine.slug"
                    >
                        <nuxt-link
                            class=""
                            :to="{
                                name: `magazine-id___${$i18n.locale}`,
                                params: { id: magazine.slug }
                            }"
                        >
                            <div class="shops-card hover-shadow">
                                <h1>{{ magazine.shopName }}</h1>
                                <p>
                                    {{ magazine.description[$i18n.locale] }}
                                </p>
                                <div class="shop-image">
                                    <img :src="magazine.image" alt="" />
                                </div>
                            </div>
                        </nuxt-link>
                    </div>
                </div>
            </div>
            <section
                class="container popular__container"
                id="btn__box"
                v-if="limit > magazines.length"
            >
                <a
                    href="#"
                    class="popular__btn text-center"
                    @click.prevent="updateMagazineLimit"
                    >{{ $t("all") }}</a
                >
            </section>
        </section>
    </section>
</template>

<script>
import BaseLoading from "./UI/BaseLoading.vue";

export default {
    components: { BaseLoading },

    data() {
        return {
            isGet: false,
            magazineCount: 0,
            increaseBy: 0,
            magazines: [],
            limit: 0
        };
    },
    beforeMount() {
        const winWidth = window.innerWidth;
        if (winWidth <= 530) {
            this.magazineCount = this.increaseBy = 4;
        } else {
            this.magazineCount = this.increaseBy = 3;
        }
    },

    methods: {
        async fetchMagazines() {
            const page = 1;
            const limit = this.magazineCount;
            const response = await this.$axios
                .$get("shop/all/filter?page=" + page + "&limit=" + limit)
                .then(res => {
                    if (!!res.success) {
                        return res;
                    } else {
                        throw new Error("Couldn't fetcg data");
                    }
                })
                .catch(error => console.error(error));
            return response;
        },

        async updateMagazineLimit() {
            this.magazineCount += this.increaseBy;
            const data = await this.fetchMagazines();
            this.magazines = data.data[0].data;
        },

        //  go to magazine on click card of magazine
        goToMagazine(slug) {
            this.$router.push({
                path: "/magazine/" + slug,
                params: { id: slug }
            });
        }
    },

    async mounted() {
        const data = await this.fetchMagazines();
        this.magazines = data.data[0].data;
        this.limit = data.data[0].count;
        console.log("magazine", this.magazines);
        this.isGet = true;
    }
};
</script>

<style lang="scss">
div.shops-card {
    width: 100%;
    background: #f1efed;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12);
    border-radius: 5px;
    padding: 15px;
    h1 {
        font-size: 18px;
        margin-bottom: 15px;
        color: #333;
    }
    p {
        height: 32px;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-bottom: 10px;
        font-weight: normal;
        font-size: 14px;
        line-height: 16px;
        color: #000000;
    }
    div.shop-image {
        img {
            width: 100%;
            height: 200px;
            object-fit: cover;
        }
    }
}

@media (max-width: 768px) {
    div.shops-card {
        margin-bottom: 10px;
        div.shop-image {
            img {
                height: 127px;
            }
        }
    }
}

@media (max-width: 530px) {
    div.shops-card {
        margin-bottom: 15px;
        h1 {
            margin-bottom: 5px;
        }
        p {
            margin-bottom: 5px;
        }
        div.shop-image {
            img {
                height: 90px;
            }
        }
    }
}
</style>

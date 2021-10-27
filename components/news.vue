<template>
    <section>
        <base-loading v-if="!isGet"></base-loading>
        <section v-if="isGet">
            <div class="news" v-if="news != null && news.length > 0">
                <section class="container popular__container  ">
                    <div class="popular__heading">
                        {{ $t("news") }}
                    </div>
                </section>

                <div class="news__box container">
                    <div
                        v-for="(item, index) in 3"
                        :key="index"
                        class=" news__box--item"
                    >
                        <img
                            class="news__box--item--img"
                            :src="$cdn + news[index].file"
                            alt="News"
                        />
                        <div class="news__box--description">
                            <span class="news__box--description--header">
                                {{ news[index].title[$i18n.locale] }}
                            </span>
                            <div
                                class="news__box--description--p"
                                v-html="news[index].description[$i18n.locale]"
                            ></div>
                        </div>
                        <div class="data__box">
                            <nuxt-link
                                :to="{
                                    name: 'news-id___' + $i18n.locale,
                                    params: { id: news[index].slug }
                                }"
                                class="data__box--btn text-center"
                                >{{ $t("full") }}</nuxt-link
                            >
                            <p class="data__box--date">
                                {{ getDate(news[index].createdAt) }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </section>
</template>

<script>
import BaseLoading from "./UI/BaseLoading.vue";
export default {
    components: { BaseLoading },
    data() {
        return {
            news: [],
            isGet: false
        };
    },

    methods: {
        getDate(time) {
            const date = new Date(time);
            const day =
                date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
            const month =
                date.getMonth() + 1 < 10
                    ? "0" + (date.getMonth() + 1)
                    : date.getMonth() + 1;
            const year = date.getFullYear();
            return day + "." + month + "." + year;
        },
        //  go to product on click card of product
        goToNews(slug) {
            this.$router.push({
                name: "news-id",
                params: { id: slug }
            });
        }
    },
    async mounted() {
        let n = await this.$axios.$get("/news/all");
        this.news = n;

        this.isGet = true;
    }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap");
</style>
<style lang="scss">
.news {
    &__box {
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-wrap: wrap;
        padding: 10px;

        &::after {
            content: "";
            padding: 10px;
            flex: 0 1 50%;
        }

        &--item {
            height: auto;
            width: 380px;
            margin: 20px 0;
            box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);

            &--img {
                height: 300px;
                width: inherit;
            }
        }
        &--description {
            padding: 12px 7px;
            &--header {
                font-family: Roboto;
                font-weight: 500;
                font-size: 16px;
                color: #000000;
                display: block;
                overflow: hidden;
                height: 3em;
            }
            &--p {
                width: inherit;
                height: 4.5em;
                font-size: 14px;
                color: #666666;
                overflow: hidden;
                display: block;
            }
        }

        .data__box {
            display: flex;
            align-items: baseline;
            justify-content: space-between;
            padding: 0 7px 2px;
            &--btn {
                &,
                &:link,
                &:visited {
                    text-align: center;
                    border-radius: 5px;
                    transition: all 0.2s;

                    width: 104px;
                    height: 40px;

                    padding: 10px;
                    text-decoration: none;
                    font-family: inherit;
                    font-weight: 500;
                    font-size: 14px;
                    color: rgb(255, 255, 255, 0.9);

                    // Change for the <button> element
                    background-color: #f7931e;
                    border: none;
                    cursor: pointer;
                }

                @include button__bg--color;
                @include hover__active--animation;
            }

            &--date {
                font-family: Roboto;
                font-size: 14px;
                color: #219ebc;
                padding-right: 5px;
            }
        }
    }
}

@media only screen and (max-width: 790px) {
    .news {
        &__box {
            padding: 8px;

            &--item {
                width: 343px;

                &--img {
                    height: 275px;
                }
            }
        }
    }
}

@media only screen and (max-width: 360px) {
    .news {
        &__box {
            &--item {
                width: 280px;

                &--img {
                    height: 245px;
                    width: inherit;
                }
            }
        }
    }
}
</style>

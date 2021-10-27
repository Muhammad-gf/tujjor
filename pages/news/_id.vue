<template>
    <section class="news_description">
        <base-loading v-if="!isGet"></base-loading>
        <div class="container">
            <div class="title-box">
                <ul>
                    <li>
                        <nuxt-link to="/">{{ $t("last") }}</nuxt-link>
                        /
                    </li>
                    <li>
                        <nuxt-link to="#">{{ $t("allNew") }}</nuxt-link>
                    </li>
                </ul>
            </div>
        </div>
        <main class="news__section container" v-if="news != null">
            <div class="news__about__box">
                <div class="news__about--heading">
                    <h2>
                        {{ news.title[$i18n.locale] }}
                    </h2>
                </div>

                <div class="news__about--first--img">
                    <img :src="$cdn + news.file" alt="News image" />
                    <span>
                        {{ getDate(news.createdAt) }}
                    </span>
                </div>
                <div
                    class="news__about--txt"
                    v-html="news.description.uz"
                ></div>
            </div>
            <div class="news__up__to__date" v-if="newsAll != null">
                <h2>{{ $t("last") }}</h2>
                <div class="news__box__container">
                    <div
                        class="news__box"
                        v-for="(item, index) in 2"
                        :key="index"
                    >
                        <div class="img">
                            <img
                                :src="$cdn + newsAll[index].file"
                                alt="News image"
                            />
                        </div>
                        <div class="news__box--heading">
                            <h4>
                                {{ newsAll[index].title[$i18n.locale] }}
                            </h4>
                        </div>
                        <div
                            class="news__box--p"
                            v-html="newsAll[index].description[$i18n.locale]"
                        ></div>
                        <div class="news__box--data">
                            <nuxt-link
                                :to="{
                                    name: 'news-id___' + $i18n.locale,
                                    params: { id: newsAll[index].slug }
                                }"
                                class="news__box--btn"
                            >
                                {{ $t("full") }}
                            </nuxt-link>
                            <span class="news__box--date">
                                {{ getDate(newsAll[index].createdAt) }}</span
                            >
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </section>
</template>

<script>
import BaseLoading from "../../components/UI/BaseLoading.vue";
export default {
    components: { BaseLoading },

    data() {
        return {
            news: null,
            newsAll: null,
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
        }
    },

    async mounted() {
        let n = await this.$axios.get("/news/" + this.$route.params.id);

        this.news = n.data.data;
        let all = await this.$axios.get("/news/all");
        this.isGet = true;
        this.newsAll = all.data.data;
    }
};
</script>

<style lang="scss">
.news__section {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    .news__about__box {
        margin-right: 25px;
        flex: 2;
        .news__about--heading {
            h2 {
                height: 84px;
                font-family: Poppins, Roboto, sans-serif;
                font-weight: 700;
                font-size: 32px;
                line-height: 1.3;
                /* or 42px */

                text-transform: uppercase;

                margin-bottom: 20px;
            }
        }

        .news__about--first--img {
            position: relative;
            img {
                height: auto;
                max-width: 100%;
            }

            span {
                position: absolute;
                top: 40px;
                left: 40px;

                padding: 8px;
                background-color: #374c91;
                border-radius: 4px;

                font-family: Poppins, Roboto, sans-serif;
                font-size: 14px;
                color: #ffffff;
            }
        }

        .news__about--txt {
            margin: 20px 0;
            p {
                font-family: Roboto, sans-serif;

                font-size: 14px;
                line-height: 1.5;
                /* or 18px */

                color: #666666;
            }
        }

        .news__about--second {
            display: flex;
            justify-content: space-between;

            .news__about--second--first {
                flex: 1;
                // align-self: stretch;
                margin-right: 20px;

                img {
                    max-width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }

            .news__about--second--second {
                flex: 1;
                display: flex;
                flex-direction: column;
                justify-content: space-between;

                .img--first {
                    img {
                        max-width: 100%;
                        object-fit: cover;
                    }
                }

                .img--second {
                    img {
                        max-width: 100%;
                        object-fit: cover;
                    }
                }
            }
        }
    }

    .news__up__to__date {
        flex: 1;
        margin-top: 100px;

        h2 {
            margin-bottom: 20px;

            font-family: Poppins, Roboto, sans-serif;
            font-weight: 700;
            font-size: 32px;
            line-height: 130%;
            /* identical to box height, or 42px */

            color: #f7931e;
        }

        .news__box {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: baseline;
            margin-bottom: 20px;
            box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
            padding: 10px;

            &::after {
                padding: 0;
            }
            .img {
                img {
                    width: 100%;
                    height: 300px;
                    object-fit: cover;
                }
                margin: -10px;
                margin-bottom: 10px;
            }

            .news__box--heading {
                h4 {
                    font-family: Roboto, sans-serif;
                    font-weight: 700;
                    font-size: 18px;
                    line-height: 130%;
                    /* or 23px */

                    color: #000000;
                }
            }

            .news__box--p {
                p {
                    font-family: Roboto;
                    font-size: 14px;
                    line-height: 130%;
                    /* or 18px */

                    color: #666666;
                }
            }

            .news__box--data {
                width: 100%;
                display: flex;
                justify-content: space-between;
                align-items: baseline;

                .news__box--btn {
                    display: inline-block;
                    transition: all 0.2s;
                    @include hover__active--animation;
                    @include button__bg--color;

                    font-family: Roboto;
                    font-size: 14px;
                    line-height: 24px;
                    padding: 10px 20px;
                    /* identical to box height, or 171% */

                    color: #fcf6f6;

                    background: #f7931e;
                    border-radius: 5px;
                    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
                    border: none;
                }

                .news__box--date {
                    display: inline-block;
                    font-family: Poppins;
                    font-size: 14px;
                    line-height: 24px;
                    /* identical to box height, or 171% */

                    /* moviy */

                    color: #219ebc;
                }
            }
        }
    }
}

@media only screen and (max-width: 1200px) {
    .news__section {
        flex-direction: column;

        .news__about__box {
            margin-right: 0;
            .news__about--first--img {
                img {
                    width: 100%;
                }
            }

            .news__about--second {
                .news__about--second--second {
                    .img--first {
                        margin-bottom: 20px;

                        img {
                            width: 100%;
                        }
                    }

                    .img--second {
                        img {
                            width: 100%;
                        }
                    }
                }
            }
        }

        .news__up__to__date {
            margin-top: 60px;

            .news__box__container {
                display: flex;
                justify-content: space-between;
                .news__box {
                    flex-basis: 49%;
                    .img {
                        width: 100%;
                    }
                }
            }
        }
    }
}

@media only screen and (max-width: 770px) {
    .news__section {
        .news__about__box {
            .news__about--heading {
                h2 {
                    height: auto;
                    margin-bottom: 15px;
                }
            }

            .news__about--first--img {
                span {
                    top: 30px;
                    left: 30px;
                }
            }

            .news__about--txt {
                p {
                    font-size: 13px;
                }
            }

            .news__about--second {
                .news__about--second--first {
                    img {
                        height: 400px;
                    }
                }
            }
        }

        .news__up__to__date {
            h2 {
                font-size: 30px;
                margin-bottom: 15px;
            }

            .news__box {
                margin-bottom: 30px;
            }
        }
    }
}

@media only screen and (max-width: 660px) {
    .news__section {
        .news__about__box {
            .news__about--second {
                .news__about--second--first {
                    img {
                        height: 300px;
                    }
                }
            }
        }

        .news__up__to__date {
            h2 {
                font-size: 30px;
                margin-bottom: 15px;
            }
            .news__box__container {
                display: inline-block;
                .news__box {
                    margin-bottom: 30px;
                }
            }
        }
    }
}

@media only screen and (max-width: 550px) {
    .news__section {
        .news__about__box {
            .news__about--heading {
                h2 {
                    font-size: 20px;
                    margin-bottom: 20px;
                }
            }

            .news__about--first--img {
                span {
                    top: 16px;
                    left: 16px;

                    padding: 3px;
                    border-radius: 1px;

                    font-size: 6px;
                    line-height: 1;
                }
            }

            .news__about--second {
                flex-direction: column;

                .news__about--second--first {
                    margin-right: 0;
                    margin-bottom: 20px;

                    img {
                        height: 400px;
                    }
                }
            }
        }

        .news__up__to__date {
            h2 {
                font-size: 28px;
            }

            .news__box {
                .img {
                    img {
                        height: 262px;
                    }
                }

                .news__box--heading {
                    h4 {
                        font-size: 16px;
                    }
                }

                .news__box--p {
                    p {
                        font-size: 12px;
                    }
                }

                .news__box--data {
                    .news__box--btn {
                        font-size: 12px;
                        padding: 7px 16px;
                    }
                }
            }
        }
    }
}
</style>

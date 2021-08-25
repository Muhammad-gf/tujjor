<template>
    <section class="magazines__main__page">
        <section class="container popular__container">
            <div class="popular__heading">{{$t('magazine')}}</div>
        </section>
        <div class="magazines__box container">
            <nuxt-link
                class="magazine__item__box"
                v-for="magazine in magazines"
                :key="magazine.slug"
                :to="{
                        name: `magazine-id___${$i18n.locale}`,
                        params: { id: magazine.slug }
                    }"
            >
                <div class="magazine__item--logo__box">
                    <div class="magazine__item--logo">
                        <span v-text="magazine.shopName"></span>
                    </div>
                    <div class="magazine__item--rating">
                        <img
                            src="../assets/img/magazines/star.png"
                            alt="Star img"
                        /><span>4</span>
                    </div>
                </div>
                <div class="magazine__item--description">
                    <span v-text="magazine.description[$i18n.locale]"></span>
                </div>
                <div class="magazine__item__img__box">
                    <div class="magazine__item__img--first">
                        <img :src="magazine.image[0]" alt="Item img" />
                    </div>
                    <div class="magazine__item__img--second">
                        <div class="magazine__item__img--second--first">
                            <img
                                src="../assets/img/magazines/img-second.png"
                                alt="Item img"
                            />
                        </div>

                        <div class="magazine__item__img--second--second">
                            <img
                                src="../assets/img/magazines/img-second-2.png"
                                alt="Item img"
                            />
                        </div>
                    </div>
                </div>
            </nuxt-link>
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
                >{{$t('all')}}</a
            >
        </section>
    </section>
</template>

<script>
export default {
    data() {
        return {
            magazineCount: 0,
            increaseBy: 0,
            magazines: [],
            limit: 0
        };
    },
    beforeMount() {
        console.log("windows", window.innerWidth);
        const winWidth = window.innerWidth;
        if (winWidth <= 530) {
            this.magazineCount = this.increaseBy = 2;
        } else {
            this.magazineCount = this.increaseBy = 3;
        }
        console.log("windows", window.innerWidth, this.magazineCount);
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
                name: "magazine-id",
                params: { id: slug }
            });
        }
    },

    async mounted() {
        const data = await this.fetchMagazines();
        this.magazines = data.data[0].data;
        this.limit = data.data[0].count;
        console.log("magazine", data);
    }
};
</script>

<style lang="scss">
.magazines__main__page {
    .magazines__box {
        display: flex;
        justify-content: space-between;
        align-items: stretch;

        .magazine__item__box {
            transition: all 0.2s;
            @include hover__active--animation;
            cursor: pointer;

            flex-basis: 32.6%;
            background-color: #f1efed;
            border-radius: 5px;
            padding: 15px;

            display: flex;
            flex-direction: column;

            .magazine__item--logo__box {
                flex-basis: 10%;
                padding: 5px 0;
                display: flex;
                justify-content: space-between;
                align-items: center;
                .magazine__item--logo {
                    img {
                        height: 100%;
                        width: auto;
                    }
                }

                .magazine__item--rating {
                    display: flex;
                    justify-content: center;
                    align-items: baseline;
                    img {
                        margin: 0 2px;
                        width: 14px;
                        height: 14px;
                    }
                    span {
                        font-family: Roboto, sans-serif;
                        font-weight: 500;
                        font-size: 16px;
                        line-height: 16px;
                        color: #565656;
                    }
                }
            }

            .magazine__item--description {
                flex-basis: 12%;

                padding: 5px 0;

                // text-overflow: hidden;
                // overflow: scroll;

                text-overflow: clip;
                font-family: Roboto, sans-serif;
                font-weight: 500;
                font-size: 14px;
                line-height: 100%;
                color: #000000;

                height: 2em;
                overflow: hidden;
            }

            .magazine__item__img__box {
                flex-basis: 63%;
                padding: 5px 0 0;

                display: flex;
                justify-content: space-between;

                .magazine__item__img--first {
                    flex-basis: 49%;

                    img {
                        width: 100%;
                        height: 100%;
                    }
                }

                .magazine__item__img--second {
                    flex-basis: 49%;

                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;

                    .magazine__item__img--second--first {
                        flex-basis: 49%;

                        img {
                            height: 100%;
                            width: 100%;
                        }
                    }

                    .magazine__item__img--second--second {
                        flex-basis: 49%;
                        img {
                            height: 100%;
                            width: 100%;
                        }
                    }
                }
            }
        }
    }
}

@media only screen and(max-width: 768px) {
    .magazines__main__page {
        .magazines__box {
            .magazine__item__box {
                padding: 9px;
                .magazine__item--logo__box {
                    .magazine__item--logo {
                        img {
                            height: 24px;
                        }
                    }

                    .magazine__item--rating {
                        img {
                            width: 10px;
                            height: 10px;
                        }
                        span {
                            font-size: 12px;
                        }
                    }
                }

                .magazine__item--description {
                    font-size: 9px;
                }
            }
        }
    }
}

@media only screen and(max-width: 560px) {
    .magazines__main__page {
        .popular__container {
            margin-top: 25px;
            padding-top: 0;
            padding-bottom: 0;
        }
        .magazines__box {
            flex-wrap: wrap;
            .magazine__item__box {
                margin: 0 0 10px;
                padding: 9px;
                flex-basis: 167px;

                .magazine__item--logo__box {
                    .magazine__item--logo {
                        img {
                            height: 24px;
                        }
                    }

                    .magazine__item--rating {
                        img {
                            width: 10px;
                            height: 10px;
                        }
                        span {
                            font-size: 12px;
                        }
                    }
                }

                .magazine__item--description {
                    font-size: 9px;
                }
            }
        }

        #btn__box {
            margin-top: 15px;
        }
    }
}

@media only screen and(max-width: 370px) {
    .magazines__main__page {
        .magazines__box {
            .magazine__item__box {
                margin: 0 0 6px;
                padding: 7px;
                flex-basis: 140px;

                .magazine__item--description {
                    font-size: 8px;
                }
            }
        }
    }
}
</style>

<template>
    <section>
        <base-loading v-if="!isGet"></base-loading>
        <section>
            <div class="container">
                <div class="title-box title__about__us">
                    <ul>
                        <li>
                            <nuxt-link to="/">Главная страница </nuxt-link>
                            /
                        </li>

                        <li>
                            <nuxt-link to="#">О нас </nuxt-link>
                        </li>
                    </ul>
                </div>
            </div>
            <section
                class="container popular__container about__section"
                id="about__section"
            >
                <div class="popular__heading about__heading" id="about__head">
                    О нас
                </div>
                <div
                    class="about__us__box"
                    v-for="aboutUsItem in aboutUsArray"
                    :key="aboutUsItem._id"
                >
                    <h1 class="about__us--title">
                        {{ aboutUsItem.title.uz }}
                        <!-- Друзья, наш сайт был специально создан для розничной и
                    оптовой продажи интерьерного освещения на территории России.
                    Мы сотрудничаем с ведущими производителями светотехнического
                    оборудования, которые зарекомендовали себя на мировом рынке.
                    Поэтому не стоит сомневаться в надёжном качестве продукции,
                    представленной на страницах сайта.
                    <br /><br />Интернет-магазин - это полноценный online-shop.
                    <br /><br />Мы работаем без выходных, 24 часа в сутки и
                    непрерывно расширяем и обновляем ассортимент товаров, чтобы
                    каждый покупатель мог подобрать светотехнику,
                    соответствующую его нуждам и желаниям. Наш магазин работает
                    с большим количеством производителей, что позволяет найти
                    светильник на самый утонченный . -->
                    </h1>
                    <!-- <img
                    src="../assets/img/about us/about.jpg"
                    alt="Photo about us"
                    class="about__us--img"
                /> -->

                    <div
                        class="about__us--text"
                        v-html="aboutUsItem.description.uz"
                    >
                        <!-- Интернет-магазин «Ваша Лампа» - это полноценный online-shop.
                    Мы работаем без выходных, 24 часа в сутки и непрерывно
                    расширяем и обновляем ассортимент товаров, чтобы каждый
                    покупатель мог подобрать светотехнику, соответствующую его
                    нуждам и желаниям.
                    <br /><br />Друзья, наш сайт был специально создан для
                    розничной и оптовой продажи интерьерного освещения на
                    территории России. Мы сотрудничаем с ведущими
                    производителями светотехнического оборудования, которые
                    зарекомендовали себя на мировом рынке. Поэтому не стоит
                    сомневаться в надёжном качестве продукции, представленной на
                    страницах сайта. Интернет-магазин это полноценный
                    online-shop. Мы работаем без выходных, 24 часа в сутки и
                    непрерывно расширяем и обновляем ассортимент товаров, чтобы
                    каждый покупатель мог подобрать светотехнику,
                    соответствующую его нуждам и желаниям. -->
                    </div>
                </div>
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
            aboutUsArray: [],
            isGet: false,
            error: null
        };
    },
    methods: {},

    computed: {},

    async mounted() {
        this.isGet = false;
        this.error = null;
        const ip = await this.$axios
            .$get("http://cdn.tujjor.org/api/info/all")
            .then(response => {
                if (response.success) {
                    console.log(response);
                    this.isGet = true;
                    return response;
                } else {
                    throw new Error("Could not save data!");
                }
            })
            .catch(error => {
                // handle error
                console.log(error);
                this.error = error.message;
            });
        this.aboutUsArray = ip.data;
        console.log(this.aboutUsArray);
    }
};
</script>

<style lang="scss">
// .container {
//     .title__about__us {
//         padding: 20px 0;
//         ul {
//             margin-bottom: 0;
//         }
//     }
// }
#about__section {
    margin-top: 0;
    padding-top: 0;
    #about__head {
        margin: 0 0;
        font-size: 48px;
    }
    .about__us__box {
        margin: 30px 0;

        h1 {
            font-size: 30px;
        }

        .about__us--text {
            display: block;
            margin: 20px 0;
            font-size: 16px;
            line-height: 1.3;
            color: #000;

            h1 {
                font-size: 22px;
            }

            .image {
                img {
                    display: block;
                    margin-left: auto;
                    margin-right: auto;
                    max-width: 100%;
                }
            }
        }
    }
}

@media only screen and (max-width: 560px) {
    // .container {
    //     .title__about__us {
    //         padding: 20px 0;
    //         ul {
    //             margin-bottom: 0;
    //         }
    //     }
    // }

    #about__section {
        #about__head {
            font-size: 36px;
        }
        .about__us__box {
            margin: 20px 0;

            h1 {
                font-size: 26px;
            }

            .about__us--text {
                margin: 0;

                h1 {
                    font-size: 20px;
                }
            }
        }
    }
}
</style>

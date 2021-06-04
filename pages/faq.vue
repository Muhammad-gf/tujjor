<template>
    <section>
        <base-loading v-if="!isGet"></base-loading>
        <section v-else>
            <div class="container">
                <div class="title-box title__about__us">
                    <ul>
                        <li>
                            <nuxt-link to="/">Главная страница </nuxt-link>
                            /
                        </li>

                        <li>
                            <nuxt-link to="#">FAQ</nuxt-link>
                        </li>
                    </ul>
                </div>
            </div>

            <section class="container faq__container">
                <div class="faq__heading">
                    Часто задаемевый вопросы
                </div>

                <div class="row container mx-0 px-0">
                    <div class="col-lg-8 px-0">
                        <faq-questions
                            faq-question="Название любого вопроса из этой сферы
                                деятельности?"
                            faq-description=" Лента LFD400S-G1-827-06 4052899953611 классом
                                исполнения IP67 по проекту установлена на
                                поверхности стеклянного фасада, под
                                козырьком-отливом, и подключена к блокам OSRAM
                                Optotronic OTi DALI 75/220-240/24, по 1-му на
                                каждый комплект ленты(6м). Лента укреплена с
                                помощью кабельных стяжек. Лента, установлена по
                                периметру фасада на уровне 6-ти и 18м. Всего
                                уложено 84м. После монтажных работ конструкция
                                отработала в режиме технического прогона с
                                сентября по 3-ю декаду ноября. В процессе
                                монтажа выявлено, что некоторые отрезки 6-ти
                                метровой ленты имеют мерцание. Лента
                                LFD400S-G1-827-06 4052899953611 классом
                                исполнения IP67 по проекту установлена на
                                поверхности стеклянного фасада, под
                                козырьком-отливом, и подключена к блокам OSRAM
                                Optotronic OTi DALI 75/220-240/24, по 1-му на
                                каждый комплект ленты(6м)."
                        >
                        </faq-questions>

                        <faq-questions
                            faq-question="Название любого вопроса из этой сферы
                                деятельности?"
                            faq-description=" Лента LFD400S-G1-827-06 4052899953611 классом
                                исполнения IP67 по проекту установлена на
                                поверхности стеклянного фасада, под
                                козырьком-отливом, и подключена к блокам OSRAM
                                Optotronic OTi DALI 75/220-240/24, по 1-му на
                                каждый комплект ленты(6м). Лента укреплена с
                                помощью кабельных стяжек. Лента, установлена по
                                периметру фасада на уровне 6-ти и 18м. Всего
                                уложено 84м. После монтажных работ конструкция
                                отработала в режиме технического прогона с
                                сентября по 3-ю декаду ноября. В процессе
                                монтажа выявлено, что некоторые отрезки 6-ти
                                метровой ленты имеют мерцание. Лента
                                LFD400S-G1-827-06 4052899953611 классом
                                исполнения IP67 по проекту установлена на
                                поверхности стеклянного фасада, под
                                козырьком-отливом, и подключена к блокам OSRAM
                                Optotronic OTi DALI 75/220-240/24, по 1-му на
                                каждый комплект ленты(6м)."
                        >
                        </faq-questions>

                        <faq-questions
                            faq-question="Название любого вопроса из этой сферы
                                деятельности?"
                            faq-description=" Лента LFD400S-G1-827-06 4052899953611 классом
                                исполнения IP67 по проекту установлена на
                                поверхности стеклянного фасада, под
                                козырьком-отливом, и подключена к блокам OSRAM
                                Optotronic OTi DALI 75/220-240/24, по 1-му на
                                каждый комплект ленты(6м). Лента укреплена с
                                помощью кабельных стяжек. Лента, установлена по
                                периметру фасада на уровне 6-ти и 18м. Всего
                                уложено 84м. После монтажных работ конструкция
                                отработала в режиме технического прогона с
                                сентября по 3-ю декаду ноября. В процессе
                                монтажа выявлено, что некоторые отрезки 6-ти
                                метровой ленты имеют мерцание. Лента
                                LFD400S-G1-827-06 4052899953611 классом
                                исполнения IP67 по проекту установлена на
                                поверхности стеклянного фасада, под
                                козырьком-отливом, и подключена к блокам OSRAM
                                Optotronic OTi DALI 75/220-240/24, по 1-му на
                                каждый комплект ленты(6м)."
                        >
                        </faq-questions>

                        <faq-questions
                            faq-question="Название любого вопроса из этой сферы
                                деятельности?"
                            faq-description=" Лента LFD400S-G1-827-06 4052899953611 классом
                                исполнения IP67 по проекту установлена на
                                поверхности стеклянного фасада, под
                                козырьком-отливом, и подключена к блокам OSRAM
                                Optotronic OTi DALI 75/220-240/24, по 1-му на
                                каждый комплект ленты(6м). Лента укреплена с
                                помощью кабельных стяжек. Лента, установлена по
                                периметру фасада на уровне 6-ти и 18м. Всего
                                уложено 84м. После монтажных работ конструкция
                                отработала в режиме технического прогона с
                                сентября по 3-ю декаду ноября. В процессе
                                монтажа выявлено, что некоторые отрезки 6-ти
                                метровой ленты имеют мерцание. Лента
                                LFD400S-G1-827-06 4052899953611 классом
                                исполнения IP67 по проекту установлена на
                                поверхности стеклянного фасада, под
                                козырьком-отливом, и подключена к блокам OSRAM
                                Optotronic OTi DALI 75/220-240/24, по 1-му на
                                каждый комплект ленты(6м)."
                        >
                        </faq-questions>

                        <faq-questions
                            faq-question="True!"
                            faq-description="Something!"
                        >
                        </faq-questions>

                        <faq-questions
                            v-for="faqBox in faqArray"
                            :key="faqBox._id"
                            :faq-question="faqBox.title.uz"
                            :faq-description="faqBox.description.uz"
                        >
                        </faq-questions>
                    </div>

                    <div class="col-lg-4 px-0">
                        <div class="customer__question__box row">
                            <h4 class="customer__question__header col-sm-12">
                                Оставьте ваш отзыв
                            </h4>

                            <input
                                type="text"
                                placeholder="Ваше имя"
                                class="customer__question__input col-sm-12"
                            />

                            <input
                                type="text"
                                placeholder="Ваш e-mail"
                                class="customer__question__input col-sm-12"
                            />

                            <textarea
                                name="question"
                                class="customer__question__input customer__question__txt col-sm-12"
                                placeholder="Ваш отзыв"
                            >
                            </textarea>

                            <a href="#" class="customer__question__send--btn ">
                                Отправить отзыв
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    </section>
</template>

<script>
import BaseLoading from "../components/UI/BaseLoading.vue";
export default {
    components: { BaseLoading },
    data() {
        return {
            faqArray: [],
            isGet: false
        };
    },

    methods: {},

    async mounted() {
        this.isGet = false;
        const ip = await this.$axios
            .$get("http://cdn.tujjor.org/api/help/all")
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
        this.faqArray = ip.data;
        console.log(ip);
        console.log(this.faqArray);
    }
};
</script>

<style scoped lang="scss">
.faq__container {
    .faq__heading {
        margin: 0 0 40px;
        font-family: Roboto, sans-serif;
        font-weight: 500;
        font-size: 48px;
        line-height: 1;
        color: #f7931f;
    }

    .customer__question__box {
        margin: 40px 0 80px 30px;
        padding: 30px;
        max-width: 373px;
        background-color: #fce3a4;
        border-radius: 5px;

        .customer__question__header {
            font-family: Roboto, sans-serif;
            font-size: 24px;
            line-height: 1;
            /* or 31px */
            color: #023047;
            margin-bottom: 20px;
            padding: 0;
        }

        .customer__question__input {
            display: inline-block;
            padding: 15px 12px;
            font-family: Roboto, sans-serif;
            font-size: 14px;
            line-height: 100%;
            /* identical to box height, or 14px */
            &::-webkit-input-placeholder {
                color: #c4c4c4;
                font-style: italic;
            }
            border: none;
            border-radius: 3px;

            color: #000;
            height: 1em;
            margin-bottom: 20px;
        }

        .customer__question__txt {
            height: 7em;
            line-height: 1.3;
            padding: 10px 12px;
        }

        .customer__question__send--btn {
            margin: auto;
            padding: 12px 33px;
            background-color: #fe9e0d;
            border-radius: 5px;

            color: #ffffff;
            font-family: Roboto, sans-serif;
            font-weight: 500;
            font-size: 16px;
            line-height: 1;
            /* identical to box height, or 16px */

            transition: all 0.2s;
            @include button__bg--color;
            @include hover__active--animation;
        }
    }
}

@media only screen and (max-width: 992px) {
    //  TO SET ENTER question SEND BOX
    .faq__container {
        .customer__question__box {
            margin-left: auto;
            margin-right: auto;
        }
    }
}

@media only screen and (max-width: 560px) {
    .faq__container {
        .faq__heading {
            font-size: 28px;
        }
    }
}
</style>

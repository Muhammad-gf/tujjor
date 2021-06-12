<template>
    <section>
        <base-loading v-if="!isRender"></base-loading>
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
                            v-for="faqBox in faqArray"
                            :key="faqBox._id"
                            :faq-question="faqBox.title.uz"
                            :faq-description="faqBox.description.uz"
                        >
                        </faq-questions>
                    </div>

                    <div class="col-lg-4 px-0">
                        <form class="customer__question__box row">
                            <h4 class="customer__question__header col-sm-12">
                                У вас есть вопросы
                            </h4>

                            <input
                                name="name"
                                id="name"
                                type="text"
                                v-model="question.name"
                                placeholder="Ваше имя"
                                class="customer__question__input col-sm-12"
                            />
                            <label
                                v-show="labelDanger.name"
                                for="name"
                                class="text-danger ml-1 mb-0 mt-1 customer__question__label"
                                >Iltimos ismingizni to'ldiring!</label
                            >

                            <input
                                name="email"
                                id="email"
                                type="email"
                                v-model="question.email"
                                placeholder="Ваш e-mail"
                                class="customer__question__input col-sm-12"
                            />
                            <label
                                v-show="labelDanger.email"
                                for="email"
                                class="text-danger ml-1 mb-0 mt-1 customer__question__label"
                                >Iltimos pochtangizni kiriting!</label
                            >

                            <textarea
                                name="question"
                                id="question"
                                v-model="question.question"
                                class="customer__question__input customer__question__txt col-sm-12"
                                placeholder="Ваш вопрос"
                            >
                            </textarea>
                            <label
                                v-show="labelDanger.question"
                                for="question"
                                class="text-danger ml-1 mb-0 mt-1 customer__question__label"
                                >Iltimos savolingizni kiriting!</label
                            >

                            <button
                                href="#"
                                class="customer__question__send--btn text-center "
                                @click.prevent="sendQuest"
                            >
                                Отправить вопрос
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </section>
    </section>
</template>

<script>
import BaseLoading from "../components/UI/BaseLoading.vue";

export default {
    head: {
        title:
            "Часто задаваемые вопросы — Tujjor. Низкие цены и широкий ассортимент!",
        meta: [
            {
                hid: "description",
                name: "description",
                content: "Часто задаваемые вопросы - Tujjor"
            }
        ]
    },

    components: { BaseLoading },
    data() {
        return {
            faqArray: [],
            isRender: false,
            labelDanger: {
                name: false,
                email: false,
                question: false
            },

            question: {
                name: "",
                email: "",
                question: ""
            }
        };
    },

    methods: {
        async sendQuest() {
            if (this.question.name === "") this.labelDanger.name = true;
            if (
                this.question.email === "" ||
                !this.question.email.includes("@")
            )
                this.labelDanger.email = true;
            if (this.question.question === "") this.labelDanger.question = true;
            console.log(
                this.labelDanger.name,
                this.labelDanger.email,
                this.labelDanger.question
            );
            if (
                this.question.name != "" &&
                this.question.email != "" &&
                this.question.email.includes("@") &&
                this.question.question != ""
            ) {
                await this.$axios
                    .$post("/question/create", this.question)
                    .then(response => {
                        console.log(response);
                        if (response.success) {
                            this.labelDanger.name = false;
                            this.labelDanger.email = false;
                            this.labelDanger.question = false;
                            this.question.name = "";
                            this.question.email = "";
                            this.question.question = "";
                            console.log(response);
                        } else {
                            throw new Error("Could not save data!");
                        }
                    })
                    .catch(error => {
                        // handle error
                        console.log(error);
                    });
            } else {
                console.log("to'ldir");
            }
        }
    },

    async mounted() {
        this.isRender = false;
        const ip = await this.$axios
            .$get("/help/client/all")
            .then(response => {
                if (response.success) {
                    this.isRender = true;
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

            &:focus {
                border: none;
                border-radius: 3px;
            }

            border: none;
            border-radius: 3px;

            color: #000;
            height: 1em;
            margin-top: 15px;
        }

        .customer__question__txt {
            height: 7em;
            line-height: 1.3;
            padding: 10px 12px;
        }

        .customer__question__send--btn {
            margin: auto;
            margin-top: 20px;
            padding: 12px 33px;
            background-color: #fe9e0d;
            border-radius: 5px;
            outline: none;
            border: none;

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

<template>
    <section>
        <div
            class="login-page d-flex flex-column justify-content-center align-items-center"
        >
            <div class="login-page-box d-flex flex-column ">
                <h1 class="title-form">{{ $t("vostparol") }}</h1>
                <div
                    class="d-flex flex-column justify-content-center input__box form-floating"
                >
                    <label for="floatingInput">{{ $t("kood") }}</label>
                    <input
                        type="text"
                        class="form-control"
                        v-model="user.code"
                        name="number"
                        id="number"
                        placeholder="-----"
                    />

                    <h6 v-if="isError" class="error-text">
                        {{ $t("invalidcode") }}
                    </h6>
                </div>

                <a class="button__links" @click="sendCode">
                    {{ $t("podkod") }}
                </a>

                <div
                    class="hot__link__box d-flex  justify-content-between align-items-baseline"
                ></div>
                <!-- <nuxt-link to="/auth/register" class="button__links">
                Регистрация
            </nuxt-link> -->
            </div>
        </div>
    </section>
</template>

<script>
import WarningMessage from "../../components/Modals/WarningMessage.vue";
import DangerMessage from "../../components/Modals/DangerMessage.vue";
import { required, minLength, between } from "vuelidate/lib/validators";
export default {
    components: { WarningMessage, DangerMessage },

    head: {
        title: "Авторизация — Tujjor. Низкие цены и широкий ассортимент!",
        meta: [
            {
                hid: "description",
                name: "description",
                content: "Авторизация - Tujjor"
            }
        ]
    },

    data() {
        return {
            isError: false,
            user: {
                code: ""
            }
        };
    },

    methods: {
        async sendCode() {
            this.$axios
                .$post("/user/reset/checkCode", {
                    phone: this.$route.query.phone,
                    code: this.user.code
                })
                .then(res => {
                    if (res.success) {
                        this.$router.push({
                            name: `auth-newpassword___${this.$i18n.locale}`,
                            query: {
                                phone: this.$route.query.phone,
                                hash: res.data.hash
                            }
                        });
                    }
                })
                .catch(err => {
                    this.isError = true;
                });
        },
        pushIndex(event) {
            this.$router.push("/");
        }
    },
    mounted() {
        // register, i.e. in a `mounted` hook
        window.addEventListener("beforeunload", this.pushIndex);
    },
    beforeDestroy() {
        // register, i.e. in a `beforeDestroy` hook
        window.removeEventListener("beforeunload", this.pushIndex);
    }
};
</script>

<style lang="scss" scoped>
.login-page {
    width: 100%;
    margin-top: 30px;

    .logo-tujjor {
        margin-bottom: 40px;
    }

    .login-page-box {
        width: 466px;
        background-color: #fff;
        border-radius: 5px;
        box-shadow: 0px 0px 5px rgba($color: #000000, $alpha: 0.3);
        padding: 30px 20px;

        .input__box {
            margin: 5px 0;

            label {
                font-family: Roboto, sans-serif;
                font-size: 14px;
                line-height: 24px;
                margin: 0;
                padding: 4px 0;
            }

            input {
                border: 0.98px solid #f7931e;
                box-sizing: border-box;
                border-radius: 5px;
                height: 50px;

                font-size: 18px;
                line-height: 1.3;
            }
            .form-control:focus {
                color: #495057;
                background-color: #fff;
                border-color: #f7931e;
                outline: 0;
                box-shadow: 0 0 0 0.2rem rgba(247, 147, 30, 0.25);
            }
        }

        .button__links {
            flex-grow: 1;

            background-color: #f7931e;
            color: white;
            border-radius: 5px;

            text-align: center;
            padding: 15px;
            font-family: Roboto, sans-serif;
            font-weight: 500;
            font-size: 16px;
            line-height: 24px;
            margin: 5px 0;
            cursor: pointer;
        }

        .button__links:hover {
            background-color: rgba(247, 147, 30, 0.8);
        }

        .hot__link__box {
            margin: 5px 0 7px;

            .hot__links {
                font-family: Roboto, sans-serif;
                font-size: 14px;
                line-height: 16px;
                text-align: center;
                text-decoration-line: underline;
                cursor: pointer;
            }

            .hot__links:hover {
                opacity: 0.9;
                color: #023047;
            }

            .remember__password {
                /* dark blue */
                color: #023047;
            }
        }
    }
}

@media only screen and (max-width: 500px) {
    .login-page {
        padding: 10px;
        .login-page-box {
            width: 98%;
            padding: 20px 10px;
        }
    }
}
</style>

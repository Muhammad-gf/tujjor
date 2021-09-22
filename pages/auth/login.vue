<template>
    <section>
        <div
            class="login-page d-flex flex-column justify-content-center align-items-center"
        >
            <div class="login-page-box d-flex flex-column ">
                <div
                    class="d-flex flex-column justify-content-center input__box form-floating"
                >
                    <label for="email">{{ $t("tel") }}</label>
                    <input
                        type="text"
                        class="form-control"
                        v-model="user.phone"
                        name="email"
                        id="email"
                        :placeholder="$t('tel')"
                        v-mask="'+998 (##) ###-##-##'"
                    />
                </div>

                <div
                    class="d-flex flex-column justify-content-center input__box form-floating"
                >
                    <label for="password">{{ $t("password") }}</label>
                    <input
                        type="password"
                        class="form-control"
                        v-model="user.password"
                        name="password"
                        id="password"
                        :placeholder="$t('password')"
                    />
                </div>

                <a class="button__links" @click="loginUser">
                    {{ $t("log_in") }}
                </a>

                <div
                    class="hot__link__box d-flex  justify-content-between align-items-baseline"
                >
                    <nuxt-link
                        :to="{ name: `auth-phone___${$i18n.locale}` }"
                        class="hot__links remember__password"
                    >
                        {{ $t("zabilparol") }}
                    </nuxt-link>
                    <nuxt-link
                        :to="{ name: 'auth-register___' + $i18n.locale }"
                        class="hot__links"
                    >
                        {{ $t("noAcc") }}
                    </nuxt-link>
                </div>
                <!-- <nuxt-link to="/auth/register" class="button__links">
                Регистрация
            </nuxt-link> -->
            </div>
        </div>
        <warning-message
            v-if="messageNoData"
            :post-title="$t('err1')"
        ></warning-message>
        <danger-message
            v-if="messageDuplicate"
            :post-title="$t('err3')"
        ></danger-message>
    </section>
</template>

<script>
import WarningMessage from "../../components/Modals/WarningMessage.vue";
import DangerMessage from "../../components/Modals/DangerMessage.vue";
import { mapGetters, mapActions, mapMutations } from "vuex";
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

    middleware: "auth",

    computed: mapGetters(["redirectArray"]),

    data() {
        return {
            user: {
                phone: "+998",
                password: ""
            },

            messageNoData: false,
            messageDuplicate: false
        };
    },
    methods: {
        ...mapActions(["fetchCountBasket"]),
        ...mapMutations(["updateLoggedIn"]),

        async loginUser() {
            this.messageNoData = this.messageDuplicate = false;
            let phone = this.user.phone.replace(/[^0-9]/g, "");
            // console.log(!!phone, !!this.user.password, "message");
            if (!!phone && !!this.user.password) {
                await this.$auth
                    .loginWith("local", {
                        data: {
                            phone: phone,
                            password: this.user.password
                        }
                    })
                    .then(res => {
                        console.log("Next tick", res.token);
                        this.fetchCountBasket();
                        const link = this.redirectArray[1];
                        if (link.length > 0) {
                            this.$router.push({
                                path: link
                            });
                        } else {
                            this.$router.push({
                                name: "index___" + this.$i18n.locale
                            });
                        }
                        return res;
                    })
                    .catch(err => {
                        this.$nextTick(() => {
                            this.messageDuplicate = true;
                            // console.log(
                            //     "message start",
                            //     this.messageNoData,
                            //     this.messageDuplicate
                            // );
                        });
                        return err;
                    });
                // console.log("login sets", response);
            } else {
                this.$nextTick(() => {
                    this.messageNoData = true;
                });
            }

            this.updateLoggedIn();
        }
    },
    mounted() {}
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

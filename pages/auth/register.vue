<template>
    <section>
        <div
            class="login-page d-flex flex-column justify-content-center align-items-center"
        >
            <div class="login-page-box d-flex flex-column" v-if="!codeBox">
                <div
                    class="d-flex flex-column justify-content-center input__box form-floating"
                >
                    <label for="floatingInput">{{ $t("name") }}</label>
                    <input
                        type="text"
                        class="form-control"
                        v-model="user.name"
                        name="number"
                        id="number"
                        :placeholder="$t('name')"
                    />
                </div>

                <div
                    class="d-flex flex-column justify-content-center input__box form-floating"
                >
                    <label for="floatingInput">{{ $t("tel") }}</label>
                    <input
                        type="text"
                        class="form-control"
                        v-model="user.phone"
                        name="phone"
                        id="phone"
                        :placeholder="$t('tel')"
                        v-mask="'+998 (##) ###-##-##'"
                    />
                </div>

                <div
                    class="d-flex flex-column justify-content-center input__box form-floating"
                >
                    <label for="floatingInput">Email</label>
                    <input
                        type="email"
                        class="form-control"
                        v-model="user.email"
                        name="email"
                        id="email"
                        placeholder="Email"
                    />
                </div>

                <div
                    class="d-flex flex-column justify-content-center input__box form-floating"
                >
                    <label for="floatingInput">{{ $t("pass") }}</label>
                    <input
                        type="password"
                        class="form-control"
                        v-model="user.password"
                        name="password"
                        id="password"
                        :placeholder="$t('pass')"
                    />
                </div>

                <div
                    class="d-flex flex-column justify-content-center input__box form-floating"
                >
                    <input
                        type="password"
                        class="form-control"
                        v-model="passwordRepeat"
                        name="password2"
                        id="password2"
                        :placeholder="$t('rePassword')"
                    />
                </div>

                <!-- <recaptcha id="recaptcha" /> -->

                <a class="button__links" @click="registerUserMainFunc">
                    {{ $t("reg") }}
                </a>
                <div class="hot__link__box d-flex   align-items-baseline">
                    <span class="mr-1">
                        {{ $t("reg1") }}
                    </span>
                    <nuxt-link to="/auth/login" class="hot__links">
                        {{ $t("log_in") }}</nuxt-link
                    >
                </div>
            </div>

            <div class="login-page-box d-flex flex-column" v-if="codeBox">
                <div class="d-flex flex-row input__box form-floating">
                    <h5 class="mb-0">
                        {{ $t("resumeSendPin") }}
                    </h5>
                </div>

                <div
                    class="d-flex flex-column justify-content-center input__box form-floating"
                >
                    <input
                        type="text"
                        class="form-control"
                        v-model="pin"
                        name="number"
                        id="number"
                        :placeholder="$t('pin')"
                    />
                </div>

                <a class="button__links" @click="checkCode">
                    {{ $t("approve") }}
                </a>

                <div class="hot__link__box d-flex   align-items-baseline">
                    <span class="mr-1">
                        {{ $t("dontRecievePin") }}
                    </span>
                    <a class="hot__links" @click="sendPin(false)">
                        {{ $t("resendPin") }}
                    </a>
                </div>
            </div>
        </div>

        <warning-message
            v-if="messageNoData"
            :post-title="$t('err1')"
        ></warning-message>

        <danger-message v-if="messageDuplicate" :post-title="$t('err2')">
        </danger-message>

        <modal-success v-if="resendPin" :post-title="$t('upr8')">
        </modal-success>

        <modal-success v-if="pinSended" :post-title="$t('upr9')">
        </modal-success>
    </section>
</template>

<script>
import ModalSuccess from "../../components/Modals/SuccessModal.vue";
import WarningMessage from "../../components/Modals/WarningMessage.vue";
import DangerMessage from "../../components/Modals/DangerMessage.vue";
import { mapGetters, mapActions, mapMutations } from "vuex";
export default {
    components: { WarningMessage, DangerMessage, ModalSuccess },
    head: {
        title: "Регистрация — Tujjor. Низкие цены и широкий ассортимент!",
        meta: [
            {
                hid: "description",
                name: "description",
                content: "Регистрация - Tujjor"
            }
        ]
    },

    data() {
        return {
            passwordRepeat: "",
            user: {
                name: "",
                phone: "",
                password: "",
                email: ""
            },

            userData: {
                phone: "",
                password: "",
                pin: ""
            },

            pin: "",

            messageNoData: false,
            messageDuplicate: false,
            resendPin: false,
            pinSended: false,

            codeBox: false
        };
    },
    methods: {
        ...mapMutations(["updateLoggedIn"]),

        resetModals() {
            this.messageNoData = this.messageDuplicate = this.resendPin = this.pinSended = false;
        },

        async registerUserMainFunc() {
            this.resetModals();
            // console.log(
            //     "message start",
            //     this.messageNoData,
            //     this.messageDuplicate
            // );
            if (
                !!this.user.name &&
                !!this.user.phone &&
                !!this.user.password &&
                !!this.user.email
            ) {
                await this.registerUser();
            } else {
                this.$nextTick(() => {
                    this.messageNoData = true;
                    // console.log(
                    //     "message start",
                    //     this.messageNoData,
                    //     this.messageDuplicate
                    // );
                });
            }
        },

        async checkCode() {
            await this.$axios
                .$post("user/checkCode", {
                    phone: this.userData.phone,
                    code: this.pin
                })
                .then(res => {
                    if (!!res.success && !!res.token) {
                        this.loginUser();
                        return res;
                    } else {
                        throw new Error("Couldn't login in!");
                    }
                })
                .catch(err => console.error(err));
        },

        async sendPin(a) {
            this.resetModals();
            await this.$axios
                .$post("user/getCode", {
                    phone: this.userData.phone
                })
                .then(res => {
                    if (!!res.success && !!res.message) {
                        !!a ? (this.pinSended = true) : (this.resendPin = true);
                        console.log(res);
                        return res;
                    } else {
                        throw new Error("Couldn't send pin!");
                    }
                })
                .catch(err => {
                    console.error(err);
                });
        },

        async registerUser() {
            let phone = this.user.phone.replace(/[^0-9]/g, "");
            this.userData = { ...this.user };
            this.userData.phone = phone;
            const data = await this.$axios
                .$post("/user/create", this.userData)
                .then(res => {
                    if (!!res.token) {
                        return res;
                    } else if (!res.success && res.err.code === 11000) {
                        this.$nextTick(() => {
                            this.messageDuplicate = true;
                            // console.log(
                            //     "message start",
                            //     this.messageNoData,
                            //     this.messageDuplicate
                            // );
                        });
                        return res;
                    } else if (res.success && !!res.phone) {
                        this.codeBoxActive();
                        this.sendPin(true);
                        return res;
                    } else {
                        this.$nextTick(() => {
                            this.messageDuplicate = true;
                            // console.log(
                            //     "message start",
                            //     this.messageNoData,
                            //     this.messageDuplicate
                            // );
                        });
                        throw new Error("Couldn't save data!");
                    }
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
            this.updateLoggedIn();
        },

        async loginUser() {
            try {
                let response = await this.$auth.loginWith("local", {
                    data: {
                        phone: this.userData.phone,
                        password: this.userData.password
                    }
                });
                this.$router.push("/");
                this.updateLoggedIn();
            } catch (err) {
                console.error(err);
            }
        },

        codeBoxActive() {
            this.codeBox = !this.codeBox;
        }
    }
};
</script>

<style lang="scss" scoped>
.login-page {
    margin-top: 30px;
    width: 100%;

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
                cursor: pointer;
                text-decoration: underline;
            }

            .hot__links:hover {
                color: #023047;
            }

            .remember__password {
                font-family: Roboto, sans-serif;
                font-size: 14px;
                line-height: 16px;
                text-align: center;
                text-decoration-line: underline;
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

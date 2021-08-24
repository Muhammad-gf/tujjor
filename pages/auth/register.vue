<template>
    <section>
        <div
            class="login-page d-flex flex-column justify-content-center align-items-center"
        >

            <div class="login-page-box d-flex flex-column ">
                <div
                    class="d-flex flex-column justify-content-center input__box form-floating"
                >
                    <label for="floatingInput">{{$t('name')}}</label>
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
                    <label for="floatingInput">{{$t('tel')}}</label>
                    <input
                        type="text"
                        class="form-control"
                        v-model="user.phone"
                        name="phone"
                        id="phone"
                        :placeholder="$t('tel')"
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
                    <label for="floatingInput">{{$t('pass')}}</label>
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
                    {{$t('reg')}}
                </a>
                <div class="hot__link__box d-flex   align-items-baseline">
                    <span>
                        {{$t('reg1')}}
                    </span>
                    <nuxt-link to="/auth/login" class="hot__links">
                        {{$t('log_in')}}</nuxt-link
                    >
                </div>
            </div>
        </div>

        <warning-message
            v-if="messageNoData"
            :post-title="$t('err1')"
        ></warning-message>

        <danger-message
            v-if="messageDuplicate"
            :post-title="$t('err2')"
        ></danger-message>
    </section>
</template>

<script>
import WarningMessage from "../../components/Modals/WarningMessage.vue";
import DangerMessage from "../../components/Modals/DangerMessage.vue";
export default {
    components: { WarningMessage, DangerMessage },
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

            messageNoData: false,
            messageDuplicate: false
        };
    },
    methods: {
        resetModals() {
            this.messageNoData = this.messageDuplicate = false;
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

        async registerUser() {
            let phone = this.user.phone.replace(/[^0-9]/g, "");
            this.user.phone = phone;
            const data = await this.$axios
                .$post("/user/create", this.user)
                .then(res => {
                    if (!!res.token) {
                        // console.log("register send", res);
                        this.loginUser();
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

            console.log("register data", data);
        },

        async loginUser() {
            try {
                let response = await this.$auth.loginWith("local", {
                    data: {
                        phone: this.user.phone,
                        password: this.user.password
                    }
                });
                // console.log("login sets", response);
                this.$router.push("/");
            } catch (err) {
                console.error(err);
            }
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

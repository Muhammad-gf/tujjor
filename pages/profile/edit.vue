<template>
    <section>
        <div class="container">
            <form v-on:submit.prevent class="checkout__box">
                <div class="person__home">
                    <h4>{{ $t("danni") }}</h4>

                    <div class="person__home--description">
                        <span>Загрузка изображения</span>
                        <input
                            type="file"
                            accept="image/png, image/gif, image/jpeg"
                            placeholder="загрузить"
                            id="photo"
                            name="photo"
                        />

                        <label for="photo">
                            <span>
                                Загрузить
                            </span>
                            <span class="plus">
                                +
                            </span>
                        </label>
                    </div>

                    <div class="person__home--description">
                        <span>Имя</span>
                        <input
                            type="text"
                            placeholder="Имя"
                            id="name"
                            name="name"
                        />
                    </div>

                    <div class="person__home--description">
                        <span>Фамиля</span>
                        <input
                            type="text"
                            placeholder="Фамиля"
                            id="surName"
                            name="surName"
                        />
                    </div>

                    <div class="person__home--description">
                        <span>{{ $t("tel") }}</span>
                        <input
                            type="text"
                            :placeholder="$t('tel')"
                            id="Number"
                            name="Number"
                            v-mask="'+998 (##) ###-##-##'"
                        />
                    </div>

                    <div class="person__home--description">
                        <span>{{ $t("city") }}</span>
                        <select
                            name="region"
                            id="region"
                            v-model="selectedAdress.region"
                            @change="giveCity()"
                        >
                            <option value="" disabled selected>{{
                                $t("myCity")
                            }}</option>
                            <option
                                v-for="region in allRegions"
                                :key="region._id"
                                :value="region.name.uz"
                            >
                                {{ region.name.uz }}</option
                            >
                        </select>
                    </div>

                    <div class="person__home--description">
                        <span>{{ $t("ray") }}</span>
                        <select
                            name="village"
                            id="village"
                            v-model="selectedAdress.district"
                            @change="giveDistrict()"
                        >
                            <option value="" disabled selected>{{
                                $t("myRay")
                            }}</option>
                            <option
                                v-for="district in selectedCityDistricts"
                                :key="district._id"
                                :value="district.name.uz"
                            >
                                {{ district.name.uz }}
                            </option>
                        </select>
                    </div>

                    <div class="person__home--description">
                        <span>{{ $t("address") }}</span>
                        <input
                            type="text"
                            :placeholder="$t('address')"
                            id="Adress"
                            name="Adress"
                        />
                    </div>
                </div>

                <div class="person__checkout">
                    <a class="checkout__you__order submit" target="_blank">
                        Cохранить
                    </a>
                </div>
            </form>
        </div>
    </section>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
export default {
    data() {
        return {
            selectedAdress: {
                region: "",
                district: ""
            },

            selectedCityDistricts: []
        };
    },
    computed: mapGetters(["allRegions"]),

    methods: {
        ...mapMutations([]),

        ...mapActions(["fetchRegion"]),

        giveCity() {
            // select region and find districts depends on in
            this.order.address.district = this.selectedAdress.district = "";
            const region = this.selectedAdress.region;
            const result = this.allRegions.filter(arr => {
                return arr.name.uz == region || arr.name.ru == region;
            });
            this.selectedCityDistricts = result[0].districts;
            this.order.address.region = result[0];
            console.log(result);
        },

        giveDistrict() {
            const district = this.selectedAdress.district;
            const result = this.order.address.region.districts.filter(arr => {
                return arr.name.uz === district || arr.name.ru === district;
            });

            this.order.address.district = result[0]._id;
            console.log(result[0]._id);
        }
    },

    async mounted() {
        const token = this.$auth.strategy.token.get();
        await this.fetchRegion(token);
    }
};
</script>

<style lang="scss" scoped>
.checkout__box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px 0;

    .person__home {
        padding: 30px 0 46px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        h4 {
            margin-bottom: 34px;
            flex-basis: 100%;
            font-family: Montserrat, sans-serif;
            font-weight: bold;
            font-size: 24px;
            line-height: 100%;
            /* identical to box height, or 24px */
            color: #f7931f;
        }

        .person__home--description {
            margin-top: 16px;
            flex-basis: 30%;
            padding: 0 10px;
            display: flex;
            flex-direction: column;

            span {
                font-family: Roboto, sans-serif;
                font-weight: 500;
                font-size: 16px;
                line-height: 28px;
                /* identical to box height, or 168% */
                color: #000000;
            }

            input,
            select,
            label {
                // border: ;
                border: 1.16px solid #f7931e;
                outline: none;
                background-color: transparent;
                padding: 8px 12px;
                border-radius: 5px;

                /* asosiy */

                text-align: left;
                font-family: Roboto, sans-serif;
                font-weight: normal;
                font-size: 16px;
                line-height: 28px;
                /* identical to box height, or 168% */
                color: #666666;

                // To center vector png
                display: flex;
                justify-content: space-between;
                align-items: center;

                span {
                    text-align: left;
                    font-family: Roboto, sans-serif;
                    font-weight: normal;
                    font-size: 16px;
                    line-height: 28px;
                    /* identical to box height, or 168% */
                    color: #666666;
                }

                .plus {
                    color: #f7931e;
                    font-weight: 500;
                    font-size: 20px;
                }
            }

            input::-webkit-outer-spin-button,
            input::-webkit-inner-spin-button {
                -webkit-appearance: none;
                margin: 0;
            }

            /* Firefox */
            input[type="number"] {
                -moz-appearance: textfield;
            }

            input[type="file"] {
                display: none;
            }

            label:hover,
            select:hover {
                cursor: pointer;
            }

            select {
                -webkit-appearance: none;
                -moz-appearance: none;
                appearance: none;

                background-image: url("../../assets/img/checkout__order/vector.png");
                background-repeat: no-repeat;
                background-position: 97% 50%;
            }
        }
    }

    .person__checkout {
        padding: 20px 0 30px;
        display: flex;
        justify-content: center;
        align-items: center;

        .checkout__you__order {
            flex-basis: auto;
            width: auto;
            outline: none;
            border: none;

            background-color: #f7931e;
            /* asosiy */
            box-shadow: 0 2.32px 11.6px rgb(0 0 0 / 25%);

            border-radius: 5px;

            font-family: Roboto;
            font-weight: 500;
            font-size: 16px;
            /* or 147% */
            padding: 10px 50px;
            text-align: center;

            color: #fcf6f6;

            &:hover {
                opacity: 0.85;
                cursor: pointer;
            }
        }
    }
}

@media screen and (max-width: 1000px) {
    .checkout__box {
        .person__home {
            .person__home--description {
                flex-basis: 49%;
            }
        }
    }
}

@media screen and (max-width: 570px) {
    .checkout__box {
        .person__home {
            .person__home--description {
                flex-basis: 100%;
            }
        }
    }
}
</style>

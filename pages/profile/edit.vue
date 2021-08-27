<template>
    <section>
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
    justify-content: space-between;

    .person__home {
        flex: 2;
        margin-right: 20px;
        padding: 30px 30px 46px;
        background: #ffffff;
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
        border-radius: 5px;

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
            flex-basis: 47%;
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
            select {
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
        flex: 1;
        background: #ffffff;
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
        border-radius: 5px;
        padding: 20px 20px 30px;
        display: flex;
        flex-direction: column;

        span {
            font-family: Roboto;
            font-weight: 500;
            font-size: 22px;
            line-height: 100%;
            /* or 22px */

            color: #023047;
            display: inline-block;
            margin-bottom: 22px;
        }

        .span__container {
            margin-bottom: 12px;
            display: flex;
            justify-content: space-between;

            span {
                margin-bottom: 0;
                font-family: Roboto;
                font-size: 18px;
                line-height: 100%;
                /* or 18px */

                color: #666666;
            }

            .primary {
                font-family: Roboto;
                font-weight: 900;
                font-size: 20px;
                line-height: 100%;
                /* or 20px */
                /* asosiy */

                color: #f7931e;
            }

            .secondary {
                font-family: Roboto;
                font-weight: 900;
                font-size: 20px;
                line-height: 100%;
                /* or 20px */

                text-align: right;

                /* Red */

                color: #eb5757;
            }

            .tritary {
                font-family: Roboto;
                font-weight: 900;
                font-size: 20px;
                line-height: 100%;
                /* or 20px */
                /* Green 2 */
                color: #27ae60;
            }

            .tertiary {
                font-family: Roboto;
                font-weight: 900;
                font-size: 20px;
                line-height: 100%;
                /* or 20px */

                text-align: right;

                /* dark blue */

                color: #023047;
            }

            &--last {
                margin-top: 10px;
                padding: 10px 0;
                border-top: 1px solid #dddddd;
            }
        }

        .checkout__you__order {
            flex-basis: 100%;
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
            padding: 18px 0;
            text-align: center;

            color: #fcf6f6;

            &:hover {
                opacity: 0.85;
                cursor: pointer;
            }
        }
    }
}
</style>

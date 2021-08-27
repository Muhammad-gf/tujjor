<template>
    <section class="main-section">
        <section class="profile-section container">
            <div class="profile-box">
                <div class="profile">
                    <img
                        src="../../assets/img/magazines/9/2.png"
                        alt="Profile photo"
                    />
                    <h3>Javohir Akramjonov</h3>
                    <h5>ID 12345678</h5>
                </div>
                <nuxt-link to="/profile/edit">
                    Редактировать профиль
                </nuxt-link>
            </div>

            <div class="tab-box">
                <b-tabs
                    content-class="mt-3"
                    active-nav-item-class="font-weight-bold text-uppercase"
                    active-tab-class="font-weight-bold text-success"
                    align="center"
                >
                    <b-tab title="Куплено" active>
                        <div class="checkout__order__item__box">
                            <div class="checkout__order__item--header">
                                <img
                                    src="../../assets/img/magazines/3/1.png"
                                    alt="Item image"
                                />
                                <div class="checkout__order__item__description">
                                    <h3>POLO рубашка</h3>
                                    <p class="p-first">
                                        Рубашка с контрастным дизайном
                                    </p>
                                    <p class="p-second">
                                        <span>Размер:</span> XXL - 44
                                    </p>
                                </div>
                            </div>
                            <div class="checkout__order__item--secondary">
                                <div class="checkout__order__item--number">
                                    <span>{{ $t("kol") }}:</span>

                                    <span class="number"> 1 шт</span>
                                </div>
                                <div class="checkout__order__item--price">
                                    <span>
                                        100 000
                                        {{ $t("sum") }}
                                    </span>
                                    <span v-if="''">
                                        100 000
                                        {{ $t("sum") }}
                                    </span>
                                </div>
                                <div class="checkout__order__item--color">
                                    <span>{{ $t("color") }}:</span>
                                    <img
                                        src="../../assets/img/magazines/3/1.png"
                                        alt="Color image"
                                    />
                                </div>
                            </div>
                        </div>

                        <div class="checkout__order__item__box">
                            <div class="checkout__order__item--header">
                                <img
                                    src="../../assets/img/magazines/3/1.png"
                                    alt="Item image"
                                />
                                <div class="checkout__order__item__description">
                                    <h3>POLO рубашка</h3>
                                    <p class="p-first">
                                        Рубашка с контрастным дизайном
                                    </p>
                                    <p class="p-second">
                                        <span>Размер:</span> XXL - 44
                                    </p>
                                </div>
                            </div>
                            <div class="checkout__order__item--secondary">
                                <div class="checkout__order__item--number">
                                    <span>{{ $t("kol") }}:</span>

                                    <span class="number"> 1 шт</span>
                                </div>
                                <div class="checkout__order__item--price">
                                    <span>
                                        100 000
                                        {{ $t("sum") }}
                                    </span>
                                    <span v-if="''">
                                        100 000
                                        {{ $t("sum") }}
                                    </span>
                                </div>
                                <div class="checkout__order__item--color">
                                    <span>{{ $t("color") }}:</span>
                                    <img
                                        src="../../assets/img/magazines/3/1.png"
                                        alt="Color image"
                                    />
                                </div>
                            </div>
                        </div>

                        <div class="checkout__order__item__box">
                            <div class="checkout__order__item--header">
                                <img
                                    src="../../assets/img/magazines/3/1.png"
                                    alt="Item image"
                                />
                                <div class="checkout__order__item__description">
                                    <h3>POLO рубашка</h3>
                                    <p class="p-first">
                                        Рубашка с контрастным дизайном
                                    </p>
                                    <p class="p-second">
                                        <span>Размер:</span> XXL - 44
                                    </p>
                                </div>
                            </div>
                            <div class="checkout__order__item--secondary">
                                <div class="checkout__order__item--number">
                                    <span>{{ $t("kol") }}:</span>

                                    <span class="number"> 1 шт</span>
                                </div>
                                <div class="checkout__order__item--price">
                                    <span>
                                        100 000
                                        {{ $t("sum") }}
                                    </span>
                                    <span v-if="''">
                                        100 000
                                        {{ $t("sum") }}
                                    </span>
                                </div>
                                <div class="checkout__order__item--color">
                                    <span>{{ $t("color") }}:</span>
                                    <img
                                        src="../../assets/img/magazines/3/1.png"
                                        alt="Color image"
                                    />
                                </div>
                            </div>
                        </div>
                    </b-tab>
                    <b-tab title="В дороге">
                        <div class="checkout__order__item__box">
                            <div class="checkout__order__item--header">
                                <img
                                    src="../../assets/img/magazines/3/1.png"
                                    alt="Item image"
                                />
                                <div class="checkout__order__item__description">
                                    <h3>POLO рубашка</h3>
                                    <p class="p-first">
                                        Рубашка с контрастным дизайном
                                    </p>
                                    <p class="p-second">
                                        <span>Размер:</span> XXL - 44
                                    </p>
                                </div>
                            </div>
                            <div class="checkout__order__item--secondary">
                                <div class="checkout__order__item--number">
                                    <span>{{ $t("kol") }}:</span>

                                    <span class="number"> 1 шт</span>
                                </div>
                                <div class="checkout__order__item--price">
                                    <span>
                                        100 000
                                        {{ $t("sum") }}
                                    </span>
                                    <span v-if="''">
                                        100 000
                                        {{ $t("sum") }}
                                    </span>
                                </div>
                                <div class="checkout__order__item--color">
                                    <span>{{ $t("color") }}:</span>
                                    <img
                                        src="../../assets/img/magazines/3/1.png"
                                        alt="Color image"
                                    />
                                </div>
                            </div>
                        </div>

                        <div class="checkout__order__item__box">
                            <div class="checkout__order__item--header">
                                <img
                                    src="../../assets/img/magazines/3/1.png"
                                    alt="Item image"
                                />
                                <div class="checkout__order__item__description">
                                    <h3>POLO рубашка</h3>
                                    <p class="p-first">
                                        Рубашка с контрастным дизайном
                                    </p>
                                    <p class="p-second">
                                        <span>Размер:</span> XXL - 44
                                    </p>
                                </div>
                            </div>
                            <div class="checkout__order__item--secondary">
                                <div class="checkout__order__item--number">
                                    <span>{{ $t("kol") }}:</span>

                                    <span class="number"> 1 шт</span>
                                </div>
                                <div class="checkout__order__item--price">
                                    <span>
                                        100 000
                                        {{ $t("sum") }}
                                    </span>
                                    <span v-if="''">
                                        100 000
                                        {{ $t("sum") }}
                                    </span>
                                </div>
                                <div class="checkout__order__item--color">
                                    <span>{{ $t("color") }}:</span>
                                    <img
                                        src="../../assets/img/magazines/3/1.png"
                                        alt="Color image"
                                    />
                                </div>
                            </div>
                        </div>

                        <div class="checkout__order__item__box">
                            <div class="checkout__order__item--header">
                                <img
                                    src="../../assets/img/magazines/3/1.png"
                                    alt="Item image"
                                />
                                <div class="checkout__order__item__description">
                                    <h3>POLO рубашка</h3>
                                    <p class="p-first">
                                        Рубашка с контрастным дизайном
                                    </p>
                                    <p class="p-second">
                                        <span>Размер:</span> XXL - 44
                                    </p>
                                </div>
                            </div>
                            <div class="checkout__order__item--secondary">
                                <div class="checkout__order__item--number">
                                    <span>{{ $t("kol") }}:</span>

                                    <span class="number"> 1 шт</span>
                                </div>
                                <div class="checkout__order__item--price">
                                    <span>
                                        100 000
                                        {{ $t("sum") }}
                                    </span>
                                    <span v-if="''">
                                        100 000
                                        {{ $t("sum") }}
                                    </span>
                                </div>
                                <div class="checkout__order__item--color">
                                    <span>{{ $t("color") }}:</span>
                                    <img
                                        src="../../assets/img/magazines/3/1.png"
                                        alt="Color image"
                                    />
                                </div>
                            </div>
                        </div>

                        <div class="checkout__order__item__box">
                            <div class="checkout__order__item--header">
                                <img
                                    src="../../assets/img/magazines/3/1.png"
                                    alt="Item image"
                                />
                                <div class="checkout__order__item__description">
                                    <h3>POLO рубашка</h3>
                                    <p class="p-first">
                                        Рубашка с контрастным дизайном
                                    </p>
                                    <p class="p-second">
                                        <span>Размер:</span> XXL - 44
                                    </p>
                                </div>
                            </div>
                            <div class="checkout__order__item--secondary">
                                <div class="checkout__order__item--number">
                                    <span>{{ $t("kol") }}:</span>

                                    <span class="number"> 1 шт</span>
                                </div>
                                <div class="checkout__order__item--price">
                                    <span>
                                        100 000
                                        {{ $t("sum") }}
                                    </span>
                                    <span v-if="''">
                                        100 000
                                        {{ $t("sum") }}
                                    </span>
                                </div>
                                <div class="checkout__order__item--color">
                                    <span>{{ $t("color") }}:</span>
                                    <img
                                        src="../../assets/img/magazines/3/1.png"
                                        alt="Color image"
                                    />
                                </div>
                            </div>
                        </div>
                    </b-tab>
                    <b-tab title="Доставлено">
                        <div class="checkout__order__item__box">
                            <div class="checkout__order__item--header">
                                <img
                                    src="../../assets/img/magazines/3/1.png"
                                    alt="Item image"
                                />
                                <div class="checkout__order__item__description">
                                    <h3>POLO рубашка</h3>
                                    <p class="p-first">
                                        Рубашка с контрастным дизайном
                                    </p>
                                    <p class="p-second">
                                        <span>Размер:</span> XXL - 44
                                    </p>
                                </div>
                            </div>
                            <div class="checkout__order__item--secondary">
                                <div class="checkout__order__item--number">
                                    <span>{{ $t("kol") }}:</span>

                                    <span class="number"> 1 шт</span>
                                </div>
                                <div class="checkout__order__item--price">
                                    <span>
                                        100 000
                                        {{ $t("sum") }}
                                    </span>
                                    <span v-if="''">
                                        100 000
                                        {{ $t("sum") }}
                                    </span>
                                </div>
                                <div class="checkout__order__item--color">
                                    <span>{{ $t("color") }}:</span>
                                    <img
                                        src="../../assets/img/magazines/3/1.png"
                                        alt="Color image"
                                    />
                                </div>
                            </div>
                        </div>

                        <div class="checkout__order__item__box">
                            <div class="checkout__order__item--header">
                                <img
                                    src="../../assets/img/magazines/3/1.png"
                                    alt="Item image"
                                />
                                <div class="checkout__order__item__description">
                                    <h3>POLO рубашка</h3>
                                    <p class="p-first">
                                        Рубашка с контрастным дизайном
                                    </p>
                                    <p class="p-second">
                                        <span>Размер:</span> XXL - 44
                                    </p>
                                </div>
                            </div>
                            <div class="checkout__order__item--secondary">
                                <div class="checkout__order__item--number">
                                    <span>{{ $t("kol") }}:</span>

                                    <span class="number"> 1 шт</span>
                                </div>
                                <div class="checkout__order__item--price">
                                    <span>
                                        100 000
                                        {{ $t("sum") }}
                                    </span>
                                    <span v-if="''">
                                        100 000
                                        {{ $t("sum") }}
                                    </span>
                                </div>
                                <div class="checkout__order__item--color">
                                    <span>{{ $t("color") }}:</span>
                                    <img
                                        src="../../assets/img/magazines/3/1.png"
                                        alt="Color image"
                                    />
                                </div>
                            </div>
                        </div>

                        <div class="checkout__order__item__box">
                            <div class="checkout__order__item--header">
                                <img
                                    src="../../assets/img/magazines/3/1.png"
                                    alt="Item image"
                                />
                                <div class="checkout__order__item__description">
                                    <h3>POLO рубашка</h3>
                                    <p class="p-first">
                                        Рубашка с контрастным дизайном
                                    </p>
                                    <p class="p-second">
                                        <span>Размер:</span> XXL - 44
                                    </p>
                                </div>
                            </div>
                            <div class="checkout__order__item--secondary">
                                <div class="checkout__order__item--number">
                                    <span>{{ $t("kol") }}:</span>

                                    <span class="number"> 1 шт</span>
                                </div>
                                <div class="checkout__order__item--price">
                                    <span>
                                        100 000
                                        {{ $t("sum") }}
                                    </span>
                                    <span v-if="''">
                                        100 000
                                        {{ $t("sum") }}
                                    </span>
                                </div>
                                <div class="checkout__order__item--color">
                                    <span>{{ $t("color") }}:</span>
                                    <img
                                        src="../../assets/img/magazines/3/1.png"
                                        alt="Color image"
                                    />
                                </div>
                            </div>
                        </div>

                        <div class="checkout__order__item__box">
                            <div class="checkout__order__item--header">
                                <img
                                    src="../../assets/img/magazines/3/1.png"
                                    alt="Item image"
                                />
                                <div class="checkout__order__item__description">
                                    <h3>POLO рубашка</h3>
                                    <p class="p-first">
                                        Рубашка с контрастным дизайном
                                    </p>
                                    <p class="p-second">
                                        <span>Размер:</span> XXL - 44
                                    </p>
                                </div>
                            </div>
                            <div class="checkout__order__item--secondary">
                                <div class="checkout__order__item--number">
                                    <span>{{ $t("kol") }}:</span>

                                    <span class="number"> 1 шт</span>
                                </div>
                                <div class="checkout__order__item--price">
                                    <span>
                                        100 000
                                        {{ $t("sum") }}
                                    </span>
                                    <span v-if="''">
                                        100 000
                                        {{ $t("sum") }}
                                    </span>
                                </div>
                                <div class="checkout__order__item--color">
                                    <span>{{ $t("color") }}:</span>
                                    <img
                                        src="../../assets/img/magazines/3/1.png"
                                        alt="Color image"
                                    />
                                </div>
                            </div>
                        </div>

                        <div class="checkout__order__item__box">
                            <div class="checkout__order__item--header">
                                <img
                                    src="../../assets/img/magazines/3/1.png"
                                    alt="Item image"
                                />
                                <div class="checkout__order__item__description">
                                    <h3>POLO рубашка</h3>
                                    <p class="p-first">
                                        Рубашка с контрастным дизайном
                                    </p>
                                    <p class="p-second">
                                        <span>Размер:</span> XXL - 44
                                    </p>
                                </div>
                            </div>
                            <div class="checkout__order__item--secondary">
                                <div class="checkout__order__item--number">
                                    <span>{{ $t("kol") }}:</span>

                                    <span class="number"> 1 шт</span>
                                </div>
                                <div class="checkout__order__item--price">
                                    <span>
                                        100 000
                                        {{ $t("sum") }}
                                    </span>
                                    <span v-if="''">
                                        100 000
                                        {{ $t("sum") }}
                                    </span>
                                </div>
                                <div class="checkout__order__item--color">
                                    <span>{{ $t("color") }}:</span>
                                    <img
                                        src="../../assets/img/magazines/3/1.png"
                                        alt="Color image"
                                    />
                                </div>
                            </div>
                        </div>

                        <div class="checkout__order__item__box">
                            <div class="checkout__order__item--header">
                                <img
                                    src="../../assets/img/magazines/3/1.png"
                                    alt="Item image"
                                />
                                <div class="checkout__order__item__description">
                                    <h3>POLO рубашка</h3>
                                    <p class="p-first">
                                        Рубашка с контрастным дизайном
                                    </p>
                                    <p class="p-second">
                                        <span>Размер:</span> XXL - 44
                                    </p>
                                </div>
                            </div>
                            <div class="checkout__order__item--secondary">
                                <div class="checkout__order__item--number">
                                    <span>{{ $t("kol") }}:</span>

                                    <span class="number"> 1 шт</span>
                                </div>
                                <div class="checkout__order__item--price">
                                    <span>
                                        100 000
                                        {{ $t("sum") }}
                                    </span>
                                    <span v-if="''">
                                        100 000
                                        {{ $t("sum") }}
                                    </span>
                                </div>
                                <div class="checkout__order__item--color">
                                    <span>{{ $t("color") }}:</span>
                                    <img
                                        src="../../assets/img/magazines/3/1.png"
                                        alt="Color image"
                                    />
                                </div>
                            </div>
                        </div>

                        <div class="checkout__order__item__box">
                            <div class="checkout__order__item--header">
                                <img
                                    src="../../assets/img/magazines/3/1.png"
                                    alt="Item image"
                                />
                                <div class="checkout__order__item__description">
                                    <h3>POLO рубашка</h3>
                                    <p class="p-first">
                                        Рубашка с контрастным дизайном
                                    </p>
                                    <p class="p-second">
                                        <span>Размер:</span> XXL - 44
                                    </p>
                                </div>
                            </div>
                            <div class="checkout__order__item--secondary">
                                <div class="checkout__order__item--number">
                                    <span>{{ $t("kol") }}:</span>

                                    <span class="number"> 1 шт</span>
                                </div>
                                <div class="checkout__order__item--price">
                                    <span>
                                        100 000
                                        {{ $t("sum") }}
                                    </span>
                                    <span v-if="''">
                                        100 000
                                        {{ $t("sum") }}
                                    </span>
                                </div>
                                <div class="checkout__order__item--color">
                                    <span>{{ $t("color") }}:</span>
                                    <img
                                        src="../../assets/img/magazines/3/1.png"
                                        alt="Color image"
                                    />
                                </div>
                            </div>
                        </div>

                        <div class="checkout__order__item__box">
                            <div class="checkout__order__item--header">
                                <img
                                    src="../../assets/img/magazines/3/1.png"
                                    alt="Item image"
                                />
                                <div class="checkout__order__item__description">
                                    <h3>POLO рубашка</h3>
                                    <p class="p-first">
                                        Рубашка с контрастным дизайном
                                    </p>
                                    <p class="p-second">
                                        <span>Размер:</span> XXL - 44
                                    </p>
                                </div>
                            </div>
                            <div class="checkout__order__item--secondary">
                                <div class="checkout__order__item--number">
                                    <span>{{ $t("kol") }}:</span>

                                    <span class="number"> 1 шт</span>
                                </div>
                                <div class="checkout__order__item--price">
                                    <span>
                                        100 000
                                        {{ $t("sum") }}
                                    </span>
                                    <span v-if="''">
                                        100 000
                                        {{ $t("sum") }}
                                    </span>
                                </div>
                                <div class="checkout__order__item--color">
                                    <span>{{ $t("color") }}:</span>
                                    <img
                                        src="../../assets/img/magazines/3/1.png"
                                        alt="Color image"
                                    />
                                </div>
                            </div>
                        </div>
                    </b-tab>
                </b-tabs>
            </div>
        </section>
    </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.main-section {
    min-height: 100vh;

    .profile-section {
        padding: 0;
        margin: 0;

        .profile-box {
            width: 100%;
            padding: 10px;
            margin: 0;
            background-color: #f7931f;
        }

        .tab-box {
            padding: 40px;
        }
    }
}

.checkout__order__item__box {
    margin: 20px 15px 0;
    padding: 20px;
    background: #ffffff;
    border-radius: 5px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

    &:last-child {
        margin-bottom: 70px;
        border-bottom: 1px solid #dddddd;
    }

    font-family: Roboto, sans-serif;
    display: flex;
    justify-content: space-between;

    .checkout__order__item--header {
        flex-basis: 340px;
        flex-grow: 0;
        display: flex;
        margin-right: 100px;

        img {
            margin-right: 18px;
            max-height: 100%;
            border-radius: 3px;
            height: 120px;
            widows: 120px;
        }

        .checkout__order__item__description {
            h3 {
                font-family: Roboto;
                font-weight: 700;
                font-size: 18px;
                line-height: 100%;
                /* or 18px */
                overflow: hidden;
                height: 2.8em;

                text-transform: uppercase;

                color: #000000;
            }

            .p-first {
                font-family: Roboto;
                font-weight: 500;
                font-size: 14px;
                line-height: 100%;
                /* or 14px */
                height: 1em;
                overflow: hidden;

                color: #000000;

                margin-bottom: 40px;
            }

            .p-second {
                font-family: Roboto, sans-serif;
                font-size: 16px;
                line-height: 100%;
                height: 1em;
                overflow: hidden;
                /* or 16px */
                font-weight: 500;
                color: #000000;

                display: flex;
                align-items: center;

                span {
                    margin-right: 5px;
                    font-family: Roboto, sans-serif;
                    font-weight: 400;
                    font-size: 14px;
                    line-height: 100%;
                    /* identical to box height, or 14px */

                    /* dark blue */

                    color: #023047;
                }
            }
        }
    }

    .checkout__order__item--secondary {
        flex: 2;
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        align-items: center;

        .checkout__order__item--number {
            height: 40px;
            display: flex;
            align-items: center;
            margin-bottom: 30px;
            font-size: 18px;
            font-weight: 700;
            span {
                font-family: Roboto, sans-serif;
                font-weight: 400;
                font-size: 16px;
                line-height: 100%;
                /* identical to box height, or 16px */

                /* dark blue */

                color: #023047;

                margin-right: 10px;
            }

            span.number {
                font-size: 18px;
                font-weight: 700;
            }
        }

        .checkout__order__item--price {
            flex-basis: 500px;
            display: flex;
            justify-content: flex-end;

            margin-bottom: 30px;
            span {
                font-family: Roboto, sans-serif;
                font-weight: 600;
                font-size: 28px;
                line-height: 100%;
                /* or 28px */
                /* asosiy */
                color: #f7931e;
            }
        }

        .checkout__order__item--color {
            flex-grow: 0;
            span {
                font-family: Roboto, sans-serif;
                font-weight: 400;
                font-size: 16px;
                line-height: 100%;
                /* identical to box height, or 16px */
                /* dark blue */
                color: #023047;
                margin-right: 5px;
            }

            img {
                border-radius: 3px;
                width: 50px;
                height: 50px;
            }
        }
    }
}

.checkout__order__price {
    display: flex;
    justify-content: space-between;

    margin-top: 30px;
    padding-top: 30px;
    border-top: 1px solid #dddddd;
    .checkout__order__price--total {
        span {
            font-family: Roboto, sans-serif;
            font-weight: 500;
            font-size: 28px;
            line-height: 100%;
            color: #000000;
        }

        .all__price {
            margin-left: 10px;
            font-weight: 900;
            color: #f7931e;
        }
    }
}
</style>

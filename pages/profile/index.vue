<template>
    <section class="main-section">
        <section class="profile-section ">
            <div class="profile-box">
                <div class="profile">
                    <img
                        id="profile-photo"
                        src="../../assets/img/magazines/9/2.png"
                        alt="Profile photo"
                    />
                    <h3 id="profile-title">Javohir Akramjonov</h3>
                    <h5 id="profile-id">ID 12345678</h5>
                </div>
                <nuxt-link to="/profile/edit" class="edit-link">
                    Редактировать профиль
                </nuxt-link>
            </div>

            <div class="tab-box">
                <b-tabs
                    content-class="mt-3"
                    active-nav-item-class="font-weight-bold "
                    active-tab-class="font-weight-bold text-success"
                    align="center"
                    justified="true"
                >
                    <b-tab title="КУПЛЕНО" active lazy>
                        <template #title>
                            <div id="svg-box">
                                <svg
                                    xml:space="preserve"
                                    viewBox="0 0 100 100"
                                    y="0"
                                    x="0"
                                    xmlns="http://www.w3.org/2000/svg"
                                    id="圖層_1"
                                    version="1.1"
                                    width="200px"
                                    height="200px"
                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                    style="width:100%;height:100%;background-size:initial;background-repeat-y:initial;background-repeat-x:initial;background-position-y:initial;background-position-x:initial;background-origin:initial;background-color:initial;background-clip:initial;background-attachment:initial;animation-play-state:paused"
                                >
                                    <g
                                        class="ldl-scale"
                                        style="transform-origin:50% 50%;transform:rotate(0deg) scale(0.8, 0.8);animation-play-state:paused"
                                    >
                                        <path
                                            fill="#ebb885"
                                            d="M90.12 51.632L59.332 69.407 47.461 48.845 78.248 31.07a4.727 4.727 0 0 1 6.457 1.73l7.144 12.374a4.727 4.727 0 0 1-1.729 6.458z"
                                            style="fill:rgb(40, 41, 47);animation-play-state:paused"
                                        ></path>
                                        <path
                                            fill="#ebb885"
                                            d="M67.368 33.357L45.731 45.849l-9.508-16.468a4.728 4.728 0 0 1 1.73-6.458l17.543-10.129a4.727 4.727 0 0 1 6.457 1.73L69.098 26.9a4.726 4.726 0 0 1-1.73 6.457z"
                                            style="fill:rgb(40, 41, 47);animation-play-state:paused"
                                        ></path>
                                        <g style="animation-play-state:paused">
                                            <path
                                                fill="#666"
                                                d="M58.985 78.648c-.67 0-1.343-.088-2.007-.266a7.651 7.651 0 0 1-4.678-3.59L29.401 35.13l-4.395-.72a2.974 2.974 0 0 1 .962-5.868l7.174 1.177L57.447 71.82c.235.407.615.699 1.069.82.455.123.929.061 1.335-.175l28.073-16.208a2.972 2.972 0 1 1 2.972 5.148L62.824 77.612a7.65 7.65 0 0 1-3.839 1.036z"
                                                style="fill:rgb(255, 255, 255);animation-play-state:paused"
                                            ></path>
                                        </g>
                                        <g style="animation-play-state:paused">
                                            <path
                                                fill="#333"
                                                d="M21.955 36.791c-.319 0-.643-.026-.969-.079l-8.503-1.394a5.945 5.945 0 0 1 1.923-11.733l8.503 1.394a5.945 5.945 0 0 1-.954 11.812z"
                                                style="fill:rgb(249, 174, 92);animation-play-state:paused"
                                            ></path>
                                        </g>
                                        <circle
                                            r="10.799"
                                            stroke-miterlimit="10"
                                            stroke-linecap="round"
                                            stroke-width="6"
                                            stroke="#333"
                                            fill="#fff"
                                            cy="77.054"
                                            cx="57.247"
                                            transform="rotate(-30 57.243 77.056)"
                                            style="stroke:rgb(249, 174, 92);fill:rgb(10, 10, 10);animation-play-state:paused"
                                        ></circle>
                                        <metadata
                                            xmlns:d="https://loading.io/stock/"
                                            style="animation-play-state:paused"
                                        >
                                            <d:name
                                                style="animation-play-state:paused"
                                                >stroller</d:name
                                            >
                                            <d:tags
                                                style="animation-play-state:paused"
                                                >cart,goods,shipping,cargo,commodity,stroller,business</d:tags
                                            >
                                            <d:license
                                                style="animation-play-state:paused"
                                                >pro</d:license
                                            >
                                            <d:slug
                                                style="animation-play-state:paused"
                                                >tuaqx9</d:slug
                                            >
                                        </metadata>
                                    </g>
                                    <!-- generated by https://loading.io/ -->
                                </svg>
                            </div>
                            <h3 id="svg-title">КУПЛЕНО</h3>
                        </template>
                        <div class="container">
                            <div class="checkout__order__item__box">
                                <div class="checkout__order__item--header">
                                    <img
                                        src="../../assets/img/magazines/3/1.png"
                                        alt="Item image"
                                    />
                                    <div
                                        class="checkout__order__item__description"
                                    >
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
                                    <div
                                        class="checkout__order__item__description"
                                    >
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
                                    <div
                                        class="checkout__order__item__description"
                                    >
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
                        </div>
                    </b-tab>

                    <b-tab title="В ДОРОГЕ" lazy>
                        <template #title>
                            <div id="svg-box">
                                <svg
                                    xml:space="preserve"
                                    viewBox="0 0 100 100"
                                    y="0"
                                    x="0"
                                    xmlns="http://www.w3.org/2000/svg"
                                    id="圖層_1"
                                    version="1.1"
                                    width="200px"
                                    height="200px"
                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                    style="width:100%;height:100%;background-size:initial;background-repeat-y:initial;background-repeat-x:initial;background-position-y:initial;background-position-x:initial;background-origin:initial;background-color:initial;background-clip:initial;background-attachment:initial;animation-play-state:paused"
                                >
                                    <g
                                        class="ldl-scale"
                                        style="transform-origin:50% 50%;transform:rotate(0deg) scale(0.8, 0.8);animation-play-state:paused"
                                    >
                                        <path
                                            fill="#f5e6c8"
                                            d="M15 64.3h40.5c3.1 0 5.6-2.5 5.6-5.6V31c0-3.1-2.5-5.6-5.6-5.6H15c-3.1 0-5.6 2.5-5.6 5.6v27.7c0 3.1 2.5 5.6 5.6 5.6z"
                                            style="fill:rgb(249, 174, 92);animation-play-state:paused"
                                        ></path>
                                        <path
                                            fill="#66503a"
                                            d="M51.5 58.5c-.5 0-1-.4-1-1V24.6c0-.5.4-1 1-1 .5 0 1 .4 1 1v32.9c0 .6-.4 1-1 1z"
                                            style="fill:rgb(249, 174, 92);animation-play-state:paused"
                                        ></path>
                                        <path
                                            fill="#66503a"
                                            d="M40.6 58.5c-.5 0-1-.4-1-1V24.6c0-.5.4-1 1-1 .5 0 1 .4 1 1v32.9c0 .6-.4 1-1 1z"
                                            style="fill:rgb(249, 174, 92);animation-play-state:paused"
                                        ></path>
                                        <path
                                            fill="#66503a"
                                            d="M29.7 58.5c-.5 0-1-.4-1-1V24.6c0-.5.4-1 1-1 .5 0 1 .4 1 1v32.9c0 .6-.4 1-1 1z"
                                            style="fill:rgb(249, 174, 92);animation-play-state:paused"
                                        ></path>
                                        <path
                                            fill="#66503a"
                                            d="M18.8 58.5c-.5 0-1-.4-1-1V24.6c0-.5.4-1 1-1 .5 0 1 .4 1 1v32.9c0 .6-.4 1-1 1z"
                                            style="fill:rgb(249, 174, 92);animation-play-state:paused"
                                        ></path>
                                        <path
                                            d="M7.9 57.1h56.7v8H7.9z"
                                            fill="#4d85ab"
                                            style="fill:rgb(40, 41, 47);animation-play-state:paused"
                                        ></path>
                                        <path
                                            fill="#e15b64"
                                            d="M11.9 59.2h-4c-.2 0-.4.2-.4.4V63c0 .2.2.4.4.4H12c1 0 1.8-.8 1.8-1.8v-.5c0-1-.9-1.9-1.9-1.9z"
                                            style="fill:rgb(228, 129, 47);animation-play-state:paused"
                                        ></path>
                                        <path
                                            fill="#77a4bd"
                                            d="M88.9 69.5H66.8c-1.6 0-2.8-1.3-2.8-2.8l.1-31c0-1.6 1.3-2.8 2.8-2.8h13c1 0 2 .6 2.5 1.5l8.9 16.2c.2.4.3.9.3 1.4v14.8c.1 1.5-1.2 2.7-2.7 2.7z"
                                            style="fill:rgb(10, 10, 10);animation-play-state:paused"
                                        ></path>
                                        <path
                                            fill="#666"
                                            d="M73.5 65.1H9.7s-.3 0-.3.4c0 2.4 1.3 4 3.3 4h60.8c1 0 1.7-1 1.7-2.2 0-1.2-.8-2.2-1.7-2.2z"
                                            style="fill:rgb(255, 255, 255);animation-play-state:paused"
                                        ></path>
                                        <g style="animation-play-state:paused">
                                            <circle
                                                fill="#fff"
                                                r="7.4"
                                                cy="67.4"
                                                cx="25.6"
                                                style="fill:rgb(10, 10, 10);animation-play-state:paused"
                                            ></circle>
                                            <path
                                                fill="#333"
                                                d="M25.6 61.5c3.3 0 5.9 2.7 5.9 5.9s-2.7 5.9-5.9 5.9-5.9-2.7-5.9-5.9 2.7-5.9 5.9-5.9m0-3c-4.9 0-8.9 4-8.9 8.9s4 8.9 8.9 8.9 8.9-4 8.9-8.9-3.9-8.9-8.9-8.9z"
                                                style="fill:rgb(228, 129, 47);animation-play-state:paused"
                                            ></path>
                                        </g>
                                        <g style="animation-play-state:paused">
                                            <circle
                                                fill="#e6e6e6"
                                                r="4"
                                                cy="67.4"
                                                cx="25.6"
                                                style="fill:rgb(40, 41, 47);animation-play-state:paused"
                                            ></circle>
                                        </g>
                                        <g style="animation-play-state:paused">
                                            <circle
                                                fill="#fff"
                                                r="7.4"
                                                cy="67.4"
                                                cx="72.9"
                                                style="fill:rgb(10, 10, 10);animation-play-state:paused"
                                            ></circle>
                                            <path
                                                fill="#333"
                                                d="M72.9 61.5c3.3 0 5.9 2.7 5.9 5.9s-2.7 5.9-5.9 5.9-5.9-2.6-5.9-5.9 2.6-5.9 5.9-5.9m0-3c-4.9 0-8.9 4-8.9 8.9s4 8.9 8.9 8.9 8.9-4 8.9-8.9-4-8.9-8.9-8.9z"
                                                style="fill:rgb(228, 129, 47);animation-play-state:paused"
                                            ></path>
                                        </g>
                                        <g style="animation-play-state:paused">
                                            <circle
                                                fill="#e6e6e6"
                                                r="4"
                                                cy="67.4"
                                                cx="72.9"
                                                style="fill:rgb(40, 41, 47);animation-play-state:paused"
                                            ></circle>
                                        </g>
                                        <path
                                            fill="#e0e0e0"
                                            d="M86.9 60.1h4.4c.6 0 1.1-.5 1.1-1.1v-1.9c0-.6-.5-1.1-1.1-1.1H87c-.3 0-.5.2-.5.5v3.2c0 .2.2.4.4.4z"
                                            style="fill:rgb(255, 255, 255);animation-play-state:paused"
                                        ></path>
                                        <path
                                            fill="#333"
                                            d="M80.8 36.6c-.4-.7-1.1-1.2-2-1.2H68.5c-1.2 0-2.2 1-2.2 2.3l-.1 13.5h22.7c0-.2-.1-.4-.2-.6l-7.9-14z"
                                            style="fill:rgb(228, 129, 47);animation-play-state:paused"
                                        ></path>
                                        <path
                                            fill="#4d85ab"
                                            d="M71.8 55.5h-3.5c-.5 0-.9-.4-.9-.9s.4-.9.9-.9h3.5c.5 0 .9.4.9.9s-.4.9-.9.9z"
                                            style="fill:rgb(40, 41, 47);animation-play-state:paused"
                                        ></path>
                                        <metadata
                                            xmlns:d="https://loading.io/stock/"
                                            style="animation-play-state:paused"
                                        >
                                            <d:name
                                                style="animation-play-state:paused"
                                                >truck</d:name
                                            >
                                            <d:tags
                                                style="animation-play-state:paused"
                                                >van,cargo,cab,car,ship,loader,wagon,vehicle,good,express,settle,truck,transportation</d:tags
                                            >
                                            <d:license
                                                style="animation-play-state:paused"
                                                >by</d:license
                                            >
                                            <d:slug
                                                style="animation-play-state:paused"
                                                >doszq1</d:slug
                                            >
                                        </metadata>
                                    </g>
                                    <!-- generated by https://loading.io/ -->
                                </svg>
                            </div>
                            <h3 id="svg-title">В ДОРОГЕ</h3>
                        </template>

                        <div class="container">
                            <div class="checkout__order__item__box">
                                <div class="checkout__order__item--header">
                                    <img
                                        src="../../assets/img/magazines/3/1.png"
                                        alt="Item image"
                                    />
                                    <div
                                        class="checkout__order__item__description"
                                    >
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
                                    <div
                                        class="checkout__order__item__description"
                                    >
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
                                    <div
                                        class="checkout__order__item__description"
                                    >
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
                                    <div
                                        class="checkout__order__item__description"
                                    >
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
                        </div>
                    </b-tab>

                    <b-tab title="ДОСТАВЛЕНО" lazy>
                        <template #title>
                            <div id="svg-box">
                                <svg
                                    xml:space="preserve"
                                    viewBox="0 0 100 100"
                                    y="0"
                                    x="0"
                                    xmlns="http://www.w3.org/2000/svg"
                                    id="Layer_1"
                                    version="1.1"
                                    width="200px"
                                    height="200px"
                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                    style="width:100%;height:100%;background-size:initial;background-repeat-y:initial;background-repeat-x:initial;background-position-y:initial;background-position-x:initial;background-origin:initial;background-color:initial;background-clip:initial;background-attachment:initial;animation-play-state:paused"
                                >
                                    <g
                                        class="ldl-scale"
                                        style="transform-origin:50% 50%;transform:rotate(0deg) scale(0.8, 0.8);animation-play-state:paused"
                                    >
                                        <path
                                            d="M43.331 88.236L10 74.862V25.138l33.331 13.374z"
                                            stroke-miterlimit="10"
                                            stroke-linejoin="round"
                                            stroke-width="3.5"
                                            stroke="#323232"
                                            fill="#f7b26a"
                                            style="stroke:rgb(50, 50, 50);fill:rgb(247, 178, 106);animation-play-state:paused"
                                        ></path>
                                        <path
                                            d="M29.981 74.88l-12.437-4.991"
                                            stroke-miterlimit="10"
                                            stroke-linecap="round"
                                            stroke-width="3.5"
                                            stroke="#323232"
                                            fill="#f7b26a"
                                            stroke-linejoin="round"
                                            style="stroke:rgb(50, 50, 50);fill:rgb(247, 178, 106);animation-play-state:paused"
                                        ></path>
                                        <path
                                            d="M25.874 66.232l-8.33-3.343"
                                            stroke-miterlimit="10"
                                            stroke-linecap="round"
                                            stroke-width="3.5"
                                            stroke="#323232"
                                            fill="#f7b26a"
                                            stroke-linejoin="round"
                                            style="stroke:rgb(50, 50, 50);fill:rgb(247, 178, 106);animation-play-state:paused"
                                        ></path>
                                        <path
                                            d="M43.331 88.236L90 74.862V25.138L43.331 38.512z"
                                            stroke-miterlimit="10"
                                            stroke-linejoin="round"
                                            stroke-width="3.5"
                                            stroke="#323232"
                                            fill="#f7b26a"
                                            style="stroke:rgb(50, 50, 50);fill:rgb(247, 178, 106);animation-play-state:paused"
                                        ></path>
                                        <path
                                            d="M90 25.138L56.669 11.764 10 25.138h0l33.331 13.374L90 25.138z"
                                            stroke-miterlimit="10"
                                            stroke-linejoin="round"
                                            stroke-width="3.5"
                                            stroke="#323232"
                                            fill="#f7b26a"
                                            style="stroke:rgb(50, 50, 50);fill:rgb(247, 178, 106);animation-play-state:paused"
                                        ></path>
                                        <path
                                            d="M40.681 16.345l-13.185 3.779 33.331 13.374 13.185-3.778z"
                                            stroke-linejoin="round"
                                            stroke="#323232"
                                            fill="#f4e6c8"
                                            stroke-miterlimit="10"
                                            stroke-width="3.5"
                                            style="stroke:rgb(50, 50, 50);fill:rgb(244, 230, 200);animation-play-state:paused"
                                        ></path>
                                        <path
                                            d="M74.012 42.065l-13.185 3.778V33.498l13.185-3.778z"
                                            stroke-linejoin="round"
                                            stroke="#323232"
                                            fill="#f4e6c8"
                                            stroke-miterlimit="10"
                                            stroke-width="3.5"
                                            style="stroke:rgb(50, 50, 50);fill:rgb(244, 230, 200);animation-play-state:paused"
                                        ></path>
                                        <path
                                            d="M54.984 84.897L90 74.862V25.138l-15.773 4.52z"
                                            stroke-linejoin="round"
                                            stroke="#000"
                                            opacity=".2"
                                            stroke-miterlimit="10"
                                            stroke-width="3.5"
                                            style="animation-play-state:paused"
                                        ></path>
                                        <path
                                            d="M74.137 29.684L90 25.138h0l-15.863-6.365z"
                                            stroke-linejoin="round"
                                            stroke="#000"
                                            opacity=".2"
                                            stroke-miterlimit="10"
                                            stroke-width="3.5"
                                            style="animation-play-state:paused"
                                        ></path>
                                        <metadata
                                            xmlns:d="https://loading.io/stock/"
                                            style="animation-play-state:paused"
                                        >
                                            <d:name
                                                style="animation-play-state:paused"
                                                >box</d:name
                                            >

                                            <d:tags
                                                style="animation-play-state:paused"
                                                >box,carton,carboard
                                                boxes,container,package,payload,express,delivery,mail,goods</d:tags
                                            >

                                            <d:license
                                                style="animation-play-state:paused"
                                                >by</d:license
                                            >

                                            <d:slug
                                                style="animation-play-state:paused"
                                                >gkonp9</d:slug
                                            >
                                        </metadata>
                                    </g>
                                    <!-- generated by https://loading.io/ -->
                                </svg>
                            </div>
                            <h3 id="svg-title">ДОСТАВЛЕНО</h3>
                        </template>
                        <div class="container">
                            <div class="checkout__order__item__box">
                                <div class="checkout__order__item--header">
                                    <img
                                        src="../../assets/img/magazines/3/1.png"
                                        alt="Item image"
                                    />
                                    <div
                                        class="checkout__order__item__description"
                                    >
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
                                    <div
                                        class="checkout__order__item__description"
                                    >
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
                                    <div
                                        class="checkout__order__item__description"
                                    >
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
                                    <div
                                        class="checkout__order__item__description"
                                    >
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
                                    <div
                                        class="checkout__order__item__description"
                                    >
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
                                    <div
                                        class="checkout__order__item__description"
                                    >
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
                                    <div
                                        class="checkout__order__item__description"
                                    >
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
                                    <div
                                        class="checkout__order__item__description"
                                    >
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
        .profile-box {
            width: 100%;
            padding: 25px 10px 10px;
            margin: 0;

            background-color: #f7931f;
            position: relative;

            .profile {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;

                #profile-photo {
                    margin: 10px auto;
                    height: 100px;
                    width: 100px;
                    border-radius: 50%;
                    object-fit: cover;
                }

                #profile-title {
                    color: white;
                    font-weight: bold;
                }
                #profile-id {
                    color: white;
                }
            }
            .edit-link {
                padding: 5px 6px;
                background-color: #fcf6f6;
                color: #000000;
                font-size: 16px;
                border-radius: 5px;

                position: absolute;
                top: 7%;
                right: 2%;
            }
        }

        .tab-box {
            padding: 60px 10px 10px;

            .nav-tabs {
                display: flex;
                justify-content: space-around;
            }

            #svg-box {
                margin: 10px auto;
                height: 90px;
                width: 90px;
                border-radius: 50%;
                background-color: #f7931f;
            }

            #svg-title {
                color: #f7931f;
            }
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

@media screen and (max-width: 1200px) {
    .checkout__order__item__box {
        .checkout__order__item--secondary {
            .checkout__order__item--price {
                flex-basis: 70%;
            }
        }
    }
}

@media screen and (max-width: 1045px) {
    .checkout__order__item__box {
        .checkout__order__item--header {
            flex-basis: 300px;
        }
        .checkout__order__item--secondary {
            align-items: baseline;
            .checkout__order__item--number {
                flex-basis: 100%;
            }
            .checkout__order__item--price {
                flex-basis: auto;
                order: 1;
            }
        }
    }
}

@media screen and (max-width: 777px) {
    .main-section {
        .profile-section {
            .profile-box {
                padding: 10px 5px 5px;
            }

            .tab-box {
                padding: 20px 5px 5px;

                #svg-box {
                    height: 80px;
                    width: 80px;
                }

                #svg-title {
                    font-size: 20px;
                }
            }
        }
    }

    .checkout__order__item__box {
        .checkout__order__item--header {
            margin-right: 15px;
        }
    }
}

@media screen and (max-width: 677px) {
    .main-section {
        .profile-section {
            .profile-box {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                .edit-link {
                    font-size: 14px;
                    position: relative;
                }
            }
        }
    }

    .checkout__order__item__box {
        flex-direction: column;
        .checkout__order__item--header {
            flex-basis: auto;
            margin-right: 0;
            margin-bottom: 30px;
        }
    }
}

@media only screen and (max-width: 440px) {
    .main-section {
        .profile-section {
            .profile-box {
                .edit-link {
                    font-size: 10px;
                }
            }
            .profile {
                #profile-photo {
                    height: 80px;
                    width: 80px;
                }

                #profile-title {
                    font-size: 20px;
                }
                #profile-id {
                    font-size: 15px;
                }
            }

            .tab-box {
                #svg-box {
                    height: 70px;
                    width: 70px;
                }

                #svg-title {
                    font-size: 15px;
                }
            }
        }
    }
}

@media screen and (max-width: 400px) {
    .main-section {
        .tab-box {
            #svg-box {
                height: 60px;
                width: 60px;
            }

            #svg-title {
                font-size: 14px;
            }
        }
    }

    .checkout__order__item__box {
        flex-direction: column;
        padding: 13px 17px 18px;
        margin: 20px 0 0;
        .checkout__order__item--header {
            flex-basis: auto;
            margin-right: 0;
            margin-bottom: 0;

            img {
                height: 95px;
                width: 95px;
            }

            .checkout__order__item__description {
                h3 {
                    font-size: 16px;
                }

                .p-first {
                    margin-bottom: 3px;
                }
                .p-second {
                    font-size: 14px;
                }
            }
        }

        .checkout__order__item--secondary {
            .checkout__order__item--number {
                margin-bottom: 0;
                span,
                span.number {
                    font-size: 14px;
                }
            }
            .checkout__order__item--price {
                margin-bottom: 0;
                span {
                    font-size: 18px;
                }
            }
            .checkout__order__item--color {
                span {
                    font-size: 14px;
                }

                img {
                    width: 40px;
                    height: 40px;
                }
            }
        }
    }

    .checkout__order__price {
        .checkout__order__price--total {
            flex-basis: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;

            span {
                font-size: 16px;
            }

            .all__price {
                font-size: 28px;
            }
        }
    }
}

@media screen and (max-width: 380px) {
    .main-section {
        .profile-section {
            .tab-box {
                #svg-title {
                    font-size: 13px;
                }
            }
        }
    }
}

@media screen and (max-width: 363px) {
    .main-section {
        .profile-section {
            .tab-box {
                #svg-box {
                    width: 55px;
                    height: 55px;
                }
                #svg-title {
                    font-size: 12px;
                }
            }
        }
    }
}

@media screen and (max-width: 344px) {
    .main-section {
        .profile-section {
            .tab-box {
                #svg-box {
                    width: 50px;
                    height: 50px;
                }
                #svg-title {
                    font-size: 11px;
                }
            }
        }
    }
}

@media screen and (max-width: 325px) {
    .main-section {
        .profile-section {
            .tab-box {
                #svg-box {
                    width: 45px;
                    height: 45px;
                }
                #svg-title {
                    font-size: 10px;
                }
            }
        }
    }
}
</style>

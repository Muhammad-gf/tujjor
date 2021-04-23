<template>
        <section>
                <div class="brands">
                        <section class="container popular__container  ">
                                <div class="popular__heading">
                                        Бренды
                                </div>
                        </section>

                        <div class="brands__box">
                                <img
                                        src="../assets/img/brands/lg.png"
                                        alt="Brand"
                                />
                                <img
                                        src="../assets/img/brands/nike.png"
                                        alt="Brand"
                                />
                                <img
                                        src="../assets/img/brands/vector.png"
                                        alt="Brand"
                                />
                                <img
                                        src="../assets/img/brands/penti.png"
                                        alt="Brand"
                                />
                                <img
                                        src="../assets/img/brands/xiaomi.png"
                                        alt="Brand"
                                />
                                <img
                                        src="../assets/img/brands/lg.png"
                                        alt="Brand"
                                />
                                <img
                                        src="../assets/img/brands/zara.png"
                                        alt="Brand"
                                />
                                <img
                                        src="../assets/img/brands/xiaomi.png"
                                        alt="Brand"
                                />
                                <img
                                        src="../assets/img/brands/vector.png"
                                        alt="Brand"
                                />
                                <img
                                        src="../assets/img/brands/zara.png"
                                        alt="Brand"
                                />
                        </div>
                </div>
        </section>
</template>

<script>
export default {};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap");
</style>
<style lang="scss">
.brands {
        &__box {
                width: 100%;
                height: 95px;

                overflow: hidden;
                display: flex;
                align-items: center;

                img {
                        margin: 0 60px;
                }
        }
}

@media only screen and (max-width: 764px) {
        .brands {
                .popular__heading {
                        margin-bottom: 0;
                }
                &__box {
                        width: 100%;
                        height: 53px;

                        overflow: hidden;
                        display: flex;
                        align-items: center;

                        img {
                                transform: scale(0.8);
                                margin: 0 15px;
                        }
                }
        }
}
</style>

<template>
    <section class="container banner__container">
        <div class="banner__box">
            <div class="banner__box--large--img">
                <img
                    src="../assets/img/banner/banner-large.png"
                    alt="Banner photo"
                />
            </div>
            <div class="banner__box--small--img">
                <img src="../assets/img/banner/banner.png" alt="Banner photo" />
            </div>
        </div>
    </section>
</template>

<script>
export default {};
</script>

<style lang="scss">
.container {
    .banner__box {
        margin-top: 25px;
        width: 100%;
        // height: 500px;

        display: flex;
        justify-content: center;
        align-items: stretch;
        &--large--img {
            height: 403px;
            width: 895px;

            border-radius: 5px;
            overflow: hidden;

            img {
                width: 100%;
                height: 100%;
            }
        }
        &--small--img {
            margin-left: 20px;
            width: 286px;

            border-radius: 5px;
            overflow: hidden;

            img {
                height: 100%;
                width: 100%;
            }
        }
    }
}

@media only screen and (max-width: 1000px) {
    .container {
        .banner__box {
            &--large--img {
                height: auto;
                width: 100%;
            }
            &--small--img {
                display: none;
            }
        }
    }
}

@media only screen and (max-width: 400px) {
    .banner__container {
        padding: 0;
        margin: 0;
        .banner__box {
            margin-top: 20px;
            &--large--img {
                border-radius: 0;
            }
        }
    }
}
</style>

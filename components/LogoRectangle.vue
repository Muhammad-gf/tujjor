<template>
    <section class="logo__rectangle">
        <div class="logo__rectangle--rectangle">
            <img
                src="../assets/img/other/yellow-rectangle.png"
                alt="Logo yellow rectangle"
            />

            <h4 class="logo__rectangle--rectangle--header">
                Доставка по всему узбекистану
            </h4>
            <div class="logo__rectangle--rectangle--men">
                <img
                    src="../assets/img/other/logo-men.png"
                    alt="Logo rectangle men"
                />
            </div>``
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
.logo__rectangle {
    margin: 220px 0 60px;
    padding: 0;
    &--rectangle {
        position: relative;
        height: 300px;

        img {
            height: 100%;
            width: 100%;
        }

        &--header {
            position: absolute;
            top: 50%;
            left: 40%;
            transform: translate(-50%, -50%);
            width: 50%;
            font-family: Roboto;
            font-weight: 500;
            font-size: 50px;
            line-height: 1.3;
            color: black;
            text-transform: uppercase;
        }

        &--men {
            right: 10%;
            bottom: 0;
            position: absolute;
            width: 365px;
            height: 475px;
            img {
                width: 100%;
            }
        }
    }
}

@media only screen and (max-width: 1200px) and (min-width: 765px) {
    .logo__rectangle {
        margin-top: 150px;
        &--rectangle {
            &--header {
                left: 35%;
                font-size: 30px;
            }

            &--men {
                width: 323px;
                height: 401px;
            }
        }
    }
}

@media only screen and (max-width: 764px) {
    .logo__rectangle {
        margin: 40px 0 0;
        &--rectangle {
            height: 164px;
            &--header {
                left: 30%;
                font-size: 18px;
            }

            &--men {
                right: 2%;
                width: 168px;
                height: 208px;
            }
        }
    }
}
</style>

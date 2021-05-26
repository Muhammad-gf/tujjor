<template>
    <div>
        <div class="header__back"></div>
        <Header />
        <Nuxt />
        <div class="navbar__bottom">
            <h1>Something</h1>
        </div>
        <Footer />
    </div>
</template>

<script>
export default {};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap");
</style>
<style lang="scss">
* {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
        Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
.container {
    max-width: 1200px;
}
a:hover {
    text-decoration: none;
}

div.header__back {
    height: 81px;

    & {
        @media only screen and (max-width: 768px) {
            height: 67px;
        }
    }
}

.navbar__bottom {
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 1000;
    height: 40px;
    //     width: %;
    background-color: #fcf6f6;
}
</style>

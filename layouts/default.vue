<template>
    <div class="layout">
        <div class="header__back"></div>
        <Header />
        <Nuxt />
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
body {
    min-height: 100vh;
}
.layout {
    overflow: hidden;
}

div.header__back {
    height: 81px;

    & {
        @media only screen and (max-width: 768px) {
            height: 67px;
        }
    }
}

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
</style>

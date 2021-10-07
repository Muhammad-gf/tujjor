<template>
    <section>
        <banner-on-main-page />
        <catalog-magazines-main-page />
        <on-sale-item />

        <other-items />
        <logo-rectangle />
        <popular-item />
        <brands />
        <news />
    </section>
</template>

<script>
export default {
    layout: "main__page__layout",
    data() {
        return {
            seach: null
        };
    }
};
</script>

<style lang="scss">
html,
body {
    touch-action: auto !important;
}
section {
    padding: 0;
    margin: 0;
}
</style>

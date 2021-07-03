<template>
    <div class="white__background">
        <Nuxt />
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
body {
    min-height: 100vh;
}
.white__background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: #e5e5e5;
}
</style>

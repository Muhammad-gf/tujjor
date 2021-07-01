<template>
    <div>
        <all-magazines-component />
    </div>
</template>

<script>
import AllMagazinesComponent from "../components/AllMagazinesComponent.vue";
export default {
    head: {
        title: "Все магазины — Tujjor. Низкие цены и широкий ассортимент!",
        meta: [
            {
                hid: "description",
                name: "description",
                content: "Все магазины - Tujjor"
            }
        ]
    },
    components: { AllMagazinesComponent }
};
</script>

<style></style>

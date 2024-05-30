<script setup lang="ts">
import Container from './Container.vue';

defineProps<{
    horizontal?: boolean,
}>();
</script>

<template>
    <div class="menu-section d-none d-md-block">
        <Container>
            <div class="menu-section__menu">
                <a href="#car-u5" class="link simple">BAIC U5</a>
                <a href="#car-x35" class="link simple">BAIC X35</a>
                <a href="#car-x55" class="link simple">BAIC X55</a>
                <a href="#car-x7" class="link simple">BAIC X7</a>
                <a href="#car-bj40" class="link simple">BAIC BJ40</a>
            </div>
        </Container>
    </div>
</template>

<style scoped lang="scss">

.menu-section {
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    margin-top: -2px;
    margin-bottom: -2px;
}
</style>
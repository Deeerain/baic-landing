<script setup lang="ts">
defineProps<{
    horizontal?: boolean,
}>();
</script>

<template>
    <ul :class="{'menu': true, 'horizontal': horizontal}">
        <li><a href="#car-u5" class="link simple">BAIC U5</a></li>
        <li><a href="#car-x35" class="link simple">BAIC X35</a></li>
        <li><a href="#car-x55" class="link simple">BAIC X55</a></li>
        <li><a href="#car-x7" class="link simple">BAIC X7</a></li>
        <li><a href="#car-bj40" class="link simple">BAIC BJ40</a></li>
    </ul>
</template>

<style scoped lang="scss">
.menu {
    list-style: none;
    padding: 1rem 0px;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    &.horizontal {
        flex-direction: row;
        justify-content: space-between;
    }
}
</style>
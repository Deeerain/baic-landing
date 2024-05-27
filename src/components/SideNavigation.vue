<script setup lang="ts">
import { onMounted } from 'vue';
import { useSidebarStore } from '../store/sidebarStore';
import Menu from './Menu.vue';

const sidebarStore = useSidebarStore()

onMounted(() => {
    sidebarStore.toggle()
})

</script>

<template>
    <div :class="{'sidebar': true, 'active': sidebarStore.isActive}">
        <button class="sidebar__close-btn" @click="sidebarStore.toggle">x</button>
        <p>Папанина, 21</p>
        <button class="btn">Заказать звонок</button>
        <div class="sidebar__navigation">
            <Menu />
        </div>
    </div>
</template>

<style scoped lang="scss">
.sidebar {
    position: fixed;
    display: none;
    height: 100%;
    top: 0;
    left: 0;
    width: 60%;
    z-index: 999999999;
    background-color: #fff;
    padding: 10px;

    &.active {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
    }

    &__close-btn {
        position: absolute;
        background: none;
        border: none;
        top: 0;
        right: 0;
    }
}
</style>
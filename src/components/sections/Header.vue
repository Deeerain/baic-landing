<script setup lang="ts">
import { ref, onMounted } from 'vue';
import Container from '../Container.vue';
import Menu from '../Menu.vue';
import { useSidebarStore } from '../../store/sidebarStore';



const sidebar_store = useSidebarStore()
let scroll = ref<boolean>(false);
let header: HTMLElement;

onMounted(() => {
    window.onscroll = onScroll;
    header = document.getElementsByTagName("header")[0];
});

const onScroll = () =>  {
    let sticky = header.offsetTop;

    if  (window.scrollY > sticky) {
        scroll.value =  true;
    }else {
        scroll.value = false;
    }
};
</script>

<template>
    <header :class="{'scroll': scroll}">
        <Container>
            <div class="logos-row d-flex flex-row justify-content-between align-items-center">
                <a href="#" class="ham-block d-flex d-md-none sb-toggle-left">
                    <div class="hamburger">
                        <img src="/src/assets/svg/menu.svg" alt="" class="img-fluid" @click="sidebar_store.toggle">
                    </div>
                </a>
                <div class="logos-col">
                    <a class="brand link simple" href="#">Официальный дилер BAIC - Аксель-Моторс</a>
                </div>
                <div class="address-col d-flex flex-row align-items-center gap-1 ">
                    <p class="d-none d-md-block">Папанина, 21</p>
                    <a class="link simple number" href="tel:+7912345678">
                        <span>+7912345678</span>
                        <img src="/src/assets/svg/call-w.svg" alt="" class="img-fluid d-block d-md-none">
                    </a>
                    <button class="btn">Заказать звонок</button>
                </div>
            </div>
        </Container>
        <Menu :horizontal="true" />
    </header>
</template>

<style scoped lang="scss">
header  {
    padding: 20px 0px;
    font-size: var(--header-font-size);
    background-color: #ffffffd8;
    width: 100%;
    position: fixed;
    transition: 0.3s ease-in-out;
    z-index: 999999999;
    
    &.scroll {
        background-color: #fff;
        box-shadow: 2px 2px 5px rgba($color: #6e6e6e, $alpha: .6);
    }
}
</style>
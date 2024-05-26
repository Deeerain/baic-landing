<script setup lang="ts">
import { ref, onMounted } from 'vue';

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
        <div class="container">
            <div class="logos-row flex-row beetwen center">
                <div class="logos-col logos-col">
                    <a class="brand link simple" href="#">Официальный дилер BAIC - Аксель-Моторс</a>
                </div>
                <div class="contacts-col flex-row beetwen center">
                    <p>Папанина, 21</p>
                    <a class="link simple number" href="tel:+7912345678">+7912345678</a>
                    <button class="btn">Заказать звонок</button>
                </div>
            </div>
        </div>
        <nav>
            <div class="container">
                <ul class="menu flex-row beetwen center">
                    <li><a href="#car-u5" class="link simple">BAIC U5</a></li>
                    <li><a href="#car-x35" class="link simple">BAIC X35</a></li>
                    <li><a href="#car-x55" class="link simple">BAIC X55</a></li>
                    <li><a href="#car-x7" class="link simple">BAIC X7</a></li>
                    <li><a href="#car-bj40" class="link simple">BAIC BJ40</a></li>
                </ul>
            </div>
        </nav>
    </header>
</template>

<style scoped lang="scss">
header  {
    padding: 20px 0px;
    font-size: var(--header-font-size);
    width: 100%;
    position: fixed;
    transition: 0.3s ease-in-out;
    z-index: 999999999;
    
    &.scroll {
        background-color: #fff;
        box-shadow: 2px 2px 5px rgba($color: #6e6e6e, $alpha: .6);
    }
}

.contacts-col,
.logos-col {
    gap: 6rem;
}

.number, .brand {
    font-weight: bold;
}

.brand {
    font-size: 14pt;
}
.menu {
    list-style: none;
    padding: 1rem 0px;
}
</style>
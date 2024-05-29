<script setup lang="ts">
import { ref, onMounted } from 'vue';
import Container from '../Container.vue';
import Menu from '../Menu.vue';

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
        </Container>
        <nav>
            <Container>
                <Menu :horizontal="true" />
            </Container>
        </nav>
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

</style>
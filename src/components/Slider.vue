<script setup lang=ts>
import {reactive} from 'vue';
import Slide from '../types/slide';

const props = defineProps<{
    slides: Slide[],
}>();


let slides = reactive(props.slides);

</script>

<template>
<div id="carouselExampleIndicators" class="carousel slide carousel-fade">
    <div class="carousel-inner">
        <div v-for="slide in slides" :class="{'carousel-item': true, 'active': slides.indexOf(slide) == 0}">
        <img :src="slide.img" class="d-block w-100" alt="...">
        </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
    </button>
</div>
</template>

<style scoped lang="scss">
</style>
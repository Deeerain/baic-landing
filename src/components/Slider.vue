<script setup lang=ts>
import {reactive} from 'vue';
import Slide from '../types/slide';

const props = defineProps<{
    slides: Slide[],
}>();


let slides = reactive(props.slides);

const get_current_index = () => {
    const slide = slides.findIndex((value) => value.active == true);

    return slide;
}

const go_next = () => {
    const current_index = get_current_index();

    slides[current_index].active = false;

    if(current_index < slides.length - 1) {
        slides[current_index + 1].active = true;
    }else{
        slides[0].active = true;
    }

    console.log(get_current_index(), slides.length)
}

const go_prev = () => {
    const current_index = get_current_index();

    slides[current_index].active = false;

    if(current_index >= slides.length - 1) {
        slides[current_index - 1].active = true;
    }else {
        slides[slides.length - 1].active = true;
    }

    console.log(get_current_index(), slides.length)
}

</script>

<template>
    <div class="slider">
        <button class="slider__btn right" @click="go_next">></button>
        <button class="slider__btn left" @click="go_prev"><</button>
        <img v-for="slide in slides" :src="slide.img" :class="{'slider__slide': true, 'active': slide.active}" alt=""/>
    </div>
</template>

<style scoped lang="scss">
.slider {
    position: relative;
    overflow: hidden;

    &__slide {
        display: none;

        &.active {
            display: block;
        }
    }

    &__btn {
        position: absolute;
        background: rgba($color: #000000, $alpha: 0.0);
        border: none;
        color: #fff;
        width: 5%;
        height: 100%;
        transition: 0.3s ease-in-out;

        &.left {
            left: 0;
        }

        &.right {
            right: 0;
        }

        &:hover {
            background: rgba($color: #000000, $alpha: 0.7);
        }
    }
}
</style>
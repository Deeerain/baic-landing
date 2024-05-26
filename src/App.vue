<script setup lang="ts">
import Header from  './components/Header.vue';
import Slider from './components/Slider.vue';

const carList = [
  {
    'id': 'car-u5',
    'brand': 'BAIC',
    'model': 'U5',
    'price': '1 900 000',
    'slides': [
      {
        img: "/src/assets/img/u5/1.jpg",
        active: true,
      },
      {
        img: "/src/assets/img/u5/2.jpeg",
        active: false,
      },
    ]
  },
]

</script>

<template>
  <Header></Header>
  <section class="poster">
  </section>
  <section v-for="car in carList" :id="car.id" class="car">
    <div class="container">
      <div class="flex-row beetwen present">
        <div class="present__slider">
          <Slider :slides="car.slides"/>
        </div>
        <div class="present__description">
          <h2> {{ car.brand }} {{ car.model }}</h2>
          <div class="sale-row flex-row">
            <div class="min-sale">{{ car.price }}</div>
          </div>
          <div class="flex-row beetwen center">
            <button class="btn">Кредитная ставка 7%</button>
            <button class="btn">Гарантия 5 лет</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
  .poster {
    overflow: hidden;
    height: 100vh;
    width: 100vw;
    background-image: url(./assets/img/poster.jpg);
  }

  .present {
    &__slider {
      width: 50%;
    }
  }
</style>

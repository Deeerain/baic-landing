<script setup lang="ts">
import Slider from './Slider.vue';

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
  {
    'id': 'car-x35',
    'brand': 'BAIC',
    'model': 'X35',
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
    <section v-for="car in carList" :id="car.id">
        <div class="container">
          <div class="presenter">
            <div class="presenter__slider">
              <Slider :slides="car.slides"/>
            </div>
            <div class="present__description flex-column beetwen">
              <h2> {{ car.brand }} {{ car.model }}</h2>
              <div class="sale-row flex-row">
                <div class="min-sale">{{ car.price }}</div>
              </div>
              <div class="flex-row center">
                <button class="btn">Кредитная ставка 7%</button>
                <button class="btn">Гарантия 5 лет</button>
              </div>
              <div class="flex-row beetwen">
                <button class="btn">Получить предложение</button>
                <button class="btn">Растчитать кредит</button>
                <button class="btn">Оценить по трейд-ин</button>
              </div>
            </div>
          </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
.presenter {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    height: 650px;
}
</style>
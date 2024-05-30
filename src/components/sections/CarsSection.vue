<script setup lang="ts">
import Slider from '../Slider.vue';
import Container from '../Container.vue'

const carList = [
  {
    'id': 'car-u5',
    'brand': 'BAIC',
    'model': 'U5 Plus',
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
    <section v-for="car in carList">
      <Container>
        <div class="presenter row">
          <div class="anchor" :id="car.id"></div>
          <div class="d-block d-sm-flex d-md-none col-12 model-text">
            <h2>{{ car.brand }} <b>{{ car.model }}</b></h2>
            <div class="main-sale">от <b><nobr>2 233 990 ₽</nobr></b></div>
          </div>
          <div class="col-lg-6 col-md-7">
            <Slider :slides="car.slides"/>
          </div>
          <div class="col-lg-6 col-md-5 d-flex flex-column justify-content-between">
            <div class="model-text d-none d-md-block">
              <h2> {{ car.brand }} <b>{{ car.model }}</b></h2>
              <div class="sale-row flex-row">
                <h3 class="min-sale">от <b>{{ car.price }} ₽</b></h3>
              </div>
            </div>
            <div class="model-sale">
              <div class="model-sale__adv row">
                <div class="col-12 col-lg-6">
                  <button class="btn w-100">
                    <img src="../../assets/svg/1-b.svg" alt="">
                    <span>Кредитная ставка 7%</span>
                  </button>
                </div>
                <div class="col-12 col-lg-6">
                  <button class="btn w-100">
                    <img src="../../assets/svg/2-b.svg" alt="">
                    <span>Гарантия 5 лет</span>
                  </button>
                </div>
              </div>
            </div>
            <div class="btns-row row">
              <div class="col-12 col-lg-10 col-xl-4">
                <button class="btn w-100">Получить предложение</button>
              </div>
              <div class="col-12 col-lg-5 col-xl-4">
                <button class="btn w-100">Растчитать кредит</button>
              </div>
              <div class="col-12 col-lg-5 col-xl-4">
                <button class="btn w-100">Оценить по трейд-ин</button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
</template>

<style scoped lang="scss">
</style>
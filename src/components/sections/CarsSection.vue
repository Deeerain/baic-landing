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
    <section v-for="car in carList" :id="car.id">
      <Container>
        <div class="presenter">
          <div class="presenter__slider">
            <Slider :slides="car.slides"/>
          </div>
          <div class="presenter__description flex-column beetwen">
            <div class="model-text">
              <h2> {{ car.brand }} <b>{{ car.model }}</b></h2>
              <div class="sale-row flex-row">
                <h3 class="min-sale">от <b>{{ car.price }}</b></h3>
              </div>
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
      </Container>
    </section>
</template>

<style scoped lang="scss">
.presenter {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    gap: 1rem;

    &__slider {
      flex-shrink: 1;
      flex-grow: 1;
      width: 50%;
    }

    &__description {
      flex-shrink: 1;
      flex-grow: 1;
      width: 50%;

      .model-text {
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        gap: 1rem;
        font-size: 20pt;
        align-items: start;

        h2, h3 {
          font-weight: 300;
          line-height: 1;
        }

        .sale-row {
          background-color: blue;
          color: white;
          padding: 10px 15px;
        }
      }
    }
}
</style>
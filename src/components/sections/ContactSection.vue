<script setup lang="ts">
import Container from '../Container.vue';
</script>

<template>
    <section id="contacts">
        <Container>
            <div class="contacts-row flex-row beetwen">
                <div class="contacts-row__item flex-column between">
                    <small>Телефон:</small>
                    <a href="tel:+7912345678" class="link simple">+7912345678</a>
                </div>
                <div class="contacts-row__item flex-column between">
                    <small>Адрес:</small>
                    <a href="https://yandex.ru/maps/20/arhangelsk/house/ulitsa_papanina_21/YEkYcABhQEQBQFhufXlwd3thZQ==/?ll=40.673572%2C64.516836&pt=64.516721%2C40.671916&z=17.28" class="link simple">Папанина, 21</a>
                </div>
                <div class="contacts-row__item flex-column between">
                    <small>Время работы:</small>
                    <p>Ежедневно с 9 до 21</p>
                </div>
            </div>
        </Container>
    </section>
</template>

<style scoped lang="scss">
.contacts {
    &-row {
        &__item {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            font-weight: bold;
        }
    }
}
</style>
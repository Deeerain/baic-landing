<template>
    <div class="container">
        <slot/>
    </div>
</template>

<style lang="scss">

.container {
    width: 100%;
    margin: auto;

    @media (min-width: 641px) {
        max-width: 620px;
    }

    @media (min-width: 961px) {
        max-width: 940px;
    }

    @media (min-width: 1171px) {
        max-width: 1150px;
    }

    @media (min-width: 1601px) {
        max-width: 1420px;
    }
}
</style>
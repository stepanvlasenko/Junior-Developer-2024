<script setup lang="ts">

</script>

<template>
    <div class="page">
        <div class="header">
            <img class="header__logo" src="/images/logo.png" alt="logo">
            <!-- Z-index? -->
            <p class="roboto-mono-700 header__title">TIMEZONES</p>
        </div>
        <div class="navigation">
            <NuxtLink to="/City">
                <div class="navigation__card">
                    <img class="navigation__icon" src="/images/city.svg" alt="city">
                    <p class="inter-400 navigation__text">Определение часового пояса и времени по городу</p>
                </div>
            </NuxtLink>
            <NuxtLink to="/TimeZone">
                <div class="navigation__card">
                    <img class="navigation__icon" src="/images/map.svg" alt="city">
                    <p class="inter-400 navigation__text">Города по часовому поясу</p>
                </div>
            </NuxtLink>
            <NuxtLink to="/Compare">
                <div class="navigation__card">
                    <img class="navigation__icon" src="/images/compare.svg" alt="city">
                    <p class="inter-400 navigation__text">Сравнение часовых поясов городов</p>
                </div>
            </NuxtLink>
        </div>
    </div>
    
</template>

<style scoped>
    
    .page {
        /* display: flex;
        flex-direction: column; */
        max-width: 800px;
        margin: 0 auto;
        /* width: fit-content; */
    }

    .header {
        margin-top: 144px;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .header__logo {
        position: absolute;
        width: 352px;
        aspect-ratio: 1;
    }
    .header__title {
        color: #344955;
        font-size: 128px;
    }

    .navigation {
        display: grid;
        gap: 24px;
        margin-top: calc(78px + 24px);
    }
    .navigation__card {
        padding: 32px 24px;
        border-radius: 26px;
        background-color: #FFFFFF;
        transition: 200ms;
    }
    .navigation__card:hover {
        box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
        transition: 200ms;
    }
    .navigation__icon {
        width: 24px;
        aspect-ratio: 1;
    }
    .navigation__text {
        margin-top: 10px;
        font-size: 16px;
    }
</style>
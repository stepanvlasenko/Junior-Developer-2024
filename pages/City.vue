<script setup lang="ts">
import rawCountries from '../assets/ts/countries.json'
import type { City, Country } from '@types';
import { cities } from '../assets/ts/citiesApi'
import { asyncComputed } from '@vueuse/core';

const data = ref<City | null>(null)

const requestCountry = ref('')
const chosenCountry = ref<Country | null>(null)
const requestCity = ref('')
const chosenCity = ref<City | null>(null)

const filteredCountries = computed(() => {
    return rawCountries.filter((v) => v.name.toLowerCase().includes(requestCountry.value.toLowerCase()))
})

const rawCities = asyncComputed(async () => {
    if (!chosenCountry.value) return null
    return (await cities.fromCountry(chosenCountry.value.code)) || []
}, null)

const filteredCities = computed(() => {
    if (!rawCities.value) return null
    return rawCities.value.filter((v) => v.name.toLowerCase().includes(requestCity.value.toLowerCase()))
})


const clearCountry = () => {
    requestCountry.value = ''
    chosenCountry.value = null

    requestCity.value = ''
    chosenCity.value = null
}

const clearCity = () => {
    requestCity.value = ''
    chosenCity.value = null
}

</script>

<template>
    <div class="page">
        <!-- <ChooseCity @item-chosen="(v: City | null) => data = v"/>
        <CityCard class="city-card" v-if="data" :data="data"/> -->
        <div class="page__header">
            <div class="header__search">
                <input class="inter-400 search__input" placeholder="Страна" :disabled="chosenCountry ? true : false" v-model="requestCountry" />
                <button class="inter-400 search__button" @click="() => clearCountry()">Сбросить</button>
            </div>
            <div class="header__search">
                <input class="inter-400 search__input" placeholder="Город" :disabled="chosenCity || !chosenCountry ? true : false" v-model="requestCity" />
                <button class="inter-400 search__button" @click="() => clearCity()">Сбросить</button>
            </div>
        </div>
        <div class="page__list" v-if="!chosenCountry">
            <SmallCard v-for="item in filteredCountries" :data="item" @item-chosen="(v: Country) => {chosenCountry = v; requestCountry = v.name}">
                <p class="inter-400" style="
                    font-size: 24px;
                    color: #78A083;
                ">
                    {{ item.name }}
                </p>
                <p class="inter-400" style="
                    font-size: 12px;
                ">
                    Country Code: {{ item.code }}
                </p>
            </SmallCard>
        </div>
        <div class="page__list" v-if="chosenCountry && !chosenCity">
            <SmallCard v-for="item in filteredCities" :data="item" @item-chosen="(v: City) => {chosenCity = v; requestCity = v.name}">
                <p class="inter-400" style="
                    font-size: 24px;
                    color: #78A083;
                ">
                    {{ item.name }}
                </p>
                <CityData :data="item"/>
                
            </SmallCard>
        </div>


    </div>
</template>

<style scoped>
    .page {
        
    }
    /* .city-card {
        max-width: 400px;
    } */

    .page__header {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        gap: 24px;
    }
    .header__search {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        gap: 16px;
    }
    .search__input {
        font-size: 12px;
        padding: 8px 16px;
        border-radius: 12px;
        background-color: #FFFFFF;
        transition: 200ms;
    }
    .search__input:focus {
        outline: none;
        box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
        transition: 200ms;
    }
    .search__input:disabled {
        cursor: not-allowed;
    }
    .search__button {
        font-size: 12px;
        padding: 8px 32px;
        border-radius: 12px;
        background-color: #78A083;
        color: #FFFFFF;
        transition: 200ms;
    }
    .search__button:hover {
        box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
        transition: 200ms;
    }


    .page__list {
        margin-top: 16px;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 16px;
    }
</style>
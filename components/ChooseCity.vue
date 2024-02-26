<script setup lang="ts">
import rawCountries from '../assets/ts/countries.json'
import type { City, Country } from '@types';
import { cities } from '../assets/ts/citiesApi'

const emit = defineEmits(['item-chosen'])

const country = ref<Country | null>(null)
const citiesDataset = ref<City[]>([])
const city = ref<City | null>(null)

const onCountryChosen = async (v: Country | null) => {
    country.value = v
    citiesDataset.value = v ? ((await cities.fromCountry(v.code)) || []) : []
}

const onCityChosen = async (v: City | null) => {
    city.value = v
    emit('item-chosen', v)
}

</script>

<template>
    <div class="choose-city">
        <CountrySearch @item-chosen="onCountryChosen" label="Choose Country" :dataset="rawCountries"/>
        <CitySearch @item-chosen="onCityChosen" label="Choose City" :dataset="citiesDataset"/>
    </div>
</template>

<style scoped>
    .choose-city {
        display: flex;
    }
</style>
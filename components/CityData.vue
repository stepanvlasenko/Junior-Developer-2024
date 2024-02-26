<script setup lang="ts">
import type { City, TimeZoneResponce } from '@types'
// import { timeZone } from '@timeApi';
// import { asyncComputed } from '@vueuse/core';

const props = defineProps<{
    data: City
}>()
const { data } = toRefs(props)

// const responce = asyncComputed<TimeZoneResponce | null>(async () => {
//     return await timeZone.fromCoordinates({
//         latitude: data.value.latitude,
//         longitude: data.value.longitude
//     })
// }, null)

// const currentDate = computed<Date>(() => {
//     if (!responce.value) return new Date()
//     return new Date((responce.value.timestamp + (new Date()).getTimezoneOffset() * 60) * 1000)
// })

</script>

<template>
    <div class="container inter-400">
        <div>
            <p>
                {{ data.is_capital ? 'Столица' : 'Город'}}
            </p>
            <p>
                Население: {{ data.population }}
            </p>
        </div>
        <div>
            <p>
                Ширина: {{ data.latitude }}
            </p>
            <p>
                Долгота: {{ data.longitude }}
            </p>
        </div>
        <!-- <div>
            <p>
                Часовой пояс: {{ responce ? `GMT${responce.gmtOffset >= 0 ? '+' + (responce.gmtOffset / 3600) : (responce.gmtOffset / 3600)}` : 'GMT+0' }}
            </p>
            <p>
                Время: {{ currentDate.getHours() + ':' + currentDate.getMinutes()}}
            </p>
        </div> -->
    </div>
</template>

<style scoped>
    .container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 12px;
        font-size: 12px;
    }
    
    .card__header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
</style>
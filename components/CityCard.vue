<script setup lang="ts">
import type { City, TimeZoneResponce } from '@types'
import { timeZone } from '@timeApi';
import { asyncComputed } from '@vueuse/core';

const props = defineProps<{
    data: City
}>()
const { data } = toRefs(props)

// const timeResponce = ref<TimeZoneResponce | null>(null)
// const timeResponce = computed<TimeZoneResponce | null>(() => {
//     if (!data.value) return null
//     timeZone.fromCoordinates({
//         latitude: data.value.latitude,
//         longitude: data.value.longitude
//     }).then((v) => {
//         return v
//     })
// })
watch(data, async () => {

})
const timeResponce = asyncComputed<TimeZoneResponce | null>(async () => {
    return await timeZone.fromCoordinates({
        latitude: data.value.latitude,
        longitude: data.value.longitude
    })
}, null)
const timeData = computed<Date>(() => {
    if (!timeResponce.value) return new Date()
    return new Date((timeResponce.value.timestamp + (new Date()).getTimezoneOffset() * 60) * 1000)
})

</script>

<template>
    <div class="card">
        <div class="card__header">
            <h2>{{ `${data?.name}, ${data?.country}${data?.is_capital ? ' (Capital)' : ''}` }}</h2>
            <p>{{ `${timeData.getFullYear()}-${timeData.getMonth()}-${timeData.getDate()} ${timeData.getHours()}:${timeData.getMinutes()}` }}</p>
        </div>
        <p>Population: <span class="text-gray-700">{{ data?.population }}</span></p>
        <p v-if="timeResponce">TimeZone: <span class="text-gray-700">{{ `${timeResponce?.zoneName} GMT${timeResponce?.gmtOffset >= 0 ? '+' + (timeResponce?.gmtOffset / 3600) : (timeResponce?.gmtOffset / 3600)}` }}</span></p>
    </div>
</template>

<style scoped>
    .card {
        padding: 8px;
        border-radius: 8px;
    }
    .card > * {
        padding-bottom: 8px;

    }
    .card__header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
</style>
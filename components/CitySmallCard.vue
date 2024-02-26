<script setup lang="ts">
import type { City } from '@types'

const props = defineProps<{
    data: City,
    isDisabled?: boolean
}>()
const { data, isDisabled } = toRefs(props)
const emit = defineEmits(['item-chosen'])

</script>

<template>
    <div class="card">
        <div>
            <h2>{{ data.name }}</h2>
            <p>Population: <span class="text-gray-700">{{ data.population }}</span></p>
        </div>
        <UButton :disabled="isDisabled" class="button" @click="$emit('item-chosen', data)">Choose</UButton>
    </div>
</template>

<style scoped>
    .card {
        padding: 8px;
        border-radius: 8px;
        display: grid;
        grid-template-columns: 7fr 3fr;
    }
    .button {
        justify-content: center;
        align-items: center;
        border-radius: 24px;
        background-color: rgb(0, 204, 255);
    }
</style>
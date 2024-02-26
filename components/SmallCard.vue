<script setup lang="ts">
import type { City, Country } from '@types'

const props = defineProps<{
    data: Country | City,
    isDisabled?: boolean
}>()
const { data, isDisabled } = toRefs(props)
const emit = defineEmits(['item-chosen'])

</script>

<template>
    <div class="card" :disabled="isDisabled" @click="$emit('item-chosen', data)">
        <slot></slot>
    </div>
</template>

<style scoped>
    .card {
        display: flex;
        flex-direction: column;
        gap: 16px;

        cursor: pointer;
        padding: 32px 24px;
        border-radius: 16px;
        background-color: #FFFFFF;
        transition: 200ms;
    }
    .card:hover {
        box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
        transition: 200ms;
    }
</style>
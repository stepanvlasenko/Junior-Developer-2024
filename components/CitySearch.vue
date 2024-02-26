<script setup lang="ts">
import type { City } from '~/assets/ts/types';

const props = defineProps<{
    label: string,
    dataset: City[],
}>()
const { label, dataset } = toRefs(props)

const emit = defineEmits(['item-chosen'])

const request = ref('')

const filteredData = computed(() => {
    return dataset.value.filter((v) => v.name.toLowerCase().includes(request.value.toLowerCase()))
})

const chosenItem = ref<City | null>(null)

const onItemChosen = async (item: City) => {
    chosenItem.value = item
    request.value = item.name
    emit('item-chosen', item)
}

const clearSearch = () => {
    request.value = ''
    chosenItem.value = null
    emit('item-chosen', null)
}

</script>

<template>
    <div class="search">
        <div class="search__header">
            <h1>{{label}}</h1>
            <UButton :disabled="chosenItem ? false : true" @click="() => clearSearch()" class="search__clear-button">Clear</UButton>
        </div>
        <UInput :disabled="chosenItem || !dataset.length ? true : false" v-model="request"></UInput>
        <CitySmallCard @item-chosen="onItemChosen" v-for="item in filteredData" :data="item" :is-disabled="chosenItem ? true : false"/>
    </div>
</template>

<style scoped>
    .search {
        width: 100%;
        height: 100%;
        padding: 8px;
    }
    .search > * {
        padding-bottom: 8px;
    }
    .search__header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
    .search__clear-button{
        padding: 8px;
        border-radius: 8px;
        background-color: rgb(255, 0, 0);
    }
</style>
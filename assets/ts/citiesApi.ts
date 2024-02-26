import type { City } from "@types"

const apiURL = 'https://api.api-ninjas.com/v1/city'
const apiKey = '3CmbB0YBQsCateuBd5n60w==TUDVzGNXx4kuRvKR'

export const cities = {
    fromCountry: async (country: string, maxAmount: number = 30) => {
        const result = await useFetch<City[]>(apiURL, {
            method: 'get',
            headers: {
                'X-Api-Key': apiKey,
            },
            params: {
                country: country,
                limit: maxAmount,
            }
        })
        return result.data.value
    },
    fromName: async (name: string) => {
        const result = await useFetch<City[]>(apiURL, {
            method: 'get',
            headers: {
                'X-Api-Key': apiKey,
            },
            params: {
                name: name,
            }
        })
        return result.data.value
    }
}
import type { Coordinates, TimeZoneResponce } from "@types"

const apiURL = 'http://api.timezonedb.com/v2.1'
const apiKey = 'D9OG0B2C8PB0'

export const timeZone = {
    fromCoordinates: async (coordinates: Coordinates) => {
        const result =  await useFetch<TimeZoneResponce>(apiURL + '/get-time-zone', {
            method: 'get',
            params: {
                key: apiKey,
                format: 'json',
                fields: 'zoneName,abbreviation,gmtOffset,timestamp',
                by: 'position',
                lat: coordinates.latitude,
                lng: coordinates.longitude,
            },
            
        })
        return result.data.value
    }
}
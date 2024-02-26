export type Coordinates = {
    latitude: Number
    longitude: Number
}

type TimeOffset = {
    seconds: number,
    milliseconds: number,
    ticks: number,
    nanoseconds: number,
}

// dstDuration is not right
// export type TimeZoneResponce = {
//     timeZone: string,
//     currentLocalTime: string,
//     currentUtcOffset: TimeOffset
//     standardUtcOffset: TimeOffset
//     hasDayLightSaving: boolean,
//     isDayLightSavingActive: boolean,
//     dstInterval: {
//         dstName: string,
//         dstOffsetToUtc: TimeOffset,
//         dstOffsetToStandardTime: TimeOffset,
//         dstStart: string
//         dstEnd: string
//         dstDuration: any
//     } | null
// }
export type TimeZoneResponce = {
    status: string,
    message: string,
    zoneName: string,
    abbreviation: string,
    gmtOffset: number
    timestamp: number
}

export type City = {
    name: string,
    country: string
    is_capital: string
    latitude: number,
    longitude: number
    population: number
}

export type Country = {
    name: string
    code: string
}
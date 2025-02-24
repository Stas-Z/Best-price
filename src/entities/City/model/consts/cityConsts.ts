export const City = {
    Москва: 'Москва',
    'Санкт-Петербург': 'Санкт-Петербург',
    Екатеринбург: 'Екатеринбург',
    Краснодар: 'Краснодар',
} as const

export type CityTypes = ValueOf<typeof City>

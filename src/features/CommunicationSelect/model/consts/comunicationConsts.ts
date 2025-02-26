export const Communication = {
    'Звонки и сообщения': 'Звонки и сообщения',
    Звонки: 'Звонки',
    Сообщения: 'Сообщения',
} as const

export type CityTypes = ValueOf<typeof Communication>

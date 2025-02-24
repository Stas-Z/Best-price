export const AppRoutes = {
    NEW_AD_PAGE: 'new_ad_page',

    NOT_FOUND: 'not_found',
} as const

export type AppRoutesTypes = ValueOf<typeof AppRoutes>

export const getRouteNewAd = () => '/'

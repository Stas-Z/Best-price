import { RouteProps } from 'react-router-dom'

import { NewAdPage } from '@/pages/NewAdPage'
import { NotFoundPage } from '@/pages/NotFoundPage'
import {
    AppRoutes,
    AppRoutesTypes,
    getRouteNewAd,
} from '@/shared/consts/router'

export const routeConfig: Record<AppRoutesTypes, RouteProps> = {
    [AppRoutes.NEW_AD_PAGE]: {
        path: getRouteNewAd(),
        element: <NewAdPage />,
    },

    [AppRoutes.NOT_FOUND]: {
        path: '*',
        element: <NotFoundPage />,
    },
}

import { Suspense, memo } from 'react'

import { Route, RouteProps, Routes } from 'react-router-dom'

import { routeConfig } from '../config/routeConfig'

const renderWithWrapper = (route: RouteProps) => {
    const element = <Suspense fallback="">{route.element}</Suspense>

    return <Route key={route.path} path={route.path} element={element} />
}

const AppRouter = () => (
    <Suspense fallback="">
        <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>
    </Suspense>
)

export default memo(AppRouter)

import { MainLayout } from '@/shared/layouts/MainLayout'
import { PageHeader } from '@/widgets/PageHeader'

import AppRouter from './providers/router/ui/AppRouter'

export const App = () => {
    return (
        <div id="app" className="app">
            <MainLayout pageHeader={<PageHeader />} page={<AppRouter />} />
        </div>
    )
}

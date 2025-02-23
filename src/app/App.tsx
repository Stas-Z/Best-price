import { MainPage } from '@/pages/MainPage'
import { MainLayout } from '@/shared/layouts/MainLayout'
import { PageHeader } from '@/widgets/PageHeader'

export const App = () => {
    return (
        <div id="app" className="app">
            <MainLayout pageHeader={<PageHeader />} page={<MainPage />} />
        </div>
    )
}

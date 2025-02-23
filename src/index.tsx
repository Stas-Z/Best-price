import { createRoot } from 'react-dom/client'

import { App } from './app/App'
import { ErrorBoundary } from './app/providers/ErrorBoundary'
import '@/app/styles/index.scss'

const container = document.getElementById('root')
if (!container) {
    throw new Error("Container root not found. Can't mount react app")
}
const root = createRoot(container)

root.render(
    <ErrorBoundary>
        <App />
    </ErrorBoundary>,
)

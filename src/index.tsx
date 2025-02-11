import { createRoot } from 'react-dom/client'

const container = document.getElementById('root')
if (!container) {
    throw new Error("Container root not found. Can't mount react app")
}
const root = createRoot(container)

root.render(<div>Hello world</div>)

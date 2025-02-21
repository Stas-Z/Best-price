import React, { ErrorInfo, ReactNode } from 'react'

import { PageError } from '@/widgets/PageError'

interface ErrorBounadaryProps {
    children: ReactNode
}

interface ErrorBoundaryState {
    hasError: boolean
}

class ErrorBoundary extends React.Component<
    ErrorBounadaryProps,
    ErrorBoundaryState
> {
    constructor(props: ErrorBounadaryProps) {
        super(props)
        this.state = { hasError: false }
    }

    static getDerivedStateFromError(error: Error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true }
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        // You can also log the error to an error reporting service
        console.log(error, errorInfo)
    }

    render() {
        const { hasError } = this.state
        const { children } = this.props
        if (hasError) {
            // You can render any custom fallback UI
            return <PageError />
        }

        return children
    }
}

export default ErrorBoundary

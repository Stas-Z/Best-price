import { useState, useEffect } from 'react'

interface useWindowWidthProps {
    minWidth?: number
    maxWidth?: number
}

const useWindowWidth = (props: useWindowWidthProps) => {
    const { maxWidth, minWidth } = props
    const [width, setWidth] = useState<number>(window.innerWidth)

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth)
        }

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    const isMinWidth = minWidth !== undefined ? width >= minWidth : true

    const isMaxWidth = maxWidth !== undefined ? width <= maxWidth : true

    return isMinWidth && isMaxWidth
}

export default useWindowWidth

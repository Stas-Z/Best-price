import { useEffect, useState } from 'react'

export const useDevice = () => {
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const checkDevice = () => {
            const isTouchDevice = window.matchMedia('(pointer:coarse)').matches
            const isSmallScreen = window.innerWidth < 1001
            setIsMobile(isTouchDevice || isSmallScreen)
        }

        checkDevice()
        window.addEventListener('resize', checkDevice)

        return () => window.removeEventListener('resize', checkDevice)
    }, [])

    return isMobile
}

import { memo } from 'react'

import { useDevice } from '@/shared/lib/hooks/useDevice/useDevice'

import { CitySelectDesktop } from './CitySelectDesktop/CitySelectDesktop'
import { CitySelectMobile } from './CitySelectMobile/CitySelectMobile'

export interface CitySelectProps {
    className?: string
}

const CitySelect = (props: CitySelectProps) => {
    const isMobile = useDevice()

    return (
        <>
            {isMobile ? (
                <CitySelectMobile {...props} />
            ) : (
                <CitySelectDesktop {...props} />
            )}
        </>
    )
}
export default memo(CitySelect)

import { memo } from 'react'

import { useDevice } from '@/shared/lib/hooks/useDevice/useDevice'

import { SaleTypeSelectDesktop } from './SaleTypeSelectDesktop/SaleTypeSelectDesktop'
import { SaleTypeSelectMobile } from './SaleTypeSelectMobile/SaleTypeSelectMobile'

export interface SaleTypeSelectProps {
    className?: string
    isOpen?: boolean
}

const SaleTypeSelect = (props: SaleTypeSelectProps) => {
    const isMobile = useDevice()
    return (
        <>
            {isMobile ? (
                <SaleTypeSelectMobile {...props} />
            ) : (
                <SaleTypeSelectDesktop {...props} />
            )}
        </>
    )
}
export default memo(SaleTypeSelect)

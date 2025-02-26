import { memo, useCallback } from 'react'

import Arrow from '@/shared/assets/icons/backArrow.svg'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Icon } from '@/shared/ui/Icon'

interface BackButtonProps {
    className?: string
}

export const BackButton = memo((props: BackButtonProps) => {
    const { className } = props

    const onButtonClick = useCallback(() => {
        // Вернутся на предыдущую страницу
    }, [])

    return (
        <Icon
            className={classNames('', {}, [className])}
            Svg={Arrow}
            clickable
            onClick={onButtonClick}
            width={40}
            height={40}
        />
    )
})
BackButton.displayName = 'BackButton'

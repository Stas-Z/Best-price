import { memo, useCallback } from 'react'

import { BreadcrumbsList } from '@/entities/Breadcrumbs'
import Arrow from '@/shared/assets/backArrow.svg'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Icon } from '@/shared/ui/Icon'
import { HStack } from '@/shared/ui/Stack'
import { Text } from '@/shared/ui/Text'

import cls from './PageHeader.module.scss'

interface PageHeaderProps {
    className?: string
}

export const PageHeader = memo((props: PageHeaderProps) => {
    const { className } = props

    const pageTitle = 'Добавить обьявление' // получаем с помощью селектора

    const onButtonClick = useCallback(() => {
        // Вернутся на предыдущую страницу
    }, [])

    return (
        <div className={classNames(cls.pageHeader, {}, [className])}>
            <BreadcrumbsList className={cls.breadCrumbs} />
            <HStack gap="16">
                <Icon
                    Svg={Arrow}
                    clickable
                    onClick={onButtonClick}
                    width={40}
                    height={40}
                />
                <Text className={cls.pageTitle} title={pageTitle} size="l" />
            </HStack>
        </div>
    )
})
PageHeader.displayName = 'PageHeader'

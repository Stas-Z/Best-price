import { memo } from 'react'

import { BreadcrumbsList } from '@/entities/Breadcrumbs'
import { BackButton } from '@/features/BackButton'
import { classNames } from '@/shared/lib/classNames/classNames'
import { useDevice } from '@/shared/lib/hooks/useDevice/useDevice'
import useWindowWidth from '@/shared/lib/hooks/useWindowWidth/useWindowWidth'
import { HStack } from '@/shared/ui/Stack'
import { Text } from '@/shared/ui/Text'

import cls from './PageHeader.module.scss'

interface PageHeaderProps {
    className?: string
}

export const PageHeader = memo((props: PageHeaderProps) => {
    const { className } = props

    const isMobile = useDevice()
    const small = useWindowWidth({ maxWidth: 576 })

    const pageTitle = 'Добавить объявление' // получаем с помощью селектора

    return (
        <div className={classNames(cls.pageHeader, {}, [className])}>
            {!isMobile && <BreadcrumbsList className={cls.breadCrumbs} />}
            <HStack gap="16" justify={isMobile ? 'center' : 'start'}>
                {!isMobile && <BackButton />}
                <Text
                    className={cls.pageTitle}
                    title={pageTitle}
                    size={small ? 'l' : 'xl'}
                />
            </HStack>
        </div>
    )
})
PageHeader.displayName = 'PageHeader'

import { memo, ReactNode } from 'react'

import { classNames } from '@/shared/lib/classNames/classNames'
import { useDevice } from '@/shared/lib/hooks/useDevice/useDevice'
import { VStack } from '@/shared/ui/Stack'

import cls from './MainLayout.module.scss'

interface MainLayoutProps {
    className?: string
    header?: ReactNode
    pageHeader?: ReactNode
    page?: ReactNode
    footer?: ReactNode
}

export const MainLayout = memo((props: MainLayoutProps) => {
    const { className, header, pageHeader, page, footer } = props

    const isMobile = useDevice()

    return (
        <VStack
            align="center"
            className={classNames(cls.mainLayout, {}, [className])}
        >
            <div
                className={classNames(
                    cls.header,
                    { [cls.mobile]: isMobile },
                    [],
                )}
            >
                {header}
            </div>
            <div className={cls.container}>
                <div className={cls.pageHeader}>{pageHeader}</div>
                <div className={cls.page}>{page}</div>
            </div>
            <div className={cls.footer}>{footer}</div>
        </VStack>
    )
})
MainLayout.displayName = 'MainLayout'

import { memo, ReactNode } from 'react'

import { classNames } from '@/shared/lib/classNames/classNames'

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

    return (
        <div className={classNames(cls.mainLayout, {}, [className])}>
            <div className={cls.header}>{header}</div>
            <div className={cls.container}>
                <div className={cls.pageHeader}>{pageHeader}</div>
                <div className={cls.page}>{page}</div>
            </div>
            {footer && <div className={cls.footer}>{footer}</div>}
        </div>
    )
})
MainLayout.displayName = 'MainLayout'

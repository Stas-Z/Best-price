import { memo } from 'react'

import { classNames } from '@/shared/lib/classNames/classNames'

import cls from './PageError.module.scss'

interface PageErrorProps {
    className?: string
}

export const PageError = memo(({ className }: PageErrorProps) => {
    const reloadPage = () => {
        window.location.reload()
    }

    return (
        <div className={classNames(cls.pageError, {}, [className])}>
            <p>Произошла непредвиденная ошибка</p>
            <button type="button" onClick={reloadPage}>
                Обновить страницу
            </button>
        </div>
    )
})
PageError.displayName = 'PageError'

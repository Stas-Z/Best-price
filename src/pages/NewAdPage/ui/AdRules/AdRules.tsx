import { memo } from 'react'

import { classNames } from '@/shared/lib/classNames/classNames'
import { AppLink } from '@/shared/ui/AppLink'

import cls from './AdRules.module.scss'

interface AdRulesProps {
    className?: string
    src: string
}

export const AdRules = memo((props: AdRulesProps) => {
    const { className, src } = props

    return (
        <div className={classNames(cls.adRules, {}, [className])}>
            <span>
                Вы публикуете объявление и данные в нём, чтобы их мог посмотреть
                кто угодно в интернете. Вы также соглашаетесь с{' '}
            </span>

            <AppLink to={src} className={cls.link}>
                правилами.
            </AppLink>
        </div>
    )
})
AdRules.displayName = 'AdRules'

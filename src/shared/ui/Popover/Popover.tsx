import { memo } from 'react'

import { classNames } from '@/shared/lib/classNames/classNames'

import cls from './Popover.module.scss'

interface PopoverProps {
    className?: string
    error?: string
}

export const Popover = memo((props: PopoverProps) => {
    const { className, error } = props

    if (!error) return null

    return (
        <div className={classNames(cls.popover, {}, [className])}>{error}</div>
    )
})
Popover.displayName = 'Popover'

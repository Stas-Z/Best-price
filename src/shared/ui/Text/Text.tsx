import { memo } from 'react'

import { classNames } from '@/shared/lib/classNames/classNames'

import cls from './Text.module.scss'

export type TextVariant =
    | 'normal'
    | 'primary'
    | 'error'
    | 'grey'
    | 'greyLight'
    | 'white'

export type TextAlign = 'right' | 'left' | 'center'

export type TextSize = 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl'

interface TextProps {
    className?: string
    title?: string
    text?: string
    variant?: TextVariant
    align?: TextAlign
    size?: TextSize
    bold?: boolean
    ellipsis?: boolean
}

type HeaderTagType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5'

const mapSizeToHeaderTag: Partial<Record<TextSize, HeaderTagType>> = {
    xs: 'h5',
    s: 'h4',
    m: 'h3',
    l: 'h2',
    xl: 'h1',
}

const mapSizeToClass: Record<TextSize, string> = {
    xxs: 'sizeXxs',
    xs: 'sizeXs',
    s: 'sizeS',
    m: 'sizeM',
    l: 'sizeL',
    xl: 'sizeXl',
}

export const Text = memo((props: TextProps) => {
    const {
        className,
        text,
        title,
        variant = 'normal',
        align = 'left',
        size = 'm',
        bold,
        ellipsis,
    } = props

    const HeaderTag = mapSizeToHeaderTag[size] || 'h5'
    const sizeClass = mapSizeToClass[size]

    const additionalClasses = [
        className,
        cls[variant],
        cls[align],
        cls[sizeClass],
    ]

    return (
        <div
            className={classNames(
                cls.text,
                { [cls.bold]: bold },
                additionalClasses,
            )}
        >
            {title && <HeaderTag className={cls.title}>{title}</HeaderTag>}
            {text && (
                <p
                    className={classNames(
                        cls.text,
                        { [cls.ellipsis]: ellipsis },
                        [],
                    )}
                >
                    {text}
                </p>
            )}
        </div>
    )
})

Text.displayName = 'Text'

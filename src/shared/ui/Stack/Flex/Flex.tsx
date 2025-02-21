import { ElementType } from 'react'

import { Mods, classNames } from '@/shared/lib/classNames/classNames'
import { PolymorphicComponentProp } from '@/shared/types/polymorphic'

import cls from './Flex.module.scss'

export type FlexJustify = 'start' | 'center' | 'end' | 'between'
export type FlexAlign = 'start' | 'center' | 'end' | 'unset'
export type FlexDirection = 'row' | 'column'
export type FlexWrap = 'nowrap' | 'wrap'
export type FlexGap = '4' | '8' | '16' | '24' | '32' | '48' | '60'

const justifyClasses: Record<FlexJustify, string> = {
    start: cls.justifyStart,
    center: cls.justifyCenter,
    end: cls.justifyEnd,
    between: cls.justifyBetween,
}

const alignClasses: Record<FlexAlign, string> = {
    start: cls.alignStart,
    center: cls.alignCenter,
    end: cls.alignEnd,
    unset: cls.alignUnset,
}

const directionClasses: Record<FlexDirection, string> = {
    column: cls.directionColumn,
    row: cls.directionRow,
}

const gapClasses: Record<FlexGap, string> = {
    4: cls.gap4,
    8: cls.gap8,
    16: cls.gap16,
    24: cls.gap24,
    32: cls.gap32,
    48: cls.gap48,
    60: cls.gap60,
}

export interface FlexProps {
    className?: string
    justify?: FlexJustify
    align?: FlexAlign
    direction?: FlexDirection
    gap?: FlexGap
    max?: boolean
    maxHeight?: boolean
    wrap?: FlexWrap
}

export const defaultFlexTag = 'div'

export const Flex = <E extends ElementType = typeof defaultFlexTag>(
    props: PolymorphicComponentProp<E, FlexProps>,
) => {
    const {
        className,
        children,
        justify = 'start',
        align = 'center',
        direction = 'row',
        gap,
        max,
        maxHeight,
        wrap = 'nowrap',
        as,
        ...otherProps
    } = props

    const classes = [
        className,
        justifyClasses[justify],
        alignClasses[align],
        directionClasses[direction],
        cls[wrap],
        gap && gapClasses[gap],
    ]

    const mods: Mods = {
        [cls.max]: max,
        [cls.maxHeight]: maxHeight,
    }
    const Tag = as ?? defaultFlexTag

    return (
        <Tag className={classNames(cls.flex, mods, classes)} {...otherProps}>
            {children}
        </Tag>
    )
}

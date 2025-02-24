import {
    ButtonHTMLAttributes,
    ForwardedRef,
    ReactNode,
    forwardRef,
} from 'react'

import { Mods, classNames } from '@/shared/lib/classNames/classNames'

import cls from './Button.module.scss'

export type ButtonVariant = 'outline' | 'filled' | 'primary' | 'select'

export type ButtonSize = 'm' | 'l'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    variant?: ButtonVariant
    disabled?: boolean
    children?: ReactNode
    checked?: boolean
    size?: ButtonSize
    addonRight?: ReactNode
    maxWidth?: boolean
}

export const Button = forwardRef(
    (props: ButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
        const {
            className,
            children,
            variant = 'outline',
            disabled,
            checked,
            size = 'm',
            addonRight,
            maxWidth,
            ...otherProps
        } = props

        const mods: Mods = {
            [cls.disabled]: disabled,
            [cls.maxWidth]: maxWidth,
        }
        const addClass = [className, cls[variant], cls[size]]

        return (
            <button
                type="button"
                disabled={disabled}
                className={classNames(cls.button, mods, addClass)}
                {...otherProps}
                ref={ref}
            >
                {children}
                {checked && <div className={cls.checkCircle}></div>}
                {addonRight && (
                    <div className={cls.addonRight}>{addonRight}</div>
                )}
            </button>
        )
    },
)

Button.displayName = 'Button'

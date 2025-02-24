import {
    ButtonHTMLAttributes,
    ForwardedRef,
    ReactNode,
    forwardRef,
} from 'react'

import { Mods, classNames } from '@/shared/lib/classNames/classNames'

import cls from './Button.module.scss'

export type ButtonVariant = 'outline' | 'filled'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    variant?: ButtonVariant
    disabled?: boolean
    children?: ReactNode
    checked?: boolean
}

export const Button = forwardRef(
    (props: ButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
        const {
            className,
            children,
            variant = 'outline',
            disabled,
            checked,
            ...otherProps
        } = props

        const mods: Mods = {
            [cls.disabled]: disabled,
        }
        const addClass = [className, cls[variant], cls.normal]

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
            </button>
        )
    },
)

Button.displayName = 'Button'

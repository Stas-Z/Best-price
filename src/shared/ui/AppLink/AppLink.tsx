import { ReactNode, Ref, forwardRef, memo } from 'react'

import { LinkProps, NavLink } from 'react-router-dom'

import { classNames } from '@/shared/lib/classNames/classNames'

import cls from './AppLink.module.scss'

interface AppLinkProps extends LinkProps {
    className?: string
    children?: ReactNode
    activeClassName?: string
    underline?: boolean
}

const AppLink = forwardRef(
    (props: AppLinkProps, ref: Ref<HTMLAnchorElement>) => {
        const {
            to,
            className,
            children,
            activeClassName = '',
            underline,
            ...otherProps
        } = props

        return (
            <NavLink
                ref={ref}
                to={to}
                className={({ isActive }) =>
                    classNames(
                        cls.appLink,
                        {
                            [activeClassName]: isActive,
                            [cls.underline]: underline,
                        },
                        [className],
                    )
                }
                {...otherProps}
            >
                {children}
            </NavLink>
        )
    },
)
export default memo(AppLink)

AppLink.displayName = 'AppLink'

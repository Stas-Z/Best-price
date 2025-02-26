import { memo } from 'react'

import { BackButton } from '@/features/BackButton'
import Logo from '@/shared/assets/icons/logo.svg'
import Profile from '@/shared/assets/icons/profile.svg'
import { classNames } from '@/shared/lib/classNames/classNames'
import { useDevice } from '@/shared/lib/hooks/useDevice/useDevice'
import { Icon } from '@/shared/ui/Icon'
import { HStack } from '@/shared/ui/Stack'

import cls from './Header.module.scss'

interface HeaderProps {
    className?: string
}

export const Header = memo((props: HeaderProps) => {
    const { className } = props

    const isMobile = useDevice()

    const content = (
        <HStack max justify="between">
            <BackButton />
            <Icon Svg={Logo} width={51} height={42} />
            <Icon Svg={Profile} width={40} height={40} />
        </HStack>
    )

    return (
        <HStack
            max
            justify="between"
            className={classNames(cls.header, { [cls.mobile]: isMobile }, [
                className,
            ])}
        >
            {isMobile && content}
        </HStack>
    )
})
Header.displayName = 'Header'

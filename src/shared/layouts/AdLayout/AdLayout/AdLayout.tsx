import { memo, ReactNode } from 'react'

import { useDevice } from '@/shared/lib/hooks/useDevice/useDevice'
import { HStack, VStack } from '@/shared/ui/Stack'
import { Text } from '@/shared/ui/Text'

import cls from './AdLayout.module.scss'

interface AdLayoutProps {
    title?: ReactNode
    left?: string
    right?: ReactNode
    onClick?: () => void
}

export const AdLayout = memo((props: AdLayoutProps) => {
    const { left, right } = props

    const isMobile = useDevice()

    return (
        <HStack gap="24" className={cls.adBlock} max align="start">
            <Text text={left} size="m" className={cls.left} />
            <VStack max gap="16" className={cls.right}>
                {right}
            </VStack>
        </HStack>
    )
})
AdLayout.displayName = 'AdLayout'

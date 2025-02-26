import { memo, ReactNode } from 'react'

import useWindowWidth from '@/shared/lib/hooks/useWindowWidth/useWindowWidth'
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

    const small = useWindowWidth({ maxWidth: 576 })
    const content = (
        <>
            <Text text={left} size="m" className={cls.left} />
            <VStack max gap="16" className={cls.right}>
                {right}
            </VStack>
        </>
    )
    if (small) {
        return (
            <VStack gap="16" className={cls.adBlock} max align="start">
                {content}
            </VStack>
        )
    }

    return (
        <HStack gap="24" className={cls.adBlock} max align="start">
            {content}
        </HStack>
    )
})
AdLayout.displayName = 'AdLayout'

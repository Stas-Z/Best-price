import { memo, ReactNode } from 'react'

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

    return (
        <HStack gap="24" className={cls.adBlock} max>
            <Text text={left} size="m" className={cls.left} />
            <VStack max gap="16" className={cls.right}>
                {right}
            </VStack>
            <div className={cls.right}></div>
        </HStack>
    )
})
AdLayout.displayName = 'AdLayout'

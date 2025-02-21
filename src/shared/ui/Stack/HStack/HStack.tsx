import { ElementType, forwardRef } from 'react'

import { PolymorphicComponentProp } from '@/shared/types/polymorphic'

import { Flex, FlexProps, defaultFlexTag } from '../Flex/Flex'

type HStackProps = Omit<FlexProps, 'direction'>

export const HStack = forwardRef(
    <E extends ElementType = typeof defaultFlexTag>(
        props: PolymorphicComponentProp<E, HStackProps>,
        ref: React.Ref<HTMLDivElement>,
    ) => {
        const { as, ...otherProps } = props
        const tag: ElementType = as ?? defaultFlexTag

        return <Flex ref={ref} direction="row" as={tag} {...otherProps} />
    },
)
HStack.displayName = 'HStack'

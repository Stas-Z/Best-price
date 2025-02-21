import { ElementType, forwardRef } from 'react'

import { PolymorphicComponentProp } from '@/shared/types/polymorphic'

import { Flex, FlexProps, defaultFlexTag } from '../Flex/Flex'

type VStackProps = Omit<FlexProps, 'direction'>

export const VStack = forwardRef(
    <E extends ElementType = typeof defaultFlexTag>(
        props: PolymorphicComponentProp<E, VStackProps>,
        ref: React.Ref<HTMLDivElement>,
    ) => {
        const { as, align = 'start', ...otherProps } = props
        const tag: ElementType = as ?? defaultFlexTag

        return (
            <Flex
                ref={ref}
                direction="column"
                as={tag}
                align={align}
                {...otherProps}
            />
        )
    },
)
VStack.displayName = 'VStack'

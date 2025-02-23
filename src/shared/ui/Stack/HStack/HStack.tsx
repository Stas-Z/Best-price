import { ElementType } from 'react'

import { PolymorphicComponentProp } from '@/shared/types/polymorphic'

import { Flex, FlexProps, defaultFlexTag } from '../Flex/Flex'

type HStackProps = Omit<FlexProps, 'direction'>

export const HStack = <E extends ElementType = typeof defaultFlexTag>(
    props: PolymorphicComponentProp<E, HStackProps>,
) => {
    const { as, ...otherProps } = props
    const tag: ElementType = as ?? defaultFlexTag

    return <Flex direction="row" as={tag} {...otherProps} />
}

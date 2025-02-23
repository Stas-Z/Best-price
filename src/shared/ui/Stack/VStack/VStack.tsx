import { ElementType } from 'react'

import { PolymorphicComponentProp } from '@/shared/types/polymorphic'

import { Flex, FlexProps, defaultFlexTag } from '../Flex/Flex'

type VStackProps = Omit<FlexProps, 'direction'>

export const VStack = <E extends ElementType = typeof defaultFlexTag>(
    props: PolymorphicComponentProp<E, VStackProps>,
) => {
    const { as, align = 'start', ...otherProps } = props
    const tag: ElementType = as ?? defaultFlexTag

    return <Flex direction="column" as={tag} align={align} {...otherProps} />
}

import { memo, ReactNode } from 'react'

import { ErrorMessage } from '@hookform/error-message'
import { FieldErrors, FieldValues } from 'react-hook-form'

import { ErrorName } from '@/app/types/errorNames'

import { AppLink } from '../AppLink'
import { Popover } from '../Popover'
import { Text } from '../Text'

interface BlockAdRightBaseProps {
    interaction?: ReactNode
    errors?: FieldErrors<FieldValues>
    errorName?: ErrorName
    description?: string
}

interface NonLinkProps extends BlockAdRightBaseProps {
    link?: false
}

interface linkProps extends BlockAdRightBaseProps {
    link?: true
    src: string
}

type BlockAdRightProps = NonLinkProps | linkProps

export const BlockAdRight = memo((props: BlockAdRightProps) => {
    const { errorName, interaction, errors, description, link } = props

    return (
        <>
            {interaction && interaction}
            {errors && (
                <ErrorMessage
                    errors={errors}
                    name={errorName || ''}
                    render={({ message }) => <Popover error={message} />}
                />
            )}

            {description && !link && (
                <Text text={description} variant="grey" size="s" />
            )}
            {link && (
                <AppLink to={props.src} underline>
                    <Text text={description} variant="grey" size="s" />
                </AppLink>
            )}
        </>
    )
})
BlockAdRight.displayName = 'BlockAdRight'

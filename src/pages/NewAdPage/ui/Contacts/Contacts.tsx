import { memo, useCallback } from 'react'

import { useFormContext } from 'react-hook-form'

import { CommunicationSelect } from '@/entities/Communication'
import { AdLayout } from '@/shared/layouts/AdLayout'
import { classNames } from '@/shared/lib/classNames/classNames'
import { BlockAdRight } from '@/shared/ui/BlockAdRight'
import { Input } from '@/shared/ui/Input'
import { VStack } from '@/shared/ui/Stack'
import { Text } from '@/shared/ui/Text'

import { ContactsType } from '../../model/schema/contactsSchema'

interface ContactsProps {
    className?: string
}

export const Contacts = memo((props: ContactsProps) => {
    const { className } = props

    const {
        register,
        formState: { errors },
        clearErrors,
        watch,
        setValue,
    } = useFormContext<ContactsType>()

    const handleClearErrors = useCallback(() => {
        if (!Object.keys(errors).length) return
        clearErrors()
    }, [clearErrors, errors])

    const telephoneValue = watch('telephone')

    return (
        <VStack
            max
            className={classNames('', {}, [className])}
            onClick={handleClearErrors}
            gap="24"
        >
            <Text title="Контакты" size="l" />
            <AdLayout
                left="Телефон"
                right={
                    <BlockAdRight
                        interaction={
                            <Input
                                value={telephoneValue}
                                placeholder="8 ___ ___ - __ - __ "
                                required
                                {...register('telephone')}
                            />
                        }
                        errors={errors}
                        errorName="telephone"
                        description="Чтобы ваши номера не попали в базы мошенников, мы показываем вместо них подменные, а звонки переводим вам. Эту защиту нельзя отключить."
                        link
                        src="/"
                        linkDescription="Подробнее"
                    />
                }
            />
            <AdLayout
                left="Способ связи"
                right={<BlockAdRight interaction={<CommunicationSelect />} />}
            />
        </VStack>
    )
})
Contacts.displayName = 'Contacts'

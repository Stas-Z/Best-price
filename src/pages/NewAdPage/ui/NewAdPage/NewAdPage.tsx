import { memo } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'

import { Communication } from '@/entities/Communication'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Button } from '@/shared/ui/Button'
import { HStack, VStack } from '@/shared/ui/Stack'

import cls from './NewAdPage.module.scss'
import { DetailsType } from '../../model/schema/detailsSchema'
import { adSchema } from '../../model/schema/newAdSchema'
import { ParametersType } from '../../model/schema/parametersSchema'
import { PlaceTypes } from '../../model/schema/placeSchema'
import { Contacts } from '../Contacts/Contacts'
import { DetailsAd } from '../DetailsAd/DetailsAd'
import { Parameters } from '../Parameters/Parameters'
import { TransactionPlace } from '../TransactionPlace/TransactionPlace'
interface NewAdPageProps {
    className?: string
}

const NewAdPage = (props: NewAdPageProps) => {
    const { className } = props

    const firstCommunicationOption = Object.keys(Communication)[0]

    const methods = useForm({
        resolver: zodResolver(adSchema),
        defaultValues: {
            images: [],
            city: '',
            communication: firstCommunicationOption,
        },
    })
    const onSubmit: SubmitHandler<ParametersType & DetailsType & PlaceTypes> = (
        data,
    ) => {
        console.log('Форма успешно отправлена', data)
        alert('Объявление успешно создано и отправлено на модерацию')
    }

    return (
        <FormProvider {...methods}>
            <form
                onSubmit={methods.handleSubmit(onSubmit)}
                className={classNames(cls.newAdPage, {}, [className])}
            >
                <VStack gap="24">
                    <Parameters />
                    <DetailsAd />
                    <TransactionPlace />
                    <Contacts />
                </VStack>
                <HStack gap="16">
                    <Button type="submit" variant="primary" size="l">
                        Разместить обьявление
                    </Button>
                    <Button variant="outline">Сохранить и выйти</Button>
                </HStack>
            </form>
        </FormProvider>
    )
}

export default memo(NewAdPage)

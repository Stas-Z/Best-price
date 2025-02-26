import { memo, useCallback, useState } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'

import { Communication } from '@/features/CommunicationSelect'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Button } from '@/shared/ui/Button'
import { HStack, VStack } from '@/shared/ui/Stack'

import cls from './NewAdPage.module.scss'
import { DetailsType } from '../../model/schema/detailsSchema'
import { adSchema } from '../../model/schema/newAdSchema'
import { ParametersType } from '../../model/schema/parametersSchema'
import { PlaceTypes } from '../../model/schema/placeSchema'
import { AddNewModal } from '../AddNewModal/AddNewModal'
import { AdRules } from '../AdRules/AdRules'
import { Contacts } from '../Contacts/Contacts'
import { DetailsAd } from '../DetailsAd/DetailsAd'
import { Parameters } from '../Parameters/Parameters'
import { TransactionPlace } from '../TransactionPlace/TransactionPlace'
interface NewAdPageProps {
    className?: string
}

const NewAdPage = (props: NewAdPageProps) => {
    const { className } = props

    const [isAuthModal, setIsAuthModal] = useState(false)

    const firstCommunicationOption = Object.keys(Communication)[0]

    const methods = useForm({
        resolver: zodResolver(adSchema),
        defaultValues: {
            images: [],
            city: '',
            communication: firstCommunicationOption,
        },
    })

    const { reset } = methods

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false)
        reset()
    }, [reset])

    const onShowModal = useCallback(() => {
        setIsAuthModal(true)
    }, [])

    const onSubmit: SubmitHandler<ParametersType & DetailsType & PlaceTypes> = (
        data,
    ) => {
        console.log('Форма успешно отправлена', data)
        onShowModal()
    }

    return (
        <FormProvider {...methods}>
            <form
                onSubmit={methods.handleSubmit(onSubmit)}
                className={classNames(cls.newAdPage, {}, [className])}
            >
                <VStack gap="24" className={cls.pageWrapper}>
                    <Parameters isOpen={isAuthModal} />
                    <DetailsAd />
                    <TransactionPlace />
                    <Contacts />
                </VStack>
                <VStack gap="24">
                    <HStack gap="16" className={cls.buttons} align="start">
                        <Button
                            type="submit"
                            variant="primary"
                            size="l"
                            className={cls.submitButton}
                        >
                            Разместить обьявление
                        </Button>
                        <Button variant="outline">Сохранить и выйти</Button>
                    </HStack>
                    <AdRules src="/" />
                </VStack>

                <AddNewModal isOpen={isAuthModal} onClose={onCloseModal} />
            </form>
        </FormProvider>
    )
}

export default memo(NewAdPage)

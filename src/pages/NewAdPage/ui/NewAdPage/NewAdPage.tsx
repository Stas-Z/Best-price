import { memo } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'

import { classNames } from '@/shared/lib/classNames/classNames'
import { Button } from '@/shared/ui/Button'

import cls from './NewAdPage.module.scss'
import { DetailsType } from '../../model/schema/detailsSchema'
import { adSchema } from '../../model/schema/newAdSchema'
import { ParametersType } from '../../model/schema/parametersSchema'
import { PlaceTypes } from '../../model/schema/placeSchema'
import { DetailsAd } from '../DetailsAd/DetailsAd'
import { Parameters } from '../Parameters/Parameters'
import { TransactionPlace } from '../TransactionPlace'
interface NewAdPageProps {
    className?: string
}

const NewAdPage = (props: NewAdPageProps) => {
    const { className } = props

    const methods = useForm({
        resolver: zodResolver(adSchema),
        defaultValues: {
            images: [],
            city: '',
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
            <form onSubmit={methods.handleSubmit(onSubmit)}>
                <div className={classNames(cls.newAdPage, {}, [className])}>
                    <Parameters />
                    <DetailsAd />
                    <TransactionPlace />
                    <Button type="submit" variant="primary" size="l">
                        Разместить обьявление
                    </Button>
                </div>
            </form>
        </FormProvider>
    )
}

export default memo(NewAdPage)

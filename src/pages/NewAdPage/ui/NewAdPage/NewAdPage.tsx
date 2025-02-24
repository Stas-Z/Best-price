import { memo } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'

import { Parameters, ParametersType } from '@/features/Parameters'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Button } from '@/shared/ui/Button'

import cls from './NewAdPage.module.scss'
import { adSchema } from '../../model/schema/newAdSchema'
interface NewAdPageProps {
    className?: string
}

const NewAdPage = (props: NewAdPageProps) => {
    const { className } = props

    const methods = useForm({
        resolver: zodResolver(adSchema),
    })
    const onSubmit: SubmitHandler<ParametersType> = (data) => {
        console.log('Форма успешно отправлена', data)
        alert('Объявление успешно создано и отправлено на модерацию')
    }

    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
                <div className={classNames(cls.newAdPage, {}, [className])}>
                    <Parameters />
                    <Button type="submit">Разместить</Button>
                </div>
            </form>
        </FormProvider>
    )
}

export default memo(NewAdPage)

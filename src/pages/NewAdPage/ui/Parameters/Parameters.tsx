import { memo, useCallback } from 'react'

import { useFormContext } from 'react-hook-form'

import { ConditionTypeSelect } from '@/features/ConditionTypeSelect'
import { SaleTypeSelect } from '@/features/SaleTypeSelect'
import { SaleTypeSelectMobile } from '@/features/SaleTypeSelect'
import { AdLayout } from '@/shared/layouts/AdLayout'
import { classNames } from '@/shared/lib/classNames/classNames'
import { useDevice } from '@/shared/lib/hooks/useDevice/useDevice'
import { BlockAdRight } from '@/shared/ui/BlockAdRight'
import { Input } from '@/shared/ui/Input'
import { VStack } from '@/shared/ui/Stack'
import { Text } from '@/shared/ui/Text'

import cls from './Parameters.module.scss'
import { ParametersType } from '../../model/schema/parametersSchema'

interface ParametersProps {
    className?: string
    isOpen?: boolean
}

export const Parameters = memo((props: ParametersProps) => {
    const { className, isOpen } = props

    const isMobile = useDevice()

    const {
        register,
        formState: { errors },
        clearErrors,
        watch,
    } = useFormContext<ParametersType>()

    const handleClearErrors = useCallback(() => {
        if (!Object.keys(errors).length) return
        clearErrors()
    }, [clearErrors, errors])

    const fieldValue = watch('title')

    return (
        <VStack
            max
            className={classNames(cls.parameters, {}, [className])}
            onClick={handleClearErrors}
            gap="24"
        >
            <Text title="Параметры" size="l" className={cls.title} />

            <AdLayout
                left="Название объявления"
                right={
                    <BlockAdRight
                        interaction={
                            <Input
                                value={fieldValue}
                                placeholder="Название"
                                required
                                {...register('title')}
                            />
                        }
                        errors={errors}
                        errorName="title"
                        description="Например, «iPhone 6S Plus серый космос 32 гб» или «Фотоаппарат Canon 700D Kit 18-55»"
                    />
                }
            />
            <AdLayout
                left="Состояние"
                right={
                    <BlockAdRight
                        interaction={<ConditionTypeSelect isOpen={isOpen} />}
                        linkDescription="Какую вещь можно считать новой"
                        link
                        src={'/'}
                        errors={errors}
                        errorName="condition"
                    />
                }
            />
            <AdLayout
                left="Вид объявления"
                right={
                    <BlockAdRight
                        interaction={
                            <>
                                {isMobile ? (
                                    <SaleTypeSelectMobile />
                                ) : (
                                    <SaleTypeSelect isOpen={isOpen} />
                                )}
                            </>
                        }
                        errors={errors}
                        errorName="sale"
                    />
                }
            />
        </VStack>
    )
})
Parameters.displayName = 'Parameters'

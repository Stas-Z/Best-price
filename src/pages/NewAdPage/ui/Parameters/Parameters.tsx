import { memo, useCallback, useState } from 'react'

import { useFormContext } from 'react-hook-form'

import { AdLayout } from '@/shared/layouts/AdLayout'
import { classNames } from '@/shared/lib/classNames/classNames'
import { BlockAdRight } from '@/shared/ui/BlockAdRight'
import { Button } from '@/shared/ui/Button'
import { Input } from '@/shared/ui/Input'
import { HStack, VStack } from '@/shared/ui/Stack'
import { Text } from '@/shared/ui/Text'

import cls from './Parameters.module.scss'
import {
    conditionType,
    ConditionTypes,
    saleType,
    SaleTypes,
} from '../../model/consts/selectSaleType'
import { ParametersType } from '../../model/schema/parametersSchema'

interface ParametersProps {
    className?: string
}

export const Parameters = memo((props: ParametersProps) => {
    const { className } = props

    const [conditionTypeState, setConditionTypeState] = useState<string>('')
    const [saleTypeState, setSaleTypeState] = useState<string>('')

    const {
        register,
        formState: { errors },
        clearErrors,
        setValue,
        watch,
    } = useFormContext<ParametersType>()

    const handleClearErrors = useCallback(() => {
        if (!Object.keys(errors).length) return
        clearErrors()
    }, [clearErrors, errors])

    const handleSaleTypeSelect = (type: SaleTypes) => {
        setSaleTypeState(type)
        setValue('sale', type)
    }
    const handleConditionTypeSelect = (type: ConditionTypes) => {
        setConditionTypeState(type)
        setValue('condition', type)
    }
    const fieldValue = watch('title')

    return (
        <>
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
                            interaction={
                                <HStack gap="8">
                                    <Button
                                        onClick={() =>
                                            handleConditionTypeSelect(
                                                conditionType.NEW,
                                            )
                                        }
                                        checked={
                                            conditionTypeState ===
                                            conditionType.NEW
                                        }
                                        variant="filled"
                                        {...register('condition')}
                                    >
                                        Новое
                                    </Button>
                                    <Button
                                        onClick={() =>
                                            handleConditionTypeSelect(
                                                conditionType.OLD,
                                            )
                                        }
                                        checked={
                                            conditionTypeState ===
                                            conditionType.OLD
                                        }
                                        variant="outline"
                                        {...register('condition')}
                                    >
                                        Б/У
                                    </Button>
                                </HStack>
                            }
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
                                <HStack gap="8">
                                    <Button
                                        variant="filled"
                                        onClick={() =>
                                            handleSaleTypeSelect(
                                                saleType.FOR_SELF,
                                            )
                                        }
                                        checked={
                                            saleTypeState === saleType.FOR_SELF
                                        }
                                        {...register('sale')}
                                    >
                                        Покупал для себя
                                    </Button>
                                    <Button
                                        variant="outline"
                                        onClick={() =>
                                            handleSaleTypeSelect(
                                                saleType.FOR_SALE,
                                            )
                                        }
                                        checked={
                                            saleTypeState === saleType.FOR_SALE
                                        }
                                        {...register('sale')}
                                    >
                                        Покупал для перепродажи
                                    </Button>
                                </HStack>
                            }
                            errors={errors}
                            errorName="sale"
                        />
                    }
                />
            </VStack>
        </>
    )
})
Parameters.displayName = 'Parameters'

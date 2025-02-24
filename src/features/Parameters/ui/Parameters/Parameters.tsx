import { memo, useCallback, useState } from 'react'

import { useFormContext } from 'react-hook-form'

import { classNames } from '@/shared/lib/classNames/classNames'
import { AppLink } from '@/shared/ui/AppLink'
import { Button } from '@/shared/ui/Button'
import { Input } from '@/shared/ui/Input'
import { Popover } from '@/shared/ui/Popover'
import { HStack, VStack } from '@/shared/ui/Stack'
import { Text } from '@/shared/ui/Text'

import cls from './Parameters.module.scss'
import {
    conditionType,
    selectSaleType,
    selectSaleTypes,
} from '../../model/consts/selectSaleType'

interface ParametersProps {
    className?: string
}

export const Parameters = memo((props: ParametersProps) => {
    const { className } = props

    const [selectedConditionType, setConditionType] = useState<string>('')
    const [selectedType, setSelectedType] = useState<string>('')

    const {
        register,
        formState: { errors },
        clearErrors,
        setValue,
        watch,
    } = useFormContext()

    const handleClearErrors = useCallback(() => {
        if (!Object.keys(errors).length) return
        clearErrors()
    }, [clearErrors, errors])

    const handleTypeSelect = (type: selectSaleTypes) => {
        setSelectedType(type)
        setValue('type', type)
    }
    const fieldValue = watch('title')

    return (
        <VStack
            max
            className={classNames(cls.parameters, {}, [className])}
            onClick={handleClearErrors}
        >
            <Text title="Параметры" size="l" className={cls.title} />
            <HStack gap="24" className={cls.name} max>
                <Text
                    text="Название объявления"
                    size="m"
                    className={cls.label}
                />
                <VStack max gap="16" className={cls.inputWrapper}>
                    <Input
                        value={fieldValue}
                        placeholder={
                            <Text text="Название" variant="grey" size="m" />
                        }
                        required
                        {...register('title')}
                    />
                    {errors.title && (
                        <Popover error={String(errors.title.message)} />
                    )}

                    <Text
                        text="Например, «iPhone 6S Plus серый космос 32 гб» или «Фотоаппарат Canon 700D Kit 18-55»"
                        variant="grey"
                        size="s"
                    />
                </VStack>
            </HStack>
            <HStack gap="24" max className={cls.name}>
                <Text text="Состояние" size="m" className={cls.label} />
                <VStack max gap="16" className={cls.inputWrapper}>
                    <HStack gap="8">
                        <Button
                            onClick={() => setConditionType(conditionType.NEW)}
                            checked={
                                selectedConditionType === conditionType.NEW
                            }
                            variant="filled"
                        >
                            Новое
                        </Button>
                        <Button
                            onClick={() => setConditionType(conditionType.OLD)}
                            checked={
                                selectedConditionType === conditionType.OLD
                            }
                            variant="outline"
                        >
                            Б/У
                        </Button>
                    </HStack>
                    <AppLink to={'/'} underline>
                        <Text
                            text="Какую вещь можно считать новой"
                            variant="grey"
                            size="s"
                        />
                    </AppLink>
                </VStack>
            </HStack>
            <HStack gap="24" max className={cls.name}>
                <Text text="Вид объявления" size="m" className={cls.label} />
                <VStack max gap="16" className={cls.inputWrapper}>
                    <HStack gap="8">
                        <Button
                            variant="filled"
                            onClick={() =>
                                handleTypeSelect(selectSaleType.FOR_SELF)
                            }
                            checked={selectedType === selectSaleType.FOR_SELF}
                            {...register('type')}
                        >
                            Покупал для себя
                        </Button>
                        <Button
                            variant="outline"
                            onClick={() =>
                                handleTypeSelect(selectSaleType.FOR_SALE)
                            }
                            checked={selectedType === selectSaleType.FOR_SALE}
                            {...register('type')}
                        >
                            Покупал для перепродажи
                        </Button>
                    </HStack>
                    {errors.type && (
                        <Popover error={String(errors.type.message)} />
                    )}
                </VStack>
            </HStack>
        </VStack>
    )
})
Parameters.displayName = 'Parameters'

import { memo, useEffect, useState } from 'react'

import { useFormContext } from 'react-hook-form'

import { classNames } from '@/shared/lib/classNames/classNames'
import useWindowWidth from '@/shared/lib/hooks/useWindowWidth/useWindowWidth'
import { Button } from '@/shared/ui/Button'
import { HStack } from '@/shared/ui/Stack'

import {
    conditionType,
    ConditionTypes,
} from '../../model/consts/conditionSaleType'
import { SelectConditionTypes } from '../../model/schema/conditionTypeSchema'

interface SaleTypeSelectProps {
    className?: string
    isOpen?: boolean
}

export const ConditionTypeSelect = memo((props: SaleTypeSelectProps) => {
    const { className, isOpen } = props
    const [conditionTypeState, setConditionTypeState] = useState<string>('')

    const tablet = useWindowWidth({ maxWidth: 1000 })

    const { register, setValue } = useFormContext<SelectConditionTypes>()

    const handleConditionTypeSelect = (type: ConditionTypes) => {
        setConditionTypeState(type)
        setValue('condition', type)
    }

    useEffect(() => {
        if (!isOpen) {
            setConditionTypeState('')
        }
    }, [isOpen])

    return (
        <HStack
            gap={tablet ? '12' : '8'}
            className={classNames('', {}, [className])}
        >
            <Button
                onClick={() => handleConditionTypeSelect(conditionType.NEW)}
                checked={conditionTypeState === conditionType.NEW}
                variant="filled"
                {...register('condition')}
            >
                Новое
            </Button>
            <Button
                onClick={() => handleConditionTypeSelect(conditionType.OLD)}
                checked={conditionTypeState === conditionType.OLD}
                variant="outline"
                {...register('condition')}
            >
                Б/У
            </Button>
        </HStack>
    )
})
ConditionTypeSelect.displayName = 'ConditionTypeSelect'

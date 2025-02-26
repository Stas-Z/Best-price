import { memo, useMemo } from 'react'

import { Controller } from 'react-hook-form'

import { classNames } from '@/shared/lib/classNames/classNames'
import useWindowWidth from '@/shared/lib/hooks/useWindowWidth/useWindowWidth'
import { Combobox } from '@/shared/ui/Combobox'
import { VStack } from '@/shared/ui/Stack'

import { City } from '../../../model/consts/cityConsts'
import { CitySelectProps } from '../CitySelect'

export const CitySelectMobile = memo((props: CitySelectProps) => {
    const { className } = props

    const small = useWindowWidth({ maxWidth: 696 })

    const cityOptions = useMemo(
        () =>
            Object.entries(City).map((val) => ({
                value: val[0],
                content: val[1],
            })),
        [],
    )
    const placeholder = small
        ? 'Начните вводить адрес'
        : 'Начните вводить адрес, а потом выберите из списка'

    return (
        <VStack max className={classNames('', {}, [className])}>
            <Controller
                name="city"
                render={({ field }) => (
                    <Combobox
                        placeholder={placeholder}
                        required
                        items={cityOptions}
                        {...field}
                    />
                )}
            />
        </VStack>
    )
})
CitySelectMobile.displayName = 'CitySelectMobile'

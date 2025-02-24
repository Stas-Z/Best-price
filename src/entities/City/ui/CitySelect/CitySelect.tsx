import { memo, useMemo } from 'react'

import { Controller } from 'react-hook-form'

import { classNames } from '@/shared/lib/classNames/classNames'
import { ListBox } from '@/shared/ui/Popups'

import cls from './CitySelect.module.scss'
import { City } from '../../model/consts/cityConsts'

interface CitySelectProps {
    className?: string
}

export const CitySelect = memo((props: CitySelectProps) => {
    const { className } = props

    const cityOptions = useMemo(
        () =>
            Object.entries(City).map((val) => ({
                value: val[0],
                content: val[1],
            })),
        [],
    )

    return (
        <div className={classNames(cls.citySelect, {}, [className])}>
            <Controller
                name="city"
                render={({ field }) => (
                    <ListBox
                        defaultValue="Выберите город"
                        items={cityOptions}
                        {...field}
                    />
                )}
            />
        </div>
    )
})
CitySelect.displayName = 'CitySelect'

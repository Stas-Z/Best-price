import { memo, useMemo } from 'react'

import { Controller } from 'react-hook-form'

import { classNames } from '@/shared/lib/classNames/classNames'
import { ListBox } from '@/shared/ui/ListBox'

import cls from './SaleTypeSelectMobile.module.scss'
import { saleType } from '../../model/consts/selectSaleType'

interface SaleTypeSelectMobileProps {
    className?: string
}

export const SaleTypeSelectMobile = memo((props: SaleTypeSelectMobileProps) => {
    const { className } = props

    const saleOptions = useMemo(() => {
        return Object.entries(saleType).map(([_, value]) => ({
            value,
            content: value,
        }))
    }, [])

    return (
        <div className={classNames(cls.saleTypeSelect, {}, [className])}>
            <Controller
                name="sale"
                render={({ field }) => (
                    <ListBox
                        {...field}
                        items={saleOptions}
                        placeHolder="Выберите вид объявления"
                        required
                    />
                )}
            />
        </div>
    )
})
SaleTypeSelectMobile.displayName = 'SaleTypeSelectMobile'

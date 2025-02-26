import { memo, useMemo } from 'react'

import { Controller } from 'react-hook-form'

import { classNames } from '@/shared/lib/classNames/classNames'
import { ListBox } from '@/shared/ui/ListBox'

import cls from './CommunicationSelect.module.scss'
import { Communication } from '../../model/consts/comunicationConsts'

export interface CommunicationSelectProps {
    className?: string
}

const CommunicationSelect = (props: CommunicationSelectProps) => {
    const { className } = props

    const comunicationOptions = useMemo(
        () =>
            Object.entries(Communication).map((val) => ({
                value: val[0],
                content: val[1],
            })),
        [],
    )
    return (
        <div className={classNames(cls.comunicationSelect, {}, [className])}>
            <Controller
                name="communication"
                render={({ field }) => (
                    <ListBox items={comunicationOptions} {...field} />
                )}
            />
        </div>
    )
}
export default memo(CommunicationSelect)

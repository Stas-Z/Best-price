import { Fragment, ReactNode, useMemo } from 'react'

import {
    Listbox as HListbox,
    ListboxButton,
    ListboxOption,
    ListboxOptions,
} from '@headlessui/react'

import ArrowIcon from '@/shared/assets/icons/arrow.svg'
import { classNames, Mods } from '@/shared/lib/classNames/classNames'
import { typedMemo } from '@/shared/lib/react/typedMemo/typedMemo'

import cls from './ListBox.module.scss'
import { Button } from '../../../Button'
import { Icon } from '../../../Icon'
import { HStack } from '../../../Stack'

export interface ListBoxItem<T extends string> {
    value: T
    content: ReactNode
}

interface ListBoxProps<T extends string> {
    className?: string
    items?: ListBoxItem<T>[]
    value?: T
    placeHolder?: string
    onChange?: (value: T) => void
    required?: boolean
}

export const ListBox = typedMemo(<T extends string>(props: ListBoxProps<T>) => {
    const { className, items, placeHolder, value, onChange, required } = props

    const selectedItem = useMemo(() => {
        return items?.find((item) => item.value === value)
    }, [items, value])

    const mods: Mods = {
        [cls.required]: required,
    }

    return (
        <HStack gap="8" className={classNames('', mods, [cls.popup])}>
            <HListbox
                as="div"
                className={classNames(cls.listBox, {}, [className])}
                onChange={onChange}
            >
                <ListboxButton
                    as={Button}
                    variant="select"
                    addonRight={<Icon Svg={ArrowIcon} color="#343330" />}
                    maxWidth
                >
                    {selectedItem?.content ?? (
                        <div className={cls.placeholder}>{placeHolder}</div>
                    )}
                </ListboxButton>
                <ListboxOptions
                    className={classNames(cls.options, {}, [cls.menu])}
                >
                    {items?.map((item) => (
                        <ListboxOption
                            key={item.value}
                            value={item.value}
                            as={Fragment}
                        >
                            {({ focus, selected }) => {
                                return (
                                    <li
                                        className={classNames(cls.item, {
                                            [cls.active]: focus,
                                            [cls.selected]: selected,
                                        })}
                                    >
                                        <span>{item.content}</span>
                                        {selected}
                                    </li>
                                )
                            }}
                        </ListboxOption>
                    ))}
                </ListboxOptions>
            </HListbox>
        </HStack>
    )
})

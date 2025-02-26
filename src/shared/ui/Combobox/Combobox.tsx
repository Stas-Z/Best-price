import {
    Fragment,
    ReactNode,
    Ref,
    useCallback,
    useMemo,
    useRef,
    useState,
} from 'react'

import {
    Combobox as HCombobox,
    ComboboxInput,
    ComboboxOption,
    ComboboxOptions,
} from '@headlessui/react'

import { classNames, Mods } from '@/shared/lib/classNames/classNames'
import { mergeRefs } from '@/shared/lib/mergeRefs/mergeRefs'
import { typedMemo } from '@/shared/lib/react/typedMemo/typedMemo'

import cls from './Combobox.module.scss'
import { HStack, VStack } from '../Stack'

export interface ComboboxItem<T extends string> {
    value: T
    content: ReactNode
}

interface ComboboxProps<T extends string> {
    className?: string
    items?: ComboboxItem<T>[]
    value?: T
    placeholder?: string
    onChange?: (value: T) => void
    required?: boolean
}

export const Combobox = typedMemo(
    <T extends string>(props: ComboboxProps<T>) => {
        const {
            className,
            items,
            onChange,
            placeholder,
            required,
            value,
            ...otherProps
        } = props

        const [isFocused, setIsFocused] = useState(false)

        const onBlur = () => {
            setIsFocused(false)
        }

        const onFocus = () => {
            setIsFocused(true)
        }

        const [query, setQuery] = useState('')

        const filteredItems =
            query === ''
                ? items
                : items &&
                  items.filter((item) => {
                      return item.value
                          .toLowerCase()
                          .includes(query.toLowerCase())
                  })

        const inputRef = useRef<HTMLInputElement | null>(null)

        const { ref: externalRef, ...restProps } = otherProps as {
            ref?: Ref<HTMLInputElement>
        } & Record<string, unknown>

        const onClickPlaceholder = useCallback(() => {
            if (inputRef.current) {
                inputRef.current.focus()
            }
        }, [])

        const mods: Mods = {
            [cls.focused]: isFocused,
            [cls.required]: required,
        }

        const selectedItem = useMemo(() => {
            return items?.find((item) => item.value === value)
        }, [items, value])

        return (
            <HCombobox onChange={onChange} onClose={() => setQuery('')}>
                <VStack gap="16" max>
                    <div
                        className={classNames(cls.inputBlock, mods, [
                            className,
                        ])}
                    >
                        <ComboboxInput
                            onChange={(event) => setQuery(event.target.value)}
                            displayValue={() => selectedItem?.value ?? ''}
                            className={cls.input}
                            ref={mergeRefs(inputRef, externalRef)}
                            {...restProps}
                            onBlur={onBlur}
                            onFocus={onFocus}
                        />
                        {placeholder && !value && (
                            <div
                                className={cls.placeholder}
                                onClick={onClickPlaceholder}
                            >
                                {placeholder}
                            </div>
                        )}
                    </div>

                    <ComboboxOptions
                        static
                        className={classNames(cls.options, {}, [cls.menu])}
                    >
                        {filteredItems &&
                            filteredItems.map((item) => (
                                <ComboboxOption
                                    key={item.value}
                                    value={item.value}
                                    as={Fragment}
                                >
                                    {({ focus, selected }) => {
                                        return (
                                            <HStack
                                                align="center"
                                                className={classNames(
                                                    cls.item,
                                                    {
                                                        [cls.active]: focus,
                                                        [cls.selected]:
                                                            selected,
                                                    },
                                                )}
                                            >
                                                <span>{item.content}</span>
                                                {selected}
                                            </HStack>
                                        )
                                    }}
                                </ComboboxOption>
                            ))}
                    </ComboboxOptions>
                </VStack>
            </HCombobox>
        )
    },
)

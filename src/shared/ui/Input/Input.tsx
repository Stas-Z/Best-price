import {
    InputHTMLAttributes,
    memo,
    Ref,
    useCallback,
    useRef,
    useState,
} from 'react'

import { Mods, classNames } from '@/shared/lib/classNames/classNames'
import { mergeRefs } from '@/shared/lib/mergeRefs/mergeRefs'

import cls from './Input.module.scss'
import { Text } from '../Text'

type HTMLInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'value' | 'readOnly' | 'placeholder' | 'required'
>

interface InputProps extends HTMLInputProps {
    className?: string
    value?: string | number
    readonly?: boolean
    placeholder?: string
    required?: boolean
    discription?: string
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        type = 'text',
        readonly,
        placeholder,
        required,
        discription,
        ...otherProps
    } = props

    const [isFocused, setIsFocused] = useState(false)

    const onBlur = () => {
        setIsFocused(false)
    }

    const onFocus = () => {
        setIsFocused(true)
    }

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
        [cls.readonly]: readonly,
        [cls.focused]: isFocused,
        [cls.required]: required,
    }

    return (
        <div className={classNames(cls.inputBlock, mods, [className])}>
            <input
                ref={mergeRefs(inputRef, externalRef)}
                type={type}
                className={cls.input}
                readOnly={readonly}
                onBlur={onBlur}
                onFocus={onFocus}
                {...restProps}
            />
            {placeholder && !value && (
                <Text
                    text={placeholder}
                    variant="grey"
                    size="m"
                    onClick={onClickPlaceholder}
                    className={cls.placeholder}
                />
            )}
        </div>
    )
})
Input.displayName = 'Input'

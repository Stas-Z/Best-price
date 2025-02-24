import {
    InputHTMLAttributes,
    memo,
    ReactNode,
    RefCallback,
    RefObject,
    useCallback,
    useRef,
    useState,
} from 'react'

import { Mods, classNames } from '@/shared/lib/classNames/classNames'

import cls from './Input.module.scss'

type HTMLInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'value' | 'readOnly' | 'placeholder' | 'required'
>

type InputVariant = 'otlined' | 'normal'

interface InputProps extends HTMLInputProps {
    className?: string
    value?: string | number
    readonly?: boolean
    variant?: InputVariant
    placeholder?: ReactNode
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
        variant = 'otlined',
        required,
        discription,
        ...otherProps
    } = props

    function mergeRefs<T>(
        ...refs: Array<React.Ref<T> | undefined>
    ): RefCallback<T> {
        return (value: T) => {
            refs.forEach((ref) => {
                if (typeof ref === 'function') {
                    ref(value)
                } else if (ref != null) {
                    ;(ref as RefObject<T | null>).current = value
                }
            })
        }
    }

    const [isFocused, setIsFocused] = useState(false)

    const onBlur = () => {
        setIsFocused(false)
    }

    const onFocus = () => {
        setIsFocused(true)
    }

    const inputRef = useRef<HTMLInputElement | null>(null)

    const { ref: externalRef, ...restProps } = otherProps as {
        ref?: RefObject<HTMLInputElement | null>
    }

    const onClickPlaceholder = useCallback(() => {
        if (inputRef.current) {
            inputRef.current.focus()
        }
    }, [])

    const mods: Mods = {
        [cls.readonly]: readonly,
        [cls.focused]: isFocused,
        [cls.placeholder]: Boolean(placeholder),
        [cls.required]: required,
    }

    return (
        <div
            className={classNames(cls.inputBlock, mods, [
                className,
                cls[variant],
            ])}
        >
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
                <div onClick={onClickPlaceholder} className={cls.placeholder}>
                    {placeholder}
                </div>
            )}
        </div>
    )
})
Input.displayName = 'Input'

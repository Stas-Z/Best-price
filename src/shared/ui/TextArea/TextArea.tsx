import React, {
    memo,
    Ref,
    TextareaHTMLAttributes,
    useCallback,
    useRef,
    useState,
} from 'react'

import { classNames, Mods } from '@/shared/lib/classNames/classNames'
import { mergeRefs } from '@/shared/lib/mergeRefs/mergeRefs'

import cls from './TextArea.module.scss'
import { Text } from '../Text/Text'

type HTMLTextarea = Omit<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    'value' | 'placeholder' | 'required'
>

interface TextareaProps extends HTMLTextarea {
    className?: string

    rows?: number
    value?: string | number
    placeholder?: string
    required?: boolean
}

export const Textarea = memo((props: TextareaProps) => {
    const {
        className,
        value,
        rows = 8,
        placeholder,
        required,
        ...otherProps
    } = props

    const [isFocused, setIsFocused] = useState(false)

    const onBlur = () => {
        setIsFocused(false)
    }

    const onFocus = () => {
        setIsFocused(true)
    }

    const textAreaRef = useRef<HTMLTextAreaElement | null>(null)

    const { ref: externalRef, ...restProps } = otherProps as {
        ref?: Ref<HTMLTextAreaElement>
    } & Record<string, unknown>

    const onClickPlaceholder = useCallback(() => {
        if (textAreaRef.current) {
            textAreaRef.current.focus()
        }
    }, [])

    const mods: Mods = {
        [cls.focused]: isFocused,
        [cls.placeholder]: Boolean(placeholder),
        [cls.required]: required,
    }

    return (
        <div className={classNames(cls.textBlock, mods, [className])}>
            <textarea
                ref={mergeRefs(textAreaRef, externalRef)}
                value={value}
                rows={rows}
                onBlur={onBlur}
                onFocus={onFocus}
                className={cls.textArea}
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

Textarea.displayName = 'Textarea'

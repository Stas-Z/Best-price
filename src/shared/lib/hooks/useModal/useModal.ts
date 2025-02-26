import { useCallback, useEffect, useRef, useState } from 'react'

interface useModalProps {
    onClose?: () => void
    isOpen?: boolean
    animationDelay: number
}

export function useModal(props: useModalProps) {
    const { onClose, animationDelay, isOpen } = props
    const [isMounted, setIsMounted] = useState(false)

    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

    useEffect(() => {
        if (isOpen) {
            setIsMounted(true)
        }
    }, [isOpen])

    const close = useCallback(() => {
        if (onClose) {
            onClose()
            timerRef.current = setTimeout(() => {
                setIsMounted(false)
            }, animationDelay)
        }
    }, [animationDelay, onClose])

    const onKeyDown = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                close()
            }
        },
        [close],
    )

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown)
            if (timerRef.current) {
                clearTimeout(timerRef.current)
            }
        }
        return () => {
            window.removeEventListener('keydown', onKeyDown)
        }
    }, [isOpen, onKeyDown])

    return {
        isMounted,
        close,
    }
}

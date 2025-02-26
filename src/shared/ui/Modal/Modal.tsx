import { ReactNode } from 'react'

import { Mods, classNames } from '@/shared/lib/classNames/classNames'
import { useModal } from '@/shared/lib/hooks/useModal/useModal'

import cls from './Modal.module.scss'
import { Overlay } from '../Overlay'
import { Portal } from '../Portal'

interface ModalProps {
    className?: string
    children?: ReactNode
    isOpen?: boolean
    onClose?: () => void
    lazy?: boolean
}

export const Modal = (props: ModalProps) => {
    const { className, children, isOpen, onClose, lazy } = props

    const { close, isMounted } = useModal({
        animationDelay: 300,
        isOpen,
        onClose,
    })

    const mods: Mods = {
        [cls.opened]: isOpen,
    }

    if (lazy && !isMounted) {
        return null
    }

    return (
        <Portal element={document.getElementById('app') ?? document.body}>
            <div className={classNames(cls.modal, mods, [className])}>
                <Overlay onClick={close} />
                <div className={cls.content}>{children}</div>
            </div>
        </Portal>
    )
}

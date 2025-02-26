import { memo } from 'react'

import Close from '@/shared/assets/icons/close.svg'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Icon } from '@/shared/ui/Icon'
import { Modal } from '@/shared/ui/Modal'

import cls from './AddNewModal.module.scss'

interface AddNewModalProps {
    className?: string
    isOpen: boolean
    onClose: () => void
}

export const AddNewModal = memo((props: AddNewModalProps) => {
    const { className, isOpen, onClose } = props

    return (
        <Modal
            className={classNames('', {}, [className])}
            isOpen={isOpen}
            onClose={onClose}
            lazy
        >
            Объявление успешно создано и отправлено на модерацию.
            <Icon
                Svg={Close}
                clickable
                onClick={onClose}
                width={30}
                height={30}
                className={cls.close}
            />
        </Modal>
    )
})
AddNewModal.displayName = 'AddNewModal'

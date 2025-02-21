import { memo } from 'react'

import { classNames } from '@/shared/lib/classNames/classNames'
import { Text } from '@/shared/ui/Text'

import cls from './BreadcrumbsListItem.module.scss'
import { BreadcrumbItem } from '../../model/types/breadcrumbsSchema'

interface BreadcrumbsListItemProps {
    className?: string
    breadcrumb: BreadcrumbItem
}

export const BreadcrumbsListItem = memo((props: BreadcrumbsListItemProps) => {
    const { className, breadcrumb } = props

    return (
        <div className={classNames(cls.breadcrumbsListItem, {}, [className])}>
            <Text text={breadcrumb.name} size="xs" variant="grey-light" />
        </div>
    )
})

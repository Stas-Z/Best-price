import { memo } from 'react'

import { classNames } from '@/shared/lib/classNames/classNames'
import { Text } from '@/shared/ui/Text'

import cls from './BreadcrumbsListItem.module.scss'
import { BreadcrumbItem } from '../../model/types/breadcrumbsSchema'

interface BreadcrumbsListItemProps {
    className?: string
    breadcrumb: BreadcrumbItem
    isLast: boolean
}

export const BreadcrumbsListItem = memo((props: BreadcrumbsListItemProps) => {
    const { className, breadcrumb, isLast } = props

    return (
        <li className={classNames(cls.breadcrumbsListItem, {}, [className])}>
            <Text text={breadcrumb.name} size="xxs" variant="greyLight" />
            {!isLast && <span className={cls.divider}> — </span>}
        </li>
    )
})

BreadcrumbsListItem.displayName = 'BreadcrumbsListItem'

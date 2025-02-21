import { memo } from 'react'

import { classNames } from '@/shared/lib/classNames/classNames'

import { BreadcrumbItem } from '../../model/types/breadcrumbsSchema'
import { BreadcrumbsListItem } from '../BreadcrumbsListItem/BreadcrumbsListItem'
import { HStack } from '@/shared/ui/Stack'
import cls from './BreadcrumbsList.module.scss'

interface BreadcrumbsProps {
    className?: string
}

export const BreadcrumbsList = memo((props: BreadcrumbsProps) => {
    const { className } = props

    const breadcrumbs: BreadcrumbItem[] = [
        { id: '1', name: 'Главная' },
        { id: '2', name: 'Шины, диски и колёса' },
    ]

    const renderBreadcrumbs = (breadcrumb: BreadcrumbItem) => {
        return (
            <BreadcrumbsListItem breadcrumb={breadcrumb} key={breadcrumb.id} />
        )
    }

    return (
        <HStack
            max
            gap="32"
            className={classNames(cls.breadcrumbs, {}, [className])}
        >
            {breadcrumbs.map((item) => renderBreadcrumbs(item))}
        </HStack>
    )
})

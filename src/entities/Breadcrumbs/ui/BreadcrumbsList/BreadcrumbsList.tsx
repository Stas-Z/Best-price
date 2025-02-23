import { memo } from 'react'

import { classNames } from '@/shared/lib/classNames/classNames'
import { HStack } from '@/shared/ui/Stack'

import { BreadcrumbItem } from '../../model/types/breadcrumbsSchema'
import { BreadcrumbsListItem } from '../BreadcrumbsListItem/BreadcrumbsListItem'

interface BreadcrumbsProps {
    className?: string
}

export const BreadcrumbsList = memo((props: BreadcrumbsProps) => {
    const { className } = props

    const breadcrumbs: BreadcrumbItem[] = [
        { id: '1', name: 'Главная' },
        { id: '2', name: 'Шины, диски и колёса' },
    ]

    const renderBreadcrumbs = (breadcrumb: BreadcrumbItem, index: number) => {
        return (
            <BreadcrumbsListItem
                breadcrumb={breadcrumb}
                key={breadcrumb.id}
                isLast={index === breadcrumbs.length - 1}
            />
        )
    }

    return (
        <nav className={classNames('', {}, [className])}>
            <HStack as={'ol'} max gap="4">
                {breadcrumbs.map((item, index) =>
                    renderBreadcrumbs(item, index),
                )}
            </HStack>
        </nav>
    )
})

BreadcrumbsList.displayName = 'BreadcrumbsList'

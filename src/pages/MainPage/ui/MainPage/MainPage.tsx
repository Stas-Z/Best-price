import { memo } from 'react'

import { classNames } from '@/shared/lib/classNames/classNames'

import cls from './MainPage.module.scss'

interface MainPageProps {
    className?: string
}

const MainPage = (props: MainPageProps) => {
    const { className } = props

    return (
        <div className={classNames(cls.mainPage, {}, [className])}>
            <div>Hello world</div>
        </div>
    )
}

export default memo(MainPage)

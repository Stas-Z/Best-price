import { memo } from 'react'


import { classNames } from '@/shared/lib/classNames/classNames'

import cls from './AdName.module.scss'

interface AdNameProps {
   className?: string
}

export const AdName = memo((props: AdNameProps) => {
   const { className } = props

   return (
      <div className={classNames(cls.adName, {}, [className])}>
         <div />
      </div>
   )
})
AdName.displayName = 'AdName'
import { useState, useEffect } from 'react'

interface useWindowWidthProps {
    minWidth?: number
    maxWidth?: number
}

const useWindowWidth = (props: useWindowWidthProps) => {
    const { maxWidth, minWidth } = props
    const [width, setWidth] = useState<number>(window.innerWidth)

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth)
        }

        // Добавляем обработчик события resize
        window.addEventListener('resize', handleResize)

        // Очистка при размонтировании компонента
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    // Проверка на минимальную ширину
    const isMinWidth = minWidth !== undefined ? width >= minWidth : true

    // Проверка на максимальную ширину
    const isMaxWidth = maxWidth !== undefined ? width <= maxWidth : true

    // Возвращаем true, если выполняются оба условия minWidth и maxWidth
    return isMinWidth && isMaxWidth
}

export default useWindowWidth

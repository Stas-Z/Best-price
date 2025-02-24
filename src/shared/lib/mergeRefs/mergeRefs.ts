import { RefCallback, RefObject } from 'react'

export function mergeRefs<T>(
    ...refs: Array<React.Ref<T> | undefined>
): RefCallback<T> {
    return (value: T) => {
        refs.forEach((ref) => {
            if (typeof ref === 'function') {
                ref(value)
            } else if (ref != null) {
                ;(ref as RefObject<T | null>).current = value
            }
        })
    }
}

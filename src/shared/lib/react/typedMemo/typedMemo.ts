import { memo } from 'react'

/**
 * @description typedMemo is a wrapper around React.memo that allows you to pass
 * generic types to the component.
 */
export const typedMemo: <T>(Component: T) => T = memo

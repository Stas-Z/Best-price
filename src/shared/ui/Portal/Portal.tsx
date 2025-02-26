import { ReactNode } from 'react'

import { createPortal } from 'react-dom'

interface PortalProps {
  /**
   * @description Portal content
   */
  children?: ReactNode
  /**
   * @description The element where the portal is rendered
   */
  element?: HTMLElement
}

export const Portal = (props: PortalProps) => {
  const { children, element = document.body } = props
  return createPortal(children, element)
}


import { ReactNode } from 'react'

type Props = {
  children: ReactNode,
  isOpen: boolean,
  wrapperClassName?: string
}

/**
 * Uses css grid to animate element from 0 to auto height
 */
const SimpleCollapse = ({ children, isOpen, wrapperClassName }: Props) => {
  return (
    <div className='simple-collapse' aria-hidden={!isOpen}>
      <div className={wrapperClassName}>{children}</div>
    </div>
  )
}

export default SimpleCollapse

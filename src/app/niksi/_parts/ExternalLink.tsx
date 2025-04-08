import { ReactNode } from 'react'
import Link from 'next/link'

export const ExternalLink = ({ children, href }: { children: ReactNode, href: string }) => (
  <Link
    href={href}
    className='text-[#44ace2] hover:bg-[#44ace2] hover:text-white transition-colors'
    target='_blank'
    rel='noopener noreferrer'
  >
    {children}
  </Link>
)

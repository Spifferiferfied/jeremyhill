'use client'

import { HeaderLinkProps } from '@/types/HeaderLinkProps'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function HeaderLink({ href, children, className }: HeaderLinkProps) {
  const pathname = usePathname()

  return (
    <Link className={ `${ className } ${ pathname === href ? 'active' : '' }` } href={ href }>
      { children }
    </Link>
  )
}

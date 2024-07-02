'use client'

import { HeaderLinkProps } from '@/types/HeaderLinkProps'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function HeaderLink({ href, children }: HeaderLinkProps) {
  const pathname = usePathname()

  return (
    <Link className={ `p-4 block ${ pathname === href ? 'active' : '' }` } href={ href }>
      { children }
    </Link>
  )
}

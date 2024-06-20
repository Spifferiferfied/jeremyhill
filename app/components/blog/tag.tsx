import { TagProps } from '@/types/Category'
import Link from 'next/link'

export default function Tag({ title, name, className = '' }: TagProps) {
  return (
    <Link
      href={ `/blog/categories/${ name }` }
      className={ `inline-block px-2 mb-2 no-underline text-white font-heading tag-${ name } ${ className }` }
    >
      {title}
    </Link>
  )
}

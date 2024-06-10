import { TagProps } from "@/types/Tag"

export default function Tag({ title }: TagProps) {
  return (
    <a href={ `/categories/${ title.toLowerCase() }` } className={ `inline-block px-2 mb-2 no-underline text-white font-heading tag-${ title.toLowerCase()}` }>{ title }</a>
  )
}

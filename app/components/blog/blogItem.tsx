import { BlogItemProps } from '@/types/BlogItemProps'

export default function BlogItem({ blogPost, side = 'left' }: BlogItemProps) {
  return (
    <li className={ `w-full relative over p-4 mb-8 flex flex-col md:flex-row drop-shadow-md blog-item-${ blogPost.category.name.current } ${ side === 'left' ? '' : 'md:justify-end' }` } />
  )
}

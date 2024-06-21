import Image from 'next/image'
import { BlogItemProps } from '@/types/BlogItemProps'
import { urlFor } from '@/lib/portableTextUtils'

export default function BlogItem({ blogPost, side = 'left' }: BlogItemProps) {
  return (
    <li className={ `w-full relative over p-4 mb-8 flex flex-col md:flex-row drop-shadow-md blog-item-${ blogPost.category.name.current } ${ side === 'left' ? '' : 'md:justify-end' }` }>
      <Image
        fill
        src={ urlFor(blogPost.mainImage).width(1500).height(500).url() }
        className="md:object-cover object-contain md:inline-block hidden"
        alt={ blogPost.mainImage.alt }
      />
      <Image
        height={ 1500 }
        width={ 1500 }
        src={ urlFor(blogPost.mainImage).width(1500).height(1500).url() }
        className="md:object-cover object-contain md:hidden absolute top-0 left-0"
        alt={ blogPost.mainImage.alt }
      />
      <article className="md:w-2/5 2xl:w-1/5 relative text-white p-4 md:-mt-8 mt-44 drop-shadow-2xl" />
    </li>
  )
}

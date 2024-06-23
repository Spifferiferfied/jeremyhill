import Image from 'next/image'
import { BlogItemProps } from '@/types/BlogItemProps'
import Tag from '@/components/blog/tag'
import { PortableText } from '@portabletext/react'
import { urlFor, ptComponents } from '@/lib/portableTextUtils'
import Link from 'next/link'

export default function BlogItem({ blogPost, side = 'left' }: BlogItemProps) {
  return (
    <li
      className={ `w-full relative over p-4 mb-8 flex flex-col md:flex-row drop-shadow-md blog-item-${ blogPost.category.name.current } ${ side === 'left' ? '' : 'md:justify-end' }` }
    >
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
      <article className="md:w-2/5 2xl:w-1/4 xl:w-1/3 relative text-white p-4 md:-mt-8 mt-44 drop-shadow-2xl">
        <Tag title={ blogPost.category.title } name={ blogPost.category.name.current } />
        <h2 className="font-heading text-3xl font-bold mb-2">
          <Link
            href={ `/blog/${ blogPost.slug.current }` }
            className="text-white no-underline hover:underline"
          >
            { blogPost.title }
          </Link>
        </h2>
        <div className="leading-6 mb-4">
          { blogPost.blurb && <PortableText value={ blogPost.blurb } components={ ptComponents } /> }
        </div>
        <Link
          className="text-sm inline-block px-2 py-1 read-more float-right hover:underline no-underline text-white"
          href={ `/blog/${ blogPost.slug.current }` }
        >
          Read More...
        </Link>
      </article>
    </li>
  )
}

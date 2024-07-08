import Image from 'next/image'
import { BlogItemProps } from '@/types/BlogItemProps'
import Tag from '@/components/blog/tag'
import { PortableText } from '@portabletext/react'
import { urlFor, ptComponents } from '@/lib/portableTextUtils'
import Link from 'next/link'

export default function BlogItem({ blogPost, side = 'left' }: BlogItemProps) {
  return (
    <li
      className={ `w-full relative p-4 mb-8 flex flex-col md:flex-row drop-shadow-md blog-item-${ blogPost.category.name.current } ${ side === 'left' ? '' : 'md:justify-end' }` }
    >

      <Link
        href={ `/blog/${ blogPost.slug.current }` }
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
      </Link>
      <article className="md:w-2/5 2xl:w-1/4 xl:w-1/3relative md:-mt-8 mt-44 drop-shadow-2xl ">
        <Tag className="mt-4 ms-4" title={ blogPost.category.title } name={ blogPost.category.name.current } />
        <Link className="no-underline flex flex-col justify-start items-start p-4 lg:min-h-[400px] min-h-[75vw] md:min-h-[300px]" href={ `/blog/${ blogPost.slug.current }` }>
          <h2 className="font-heading text-3xl font-bold mb-2 hover:underline">
            { blogPost.title }
          </h2>
          <div className="leading-6 mb-4 flex-grow">
            { blogPost.blurb && <PortableText value={ blogPost.blurb } components={ ptComponents } /> }
          </div>
          <div
            className="text-sm inline-block px-2 py-1 read-more float-right no-underline self-end place-self-end"
          >
            Read More...
          </div>
        </Link>
      </article>
    </li>
  )
}

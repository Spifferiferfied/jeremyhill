import Image from "next/image"
import { BlogItemProps } from "@/types/BlogItemProps"
import imageUrlBuilder from '@sanity/image-url'
import { PortableText } from '@portabletext/react'
import Tag from '@/components/blog/tag'
import { client } from "@/lib/sanityClient"

function urlFor (source :any ) {
  return imageUrlBuilder(client).image(source)
}

const ptComponents = {
  types: {
    image: ({ value } : any) => {
      if (!value?.asset?._ref) {
        return null
      }
      return (
        <Image src={ urlFor( value ).width( 320 ).height( 240 ).fit( 'max' ).auto( 'format' ).url() }  alt={ value.alt || ' ' } />
      )
    }
  }
}

export function BlogItem({ blogPost , side = "left" }: BlogItemProps) {
  return (
    <li className={ `w-full relative over p-4 mb-8 flex flex-col md:flex-row blog-item-${ blogPost.tag.toLowerCase() } ${ side === 'left' ? '' : 'md:justify-end'}` }>
      <Image fill src={ urlFor(blogPost.mainImage).width(8000).url() } className="md:object-cover object-contain" alt={ blogPost.mainImage.alt } />
      <article className="md:w-2/5 2xl:w-1/5 relative text-white p-4 md:-mt-8 mt-32">
        <Tag title={ blogPost.tag } />
        <h2 className="font-heading text-3xl font-bold mb-2">
          <a href={ `/blog/${ blogPost.slug.current }` } className="text-white no-underline hover:underline">{ blogPost.title }</a>
        </h2>
        <div className="leading-6 mb-4">
          <PortableText value={ blogPost.blurb } components={ ptComponents } />
        </div>
        <a className="text-sm inline-block px-2 py-1 read-more float-right hover:underline no-underline text-white" href={ `/blog/${ blogPost.slug.current }` }>Read More...</a>
      </article>
    </li>
  )
}

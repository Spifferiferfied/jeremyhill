import { client, getPost } from "@/lib/sanityClient"
import imageUrlBuilder from '@sanity/image-url'
import { PortableText } from '@portabletext/react'
import Tag from '@/components/blog/tag'
import DateTag from "@/components/dateTag"
import Image from "next/image"
import { Key } from "react"
import { notFound } from 'next/navigation'

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

export async function generateStaticParams() {
  const paths = await client.fetch(
    `*[_type == "post" && defined(slug.current)][].slug.current`
  )
  return paths.map(( slug: String ) => ({ params: { slug } }))
}

export default async function Post({ params }: any ) {
  const post = await getPost((params?.slug))
  post || notFound()
  const { title , tags, mainImage, body, date } = post
  return (
    <main className="container mx-auto w-full">
      <article className="md:w-1/2 mx-auto">
        <h1 className="font-bold text-4xl font-heading mb-4 mt-16">{ title }</h1>
        <div className="flex flex-row justify-between items-middle mb-2">
          { tags && (
            <div className="tags flex flex-row justify-between items-end">
              {
                tags.map( ( tag : String ) => {
                  return (
                    <Tag title={ tag } key={ tag as Key } />
                  )
                })
              }
            </div>
            )
          }
          { date && <DateTag className="text-sm" dateTime={ date } formatString={ "E MMM do, yyyy" } /> }
        </div>
        { mainImage && (
          <div>
            <Image src={ urlFor(mainImage).width(5000).url() } className="mb-4" height={ 500 } width={ 1000 } alt={ mainImage.alt } />
          </div>
        )}
        { body && (
          <PortableText value={ body } components={ ptComponents } />
        )}
      </article>
    </main>
  )
}

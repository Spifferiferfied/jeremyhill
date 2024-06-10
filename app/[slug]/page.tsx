import { client, getPage } from '@/lib/sanityClient'
import imageUrlBuilder from '@sanity/image-url'
import { PortableText } from '@portabletext/react'
import Image from 'next/image'
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
    `*[_type == "page" && defined(slug.current)][].slug.current`
  )
  return paths.map(( slug: String ) => ({ params: { page: slug } }))
}

export default async function Page({ params }: any ) {
  const page = await getPage((params?.slug))
  page || notFound()
  const { title, body } = page
  return (
    <main className="container mx-auto w-full">
      <div className="md:w-1/2 mx-auto mb-6">
        <h1 className="text-center mt-6 mb-4 font-bold text-4xl font-heading">{ title }</h1>
        { body && (
          <PortableText value={ body } components={ ptComponents } />
        )}
      </div>
    </main>
  )
}

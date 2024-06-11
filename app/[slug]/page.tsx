import { client, getPage } from '@/lib/sanityClient'
import { PortableText } from '@portabletext/react'
import { notFound } from 'next/navigation'
import { ptComponents } from '@/lib/portableTextUtils'

export async function generateStaticParams() {
  const paths = await client.fetch(
    `*[_type == "page" && defined(slug.current)][].slug.current`
  )
  return paths.map(( slug: String ) => ({ params: { page: slug } }))
}

export default async function Page({ params }: any ) {
  const page = await getPage((params?.slug))
  page || notFound();
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

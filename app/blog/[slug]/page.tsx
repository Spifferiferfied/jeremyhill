import { client, getPost } from '@/lib/sanityClient'
import { PortableText } from '@portabletext/react'
import { urlFor, ptComponents } from '@/lib/portableTextUtils'
import Tag from '@/components/blog/tag'
import { Category } from '@/types/Category'
import DateTag from '@/components/dateTag'
import Image from 'next/image'
import { Key } from 'react'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  const paths = await client.fetch(
    `*[_type == "post" && defined(slug.current)][].slug.current`,
  )
  return paths.map((slug: String) => ({ params: { slug } }))
}

export default async function Post({ params }: any) {
  const post = await getPost(params?.slug)
  post || notFound()
  const { title, category, subCategories, mainImage, body, date } = post
  return (
    <main className="container mx-auto w-full">
      <article className="xl:w-1/2 mx-auto">
        <h1 className="font-bold text-4xl font-heading mb-4 mt-16 px-4 md:px-0">{title}</h1>
        <div className="md:flex md:flex-row flex-wrap justify-between items-middle mb-2 px-4 md:px-0">
          <div className="category flex flex-row justify-between items-end">
            { category && ( <Tag title={ category.title } name={ category.name?.current } className="me-3 md:mb-0"/> )
            }
            { subCategories &&
                 subCategories.map(( category: Category ) => {
                  return <Tag title={ category.title } name={ category.name?.current } key={ category.name?.current } className="me-3 md:mb-0" />
                })
            }
          </div>
          { date && (
            <DateTag
              className="text-sm float-right mb-4 md:mb-0"
              dateTime={date}
              formatString={'E MMM do, yyyy'}
            />
          ) }
        </div>
        {mainImage && (
          <div>
            <Image
              src={urlFor(mainImage).width(1500).url()}
              className="mb-4 w-full"
              height={1000}
              width={1000}
              alt={mainImage.alt}
            />
          </div>
        )}
        <div className="px-4 md:px-0">
          {body && <PortableText value={body} components={ptComponents} />}
        </div>
      </article>
    </main>
  )
}

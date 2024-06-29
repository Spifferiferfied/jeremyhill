import { Suspense } from 'react'
import { client, getGallery } from '@/lib/sanityClient'
import { PortableText } from '@portabletext/react'
import { ptComponents } from '@/lib/portableTextUtils'
import { Category } from '@/types/Category'
import { SanityGallery, SanityGalleryImage } from '@/types/SanityGallery'
import DateTag from '@/components/dateTag'
import Tag from '@/components/blog/tag'
import GalleryImage from '@/components/gallery/galleryImage'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  const paths = await client.fetch(
    `*[_type == "gallery" && defined(slug.current)][].slug.current`,
  )
  return paths.map((slug: string) => ({ params: { slug } }))
}

export default async function Gallery({ params }: { params: { slug: string } }) {
  const gallery: SanityGallery = await getGallery(params?.slug)
  if (!gallery) notFound()
  const { title, category, subCategories, galleryImages, description, date } = gallery
  return (
    <main className="container mx-auto w-full">
      <h1 className="font-bold text-4xl font-heading mb-4 mt-16 px-4 md:px-0">{title}</h1>
      <div className="md:flex md:flex-row flex-wrap justify-between items-middle mb-2 px-4 md:px-0">
        <div className="category flex flex-row justify-between items-end">
          { category && (<Tag title={ category.title } name={ category.name?.current } className="me-3 md:mb-0" />)}
          { subCategories
          && subCategories.map((subCategory: Category) => <Tag title={ subCategory.title } name={ subCategory.name?.current } key={ subCategory.name?.current } className="me-3 md:mb-0" />)}
        </div>
        { date && (
          <DateTag
            className="text-sm float-right mb-4 md:mb-0"
            dateTime={ date }
            formatString="E MMM do, yyyy"
          />
        ) }
      </div>
      <div className="px-4 md:px-0">
        {description && <PortableText value={ description } components={ ptComponents } />}
      </div>
      <div className="image-gallery flex flex-row flex-wrap justify-stretch items-center mx-auto w-full px-4 md:px-0">
        { galleryImages.length > 0
        && galleryImages.map((image: SanityGalleryImage) => (
          <Suspense key={ image._key }>
            <GalleryImage image={ image } />
          </Suspense>
        ))}
      </div>
    </main>
  )
}

import imageUrlBuilder from '@sanity/image-url'
import Image from 'next/image'
import { client } from '@/lib/sanityClient'
import { PortableTextComponents } from '@portabletext/react'
import { SanityInlineImage } from '@/types/SanityInlineImage'
import { ReactNode } from 'react'
import CodeBlock from '@/components/blog/codeBlock'
import { SanityCodeBlock } from '@/types/SanityTypes'
import { SanityGallery } from '@/types/SanityGallery'
import Link from 'next/link'

const builder = imageUrlBuilder(client)

export function urlFor(source: SanityInlineImage) {
  return builder.image(source)
}

const imageComponent = ({ value }: { value: SanityInlineImage }) => {
  if (!value?.asset?._ref) {
    return null
  }
  return (
    <div className={ `${ value?.float ? `float-${ value.float }` : '' }` }>
      <Image
        src={ urlFor(value).width(value?.width || 1500).fit('max').auto('format').url() }
        alt={ value.alt || ' ' }
        width={ value?.width || 1500 }
        height={ value?.width || 1500 }
        className="mb-2"
      />
      <figcaption className="mb-6 font-bold text-center">{ value.caption }</figcaption>
    </div>
  )
}
const inlineCodeComponent = ({ children }: { children: ReactNode }) => (
  <code className="bg-grey-900 text-white relative rounded p-1">
    { children }
  </code>
)
const codeBlockComponent = ({ value }: { value: SanityCodeBlock }) => (
  <CodeBlock value={ value } />
)

const galleryComponent = ({ value }: { value: SanityGallery }) => (
  <div className="gallery-block mb-4 mx-auto max-w-[50%]">
    <h2 className="font-heading mb-4 text-3xl">{ value.title }</h2>
    <Link href={ `/galleries/${ value.slug.current }` }>
      <Image
        src={ urlFor(value.coverImage).dpr(2).auto('format').url() }
        alt={ value.coverImage.alt || ' ' }
        width={ 500 }
        height={ 500 }
        className="thumb in-block mb-2 h hover:brightness-50 hover:cursor-pointer"
      />
    </Link>
  </div>
)

export const ptComponents: PortableTextComponents = {
  block: {
    normal: ({ children }) => <p className="mb-4 max-w-prose mx-auto">{ children }</p>,
    h2: ({ children }) => <div className="max-w-prose mx-auto"><h2 className="mb-4 font-heading text-3xl">{ children }</h2></div>,
    h3: ({ children }) => <div className="max-w-prose mx-auto"><h3 className="mb-4 font-heading text-2xl">{ children }</h3></div>,
    h4: ({ children }) => <div className="max-w-prose mx-auto"><h4 className="mb-4 font-heading text-xl">{ children }</h4></div>,
  },
  marks: {
    code: inlineCodeComponent,
  },
  types: {
    image: imageComponent,
    codeBlock: codeBlockComponent as never,
    gallery: galleryComponent as never,
  },
}
export const ptComponentsNoWidth: PortableTextComponents = {
  block: {
    normal: ({ children }) => <p className="mb-4 ">{ children }</p>,
    h2: ({ children }) => <h2 className="mb-4 font-heading text-3xl">{ children }</h2>,
    h3: ({ children }) => <h3 className="mb-4 font-heading text-2xl">{ children }</h3>,
    h4: ({ children }) => <h4 className="mb-4 font-heading text-xl">{ children }</h4>,
  },
  marks: {
    code: inlineCodeComponent,
  },
  types: {
    image: imageComponent,
    codeBlock: codeBlockComponent as never,
    gallery: galleryComponent as never,
  },
}

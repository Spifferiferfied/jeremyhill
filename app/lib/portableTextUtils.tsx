import imageUrlBuilder from '@sanity/image-url'
import Image from 'next/image'
import { client } from '@/lib/sanityClient'
import { PortableTextComponents } from '@portabletext/react'

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}

const imageComponent = ({ value }: { value: any }) => {
  if (!value?.asset?._ref) {
    return null
  }
  console.log(value)
  return (
    <div className={ `${ value?.float ? `float-${ value.float }` : '' }` } >
      <Image
        src={ urlFor(value).width( value?.width || 1500 ).fit('max').auto('format').url() }
        alt={ value.alt || ' ' }
        width={ value?.width || 1500 }
        height={ value?.width || 1500 }
        className={ `mb-2` }
      />
      <figcaption className="mb-6 font-bold text-center">{ value.caption }</figcaption>
    </div>
  )
}

export const ptComponents: PortableTextComponents = {
  block: {
    normal: ({ children }: any) => {
      return <p className="mb-4">{ children }</p>;
    },
    h2: ({ children }) => {
      return <h2 className="mb-4 font-heading text-3xl">{ children }</h2>
    },
    h3: ({ children }) => {
      return <h3 className="mb-4 font-heading text-2xl">{ children }</h3>
    },
  },
  types: {
    image: imageComponent,
  },
}

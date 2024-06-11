import imageUrlBuilder from '@sanity/image-url'
import Image from 'next/image'
import { client } from '@/lib/sanityClient'
import { PortableTextComponents } from '@portabletext/react'

export function urlFor(source: any) {
  return imageUrlBuilder(client).image(source)
}

const imageComponent = ({ value }: { value: any }) => {
  if (!value?.asset?._ref) {
    return null
  }
  return (
    <Image
      src={urlFor(value).width(320).height(240).fit('max').auto('format').url()}
      alt={value.alt || ' '}
    />
  )
}

export const ptComponents: PortableTextComponents = {
  types: {
    image: imageComponent,
  },
}

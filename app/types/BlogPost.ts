import { BlockContent, SanityImageCrop, SanityImageHotspot, Slug, internalGroqTypeReferenceTo } from './SanityTypes'

export interface BlogPost {
  _id: string
  _type: 'post'
  _createdAt: string
  _updatedAt: string
  _rev: string
  title: string
  slug: Slug
  mainImage: {
    asset?: {
      _ref: string
      _type: 'reference'
      _weak?: boolean
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
    }
    hotspot?: SanityImageHotspot
    crop?: SanityImageCrop
    alt: string
    caption?: string
    _type: 'image'
  }
  category: {
    _ref: string
    _type: 'reference'
    _weak?: boolean
    title: string
    name: Slug
    [internalGroqTypeReferenceTo]?: 'category'
  }
  subCategories: Array<{
    _ref: string
    _type: 'reference'
    _weak?: boolean
    _key: string
    title: string
    name: Slug
    [internalGroqTypeReferenceTo]?: 'category'
  }>
  publishedAt?: string
  body?: BlockContent
  blurb?: string
}

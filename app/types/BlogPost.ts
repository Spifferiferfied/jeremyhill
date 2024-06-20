import { Category } from './Category'
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
  category: Category
  subCategories: Array<Category>
  date?: string
  publishedAt?: string
  body?: BlockContent
  blurb?: string
}
